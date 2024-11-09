# api

Static Web Apps の API です。

## プロジェクトのセットアップ

設定ファイルをコピーしてデータベースの接続情報を設定します。

```sh
cp local.settings.json.example local.settings.json
```

## api のホットリロード

オプション -w  
監視モードでコンパイラを実行します。 入力(input)ファイルを監視し、変更時に再コンパイルをトリガします。

```sh
"watch": "tsc -w"
```
