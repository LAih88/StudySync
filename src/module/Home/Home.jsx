import React from "react"
import Block from "../Block/Block"
import "./Home.css"


export default class Home extends React.Component {
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

    state = {search_value: ""};

    search = (node) => {
        node.preventDefault();
        this.setState({search_value: this.home_search.value});
    }

    render() {
        if (this.state.search_value === "") {
            return (
                <div id="home_page">
                    <div id="home_logo_container">
                        <img id="home_logo" alt="logo" src={"https://www.hanser.vip/project/university/study_sync/source/logo.jpg"}/>
                    </div>
                    <div id="home_form">
                        <form onSubmit={this.search}>
                            <input id="home_seach" type="text" placeholder="ECE291" ref={node=>this.home_search=node}/>
                            <button id="home_button" type="submit"></button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="home_page">
                    <div id="home_form">
                        <form onSubmit={this.search}>
                        <input id="home_seach" type="text" ref={node=>this.home_search=node} defaultValue={this.state.search_value}/>
                        <button id="home_button" type="submit"></button>
                        </form>
                    </div>
                    <div id="home_list">
                        {this.database.map(course=>{
                            if (course.name.toLowerCase() === this.state.search_value.toLowerCase() || course.name.toLowerCase().includes(this.state.search_value.toLowerCase())) {
                                return <Block key={course.id} name={course.name} img={course.img} link={course.link}/>;
                            } return <div></div>;
                        })}
                    </div>
                </div>
            );
        }
    }
}