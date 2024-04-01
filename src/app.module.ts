import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { CertificatesModule } from './certificates/certificates.module';

@Module({
  imports: [ProjectsModule, CertificatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
