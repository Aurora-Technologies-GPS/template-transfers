<template>
	<div class="vistaGeneral">

		<VistaGeneralList @transfer_id="toMapa" :totalContenedores="props.contenedoresCount"
			:counterTransferLnk="counters" @contarStatus="contarEstados" @indice="changeIndice"
			:incomingData="props.incomingData" class="contendorTabla" />
		<TablaVistaGeneral :indice="indiceSelected" :incomingData="props.incomingData" />

	</div>

</template>
<script>
import VistaGeneralList from '@/components/VistaGeneralList.vue'
import TablaVistaGeneral from './TablaVistaGeneral.vue'

import { counterSingle } from '@/components/conexion/DataConector.js'
import { convertirStatus } from '@/components/utils.js' //traducir_estatus

import { ref } from 'vue';
import { useRoute } from 'vue-router';



export default {
	emits: ['transfer_id'],
	props: ['incomingData', 'contenedoresCount'],

	components: {
		VistaGeneralList,
		TablaVistaGeneral,

	},
	setup(props, { emit }) {

		let indiceSelected = ref(0)

		const route = useRoute();


		let counters = ref({
			linked: 0,
			in_transit: 0,
			done: 0,
			canceled: 0,
			expired: 0,
			start_end_error: 0
		})

		function toMapa(transfer_id) {
			emit('transfer_id', transfer_id);
		}

		function changeIndice(indice_Selected) {

			indiceSelected.value = indice_Selected
		}

		function contarEstados(tranfer_id) {
			/*console.log("voy a consultar los estatus de :", tranfer_id)*/

			counterSingle(route.params.hash, tranfer_id).then(result => {

				if (result.success) {
					counters.value = convertirStatus(result.states)
				} else {
					console.log(result)
				}


			}).catch(error => {
				console.log(error)
				console.log("Error al Hacer La peticion")
			});


		}

		return { indiceSelected, changeIndice, props, counters, contarEstados, toMapa }
	},
	mounted() {

		//console.log(this.props.incomingData)



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