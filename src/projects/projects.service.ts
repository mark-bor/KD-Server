import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PROJECTS } from '../data/PROJECTS';

@Injectable()
export class ProjectsService {
  getAll() {
    return PROJECTS;
  }

  getOne(id: string) {
    return PROJECTS.find((p) => p.id===id);
  }

  // create(createProjectDto: CreateProjectDto) {
  //   return 'This action adds a new project';
  // }

  // update(id: string, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} project`;
  // }
}
