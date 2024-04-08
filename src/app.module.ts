import {
  Module,
  NestModule,
  MiddlewareConsumer
 } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { 
  ProjectsModule, 
  CertificatesModule, 
  ArticlesModule 
} from './api/index';
import { APIKeyMiddleware } from './middlewares/apiKey.middleware';


@Module({
  imports: [ProjectsModule, CertificatesModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(APIKeyMiddleware)
    .forRoutes('api');
  }
}
