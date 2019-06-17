import React from 'react'
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-ikp">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="glyphicon glyphicon-th"></span>
		      </button>

		      <img src={logo} className="img-brand" alt="STAG LOGO"/>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/portofolio">Portofolio</Link></li>		      
		        <li><Link to="/blog">Blog</Link></li>		      
		        <li><Link to="/login">Login</Link></li>		      
		      </ul>
		      
		      <ul className="nav navbar-nav navbar-right">
		        
		      </ul>
		    </div>
		  </div>
		</nav>
    )
}

export default Navbar;
