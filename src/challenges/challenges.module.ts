import { Module } from '@nestjs/common';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Challenge, ChallengeSchema } from 'src/schemas/challenge.schema';
import { Manager, ManagerSchema } from 'src/schemas/manager.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Challenge.name, schema: ChallengeSchema },
      { name: Manager.name, schema: ManagerSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ChallengesController],
  providers: [ChallengesService, AuthGuard],
})
export class ChallengesModule {}
