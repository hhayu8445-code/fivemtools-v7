import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useStats() {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher, {
    refreshInterval: 10000,
  })

  return {
    stats: data,
    isLoading,
    isError: error,
  }
}
