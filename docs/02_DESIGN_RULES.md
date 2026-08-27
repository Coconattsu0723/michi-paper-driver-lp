# michi DESIGN RULES

## 0. このファイルの位置づけ

このMarkdownは、**「michi PAPER DRIVER LESSON」** LPのビジュアルデザイン、UI、写真、レスポンシブ表現の正本です。

数値や書体が未確定の項目は、実装前に勝手に固定せず「未確定」として扱います。実装方法は `04_IMPLEMENTATION_RULES.md` を参照してください。

---

# 1. DESIGN CONCEPT

## Design Concept

**Calm Everyday Driving**

**「教習」ではなく、「安心して運転できる日常」を見せる。**

一般的な自動車・教習サイトの次の方向には寄せない。

- 強い青
- 黒
- スピード感
- 道路標識モチーフ
- 車を大きく見せる
- 「克服」「上達」を強調

目安：

```text
生活サービス 70%
専門サービス 30%
```

## Brand Personality

- やさしい
- 落ち着いた
- 頼れる

---

# 2. COLOR PALETTE

| Role | Name | Hex | 主な用途 |
|---|---|---|---|
| Base | Warm Ivory | `#FAF8F3` | サイト全体背景、暮らし、温かさ、余白 |
| Main | Calm Blue Gray | `#7896A1` | ブランドのメインカラー、安心、信頼、落ち着き |
| Deep | Deep Slate | `#354A52` | 見出し、本文、Footer、専門性 |
| Sub | Mist Blue | `#DCE6E8` | Safety、Features、補助背景、安心材料のグルーピング |
| Accent | Soft Apricot | `#E5AD82` | CTA、小さな重要アクセント |
| White | White | `#FFFFFF` | Form、Card、情報の切り分け |

Accentは多用しない。

---

# 3. TYPOGRAPHY

## Japanese Font

第一候補：**Noto Sans JP**

理由：

- 読みやすい
- 子どもっぽくならない
- 実用サービスとして信頼感がある
- フォームや長文にも使いやすい

## English Font

候補：

- Inter
- DM Sans

**最終選定は未確定。どちらか一方へ勝手に確定しない。**

英字は小さなSection Labelなどに使う。

例：

```text
LESSON
どんな練習ができる？
```

英字は視覚的リズム、日本語は意味を伝える役割。

## Typography基本方針

- HeroはMedium〜SemiBold程度
- 太字を多用しない
- BodyはRegular
- 行間を比較的広く取る
- 不安のあるユーザーでも圧迫感なく読めるTypographyにする
- 正式なfont-size、line-height、letter-spacingの数値は実装時に確認して決定する

---

# 4. LAYOUT

## Spacing

- 余白は広め
- Cardで囲いすぎない
- セクションの切り替えは余白で見せる
- Editorial寄りのレイアウト
- 具体的なSpacing Scaleは未確定。実装時に一貫した段階として定義する

## Container

- ページ全体で共通Containerを使用する
- 1440pxでも本文を画面いっぱいに広げない
- セクションごとに無秩序な横幅を設定しない
- 最大幅、左右paddingの正式数値は未確定。375pxから確認し、実装時に決定する

## Border Radius

- 小〜中程度
- 丸すぎるUIは避ける
- 子育て向けだからといって可愛くしすぎない
- Pill型は必要箇所のみ
- 正式なradius値は未確定

## Border

- 細く淡いBlue Gray系
- Voice、Price、FAQ、Driving Check、Formなどで利用可能
- 色・太さの正式値は実装時にColor Contrastも確認して決定する

## Shadow

原則使わない。

必要な場合のみ非常に弱く使用する。正式値は未確定。

---

# 5. PHOTO TONE

## 共通方向

- 日本の郊外〜住宅地
- 30〜40代くらいの親
- 子どもとの生活シーン
- 午前〜昼の自然光
- 柔らかな光
- 低〜中彩度
- 暖色に寄せすぎない
- 生活感はあるが散らかりすぎない
- 広告的な満面の笑顔を作りすぎない
- 普通の日常に見える
- Lifestyle Editorial寄り
- AI生成特有の過度に整いすぎた質感を避ける
- 車そのものを主役にしない

正式素材ごとの用途と制作条件は `03_IMAGE_ASSETS.md` を参照する。

---

# 6. ICON / ILLUSTRATION STYLE

基本：**写真＋シンプルな線画アイコン**

- 単色
- 線画
- 太さ統一
- グラデーションなし
- 過度な丸みなし
- 写真と競合しない
- 小さく使用しても認識できる

Safetyの複雑なアイコン3点は正式画像を使用する。Lesson / Features / FlowなどのシンプルなアイコンはSVG/UI実装を優先する。素材台帳は `03_IMAGE_ASSETS.md` を参照する。

---

# 7. CTA DESIGN

## 正式文言

**初回90分講習を予約する**

## デザイン方向

- AccentのSoft Apricotを限定的に使用
- Deep Slate文字、またはコントラストを確認した白文字
- Main ColorとCTA Colorを分けて優先順位を作る
- 具体的な文字色、hover、focus、disabled状態は実装時にColor Contrastと操作性を確認して決定する

---

# 8. DRIVING CHECK UI

## 役割

「何から練習すればいいか分からない」という課題を解決し、サービス選択を助けるUI。

## 表現方針

- ゲーム的な診断にはしない
- SPでは1問ずつ大きく見せる
- 設問、選択肢、進行状態、結果を読みやすく区切る
- Sub Color、淡いBorder、十分な余白を候補とする
- JavaScriptが動かない場合も主要情報を読める構造にする
- 正式なレイアウト、状態表現、モーションは未確定

---

# 9. RESPONSIVE RULE

## 共通

- モバイルファースト
- 375pxを正本として最初に完成させる
- 確認順：375 → 390 → 768 → 1024 → 1366 → 1440px
- 確認幅ごとにmedia queryを作らない
- レイアウト構造が変わる地点のみbreakpointを設定する
- 基本候補は768px、1024pxだが、実装を見て最終判断する

## SP

- 375pxを正本
- 基本1カラム
- 写真 → テキストの順序を重視
- Driving Checkは1問ずつ大きく見せる
- 情報を横並びにしすぎない
- 390pxでも改行、余白、横スクロールを確認する

## Tablet

- 768px付近を構造変更の候補とする
- 必要なセクションのみカラム構造を変更する
- SPの読み順と情報優先度を崩さない
- 正式なbreakpointは未確定

## PC

- 1024px付近を構造変更の候補とする
- Hero / Lesson / Features / Instructorなどは2カラム候補
- 全セクションを同じ左右構成にしない
- 写真左右を適宜入れ替えてリズムを作る
- 1366px、1440pxで余白とContainerを確認する
- 1440pxでも本文を画面いっぱいに広げない
- 正式なbreakpointは未確定
