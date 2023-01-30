import React from 'react';
import { Link } from 'react-router-dom';

/*
^ Step 4. NavBar
-> build a NavBar component
-> to get the use of a navbar on the page
*/

/*
~ Step 4a. 
-> then put in user snippet for a navbar
-> Ciso bootstrap user snippet for navbar
    & need to import react links
    -> can't expect user to type innto our server or to know to even do so -> need to give them hyperlinks to click
    -> build a way to get to every page in each component -> react links 
    -> can build a navbar -> in a new component called NavBar
    -> comes from react-router-dom -> the link component will take one prop
        -> renders in browser like a normal <a> -> does not take <a> 
    -> use <Link> & 2 prop instead of the href
    */
    //& now to build a navBar inside of here 
            // need this line to make a navbar
                                       // this is optional
function NavBar() {
    return (
        //~ Step 4b. import it into App.jsx
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">
                {/* 
                //& this is like the Logo 
                -> the root route will be the home
                */}
                <Link className="navbar-brand" to="/">Product Manager</Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* //& where we define the menu itself */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* 
                        //~ Step 4c -> now js cdn added to index.html can now add react links to to="" 
                        -> can create links for all the recources provided by the api that i can request
                            -> i.e. -> character resource, location resource, & episode resource
                        */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/new">Add a Product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
//~ good practice to have a space here
