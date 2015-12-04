var React = require("react")

var ReposList = React.createClass({
     render : function (){
            return (<li className="media repos-list">
                <div className="media-body">
                    <h4>{this.props.items.name}</h4>
                </div>
            </li>)
    }
})

var ShowRepos = React.createClass({
    render : function (){
        return (
            <div className="caption">
                <h2>Repository:</h2>
                <ul className="showRepos media-list">
                {this.props.reposData.map(function (result,idx){
                    return (<ReposList 
                        key={idx}
                        items={result} />)
                })}
                </ul>
            </div>
        )
    }
})

module.exports = ShowRepos