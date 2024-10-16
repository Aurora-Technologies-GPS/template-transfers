<template>
	<div class="AreaTrabajoPage">

		<div class="contenedorMapa_Menu">

			<div class="MenuMapa">
				<FrameMapaMenu @buscar="Busqueda"  :transfer_id="incomingData.transfer_id"  :transferLnk="transfersList" />
			</div>

			<div class="mapa">
				<MapaPage v-if="true" :inputData="valoresDefectoMapa" ref="mapaRef" />
			</div>

		</div>

	</div>

</template>
<script setup>

import FrameMapaMenu from './FrameMapaMenu.vue'

import MapaPage from '@/components/MapaPage.vue'

import { transfers_list } from '@/components/conexion/DataConectorTest.js'

import { ref, defineProps } from 'vue'


import { useRoute } from 'vue-router';

const route = useRoute();

const incomingData = defineProps(['transfer_id']);


let transfersList = ref([
	{
		transfer: {
			id: 0,
			clientId: 0,
			bl: "BL",
/*			startPlace: {
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



function Busqueda(texto){

	let text_buscar=texto || false

	if (!text_buscar) {
		text_buscar=incomingData.transfer_id
	}

	if (text_buscar !=0) {
		console.log("voy a buscar", text_buscar)

		transfers_list(route.params.hash).then(result => {


	if (result.success) {

		console.log(result.clientFullTransfers.fullTransfer)


		transfersList.value = result.clientFullTransfers.fullTransfer

	} else {
		console.log(result)
	}



}).catch(error => {
	console.log(error)
	console.log("Error al Hacer La peticion")
});
	}else{
		console.log("valor invalido")
	}
}

Busqueda();

const mapaRef = ref(null);

let valoresDefectoMapa = ref({
	center: [18.468025816718264, -69.93920818790205],
	zoom: 15,
	lat: 18.468025816718264,
	lng: -69.95920818790205
})

</script>

<style scoped>
.AreaTrabajoPage {

	width: 100%;
	height: 90%;
	overflow: auto;
	padding: 20px;
}

.contenedorMapa_Menu {
	height: 100%;
	display: flex;
	height: auto;
	overflow: auto;
}

.MenuMapa {
	width: 550px;
	height: 100%;
	background-color: white;
	border-radius: 8px 0px 0px 8px;
	border: solid 1px;
	border-color: #80808030;

}

.mapa {
	height: 100%;
	width: 100%;
	border: solid 1px;
	border-color: #80808030;
	border-radius: 0px 8px 8px 0px;
}
</style>