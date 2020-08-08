import Global from '../data/global';

class AppBar extends HTMLElement {
  async connectedCallback() {
    this._colorClass = this.getAttribute('colorClass') || 'gray-200';
    this._title = this.getAttribute('title') || 'Title Here';
    this._state = await Global.getGlobalData();
    this._whichState = this.getAttribute('whichState');
    console.log(this._whichState);
    switch (this._whichState) {
      case 'confirmed':
        this.data = this._state.confirmed;
        break;
      case 'inCure':
        this.data = this._state.inCure;
        break;
      case 'recovered':
        this.data = this._state.recovered;
        break;
      case 'deaths':
        this.data = this._state.deaths;
        break;
    }
    console.log(this.data);
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="py-6 rounded-lg text-center border-2 border-${
      this._colorClass
    } text-${this._colorClass}">
      <div class="text-5xl font-bold">${this.data || ''}</div>
      <div class="text-xl font-medium -mt-4">${this._title}</div>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
