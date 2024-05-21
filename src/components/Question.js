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

  generar(data) {
    return data.questions.map((pregunta) => html`
      <button 
        class="choise-btn" 
        value=""
      >
        ${pregunta}
      </button>`);
  }

  static get styles() {
    return css`
      .question-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
      }

      .question-title {
        margin-top: 0;
        text-align: center;
      }

      .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        width: 100%;
        justify-content: space-around;
      }

      .choise-btn {
        height: 80px;
        min-width: 30%;
      }
    `
  }

  render() {
    return html`
      <div class="question-container">
        <h2 class="question-title">${this.questionData.title}</h2>
        <div class="button-container">
          ${this.generar(this.questionData)}
        </div>
      </div>
    `;
  }
}

customElements.define("question-element", Question);
