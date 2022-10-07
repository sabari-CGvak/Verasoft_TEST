import axios from 'axios';

const BASE_URL = "https://evoteam-verasoft.github.io"


// Get summary data
export const GetSummary = () => {
    return new Promise((resolve, reject)=> {
        axios.get(BASE_URL + '/data/summary.json')
        .then((res)=>{
            return resolve(res.data);
        }
        ).catch((err)=>{
            return reject(err);
        })
    })
}

// Get Order data
export const GetOrders = () => {
    return new Promise((resolve, reject)=> {
        axios.get(BASE_URL + '/data/orders.json')
        .then((res)=>{
            return resolve(res.data);
        }
        ).catch((err)=>{
            return reject(err);
        })
    })
}