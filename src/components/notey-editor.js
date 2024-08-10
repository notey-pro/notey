import { LitElement, html } from 'lit';
import { editorStyles } from '../styles/editor-styles.js';
import './blocks/text-block.js';

class NoteyEditor extends LitElement {
  static styles = [editorStyles];

  constructor() {
    super();
    this.blocks = [];
  }

  generateUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addBlock(type) {
    const block = { id: this.generateUniqueId(), type, data: {} };
    this.blocks = [...this.blocks, block];
    this.requestUpdate();
  }

  updateBlock(id, data) {
    this.blocks = this.blocks.map(block => block.id === id ? { ...block, data } : block);
    this.requestUpdate();
  }

  deleteBlock(id) {
    this.blocks = this.blocks.filter(block => block.id !== id);
    this.requestUpdate();
  }

  renderBlock(block) {
    switch (block.type) {
      case 'text':
        return html`
          <text-block
            .data="${block.data}"
            @update="${(e) => this.updateBlock(block.id, e.detail)}"
          ></text-block>`;
      default:
        return html`<div>Unknown block type</div>`;
    }
  }

  render() {
    return html`
      <div class="editor">
        ${this.blocks.map(block => html`
          <div class="block" data-block-id="${block.id}"> 
            <div class="block-controls">
              <button @click="${() => this.deleteBlock(block.id)}">Delete</button>
            </div>
            ${this.renderBlock(block)}
          </div>
        `)}
        <button @click="${() => this.addBlock('text')}">Add Text Block</button>
      </div>
    `;
  }
}

customElements.define('notey-editor', NoteyEditor);
