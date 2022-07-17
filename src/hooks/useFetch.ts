import { useEffect, useState } from 'react'

/**
 * とても参考にしたサイト：https://zenn.dev/apple_yagi/articles/bc52d83ec61aee
 */

/**
 * 任意の型のデータをAPIから取得するためのカスタムフック。
 * Array<Fish>型のjsonデータを/api/fishesから取りたい場合は
 * const { data, isLoading, isError } = useFetch<Array<Fish>>('/api/fishes')
 * をコンポーネントの中で最初に呼びます。
 * @param url APIエンドポイント
 * @returns APIから取得する予定のjsonオプジェクトを持ったdata、ローディング中かどうかのisLoading、エラーかどうかのisError
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
