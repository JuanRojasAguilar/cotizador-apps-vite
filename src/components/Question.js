import { LitElement, css, html } from "lit";

export default class Question extends LitElement {
  static properties = {
    title: { type: String },
    questionData: { type: Array },
  }

  constructor() {
    super();
    this.title = {};
    this.questionData = {};
  }

  generar(preguntas) {
    return preguntas.map((pregunta) => html`<button class="choise-btn">${pregunta}</button>`);
  }

  static get styles() {
    return css`
      .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .choise-btn {
        width: 200px;
        height: 80px;

      }
    `
  }

  render() {
    return html`
      <div>
        <h2>${this.questionData.title}</h2>
        <div class="button-container">
          ${this.generar(this.questionData.questions)}
        </div>
      </div>
    `;
  }
}

customElements.define("question-element", Question);
