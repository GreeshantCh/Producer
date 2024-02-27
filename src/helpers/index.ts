// here we create authentication helpers which help us to encrypt the password or give a random token
import crypto from 'crypto';

const SECRET = 'GREESHANT-REST-API';
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
