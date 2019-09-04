import React from 'react';

class Income extends React.Component{
    render(){
        return (
        <div>
            <h2>{this.props.id}</h2>
            <h2>{this.props.category}</h2>
            <h2>{this.props.name}</h2>
            <h3>{this.props.value}</h3>
        </div>
        );
    }
}


export default Income