import React from 'react'
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useFetchData from 'hooks/useFetchData'
import allPaints from 'mocks/paints.json'
import { createWrapper } from 'utils/utils'
import Paints from './Paints'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3000, refetchOnWindowFocus: false } },
})

describe('Test paints component', () => {
  afterEach(cleanup)

  test('Check if api is called with painter name and data is on loading', async () => {
    const { result } = renderHook(
      () =>
        useFetchData(
          `/collection?key=${process.env.REACT_APP_API_TOKEN}&involvedMaker=Rembrandt%20van%20Rijn&ps=20`
        ),
      {
        wrapper: createWrapper(),
      }
    )

    expect(result.current.isLoading).toBe(true)
  })

  test('Check if api is called with painter name and data is successfully fetched', async () => {
    const { result } = renderHook(
      () =>
        useFetchData(
          `/collection?key=${process.env.REACT_APP_API_TOKEN}&involvedMaker=Rembrandt%20van%20Rijn&ps=20`
        ),
      {
        wrapper: createWrapper(),
      }
    )

    render(
      <QueryClientProvider client={queryClient}>
        <Paints painter="Rembrandt van Rijn" amount="20" />
      </QueryClientProvider>
    )

    const gallery = screen.getByTestId('gallery')

    await waitFor(() => {
      expect(result.current.data).toEqual(allPaints.data)
      expect(result.current.isLoading).toBe(false)
      expect(gallery.children.length).toBe(allPaints.data.artObjects.length)
    })
  })
})
