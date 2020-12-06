import axios from 'src/services/httpsService';

function axiosGetData(endPoint, axiosParams) {
    return axios.get(endPoint, axiosParams);
}

export function getCafeItems() {

    const axiosParams = {
        params: {
            "system.type": 'cafe'
        }
    }

    return axiosGetData('items', axiosParams);
}