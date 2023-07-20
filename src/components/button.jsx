import { Component } from "react";

export default class Button extends Component {

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, icon, label } = this.props

    return (
      <>
        <button className={ className } type="button" name={ label }>
          {icon}
          <span className='btn__label'>{ label }</span>
        </button>
      </>
    );
  }
}
