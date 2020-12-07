import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingModule } from './settings/settings.module';

@Module({
  imports: [
    UserModule,
    SettingModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECT),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
