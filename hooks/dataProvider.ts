import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:5013/api';

const fetchJson = async (url: string, options: fetchUtils.Options = {}) => {
  options.user = {
    authenticated: true,
    token: 'Bearer ' + localStorage.getItem('token')
  };

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(apiUrl, fetchJson);
