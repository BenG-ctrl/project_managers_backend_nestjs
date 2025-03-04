import { IsString, IsOptional } from 'class-validator';

export class UpdateChallengeDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
