import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

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

  // @Post()
  // create(@Body() createCertificateDto: CreateCertificateDto) {
  //   return this.certificatesService.create(createCertificateDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCertificateDto: UpdateCertificateDto) {
  //   return this.certificatesService.update(+id, updateCertificateDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.certificatesService.remove(+id);
  // }
}
