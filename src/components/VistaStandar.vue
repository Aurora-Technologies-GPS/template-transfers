<template>
<div class="vistaStandar">

<VistaStandarHeader/>
<VistaStandarList/>	

</div>

</template>
<script setup>
	import VistaStandarHeader from './VistaStandarHeader.vue'
	import VistaStandarList from './VistaStandarList.vue'
	
</script>
<style scoped>

	.vistaStandar{
		
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 8px 8px 0px 0px;		
	}
	
</style>