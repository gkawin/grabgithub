
var React = require('react')
var GithubUserForm = require('./githubForm.jsx')
var Showprofile = require('./showProfile.jsx')
var ShowRepos = require('./showRepository.jsx')
var ShowFollowers = require('./showFollowers.jsx')

var service_endpoint = {
  url : 'https://api.github.com',
  rootpath: '/users/',
  auth : {
      client_id : '22d429fcbac9d428c6be',
      client_secret : '686ce23e6b051b653647243e82f74be7eea9f0ef'
  }
}

var App = React.createClass({
    /**
     * set initlize state.
     * @returns {AppAnonym$4.getInitialState.AppAnonym$5}
     */
    getInitialState () {
        return {
            userData : [],
            followersData : [],
            reposData : []
        }
    },

    /**
     * get Github personal's details.
     * @param {string} username
     * @returns {undefined}
     */
    findUser (username) {
        var url = service_endpoint.url+'/users/'+username
        var request = this._callAjax(url)

        //success handle
        request.success(function (response){
            this.setState({
                userData : response
            })

            this.findRepository(username)
            this.findFollowers(username)
        }.bind(this))

        //Error handle.
        request.fail(function (xhr,response){
            alert('no data found')
            return false
        }.bind(this))
    },

    /**
     * get Github repository list.
     * @param {type} username
     * @returns {undefined}
     */
    findRepository : function (username) {
        var url = service_endpoint.url+'/users/'+username+'/repos'
        var request = this._callAjax(url)

        //success handle
        request.success(function (response) {
            this.setState({
                reposData :response
            })
        }.bind(this))

        //Error handle.
        request.fail(function (xhr,response){console.error('view repositiory exceeds.')}.bind(this))
    },

    /**
     * get Github followers list.
     * @param {type} username
     * @returns {undefined}
     */
    findFollowers : function (username){
        var url = service_endpoint.url+'/users/'+username+'/followers'
        var request = this._callAjax(url)

        //success handle
        request.success(function (response){
            this.setState({
                followersData : response
            })

        }.bind(this))

        //Error handle.
        request.fail(function (xhr,response){console.error('view followes exceeds.')}.bind(this))
    },

    /**
     * call API gihub service by GET method.
     * @param {type} username
     * @returns {jqXHR|Boolean}
     */
    _callAjax : function (url,data){
        if(url === '' || typeof url === 'undefined' )
        {
            alert('please fill some input.')
            return false
        }
        if(typeof data ==='undefined')
        {
            data = {}
        }

        //Oauth for extends limit access.
        var data_params = $.extend({},data,service_endpoint.auth)
        var request = $.ajax({
                url : url,
                dataType : 'json',
                data : data_params
            })

        return request
    },

    /**
     * render data.
     * @returns {undefined}
     */
    render : function (){
        if(this.state.userData.length <= 0)
        {
            return (
                <div>
                    <GithubUserForm
                        findUser={this.findUser} />
                </div>
                )
        }else
        {
            return (
                <div>
                    <GithubUserForm
                        findUser={this.findUser}/>

                        <div className='panel'>
                            <div className='panel-body'>
                                    <Showprofile
                                        avatar_url={this.state.userData.avatar_url}
                                        login={this.state.userData.login}
                                        bio={this.state.userData.bio}  />
                                <div className='row user-detail'>
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-5'>
                                        <ShowFollowers
                                            followersData={this.state.followersData}
                                            findUser={this.findUser} />
                                    </div>
                                    <div className='col-sm-5'>
                                        <ShowRepos
                                            reposData={this.state.reposData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }
    }
})


module.exports = App
