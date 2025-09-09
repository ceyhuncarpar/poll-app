import { Injectable, NotFoundException } from '@nestjs/common'
import { Poll } from '@repo/types'
import { GetPollValidation, VoteValidation } from './polls.validation'
import { PollsRepository } from './polls.repository'

/**
 * Initial Poll service responsible for orchestrating poll operations.
 */
export interface IPollsService {
  /**
   * Get all polls within the DB.
   * @returns All polls within the DB.
   */
  getAll: () => Promise<Poll[]>
  /**
   * Gets a poll by id.
   * @param data Validated data containing poll id.
   * @returns Found poll.
   */
  get: (data: GetPollValidation) => Promise<Poll | undefined>
  /**
   * Find a poll by id and update an option with a vote.
   * @param data Contains poll Id and option Id.
   * @returns  Returns the updated poll.
   */
  vote: (data: VoteValidation) => Promise<Poll>
}

@Injectable()
export class PollsService implements IPollsService {
  constructor(private readonly pollsRepo: PollsRepository) {}

  async get({ id }) {
    return await this.pollsRepo.findById(id)
  }

  async getAll() {
    return await this.pollsRepo.findAll()
  }

  async vote({ id, optionId }) {
    const poll = await this.pollsRepo.findById(id)
    if (!poll) {
      throw new NotFoundException("Poll doesn't exist.")
    }

    const optionIdx = poll.options.findIndex((opt) => opt.id === optionId)
    if (optionIdx < 0) {
      throw new NotFoundException("Option doesn't exist on this poll.")
    }

    poll.options[optionIdx].votes++

    await this.pollsRepo.findByIdAndUpdate(id, { options: poll.options })
    return poll
  }
}
