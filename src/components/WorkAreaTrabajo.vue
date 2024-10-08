<template>
	<div class="contenedorWorking">

		<div class="mainContent">

			<VistaStandar />
			
		</div>
		
	</div>
</template>

<script setup>

	import VistaStandar from './VistaStandar.vue'

</script>

<style scoped>
	.contenedorWorking{
		width: 100%;
		height: 100%;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 5px;
	}

	.mainContent{
		border: solid 1px;
		height: 100%;
		border-color: #80808030;
		overflow: auto;

		border-radius: 8px 8px 8px 8px;
	}
	
</style>