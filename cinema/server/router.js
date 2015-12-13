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

