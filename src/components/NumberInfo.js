class NumberInfo extends HTMLElement {
  set state(state) {
    this._state = state;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="py-6 rounded-lg text-center border-2 border-${this._state.color} text-${this._state.color}">
        <div class="text-5xl font-bold">${this._state.number}</div>
        <div class="text-xl font-medium -mt-4">${this._state.title}</div>
      </div>
    `;
  }
}

customElements.define('number-info', NumberInfo);
