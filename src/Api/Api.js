import axios from 'axios';

const Base_URL = "https://evoteam-verasoft.github.io"

export const GetSummary = () => {
    return new Promise((resolve, reject)=> {
        axios.get(Base_URL + '/data/summary.json')
        .then((res)=>{
            return resolve(res.data);
        }
        ).catch((err)=>{
            return reject(err);
        })
    })
}

export const GetOrders = () => {
    return new Promise((resolve, reject)=> {
        axios.get(Base_URL + '/data/orders.json')
        .then((res)=>{
            return resolve(res.data);
        }
        ).catch((err)=>{
            return reject(err);
        })
    })
}