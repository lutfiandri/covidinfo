import baseURL from './baseURL';

class Local {
  static getCountries() {
    return fetch(`${baseURL}/countries`)
      .then((response) => response.json())
      .then((responseJson) => {
        let countries = [];
        responseJson.countries.forEach((country) => {
          countries.push(country.name);
        });
        return countries;
      })
      .catch((err) => alert(err));
  }

  static getCountryDetail(country) {
    return fetch(`${baseURL}/countries/${country}`)
      .then((response) => response.json())
      .then((responseJson) => responseJson)
      .catch((err) => console.log(err));
  }
}

export default Local;
