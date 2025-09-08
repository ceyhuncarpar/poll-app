import { IsNotEmpty, IsString } from 'class-validator'

export class GetPollValidation {
  @IsNotEmpty()
  @IsString()
  id: string
}

export class OptionQueryValidation {
  @IsNotEmpty()
  @IsString()
  optionId: string
}

export class VoteValidation {
  @IsNotEmpty()
  @IsString()
  optionId: string

  @IsNotEmpty()
  @IsString()
  id: string
}
