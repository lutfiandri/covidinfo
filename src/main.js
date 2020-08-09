import './styles/tail.css';
import './components/AppBar';
import './components/NumberInfo';
import './components/CountryRecords';
import Global from './data/global';
import Local from './data/local';

const main = () => {
  getGlobal();
  getLocalDetail();
};

const getGlobal = () => {
  Global.getGlobalData().then((response) => {
    let state = [
      { title: 'Confirmed', color: 'blue-700' },
      { title: 'In Cure', color: 'yellow-700' },
      { title: 'Recovered', color: 'green-700' },
      { title: 'Deaths', color: 'red-700' },
    ];

    const root = document.querySelector('#number-info-container');

    state.forEach((s, index) => {
      s.number = response[index];
      const item = document.createElement('number-info');
      item.className = 'p-4 w-full md:w-1/2 xl:w-1/4';
      item.state = s;
      root.appendChild(item);
    });
  });
};

const getLocalDetail = () => {
  Local.getCountries().then((response) => {
    let countries = [];
    response.forEach((country) => {
      Local.getCountryDetail(country).then((response) => {
        // console.log('res', response);
        if (!response.hasOwnProperty('error')) {
          let state = {
            country: country,
            confirmed: response.confirmed.value,
            inCure:
              response.confirmed.value -
              response.recovered.value -
              response.deaths.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value,
          };
          countries.push(state);
        }
      });
    });
    return countries;
  });
};

export default main;
