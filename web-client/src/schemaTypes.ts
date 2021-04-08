/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateArticle
// ====================================================

export interface CreateArticle_createArticle_contentFields {
  __typename: "ContentField";
  content: string;
}

export interface CreateArticle_createArticle {
  __typename: "Article";
  articleID: string;
  userID: string;
  date: any;
  contentFields: CreateArticle_createArticle_contentFields[];
}

export interface CreateArticle {
  createArticle: CreateArticle_createArticle;
}

export interface CreateArticleVariables {
  data: CreateArticleInput;
  fields: CreateContentFieldInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Articles
// ====================================================

export interface Articles_articles_likesArticle_user {
  __typename: "User";
  userID: string;
}

export interface Articles_articles_likesArticle {
  __typename: "LikeArticle";
  likeID: string;
  user: Articles_articles_likesArticle_user;
}

export interface Articles_articles_user {
  __typename: "User";
  pseudo: string;
}

export interface Articles_articles_contentFields {
  __typename: "ContentField";
  content: string;
  contentType: string;
  placeNumber: number;
}

export interface Articles_articles_commentairesArticle_user {
  __typename: "User";
  userID: string;
}

export interface Articles_articles_commentairesArticle {
  __typename: "CommentaireArticle";
  user: Articles_articles_commentairesArticle_user;
}

export interface Articles_articles {
  __typename: "Article";
  articleID: string;
  likesArticle: Articles_articles_likesArticle[];
  date: any;
  title: string;
  description: string;
  user: Articles_articles_user;
  contentFields: Articles_articles_contentFields[];
  commentairesArticle: Articles_articles_commentairesArticle[];
}

export interface Articles {
  articles: Articles_articles[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OneArticle
// ====================================================

export interface OneArticle_oneArticle_likesArticle_user {
  __typename: "User";
  userID: string;
}

export interface OneArticle_oneArticle_likesArticle {
  __typename: "LikeArticle";
  likeID: string;
  user: OneArticle_oneArticle_likesArticle_user;
}

export interface OneArticle_oneArticle_user {
  __typename: "User";
  pseudo: string;
}

export interface OneArticle_oneArticle_contentFields {
  __typename: "ContentField";
  contentFieldID: string;
  contentType: string;
  content: string;
  placeNumber: number;
}

export interface OneArticle_oneArticle_commentairesArticle_user {
  __typename: "User";
  userID: string;
  pseudo: string;
}

export interface OneArticle_oneArticle_commentairesArticle {
  __typename: "CommentaireArticle";
  contentFieldID: string;
  commentaire: string;
  date: any;
  user: OneArticle_oneArticle_commentairesArticle_user;
}

export interface OneArticle_oneArticle {
  __typename: "Article";
  likesArticle: OneArticle_oneArticle_likesArticle[];
  articleID: string;
  title: string;
  description: string;
  date: any;
  user: OneArticle_oneArticle_user;
  contentFields: OneArticle_oneArticle_contentFields[];
  commentairesArticle: OneArticle_oneArticle_commentairesArticle[];
}

export interface OneArticle {
  oneArticle: OneArticle_oneArticle;
}

export interface OneArticleVariables {
  articleID: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createComment
// ====================================================

export interface createComment_createCommentaireArticle_article {
  __typename: "Article";
  articleID: string;
}

export interface createComment_createCommentaireArticle {
  __typename: "CommentaireArticle";
  article: createComment_createCommentaireArticle_article;
  commentaire: string;
  date: any;
}

export interface createComment {
  createCommentaireArticle: createComment_createCommentaireArticle;
}

export interface createCommentVariables {
  articleID: string;
  date: any;
  commentaire: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeArticle
// ====================================================

export interface LikeArticle_likeArticle_user {
  __typename: "User";
  userID: string;
}

export interface LikeArticle_likeArticle {
  __typename: "LikeArticle";
  likeID: string;
  user: LikeArticle_likeArticle_user;
}

export interface LikeArticle {
  likeArticle: LikeArticle_likeArticle;
}

export interface LikeArticleVariables {
  articleID: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DislikeArticle
// ====================================================

export interface DislikeArticle {
  dislikeArticle: boolean;
}

export interface DislikeArticleVariables {
  articleID: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewComment
// ====================================================

export interface NewComment_newComment_user {
  __typename: "User";
  userID: string;
  pseudo: string;
}

export interface NewComment_newComment {
  __typename: "CommentaireArticle";
  contentFieldID: string;
  commentaire: string;
  date: any;
  user: NewComment_newComment_user;
}

export interface NewComment {
  newComment: NewComment_newComment;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewLike
// ====================================================

export interface NewLike_newLike_user {
  __typename: "User";
  userID: string;
}

export interface NewLike_newLike {
  __typename: "LikeArticle";
  likeID: string;
  user: NewLike_newLike_user;
}

export interface NewLike {
  newLike: NewLike_newLike;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RemoveLike
// ====================================================

export interface RemoveLike_removeLike_user {
  __typename: "User";
  userID: string;
}

export interface RemoveLike_removeLike {
  __typename: "LikeArticle";
  likeID: string;
  user: RemoveLike_removeLike_user;
}

export interface RemoveLike {
  removeLike: RemoveLike_removeLike;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateExperiences
// ====================================================

export interface CreateExperiences_createExperiences {
  __typename: "Experience";
  jobName: string | null;
}

export interface CreateExperiences {
  createExperiences: CreateExperiences_createExperiences[];
}

export interface CreateExperiencesVariables {
  experiences: CreateExperienceInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadAvatar
// ====================================================

export interface UploadAvatar_uploadAvatar {
  __typename: "Picture";
  id: string | null;
  extension: string | null;
}

export interface UploadAvatar {
  uploadAvatar: UploadAvatar_uploadAvatar;
}

export interface UploadAvatarVariables {
  file: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSession
// ====================================================

export interface CreateSession_createSession {
  __typename: "User";
  pseudo: string;
  userID: string;
}

export interface CreateSession {
  createSession: CreateSession_createSession;
}

export interface CreateSessionVariables {
  input: CreateSessionInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  pseudo: string;
  userID: string;
}

export interface Me {
  me: Me_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================

export interface SignIn_signIn {
  __typename: "User";
  pseudo: string;
  email: string;
  phoneNumber: string | null;
  age: number | null;
  city: string | null;
  bio: string | null;
}

export interface SignIn {
  signIn: SignIn_signIn;
}

export interface SignInVariables {
  data: CreateUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSession
// ====================================================

export interface DeleteSession_deleteSession {
  __typename: "User";
  userID: string;
}

export interface DeleteSession {
  deleteSession: DeleteSession_deleteSession;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllUsers
// ====================================================

export interface AllUsers_allUsers {
  __typename: "User";
  pseudo: string;
  email: string;
}

export interface AllUsers {
  allUsers: AllUsers_allUsers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateArticleInput {
  title: string;
  date: any;
  description: string;
}

export interface CreateContentFieldInput {
  contentType: string;
  content: string;
  placeNumber: number;
}

export interface CreateExperienceInput {
  jobName?: string | null;
  company?: string | null;
  dateStart?: any | null;
  dateEnd?: any | null;
  isActualJob?: boolean | null;
  description?: string | null;
}

export interface CreateSessionInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface CreateUserInput {
  pseudo?: string | null;
  email?: string | null;
  password?: string | null;
  age?: number | null;
  city?: string | null;
  phoneNumber?: string | null;
  bio?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
