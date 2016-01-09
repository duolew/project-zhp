/**
 * Created by zhangpeng on 2015/11/30.
 */


var buf=new Buffer(10);

//写入
len=buf.write("www.pengweb.net");      //存入的是二进制
console.log(len);   //得到的是写入字节数  15

//读出
rea=buf.toString('ascii');                  //先将二进制转化成字符串，再将字符串转化成要输出的格式，例如ascii
console.log(rea);                           // 输出: （以ascii形式输出，起始，结束）
console.log( buf.toString('ascii',0,65));   // 输出: www.p
console.log( buf.toString('utf8',0,65));    // 输出: www.p
console.log( buf.toString(undefined,0,65)); // 使用 'utf8' 编码, 并输出: www.p

//注意：97，98，99····的ascii码分别是a,b,c····

//转换为JSON对象
json=buf.toJSON(buf);
console.log(json.data);  //[ 119, 119, 119, 46, 112, 101, 110, 103, 119, 101 ]   输出的就是二进制，不进行转换


//缓存区合并
var buf1=new Buffer(10);
len1 =buf1.write("我自己的网站");
con=Buffer.concat([buf1,buf]);
console.log(con.toString());   //一定要读取出来才行

//缓存区比较
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//缓存拷贝区
var buffer3=new Buffer(3);
buffer1.copy(buffer3);              //将buffer1拷贝给buffer3
console.log(buffer3.toString());


//缓存裁剪区
var buffer4=buffer1.slice(0,1);     //这里是剪掉保留1位
console.log(buffer4.toString());