import React from "react"
import {Link} from "react-router-dom"
import "./Block.css"


export default class Block extends React.Component {
    render() {
        return (
            <Link to={this.props.link}>
                <div className="block_page">
                    <div className="block_img_container">
                        <img className="block_img" alt="logo" src={this.props.img}/>
                    </div>
                    <div className="block_name">{this.props.name}</div>
                </div>
            </Link>
        );
    }
}