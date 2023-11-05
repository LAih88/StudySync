import React from "react"
import "./Problem.css"


export default class Problem extends React.Component {
    database = [
        {
          id: 1,
          name: "ECE241",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE241.jpg",
          link: "/course/ECE241/concepts",
          problem: []
        },
        {
          id: 2,
          name: "ECE212",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE212.jpg",
          link: "/course/ECE212/concepts",
          problem: []
        },
        {
          id: 3,
          name: "MAT291",
          img: "https://www.hanser.vip/project/university/study_sync/source/MAT291.jpg",
          link: "/course/MAT291/concepts",
          problem: [{
            question: "https://www.hanser.vip/project/university/study_sync/source/mat291_p1.png",
            answer: "https://www.hanser.vip/project/university/study_sync/source/mat291_a1.png"
          }]
        }
    ];
    // read data from database

    state = {text:"show answer", display: "none", comments: [
        {username: "Andy Liu", comment: "This is a test message."},
        {username: "Anonymous", comment: "Hello world!"}
    ]};

    viewAns = () => {
        if (this.state.display === "none") this.setState({text: "hide answer", display: "block"});
        else this.setState({text: "show answer", display: "none"});
    }

    addComment = (node) => {
        node.preventDefault();
        let newComments = this.state.comments;
        newComments.push({username:"Anonymous",comment:this.comment_value.value})
        this.setState({comments:newComments});
    }

    render() {
        let path = this.props.location.pathname.split("/");
        let name = path[path.length-2];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        if (this.data.problem.length === 0) {
            return (
                <div>
                    <p id="no_problem_page">No problem available for this course</p>
                </div>
            );
        }
        return (
            <div>
                <div id="problem_page">
                    <p className="problem_text">Problems related to the concepts:</p>
                    <img className="problem_img" src={this.data.problem[0].question} alt="problem"/><br/>
                    <button className="problem_button" onClick={this.viewAns}>{this.state.text}</button><br/><br/>
                    <img className="problem_img" src={this.data.problem[0].answer} alt="answer" style={{display:this.state.display}}/>
                </div>
                <div id="comment_page">
                    <p id="comment_text">Comments</p>
                    <div id="comment_his">
                        {this.state.comments.map(comment=>{
                            return (
                                <div className="comment_content">
                                    <div className="comment_username">{comment.username}:&nbsp;</div>
                                    <div className="comment_comment">{comment.comment}</div>
                                </div>
                            );
                        })}
                    </div>
                    <form id="comment_form" onSubmit={this.addComment}>
                        <input id="comment_input" type="text" ref={s=>this.comment_value=s}></input>
                        <button id="comment_submit" type="submit">send</button>
                        <div id="comment_bottom"></div>
                    </form>
                </div>
            </div>
        );
    }
}