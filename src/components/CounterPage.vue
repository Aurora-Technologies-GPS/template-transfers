<template>

	<!-- 	v-show="showingCounter" -->

	<div id="collapseOne" class="contenedor collapse show">

		<div class="targeticasContainer">


			<div class="targeticas">



				<div class="headerContainer" :style="{ borderColor: getStatus(4).color }">

					<div class="checkColor">

						<!-- bi bi-square -->
						<!-- @click="change('progIschecked')"  -->
						<!-- 						<i :class="{ 'bi bi-check-square-fill': keys.progIschecked, 'bi bi-square-fill':!keys.progIschecked}" :style="{ color: getStatus(4).color, cursor: 'pointer'}">							
						</i> -->
						<img class="icons" src="../assets/icons/enlace.svg">

					</div>

					<div class="title">{{ "Enlazados" }}</div>

					<!-- sumarCounters([countList.inTime, countList.warning, countList.overdue]) -->

					<div class="labelCounter">{{ "13" }}
						<!-- <sub>{{ '/' + (countList.total || 0)}} </sub> -->

					</div>


				</div>

				<!-- 	<div class="comentario">+30 Desde la Ultima Semana</div> -->





			</div>



		</div>

		<div class="targeticasContainer">


			<div class="targeticas">



				<div class="headerContainer" :style="{ borderColor: getStatus(1).color }">

					<div class="checkColor">
						<!--  @click="change('pendIschecked')"  -->
						<img class="icons" src="../assets/icons/transito.svg">

					</div>

					<!-- getStatus(1).label -->

					<div class="title">{{ "En Transito" }}</div>

					<!-- (countList.pending || 0)  -->

					<div class="labelCounter">{{ "13" }}
						<!-- <sub>{{ '/' + (countList.total || 0)}} </sub> -->

					</div>


				</div>

				<!-- 				<div class="comentario">+30 Desde la Ultima Semana</div> -->





			</div>



		</div>
		<div class="targeticasContainer">


			<div class="targeticas">



				<div class="headerContainer" :style="{ borderColor: getStatus(3).color }">

					<div class="checkColor">
						<!--  @click="change('checkIschecked')" -->
						<img class="icons" src="../assets/icons/complete.svg">


					</div>

					<div class="title">{{ "Completados" }}</div>
					<!-- countList.checkin-->
					<!-- 					sumarCounters([countList.preCheckin, countList.lateCheckin]) -->
					<div class="labelCounter">{{ "13" }}
						<!-- 						<sub>{{ '/' + (countList.total || 0)}} </sub> -->

					</div>


				</div>

				<!-- 				<div class="comentario">+30 Desde la Ultima Semana</div> -->





			</div>



		</div>
		<div class="targeticasContainer">


			<div class="targeticas">



				<div class="headerContainer" :style="{ borderColor: getStatus(10).color }">

					<div class="checkColor">
						<!-- @click="change('cancelIschecked')" -->


						<!-- 	border-color: #80808030; -->

						<img class="icons" src="../assets/icons/expired.svg">






						<!-- 						<i  :class="{ 'bi bi-check-square-fill': keys.cancelIschecked, 'bi bi-square-fill':!keys.cancelIschecked}" :style="{ color: getStatus(10).color, cursor: 'pointer' }" >
							
						</i> -->

					</div>

					<div class="title">{{ "Expirados" }}</div>
					<!-- sumarCounters([countList.expired, countList.cancelled]) -->
					<div class="labelCounter">{{ "13" }}
						<!-- 	<sub>{{ '/' + (countList.total  || 0)}} </sub> -->

					</div>


				</div>

				<!-- <div class="comentario">+30 Desde la Ultima Semana</div> -->





			</div>



		</div>
		<div class="targeticasContainer">


			<div class="targeticas">



				<div class="headerContainer" :style="{ borderColor: getStatus(7).color }">

					<div class="checkColor">
						<!--  @click="change('doneIschecked')" -->
						<img class="icons" src="../assets/icons/canceled.svg">


					</div>

					<div class="title">{{ "Ubicaciones Erroneas" }}</div>
					<!-- 					sumarCounters([countList.doneInTime, countList.doneLate]) -->
					<div class="labelCounter">{{ "13" }}
						<!-- <sub>{{ '/' + (countList.total || 0)}} </sub> -->

					</div>


				</div>

				<!-- <div class="comentario">+30 Desde la Ultima Semana</div> -->





			</div>



		</div>


	</div>




	<i data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
		class="bi bi-arrow-down-right-square mb-1 text-right"
		style="color:#66b9d9; cursor: pointer; padding-right: 10px;"></i>


</template>

<script setup>


//import { ref } from 'vue' //defineEmits, defineProps 
import { getStatus, } from './utils.js' //sumarCounters



//import { counts } from './DataConector.js'

/*const countList = ref(
	{
		total: 0,
		pending: 0,
		checkin: 0,
		lateCheckin: 0,
		inTime: 0,
		warning: 0,
		overdue: 0,
		doneInTime: 0,
		doneLate: 1,
		cancelled: 0,
		expired: 0
	})*/

/*const keys=ref({
	progIschecked:true,
	pendIschecked:true,
	checkIschecked:false,
	doneIschecked:false,
	cancelIschecked:false

})*/

/*const statuses={

	peding:[1],
	checking:[2, 3],
	progress:[4, 5, 6],
	done:[7,8],
	cancel:[9,10]

}*/



/*const incomingData = defineProps({
	isCell: Boolean
})


const outGoingData = defineEmits(
	['updateFiltro']
)*/



</script>

<style scoped>
/*@import url('./styles/counters.css');*/



.contenedor {
	/*	background: red;*/
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
}

.targeticasContainer {

	width: 20%;
	height: auto;
	padding: 20px;
	padding-bottom: 0px;

}

.targeticas {
	padding: 15px;
	background-color: white;
	min-height: 90px;
	border: solid 1px;
	border-color: #80808030;
	border-radius: 10px 10px 10px 10px;
}


.labelCounter {
	font-size: 29px;
	padding-top: 0px;
	font-weight: 600;
}

.headerContainer {

	position: relative;
	/*	border-left: solid 6px;
*/
	padding-left: 10px;
	border-color: #80808030;

}

.icons {
	width: 27px;
	border: solid 1px;
	border-color: #80808030;
	padding: 2px;
	border-radius: 6px 6px 6px 6px;
}

.title {

	font-size: 14px;
	font-weight: bold;
	color: #adaeb2;
}

.checkColor {
	font-size: 25px;
	position: absolute;
	right: 0px;
	top: -10px;

}

.comentario {
	font-size: 10px;
	padding-top: 5px;
	color: #adaeb2;
}
</style>