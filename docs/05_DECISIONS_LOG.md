# michi DECISIONS LOG

## 0. このファイルの位置づけ

このMarkdownは、**「michi PAPER DRIVER LESSON」** で何を決めたか、その理由、比較した方向・非採用方向を記録する正本です。

未確定事項をDecisionとして追加しません。各ReasonとAlternativeは既存正本に記録された方針・NG・比較条件から整理したもので、新しいサービス条件やコピーを追加するものではありません。今後の変更は、変更内容と理由を追記します。

---

# 1. INITIAL DECISIONS

既存ログの内容を維持する。

- Service: 出張型ペーパードライバー講習
- Brand: `michi`
- Main CV: 初回90分講習を予約する
- Design concept: `Calm Everyday Driving`
- Mobile first
- SP baseline: 375px
- Color direction: Blue Gray × Ivory × Soft Apricot
- Photo direction: Lifestyle Editorial

詳細な現行仕様は `00_PROJECT_BRIEF.md`、`01_CONTENT_STRUCTURE.md`、`02_DESIGN_RULES.md`、`03_IMAGE_ASSETS.md`、`04_IMPLEMENTATION_RULES.md` に記録する。

---

# 2. PROJECT / SERVICE DECISIONS

## Decision 01: 商材を出張型ペーパードライバー講習にする

### Decision

商材は、実際の生活ルートで練習できる出張型ペーパードライバー講習サービスとする。

### Reason

- 免許はあるが運転できないという明確な課題がある
- 送迎、通院、買い物など生活上の必要性と結びつく
- 不安 → 提供価値 → 初回講習予約というLPの心理導線を作れる
- 実際に使う道で練習するというサービスの違いを説明できる
- 写真、Safety、診断UI、予約フォームを通して情報設計と実装力を見せられる

### Alternative / Non-adopted direction

- 教習所内のコース練習だけを中心にした見せ方
- 車や運転技術そのものを主役にする自動車広告的な見せ方
- 見た目だけで成立し、課題からCVまでの接続が弱いテーマ

---

## Decision 02: 子育て中の送迎ニーズをメインターゲットにする

### Decision

メインターゲットは、子どもの送迎をきっかけに久しぶりに運転を再開したい子育て中の人とする。

### Reason

- 雨の日の送迎、急な通院、習い事、買い物など運転再開の具体的な必要性がある
- 「便利そう」だけではなく、必要なときに自分で動きたいという本音が明確
- 子どもを乗せる怖さ、家族へ頼る負担、駐車への不安など、LPで解消すべき不安を具体化できる
- 受講後の変化を日常の場面として見せられる

### Alternative / Non-adopted direction

- 年齢・性別だけで広く区切ったペーパードライバー全般
- 技術上達だけを目的とするターゲット設定
- 「すぐ克服できる」と急かす訴求

---

## Decision 03: CVを初回90分講習予約にする

### Decision

最終CVは「初回90分ペーパードライバー講習を予約する」、CTA正式文言は「初回90分講習を予約する」とする。

### Reason

- LPの主CVを一つに絞り、次の行動を明確にする
- 最初の一歩として、通常120分や3回パックより初回講習を強く見せる
- 予約フォームまでの情報設計を一本化できる
- ターゲットが不安を解消した後、そのまま具体的な行動へ進める

### Alternative / Non-adopted direction

- 無料相談を主CVにする
- 初回、通常、3回パックを同じ強さで並べる
- CTAを「送信」「申し込む」など、押した後の行動が分かりにくい文言にする

---

## Decision 04: ブランド名をmichiにする

### Decision

ブランド名は `michi` とする。

### Reason

「道」を意味する日本語のローマ字表記であり、次のサービス価値全体につながるため。

- いつもの送迎ルート
- スーパーまでの道
- 病院までの道
- これから自分で走れるようになる道

### Alternative / Non-adopted direction

固有の非採用ブランド名は記録されていない。未記録の候補を新しく作らない。

---

## Decision 05: 怖さを否定しないサービス設計にする

### Decision

「簡単」「すぐ慣れる」と急かさず、怖い状態からできることを少しずつ増やす。

### Reason

- ターゲットの行動できない理由に事故や失敗への恐怖がある
- 不安を否定しないことがブランド人格「やさしい・落ち着いた・頼れる」につながる
- 講習前ヒアリング、基礎確認、交通量の少ない道からの開始など、Safety設定と一貫する

### Alternative / Non-adopted direction

