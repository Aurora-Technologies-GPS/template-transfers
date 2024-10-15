<template>
	<div class="AreaTrabajoPage">

		<div class="contenedorMapa_Menu">

			<div class="MenuMapa">
				<FrameMapaMenu />
			</div>

			<div class="mapa">
				<MapaPage v-if="true" :inputData="valoresDefectoMapa" ref="mapaRef" />
			</div>

		</div>

	</div>

</template>
<script setup>


import { ref } from 'vue';

import FrameMapaMenu from './FrameMapaMenu.vue'

import MapaPage from '@/components/MapaPage.vue'




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
	height: auto;
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
	height: 90%%;
	width: 100%;
	border: solid 1px;
	border-color: #80808030;
	border-radius: 0px 8px 8px 0px;
}
</style>