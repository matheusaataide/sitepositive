import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import WhoWeAre from './pages/WhoWeAre';
import Blog from './pages/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Schedule from './pages/Schedule';
import Transformations from './pages/Transformations';
import PositiveDiscipline from './pages/PositiveDiscipline';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Landing } />
            <Route exact path="/quem-somos" component={ WhoWeAre } />
            <Route exact path="/transformacoes-positive" component={ Transformations } />
            <Route exact path="/disciplina-positiva" component={ PositiveDiscipline } />
            <Route exact path="/agenda" component={ Schedule } />


            <Route exact path="/blog" component={ Blog } />
            <Route exact path="/blog/:postId/:postTitle" component={ BlogPost } />
        </Switch>
    </BrowserRouter>
  );
}