- 「克服」「すぐできる」「必ず運転できる」と断定する
- 不安を過度に煽る
- 希望ルートを必ず走れると表現する

---

# 3. CONTENT / INFORMATION ARCHITECTURE DECISIONS

## Decision 06: 心理導線を不安から行動まで段階化する

### Decision

LPを、不安・迷い → 判断材料 → 自分にも合いそう → 安心 → 行動の順で設計する。

### Reason

- ターゲットには技術面だけでなく、Safety、Instructor、料金、子ども同乗など複数の不安がある
- CTA前に判断材料を揃える必要がある
- Heroで説明を詰め込まず、各セクションへ役割を分けられる

### Alternative / Non-adopted direction

- Heroだけで料金・機能・Safetyをすべて説明する
- 不安の解消前にCTAだけを繰り返す
- よくあるLPの順番を理由なく採用する

---

## Decision 07: Driving Checkをサービス選択支援UIにする

### Decision

Driving Checkは「何から練習すればいいか分からない」という課題を解決するUIとして設計する。

### Reason

- 行動できない理由の一つに、練習の始め方が分からないことがある
- 予約時に自分の不安や希望を整理しやすくなる
- LP内でJavaScriptの操作設計を見せられる

### Alternative / Non-adopted direction

- ゲーム的な性格診断にする
- Driving Checkを画面画像として作る
- JavaScriptが動かなければ主要情報が読めない構造にする

---

# 4. DESIGN DECISIONS

## Decision 08: Design ConceptをCalm Everyday Drivingにする

### Decision

Design Conceptは `Calm Everyday Driving` とし、「教習」ではなく「安心して運転できる日常」を見せる。

### Reason

- サービス価値の中心は技術の誇示ではなく、日常を自分で動かせる変化にある
- ターゲットの恐怖を強めず、生活サービスとして近づきやすくする
- 専門サービスとしての信頼も失わないよう、生活サービス70% / 専門サービス30%を目安にする

### Alternative / Non-adopted direction

- 強い青や黒
- スピード感
- 道路標識モチーフ
- 車を大きく見せる
- 「克服」「上達」を強調する

---

## Decision 09: Blue Gray × Ivory × Soft Apricotを採用する

### Decision

配色は次を正式カラーとする。

- Base / Warm Ivory `#FAF8F3`
- Main / Calm Blue Gray `#7896A1`
- Deep / Deep Slate `#354A52`
- Sub / Mist Blue `#DCE6E8`
- Accent / Soft Apricot `#E5AD82`
- White `#FFFFFF`

### Reason

- Ivoryで暮らし、温かさ、余白を作る
- Blue Grayで安心、信頼、落ち着きを示す
- Deep Slateで本文の可読性と専門性を支える
- Mist BlueでSafetyやFeaturesを穏やかにグルーピングする
- Soft ApricotをCTAへ限定的に使い、行動の優先順位を作る

### Alternative / Non-adopted direction

- 自動車サイトに多い強い青、黒、強いコントラスト
- CTA以外にもAccentを多用する
- 子育て向けを理由に可愛さや丸さを強くする

---

## Decision 10: 写真をLifestyle Editorialにする

### Decision

写真は、日本の郊外・住宅地の日常を柔らかな自然光、低〜中彩度で見せるLifestyle Editorial方向とする。

### Reason

- 車ではなく、子どもとの日常に車が自然にある未来を主役にするため
- 広告的な満面の笑顔より、普通の日常に近い信頼感を作るため
- Brand PersonalityとBlue Gray / Ivoryの配色に合わせるため
- 複数写真を同じブランドの撮影シリーズとして見せるため

### Alternative / Non-adopted direction

- 高級車広告風
- スピード感やドラマチックな光
- 車だけの商品写真
- 過度に整った住宅広告風
- AI特有の不自然なツヤやCG感
- 困り顔を強調して不安を煽る写真

---

## Decision 11: Safetyの複雑なアイコンだけ画像制作し、Lesson / FeaturesはSVG予定にする

### Decision

Safetyの補助ブレーキ、保険・事故対応、自家用車 / 講習車は正式画像を使用する。Lesson / Featuresのシンプルな線画アイコンはSVG実装を予定する。

### Reason

- Safetyは仕組みや対応内容を一目で伝える必要があり、複雑な図柄が信頼形成を補助する
- Lesson / Featuresは単純な概念が中心で、SVGのほうが線幅、色、サイズをUIに合わせて管理しやすい
- すべてを画像生成せず、写真と競合しない一貫した線画表現にできる
- 小さな表示やレスポンシブでも調整しやすい

