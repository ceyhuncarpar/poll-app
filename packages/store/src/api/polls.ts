import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApi } from '../config/api'
import type { Poll } from '@repo/types'

export const pollsApi = createApi({
  baseQuery: baseApi,
  reducerPath: 'pollsApi',
  tagTypes: ['Polls'],
  endpoints: (build) => ({
    getAllPolls: build.query<Poll[], void>({
      query: () => `polls`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Polls' as const, id })),
              { type: 'Polls', id: 'LIST' }
            ]
          : [{ type: 'Polls', id: 'LIST' }]
    }),

    getPollById: build.query<Poll, string>({
      query: (id) => `polls/${id}`,
      providesTags: (result, error, id) => [{ type: 'Polls', id }]
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
      // Tags can be invalidated here but we want to spesifically
      // update the cached value since the api result also returns the
      // updated value, so replace cache here instead of a forced refetch.
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(
            pollsApi.util.updateQueryData('getPollById', id, () => {
              return data
            })
          )
        } catch (error) {}
      }
    })
  })
})

export const { useGetAllPollsQuery, useGetPollByIdQuery, useVoteMutation } =
  pollsApi
