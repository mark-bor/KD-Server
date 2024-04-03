import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
// import { CreateArticleDto } from './dto/create-article.dto';
// import { UpdateArticleDto } from './dto/update-article.dto';

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

  // @Post()
  // create(@Body() createArticleDto: CreateArticleDto) {
  //   return this.articlesService.create(createArticleDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
  //   return this.articlesService.update(+id, updateArticleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.articlesService.remove(+id);
  // }
}
