var React = require("react");
var service_endpoint = {
    url : 'https://api.github.com',
    rootpath: '/users/',
    auth : {
        client_id : '22d429fcbac9d428c6be',
        client_secret : '686ce23e6b051b653647243e82f74be7eea9f0ef'
    }
};

var GithubUserForm = require('./githubForm.jsx');
var Showprofile = require('./showProfile.jsx');
var ShowRepos = require('./showRepository.jsx');
var ShowFollowers = require("./showFollowers.jsx");

////////////////////////// ALL FILE /////////////////////////////////////////
var App = React.createClass({
    /**
     * set initlize state.
     * @returns {AppAnonym$4.getInitialState.AppAnonym$5}
     */
    getInitialState: function() {
        return {
            userData : [],
            followersData : [],
            reposData : [],
            reposPerPage: 10
        };
    },
    
    /**
     * get Github posonal's details.
     * @param {string} username
     * @returns {undefined}
     */
    findUser : function(username){
        console.log("call find user");
        var url = service_endpoint.url+'/users/'+username
        var request = this._callAjax(url);
        
        //success handle
        request.success(function(response){
            this.setState({
                userData : response
            });
            
            //pagination repository
            this.findRepository(username,1);
            this.findFollowers(username);
        }.bind(this));
        
        //Error handle.
        request.fail(function(xhr,response){
            alert('no data found');
            return false;
        }.bind(this));
    },
    
    /**
     * 
     * @param {type} username
     * @returns {undefined}
     */
    findRepository : function(username,page){
        console.log("call findRepository : "+page);
        var url = service_endpoint.url+'/users/'+username+'/repos'
        var request = this._callAjax(url,{
            'page':page,
            'per_page':this.state.reposPerPage
        });
        
        //success handle
        request.success(function(response){
            this.setState({
                reposData :response
            });
        }.bind(this));
        
        //Error handle.
        request.fail(function(xhr,response){console.log("view repositiory exceeds.")}.bind(this));
    },
    
    /**
     * 
     * @param {type} username
     * @returns {undefined}
     */
    findFollowers : function(username){
        console.log("call findFollowers");
        var url = service_endpoint.url+'/users/'+username.toString().trim()+'/followers'
        var request = this._callAjax(url);
        
        //success handle
        request.success(function(response){
            this.setState({
                followersData : response
            });
      
        }.bind(this));
        
        //Error handle.
        request.fail(function(xhr,response){console.log("view followes exceeds.")}.bind(this));
    },
    /**
     * 
     * @param {type} username
     * @returns {jqXHR|Boolean}
     */
    _callAjax : function(url,data){
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
    },
    
    /**
     * render data.
     * @returns {undefined}
     */
    render : function(){
        console.log(this.state.userData.length);
        if(this.state.userData.length <= 0)
        {
            return (
                <GithubUserForm 
                    findUser={this.findUser}/>
                );
        }else
        {
            return (
                <div>
                    <GithubUserForm 
                        findUser={this.findUser}/>
                    
                    <div className="thumbnail">
                        <Showprofile 
                            avatar_url={this.state.userData.avatar_url} 
                            login={this.state.userData.login} 
                            bio={this.state.userData.bio}  />  
                        <div className="row user-detail">    
                            <div className="col-sm-2"> </div>
                            <div className="col-sm-5">
                            <ShowRepos 
                                reposData={this.state.reposData}
                                userData={this.state.userData}
                                findRepository={this.findRepository}/>
                            </div>
                            <div className="col-sm-5">
                            <ShowFollowers 
                                followersData={this.state.followersData}
                                findUser={this.findUser}/>
                            </div>
                        </div>    
                    </div>
                </div>    
            );
        }
    }
});


module.exports = App;