import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';


@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll(
    @Query('status') status: string,
    @Query('category') category: string,
    @Query('type') type: string,
  ) {
    return this.projectsService.getAll(status, category, type);
  }

  @Get(':id')
  getOne(
    @Param('id') id: string,
  ) {
    return this.projectsService.getOne(id);
  }
}
