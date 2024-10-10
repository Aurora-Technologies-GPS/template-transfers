<template>
	<div class="vistaStandarList">

		<div class="listaTabla" v-for=" (dato, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="index">

			<div @click="toggleCollapse(index)" :class="{ 'listaSelected': isOpen(index) }" class="targeticas ">
				<!-- targeticas -->

				<div class="rowInfo">
					<div>
						<div style="font-size: 9px;">Bill of Lading</div>
						<strong>1234567812ABCVB</strong>

						<div>
							<i class="bi bi-circle-fill vineta" style="color: #72c9eb;"></i><span
								class="miniLetra">Puerto caucedo</span>
							<img style="height: 25px; margin-left: 5px;" src="../assets/icons/flechaAzul.svg">



							<i class="bi bi-circle-fill vineta"></i><span class="miniLetra">Maritima Dominicana
								(MARDOM)</span>
						</div>



					</div>


					<div class="infoRows">

						<div class="cuadroCounter">{{ dato }}</div>
						<img style="height: 55px;" src="../assets/hombrecito.svg">

					</div>

				</div>

			</div>

			<div v-if="incomingData.vista == 2" v-show="isOpen(index)" class="contendorTabla">

				<TablaHeader />


				<TablaList class="myTable" />



			</div>
		</div>


	</div>
</template>
<script setup>

import { ref } from 'vue'
import TablaList from './TablaList.vue'
import TablaHeader from './TablaHeader.vue'

import {defineProps } from 'vue' //onMounted defineExpose ref

const incomingData = defineProps(['vista']);




let openIndex = ref()


function toggleCollapse(index) {

	console.log("toggleCollapse")

	openIndex.value = openIndex.value === index ? null : index;

}

function isOpen(index) {

	console.log("isOpen")

	return openIndex.value === index;
}


</script>
<style scoped>
.vistaStandarList {
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: white;
	border-right: solid 1px;
	border-left: solid 1px;
	border-bottom: solid 1px;
	border-color: #80808030;
	padding: 10px;
}


.listaTabla {
	padding: 10px;
	padding-top: 2px;
	padding-bottom: 0.5px;
	width: 100%;
}

.contendorTabla {
	margin-left: 20px;
	border-radius: 8px 8px 0px 0px;
	border: solid 1px;
	padding: 10px;
	border-color: #80808030;
}

.myTable {
	max-height: 230px;
	overflow: auto;
}

.listaSelected {
	box-shadow: 0px 0px 10px 5px rgba(102, 185, 217, 0.7)
}

.targeticas:hover {
	/* box-shadow: none;*/
	box-shadow: 0px 0px 10px 5px rgba(102, 185, 217, 0.7)
}

.targeticas {
	border: solid 1px;
	padding: 8px;
	border-color: #80808030;
	cursor: pointer;
	/*	min-height: 65px;*/
	border-radius: 8px 8px 8px 8px;
}


.infoRows {
	display: flex;
	padding-right: 10px;
}

.rowInfo {
	display: flex;
	justify-content: space-between;

}

.miniLetra {
	font-size: 10px;
}

.vineta {
	font-size: 8px;
	color: #3aaa35;
	padding: 5px;
}

.rowMenu {
	display: flex;
	justify-content: space-between;
}


.softBorders {
	margin-right: 20px;
	border: solid 1px;
	border-color: #80808030;
	border-radius: 7px 7px 7px 7px;
}

.filter {
	padding-left: 15px;
	padding-right: 15px;
	cursor: pointer;
	color: #cacaca;
}

.textInput {
	margin-left: 5px;
	background-color: transparent;
	color: grey;
	/*color: #cacaca;*/
	outline: none;
	width: 100%;
	border: none
}

.titleTable {
	font-size: 14px;
	font-weight: 600;
}

.datoTable {
	font-size: 12px;
	padding-top: 5px;
	padding-bottom: 5px;
}

.estatusTable {
	border-radius: 5px;
	background-color: pink;
	padding: 4px;
	padding-right: 15px;
	padding-left: 15px;
	font-weight: 700;
	color: red;
}




.icons {
	width: 25px;
	border: solid 1px;
	border-color: #80808030;
	padding: 2px;
	border-radius: 6px 6px 6px 6px;
}



.titlePop {
	padding: 2px;
	padding-left: 4px;
	font-size: 14px;
	font-weight: 600;
}

.columnaName {
	position: sticky;
	top: 0px;

}

.cuadroCounter {
	width: 48px;
	height: 48px;
	border-radius: 9px 9px 9px 9px;
	background-color: #ec6061;
	color: white;
	font-weight: 650;
	display: flex;
	justify-content: center;
	/* Centra horizontalmente */
	align-items: center;
	/* Centra verticalmente */
	font-size: 19px;
	/* Tamaño del texto */
	border: 1px solid #000;
	/* Borde del cuadrado */
	border-color: #afa7a7f2;

	margin-top: auto;
	margin-bottom: auto;
	margin-right: 35px;
}




/*  scrollbar stiyles width */

::-webkit-scrollbar {
	width: 10px;
}

/* scrollbar stiyles Handle */
::-webkit-scrollbar-thumb {
	background-color: #66b9d9;
	border-radius: 10px;
}
</style>