import { Injectable } from '@nestjs/common';
import { ARTICLES } from '../data/ARTICLES';
// import { CreateArticleDto } from './dto/create-article.dto';
// import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  getAll(type?: string) {
    let list = ARTICLES;
    
    if (type && type.length>0) {
      const types: string[] = type.split(',');
      list = list.filter((p) => types.includes(p.type));
    }

    return JSON.stringify(list);
  }

  getOne(id: string) {
    return JSON.stringify(ARTICLES.find((a) => a.id===id));
  }

  // create(createArticleDto: CreateArticleDto) {
  //   return 'This action adds a new article';
  // }

  // update(id: number, updateArticleDto: UpdateArticleDto) {
  //   return `This action updates a #${id} article`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} article`;
  // }
}
