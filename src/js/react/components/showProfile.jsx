var React = require("react");

var ShowProfileImg = React.createClass({
    render : function(){
        return (
            <div className="col-sm-3">
                <img className="img_avatar" alt="140x140" src={this.props.avatar_url} data-holder-rendered="true"/>
            </div>
        );
    }
});


var ShowProfileInfo = React.createClass({
    render : function(){
        return (
            <div className="row user-profile">    
                <ShowProfileImg avatar_url={this.props.avatar_url} />
                <div className="col-sm-9">
                    <div className="caption">
                        <div className="media-body">
                            <h1>{this.props.login}</h1>
                            <p>{this.props.bio}</p>
                        </div>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = ShowProfileInfo;