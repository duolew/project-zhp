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
                {row: 1},
                {row: 2},
                {row: 3},
                {row: 4},
                {row: 5},
                {row: 6},
                {row: 7},
                {row: 8},
                {row: 9},
                {row: 10},
                {row: 11},
                {row: 12},
                {row: 13},
                {row: 14},
                {row: 15},
                {row: 16},
                {row: 17},
                {row: 18},
                {row: 19},
                {row: 20},
                {row: 21},
                {row: 22},
                {row: 23},
                {row: 24},
                {row: 25},
                {row: 26},
                {row: 27},
                {row: 28},
                {row: 29},
                {row: 30},
                {row: 31},
                {row: 32},
                {row: 33},
                {row: 34},
                {row: 35},
                {row: 36},
                {row: 36},
                {row: 38},
                {row: 39},
                {row: 40},
                {row: 41},
                {row: 42},
                {row: 43},
                {row: 44},
                {row: 45},
                {row: 46},
                {row: 47},
                {row: 48},
                {row: 49},
                {row: 50},
                {row: 51},
                {row: 52},
                {row: 53},
                {row: 54},
                {row: 55},
                {row: 56},
                {row: 57},
                {row: 58},
                {row: 59},
                {row: 60},
                {row: 61},
                {row: 62},
                {row: 63},
                {row: 64},
                {row: 65},
                {row: 66},
                {row: 67},
                {row: 68},
                {row: 69},
                {row: 70}
            ]
        })
    })
    app.get('/iScroll-json2', function (req, res) {
        res.json({
            all_row:[
                {row: 80},
                {row: 81},
                {row: 82},
                {row: 83},
                {row: 84},
                {row: 85},
                {row: 86},
                {row: 87},
                {row: 88},
                {row: 89},
                {row: 90},
                {row: 91},
                {row: 92},
                {row: 93},
                {row: 94},
                {row: 95},
                {row: 96},
                {row: 97},
                {row: 98},
                {row: 99},
                {row: 100},
                {row: 101},
                {row: 102},
                {row: 103},
                {row: 104},
                {row: 105},
                {row: 106},
                {row: 107},
                {row: 108},
                {row: 109},
                {row: 100}
            ]
        })
    })

}