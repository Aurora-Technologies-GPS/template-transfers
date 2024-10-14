<template>
	<div class="vistaStandar">

		<VistaStandarHeader />
		<VistaStandarList :transfers_list="incomingData.incomingData" :vista="2" />

	</div>

</template>
<script setup>
import VistaStandarHeader from '@/components/VistaStandarHeader.vue'
import VistaStandarList from '@/components/VistaStandarList.vue'

import { defineProps } from 'vue' 

const incomingData = defineProps(['incomingData']);


</script>
<style scoped>
.vistaStandar {

	display: flex;
	flex-direction: column;
	height: 100%;
	border-radius: 8px 8px 0px 0px;
}
</style>