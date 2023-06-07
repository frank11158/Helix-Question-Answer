import axios from 'axios';

// import store from '../store';
// const getAccessToken = () => store.getState().auth.access;
const getAccessToken = () => {
  return 'access_token'; // TODO: get access token from redux store
};

export const apiEndpointURL =
  process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api/v1';

export const getApiUrl = (path) => `${apiEndpointURL}/${path}`;

const pullData = (request) => request.then(({ data }) => data);

export const get = ({ url }) =>
  pullData(
    axios.get(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  );

export const post = ({ url, payload }) =>
  pullData(
    axios.post(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  );

export const patch = ({ url, payload }) =>
  pullData(
    axios.patch(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  );

export const put = ({ url, payload }) =>
  pullData(
    axios.put(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  );

export const remove = ({ url }) =>
  pullData(
    axios.delete(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  );
