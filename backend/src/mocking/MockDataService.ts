import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user/user.model';
import { Spot } from "../models/spot/spot.model";
import * as bcrypt from "bcryptjs";

@Injectable()
export class MockDataService implements OnModuleInit {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(Spot)
    private spotModel: typeof Spot,
  ) {}

  async onModuleInit() {
    const usersCount = await this.userModel.count();
    const spotsCount = await this.userModel.count();

    if (usersCount === 0) {
      await this.userModel.bulkCreate([
        { email: 'test@example.com', password: await bcrypt.hashSync('123456', 10) }
      ]);
      console.log('Seeded user');
    }
    if (spotsCount === 0) {
      await this.spotModel.bulkCreate([
        { location: 'пр-т Рокосовского, 12' },
        { location: 'ул. Сухая, 70/2' },
        { location: 'пр-т Мира, 9-7' },
      ]);
      console.log('Seeded spots');
    }
  }
}
