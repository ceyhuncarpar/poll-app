import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Basic baseApi with out of the box fetchBaseQuery from RTK Query
export const baseApi = fetchBaseQuery({ baseUrl: 'http://localhost:5001' })
