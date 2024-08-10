import { LitElement, html, css } from 'lit';

class TextBlock extends LitElement {
  static styles = css`
    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `;

  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    this.data = { text: '' };
  }

  handleInput(e) {
    this.data = { ...this.data, text: e.target.value };
    this.dispatchEvent(new CustomEvent('update', { detail: this.data }));
  }

  render() {
    return html`
      <input type="text" .value="${this.data.text}" @input="${this.handleInput}" placeholder="Enter text here" />
    `;
  }
}

customElements.define('text-block', TextBlock);
