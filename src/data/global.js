import baseURL from './baseURL';

class Global {
  static getGlobalData() {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((responseJson) => {
        let state = {
          confirmed: responseJson.confirmed.value,
          inCare:
            responseJson.confirmed.value -
            responseJson.recovered.value -
            responseJson.deaths.value,
          recovered: responseJson.recovered.value,
          deaths: responseJson.deaths.value,
        };
        // console.log('st', state);
        return state;
      })
      .catch((err) => alert(err));
  }
}

export default Global;
