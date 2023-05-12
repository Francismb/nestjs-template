import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const arr: Array<object> = [];
while (true) {
  arr.push(new Object());
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
