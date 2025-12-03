import { useState, useEffect } from "react"

export function useSearch<T>(items: T[], searchQuery: string, searchFields: (keyof T)[]) {
  const [filteredItems, setFilteredItems] = useState<T[]>(items)

  useEffect(() => {
    if (!searchQuery) {
      setFilteredItems(items)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field]
        return String(value).toLowerCase().includes(query)
      })
    )
    setFilteredItems(filtered)
  }, [items, searchQuery, searchFields])

  return filteredItems
}
