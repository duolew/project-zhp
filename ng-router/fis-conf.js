/**
 * @file FIS 配置
 * @张鹏
 */


 //=========================================MD5======================================

// 加 md5

fis.match('*.{js,css,png}', {
  useHash: true
});

//时间戳设置

/* fis.set('date', new Date);

 fis.match('*.{js,css,png}', {
 query: '?t=' + (fis.get('date').getYear() + 1900)
 + (fis.get('date').getMonth() + 1)
 + (fis.get('date').getDate())
 });*/

/*     时间戳的另一种写法

 fis.set('new date', Date.now());
 fis.match('*.{js,css,png}', {
 query: '?=t' + fis.get('new date')
 });

*/

//======================================压缩=======================================

//     用了下边的打包合集，所以注释掉了这个

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

//====================================合并打包====================================

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        //不同页面打包到不同的包内，如果去掉的话就是只有一个包，如果想指定打包文件，请看注释
        //allInOne: true
    })
});

//     这个是分别指定打包文件的方法

fis.match('/client/static/js/*.js', {
    packTo: '/client/static/js/aio.js'
});
fis.match('/client/static/lib/*.js', {
    packTo: '/client/static/lib/lib_aio.js'
});
fis.match('/client/static/css/*.{less,css}', {
    packTo: '/client/static/css/aio.css'
});
fis.match('/client/static/lib/*.{less,css}', {
    packTo: '/client/static/lib/lib_aio.css'
});


//====================================less预编译======================================

fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})


//==================================Sprites图合并=====================================

// 启用 fis-spriter-csssprites 插件

/*fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});*/

//==============================禁用Sprites/添加md5/压缩============================

//因为是后边命令覆盖前边命令，所以这个放在最后边

fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
    useSprite: false,
    optimizer: null
})
