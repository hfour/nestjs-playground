import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class DepService {
  getHello(): string {
    return 'Hello World!';
  }
}
