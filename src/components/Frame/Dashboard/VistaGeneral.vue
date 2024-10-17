<template>
	<div class="vistaGeneral">

		<VistaGeneralList :counterTransferLnk="counters" @contarStatus="contarEstados" @indice="changeIndice"
			:incomingData="props.incomingData" class="contendorTabla" />
		<TablaVistaGeneral :indice="indiceSelected" :incomingData="props.incomingData" />

	</div>

</template>
<script>
import VistaGeneralList from '@/components/VistaGeneralList.vue'
import TablaVistaGeneral from './TablaVistaGeneral.vue'

import { counterSingle } from '@/components/conexion/DataConectorTest.js'

import { ref } from 'vue';
import { useRoute } from 'vue-router';



export default {
	props: ['incomingData'],

	components: {
		VistaGeneralList,
		TablaVistaGeneral,

	},
	setup(props) {

		let indiceSelected = ref(0)

		const route = useRoute();

		let counters = ref({

			linked: 3,
			in_transit: 3,
			done: 3,
			canceled: 3,
			expired: 3,
			start_end_error: 3

		})

		function changeIndice(indice_Selected) {

			indiceSelected.value = indice_Selected
		}

		function contarEstados(tranfer_id) {
			console.log("voy a consultar los estatus de :", tranfer_id)

			counterSingle(route.params.hash, tranfer_id).then(result => {

				counters.value = result

			}).catch(error => {
				console.log(error)
				console.log("Error al Hacer La peticion")
			});


		}

		return { indiceSelected, changeIndice, props, counters, contarEstados }
	},
	mounted() {

	}

}


</script>
<style scoped>
.vistaGeneral {

	display: flex;
	flex-direction: column;
	height: 100%;
}

.contendorTabla {
	padding-left: 10px;
	height: auto;
}
</style>