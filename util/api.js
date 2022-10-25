const axios = require('axios');

import app from '../config/app';

function get({endpoint}){
    return new Promise((resolve, reject)=>{
        const config = {
            headers: {
                Authorization: app.token
            }
        }
        axios.get(`${app.api}/${endpoint}`,config)
            .then(res=>{
                if(res.status===200){
                    resolve(res.data);
                }else{
                    console.log("no data avalaible");
                }
            });

    });
}

module.exports = {
    get
}