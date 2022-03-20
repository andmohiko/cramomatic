# firestore 設計

- [cards](#cards)
  - [buyings](#buyings)
- [shops](#shops)
- [users](#users)

## cards

### 概要

```
/cards/{cardId}
```

- カード
- ID: ポケカ公式のID

### 詳細

- [buyings](#buyings): サブコレクション 買い取り一覧
- buyingPrice: map
  - highest: Number 最高買取額
  - lowest: Number 最低買取額
- cardImageUrl: String カードの画像リンク
- createdAt: Timestamp 作成日時
- name: String カード名
- rarity: Enum(String) レアリティ(Common | Uncommon | Rare | SuperRare | SpecialArt | CharacterRare )
- updatedAt: Timestamp 作成日時

## buyings

### 概要

```
/cards/{cardId}/buyings{buyingId}
```

- ある日のある店での買い取り情報
- 更新時にはドキュメントを新規作成する
- ID: 自動生成ID

### 詳細

- createdAt: Timestamp 作成日時
- price: 買い取り価格
- shopId: カードショップID
- shopName: カードショップ名

## shops

### 概要

```
/shops/{shopId}
```

- カードショップ
- ID: 自動生成ID

### 詳細

- address: String 住所
- createdAt: Timestamp 作成日時
- name: String カードショップ名
- updatedAt: Timestamp 作成日時

## users

### 概要

```
/users/{userId}
```

- ユーザー
- ID: 自動生成ID

### 詳細

- createdAt: Timestamp 作成日時
- twitterId: String ツイッターID
- updatedAt: Timestamp 作成日時
- username: String ユーザー名