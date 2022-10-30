import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/AboutMe";

export default function App() {
    return (
    <div className="App">
        <Router>
            <Layout />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/aboutme' component={AboutMe}/>
                <Route path='/gallery' component={Gallery}/>
            </Switch>
        </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);