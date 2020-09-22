const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');
const colors = require('colors');

const getInfo = async (direccion) => {
    try {
        const place = await lugar.getLugarLatLng(direccion);
        const weather = await clima.getClima(place.lat, place.lng);
        return `El clima de ${direccion} es de ${weather}°C`.green;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`.red;
    }
}

module.exports = {
    getInfo
}