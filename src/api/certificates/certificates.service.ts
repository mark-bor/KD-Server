import { Injectable } from '@nestjs/common';
import { CERTIFICATES } from '../../data/CERTIFICATES';

@Injectable()
export class CertificatesService {
  getAll() {
    return JSON.stringify(CERTIFICATES);
  }

  getOne(id: number) {
    return JSON.stringify(CERTIFICATES.find((c) => c.id === id));
  }
}
