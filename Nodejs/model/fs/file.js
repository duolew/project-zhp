/**
 * Created by zhangpeng on 2015/12/1.
 */
var fs = require('fs');

//异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("异步读取："+data.toString());
})

//同步读取
var data=fs.readFileSync('input.txt');
console.log("同步读取："+data.toString());
console.log("程序执行完毕");


//异步打开文件
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);  //没有return也可以,也可以写成err.stack
    }
    console.log('打开文件成功');
})


//获取文件信息
fs.stat('input.txt',function(err,stats){
    console.log(stats);
    console.log(stats.isFile());               //true 判断是不是文件
    console.log(stats.isDirectory())            //false 判断是否为目录
});

//写入文件
console.log("准备写入文件");
fs.writeFile('input.txt','这是写入的内容',function(err){    //写入数据会覆盖掉原数据
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功');
    console.log('读取写入数据');
    fs.readFile('input.txt',function(err,data){
        if(err){
            console.log(err);
        }
        console.log('读取数据：'+data.toString());
    })
});

//读取文件

var buf = new Buffer(1024);
console.log('读取文件开始');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('打开文件成功');
    console.log('准备读取文件');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes+'字节被读取');
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
    })
});


//关闭文件（接着上边那个写）

var buf = new Buffer(1024);
console.log('读取文件开始');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('打开文件成功');
    console.log('准备读取文件');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes+'字节被读取');
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }

        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log("文件关闭成功")
        })
    })
});


//截取文件              先打开，后截取，再读取，最后关闭
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('打开文件成功');
    console.log('准备读取文件');
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("截取成功")
        console.log('再读取相同文件');
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString());
            }

            //关闭文件
            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("文件已经关闭")
            })
        })
    })
});


//删除文件

//console.log("准备删除文件");
//fs.unlink('in.txt',function(err){
//    if(err){
//        console.log(err);
//    }
//    console.log('删除成功');
//})

//创建目录
//console.log("test");
//fs.mkdir('test1',function(err){   //不知道为什么在这个文件里只能创建一级目录，单放到一个文件内就可以创建二级的
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
//});

//读取目录
//console.log("查看 /test 目录");
//fs.readdir("test1",function(err, files){    //只能读取下边一层目录，也可以读取这一层的文件名
//    if (err) {
//        return console.error(err);
//    }
//    files.forEach( function (file){
//        console.log( file );
//    });
//});

//删除目录
console.log("准备删除目录");
fs.rmdir("./test1/1",function(err){    //可以指定删除第二层目录的,但是必须为空文件夹
    if (err) {
        return console.error(err);
    }
    console.log("读取test 目录");
    fs.readdir("./test1",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});