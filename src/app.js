import { LitElement, html } from "lit";
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

  render() {
    // Esto es un ejemplo de como escribir el js
    return html`
      <fragment>
        ${this.renderQuestions()}
      </fragment>
    `;
  }
}

customElements.define("app-element", App);
