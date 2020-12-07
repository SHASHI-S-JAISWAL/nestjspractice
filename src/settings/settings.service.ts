import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SettingDocument, Setting } from './settings.schema';
import { Model } from 'mongoose';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel('settings')
    private readonly SettingsModel: Model<SettingDocument>,
  ) {}

  async saveSetting(settingDto: {
    name: string;
    username: string;
    configuration: string;
  }): Promise<{}> {
    const newsetting = new this.SettingsModel(settingDto);
    const filter = {
      username: settingDto.username,
      name: settingDto.name,
    };
    const newdata = {
      username: settingDto.username,
      name: settingDto.name,
      configuration: settingDto.configuration,
    };
    const list = await this.SettingsModel.find();
    let data = {};
    if (list.length) {
      data = await this.SettingsModel.findOneAndUpdate(filter, newdata, {
        new: true,
      });
    } else {
      data = await newsetting.save();
    }
    console.log(data);
    return data;
  }
  async getSetting(Dto: { username: string }): Promise<{}> {
    const settings = await this.SettingsModel.find({
      username: Dto.username,
    });
    const data = {};
    settings.map((set) => {
      data[set.name] = set.configuration;
    });
    return { [Dto.username]: data };
  }
}
