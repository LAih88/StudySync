import React from "react"
import "./Concept.css"
import {Link} from "react-router-dom"


export default class Concept extends React.Component {
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
        let name = path[path.length-2];
        for (let i = 0; i < this.database.length; i++) if (this.database[i].name.toLowerCase() === name.toLowerCase()) this.data = this.database[i];
        if (this.data.concept.length === 0) {
          return (
            <div id="concept_page">
              <p id="concept_text">Terminology Dictionary</p>
              <p id="no_concept_text">There is currently no terms</p>
            </div>
          );
        }
        return (
            <div id="concept_page">
              <p id="concept_text">Terminology Dictionary</p>
              {this.data.concept.map(c=>{
                return (
                  <Link className="concept_link" to={"/course/"+this.data.name+"/concepts/"+c.id}>
                    {c.name}
                  </Link>
                );
              })}
            </div>
        );
    }
}