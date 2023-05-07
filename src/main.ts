import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const arr = [];
  while (true) {
    arr.push(new Object());
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
