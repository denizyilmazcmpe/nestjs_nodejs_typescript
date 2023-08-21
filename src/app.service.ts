import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Deniz'in ilk NestJS apisi";
  }
}
