import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <div>
    //     Hey Trinity {props.title};
    //     <li>
    //     {props.aboutText}
    // </li>
    // <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nulla odio assumenda minus consequatur cum reiciendis numquam vero corporis ullam ad excepturi est consequuntur molestiae fugiat, dicta repellendus iure aspernatur!{props.para}</p>
    // </div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="ocllapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
        <a className="nav-link" href="/">{props.aboutText}</a>
        </li> */}
        
        {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=> {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=> {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=> {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=> {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        </div> */}

        <div className="dropdown mx-3">
</div>

 
      </ul>
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
         {/* <button className="btn btn-outline-success" type="submit">Search</button>  */}
      {/* </form> */}
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={()=> {props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlfor="flexSwitchCheckDefault">Toggle Mode</label>
</div>

    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string,       //Cannot send numbers as a prop
                   aboutText: PropTypes.string
                }

//  Navbar.propTypes = {title: PropTypes.string.isRequired,    
//                     aboutText: PropTypes.string
//                  }

Navbar.defaultProps ={
    title: 'Set title here',
    aboutText: 'About text here'
}                