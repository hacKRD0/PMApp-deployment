import { appendFileSync } from 'fs';

const myArgs = process.argv.slice(2);
const buf = Buffer.from(myArgs[0], 'base64');

appendFileSync('.env.backend', buf.toString());
