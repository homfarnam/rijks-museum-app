import { AxiosError } from 'axios'
import { museumAPI } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const useFetchData = <T,>(url: string) => {
  const fetchData = async (url: string) => {
    const response = await museumAPI.get(url)
    const paintings = response.data as T

    return paintings
  }

  const { isLoading, data } = useQuery(
    ['paintings', url],
    () => fetchData(url),
    {
      staleTime: 3000,
      onError: (error: AxiosError) =>
        toast.error(`Something went wrong: ${error.message}`),
    }
  )

  return {
    data,
    isLoading,
  }
}

export default useFetchData
