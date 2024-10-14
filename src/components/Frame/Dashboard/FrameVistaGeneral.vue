<template>
	<div class="contenedorWorking">
		<VistaGeneral :incomingData="incomingData.fullTransfer" />

	</div>
</template>

<script setup>

import VistaGeneral from './VistaGeneral.vue'

import { defineProps } from 'vue'

const incomingData = defineProps(['fullTransfer']);


</script>

<style scoped>
.contenedorWorking {
	width: 100%;
	height: 100%;
	padding-left: 20px;
	padding-right: 20px;
	overflow: auto;
}
</style>