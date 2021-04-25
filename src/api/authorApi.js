import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/authors/`;

export default function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
