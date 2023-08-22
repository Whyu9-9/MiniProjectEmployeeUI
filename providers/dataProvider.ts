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

const baseDataProvider = simpleRestProvider(apiUrl, fetchJson);

export const dataProvider = {
  ...baseDataProvider,
}

// import { fetchUtils } from 'react-admin';
// import { stringify } from 'query-string';

// const apiUrl = 'http://localhost:5013/api';

// const httpClient = async (url: string, options: fetchUtils.Options = {}) => {
//   options.user = {
//     authenticated: true,
//     token: 'Bearer ' + localStorage.getItem('token')
//   };

//   return fetchUtils.fetchJson(url, options);
// };

// const dataProvider = {
//   getList: (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     };

//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => {
//       console.log('Response Headers:', headers);
//       console.log('Response JSON:', json);
//       console.log('Url:', url);


//       const total = parseInt(headers.get('content-range').split('/').pop(), 10);
//       console.log('Total:', total);

//       return {
//         data: json,
//         total: total,
//       };
//     });

//   },

//   getOne: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
//       data: json,
//     })),

//   getMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ ids: params.ids }),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;
//     return httpClient(url).then(({ json }) => ({ data: json }));
//   },

//   getManyReference: (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify({
//         ...params.filter,
//         [params.target]: params.id,
//       }),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(headers.get('content-range').split('/').pop(), 10),
//     }));
//   },

//   create: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}`, {
//       method: 'POST',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({
//       data: { ...params.data, id: json.id },
//     })),

//   update: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json })),

//   updateMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: 'PUT',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json }));
//   },

//   delete: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: 'DELETE',
//     }).then(({ json }) => ({ data: json })),

//   deleteMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: 'DELETE',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json }));
//   },
// };

// export default dataProvider;