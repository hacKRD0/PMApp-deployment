import { appendFileSync } from 'fs';

const myArgs = process.argv.slice(2);
const buf = Buffer.from(myArgs[0], 'base64');

appendFileSync('~/pmapp/.env.backend', buf.toString());
