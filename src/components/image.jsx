import { Component } from "react";
import picture from '@assets/laura-smith.svg'
export default class Image extends Component {
  render() {

    return (
      <>
        <img src={picture} alt="header-img"/>
      </>
    )
  }
}
