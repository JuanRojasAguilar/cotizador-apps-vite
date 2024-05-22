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

  /**
   * 
   * @param {Object} data 
   * @returns {HTMLTemplateElement}
   */
  generar(data) {
    return data.questions?.map((pregunta) => html`
      <button 
        class="choise-btn" 
        value=""
      >
        ${pregunta}
      </button>`)
  }

  static get styles() {
    return css`
      .question-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80vw;
      }

      .question-title {
        font-size: 2.4rem;
        margin-top: 0;
        margin-bottom: 40px;
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
        <h2 class="question-title">Que nivel de calidad estas buscando?</h2>
        <div class="button-container">
          Calidad optima
        </div>
      </div>
    `;
  }
}

customElements.define("question-element", Question);
