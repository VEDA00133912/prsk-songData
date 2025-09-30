# prsk-songData
[楽曲リスト](https://pjsekai.com/?aad6ee23b0)から 曲名と曲番号、レベルを取得し、JSONファイルにしてからダウンロードするスクリプトです
# 使い方
1. 楽曲リストのページを開く
2. 開発者ツール（F12 または Ctrl+Shift+I）を開き、Console タブを選択
3. prsk.jsを貼り付けて実行

※レベル列がない場合(APPENDだと-になってる部分があるので)は null としてJSONに出力されます

# 出力例
```json
[
  {
    "number": 1,
    "name": "Tell Your World",
    "EASY": 5,
    "NORMAL": 10,
    "HARD": 16,
    "EXPERT": 22,
    "MASTER": 26,
    "APPEND": 25
  },
  {
    "number": 2,
    "name": "ネクストネスト",
    "EASY": 6,
    "NORMAL": 13,
    "HARD": 18,
    "EXPERT": 27,
    "MASTER": 30,
    "APPEND": null
  },
  {
    "number": 3,
    "name": "メルト",
    "EASY": 7,
    "NORMAL": 12,
    "HARD": 17,
    "EXPERT": 25,
    "MASTER": 29,
    "APPEND": null
  },
]
```
