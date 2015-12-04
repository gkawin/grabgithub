var React = require('react')
var App = require("./components/App.jsx")

var Root = React.createClass({
    render : function (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <App />
                    </div>
                </div>
           </div>
        )
    }
})

React.render(<Root />, document.getElementById('content'))
