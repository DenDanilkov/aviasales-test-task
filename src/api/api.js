import * as axios from 'axios';

const instance = axios.create({ baseURL: 'https://front-test.beta.aviasales.ru/' });

export const ticketsApi = {
  getSearchId: async () => {
    const result = await instance.get('search');
    return result.data;
  },
  getTickets: async searchId => {
    const result = await instance.get(`tickets?searchId=${searchId}`);
    return result.data;
  },
};
