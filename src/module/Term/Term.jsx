import React from "react"
import "./Term.css"


export default class Term extends React.Component {
    database = [
        {
          id: 1,
          name: "ECE241",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE241.jpg",
          link: "/course/ECE241/concepts",
          concept: []
        },
        {
          id: 2,
          name: "ECE212",
          img: "https://www.hanser.vip/project/university/study_sync/source/ECE212.jpg",
          link: "/course/ECE212/concepts",
          concept: []
        },
        {
          id: 3,
          name: "MAT291",
          img: "https://www.hanser.vip/project/university/study_sync/source/MAT291.jpg",
          link: "/course/MAT291/concepts",
          concept: [
            {
            name: "Gradient",
            definition: "An increase or decrease in the magnitude of a property (e.g. temperature, pressure, or concentration) observed in passing from one point or moment to another.",
            formula: "https://www.hanser.vip/project/university/study_sync/source/mat291_gradient.png",
            theorem: "The gradient theorem states that if the vector field F is the gradient of some scalar-valued function (i.e., if F is conservative), then F is a path-independent vector field (i.e., the integral of F over some piecewise-differentiable curve is dependent only on end points).",
            youtube: "https://www.youtube.com/watch?v=tIpKfDc295M",
            id: 0
            },
            {
              name: "Partial Derivative",
              definition: "In mathematics, a partial derivative of a function of several variables is its derivative with respect to one of those variables, with the others held constant (as opposed to the total derivative, in which all variables are allowed to vary). Partial derivatives are used in vector calculus and differential geometry.",
              formula: "https://www.hanser.vip/project/university/study_sync/source/mat291_pd.png",
              theorem: "Clairaut's theorem says that if the second partial derivatives of a function are continuous, then the order of differentiation is immaterial.",
              youtube: "https://www.youtube.com/watch?v=AXqhWeUEtQU",
              id: 1
            },
        ]
        }
    ];
    // read data from database

    render() {
        let path = this.props.location.pathname.split("/");
        let id = path[path.length-1];
        let name = path[path.length-3];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        let term = this.data.concept[id];
        return (
            <div id="term_page">
                <p id="term_text">Terminology Dictionary</p>
                <p id="term_name">{term.name}</p>
                <p className="term_sub">Definition</p>
                <p className="term_content">{term.definition}</p>
                <p className="term_sub">Formula</p>
                <div id="term_img_container"><img id="term_img" alt="formual" src={term.formula}/></div>
                <p className="term_sub">Theorem</p>
                <p className="term_content">{term.theorem}</p>
                <p className="term_sub">Other External Links</p>
                <a className="term_content" href={term.youtube}>YouTube Video</a>
            </div>
        );
    }
}