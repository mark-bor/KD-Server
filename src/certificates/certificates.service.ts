import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CERTIFICATES } from '../data/CERTIFICATES';


@Injectable()
export class CertificatesService {
  getAll() {
    return JSON.stringify(CERTIFICATES);
  }

  getOne(id: number) {
    return JSON.stringify(CERTIFICATES.find((c) => c.id===id));
  }

  // create(createCertificateDto: CreateCertificateDto) {
  //   return 'This action adds a new certificate';
  // }

  // update(id: number, updateCertificateDto: UpdateCertificateDto) {
  //   return `This action updates a #${id} certificate`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} certificate`;
  // }
}
