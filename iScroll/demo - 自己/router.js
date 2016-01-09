/**
 * Created by zhangpeng on 2016/1/8.
 */
module.exports = function (app) {
    app.set('views', './iScroll');
    app.get('/iScroll', function (req, res) {
        req.render('index')
    })
    app.get('/iScroll-json1', function (req, res) {
        res.json({
            all_row: [
                {row: 'Ajax1'},
                {row: 'Ajax2'},
                {row: 'Ajax3'},
                {row: 'Ajax4'},
                {row: 'Ajax5'},
                {row: 'Ajax6'},
                {row: 'Ajax7'},
                {row: 'Ajax8'},
                {row: 'Ajax9'},
                {row: 'Ajax10'},
                {row: 'Ajax11'},
                {row: 'Ajax12'},
                {row: 'Ajax13'},
                {row: 'Ajax14'},
                {row: 'Ajax15'},
                {row: 'Ajax16'},
                {row: 'Ajax17'},
                {row: 'Ajax18'},
                {row: 'Ajax19'},
                {row: 'Ajax20'},
                {row: 'Ajax21'},
                {row: 'Ajax22'},
                {row: 'Ajax23'},
                {row: 'Ajax24'},
                {row: 'Ajax25'},
                {row: 'Ajax26'},
                {row: 'Ajax27'},
                {row: 'Ajax28'},
                {row: 'Ajax29'},
                {row: 'Ajax30'},
                {row: 'Ajax31'},
                {row: 'Ajax32'},
                {row: 'Ajax33'},
                {row: 'Ajax34'},
                {row: 'Ajax35'},
                {row: 'Ajax36'},
                {row: 'Ajax36'},
                {row: 'Ajax38'},
                {row: 'Ajax39'},
                {row: 'Ajax40'},
                {row: 'Ajax41'},
                {row: 'Ajax42'},
                {row: 'Ajax43'},
                {row: 'Ajax44'},
                {row: 'Ajax45'},
                {row: 'Ajax46'},
                {row: 'Ajax47'},
                {row: 'Ajax48'},
                {row: 'Ajax49'},
                {row: 'Ajax50'},
                {row: 'Ajax51'},
                {row: 'Ajax52'},
                {row: 'Ajax53'},
                {row: 'Ajax54'},
                {row: 'Ajax55'},
                {row: 'Ajax56'},
                {row: 'Ajax57'},
                {row: 'Ajax58'},
                {row: 'Ajax59'},
                {row: 'Ajax60'},
                {row: 'Ajax61'},
                {row: 'Ajax62'},
                {row: 'Ajax63'},
                {row: 'Ajax64'},
                {row: 'Ajax65'},
                {row: 'Ajax66'},
                {row: 'Ajax67'},
                {row: 'Ajax68'},
                {row: 'Ajax69'},
                {row: 'Ajax70'}
            ]
        })
    });
    app.get('/iScroll-json2', function (req, res) {
        res.json({
            all_row:[
                {row: '第二页80'},
                {row: '第二页81'},
                {row: '第二页82'},
                {row: '第二页83'},
                {row: '第二页84'},
                {row: '第二页85'},
                {row: '第二页86'},
                {row: '第二页87'},
                {row: '第二页88'},
                {row: '第二页89'},
                {row: '第二页90'},
                {row: '第二页91'},
                {row: '第二页92'},
                {row: '第二页93'},
                {row: '第二页94'},
                {row: '第二页95'},
                {row: '第二页96'},
                {row: '第二页97'},
                {row: '第二页98'},
                {row: '第二页99'},
                {row: '第二页100'},
                {row: '第二页101'},
                {row: '第二页102'},
                {row: '第二页103'},
                {row: '第二页104'},
                {row: '第二页105'},
                {row: '第二页106'},
                {row: '第二页107'},
                {row: '第二页108'},
                {row: '第二页109'},
                {row: '第二页100'}
            ]
        })
    })

}