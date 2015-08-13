var React = require("react");

var PaginationPages = React.createClass({
    render : function(){
        return (
                <li className="Active">
                  <span>1 <span className="sr-only">(current)</span></span>
                </li>
            );
    }
});

var Pagination = React.createClass({
    render : function(){
        return (
            <nav>
              <ul className="pagination">
                <li className="disabled">
                  <span>
                    <span aria-hidden="true">&laquo;</span>
                  </span>
                </li>
                <PaginationPages/>);
              </ul>
            </nav>
        );
    }
});

var ReposList = React.createClass({
     render : function(){
            return (<li className="reposList">{this.props.items.name}</li>);
    }
});

var ShowRepos = React.createClass({
    render : function(){
        return (
            <div className="caption">
                <h2>Repository</h2>
                <ul className="showRepos">
                {this.props.reposData.map(function(result,idx){
                    return (<ReposList 
                        key={idx}
                        items={result} />);
                })}
                </ul>
            </div>
        );
    }
});

module.exports = ShowRepos;