import baseURL from './baseURL';

class Global {
  static getGlobalData() {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((responseJson) => {
        let state = [
          responseJson.confirmed.value,
          responseJson.confirmed.value -
            responseJson.recovered.value -
            responseJson.deaths.value,
          responseJson.recovered.value,
          responseJson.deaths.value,
        ];
        // console.log('st', state);
        return state;
      })
      .catch((err) => alert(err));
  }

  static getLastUpdate() {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const lastUpdate = responseJson.lastUpdate;
        return lastUpdate;
      });
  }
}

export default Global;
