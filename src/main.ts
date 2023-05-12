import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as fs from 'fs';
import * as crypto from 'crypto';

const generateRandomData = (size) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};

const createLargeFile = async (filename, sizeInGB) => {
  const fileSize = sizeInGB * 1024 * 1024 * 1024;
  const chunkSize = 1024 * 1024;
  const numOfChunks = fileSize / chunkSize;

  const writeStream = fs.createWriteStream(filename);

  for (let i = 0; i < numOfChunks; i++) {
    const chunk = await generateRandomData(chunkSize);
    writeStream.write(chunk);
  }

  writeStream.end();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();

async function write() {
  console.log('Writing large files');

  for (let i = 0; i < 50; i++) {
    await createLargeFile(`large_file${i}.txt`, 1)
      .then(() => console.log('Large file created successfully.'))
      .catch((err) => console.error('Error creating large file:', err));
  }

  console.log('Finished writing files');
}

write();
