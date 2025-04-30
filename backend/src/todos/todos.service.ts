import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany({ orderBy: { id: 'desc' } });
  }

  async create(data: CreateTodoDto) {
    return this.prisma.task.create({ data });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}