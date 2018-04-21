import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faPaw from '@fortawesome/fontawesome-free-solid/faPaw';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import brands from '@fortawesome/fontawesome-free-brands';
import faBriefcase from '@fortawesome/fontawesome-free-solid/faBriefcase';

import NavBar from './components/common/navigation/NavBar';
import Hero from './components/hero/Hero';
import SecondaryLinks from './components/common/seconaryLinks/SecondaryLinks';
import TextBox from './components/common/textBox/TextBox';
import Cards from './components/common/cards/Cards';
import LearnMore from './components/learnMore/LearnMore';
import Footer from './components/common/Footer/Footer';

fontawesome.library.add(faHeart, faSearch, faPaw, faQuestionCircle, faBriefcase, faBars, brands);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <SecondaryLinks />
        <TextBox />
        <Cards />
        <LearnMore />
        <Footer />
      </div>
    );
  }
}

export default App;

