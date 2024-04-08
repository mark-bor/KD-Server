import { Injectable } from '@nestjs/common';
import { PROJECTS } from '../../data/PROJECTS';

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

    return JSON.stringify(list);
  }

  getOne(id: string) {
    return JSON.stringify(PROJECTS.find((p) => p.id===id));
  }
}
