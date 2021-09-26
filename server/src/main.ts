import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3002;
  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  });
}

start()
  .catch((err) => {
    console.log(`Произошла ошибка при старте: ${err}`);
  });
