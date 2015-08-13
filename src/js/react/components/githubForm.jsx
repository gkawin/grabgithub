var React = require("react");

var GithubUserForm = React.createClass({
    handleSubmit: function(event){
       event.preventDefault();
       var userInput = React.findDOMNode(this.refs.username);
       if (userInput.value == ''){
           alert("Please input github username");
           return false;
       }
       this.props.findUser(userInput.value);
       userInput = '';
   },
   render: function(){
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