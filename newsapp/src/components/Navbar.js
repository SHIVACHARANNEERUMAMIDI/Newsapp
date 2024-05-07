import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    let {tougle,mode}=this.props;
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
        <div className={`container-fluid `}>
          
          <a className={`navbar-brand text-${mode==="dark"?"light":"dark"}`} href="/">NEWS APP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">general</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">technology</a>
              </li> */}
            </ul>
               <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" onClick={tougle} id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark mode</label>
                </div>
           
          </div>
        </div>
      </nav></>
    )
  }
}

export default Navbar
