import Home from "./module/Home/Home"
import Course from "./module/Course/Course"
import {Route, Switch, Redirect} from "react-router-dom"


function App() {
  return (
    <div>
      <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/course" component={Course}/>
          <Redirect to="/home"/>
      </Switch>
    </div>
  );
}


export default App;