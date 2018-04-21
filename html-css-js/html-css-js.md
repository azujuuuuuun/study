# HTMLとCSSのプラクティス

### テンプレ
```
@charset "UTF-8";

html {
  font-size: 62.5%;
}

body {
  font-size: 1.2rem;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}
```
### 要素名にスタイルを指定しない
- 要素名に対してスタイルを指定していると、HTMLの編集と同時にセレクタを変更するためにCSSファイルも修正しなくてはならなくなる
- 要素名ではなくクラスに対してスタイルを指定しておけば、HTMLに多少の変更があってもCSSがその影響を受けにくくなるので保守性が上がる
- a要素、input要素、textarea要素など「その要素でないと機能が成立しない」場合は要素の種類が変わる可能性が低いため、要素名に直接スタイルを指定するデメリットも小さくなる
