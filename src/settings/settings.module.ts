import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingSchema } from './settings.schema';
import { SettingService } from './settings.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'settings', schema: SettingSchema }]),
  ],
  controllers: [SettingsController],
  providers: [SettingService],
})
export class SettingModule {}
