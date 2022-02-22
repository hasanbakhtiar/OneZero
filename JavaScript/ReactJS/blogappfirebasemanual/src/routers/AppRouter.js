import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/part/Header'
import Home from '../components/pages/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/pages/ContactPage'
import NotFoundPage from '../components/pages/NotFoundPage'
import AppBlogPage from '../components/AppBlogPage'
import EditBlogPage from '../components/EditBlogPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/blogs" component={BlogListPage}></Route>
                        <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
                        <Route path="/create" component={AppBlogPage}></Route>
                        <Route path="/edit/:id" component={EditBlogPage}></Route>
                        <Route path="/contact" component={ContactPage}></Route>
                        <Route component={NotFoundPage}></Route>
                    </Switch>

                </div>
        </BrowserRouter>
            
    )
}

export default AppRouter