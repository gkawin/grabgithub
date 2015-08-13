var React = require("react");
var FollowerList  = React.createClass({
    render : function(){
        return (<li className="media list-followers" onClick={this.props.onClick}>
                    <div className="media-left  media-middle">
                        <img className="media-object img-circle img_avatar_follower" alt="140x140" src={this.props.items.avatar_url} data-holder-rendered="true"/>
                    </div>
                    <div className="media-body">
                        <h4>{this.props.items.login}</h4>
                    </div>
                </li>);
    }
});

var ShowFollowers = React.createClass({
    handleClickUser : function(username){
        this.props.findUser(username);
    },
    render : function(){
        return (
                <div className="caption">
                    <h2>Followers</h2>
                    <ul className="media-list">
                    {this.props.followersData.map(function(result,idx){
                        return (<FollowerList 
                            key={idx}
                            items={result}
                            onClick={this.handleClickUser.bind(null,result.login)}/>);
                    }.bind(this))}
                    </ul>
                </div>
        );
    }
});

module.exports = ShowFollowers;