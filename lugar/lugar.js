const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.positionstack.com/v1/forward?access_key=57d2c26ae9a93b31428b088e476b5fde&query=${encodeURL}`
    });

    const resp = await instance.get();

    if(resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}