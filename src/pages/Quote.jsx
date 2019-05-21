import React from 'react';
import { Link } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import FontFaceObserver from 'fontfaceobserver';
// data
import data from '../quotes.json';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    // recursevely get all images
    let images = require.context('../assets/img/photos', true, /\.(jpg)$/).keys();
    // require the most relevant image 
    const requireImage = (scene, character) => {
      const name = character.replace(/["|']/g, '').replace(/\s+/g, '-');  // format character name
      const season = scene.substr(1,1), episode = scene.substr(3,2);     // extract episode data
      const lookExp = [
        `s${season}e${episode}-${name}`,              // a) current episode
        `s${season}e0[0-${episode - 1}]-${name}`,    // b) previous episodes from the current season
        `s[0-${season - 1}]e[0-9]+-${name}`,        // c) previous episodes
        `s[0-9]e[0-9]+-${name}`                    // d) all episodes
      ];
      let matches = '', match;
      for(let i = 0; i < lookExp.length; i++) {
        if(matches.length) break;
        matches = images.filter(image => image.match(new RegExp(lookExp[i], 'ig')));
        // choose from the closest episode
        match = matches[i === 3 ? 0 : matches.length - 1];
      }
      // remove matched image from the list to avoid repetition
      images = images.filter(image => !image.includes(match));
      // map image with quote
      return require(`../assets/img/photos/${match.substr(2)}`);
    }
    // helpers
    const mergeObjects = (a, b) => { return {...a, ...b} };
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    // merge objects and shuffle them
    const quotes = data.quotes.map(quote => mergeObjects(quote, { image: { src: requireImage(quote.scene, quote.character), loaded: false } }));
    // set initial state
    this.state = { 
      quotes: shuffleArray(quotes),
      id: 0, 
      lang: 'common', 
      show: false, 
      toggle: false 
    };
    // show quote after .15ms
    setTimeout(() => this.setState({ show: true }), 150);
  }
  getNextQuoteId = (id) => id === this.state.quotes.length - 1 ? 0 : id + 1;
  getPrevQuoteId = (id) => id === 0 ? this.state.quotes.length - 1 : id - 1;
  switchToggle = () => this.setState({ toggle: !this.state.toggle });
  switchLang = (event, lang) => {
    event.preventDefault();
    this.setState({ lang: lang });
  }
  switchQuote = (next = true) => {
    const newId = next ? this.getNextQuoteId(this.state.id) : this.getPrevQuoteId(this.state.id);
    // hide current quote
    this.setState({ show: false });
    // preload images
    this.handleImagesPreload(newId);
    // show next/prev quote
    setTimeout(() => this.setState({ id: newId, show: true }), 300);
  }
  handleKeyPress = (event) => {
    switch(event.key) {
      default: break;
      case 'ArrowLeft': this.switchQuote(false); break;
      case 'ArrowRight': this.switchQuote(true); break;
    }
  }
  handleImagesPreload = (id) => {
    let quotes = cloneDeep(this.state.quotes);
    // preload images for current/prev/next quotes
    quotes = quotes.map((quote, i) => {
      if(!quote.image.loaded && [id, this.getNextQuoteId(id), this.getPrevQuoteId(id)].indexOf(i) !== -1) {
        let img = new Image();
        img.src = quote.image.src;
        quote.image.loaded = true;
      }
      return quote;
    });
    // update info about loaded images
    if(quotes !== this.state.quotes)
      this.setState({ quotes: quotes });
  }
  componentWillMount = () => {
    // preload image for the first and its adjoined quotes
    this.handleImagesPreload(this.state.id);
    // preload fonts
    const fonts = ['Trajan Pro 3', 'Volantene Script', 'Dothraki Script'];
    fonts.forEach(font => new FontFaceObserver(font).load());
  }
  componentDidMount = () => {
    document.documentElement.classList.add('no-scroll');
    document.addEventListener('keydown', this.handleKeyPress);
  }
  render() {
    this.quote = this.state.quotes[this.state.id];
    // render current quote
    return (
      <div className={`character-bg ${this.state.show ? 'show' : 'hide'}`} 
        style={{ backgroundImage: `url(${this.quote.image.src})` }} onKeyPress={this.handleKeyPress}>
        <nav className="head-nav">
          <Link to="/about">About</Link>
          <div className={`lang-switch ${this.state.toggle ? 'toggle' : ''}`}>
            <span className="lang-switch-icon" onClick={this.switchToggle}></span>
            {['common', 'valyrian', 'dothraki'].map(lang => 
              <a href="#0" className={this.state.lang === lang ? 'active' : ''} onClick={(e) => this.switchLang(e, lang)} key={lang}>
                {lang}
              </a>
            )}
          </div>
        </nav>
        <div className={`quote ${this.state.lang}`}>
          <p dangerouslySetInnerHTML={{__html: this.quote[this.state.lang].replace(/[\n]/g, '<br/>')}} />
          <h3>- {this.quote.character} / {this.quote.scene}</h3>
        </div>
        <button onClick={this.switchQuote}>Next Quote</button>
        <a className="copyright" href="https://gerayzade.az/" target="_blank" rel="noopener noreferrer">
          <span>{'<'}</span> Gerayzade <span>{'/>'}</span>
        </a>
      </div>
    );
  }
}