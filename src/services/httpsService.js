import axios from 'axios';

const id = "b61a77df-b2e3-0095-a454-64ffc39d06d3"

axios.defaults.baseURL = `https://deliver.kenticocloud.com/${id}`;

axios.interceptors.response.use(null, error => {

    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        console.log(error);
    }

    return Promise.reject(error);

});


const http = {
    get: axios.get,
    // post: axios.post,
    // put: axios.put,
    // delete: axios.delete,
}

export default http