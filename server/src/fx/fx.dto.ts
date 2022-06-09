import { IsString } from 'class-validator';

export default class FxDto {
  @IsString()
  what: string;
}
