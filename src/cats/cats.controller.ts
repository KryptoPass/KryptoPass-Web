import { Controller, Get, Post, HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}