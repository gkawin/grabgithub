var React = require("react");
var Reflux = require("reflux");
var grabgitStore = require("../stores/grabgitStore");

var GithubUserForm = React.createClass({
    mixins: [
        Reflux.connect(grabgitStore)
    ],
    
    getInitialState : function(){
        return {
            userInput : 'sdfsdfsdfsdfs'
        };
    },
    handleSubmit: function(event){
       event.preventDefault();
       console.log(grabgitStore);
       grabgitStore.Store.fetchUser(React.findDOMNode(this.refs.username));
   },
   render: function(){
       console.log(this.state)
          return (
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input 
                                        ref="username" 
                                        className="form-control input-lg" 
                                        placeholder="Input github username"/>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-success btn-lg">OK!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
       
           )
   }
});

module.exports = GithubUserForm;