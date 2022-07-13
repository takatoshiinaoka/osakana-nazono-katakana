import { useEffect, useState } from 'react'

/**
 * 任意の型のデータをAPIから取得するためのカスタムフックです。
 * Array<Fish>型のjsonデータを/api/fishesから取りたい場合は
 * const { data, isLoading, isError } = useFetch<Array<Fish>>('/api/fishes')
 * をコンポーネントの中で最初に呼びます。
 */
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
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { data, isLoading, isError }
}
