import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";

export default class CurrentAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: Math.floor(Math.random() * EMOJIS.length),
    };
    this.generateAnswers = this.generateAnswers.bind(this);
  }
  //EMOJIS are randomized by utility/ShuffleArray.j
  generateAnswers() {
    const answers = [];
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
      if (answers.includes(num) || num === this.state.random) {
        console.log("or cond Met", num);
        i--;
        continue;
      } else {
        answers.push(num);
      }
    }
    answers.push(this.state.random);

    console.log("OG", answers);
    ShuffleArray(answers);
    console.log("Shuf", answers);
    return answers.map((i) => <>{EMOJIS[i].emoji} </>);
  }

  render() {
    // console.log("Render", this.state.random);

    return (
      <>
        <h3>La Palabra</h3>
        <p>{EMOJIS[this.state.random].spanish}</p>
        <h3>El Emoji Correcto</h3>
        <p>{EMOJIS[this.state.random].emoji}</p>
        {this.generateAnswers()}
      </>
    );
  }
}
