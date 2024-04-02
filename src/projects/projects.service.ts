import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PROJECTS } from '../data/PROJECTS';

@Injectable()
export class ProjectsService {
  getAll(status?: string, category?: string, type?: string) {
    let list = PROJECTS;
    
    if (status && status.length>0) {
      const statuses: string[] = status.split(',');
      list = list.filter((p) => statuses.includes(p.status));
    }
    if (category && category.length>0) {
      const categories: string[] = category.split(',');
      list = list.filter((p) => categories.includes(p.category));
    }
    if (type && type.length>0) {
      const types: string[] = type.split(',');
      list = list.filter((p) => types.includes(p.type));
    }

    return list;
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
