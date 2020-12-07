import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SettingService } from './settings.service';

@Controller('user-settings')
export class SettingsController {
  constructor(private readonly settingService: SettingService) {}
  @Get(':user')
  async getAll(@Param('user') params: string): Promise<{}> {
    console.log(params);
    const data = await this.settingService.getSetting({ username: params });
    return data;
  }
  @Post()
  async saveSettings(
    @Body('setting') setting: string,
    @Body('username') username: string,
    @Body('configuration') configuration: string,
  ) {
    const data = await this.settingService.saveSetting({
      username,
      configuration,
      name: setting,
    });
    return { data };
  }
}
