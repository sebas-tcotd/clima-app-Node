const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=934d1e637929cbd9488ffdb3c4573bcf&units=metric`);

    
    return resp.data.main.temp;
}

module.exports  = {
    getClima
}