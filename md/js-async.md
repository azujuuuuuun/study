# JavaScriptの非同期処理

## 歴史
- [promise, async / awaitの歴史と意味](https://issus.me/projects/100/issues/4)
  - callback
  - Promise
  - async/await

## 非同期処理の例
```
console.log('First');
setTimeout(() => {
  console.log('Second')
}, 3000)
console.log('Third')

// 実行結果
// First
// Third
// Second
```

### callback
```
const hoge = (arg) => {
  asyncFunction(arg, (err, data1) => {
    if (err) {
      throw err
    } else {
      console.log(data1)
      asyncFunction2(data1, (err, data2) => {
        if (err) {
          throw err
        } else {
          console.log(data2)
          asyncFunction3(data2, (err, data3) => {
            if (err) {
              throw err
            } else {
              ...
            }
          })
        }
      })
    }
  })
}
```
- 非同期関数の後に実行したい処理を関数として渡す（コールバック関数）
- コールバックが続くと、ネストが深くなり、可読性を損なう（コールバック地獄）

### Promise
```
const hoge = (arg) => {
  return new Promise((resolve, reject) => {
    asyncFunction(arg, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

hoge(arg).then((data1) => {
  console.log(data1)
  asyncFunction2(data1)
}).then((data2) => {
  console.log(data2)
  asyncFunction3(data2)
}).catch((err) => {
  console.log(err)
})
```

- 非同期関数をPromiseオブジェクトで包み、returnする
- コールバック関数をthenの中に書く
- errはcatchでキャッチされる

### acync/await
```
async function hoge (arg) {
  const data1 = await asyncFunction(arg)
  return data1
}

hoge(arg)
.then((data1) => {
  console.log(data1)
  asyncFunction2(data1)
}).then((data2) => {
  console.log(data2)
  asyncFunction3(data2)
}).catch((err) => {
  console.log(err)
})
```

- 非同期関数の結果を待ち合わせできる
- 同期関数みたい
- 参考
  - [async/await 入門（JavaScript）](https://qiita.com/soarflat/items/1a9613e023200bbebcb3)
