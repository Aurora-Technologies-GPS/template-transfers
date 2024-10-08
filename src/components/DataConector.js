//import axios from 'axios';

//const api = process.env.VUE_APP_API;

//const api= "http://10.0.0.172:9000";



export async function transfers_list(hash) {

    await console.log(hash);
    let data = 

    {
    success: true,
    client: {
        id: 2,
        name: "MARITIMA DOMINICANA",
        contact: "MARITIMA DOMINICANA*",
        rncIdcard: "False",
        email: "FCOMAS@MARDOM.COM",
        phone: "+1 809-702-9398",
        hash: "0123456789abcdef"
    },
    list: [
        {
            id: 47931,
            bl: "TSAC20241123",
            startPlace: {
                id: 2388924,
                label: "Puerto Caucedo",
                radius: 870,
                latitude: 18.42505798,
                longitude: -69.63572387,
                address: "H, Andrés, Santo Domingo, República Dominicana, 15700"
            },
            endPlace: {
                id: 2315359,
                label: "Maritima Dominicana Caucedo",
                radius: 286,
                latitude: 18.44096788,
                longitude: -69.65010703,
                address: "Andrés, Santo Domingo, República Dominicana, 15700"
            },
            address: "Carretera Sanchez Km. 12 1/2, 11116, False",
            city: "Santo Domingo",
            note: "",
            date: 1726804800000,
            timeRequest: "2024-09-21T13:37:40.000-0400",
            transferLnk: [
                {
                    id: 356,
                    transferId: 47931,
                    deviceId: 1007830,
                    container: "TSAC20241123 - MRKU3406511",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                },
                {
                    id: 357,
                    transferId: 47931,
                    deviceId: 3031660,
                    container: "TSAC20241123 - MRKU5736390",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                },
                {
                    id: 360,
                    transferId: 47931,
                    deviceId: 2895717,
                    container: "TSAC20241123 - MRKU6305530",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                },
                {
                    id: 361,
                    transferId: 47931,
                    deviceId: 865539,
                    container: "TSAC20241123 - MRSU3479254",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                },
                                {
                    id: 361,
                    transferId: 47931,
                    deviceId: 865539,
                    container: "TSAC20241123 - MRSU3479254",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                },
                {
                    id: 362,
                    transferId: 47931,
                    deviceId: 3076352,
                    container: "TSAC20241123 - TEMU6882874",
                    currentState: 5,
                    timeLinked: "2024-09-21T13:37:40.000-0400"
                }
            ]
        }
    ]
}

    // hash 0123456789abcdef

/*    await axios.get(api + `/v1/transfers/list'/${hash}`).then(response => {
        data = response.data
    }).catch(error => {
        console.log(error)
    });*/

    return data
}




/*export async function transfers_list(params) {
    let data = []
    await axios.post(api + '/v1/transfers/list', params).then(response => {
        data = response.data
    }).catch(error => {
        console.log(error)
        return data = false
    });
    return data
}*/




