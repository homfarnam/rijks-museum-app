import React from 'react'
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useFetchData from './useFetchData'
import painters from 'mocks/painters.json'
import { createWrapper } from 'utils/utils'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3000, refetchOnWindowFocus: false } },
})

describe('Test use fetch data hook', () => {
  afterEach(cleanup)

  test('Check if api is called and data is on loading', async () => {
    const { result } = renderHook(
      () => useFetchData(`/collection?key=${process.env.REACT_APP_API_TOKEN}`),
      {
        wrapper: createWrapper(),
      }
    )

    expect(result.current.isLoading).toBe(true)
  })

  test('Check if api is called and data is successfully fetched', async () => {
    const { result } = renderHook(
      () => useFetchData(`/collection?key=${process.env.REACT_APP_API_TOKEN}`),
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      }
    )
    waitFor(() => {
      expect(result.current.data).toEqual(painters.data)
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.isLoading).toBe(false)
    })
  })

  test('Check if api is called and failed and show react toast', async () => {
    const { result } = renderHook(
      () => useFetchData(`/collection?key=${process.env.REACT_APP_API_TOKEN}`),
      {
        wrapper: createWrapper(),
      }
    )

    // expect to show react-toastify in screen

    waitFor(() => {
      expect(screen.getByText('Something went wrong:')).toBeInTheDocument()
      expect(result.current.data).toBeUndefined()
      expect(result.current.isSuccess).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })
  })
})
