<template>
	<div class="DashBoardPage">

		<NewMenu :LegalName="name" @vista="changeVista" style=" width:15%;" ref="menuRef" />

		<DashboardPage :countersGeneral="countersGeneral" @transfer_id="changeIndiceMapa" style=" width: 100%;"
			v-if="vistaSelected == 1" />
		<VistaMapaPage :countersGeneral="countersGeneral" :transfer_id="transfer_id_selected" style=" width: 100%;"
			v-if="vistaSelected == 2" />
		<HistorialPage style=" width: 100%;" v-if="vistaSelected == 3" />

	</div>

</template>

<script>
import { ref } from 'vue'

import DashboardPage from '@/components/Menu/DashboardPage.vue'
import VistaMapaPage from '@/components/Menu/VistaMapaPage.vue'
import HistorialPage from '@/components/Menu/HistorialPage.vue'

import NewMenu from '@/components/NewMenu.vue'

import { transfers_list, counterGeneral } from '@/components/conexion/DataConector.js'

import { convertirStatus } from '@/components/utils.js' //

export default {
	props: [],

	components: {
		DashboardPage,
		VistaMapaPage,
		HistorialPage,
		NewMenu,
	},
	setup(props) {

		let vistaSelected = ref(1);

		const menuRef=ref(null)

		let transfer_id_selected = ref(0)

		let name = ref('default name');


		let countersGeneral = ref({
			linked: 0,
			in_transit: 0,
			done: 0,
			canceled: 0,
			expired: 0,
			start_end_error: 0
		})


		function changeVista(vista_Selected) {
			/*console.log(vista_Selected)*/
			vistaSelected.value = vista_Selected
		}

		function changeIndiceMapa(transfer_id) {

			vistaSelected.value = 2;
			menuRef.value.updateView(2)
			transfer_id_selected.value = transfer_id
		}

		/*console.log(props)*/
		let temp = props
		temp = ' '
		console.log(temp);


		return {
			DashboardPage, HistorialPage,
			NewMenu, changeVista,
			VistaMapaPage, vistaSelected,
			name, transfer_id_selected,
			changeIndiceMapa, countersGeneral,
			menuRef
		}
	},
	mounted() {

		counterGeneral(this.$route.params.hash).then(result => {

			if (result.success) {
				this.countersGeneral = convertirStatus(result.states)
			} else {
				console.log(result)
			}

		}).catch(error => {
			console.log(error)
			console.log("Error al Hacer La peticion")
		});



		transfers_list(this.$route.params.hash).then(result => {

			if (result.success) {

				this.name = result.clientFullTransfers.client.name;


			} else {
				console.log(result)
			}



		}).catch(error => {
			console.log(error)
			console.log("Error al Hacer La peticion")
		});


	}

}


</script>

<style scoped>
.DashBoardPage {
	/*	height: 90%;*/
	width: 100%;
	height: 100%;
	display: flex;

}

#resizeElement {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 380px;
	/* Valor inicial */
	min-width: 380px;
	max-width: 850px;
	background-color: var(--lista-fondo);
	box-shadow: rgba(0, 0, 0, 0.49) 8px 10px 15px 0px;
	transition: width 0.1s;
	/* Transición suave para el cambio de ancho */
	/* Sin cursor aquí */
}

#resizeHandle {
	position: absolute;
	top: 0;
	right: 0;
	width: 10px;
	/* Ancho del área del cursor */
	height: 100%;
	cursor: ew-resize;
	/* Cursor para indicar redimensionamiento horizontal */
	background-color: rgba(0, 0, 0, 0);
	/* Puede ser transparente o del color de fondo */
}
</style>