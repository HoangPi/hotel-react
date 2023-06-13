import { Link } from "react-router-dom";

export const NavBar = () =>
{   
    return(
    <nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Places</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#probootstrap-menu" aria-controls="probootstrap-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="ion-navicon"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="probootstrap-menu">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">City Guides</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Log In</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Sign Up</a></li> */}

            <li className="nav-item active"> <Link className="nav-link" to={"/"}>Home</Link></li>
            <li className="nav-item"> <Link className="nav-link" to={"/"}>Log In</Link></li>
            <li className="nav-item"> <Link className="nav-link" to={"/signup"}>Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    );
};