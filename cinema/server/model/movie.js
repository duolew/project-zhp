/**
 * Created by duole on 2015/12/13.
 */
//导出通过模式moviceSchema生成的movie模型1
var mongoose = require('mongoose')
var movieSchema = require('../lib/schemas/movie');
var Movie = mongoose.model('Movie1',movieSchema);   //编译生成Movie这个模型，后边传入模型名字(随便起不影响)及模式（不要引号）

module.exports = Movie;


