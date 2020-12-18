import * as dotenv from 'dotenv';

dotenv.config();

const SECURE_COOKIES = process.env.SECURE_COOKIES === 'true';

export { SECURE_COOKIES };
