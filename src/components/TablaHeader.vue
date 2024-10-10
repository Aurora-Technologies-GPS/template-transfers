<template>
	<div class="rowMenu"> <!-- columnaName -->



		<div>
			<img class="icons" src="../assets/icons/contenedor.svg">

			<span class="titlePop">Contenedores</span>

		</div>


		<div class="rowMenu">
			<div class="softBorders">
				<input placeholder="Buscar..." type="text" class="textInput">
			</div>

			<div class="softBorders">
				<i class="bi bi-sliders filter"> Filtros</i>
			</div>

		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.rowMenu {
	display: flex;
	justify-content: space-between;
	padding-bottom: 5px;
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