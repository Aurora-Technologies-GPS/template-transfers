<template>
	<div class="vistaStandarList">

	<div class="listaTabla" v-for=" (dato, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :key="index">
				
				<div class="targeticas">

					<div class="rowInfo">
						<div>
							<strong>1234567812ABCVB</strong>
							
						</div>


						<div class="infoRows">

							<div class="cuadroCounter">5</div>
							<img class="hombresito" src="../assets/hombresito.svg">	
							
						</div>
						
					</div>
				
				</div>
		</div>


	</div>
</template>
<script setup>
	
</script>
<style scoped>

	.vistaStandarList{
		width: 100%;
		height: 90%;
		overflow: auto;
		background-color: white;
		padding: 10px;
	}


	.listaTabla{
		padding: 10px;	
		width: 100%;
	}

	.targeticas{
		border: solid 1px;
		padding: 8px;
		border-color: #80808030;
		min-height: 65px;	
		border-radius: 8px 8px 8px 8px;
	}

	.infoRows{
		display: flex;
		padding-right: 10px;
	}

	.rowInfo{
		display: flex;
		justify-content: space-between;

	}

	.cuadroCounter{
		border: solid 1px;
		padding-top: 5px;
		padding-left: 18px;
		width: 50px;
		margin: 5px;
		margin-right: 20px;

		color: white;
		font-weight: 700;
		font-size: 20px;
		border-radius: 10px 10px 10px 10px;
		background-color: #ec6061;
		border-color: #80808030;
	}

	.hombresito{

		width: 60px;
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