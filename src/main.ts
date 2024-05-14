import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const port = configService.get('PORT');
  const config = new DocumentBuilder()
    .setTitle('Api experience')
    .setDescription('Api experience')
    .setVersion('1.0')
    .addTag('your-controller')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
