import { Injectable } from '@nestjs/common'
import { Poll } from '@repo/types/poll'
import { sleep } from 'src/utils'
/**
 * Polls repository, basically mimicking a real DB.
 */
export interface IPollsRepository {
  /**
   * Find all polls within the DB.
   * @returns All polls within the DB.
   */
  findAll: () => Promise<Poll[]>
  /**
   * Find a poll by id.
   * @param id Poll Id.
   * @returns Found poll.
   */
  findById: (id: string) => Promise<Poll | undefined>
  /**
   * Find and update a poll by id.
   * @param id Poll Id.
   * @param data Data to be updated.
   * @returns Updated poll.
   */
  findByIdAndUpdate: (
    id: string,
    update: Partial<Poll>
  ) => Promise<Poll | undefined>
}

const initialData = [
  {
    id: '1',
    question: 'Which CSS solution should we use in our next project?',
    options: [
      { id: 'a', text: 'Tailwind CSS', votes: 25 },
      { id: 'b', text: 'Styled Components', votes: 18 },
      { id: 'c', text: 'Sass', votes: 11 }
    ]
  },
  {
    id: '2',
    question: 'Test?',
    options: [
      { id: 'a', text: 'Test3', votes: 25 },
      { id: 'b', text: 'Test5', votes: 18 },
      { id: 'c', text: 'Test7', votes: 11 }
    ]
  }
]

@Injectable()
export class PollsRepository implements IPollsRepository {
  private records: Poll[] = []

  constructor() {
    this.records = initialData
  }

  async findAll() {
    return this.records
  }

  async findById(id: string) {
    // Delay a bit to mimic a DB query.
    await sleep(150)

    return this.records.find((r) => r.id === id)
  }

  async findByIdAndUpdate(id: string, update: Partial<Poll>) {
    // Delay a bit to mimic a DB query.
    await sleep(150)

    let record = this.records.find((r) => r.id === id)
    if (!record) return record

    const updated = { ...record, ...update }
    record = updated

    return updated
  }
}
