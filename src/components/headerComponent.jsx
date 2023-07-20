import { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <h1 className='name'>Laura Smith</h1>
        <h2 className='role'>Frontend Developer</h2>
        <p className='website'>laurasmith.website</p>
      </header>
    )
  }
}
