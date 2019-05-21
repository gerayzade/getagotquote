import React from 'react';
import { Link } from 'react-router-dom';
import Rellax from 'rellax';
// assets
import title from '../assets/img/stuff/title.png'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    // show page after .15ms
    setTimeout(() => this.setState({ show: true }), 150);
  }
  componentDidMount = () => {
    document.documentElement.classList.remove('no-scroll');
    // small parallax effect
    if(window.innerWidth >= 1112) {
      Rellax('h1 > img', { speed: -5 });
    }
  }
  render() {
    return (
      <div className={`GOT ${this.state.show ? 'show' : 'hide'}`}>
        <h1><img src={title} alt="Title" /></h1>
        <div className="about">
          <p>
            A fan project by <strong>Heydar Gerayzade</strong> that generates a random quote from Game of Thrones TV series
            available in <strong>Common Tonque</strong>, <strong>Valyrian</strong> and <strong>Dothraki</strong> languages.
          </p>
          <nav className="mid-nav">
            <Link to="/">← Go Back</Link>
          </nav>
        </div>
      </div>
    );
  }
}