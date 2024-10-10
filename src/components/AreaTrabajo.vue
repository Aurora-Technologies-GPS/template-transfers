<template>
	<div class="AreaTrabajoPage">
		<div class="mainTitulo"><strong>Dashboard</strong></div>

		<div class="selectorVistaContainer">
			<div class="selectorVista">

				<div @click="cambiarvistaGeneral" class="targetas" :class="{ 'vistaSelected': !vistaGeneral }">
					Vista Standar
				</div>
				<div @click="cambiarVistaStandar" class="targetas" :class="{ 'vistaSelected': vistaGeneral }">
					Vista General
				</div>

			</div>


			<div class="dateSelectorContainer">

				<!-- 				v-model="adding.tracker" -->

				<select class="dateSelector">
					<option value="ultima">{{ "Ultima Semana" }}</option>
					<option value="ultima">{{ "Ultimo Mes" }}</option>
				</select>



			</div>

		</div>


		<CounterPage />
		<FrameVistaGeneral v-if="vistaGeneral" />

		<FrameVistaStandar v-if="!vistaGeneral" />


	</div>
</template>
<script setup>
import CounterPage from './CounterPage.vue'
import FrameVistaGeneral from './FrameVistaGeneral.vue'


import FrameVistaStandar from './FrameVistaStandar.vue'


import { ref } from 'vue';

let vistaGeneral = ref(true)


function cambiarvistaGeneral() {
	vistaGeneral.value = false
}

function cambiarVistaStandar() {

	vistaGeneral.value = true
}

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