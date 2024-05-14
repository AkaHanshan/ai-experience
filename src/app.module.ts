import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './modules/message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AppModule,
    MessageModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local', 'env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
