import { Injectable, Scope } from '@nestjs/common';
import { DepService } from './dep.service';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  constructor(private dep: DepService) {}

  getHello(): string {
    return this.dep.getHello();
  }
}
