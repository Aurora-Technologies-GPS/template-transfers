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

		let counters = ref([
        {
            id: 1,
            name: "Enlazado",
            count: 0
        },
        {
            id: 2,
            name: "Transito",
            count: 0
        },
        {
            id: 3,
            name: "Completado",
            count: 0
        },
        {
            id: 4,
            name: "CANCELED",
            count: 0
        },
        {
            id: 5,
            name: "Expirado",
            count: 0
        },
        {
            id: 6,
            name: "UBI-ERR",
            count: 0
        }
    ])

		function changeIndice(indice_Selected) {

			indiceSelected.value = indice_Selected
		}

		function contarEstados(tranfer_id) {
			console.log("voy a consultar los estatus de :", tranfer_id)

			counterSingle(route.params.hash, tranfer_id).then(result => {



				if (result.success) {
					counters.value = result.states
				} else {
					console.log(result)
				}


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