import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApi } from '../config/api'
import type { Poll } from '@repo/types/poll'

export const pollsApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: baseApi,
  tagTypes: ['Poll'],
  endpoints: (build) => ({
    getAllPolls: build.query<Poll[], void>({
      query: () => `polls`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Poll' as const, id })),
              { type: 'Poll', id: 'LIST' }
            ]
          : [{ type: 'Poll', id: 'LIST' }]
    }),
    getPollById: build.query<Poll[], string>({
      query: (id) => `polls/${id}`,
      providesTags: (result, error, id) => [{ type: 'Poll', id }]
    }),
    vote: build.mutation<Poll, { id: string; optionId: string }>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `polls/${id}/vote`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Poll', id }]
    })
  })
})

export const { useGetAllPollsQuery, useGetPollByIdQuery, useVoteMutation } =
  pollsApi
