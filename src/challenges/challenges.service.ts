import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChallengeDto } from 'src/dto/create.challenge.dto';
import { UpdateChallengeDto } from 'src/dto/update.challenge.dto';
import { Challenge } from 'src/schemas/challenge.schema';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  async create(createChallengeDto: CreateChallengeDto): Promise<Challenge> {
    const createdChallenge = new this.challengeModel(createChallengeDto);
    return createdChallenge.save();
  }

  async findAll(): Promise<Challenge[]> {
    return this.challengeModel.find().exec();
  }

  async findOne(id: string): Promise<Challenge> {
    return this.challengeModel.findById(id).exec();
  }

  async update(
    id: string,
    updateChallengeDto: UpdateChallengeDto,
  ): Promise<Challenge> {
    return this.challengeModel
      .findByIdAndUpdate(id, updateChallengeDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Challenge> {
    return this.challengeModel.findByIdAndDelete(id).exec();
  }
}
