import { Controller, Get, Param } from '@nestjs/common';
import { CertificatesService } from './certificates.service';

@Controller('api/certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Get()
  findAll() {
    return this.certificatesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.certificatesService.getOne(+id);
  }
}
