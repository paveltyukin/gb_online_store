import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  credentials: true,
}

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(corsOptions);
  const PORT = process.env.PORT || 3002;
  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  });
}

start()
  .catch((err) => {
    console.log(`Произошла ошибка при старте: ${err}`);
  });
