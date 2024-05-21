import { LitElement, html, css } from "lit";
import Question from "./components/Question";

const questions = [
  {
    title: "testeito",
    questions: ["test1", "test2"],
  },
  {
    title: "testeito2",
    questions: ["wqw", "qqq", "www"]
  }
];

class App extends LitElement {
  constructor() {
    super();
  }

  renderQuestions() {
    return questions.map((entry) => html`
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
