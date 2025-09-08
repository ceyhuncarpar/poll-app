import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GetPollValidation, OptionQueryValidation } from './polls.validation'
import { PollsService } from './polls.service'

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Get(':id')
  async getPoll(@Param() params: GetPollValidation) {
    return await this.pollsService.get(params)
  }

  @Get()
  async getAllPolls() {
    return await this.pollsService.getAll()
  }

  @Post(':id/vote')
  async vote(
    @Param() params: GetPollValidation,
    @Body() body: OptionQueryValidation
  ) {
    return await this.pollsService.vote({
      id: params.id,
      optionId: body.optionId
    })
  }
}
