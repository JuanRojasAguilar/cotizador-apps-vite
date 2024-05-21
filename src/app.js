import { LitElement, html, css } from "lit";
import Question from "./components/Question";

const questions = [
  {
    title: "testeito",
    questions: ["wqw", "qqq", "www"]
  },
  {
    title: "testeito2",
    questions: ["wqw", "qqq", "www"]
  },
];

class App extends LitElement {
  constructor() {
    super();
  }

  *renderQuestions() {
    yield questions.map((entry) => html`
      <question-element
        .questionData=${entry}
      ></question-element>
      
    `)
  }

  static get styles() {
    return css`
      #web-app {
        background-color: grey;
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  }

  render() {
    // Esto es un ejemplo de como escribir el js
    return html`
      <div id="web-app">
        ${this.renderQuestions()}
      </div>
    `;
  }
}

customElements.define("app-element", App);
