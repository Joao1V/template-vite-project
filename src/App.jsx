import {HelmetProvider} from "react-helmet-async";
import {
    BrowserRouter as Router, Route,
    Switch,

} from "react-router-dom";
import DefaultLayout from "./Default/DefaultLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Company from "./pages/Company.jsx";


const App = () => {
    const helmetContext = {};
    return (
    <HelmetProvider context={helmetContext}>
        <Router>
            <Switch>
                <DefaultLayout>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/empresa'} component={Company}/>
                </DefaultLayout>
            </Switch>
        </Router>
    </HelmetProvider>
  )
}

export default App
