/**
 * Created by ≈Ù on 2015/4/6.
 */

require.config({
    baseUrl:"./",
    /*shim:{
        "seajslx":{
            exports:'seajslx'
        }
    },*/
    paths : {
        "jquery" : ["http://libs.baid1u.com/jquery/2.0.3/jquery", "jquery-1.11.2.min"],
        "seajslx": "seajslx"
    }
})
require(["seajslx"]);


/*require(["seajslx"],function($){
    $(function(){
        alert("load finished");
    })
})*/
