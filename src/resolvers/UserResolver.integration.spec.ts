import createTestClient from 'supertest';
import { getConnectionOptions, createConnection, getConnection } from 'typeorm';
import { getExpressServer } from '../express-server';
import UserSession from '../models/UserSession';
import User from '../models/User';
import Article from '../models/Article';
import Community from '../models/Community';
import Diploma from '../models/Diploma';
import Experience from '../models/Experience';
import ContentField from '../models/ContentField';
import LikeArticle from '../models/LikeArticle';
import CommentaireArticle from '../models/Commentaire_Article';

describe('User resolvers', () => {
  let testClient;

  beforeEach(async () => {
    const connectionOptions = await getConnectionOptions();
    await createConnection({
      ...connectionOptions,
      dropSchema: true,
      entities: [
        User,
        UserSession,
        Article,
        Community,
        Diploma,
        Experience,
        ContentField,
        LikeArticle,
        CommentaireArticle,
      ],
      synchronize: true,
      logging: false,
    });

    const { expressServer } = await getExpressServer();

    testClient = createTestClient(expressServer);
  });

  afterEach(() => {
    const conn = getConnection();
    return conn.close();
  });

  describe('query me', () => {
    let user;

    beforeEach(async () => {
      user = User.create({
        pseudo: 'jesus',
        password: 'ilovedevil',
        email: 'jesus@god.com',
        bio: 'hell yeah',
      });
      await user.save();
    });

    describe('when user is not authenticated', () => {
      it('returns error', async () => {
        const response = await testClient.post('/graphql').send({
          query: `{
          me {
            pseudo
            userID
          }
        }
        `,
        });
        expect(response.text).toMatch('You are not authenticated.');
      });
    });

    describe('when user is authenticated', () => {
      it('returns user', async () => {
        const currentUserSession = UserSession.create({ user: user });
        await currentUserSession.save();

        const response = await testClient
          .post('/graphql')
          .set('Cookie', [`sessionId=${currentUserSession.uuid}`])
          .send({
            query: `{
              me {
                pseudo
              }
            }
          `,
          });

        expect(JSON.parse(response.text).data).toEqual({
          me: {
            pseudo: user.pseudo,
          },
        });
      });
    });
  });

  describe('mutation createUser', () => {
    it('creates and returns a new user', async () => {
      const response = await testClient.post('/graphql').send({
        query: `mutation {
        signIn(
          data: {
            pseudo: "jesus"
            password: "ilovedevil"
            email: "jesus@god.com"
          }
        ) {
          userID
          pseudo
          email
        }
      }
      `,
      });

      expect(await User.count({})).toEqual(1);
      expect(JSON.parse(response.text).data).toEqual({
        signIn: {
          userID: '1',
          pseudo: 'jesus',
          email: 'jesus@god.com',
        },
      });
    });
  });

  describe('mutation createSession', () => {
    describe('when email does not match existing user email', () => {
      it('returns error', async () => {
        const response = await testClient.post('/graphql').send({
          query: `mutation {
            createSession(input: {
              email: "jesus@god.com",
              password: "ilovedevil",
              rememberMe:false
            }) {
              userID
              pseudo
            }
          }
          `,
        });
        expect(response.text).toMatch('Incorrect email and/or password.');
      });
    });

    describe('when email matches existing email', () => {
      let user;
      beforeEach(async () => {
        user = User.create({
          pseudo: 'jesus',
          password: 'ilovedevil',
          email: 'jesus@god.com',
          bio: 'hell yeah',
        });
        await user.save();
      });

      describe('when password does not match user password', () => {
        it('returns error', async () => {
          const response = await testClient.post('/graphql').send({
            query: `mutation {
              createSession(input: {
                email: "jesus@devil.com",
                password: "ihatedevil",
                rememberMe:false
              }) {
                userID
                pseudo
              }
            }
            `,
          });
          expect(response.text).toMatch('Incorrect email and/or password.');
        });
      });

      describe('when password matches email & password', () => {
        it('creates user session and sets cookie with user session ID', async () => {
          const response = await testClient.post('/graphql').send({
            query: `mutation {
              createSession(input: {
                email: "jesus@god.com",
                password: "ilovedevil",
                rememberMe:true
              }) {
                userID
                pseudo
              }
            }
            `,
          });

          expect(JSON.parse(response.text).data.createSession).toEqual({
            userID: '1',
            pseudo: 'jesus',
          });

          const userSession = await UserSession.findOneOrFail({
            user: user.userID,
          });
          const cookie = response.header['set-cookie'][0];
          expect(cookie).toMatch(`sessionId=${userSession.uuid}`);
          expect(cookie).toMatch(`Max-Age=3000000`);
          expect(cookie).toMatch(`HttpOnly`);
          expect(cookie).toMatch(`SameSite=Strict`);
        });
      });
    });
  });
});
