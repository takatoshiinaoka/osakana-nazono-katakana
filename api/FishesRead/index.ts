import { AzureFunction, Context, HttpRequest } from '@azure/functions'

/**
 * お魚データをCosmosDBから全権取得するためのファンクション。
 * @param context function.jsonで設定したものが取れるっぽい。
 * @param req req.bodyやreq.paramはよく使う。ここでは使ってない。
 */
const httpTrigger: AzureFunction = async function (
  context: Context,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: HttpRequest
): Promise<void> {
  context.res.json(context.bindings.documents)
}

export default httpTrigger
