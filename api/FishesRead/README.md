direaction の in や out はファンクションにとっての入力か出力を意味する。
他の説明は割愛。

```json
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"],
      "route": "fishes"
    },
    {
      "name": "documents",
      "type": "cosmosDB",
      "direction": "in",
      "databaseName": "CosmosDB",
      "collectionName": "Fishes",
      "sqlQuery": "SELECT * from c WHERE c.pk = 'fishes'",
      "connectionStringSetting": "CosmosDBConnection"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ],
  "scriptFile": "../dist/FishesRead/index.js"
}
```
