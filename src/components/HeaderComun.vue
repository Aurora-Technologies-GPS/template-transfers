<template>
	<div class="selectorVistaContainer">
		<div class="selectorVista">


			<div @click="cambiarVistaStandar" class="targetas" :class="{ 'vistaSelected': vistaGeneral }">
				Vista General
			</div>
			<div @click="cambiarvistaGeneral" class="targetas" :class="{ 'vistaSelected': !vistaGeneral }">
				Vista Standar
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



</template>
<script setup>

import { ref, defineEmits } from 'vue';

let vistaGeneral = ref(true)


const outGoingData = defineEmits(
	['vistaGeneral', 'vistaStandar']
)


function cambiarvistaGeneral() {
	vistaGeneral.value = false
	outGoingData('vistaGeneral');
}

function cambiarVistaStandar() {

	vistaGeneral.value = true
	outGoingData('vistaStandar');
}

</script>

<style scoped>
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