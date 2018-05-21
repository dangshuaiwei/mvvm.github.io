{
    "title": "Markdown",
    "tags": ["Markdown", "Vue"],
    "date": "2018-05-21",
    "desc": "Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式",
    "cover": "markcook.png"
}
 
### Markdown在vue项目中
使用一定要安装vue-markdow-loader,在webpack.base.conf.js配置  
{
	test: /\.md$/,
	loader: 'vue-markdown-loader',
}  

**加粗： **我加粗了**  

*斜体： *我是斜体*  

~~删除线：~~删除线~~  
 
