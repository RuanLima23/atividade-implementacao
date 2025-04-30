import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async create(dto: CreateTodoDto) {
    return this.prisma.task.create({ data: { title: dto.title } });
  }

  async remove(id: number) {
    const todo = await this.prisma.task.delete({ where: { id } });
    if (!todo) throw new NotFoundException('Task not found');
    return todo;
  }
}