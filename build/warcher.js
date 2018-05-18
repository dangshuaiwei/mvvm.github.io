console.log('Watching dirs...')
//获取文件路径
const { resolve, basename } = require('path')
//监听文件目录chokidar.js
const chokidar = require('chokidar')
//异步读取，异步写入
const { readFileSync, writeFileSync } = require('fs')

const articleInfoObj = {}
const routes = [
  
]

function getArticleInfo (path) {
	//返回路径的最后一部分
  const fileName = basename(path)
  let content
  if (/\.md/.test(fileName)) {
  	//——dirname当前模块的文件夹名称等同于path.dirname
    content = readFileSync(resolve(__dirname, `../articles/${fileName}`)).toString().replace(/[\n\r]/g, '')
    const articlesInfo = JSON.parse(readFileSync(resolve(__dirname, '../articles/articles.json')).toString())
    try {
      const info = content.match(/\{(.*?)\}/)[1]
      articleInfoObj[fileName] = JSON.parse(`{${info}}`)
      writeFileSync(resolve(__dirname, '../articles/articles.json'), JSON.stringify(articleInfoObj, null, 2))
      console.log('articles.json has been updated.')
    } catch (__) {}
  }
}

function deleteArticles (path) {
  const fileName = basename(path)
  let articlesInfo
  if (/\.md/.test(fileName)) {
    articlesInfo = JSON.parse(readFileSync(resolve(__dirname, '../articles/articles.json')).toString())
    delete(articlesInfo[fileName])
    writeFileSync(resolve(__dirname, '../articles/articles.json'), JSON.stringify(articlesInfo, null, 2))
    console.log(`${fileName} has been removed`)
  }
}

const watcher = chokidar.watch(resolve(__dirname, '../articles'))

watcher
  .on('add', (path) => {
    console.log('add:' + path)
    getArticleInfo(path)
  })
  .on('change', (path) => {
    console.log('change: ' + path)
    getArticleInfo(path)
  })
  .on('unlink', (path) => {
    console.log('delete: ' + path)
    deleteArticles(path)
  })

module.exports = watcher