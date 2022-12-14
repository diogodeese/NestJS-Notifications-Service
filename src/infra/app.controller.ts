import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: any) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        recipientId: recipientId,
        content: content,
        category: category,
      },
    });
  }
}
