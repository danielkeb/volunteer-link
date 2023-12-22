import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add swagger API documentation support
  const config = new DocumentBuilder()
    .setTitle('VolunteerLink API endpoints')
    .setDescription(
      'Documentation for RESTful API endpoints of VolunteerLink project',
    )
    .setVersion('1.0')
    .setExternalDoc('Postman Collection', '/api-json')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap().then(() => {
  const logger = new Logger();
  logger.verbose(`Server Available at: http://localhost:${PORT}`);
  logger.verbose(`API docs available at http://localhost:${PORT}/api`);
});
