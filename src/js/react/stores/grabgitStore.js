var Reflux = require("reflux");
var $ = require("jquery");
var _ = require("lodash");

var grabgitAction = require("../actions/grabgitAction");

var service_endpoint = {
    url : 'https://api.github.com',
    rootpath: '/users/',
    auth : {
        client_id : '22d429fcbac9d428c6be',
        client_secret : '686ce23e6b051b653647243e82f74be7eea9f0ef'
    }
};

function callAjax(url,data)
{
    if(url === '' || typeof url === 'undefined' )
    {
        alert('please fill some input.');
        return false;
    }
    if(typeof data ==='undefined')
    {
        data = {};
    }
    
    //Oauth for extends limit access.
    var data_params = $.extend({},data,service_endpoint.auth)
    var request = $.ajax({
            url : url,
            dataType : 'json',
            data : data_params
        });
        
    return request;
}

function fetchUser(username)
{
    console.log(username)
}







var grabgitStore = Reflux.createStore({
    init : function(){
        this.listenToMany(grabgitAction);
    },
    onFetchUser : function(username){
        console.log(username);
    }
});

module.exports = grabgitStore;