<template>
	<div class="vistaGeneral">

		<VistaGeneralList class="contendorTabla" />
		<TablaVistaGeneral />

	</div>

</template>
<script setup>
import VistaGeneralList from '@/components/VistaGeneralList.vue'
import TablaVistaGeneral from './TablaVistaGeneral.vue'



</script>
<style scoped>
.vistaGeneral {

	display: flex;
	flex-direction: column;
	height: 100%;
}

.contendorTabla {
	padding-left: 10px;
	height: auto;
}
</style>