<template>
	<div class="tablaListMapa">

		<div v-for=" (dato, index) in [1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 4, 4]" :key="index" class="targeticas">

			<div class="rowMenu">

				<div>
					<div class="fontPeq"> BL(Bill of Lading)</div>
					<div class="titleMapa">12345678899ACDF </div>
					<div class="fontPeq">ID Container</div>
					<div class="titleMapa">123456 </div>

					<div class="fontPeq">ID Precinto</div>
					<div class="titleMapa">123456 </div>
				</div>


				<img width="100" src="@/components/../assets/camionCerrado.svg">

			</div>
			<hr class="divisor">

			<div><i class="bi bi-circle-fill vineta" style="color: #72c9eb;"></i>
				<span class="destinos">Puerto Caucedo</span>
			</div>

			<div><i class="bi bi-circle-fill vineta"></i>
				<span class="destinos">Maritima Dominicana (MARDON)</span>
			</div>

		</div>

	</div>
</template>

<script setup>

</script>

<style scoped>
.tablaListMapa {
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: white;
	padding-top: 5px;
}

.targeticas {
	border: solid 1px;
	padding: 8px;
	border-color: #80808030;
	cursor: pointer;
	margin-bottom: 7px;
	background: white;
	margin-left: 7px;
	margin-right: 7px;
	/*	min-height: 65px;*/
	border-radius: 8px 8px 8px 8px;
}


.rowMenu {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.titleMapa {
	font-weight: 700;
}

.divisor {
	color: grey;
	margin: 0px;
	margin-top: 10px;
	margin-bottom: 10px;
}

.targeticas:hover {
	/* box-shadow: none;*/
	box-shadow: 0px 0px 10px 5px rgba(102, 185, 217, 0.7)
}

.vineta {
	font-size: 12px;
	color: #3aaa35;
	padding: 5px;
}

.fontPeq {
	font-size: 11px;
}


.destinos {
	font-weight: 600;
	font-size: 11px;
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