### Alternative / Non-adopted direction

- Lesson / Features / Flowをすべて画像生成する
- 複数アイコンを1枚の画像にまとめる
- グラデーションや過度な丸みを使う
- Driving Checkを画像として制作する

---

## Decision 12: 375pxをSP正本にする

### Decision

Mobile Firstで375pxを最初に完成させ、375 → 390 → 768 → 1024 → 1366 → 1440pxの順で確認する。

### Reason

- SPでの1カラム、読み順、写真とテキスト、CTA、Formを最初に整えるため
- 情報を横並びにしすぎず、ターゲットが読み進めやすい構造を優先するため
- 小さい画面で成立する情報優先度を先に決め、PCへ拡張するため

### Alternative / Non-adopted direction

- PCから先に作る
- 確認幅ごとにmedia queryを作る
- 375pxが固まる前にPC調整へ進む
- 1440pxで本文を画面いっぱいに広げる

---

# 5. REFERENCE SITE POLICY

## Decision 13: 参考サイトは設計思想だけを分析する

### Decision

参考サイト `https://recruit.bellezeup.com/` は、商材・文章・配色・固有レイアウトをコピーせず、情報設計や視線誘導の考え方を分析する。

### Reason

参考にする要素：

- Heroで説明しすぎない
- ユーザーの関心順に情報を並べる
- 不安を具体的に分解して先回りして解消する
- メリットだけでなく不安要素や現実的な懸念も扱う
- 人物写真を信頼形成に使う
- CTA前に判断材料を揃える
- 大きな写真、余白、Editorial寄りのTypography
- 英字ラベルを視覚、日本語見出しを意味として使い分ける
- 派手なインタラクションより、読み進めるためのUIを優先する

### Alternative / Non-adopted direction

- コピー文章を流用する
- 固有レイアウトをそのまま再現する
- 写真、ロゴ、ブランドカラー、独自UI表現をコピーする

---

# 6. COPY DECISIONS

## Decision 14: Problem〜Reservation Formの主要本文コピーを正式確定する

### Decision

Problem〜Reservation Formまで、今回提示された見出し・導入文・本文・締め・設問・項目・CTAなどの主要コピーを `01_CONTENT_STRUCTURE.md` の正式コピーとして確定する。

添付に実文が記載されていない詳細本文は新規作成せず、未確定として残す。

### Reason

- HTML実装前に正式テキストを固定する
- 実装時にAIが文章を勝手に補完しないようにする
- デザインと情報設計の基準を作る

### Alternative / Non-adopted direction

- 実装時にコピーを都度補完する
- 提示されたコピーを要約・短縮・言い換えする
- 未提示の詳細本文を推測で作成する

---

# 7. INSTRUCTOR DECISIONS

## Decision 15: 正式Instructorを男性の佐倉 遼に確定

### Decision

正式Instructorは、男性の**佐倉 遼（さくら りょう）**とする。

表記：

```text
michi Instructor
佐倉 遼
```

### Reason

正式採用したInstructor Portraitが男性であり、写真と人物設定を一致させるため。また、落ち着き・やさしさ・頼もしさがmichiのブランド人格と一致するため。

### Alternative / Non-adopted direction

旧女性Instructor設定（佐倉 真帆を含む）は正式採用前の仮案として扱い、正式設定には採用しない。

具体的な勤務年数、資格名、所属教習所名は未確定のため、勝手に追加しない。

---

# 8. SERVICE AREA / POLICY DECISIONS

## Decision 16: 対応エリアを東京都案から、名古屋市・愛知県近郊へ変更

### Decision

対応エリアを東京都案から、名古屋市・愛知県近郊へ変更する。

主な対応エリア：

- 名古屋市
- 豊明市
- 日進市
- 長久手市
- 東郷町

周辺対応エリア：

- 大府市
- 刈谷市
- みよし市
- 尾張旭市

対応エリア内の出張料金は講習料金に含む。対応エリア外は、場所によっては相談可能とする。エリア外の追加料金は未確定とする。

### Reason

子育て中の送迎・買い物・通院など、車を使う日常生活をmichiのサービス価値として見せやすく、今回の架空サービス設定との整合性が高いため。

### Alternative / Non-adopted direction

東京都23区＋東京西部近郊を対応エリアとする案は、愛知県案へ変更する前の旧案として扱い、正式設定には採用しない。

