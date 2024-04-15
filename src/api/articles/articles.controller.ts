import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('api/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  getAll(@Query('type') type: string) {
    return this.articlesService.getAll(type);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.articlesService.getOne(id);
  }
}
