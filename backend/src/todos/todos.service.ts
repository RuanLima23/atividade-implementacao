import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.todo.findMany({ orderBy: { id: 'desc' } });
  }

  async create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}