import React from "react"
import Lecture from "../Lecture/Lecture"
import "./Node.css"


export default class Note extends React.Component {
    database = [
        {
          id: 1,
          name: "ECE241",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE241.jpg",
          link: "/course/ECE241/concepts",
          notes: []
        },
        {
          id: 2,
          name: "ECE212",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE212.jpg",
          link: "/course/ECE212/concepts",
          notes: []
        },
        {
          id: 3,
          name: "MAT291",
          img: "https://www.hanser.vip/project/university/study_sync/source/MAT291.jpg",
          link: "/course/MAT291/concepts",
          notes: [
            {link: "https://www.hanser.vip/project/university/study_sync/source/mat291_lecture1.pdf", name: "Lecture 17: Line Integrals of Vector Dot Products"},
            {link: "https://www.hanser.vip/project/university/study_sync/source/mat291_lecture2.pdf", name: "Lecture 18: Example Calculations of Line Integrals in 2d"}
         ]
        }
    ];
    // read from database

    render() {
        let path = this.props.location.pathname.split("/");
        let name = path[path.length-2];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        if (this.data.notes.length !== 0) {
            return (
                <div id="note_page">
                    <p id="note_text">These are lecture notes available for you:</p>
                    {this.data.notes.map((lec,index)=>{
                        return <Lecture key={index} link={lec.link} name={lec.name}/>
                    })}
                    <form id="note_form">
                        <button type="submit" id="note_submit">Submit Lecture Notes</button>
                    </form>
                    <div id="note_bottom"></div>
                </div>
            );
        } else {
            return (
                <div id="note_page">
                    <p id="no_note_text">There are currently no lecture notes available</p>
                    <form id="note_form">
                        <button type="submit" id="note_submit">Submit Lecture Notes</button>
                    </form>
                </div>
            );
        }
    }
}