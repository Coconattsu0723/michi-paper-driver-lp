# michi IMPLEMENTATION RULES

## 0. このファイルの位置づけ

このMarkdownは、**「michi PAPER DRIVER LESSON」** を実装するときのHTML / CSS / JavaScript / Responsive / Accessibilityの正本ルールです。

このファイルを作成する段階では、HTML / CSS / JavaScriptの実装は行いません。デザイン数値やUI仕様が未確定の項目は、実装と検証を通して決定します。

---

# 1. HTML

- HTML5
- Semantic HTML
- Heroのみ`h1`
- 主要セクションは`h2`
- 必要に応じて`h3`
- 見出しレベルを見た目だけで選ばない
- JavaScriptなしでも主要情報を読める構造にする
- Formの入力項目には`label`を使用する
- 送信やUI操作には`button`、ページ遷移には`a`を使用し、役割を適切に分ける
- Navigation、Main、Footerなど文書構造に合う要素を使用する
- 画像には用途に合う`alt`を設定する。装飾画像は読み上げへの影響を考えて扱う
- 画像化された文字ではなく、主要なコピーと情報はHTMLテキストで提供する

---

# 2. CSS

- CSS3
- Mobile First
- CSS Custom Propertiesを使用する
- Color、Typography、Spacing、Container、Border Radiusなどの共通値を整理する
- Containerを共通化する
- Grid / Flexを目的に応じて使い分ける
- 画像には`object-fit` / `aspect-ratio`を適切に利用する
- 過剰な固定`height`を避ける
- コンテンツ量や文字サイズの変化に耐えられるレイアウトにする
- 375pxを最初に完成させる
- CardやShadowを多用せず、余白と淡いBorderで情報を整理する
- `focus-visible`が確認できる見た目を用意する
- 動きは`prefers-reduced-motion`へ配慮する

正式なCustom Properties名、Container幅、Spacing Scale、breakpoint、radiusなどの数値は未確定。実装時に`02_DESIGN_RULES.md`の方向性を守って決定する。

---

# 3. JAVASCRIPT

JavaScriptは操作補助を中心とする。JavaScriptが動かなくても主要情報を読める構造にする。

## Driving Check

- 主な予定機能
- 設問の表示
- 回答選択
- 進行状態の更新
- 回答に応じた結果表示
- ゲーム的な診断ではなく、練習の開始点を考える補助UIにする
- 正式な設問、分岐、結果文、リセット仕様は未確定

## FAQ Accordion

- 質問と回答の開閉
- `aria-expanded`と`aria-controls`を状態に合わせて更新する
- Keyboard操作に対応する
- JavaScriptなしでも回答内容へ到達できる構造を検討する
- 複数同時に開けるか、一つだけ開くかは未確定

## Navigation

- SP Navigationの開閉を予定
- `aria-expanded`と`aria-controls`を状態に合わせて更新する
- Keyboard操作に対応する
- 必要に応じてEscapeで閉じる
- 開閉時のfocus管理を確認する
- 正式なNavigation項目と開閉仕様は未確定

## Form補助

- 必要に応じて入力確認やエラー表示を補助する
- HTML標準の入力支援を基本とする
- エラーを色だけで伝えない
- Form ErrorとForm Completion Messageが支援技術へ伝わるようにする
- 送信先、送信処理、確認メール処理は未確定

---

# 4. RESPONSIVE

## 確認順

```text
375
390
768
1024
1366
1440
```

## 進行ルール

- 375pxを最初に完成させる
- 375pxが固まる前にPC調整へ進まない
- 確認幅ごとにmedia queryを作らない
- レイアウト構造が変わる地点のみbreakpointを設定する
- 基本候補は768px、1024px
- breakpointは実装を見て最終判断する
- 各幅で横スクロール、改行、余白、画像、CTA、Form、Navigationを確認する
- 1440pxでも本文を画面いっぱいに広げずContainerを維持する

## 基本候補

```text
768px
1024px
```

上記は候補であり、最終確定値ではない。

---

# 5. ACCESSIBILITY

最低限、以下を確認する。

## Semantic HTML

- Header、Navigation、Main、Section、Footer、Formの役割を構造へ反映する

## Heading Structure

- Heroのみ`h1`
- 主要セクションは`h2`
- 必要に応じて`h3`
- 見出し階層を飛ばさない

## alt

- 情報を伝える写真には目的に合う代替テキストを付ける
- 装飾画像は読み上げを重複させない
- Logoの代替テキストを確認する

## label

- 全入力項目に視覚的・プログラム的に対応する`label`を用意する
- Placeholderだけをラベル代わりにしない

## aria-expanded / aria-controls

- FAQ AccordionとNavigationの開閉状態を正しく伝える
- 状態とDOM表示を一致させる

## Keyboard操作

- Navigation、CTA、Driving Check、FAQ、FormをKeyboardだけで操作できる
- 操作順が視覚順・読み順と一致するか確認する

## Escape

- 開閉型Navigationなど、閉じる必要があるUIはEscape操作を確認する

## focus-visible

- Keyboard focusを視認できる
- focus表示を無効化しない

## Tap Target

- CTA、Navigation、選択肢、FAQ、Form操作のタップ領域を確認する

## Color Contrast

- Body、見出し、CTA、Border、状態表示のコントラストを確認する
- 色だけで状態を伝えない

## prefers-reduced-motion

- 動きを減らす設定に配慮する
- 情報理解に不要なモーションを強制しない

## Form Error

- 対象項目、原因、修正方法が分かる表示にする
- 色だけに依存しない
- 必要に応じてエラー概要と入力項目を関連付ける

## Form Completion Message

- 送信結果を明確に示す
- 仮予約であり、michiからの確認メールをもって予約確定となることを伝える
- 支援技術でも完了状態を認識できるようにする

自動スコアだけで判断せず、Keyboard操作と実際の読み順も確認する。

---

# 6. IMAGE IMPLEMENTATION

- 写真は公開前にWeb表示用派生ファイルを検討する
- 原本画像は削除しない
- 過剰解像度の縮小、WebP化、圧縮は画像最適化工程で行う
- Hero画像は優先読み込みを検討する
- Hero以外は用途に応じてlazy loadingを検討する
- `width` / `height`または`aspect-ratio`でレイアウトシフトを抑える
- OGP 1200 × 630とfaviconは公開前に制作・確認する

現時点では画像最適化、WebP変換、OGP、favicon制作は行わない。

---

# 7. SEO / METADATA

公開前に以下を確認する。

- `title`
- `meta description`
- `canonical`
- OGP
- Twitter Card
- favicon
- `lang`
- `viewport`

正式公開URLが確定する前に、仮のcanonicalやOGP URLを勝手に設定しない。

---

# 8. IMPLEMENTATION ORDER

実装を開始する場合は、以下の順を基本とする。

1. HTMLの情報構造
2. Mobile Firstの共通CSS
3. 375px調整
4. 390px確認
5. JavaScriptを必要とする操作補助
6. 768px調整
7. 1024px調整
8. 1366px確認
9. 1440px確認
10. 全幅横断レビュー
11. Accessibility確認
12. SEO / Metadata確認
13. 画像最適化

今回のMarkdown整理では、この実装工程へ進まない。
