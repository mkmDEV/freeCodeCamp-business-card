import { Component } from "react";

export default class Article extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <article className='article'>
        <h3 className='title'>{ title }</h3>
        <p className="content">{ content }</p>
      </article>
    );
  }
}
