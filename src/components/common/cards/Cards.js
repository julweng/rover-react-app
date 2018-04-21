import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {

  state = {
    cards: [
      {
        number: 1,
        title: 'Relentless focus on dog safety and sitter quality.',
        content: `I will strive to use technologies to ensure the sitter's 
                  quality.`,
      },
      {
        number: 2,
        title: 'Obsession with the needs of sitters and owners.',
        content: `I shall do whatever it takes to solve the customers’ (the dogs, the sitters, 
                  and the owners) problems. Period.`,
      },
      {
        number: 3,
        title: 'Prioritization of business goals above short-term personal career interests.',
        content: `I will learn Python and Django even though I suck at it
                  right now and I prefer JavaScript.`,
      },
      {
        number: 4,
        title: 'Commitment to operational excellence.',
        content: `I am determined to learn every skill that is required to do my jobs better 
                  than they have ever been done.`,
      },
      {
        number: 5,
        title: 'Focus on impact.',
        content: `I will not waste your time and money. I will concentrate on results. 
                  I will show you the "fast and furious" version of learning.`,
      },
      {
        number: 6,
        title: 'Action, not intimidated by failure.',
        content: `I am not afraid to accept my errors and ask for guidance to ensure that 
                  I am constantly accelerating.`,
      },
      {
        number: 7,
        title: 'Results that blow people away.',
        content: `I hope to be inspired by my seniors and peers, such that we will crush 
                  assignments together.`,
      },
      {
        number: 8,
        title: 'Discipline in the way we debate.',
        content: `I have a lot of teamwork experience that I will bring a high level of maturity
                  to solving problems and dealing with disagreements.`,
      },
      {
        number: 9,
        title: 'Respect for transparency and reverence for vulnerability.',
        content: `Here's me putting it out there: I am a career changer who has just graduated from 
                  a bootcamp and I know that scares people away, but I love seeing code 
                  come to life on page and I feel smart when saying "higher-order functions", 
                  so I will keep pursuing my dream.`,
      },
      {
        number: 10,
        title: 'Resolve to be effective above the need to be comfortable.',
        content: `I've gone way out of my comfort zone trying to make a career transition.
                  I deserve respect and a pat on the back.`,
      },
      {
        number: 11,
        title: 'Devotion to each other as people.',
        content: `I value work-life balance. I embrace diversity. 
                  I respect and understand that we all have a life outside of work.`,
      },
      {
        number: 12,
        title: 'Celebration of humor, fun, and occasional irreverence.',
        content: `I hope you see that I am a serious performer with a sense of humor by refactoring 
                  your core values page with React for my portfolio page. I also have a lackluster blog 
                  and a 'real' portfolio page if you'd like to scroll to the bottom.`,
      },
    ],
  };

  render() {
    const cards = this.state.cards.map(card => (
        <div className="col-4 card" id="values" key={card.number}>
          <div>
            <div>&nbsp;</div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
        </div>
    ));

    return (
      <div className="cards">
        <div className="col-12">
          {cards}
        </div>
      </div>
    );
  }
}

export default Cards;
