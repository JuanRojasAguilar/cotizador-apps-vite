import { LitElement, html } from "lit";

export default class Question extends LitElement {
  static properties = {
    title: { type: String },
    questionData: { type: Array },
  };
  constructor() {
    super();
    this.title = {};
    this.questionData = {};
  }
  generar(preguntas) {
    return preguntas.map((pregunta) => html`<button>${pregunta}</button>`);
  }

  render() {
    return html`
      <div>
        <h2>${this.questionData.title}</h2>
        ${this.generar(this.questionData.questions)}
      </div>
    `;
  }
}

customElements.define("question-element", Question);
