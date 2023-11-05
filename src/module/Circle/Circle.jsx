import React from 'react'
import "./Circle.css"


export default class Circle extends React.Component {
    render() {
        return (
            <div className="circle_page">
                <div className="tool_circle">
                    <a href={this.props.link}>
                        <img src={this.props.img} alt={this.props.name}></img>
                        <p className="tool_name">{this.props.name}</p>
                    </a>
                </div>
            </div>  
        );
    }
}