class CountryRecords extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="border border-gray-200 px-4 py-2">Country</th>
          <th class="border border-gray-200 px-4 py-2">Confirmed</th>
          <th class="border border-gray-200 px-4 py-2">In Cure</th>
          <th class="border border-gray-200 px-4 py-2">Recovered</th>
          <th class="border border-gray-200 px-4 py-2">Deaths</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    `;
  }
}

customElements.define('country-records', CountryRecords);
