import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepService } from './dep.service';

@Module({
  imports: [],

  controllers: [AppController],
  providers: [
    DepService,
    {
      provide: AppService,
      useFactory: (r: DepService) => new AppService(r),
      inject: [DepService],
    },
  ],
})
export class AppModule {}
