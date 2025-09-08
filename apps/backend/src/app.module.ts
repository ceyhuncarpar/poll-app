import { Module } from '@nestjs/common'
import { PollsModule } from './modules/polls/polls.module'

@Module({
  imports: [PollsModule]
})
export class AppModule {}
