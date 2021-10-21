// non-blocking，進行 callback function 常用於資料寫入讀取，使用 readFile
// block 與 non-block 差別: https://blog.techbridge.cc/2019/10/05/javascript-async-sync-and-callback/
// in node.js doc: Blocking methods execute synchronously and non-blocking methods execute asynchronously.
// 簡單說:
// Blocking => sync => 同步執行，會塞 => readFileSync
// non-block => async => 非同步執行，不會塞 => readFile

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return 
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return 
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    })
  })
})