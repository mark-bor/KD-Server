export class CreateProjectDto {
    id: string;
    
    url: string;
    title: string;
    description: string;
    steck: string[];
    status: string;
    category: string;
    type: string;

    github?: string;
}
