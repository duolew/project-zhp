module.exports = function(app){
    app.set('views','./cinema/client/page/ejs');
//首页路由请求
    app.get('/',function(res,req){
        req.render('index');
    })
//首页json数据返回
    app.get('/index-json', function (req, res) {
        res.json(
            {
                title: 'iMovie 首页',
                movies: [{
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 1,
                    poster: 'http://www.pengwe.net'
                }, {
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 2,
                    poster: 'http://www.pengwe.net'
                }, {
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 3,
                    poster: 'http://www.pengwe.net'
                }, {
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 4,
                    poster: 'http://www.pengwe.net'
                }, {
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 5,
                    poster: 'http://www.pengwe.net'
                }, {
                    title: '奇妙世纪 08 梦的还原器',
                    _id: 6,
                    poster: 'http://www.pengwe.net'
                }]
            }
        )
    })
        /*res.render('index', {
            title:'iMovie 首页',
            movies: [{
                title:'奇妙世纪 08 梦的还原器',
                _id: 1,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            },{
                title:'奇妙世纪 08 梦的还原器',
                _id: 2,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            },{
                title:'奇妙世纪 08 梦的还原器',
                _id: 3,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            },{
                title:'奇妙世纪 08 梦的还原器',
                _id: 4,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            },{
                title:'奇妙世纪 08 梦的还原器',
                _id: 5,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            },{
                title:'奇妙世纪 08 梦的还原器',
                _id: 6,
                poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
            }]
        })
    })*/

//admin page
    app.get('/admin/movie', function (req, res)  {
        res.render('admin', {
            title:'iMovie 后台管理',
            movie: {
                title: ' ',
                doctor: ' ',
                country: ' ',
                year: ' ',
                language: ' ',
                summary: ' ',
                poster: ' ',
                flash: ' '
            }
        })
    })

//detail page
    app.get('/movie/:id', function (req, res)  {
        res.render('detail', {
            title: 'iMovie 影片详情页',
            movie: {
                title: '奇妙世纪 08 梦的还原器',
                doctor: '程亮/林博',
                country: '大陆',
                year: 2014,
                language: '汉语',
                poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
                flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf',
                summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。'
            }
        })
    })

//list page
    app.get('/admin/list', function (req, res)  {
        res.render('list', {
            title:'iMovie 后台-影片列表',
            movies: [{
                _id: 1,
                title: '奇妙世纪 08 梦的还原器',
                doctor: '程亮/林博',
                country: '大陆',
                year: 2014,
                language: '汉语',
                summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。',
                poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
                flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf'
            }]
        })
    })

}








/*
module.exports = function(app,Movie,_){
    app.set('views','./cinema/client/page/pages');

//index page
    app.get('/',function(req,res){
        Movie.fetch(function(err,movies){
            if(err){
                console.log(err)
            }
            res.render('index',{       //这里这个对象是传给index模板的一个变量值
                title:'首页',
                movies: movies      //这个第二个movies是一个集合名，数据库会自己创建一个
            })
        })
    });

//detail page
    app.get('/movie/:id',function(req,res){
        var id = req.params.id;
        Movie.findById(id,function(err,movie){
            if(err){
                console.log(err)
            }
            res.render('detail',{       //这里这个对象是传给index模板的一个变量值
                title:'详情页',
                movie: movie
            })
        })

    })

//admin page
    app.get('/admin/movie',function(req,res){
        res.render('admin',{       //这里这个对象是传给index模板的一个变量值
            title:'后台管理页',
            movie: {                    //movies集合中创建movie的文档
                title: "",
                doctor: "",
                country: "",
                language: "",
                year: "",
                poster: "",
                summary: ""
            }
        })
    })

//admin update movie
    app.get('/admin/update/:id',function(req,res){
        var id = req.params.id;
        if(id){
            Movie.findById(id,function(err,movie){
                res.render('admin',{
                    title: 'cinema 后台更新页',
                    movie: movie
                })
            })
        }
    })

//admin post movie        后来post过来的数据
    app.post('/admin/movie/new',function(req,res){   //前边一定要加/,应该是添加数据库
        var id = req.body.movie._id;
        var movieObj = req.body.movie;
        var _movie

        if(id !== 'undefined'){                    //判断是否有这本书的id，如果有的话
            Movie.findById(id,function(err,movie){
                if(err){
                    console.log(err);
                }
                _movie = _.extend(movie,movieObj)
                _movie.save(function(err,movie){      //进行更新书
                    if(err){
                        console.log(err)
                    }
                    res.redirect('/movie/'+movie._id)  //重新定向
                })
            })
        }

        else{                              //如果没有的话
            _movie = new Movie({             //这里是Movie
                doctor: movieObj.doctor,
                title: movieObj.title,
                country: movieObj.country,
                language: movieObj.language,
                year: movieObj.year,
                poster: movieObj.poster,
                summary: movieObj.summary,
                flash: movieObj.flash
            })

            _movie.save(function(err,movie){      //进行更新书
                if(err){
                    console.log(err)
                }
                res.redirect('/movie/'+movie._id)  //重新定向
            })
        }

    })

//list page
    app.get('/admin/',function(req,res){
        Movie.fetch(function(err,movies){
            if(err){
                console.log(err)
            }
            res.render('list',{       //这里这个对象是传给index模板的一个变量值
                title:'列表页',
                movies: movies
            })
        })
    })
//list delete movie
    app.delete('/admin/list',function(req,res){
        var id = req.query.id

        if(id){
            Movie.remove({_id:id},function(err,movie){
                if(err){
                    console.log(err)
                }
                else{
                    res.json({success:1})
                }
            })
        }
    })
}
*/

