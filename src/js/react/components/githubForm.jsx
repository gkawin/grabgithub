var React = require("react");

var GithubUserForm = React.createClass({
    getInitialState : function(){
        return ({
            text : ''
        });
    },
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
       var value =this.state.text;
          return (
                <div id="form_hookuser" className="jumbotron">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group input-group-lg">
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">OK!</button>
                            </span>
                            <input 
                                type="text" 
                                name="username" 
                                ref="username" 
                                className="form-control" 
                                placeholder="Search for..."/>
                        </div>
                    </form>
                </div>
           )
   }
});

module.exports = GithubUserForm;