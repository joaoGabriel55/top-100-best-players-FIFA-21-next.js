import useSWR from 'swr'
import axios from 'axios'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await axios.get(url)
    const data = response.data.docs
    return data
  })

  return { data, error }
}