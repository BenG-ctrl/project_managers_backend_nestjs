import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from 'src/dto/create.challenge.dto';
import { UpdateChallengeDto } from 'src/dto/update.challenge.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthenticatedUser } from 'src/auth/authenticated.user.decorator';

@Controller('challenges')
@UseGuards(AuthGuard)
@Roles('manager')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createChallengeDto: CreateChallengeDto,
    @AuthenticatedUser() user: any,
  ) {
    createChallengeDto.createdBy = user.id;
    return this.challengesService.create(createChallengeDto);
  }

  @Get()
  findAll() {
    return this.challengesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.challengesService.findOne(id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ) {
    return this.challengesService.update(id, updateChallengeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.challengesService.remove(id);
  }
}
