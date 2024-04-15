import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class APIKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-key'] != process.env.KD_SERVER_API_KEY) {
      throw new HttpException('Invalid API key', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
