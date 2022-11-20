import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useFetchData from 'hooks/useFetchData'
import { createWrapper } from 'utils/utils'
import { useMemo } from 'react'
import { MakerArtsTypes } from 'types/maker'

jest.mock('axios')

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3000, refetchOnWindowFocus: false } },
})

describe('renders learn react link', () => {
  afterEach(cleanup)

  test('Check if page render correctly and title can be found in page ', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    )

    const titleTagValue = screen.getByTestId('title').innerHTML
    const selectPainter = screen.getByTestId('painterSearch')

    expect(titleTagValue).toBe('Museum')
    expect(selectPainter).toBeInTheDocument()
  })

  test('Check if select option rendered with length of data ', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    )

    const { result } = renderHook(
      () => useFetchData(`/collection?key=${process.env.REACT_APP_API_TOKEN}`),
      {
        wrapper: createWrapper(),
      }
    )

    const selectPainter = screen.getByTestId('painterSearch')

    const { result: hookData, rerender } = renderHook((props) => {
      return useMemo(() => {
        if (result.current.data) {
          const data = result.current.data as MakerArtsTypes

          const painters = data.facets.find(
            (item) => item.name === 'principalMaker'
          )!
          const sortedNames = painters.facets.sort((a, b) =>
            a.key.toLowerCase() > b.key.toLowerCase() ? 1 : -1
          )
          return sortedNames
        }
      }, [result.current.data])
    })

    rerender()

    waitFor(() => {
      expect(selectPainter.children.length).toBe(hookData.current?.length)
    })
  })
})
