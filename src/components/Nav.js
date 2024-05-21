import { LitElement, html, css } from "lit";

export default class Nav extends LitElement {
    static properties = {
        _pageCounter: { state: true },
    }

    constructor() {
        super();
        this._pagecounter = 1;
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

    nextPage(e) {
        e.preventDefault();
        this._pagecounter++;
    }

    render() {
        return html`
            <div class="nav-container">
                <button class="back-button" onClick=${(e) => this.nextPage(e)}>&#11013; regresar</button>
                <p>${this._pagecounter}/10</p>
                <p class="accumulated-value">5.000.000</p>
            </div>
        `
    }
}

customElements.define("nav-element", Nav);
