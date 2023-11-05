import React from "react"
import Circle from "../Circle/Circle"
import "./Tool.css"


export default class Tool extends React.Component {
    database = [
        {
          id: 1,
          name: "ECE241",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE241.jpg",
          link: "/course/ECE241/concepts",
          tools: []
        },
        {
          id: 2,
          name: "ECE212",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE212.jpg",
          link: "/course/ECE212/concepts",
          tools: [
            {name: "2D Calculator", link: "https://www.desmos.com/calculator/kx5lufxcx7?lang=zh-C", img: "https://www.hanser.vip/project/university/study_sync/source/tool1_logo.png"},
            {name: "Integral Calculator", link: "https://www.wolframalpha.com/calculators/integral-calculator/",  img: "https://www.hanser.vip/project/university/study_sync/source/tool3_logo.png"}
          ]
        },
        {
          id: 3,
          name: "MAT291",
          img: "https://www.hanser.vip/project/university/study_sync/source/MAT291.jpg",
          link: "/course/MAT291/concepts",
          tools: [
            {name: "2D Calculator", link: "https://www.desmos.com/calculator/kx5lufxcx7?lang=zh-C", img: "https://www.hanser.vip/project/university/study_sync/source/tool1_logo.png"},
            {name: "3D Calculator", link: "https://www.geogebra.org/3d",  img: "https://www.hanser.vip/project/university/study_sync/source/tool2_logo.png"},
            {name: "Integral Calculator", link: "https://www.wolframalpha.com/calculators/integral-calculator/",  img: "https://www.hanser.vip/project/university/study_sync/source/tool3_logo.png"}
          ]
        }
    ];
    // read data from database

    render() {
        let path = this.props.location.pathname.split("/");
        let name = path[path.length-2];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        if (this.data.tools.length !== 0) {
          return (
              <div id="tool_page">
                  <p id="tool_text">There are tools available for this course!</p>
                  <div id="tool_content">
                    {this.data.tools.map((tool,index)=>{
                        return <Circle key={index} name={tool.name} link={tool.link} img={tool.img}/>
                    })}
                  </div> 
              </div>
          );
        } else {
          return (
            <div>
              <p id="no_tool_text">There are no available tools for this course</p>
            </div>
          );
        }   
    }
}