## Decision 17: キャンセル・振替・悪天候・遅刻ルールを正式化

### Decision

- 前日18:00までのキャンセル・日程変更は無料
- 前日18:00以降のキャンセル・日程変更は受講料金の50%
- 当日キャンセルは受講料金の100%
- 無断キャンセルは受講料金の100%
- お子さまの急な体調不良による日程変更は、1予約につき1回までキャンセル料なしで振替可能。ただし、無断キャンセルには適用しない
- 大雨・強風・積雪・路面凍結など、michi側が安全なレッスン実施が難しいと判断した場合は、キャンセル料なしで日程変更。小雨は原則実施可能とし、道路・気象状況を見て判断する
- 利用者が遅刻した場合、原則としてレッスン終了時刻は延長しない。安全確認に十分な時間を確保できない場合は、レッスン内容を変更する可能性がある

### Reason

利用条件を明確にし、子育て中の利用者への配慮と、安全を優先したレッスン運営を両立するため。

### Alternative / Non-adopted direction

キャンセル条件、子どもの急病時対応、悪天候時対応、遅刻時対応を未確定のままにする案は採用しない。

---

# 9. SAFETY ASSET DECISIONS

## Decision 18: Safetyアイコンを正式採用PNG7点へ統一

### Decision

Safetyセクションは、補助ブレーキ、事前ヒアリング、無理に公道へ出ない、万一への備え、インストラクター、車を選べる、子どもの同乗に対応する正式採用PNG7点を使用する。

旧3点のみのPNG運用と、実装途中のinline SVG方針は正式方針として採用しない。

### Reason

- 旧Safetyアイコンは、一部項目にしか画像がなく、統一感と意味の分かりやすさに課題があった
- 7項目すべてに対応する正式素材を揃え、Safetyセクションを視覚的に一貫させる
- 見出しとアイコンの対応を明確にし、安全への取り組みを直感的に理解しやすくする

### Alternative / Non-adopted direction

- 一部項目のみPNGを使用し、残りをテキストだけで構成する
- Safetyアイコンをinline SVGで実装する
- 用途の異なるアイコンを同一素材で代用する

---

# 10. VOICE ASSET DECISIONS

## Decision 19: Voiceでは共通の抽象人物アイコン1点を使用

### Decision

Voiceでは人物写真を使わず、3件すべてに共通の抽象人物アイコン1点を使用する。

### Reason

- 架空サービスで複数AI人物を並べることによる不自然さを避ける
- Voiceの内容を主役にする
- 視覚的な統一感を持たせる
- 特定人物の体験談写真だと誤認させない

### Documentation update

VoiceのBefore / Lesson / After本文はすでに正式確定済みだったが、`01_CONTENT_STRUCTURE.md`への反映漏れがあったため、実装済みの正式コピーに合わせて正本を更新した。

### Alternative / Non-adopted direction

- Voiceごとに異なる人物写真を使用する
- 共通アイコンを特定利用者の顔写真のように扱う

---

# 11. OPEN DECISIONS

以下は未確定のため、Decisionとして確定しない。

- `michi / PAPER DRIVER LESSON` の最終表記仕様
- English Fontの最終選定（Inter / DM Sans）
- 対応エリア外の追加料金
- Instructorの具体的な勤務年数・資格名・所属教習所名
- Safetyの具体的な補償内容・適用条件
- Driving Check各結果の詳細本文・おすすめ練習フロー・CTA・分岐挙動
- Flow各STEPの本文
- Voice 3件のBefore・Lesson・After本文
- Priceの初回90分含有内容・おすすめ対象・通常120分説明・3回パック例・プラン選び説明
- FAQ Q1〜Q8の正式回答文
- Reservation Formの正式な選択肢・placeholder・具体的なエラー文
- Reservation Formの送信先・送信方法・処理
- Container、Spacing、Border Radius、breakpointなどの正式数値
- OGP
- favicon
- 公開URL、canonical、OGP URL

---

# 12. STATUS NOTE

元の `00_PROJECT_BRIEF.md` にあった「正式画像制作、ロゴ制作、Git / GitHubが未着手」という進行状況は、その後の作業で更新された。

現在は、正式写真7点、Safetyアイコン7点、ロゴ1点をプロジェクトへ格納済みで、ローカルGit管理と初回commitまで完了している。GitHub remote、push、HTML / CSS / JavaScript実装、公開、OGP、faviconは未着手。
