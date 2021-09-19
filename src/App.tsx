import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { globals } from "config/globals";
import { Light } from "config/theme";
import { Home } from "pages";
const AppGlobalStyle = createGlobalStyle(globals)

const Routes = () => {
  return(
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    </Router>
  )
}

const App = () => 
  <ThemeProvider theme={Light}>
    <AppGlobalStyle/>
    <Routes/>
  </ThemeProvider>

export default App;