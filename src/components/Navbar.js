import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
          <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Newsopolis&trade;</Link> */}
    <a className="navbar-brand" href="#">Newsopolis&trade;</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link" aria-current="page" a="#">Home</a>
        </li>
        {/*<li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
          <a className="nav-link" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li>
        </div>*/}
      </ul>
      <div className="form-check form-switch">
            <input type="checkbox" onClick={this.props.toggleMode} className="form-check-input" id="flexSwitchCheckedDefault"/>
            <label htmlFor="flexSwitchCheckedDefault" className={`form-check-label text-${this.props.mode==="light"?"dark":"light"}`}>Enable Dark Mode</label>
          </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar