import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import { Icon, Menu } from "semantic-ui-react";
import Pos from "./Views/Pos";
import Error404 from "./Views/Error404";
import Home from "./Views/Home";
import Empresa from "./Views/Empresa";
import Inventario from "./Views/Inventario";
import Auth from "./Views/Auth";
import "./Styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: null };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div class="iconBar">
            <NavLink className="item" exact to="/">
              <Menu.Item as="a">
                <Icon name="home" />
                Home
              </Menu.Item>
            </NavLink>
            <NavLink className="item" to="/reports">
              <Menu.Item as="a">
                <Icon name="line graph" />
                Reporteria
              </Menu.Item>
            </NavLink>
            <NavLink className="item" to="/pos">
              <Menu.Item as="a">
                <Icon name="money" />
                Ventas
              </Menu.Item>
            </NavLink>
            <NavLink className="item" to="/inventario">
              <Menu.Item as="a">
                <Icon name="edit outline" />
                Inventario
              </Menu.Item>
            </NavLink>
            <NavLink className="item" to="/empresa">
              <Menu.Item as="a">
                <Icon name="file" />
                Empresa
              </Menu.Item>
            </NavLink>
          </div>
          <div className="site-content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/pos" component={Pos} />
              <Route path="/inventario" component={Inventario} />
              <Route path="/empresa" component={Empresa} />
              <Route path="/auth" component={Auth} />
              <Route component={Error404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
