import { LitElement, html, css } from "lit";

export default class Nav extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            .nav-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                display: flex;
                justify-content: space-between;
                font-size: 1.2rem;
                height: 40px;
            }

            .nav-container *:hover {
            }

            .back-button {
                font-size: 1.2rem;
                background-color: transparent;
                border: none;
            }

            .back-button:hover {
                text-decoration: underline;
                text-underline-offset: 8px;
                cursor: pointer;
            }

            .accumulated-value {
                margin-right: 20px;
            }
        `
    }

    render() {
        return html`
            <div class="nav-container">
                <button class="back-button">&#11013; regresar</button>
                <p>10/10</p>
                <p class="accumulated-value">5.000.000</p>
            </div>
        `
    }
}

customElements.define("nav-element", Nav);
