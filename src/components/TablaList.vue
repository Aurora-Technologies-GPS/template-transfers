<template>
	<div class="expandible">


		<table class="table table-striped table-lg mb-0 requests-table mt-1">


			<thead>
				<tr>
					<th class="titleTable text-center">ID</th>
					<th class="titleTable text-center">Precinto</th>
					<th class="titleTable text-center">Fecha Inicio</th>
					<th class="titleTable text-center">Fecha Fin</th>
					<th class="titleTable text-center">Ruta</th>
					<th class="titleTable text-center">Estatus</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for=" (dato, index) in [1,1,1,1,1,1,1,1,1 ]" :key="index"
					class="hovertabla">
					<td class="datoTable text-center">1234567899</td>
					<td class="datoTable text-center">022456545</td>
					<td class="datoTable text-center">1/10/2024 00:00PM</td>
					<td class="datoTable text-center">1/10/2024 00:00PM</td>

					<td class="datoTable text-center">
						<span>Puerto Causedo</span>
						<img style="height: 25px; margin-left: 5px; margin-right: 5px;"
							src="../assets/icons/flechaNegra.svg">
						<span>Maritima Dominicana (MARDOM)</span>
					</td>

					<td class="datoTable text-center">
						<span class="text-center estatusTable">
							En Transito
						</span>
					</td>
				</tr>
			</tbody>
		</table>




	</div>
</template>

<script setup>


</script>

<style scoped>
.vistaStandarList {
	width: 100%;
	/*	height: 90%;*/
	/*	height: auto;*/
	height: 100%;
	overflow: auto;
	background-color: white;
	/*	border-right: solid 1px;
	border-left: solid 1px;
	border-bottom: solid 1px;
	border-color: #80808030;
	border-radius: 8px 8px 0px 0px;*/
	padding: 10px;

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


.expandible {
	/*border: solid 1px;*/
	/*padding: 10px;*/

	/*border-color: #80808030;*/
	cursor: pointer;
	/*	min-height: 65px;*/
	/*border-radius: 8px 8px 8px 8px;*/
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