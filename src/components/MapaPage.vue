<template>

	<div class="contenedorMapa">
		<div id="map" style="height: 100%"></div>
	</div>

</template>
<script setup>

import { onMounted, defineProps, defineExpose, ref } from 'vue'

import { truck_svg } from './utils.js'

//import {transfers_list } from './DataConector.js'

import { Loader } from '@googlemaps/js-api-loader'


// transfers_list("0123456789abcdef").then(result=>{
// 	console.log(result)
// })
const map = ref();
let center = ref();
//let motorIcon = ref();
//let testMarker=ref();
let update_motorIcon = ref(null);
let trace = ref(null)
let locations = ref(null)

let crearMarker = ref(null)

let truck_Marker = ref([])

crearMarker.value = (datos) => {
	console.log(datos)
}


update_motorIcon.value = (datosActuales) => {
	console.log(datosActuales)
}

trace.value = (Coordinates) => {
	console.log(Coordinates)
}

locations.value = (startPlace, endPlace) => {
	console.log(startPlace + " " + endPlace)
}

const loader = new Loader({
	apiKey: process.env.VUE_APP_API_KEY,
	version: 'weekly'
})

const incomingData = defineProps(['inputData']);

onMounted(async () => {

	await loader.load().then(google => {

		center.value = new google.maps.LatLng(incomingData.inputData.center[0], incomingData.inputData.center[1]);

		map.value = new google.maps.Map(document.getElementById('map'), {
			center: center.value,//{lat:18.468025816718264,lng:-69.95920818790205 } 
			zoom: incomingData.inputData.zoom,
			/*mapId: '46419e86ee4ee586', //  charli*/
			/* mapTypeControl: false,  //para quitar que puedan cambiar estilo de mapa
			streetViewControl: false  //para poner o quitar al hombresito*/
			disableDefaultUI: true,
		});

		/*		let iconTruckSetting=ref({
					path: 'M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
					fillColor: '#fbb040',
					fillOpacity: 1,
					scale: 1.5,
					strokeColor: '#000',
					strokeWeight: 0.5,
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(15, 50),
					rotation: heading.value,
		})
		*/


		/*		motorIcon.value = new google.maps.Marker({
					position: new google.maps.LatLng(incomingData.inputData.lat, incomingData.inputData.lng),
					map: map.value,
					//opacity: 1,
					// anchor: new google.maps.Point(0, 27),
					animation: google.maps.Animation.DROP,
		
					//label:{ text: '1', fontSize: '12px', color: 'white', }, 
					icon: { 
						//url: require('../assets/truck.svg'),
						path: truck_svg[0],
						fillColor: '#00CF66',
						fillOpacity: 1,
						scale: 0.3,
						strokeColor: '#000',
						rotation:-90, // -90
						//strokeWeight: 0.5,
						strokeWeight: 5.0,
						//origin: new google.maps.Point(0, 0),
						//anchor: new google.maps.Point(8, 8),
						
						scaledSize: new google.maps.Size(32, 32),
					},
		
					title: "Dispositivo", //sombra 
				});*/

		crearMarker.value = (datos) => {

			let punto = new google.maps.Marker({
				position: new google.maps.LatLng(datos.lat, datos.lng),
				map: map.value,
				//opacity: 1,
				// anchor: new google.maps.Point(0, 27),
				animation: google.maps.Animation.DROP,
				//label:{ text: '1', fontSize: '12px', color: 'white', }, 
				icon: {
					//url: require('../assets/truck.svg'),
					path: datos.path,
					fillColor: datos.fill,
					fillOpacity: 1,
					scale: 1.0,
					rotation: 0, //-90
					strokeColor: '#000',
					//strokeWeight: 0.5,
					strokeWeight: 0.5,
					//origin: new google.maps.Point(0, 0),
					//anchor: new google.maps.Point(8, 8),
					//anchor: new google.maps.Point(7, 7),
					anchor: new google.maps.Point(10, 0),

					//scaledSize: new google.maps.Size(30, 30),
				},

				title: datos.title //sombra 
			});
			return punto;

		}



		truck_svg.forEach(chart => {

			const output = {
				lat: incomingData.inputData.lat,
				lng: incomingData.inputData.lng,
				path: chart.path,
				fill: chart.fill,
				title: 'Dispositivo'
			}

			truck_Marker.value.push(crearMarker.value(output));


		})

		/*		testMarker.value= new google.maps.Marker({
					position: new google.maps.LatLng(incomingData.inputData.lat, incomingData.inputData.lng),
					map: map.value,
					opacity: 1,
				});
		*/




		update_motorIcon.value = (datosActuales) => {
			console.log(datosActuales)

			truck_Marker.value.forEach((element) => {
				element.setPosition({ lat: datosActuales.lat, lng: datosActuales.lng })


				const icon_anterior = element.getIcon();

				icon_anterior.rotation = datosActuales.heading;
				element.setIcon(icon_anterior);
			})

		}

		locations.value = (startPlace, endPlace) => {


			let startPlacePath = new google.maps.Marker({
				position: new google.maps.LatLng(startPlace.lat, startPlace.lng),
				map: map.value,
				opacity: 1,
				//animation: google.maps.Animation.DROP,
				//label:{ text: '1', fontSize: '12px', color: 'white', },
				icon: { url: require('../assets/traceStart.png'), scaledSize: new google.maps.Size(16, 16) },
				title: startPlace.name, //sombra 
			});

			let endPlacePath = new google.maps.Marker({
				position: new google.maps.LatLng(endPlace.lat, endPlace.lng),
				map: map.value,
				opacity: 1,
				//animation: google.maps.Animation.DROP,
				//label:{ text: '1', fontSize: '12px', color: 'white', },
				icon: { url: require('../assets/traceEnd.png'), scaledSize: new google.maps.Size(30, 30) },
				title: endPlace.name, //sombra 
			});
			// Add the polyline to the map
			startPlacePath.setMap(map.value);
			endPlacePath.setMap(map.value)

		}

		trace.value = (PlanCoordinates) => {

			let flightPath = new google.maps.Polyline({
				path: PlanCoordinates,
				geodesic: true,
				strokeColor: '#dc207d',
				//strokeColor: 'rgba(55, 104, 46)',
				//fillColor: 'rgb(77, 201, 9)',
				strokeWeight: 4,
				strokeOpacity: 1.0,
				//strokeWeight: 2
			});

			// Add the polyline to the map
			flightPath.setMap(map.value);

		}

		/*		map.value.addListener("click", () => {
				//doclickClose();
					map.value.setZoom(14);
					map.value.setCenter(center.value);
				});*/


	})
})

defineExpose({ update_motorIcon, trace, locations });

</script>

<style scoped>
.contenedorMapa {
	width: 100%;
	height: 100%;
	position: relative;
}
</style>