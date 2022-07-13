import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>()
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { data, isLoading, isError }
}
