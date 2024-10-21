export async function transfersList(hash) {

    console.log("********************* API transfersList ***************", hash);


    const output = {
        data:
        {
            success: true,
            clientFullTransfers: {
                client: {
                    id: 5,
                    name: "MARITIMA DOMINICANA*",
                    contact: "MARITIMA DOMINICANA*",
                    rncIdcard: "False",
                    email: "FCOMAS@MARDOM.COM",
                    phone: "+1 809-702-9398",
                    hash: "c5543f71c616bef13cf7f66d103e15b0"
                },
                fullTransfer: [

                    {
                        transfer: {
                            id: 47931,
                            clientId: 5,
                            bl: "TSAC20241123",
                            startPlace: {
                                id: 2388924,
                                label: "Puerto Caucedo",
                                radius: 400,
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
                            timeTravelEst: "2024-09-20 00:00:00",
                            timeRequest: "2024-09-21 13:37:40"
                        },
                        transferLnk: [
                            {
                                id: 353,
                                transferId: 47931,
                                deviceId: 1007830,
                                container: "TSAC20241123 - MRKU3406511",
                                currentState: 2,
                                timeLinked: "2024-09-21 13:37:40",
                                lastBlitTime: "2024-09-21 12:44:39"
                            },
                            {
                                id: 354,
                                transferId: 47931,
                                deviceId: 3031660,
                                container: "TSAC20241123 - MRKU5736390",
                                currentState: 2,
                                timeLinked: "2024-09-21 13:37:40",
                                lastBlitTime: "2024-09-23 18:23:45"
                            },
                            {
                                id: 355,
                                transferId: 47931,
                                deviceId: 2895717,
                                container: "TSAC20241123 - MRKU6305530",
                                currentState: 3,
                                timeLinked: "2024-09-21 13:37:40",
                                lastBlitTime: "2024-09-21 13:07:44"
                            },
                            {
                                id: 356,
                                transferId: 47931,
                                deviceId: 865539,
                                container: "TSAC20241123 - MRSU3479254",
                                currentState: 1,
                                timeLinked: "2024-09-21 13:37:40",
                                lastBlitTime: null
                            },
                            {
                                id: 363,
                                transferId: 47931,
                                deviceId: 3076352,
                                container: "TSAC20241123 - TEMU6882874",
                                currentState: 3,
                                timeLinked: "2024-09-21 13:37:40",
                                lastBlitTime: "2024-09-21 13:12:31"
                            }
                        ]
                    },
                    {
                        transfer: {
                            id: 47955,
                            clientId: 5,
                            bl: "BQEGMXM058375",
                            startPlace: {
                                id: 1190063,
                                label: "Puerto Haina",
                                radius: 400,
                                latitude: 18.42351187,
                                longitude: -70.01320839,
                                address: "18.423512, -70.013208"
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
                            timeTravelEst: "2024-09-20 00:00:00",
                            timeRequest: "2024-09-23 11:23:12"
                        },
                        transferLnk: [
                            {
                                id: 386,
                                transferId: 47955,
                                deviceId: 1076519,
                                container: "BQEGMXM058375 - FSCU8216715",
                                currentState: 3,
                                timeLinked: "2024-09-23 11:23:12",
                                lastBlitTime: "2024-09-23 13:34:22"
                            },
                            {
                                id: 387,
                                transferId: 47955,
                                deviceId: 1076520,
                                container: "BQEGMXM058375 - FSCU8216654",
                                currentState: 2,
                                timeLinked: "2024-09-23 10:19:12",
                                lastBlitTime: "2024-09-23 12:34:22"
                            },
                            {
                                id: 388,
                                transferId: 47955,
                                deviceId: 1076521,
                                container: "BQEGMXM058375 - FSCU821459",
                                currentState: 5,
                                timeLinked: "2024-09-23 09:20:12",
                                lastBlitTime: "2024-09-23 11:34:22"
                            }
                        ]
                    },
                    {
                        transfer: {
                            id: 48091,
                            clientId: 5,
                            bl: "ABT56S021136",
                            startPlace: {
                                id: 2388924,
                                label: "Puerto Caucedo",
                                radius: 400,
                                latitude: 18.42505798,
                                longitude: -69.63572387,
                                address: "H, Andrés, Santo Domingo, República Dominicana, 15700"
                            },
                            endPlace: {
                                id: 2315343,
                                label: "Maritima Dominicana Haina",
                                radius: 150,
                                latitude: 18.42833662,
                                longitude: -70.00471638,
                                address: "Almacenes A4 MARDOM, Autopista 30 de Mayo, Santo Domingo, República Dominicana, 11107"
                            },
                            address: "Carretera Sanchez Km. 12 1/2, 11116, False",
                            city: "Santo Domingo",
                            note: "",
                            timeTravelEst: "2024-09-21 00:00:00",
                            timeRequest: "2024-09-23 15:08:33"
                        },
                        transferLnk: [
                            {
                                id: 409,
                                transferId: 48091,
                                deviceId: 3076397,
                                container: "ABT56S021136  - HLBU9982876",
                                currentState: 1,
                                timeLinked: "2024-09-23 15:08:33",
                                lastBlitTime: null
                            }
                        ]
                    },
                    {
                        transfer: {
                            id: 48542,
                            clientId: 5,
                            bl: "HLCULIV2407APFZ9",
                            startPlace: {
                                id: 2388924,
                                label: "Puerto Caucedo",
                                radius: 400,
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
                            timeTravelEst: "2024-09-30 00:00:00",
                            timeRequest: "2024-10-01 09:47:42"
                        },
                        transferLnk: [
                            {
                                id: 695,
                                transferId: 48542,
                                deviceId: 3076463,
                                container: "HLCULIV2407APFZ9 - TGHU5211111",
                                currentState: 2,
                                timeLinked: "2024-10-01 09:47:42",
                                lastBlitTime: "2024-10-01 09:46:27"
                            }
                        ]
                    },
                    {
                        transfer: {
                            id: 49479,
                            clientId: 5,
                            bl: "BWLESP24001509",
                            startPlace: {
                                id: 2388924,
                                label: "Puerto Caucedo",
                                radius: 400,
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
                            timeTravelEst: "2024-10-11 00:00:00",
                            timeRequest: "2024-10-12 10:41:32"
                        },
                        transferLnk: [
                            {
                                id: 1391,
                                transferId: 49479,
                                deviceId: 2907740,
                                container: "BWLESP24001509 - MSNU7031174",
                                currentState: 1,
                                timeLinked: "2024-10-12 10:41:32",
                                lastBlitTime: null
                            },
                            {
                                id: 1392,
                                transferId: 49479,
                                deviceId: 3076359,
                                container: "BWLESP24001509 - UETU6093661",
                                currentState: 2,
                                timeLinked: "2024-10-12 10:41:32",
                                lastBlitTime: "2024-10-12 11:06:27"
                            }
                        ]
                    }
                ]
            }

        }
    }


    return output
}

export async function statesCountGeneral(hash) {

    console.log("********************* API statesCountGeneral ***************", hash);


    const output = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 3
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 5
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 3
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 1
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    return output
}


export async function statesCount(hash, transfer_id, from, to) {


    console.log("********************* API statesCount ***************", hash, transfer_id, from, to);


    const output = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 0
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 0
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 0
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 0
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    const output2 = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 0
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 1
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 1
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 1
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }


    const output4 = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 1
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 0
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 0
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 0
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    const output5 = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 0
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 1
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 0
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 0
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    const output6 = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 1
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 1
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 0
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 0
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    const output7 = {
        data: {


            success: true,
            states: [
                {
                    id: 1,
                    name: "LINKED",
                    count: 1
                },
                {
                    id: 2,
                    name: "IN_TRANSIT",
                    count: 2
                },
                {
                    id: 3,
                    name: "DONE",
                    count: 2
                },
                {
                    id: 4,
                    name: "CANCELED",
                    count: 0
                },
                {
                    id: 5,
                    name: "EXPIRED",
                    count: 0
                },
                {
                    id: 6,
                    name: "START_END_ERROR",
                    count: 0
                }
            ]
        }
    }

    let salida = { data: { success: false } }

    switch (transfer_id) {

        case 47931:
            salida = output7;
            break;

        case 47955:
            salida = output2;
            break;
        case 48091:
            salida = output4;
            break;

        case 48542:
            salida = output5;
            break;
        case 49479:
            salida = output6;
            break;

        default:
            salida = output;
            break;
    }

    return salida
}