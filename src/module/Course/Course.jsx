import React from "react"
import {NavLink, Route, Switch} from "react-router-dom"
import Concept from "../Concept/Concept"
import Note from "../Note/Note"
import Tool from "../Tool/Tool"
import Problem from "../Problem/Problem"
import Term from "../Term/Term"
import "./Course.css"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"


export default class Course extends React.Component {
    database = [
        {
          id: 1,
          name: "ECE241",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE241.jpg",
          link: "/course/ECE241/concepts"
        },
        {
          id: 2,
          name: "ECE212",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE212.jpg",
          link: "/course/ECE212/concepts"
        },
        {
          id: 3,
          name: "MAT291",
          img: "https://www.hanser.vip/project/university/study_sync/source/MAT291.jpg",
          link: "/course/MAT291/concepts"
        }
    ];
    // read data from database

    data = undefined;

    render() {
        let path = this.props.location.pathname.split("/");
        let name = path[path.length-2];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        if (this.data !== undefined) {
          return (
            <div id="course_page">
                <div id="course_nav">
                  <div id="course_name">{this.data.name}</div>
                  <NavLink to={"/course/"+this.data.name+"/concepts"} className="course_nav_link" activeClassName="course_nav_active">Concepts</NavLink>
                  <NavLink to={"/course/"+this.data.name+"/problems"} className="course_nav_link" activeClassName="course_nav_active">Problems</NavLink>
                  <NavLink to={"/course/"+this.data.name+"/notes"} className="course_nav_link" activeClassName="course_nav_active">Notes</NavLink>
                  <NavLink to={"/course/"+this.data.name+"/tools"} className="course_nav_link" activeClassName="course_nav_active">Tools</NavLink>
                </div>
                <div id="course_content">
                  <Switch>
                    <Route exact path={"/course/"+this.data.name+"/concepts"} component={Concept}/>
                    <Route exact path={"/course/"+this.data.name+"/problems"} component={Problem}/>
                    <Route exact path={"/course/"+this.data.name+"/notes"} component={Note}/>
                    <Route exact path={"/course/"+this.data.name+"/tools"} component={Tool}/>
                    <Route path={"/course/"+this.data.name+"/concepts/"} component={Term}/>
                    <Redirect to={"/course/"+this.data.name+"/concepts"}></Redirect>
                  </Switch>
                </div>
            </div>
          );
        } else {
          return (
            <div id="course_page">
              <p id="no_course_page">Wrong URL! Please go to the homepage!</p>
            </div>
          );
        }
    }
}