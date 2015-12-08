var React = require('react')

var ShowProfileImg = React.createClass({
    render : function (){
        return (
            <img className='media-object' alt='128x128' src={this.props.avatar_url} data-holder-rendered='true' width='128'  />
        )
    }
})


var ShowProfileInfo = React.createClass({
    render : function (){
        return (
            <div className='row user-profile'>
                <div className='media'>
                    <div className='media-left media-top'>
                        <ShowProfileImg avatar_url={this.props.avatar_url} />
                    </div>
                    <div className='media-body'>
                        <h1 className='media-heading'>{this.props.login}</h1>
                        <h4>Bio:</h4>
                        <p>{this.props.bio}</p>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = ShowProfileInfo