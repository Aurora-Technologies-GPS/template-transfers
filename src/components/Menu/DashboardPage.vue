<template>
	<div class="AreaTrabajoPage">
		<div class="mainTitulo"><strong>Dashboard</strong></div>


		<HeaderComun @vistaGeneral="cambiarvistaGeneral" @vistaStandar="cambiarVistaStandar" />


		<CounterPage :countersGeneral="incomingData.countersGeneral" />
		<FrameVistaGeneral @transfer_id="toMapa" :contenedoresCount="contenedoresCount" :fullTransfer="transfersList"
			v-if="vistaGeneral" />

		<FrameVistaStandar @transfer_id="toMapa" :fullTransfer="transfersList" v-if="!vistaGeneral" />


	</div>
</template>
<script setup>
import CounterPage from '@/components/CounterPage.vue'
import HeaderComun from '@/components/HeaderComun.vue'

import FrameVistaGeneral from '@/components/Frame/Dashboard/FrameVistaGeneral.vue'
import FrameVistaStandar from '@/components/Frame/Dashboard/FrameVistaStandar.vue'

import { transfers_list, counterGeneral } from '@/components/conexion/DataConector.js'

import { useRoute } from 'vue-router';

import { ref, defineEmits, defineProps } from 'vue';

const incomingData = defineProps(['countersGeneral']);

const outGoingData = defineEmits(['transfer_id']);


function toMapa(transfer_id) {

	outGoingData('transfer_id', transfer_id);
}

const route = useRoute();

let transfersList = ref([
	{
		transfer: {
			id: 0,
			clientId: 0,
			bl: "BL",
			/*                    startPlace: {
									id: 0,
									label: "INICIO",
									radius: 0,
									latitude: 18.42351187,
									longitude: -70.01320839,
									address: "18.423512, -70.013208"
								},
								endPlace: {
									id: null,
									label: "FIN",
									radius: null,
									latitude: null,
									longitude:null,
									address: "null"
								},*/
			address: "N/A",
			city: "N/A",
			note: "",
			timeTravelEst: "2024-09-13 00:00:00",
			timeRequest: "2024-09-16 13:02:03"
		},
		transferLnk: [
			{
				id: 10,
				transferId: 47513,
				deviceId: 980992,
				container: "Defecto - CMCU6046030",
				currentState: 5,
				timeLinked: "2024-09-16 13:02:03"
			}
		]
	}

]);

let contenedoresCount = ref({count:0, date:'1/10/2024; 00:00PM'});

let vistaGeneral = ref(true)


function cambiarvistaGeneral() {
	vistaGeneral.value = false
}

function cambiarVistaStandar() {

	vistaGeneral.value = true
}

transfers_list(route.params.hash).then(result => {


	if (result.success) {

		transfersList.value = result.clientFullTransfers.fullTransfer

	} else {
		console.log(result)
	}

	counterGeneral(route.params.hash).then(result_count => {

		if (result_count.success) {

			contenedoresCount.value.count=0

			result_count.states.forEach(elem=>{
				if(elem.name.toUpperCase() =='CANCELED' ){

					console.log("No se cuenta ")

				}else{
					contenedoresCount.value.date= new Date().toLocaleString(); 
					contenedoresCount.value.count=contenedoresCount.value.count+elem.count	|| 0	
					/*console.log(elem)	*/
				}
			})
	
		} else {
		console.log(result)
	}

	}).catch(error2 => {
		console.log(error2)
		console.log("Error al Hacer La peticion Counter")
	});



}).catch(error => {
	console.log(error)
	console.log("Error al Hacer La peticion")
});

</script>

<style scoped>
.mainTitulo {
	padding: 15px;
	padding-left: 29px;
	width: 100%;
	font-size: 22px;
	font-weight: 400;
	border-bottom: solid 2px;
	border-color: #80808030;
	background-color: white;
}

.AreaTrabajoPage {
	width: auto;
	display: flex;
	flex-direction: column;

	/*background-color: pink;*/

}

.selectorVistaContainer {
	display: flex;
	padding-left: 29px;
	padding-top: 20px;
	border-radius: 8px 8px 8px 8px;
	justify-content: space-between;
	width: 100%;
}

.selectorVista {
	background-color: #ebedf4;
	padding: 4px;
	border-radius: 8px 8px 8px 8px;
	display: flex;

}

.targetas {
	padding: 8px;
	cursor: pointer;
	border-radius: 8px 8px 8px 8px;
}

.dateSelectorContainer {
	cursor: pointer;
	margin-right: 20px;
}

.dateSelector {
	background-color: #54bbda;
	color: white;
	cursor: pointer;
	font-weight: 700;
	padding: 10px;
	padding-top: 8px;
	padding-bottom: 8px;
	border-radius: 8px 8px 8px 8px;
	border-color: #80808030;

}

.vistaSelected {
	background-color: white;
}
</style>