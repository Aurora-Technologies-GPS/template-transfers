<template>
	<div class="vistaGeneral">

		<VistaGeneralList @indice="changeIndice" :incomingData="props.incomingData" class="contendorTabla" />
		<TablaVistaGeneral :indice="indiceSelected" :incomingData="props.incomingData" />

	</div>

</template>
<script>
import VistaGeneralList from '@/components/VistaGeneralList.vue'
import TablaVistaGeneral from './TablaVistaGeneral.vue'

import { ref } from 'vue';


export default {
	props: ['incomingData'],

	components: {
		VistaGeneralList,
		TablaVistaGeneral,
	
	},
	setup(props) {

		let indiceSelected=ref(0)

		function changeIndice(indice_Selected) {

			indiceSelected.value = indice_Selected
		}

		return {  indiceSelected,  changeIndice, props }
	},
	mounted() {

	}

}


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