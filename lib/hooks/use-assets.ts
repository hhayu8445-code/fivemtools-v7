import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useAssets(category?: string, search?: string) {
  const params = new URLSearchParams()
  if (category) params.set("category", category)
  if (search) params.set("search", search)
  
  const { data, error, isLoading, mutate } = useSWR(
    `/api/assets?${params.toString()}`,
    fetcher,
    { refreshInterval: 30000 }
  )

  return {
    assets: data,
    isLoading,
    isError: error,
    mutate,
  }
}
