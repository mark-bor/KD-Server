import { Injectable } from '@nestjs/common';
import { ARTICLES } from '../../data/ARTICLES';

@Injectable()
export class ArticlesService {
  getAll(type?: string) {
    let list = ARTICLES;
    
    if (type && type.length>0) {
      list = list.filter((p) => p.type===type);
    }

    return JSON.stringify(list);
  }

  getOne(id: string) {
    return JSON.stringify(ARTICLES.find((a) => a.id===id));
  }
}
