<template>
	<div class="vistaStandar">
		<VistaStandarHeader style="padding: 10px;"/>
		<VistaStandarList />
		
	</div>

</template>
<script setup>
	import VistaStandarHeader from './VistaStandarHeader.vue'
	import VistaStandarList from './VistaStandarList.vue'
	
</script>
<style scoped>

	.vistaStandar{
		background-color: white;
		display: flex;
		flex-direction: column;
		/*justify-content: space-between;*/
		height: 100%;
		
	}
	
</style>