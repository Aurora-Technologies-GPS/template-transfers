//import axios from 'axios';

//const api = process.env.VUE_APP_API;

//const api= "http://10.0.0.172:9000";



export async function transfers_list(hash) {
     
    await console.log(hash);
    
    let data = {
    success: true,
    clientFullTransfers: {
        client: {
            id: 2,
            name: "DAS MEDICAL INTERNATIONAL",
            contact: "Crowley Logistics Dominicana",
            rncIdcard: "False",
            email: "josefina.lissette@crowley.com",
            phone: "(829) 923-2377",
            hash: "d5aa422c9b1c735b80bf31ce8f5f99fb"
        },
        fullTransfer: [
                    {
                transfer: {
                    id: 47513,
                    clientId: 2,
                    bl: "CWPS4M087397",
                    startPlace: {
                        id: 1190063,
                        label: "Puerto Causedo",
                        radius: 500,
                        latitude: 18.42351187,
                        longitude: -70.01320839,
                        address: "18.423512, -70.013208"
                    },
                    endPlace: {
                        id: null,
                        label: "Puerto La Vega",
                        radius: null,
                        latitude: null,
                        longitude:null,
                        address: "null"
                    },
                    address: "PARQUE INDUSTRIAL ZONA FRANCA INDUSTRIAL II VILLA VERDE ROMANA, False",
                    city: "La Romana",
                    note: "",
                    timeTravelEst: "2024-09-13 00:00:00",
                    timeRequest: "2024-09-16 13:02:03"
                },
                transferLnk: [
                    {
                        id: 10,
                        transferId: 47513,
                        deviceId: 980992,
                        container: "CWPS4M087397 - CMCU6046030",
                        currentState: 5,
                        timeLinked: "2024-09-16 13:02:03"
                    },
                    {
                        id: 10,
                        transferId: 47513,
                        deviceId: 980992,
                        container: "CWPS4M087397 - CMCU6046030",
                        currentState: 6,
                        timeLinked: "2024-09-16 13:02:00"
                    },
                    {
                        id: 10,
                        transferId: 47513,
                        deviceId: 980992,
                        container: "CWPS4M087397 - CMCU6046030",
                        currentState: 6,
                        timeLinked: "2024-09-16 13:02:00"
                    }
                ]
            },
            {
                transfer: {
                    id: 47513,
                    clientId: 2,
                    bl: "CWPS4M087399",
                    startPlace: {
                        id: 1190063,
                        label: "Puerto Causedo",
                        radius: 500,
                        latitude: 18.42351187,
                        longitude: -70.01320839,
                        address: "18.423512, -70.013208"
                    },
                    endPlace: {
                        id: null,
                        label: "Puerto Otro",
                        radius: null,
                        latitude: null,
                        longitude:null,
                        address: "null"
                    },
                    address: "PARQUE INDUSTRIAL ZONA FRANCA INDUSTRIAL II VILLA VERDE ROMANA, False",
                    city: "La Romana",
                    note: "",
                    timeTravelEst: "2024-09-13 00:00:00",
                    timeRequest: "2024-09-16 13:02:03"
                },
                transferLnk: [
                    {
                        id: 10,
                        transferId: 47513,
                        deviceId: 980992,
                        container: "CWPS4M087397 - CMCU6046030",
                        currentState: 5,
                        timeLinked: "2024-09-16 13:02:03"
                    },
                    {
                        id: 10,
                        transferId: 47513,
                        deviceId: 980992,
                        container: "CWPS4M087397 - CMCU6046030",
                        currentState: 6,
                        timeLinked: "2024-09-16 13:02:00"
                    }
                ]
            }
        
    ]
}
        
    
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




