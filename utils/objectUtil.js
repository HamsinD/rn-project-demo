
export const objectToFormData = (object) => {
    const formData = new FormData();
    for (const key in object) {
        formData.append(key, object[key]);
    }
    return formData;
};

export const objectToFormBody = (object) => {
    let formBody = [];
    for (const key in object) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(object[key]);
        formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');
    return formBody;
};
