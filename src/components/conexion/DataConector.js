import axios from 'axios';

// import {    } from './fakeAPI.js' // transfers_list  statesCountGeneral  statesCount //transferBlitslist

const backEnd = process.env.VUE_APP_API;
//const backEnd= "http://10.0.0.172:9000";



export async function transfers_list(hash) {

    let data = { success: false };


   //  await transfersList(hash).then(response => {
    await axios.get(backEnd + `/v1/transfers/list/${hash}`).then(response => {
        // data = response.data

        if (response.data.success) {
            data = response.data
        }

        // console.log(response.data)

    }).catch(error => {
        console.log(error)
    });

    return data
}


export async function counterGeneral(hash) {

    let data = { success: false };

    //    await statesCountGeneral(hash).then(response => {

    await axios.get(backEnd + `/v1/states/count/${hash}`).then(response => {

        // data = response.data

        if (response.data.success) {
            data = response.data
        }

        // console.log(response.data)

    }).catch(error => {
        console.log(error)
    });


    return data
}

export async function counterSingle(hash, transfer_id) {

    let hoy = new Date()
    let ayer = new Date(hoy.getTime() - (24 * 60 * 60 * 1000) * 2)

    let data = { success: false };

    //  await statesCount(hash, transfer_id, ayer.toISOString(), hoy.toISOString()).then(response => {

    await axios.get(backEnd + `/v1/states/count/${hash}/${transfer_id}/${ayer.toISOString()}/${hoy.toISOString()}`).then(response => {
  
        // data = response.data

        if (response.data.success) {
            data = response.data
        }

      

        // console.log(response.data)

    }).catch(error => {
        console.log(error)
    });

    return data
}


export async function blitsTranfers(hash, transfer_id) {

    let data = { success: false };

    //await transferBlitslist(hash, transfer_id).then(response => {

    await axios.get(backEnd + `/v1/transferBlits/list/${hash}/${transfer_id}`).then(response => {
    
        // data = response.data

        if (response.data.success) {
            data = response.data
        }

        // console.log(response.data)

    }).catch(error => {
        console.log(error)
    });

    return data
}


/*export async function transfers_list(params) {
    let data = []
    await axios.post(backEnd + '/v1/transfers/list', params).then(response => {
        data = response.data
    }).catch(error => {
        console.log(error)
        return data = false
    });
    return data
}*/



