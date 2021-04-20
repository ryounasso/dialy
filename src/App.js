import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { Top } from "./Top";
import { DailyTop } from "./daily/pages/DailyTop";
import { CategoryView } from "./daily/pages/CategoryView";
import { DailyDetail } from "./daily/pages/DailyDetail";
// import { Profile} from './profile/Profile';
import "./tailwind.css";

const App = () => {
  return (
    <div class=" bg-bgimg">
      <Router>
        <Header />
        <div class="container mx-auto">
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/daily" component={DailyTop} />
            <Route exact path="/daily/:id" component={DailyDetail} />
            <Route exact path="/daily/category/:cat" component={CategoryView} />
            {/* <Route path='/profile' component={Profile}/> */}
            <Route render={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
