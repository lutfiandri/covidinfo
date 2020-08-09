import Global from '../data/global';

class AppBar extends HTMLElement {
  connectedCallback() {
    Global.getLastUpdate().then((response) => {
      this.lastUpdated = new Date(response);
      // this.lastUpdate = 'skjbd';
      this.render();
    });
  }

  render() {
    this.innerHTML = `
    <div class="py-4 text-2xl font-bold tracking-wide">
      CORONAVIRUS INFO
    </div>
    <div class="text-sm text-gray-500 -mt-5">
      Last Updated: ${this.lastUpdated}
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
