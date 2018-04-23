# JavaScriptのモジュール機構

## Node.jsのモジュール
```
module.exports = {公開したいオブジェクト}

module.exports = {
  hoge: 'hoge',
  fuga: 'fuga'
}
```

```
const 公開されているオブジェクト = require('モジュールまでのファイルパス')

const mod = require('./mod')
console.log(mod.hoge)
```


## ES2015のモジュール
Node.jsでimport/exportを使うには、Babelを使って変換する
```
export 公開したい関数

export hoge = () => {
  console.log('hoge')
}

export fuga = () => {
  console.log('fuga')
}
```

```
import {オブジェクト名1, オブジェクト名2...} from 'モジュールまでのファイルパス'

import {hoge, fuga} from './mod.js'
hoge()
fuga()
```

```
import * as モジュール名 from 'モジュールまでのファイルパス'

import * as mod from './mod.js'
```

```
import {元のオブジェクト名 as 新しいオブジェクト名} from 'モジュールまでのファイルパス'

import {hoge as hogehoge} from './mod.js'
```

### モジュールのデフォルト要素を指定する
```
export default オブジェクト名

const hoge = {
  fuga: 'fuga'
}
export default hoge
```

```
import オブジェクト名 from 'モジュールまでのファイルパス'

import hoge from './mod.js'
```
