import { writeFileSync } from 'fs';
import path from 'path';

// Retrieve command line arguments
const myArgs = process.argv.slice(2);

if (myArgs.length < 1) {
  console.error('Error: No encrypted data provided.');
  process.exit(1);
}

// Decode the environment variables from base64
const buf = Buffer.from(myArgs[0], 'base64');

// Define the output file path
const outputFilePath = path.join(process.env.HOME, '.env.backend');

try {
  // Write decoded data to the .env.backend file in ~/pmapp
  writeFileSync(outputFilePath, buf.toString());
  console.log(`Successfully wrote .env.backend to ${outputFilePath}`);
} catch (error) {
  console.error(`Error writing to .env.backend: ${error.message}`);
  process.exit(1);
}
