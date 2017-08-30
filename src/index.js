import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import BaseLayout from './components/BaseLayout.js'
import Contact from './components/Contact'
import References from './components/References'

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/references" component={References} />
                <Route exact path="/" component={App} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>    
    
, document.getElementById('root'));
registerServiceWorker();
