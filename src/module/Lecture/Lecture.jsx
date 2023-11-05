import React from "react"
import "./Lecture.css"


export default class Lecture extends React.Component {
    state = {display:"none"}

    pdfView = () => {
        if (this.state.display === "none") this.setState({display:"block"});
        else this.setState({display:"none"});
    }

    render() {  
        return (
            <div className="lecture_page">
                <p onClick={this.pdfView} className="lecture_text">{this.props.name}</p>
                <iframe src={this.props.link} width="100%" height="500px" title={this.props.name} style={{display:this.state.display}} />
            </div>
        );
    }
}