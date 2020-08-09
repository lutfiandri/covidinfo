class CountryRecords extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="w-full xl:w-3/4 overflow-auto mb-5 mx-auto">
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
        <tr class="hover:bg-rich-black-800">
          <td class="border border-gray-200 px-4 py-2">Indonesia</td>
          <td class="border border-gray-200 px-4 py-2">2837234</td>
          <td class="border border-gray-200 px-4 py-2">1452458</td>
          <td class="border border-gray-200 px-4 py-2">852348</td>
          <td class="border border-gray-200 px-4 py-2">852348</td>
        </tr>
      </tbody>
    </table>
    </div>
    `;
  }
}

customElements.define('country-records', CountryRecords);
