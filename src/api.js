import axios from 'axios';

const BASE_URL = 'https://2yahugzd4a.execute-api.eu-central-1.amazonaws.com/test';

export function getListings() {
  return axios(`${BASE_URL}/listings/`);
}
