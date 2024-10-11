<template>
	<div class="DashBoardPage">

		<NewMenu @vista="changeVista" style=" width:15%;" />

		<DashboardPage style=" width: 100%;" v-if="vistaSelected == 1" />
		<VistaMapaPage style=" width: 100%;" v-if="vistaSelected == 2" />
		<HistorialPage style=" width: 100%;" v-if="vistaSelected == 3" />

	</div>

</template>

<script>
import { ref } from 'vue'

import DashboardPage from '@/components/Menu/DashboardPage.vue'
import VistaMapaPage from '@/components/Menu/VistaMapaPage.vue'
import HistorialPage from '@/components/Menu/HistorialPage.vue'

import NewMenu from '@/components/NewMenu.vue'


export default {
	props: [],

	components: {
		DashboardPage,
		VistaMapaPage,
		HistorialPage,
		NewMenu,
	},
	setup(props) {

		let vistaSelected = ref(1)

		//const mapaRef = ref(null);

		/*let valoresDefectoMapa = ref({
			center: [18.468025816718264, -69.93920818790205],
			zoom: 15,
			lat: 18.468025816718264,
			lng: -69.95920818790205
		})*/

		//let saludo = "hola mundo"
		function changeVista(vista_Selected) {
			/*console.log(vista_Selected)*/
			vistaSelected.value = vista_Selected
		}

		/*		function screen(child_info) {
					console.log(child_info)
					const element = document.getElementById('resizeElement');
		
					if (element.style.width=='100%') {
						element.style.width = `0%`;
		
					}else{
						
						// element.style.maxWidth=`100%`;
						element.style.width = `100%`;
					}
					
				}
		*/
		console.log(props)


		return {
			DashboardPage, HistorialPage,
			NewMenu, changeVista,
			VistaMapaPage, vistaSelected
		}
	},
	mounted() {

		//this.hash = this.$route.params.hash
		console.log(this.$route.params.hash)

		/*
		let isResizing = false;
		const element = document.getElementById('resizeElement');
		const resizeHandle = document.getElementById('resizeHandle');
		
		resizeHandle.addEventListener('mousedown', () => {
			isResizing = true;
			document.addEventListener('mousemove', resizeElement);
			document.addEventListener('mouseup', stopResizing);
		});
		
		function resizeElement() {
			if (isResizing) {
				const rect = element.getBoundingClientRect();
				// Calcula el nuevo ancho basado en la posición horizontal del ratón
				const newWidth = Math.min(event.clientX - rect.left, window.innerWidth);
				element.style.width = `${newWidth}px`;
			}
		}
		
		function stopResizing() {
			if (isResizing) {
				isResizing = false;
				document.removeEventListener('mousemove', resizeElement);
				document.removeEventListener('mouseup', stopResizing);
			}
		}*/

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