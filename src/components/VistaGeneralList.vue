<template>

	<div class="VistaGeneralList">

		<div class="rowMenu" style="height: 36vh">

			<div class="contenedorLeft">

				<VistaStandarList :vista="1" style="border: none; "/>


			</div>

			<div class="contenedorRigth">

				<div class="text-right mb-1">1/10/2024; 00:00PM</div>
				<div class="cuadro">

					<div class="row">

						<div class="col cuadroTexto">
							<img class="imagen" style="" height="100" src="../assets/camionAzul.png">

						</div>




						<div class="col cuadroTexto">
							<div class="imagen text-center">
								<div>
									Contenedores
								</div>
								<div>
									13
								</div>	 
							</div>

						</div>

					</div>

				</div>


				<div class="row text-center">
					<div class="col">
						<div class="borderRight">
							<img class="imagen" style="" height="100" src="../assets/carga.png">

						</div>
					</div>
					<div class="col">
						<div class="borderRight">
							<div>Enlazado</div>
							<div>13</div>

						</div>
					</div>

					<div class="col">
						<div class="borderRight">
							<div>En Transito</div>
							<div>13</div>
						</div>
					</div>
					<div class="col">
						<div class="borderRight">
							<div>Completado</div>
							<div>13</div>
						</div>
					</div>
					<div class="col">
						<div >
							<div>Cancelados</div>
							<div>13</div>
						</div>
					</div>


				</div>

			</div>

		</div>

	</div>

</template>

<script setup>
	import VistaStandarList from './VistaStandarList.vue'


</script>

<style scoped>
.VistaGeneralList {
	border-radius: 8px;
	border: solid 1px;
	border-color: #80808030;
	margin-bottom: 10px;
	background-color: white;
}

.rowMenu {
	display: flex;
	justify-content: space-between;
}

.cuadro {

	border-radius: 8px;
	border: solid 1px;
	height: 70%;
	position: relative;
	border-color: #80808030;
}

.contenedorRigth {
	padding: 15px;
	width: 43%;
}


.cuadroTexto {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.imagen {
	max-width: 50%;
	height: auto;
}

.borderRight {
	border-right: solid 1px;
	border-color: #80808030;
	height: 40px;
}
.contenedorLeft{
	min-width: 45%;
}

</style>