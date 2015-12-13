/**
 * Created by duole on 2015/12/12.
 */
//这个模块主要是定义一个模式（处理数据库的数据属性模型及查询方法等）
var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({     //定义数据属性模型
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: String,
    meta: {
        createAt:{
            type: Date,
            default: Date.now()
        },
        updateAt:{
            type: Date,
            default: Date.now()
        }
    }
});

movieSchema.pre('save',function(next){        //来设置更新日期
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }
    else{
        this.meta.updateAt = Date.now()
    }

    next();              //一定要加这个，才能让存储流程继续往下去
});
movieSchema.statics = {           //静态方法来实现数据库查找。静态是类的是函数的，实例是对象的，一般都要new
    fetch:function(cb){           //取出数据库内所有数据
        return this
            .find({})                    //取出所有
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById:function(id,cb){           //取出数据库内所有数据
        return this
            .findOne({_id:id})          //取出某个值
            .sort('meta.updateAt')
            .exec(cb)
    }
};
module.exports = movieSchema;
