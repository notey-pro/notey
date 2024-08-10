import './components/notey-editor.js';

import { LitElement, css, html } from 'lit'

export class NoteyApp extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <notey-editor></notey-editor>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

    `
  }
}

window.customElements.define('notey-app', NoteyApp)
