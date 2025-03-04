import { IsString, IsNotEmpty } from 'class-validator';

export class CreateChallengeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  createdBy: string;
}
