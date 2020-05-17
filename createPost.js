const fs = require("fs")
const dayjs = require("dayjs")

const bookName = process.argv[2] || "新笔记"
const namePath = `./src/posts/${bookName}`
const template = `---
title: ${bookName}
tags:
  - 
categories:
  - 
date: ${dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`)}
---
`

checkoutName(namePath)
let count = 1

function checkoutName(path) {
  fs.access(`${path}.mdx`, (err) => {
    if (err) {
      const data = new Uint8Array(Buffer.from(template))
      fs.writeFile(`${path}.mdx`, data, (err) => {
        if (err) throw err
        console.log( `已生成文件：${path.split('/').slice(-1)}.mdx`)
      })
    } else {
      count += 1
      checkoutName(count > 1 && +path.slice(-1) === count - 1 ? (path.slice(0, path.length - 1) + count) : (path + count))
    }
  })
}
