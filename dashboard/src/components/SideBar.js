import React from 'react';
import logo from '../assets/images/logo-letbar-sin-fondo.png';
import ContentWrapper from './ContentWrapper';
import CategoryList from './CategoryList';
import ProductsList from "./ProductsList";
import LastMovieInDb from './LastMovieInDb';

import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import TopBar from './TopBar';
import SearchMovies from './SearchMovies';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav fondo-sideBar sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center " href="/">
                    <div className="sidebar-brand-icon altura100">
                        <img className="logo" src={logo} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link luz" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Let-Bar</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menu</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item luz">
                <Link className="nav-link text-white" to="/CategoryList">
                <i class="fa-solid fa-shop"></i>
                        <span>Categorias</span>
                    </Link>
                </li>
                <li className="nav-item luz">
                <Link className="nav-link text-white" to="/ProductsList">
                <i class="fa-solid fa-tag"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item luz">
                    <Link className="nav-link text-white" to="/LastMovieInDb">
                        <i class="fa-solid fa-shop"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item luz">
                <Link className="nav-link text-white" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>
                <li className="nav-item luz">
                <Link className="nav-link text-white" to="/SearchMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Search Movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                   <TopBar/>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoryList">
                    <CategoryList />
                </Route>
                <Route path="/ProductsList">
                    <ProductsList />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
                </div>
            </div>    
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;