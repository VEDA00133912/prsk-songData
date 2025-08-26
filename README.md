# prsk-songData
[楽曲リスト](https://game8.jp/pjsekai/544428)から 曲名と EXPERT / MASTER / APPEND のレベルを取得し、JSONファイルにしてからダウンロードするスクリプトです
# 使い方
1. 楽曲リストのページを開く
2. 開発者ツール（F12 または Ctrl+Shift+I）を開き、Console タブを選択
3. prsk.jsを貼り付けて実行

※レベル列がない場合(APPENDだと-になってる部分があるので)は null としてJSONに出力されます

# 出力例
```json
[
  {
    "name": "Tell Your World",
    "EXPERT": "22",
    "MASTER": "26",
    "APPEND": "24"
  },
  {
    "name": "ネクストネスト",
    "EXPERT": "27",
    "MASTER": "29",
    "APPEND": null
  },
]
```
