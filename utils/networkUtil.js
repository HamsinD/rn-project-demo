import * as API from '../common/API';


export const get = (type, params) =>
    new Promise((resolve, reject) => {
        let url = API.base_url;
        if (params) {
            url += `&${params}`;
        }
        fetch(
            url,
            {method: 'GET'}
        ).then(response =>
            response.json()
        ).then((responseJson) => {
            resolve(responseJson);
        }).catch((error) => {
            reject(error);
        });
    }
);

export const post = (type, body) =>
    new Promise((resolve, reject) => {
        fetch(
            API.base_url, {
            method: 'POST',
            headers: {
                "api_key":type,
                // "authorization":
            },
            body,
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            resolve(responseJson);
        }).catch((error) => {
            reject(error);
        });
});

// 返回一个 Promise
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))