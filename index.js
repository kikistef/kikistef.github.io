

	import { GUI } from 'https://threejs.org/examples/jsm/libs/lil-gui.module.min.js';
	let flightPlan = {//coordonnées de la route (geojson)
		"geometry": {
			"coordinates": [
		   [
        2.2712636385925293,
        48.86942801375463
      ],
      [
        2.2713903899076797,
        48.8695288005039
      ],
      [
        2.2721766014875016,
        48.87019838833578
      ],
      [
        2.2724711863947675,
        48.8704515501079
      ],
      [
        2.2728907048403926,
        48.8708435963527
      ],
      [
        2.2732889607020184,
        48.87129459550221
      ],
      [
        2.2745700417352737,
        48.87274381231296
      ],
      [
        2.275240269518605,
        48.87355156175835
      ],
      [
        2.2758136176704227,
        48.874229598545895
      ],
      [
        2.2760423088986954,
        48.87448706031995
      ],
      [
        2.2764448312016725,
        48.87492709108358
      ],
      [
        2.2766788402480245,
        48.87505009634424
      ],
      [
        2.277024428534048,
        48.87523444397786
      ],
      [
        2.277498813324428,
        48.87551102541491
      ],
      [
        2.277902489605964,
        48.875673741981444
      ],
      [
        2.2781337503740815,
        48.875778664167655
      ],
      [
        2.2782453507050207,
        48.875835207653154
      ],
      [
        2.2784458657833966,
        48.87594241818664
      ],
      [
        2.278622525267565,
        48.87604643288873
      ],
      [
        2.278653433288639,
        48.8760635186587
      ],
      [
        2.2788064804499584,
        48.87616190514984
      ],
      [
        2.2788820900742337,
        48.87621528814793
      ],
      [
        2.278994243667853,
        48.876299669102906
      ],
      [
        2.2790840183103285,
        48.876368640645495
      ],
      [
        2.2793554179088176,
        48.87661588064216
      ],
      [
        2.279521279502461,
        48.87676857275733
      ],
      [
        2.2797744217965032,
        48.877009783636
      ],
      [
        2.279809032836255,
        48.877036570035045
      ],
      [
        2.2798469119238973,
        48.8770590607364
      ],
      [
        2.279883486489638,
        48.87707682529154
      ],
      [
        2.2799422723950897,
        48.87709258893503
      ],
      [
        2.2800414242178704,
        48.877097163722965
      ],
      [
        2.280133272585033,
        48.87710640951343
      ],
      [
        2.2802225645839087,
        48.877127401037484
      ],
      [
        2.2803286882216014,
        48.87716735730771
      ],
      [
        2.280424712129218,
        48.877204971069006
      ],
      [
        2.28057732043402,
        48.87726376982516
      ],
      [
        2.280704170247816,
        48.877307120366424
      ],
      [
        2.280801347096798,
        48.877336952457824
      ],
      [
        2.2809043990219493,
        48.8773558464724
      ],
      [
        2.281167788488574,
        48.877381892816175
      ],
      [
        2.281220549654563,
        48.877378312860145
      ],
      [
        2.281251028419007,
        48.87736515684105
      ],
      [
        2.2816281540860643,
        48.8771402317432
      ],
      [
        2.28184104789176,
        48.87705810071154
      ],
      [
        2.282035052407025,
        48.87701714408752
      ],
      [
        2.2823439082567916,
        48.876977129389815
      ],
      [
        2.282661852011074,
        48.87697580521316
      ],
      [
        2.2829265608066294,
        48.87700072456755
      ],
      [
        2.283097355236521,
        48.87701671750767
      ],
      [
        2.283257571733742,
        48.87703685866197
      ],
      [
        2.2834358715002736,
        48.877072866169755
      ],
      [
        2.2835495614814363,
        48.87711594368179
      ],
      [
        2.283777792668957,
        48.8772264598465
      ],
      [
        2.2838311971803194,
        48.877235534107456
      ],
      [
        2.2839156193686847,
        48.87722931748701
      ],
      [
        2.2841467072375394,
        48.87716055923735
      ],
      [
        2.2842085386402857,
        48.87714345030639
      ],
      [
        2.2842717576637597,
        48.877142850320126
      ],
      [
        2.2843986582521154,
        48.87714715332976
      ],
      [
        2.284485122669679,
        48.87713891463744
      ],
      [
        2.284643651966178,
        48.87709706014641
      ],
      [
        2.2851192526527484,
        48.87694092469201
      ],
      [
        2.285298223605025,
        48.87688104417143
      ],
      [
        2.2865064206474415,
        48.87649392477272
      ],
      [
        2.2871501771047065,
        48.87628924643545
      ],
      [
        2.287184400555901,
        48.876278000019
      ],
      [
        2.28721348836973,
        48.876273504240004
      ],
      [
        2.287230595384699,
        48.87627913364537
      ],
      [
        2.287249745350209,
        48.87630906905761
      ],
      [
        2.2880093139753797,
        48.877784408119794
      ],
      [
        2.288017612714981,
        48.87780353451902
      ],
      [
        2.2880286440698683,
        48.87781321334819
      ],
      [
        2.288059707482546,
        48.87781133736672
      ],
      [
        2.288093824726161,
        48.87780873361473
      ],
      [
        2.2881330385620515,
        48.87781029289559
      ],
      [
        2.2881751552743594,
        48.87781638984504
      ],
      [
        2.2882130560171845,
        48.877826671927096
      ],
      [
        2.2882448772213877,
        48.87783622487876
      ],
      [
        2.2882763229198986,
        48.87785361134934
      ],
      [
        2.288298463005617,
        48.87787099612905
      ],
      [
        2.288315392152242,
        48.87788789035986
      ],
      [
        2.2883323187369626,
        48.87791090456918
      ],
      [
        2.2883410572526373,
        48.87793183649157
      ],
      [
        2.2883455159022503,
        48.87795105403586
      ],
      [
        2.2883479233721573,
        48.87797969596508
      ],
      [
        2.2883373009323975,
        48.87801323149566
      ],
      [
        2.288319951561448,
        48.87804303019425
      ],
      [
        2.2882730032829954,
        48.87808207365376
      ],
      [
        2.2882440643624307,
        48.87809633951909
      ],
      [
        2.2882255574924955,
        48.87810408017694
      ],
      [
        2.2881863152913695,
        48.878115930316596
      ],
      [
        2.2881329888102755,
        48.87812273962868
      ],
      [
        2.288092699685137,
        48.87812312198929
      ],
      [
        2.288056559828334,
        48.87811902406523
      ],
      [
        2.2880387856944253,
        48.878118046708664
      ],
      [
        2.2880275271793664,
        48.87812116191216
      ],
      [
        2.2880204118159497,
        48.87813440890224
      ],
      [
        2.2879818119582467,
        48.87821973433378
      ],
      [
        2.2875902248603097,
        48.87901695545571
      ],
      [
        2.287571733284068,
        48.87904918167018
      ],
      [
        2.2875819226499914,
        48.87906440336869
      ],
      [
        2.287614748224911,
        48.87907755188792
      ],
      [
        2.2889972796684788,
        48.879568018228724
      ]
				],
				"type": "LineString"
			},
			"type": "Feature",
			"properties": {}
		}
	const optionsTheme = {
		theme: {
			//streets_shadows: "",
			GoogleDay : /* mapbox://styles/ */"kikistef/cl32rlf6c002314qqinxrgo3x",
			GoogleNight : /* mapbox://styles/ */"kikistef/cl42nzbfl000p14pekozi07vc",
			Satellite : /* mapbox://styles/ */"mapbox/satellite-v9",
			streets_D: "D",
			streets_E: "E",
			streets_F: "F"
		}
	};
		const optionsTheme2 = ([
			"kikistef/cl32rlf6c002314qqinxrgo3x",
			"kikistef/cl42nzbfl000p14pekozi07vc",
			"mapbox/satellite-v9",
			"D",
			"E",
			"F"
	]);
	var selectedTheme = 0;
	let gui = new GUI();
	console.log("-----> " + optionsTheme2[selectedTheme])
	
	const retour1Container = document.getElementById('ret1-cont');
	var value1 = document.createElement('pre');
	retour1Container.innerHTML = "";
	value1.textContent = String("vitesses");
	retour1Container.appendChild(value1);
			//
	const retour2Container = document.getElementById('ret2-cont');
	var value2 = document.createElement('pre');
	retour2Container.innerHTML = "";
	value2.textContent = String("vitesses");
	retour2Container.appendChild(value2);
			//
	const retour3Container = document.getElementById('ret3-cont');
	var value3 = document.createElement('pre');
	retour3Container.innerHTML = "";
	value3.textContent = String("rot");
	retour3Container.appendChild(value3);

	const retour4Container = document.getElementById('ret4-cont');
	var value4 = document.createElement('pre');
	retour4Container.innerHTML = "";
	value4.textContent = String("pit");
	retour4Container.appendChild(value4);
		//
	const retour5Container = document.getElementById('ret5-cont');
	var value5 = document.createElement('pre');
	retour5Container.innerHTML = "";		
	retour5Container.appendChild(value5);

	const retour6Container = document.getElementById('ret6-cont');
	//	if (!retour6Container.value6){	console.log("yzazda")}
	var value6 = document.createElement('pre');
	retour6Container.innerHTML = "";
	value6.textContent = String("rota");
	retour6Container.appendChild(value6);
	
	const retour7Container = document.getElementById('ret7-cont');
	//	if (!retour6Container.value6){	console.log("yzazda")}
	var value7 = document.createElement('pre');
	retour7Container.innerHTML = "";
	value7.textContent = String("time");
	retour7Container.appendChild(value7);
	
		mapboxgl.accessToken = config.accessToken;
		let mapConfig = {
			MAD: {
				origin: [2.272043600678484,48.8700817475247, 0], 
				destination: [2.289113514125347,48.879606150739804, 500], 
				center: [2.272043600678484,48.8700817475247, 0], 
				zoom: 18, 
				pitch: 70, 
				bearing: 35, 
				scale: 0.5, 
				timezone: 'Europe/Madrid'
			},
			names: {
				customLayer: "custom-layer"
			}
		}
		let timeMinMax = [30, 6000];
		let api = {
				fixedZoom: true,
				pan: true,
				carSize: 19.2,
				tailleLine: 8,
				carAltitude: 0.001,
				terrain: 0.0001,
				add: "",
				time: 1000,
				theme: "",
				fov: Math.atan(3 / 4) * 180 / Math.PI,
				//orthographic: false
			};
	
	
		//////////////////////////////changement de map /////////////////////
		const layerList = document.getElementById('menu');
		const inputs = layerList.getElementsByTagName('input');

		var egoExist = true;
		let lineBlue;
		let lineBlueColor = ['rgba(72, 130,197, 1)', 'rgba(255, 130,0, 1)', 'rgba(72, 130,197, 1)'];
		let map;
		let egoCarCircle;
		
		var animLaunched = false; // variable du "play pause camera" boolean
		var egoLaunched = false; // variable du "play pause car" boolean
	
	
		var calcClic1;
		var calcClic2;
		var calcClicR;
		var clic=0;
	
	const pathAlt = turf.lineString(flightPlan);
	console.log("vvv")
	console.log(flightPlan.geometry.coordinates)
	const pathDistance = turf.lineDistance(pathAlt);
	console.log("trajet distance " + pathDistance)
// ////////////////////////////////function INIT////////////////////////////////////////	
	function init(){
		(async () => {
		 map = new mapboxgl.Map({
			container: 'map',
			style: "mapbox://styles/" + optionsTheme2[selectedTheme], /*'mapbox://styles/mapbox/satellite-v9',*/
			center: mapConfig.MAD.center,
			zoom: mapConfig.MAD.zoom,
			pitch: mapConfig.MAD.pitch,
			antialias: true,
			bearing: mapConfig.MAD.bearing,
			interactive: true,
			attributionControl: false,
		});
		map.resize(window.innerWidth, window.innerHeight);
		window.addEventListener("resize", () => {
			map.resize(window.innerWidth, window.innerHeight);
		});
		//await map.once('idle');
	
		for (const input of inputs) {
			input.onclick = (layer) => {
				const layerId = layer.target.id;
				//console.log(input.id)
				for (const num in  optionsTheme2){
					if (layerId == optionsTheme2[num]) {
						console.log("numero " + num)
						selectedTheme = num;
					}
				}
			//egoCarCircle.stop();
			//tb.remove(egoCarCircle);
			//map.remove();
			//animONOFF = true;
			//egoExist = true;
				console.log("--animONOFF : " + animONOFF)
				console.log("--egoExist : " + egoExist)
			//init();
				//tb.remove(egoCarCircle);
				//const zob = layerId;
				//gui.destroy();
			map.setStyle('mapbox://styles/' + layerId);		
			};
		}
// ↓↓ ajoute les bouton zoom + et - et la boussole ↓↓ //
		const nav = new mapboxgl.NavigationControl({
			showCompass: true,
			zoomLevel: "input",
			visualizePitch: true
		});
// ↓↓ ajoute le bouton d'affichage du traffic ↓↓ //
		map.addControl(new MapboxTraffic(), 'bottom-right');
		map.addControl(nav, 'top-right');
		nav._container.parentNode.className="mapboxgl-ctrl-top-center";

		
		// we can add Threebox to mapbox to add built-in mouseover/mouseout and click behaviors
		window.tb = new Threebox(
			map,
			map.getCanvas().getContext('webgl'),
			{
				realSunlight: true,
				enableSelectingObjects: true, //change this to false to disable 3D objects selection
				enableTooltips: true, // change this to false to disable default tooltips on fill-extrusion and 3D models
				//enableDraggingObjects: true,
				outlinePass: true,
				sky: true,
				//terrain: true,
			}
		);
		tb.altitudeStep = 1;
		tb.setSunlight(new Date(2021, 5, 18, 15));
	
		let lng;
		let lat;
		

		map.on('click', (event) => {
			lng = event.lngLat.lng;
  			lat = event.lngLat.lat;
			console.log(egoCarCircle)
			console.log("");
			console.log("click : " + `${lng}, ${lat}`)
			//egoCarCircle.animationQueue[0].parameters.duration = 20000;
			console.log(egoCarCircle.animationQueue[0].parameters.duration)
			console.log("--> time : " + retour7Container.value)
			console.log("--> timeD : " + Date.now());
			if (clic == 0){
				clic = 1;
				calcClic1 = retour7Container.value;
			}else if (clic == 1){
				clic = 0;
				calcClic2 = retour7Container.value;
				calcClicR = calcClic2 - calcClic1;
			}
			if (calcClicR == undefined){
				console.log("--> 1er point " + Date.now());
			}else{
			 	console.log("--> clacClicR resulkt : "+ calcClicR)  
			}
		});
	
		map.on('style.load', function () {
			//if (!egoLaunched){}
				mapAddEgo();
			
		
			
			map.setFog({ //////////////////////ajout du fog ///////////////
				'range': [10.0, 20.0],
				'color': 'white',
				'horizon-blend': 0.025
			});
			
			map.addSource('mapbox-dem', {  //////////////////////ajout du terrain ///////////////
				'type': 'raster-dem',
				'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
				'tileSize': 512,
				'maxzoom': 14
			 });
			
			map.setTerrain({ 
				'source': 'mapbox-dem', 
				'exaggeration': 0.0001 
			});
			
			
			/*		map.on('wheel', (e) => {
			console.log('event type:', e.type);
			// event type: wheel
		});	
map.on('load', function () {
	
});*/
			
/*	map.on('drag', function () {
		console.log("draggg")
	});*/
		/*	map.addLayer({ //////////////////////ajout du ciel ///////////////
				'id': 'sky',
				'type': 'sky',
				'paint': {
					'sky-type': 'atmosphere',
					'sky-atmosphere-color': '#5eadf3',
					'sky-atmosphere-sun': [0.0, 45.0],
					'sky-atmosphere-sun-intensity': 15,
					'sky-atmosphere-halo-color': '#fff',
					//'sky-gradient': '#53b9fe',
				}
        });*/
			/////////////////////////////////////////////////////
		
        
			
////////////////////////////////////////
	});

	async function changeTheme() { ////pour changer le theme de la map
		console.log("zuut")
		}
	function mapAddEgo(){ //ajout gocar + ligne bleue et  de la source (geojson) du trajet ainsi que du chrgt de la gui
		//ajout de la source
		map.addSource('trace', {
            type: 'geojson',
			lineMetrics: true,
            data: {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': flightPlan.geometry.coordinates
                }
            }
        });
		map.addLayer({
            type: 'line',
            source: 'trace',
            id: 'lineBlue1',
            paint: {
                'line-color': '#144e93',
                'line-width': api.tailleLine+5,
            },
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            }
        });
		//ajout de la ligne d'après la source
		map.addLayer({
            type: 'line',
            source: 'trace',
            id: 'lineBlue',
            paint: {
                'line-color': lineBlueColor[selectedTheme],
                'line-width': api.tailleLine,
            },
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            }
        });

				console.log("xx animONOFF : " + animONOFF)
				console.log("xx egoExist : " + egoExist)
		// ajout de l'egocar
		map.addLayer({ // ajout de l'egocar
				id: 'custom_layer',
				type: 'custom',
				renderingMode: '3d',
				onAdd: function (map, mbxContext) {

					// Creative Commons License attribution: Plane model by https://sketchfab.com/ideehochzwei
					// from  https://sketchfab.com/3d-models/plane-aa001f5a88f64b16b98356c042f2d5f3
					/*let geometry = new THREE.CylinderGeometry( 50, 50, 0.1, 32 );
					var material = new THREE.MeshBasicMaterial( {color: 0xff0000, opacity:0.8});
					let cube = new THREE.Mesh(geometry, material);*/
					var sphereAxis = new THREE.AxesHelper(1);
					let options = {
						obj: './models/vehicles/egoCarCircle.fbx',
						type: 'fbx',
						scale: mapConfig.MAD.scale,
						rotation: { x: 90, y: 0, z: 0 },
						anchor: 'center',
						bbox: true
					}

					if (api.fixedZoom) options.fixedZoom = 19.8;
if (egoExist){
					tb.loadObj(options, function (model) {
						model.traverse( function ( child ) {
							//console.log("child.name " + child.name)
							if ( child.isMesh && child.name=="Socle") {
							 //console.log("Disc")
							child.material = new THREE.MeshLambertMaterial( {color: '#0222B0', transparent: true, opacity:1,  depthTest: false} );
							}
							if ( child.isMesh && child.name=="cercleExter") {
								//console.log("cercleExter")
								child.material = new THREE.MeshLambertMaterial( {color: '#024DD9', transparent: true, opacity:1,  depthTest: false} );
							}
							if ( child.isMesh && child.name=="fleche") {
								//console.log("cercleExter")
								child.material = new THREE.MeshLambertMaterial( {color: '#fff', transparent: true, opacity:1,  depthTest: false} );
							}
						})
						egoCarCircle = model.setCoords(mapConfig.MAD.origin);
						egoCarCircle.setRotation({ x: 0, y: 0, z: 0 });
						egoCarCircle.setScale({ x: 1, y: 1, z: 1 });
 
						egoCarCircle.addTooltip("Car Position Here", true);
						egoCarCircle.addEventListener('ObjectChanged', onObjectChanged, false);
						//egoCarCircle.addEventListener('SelectedChange', onSelectedChange, false);
						egoCarCircle.castShadow = true;
						tb.add(egoCarCircle);
						//egoCarCircle.add(sphereAxis);
						//egoCarCircle.castShadow = true;
						
						//tb.add(cube);
						//if (!egoExist){
						console.log("egoExist " + egoExist)
						
							console.log("fly actif " + egoExist)
							truc = fly(flightPlan);
							egoExist = false;
						
						
//						setTimeout(() => {
//							let opt = {
//								coords: mapConfig.MAD.destination, duration: 20000
//							};
//							egoCarCircle.set(opt)
//						}, 3000);

					})}
				},
				
				render: function (gl, matrix) {
					if (animONOFF == true){
						tb.update();
					}				
				}
			})
	//}
	} 
	})();
};	//////////////////////////// FIN DU INIT() //////////////////////////////
//////////////////////////////Keyboard////////////////////////////		
var truc;		
var deltaPitch = 0.5; // valeur du pitche de la carte, au clavier
var deltaBearing = 5; // valeur de la rotation autour centre, au clavier
var deltaZoom = 5; // valeur du zoom sur centre, au clavier
document.body.onkeydown = function(ev){//raccourcis clavier
	switch (ev.which) {
//touche "<- " pour passer au point de vue precedent
	case 37:
			console.log(" fleche <- ");
				map.setBearing = map.getBearing() - deltaBearing;
			/*map.jumpTo({
			bearing: map.getBearing() - deltaBearing,
			easing: easing
			});*/
	break;

//touche " -> " pour passer au point de vue suivant				
	case 39:
		console.log(" fleche -> ");
			map.setBearing = map.getBearing() + deltaBearing;
			/*map.jumpTo({
			bearing: map.getBearing() + deltaBearing,
			easing: easing
			});*/
	break;

//touche ----------[ - ]----------  pour ralentir l'ego car	
	case 109:	
		/*map.easeTo({
			zoom: 16,
			//easing: easing
			});*/
		map.setZoom(map.getZoom()-0.5);
		console.log("getzoom : " + map.getZoom());
		console.log(" signe - : " + (map.getZoom()- deltaZoom));
	break;
			
//touche ----------[ + ]----------  pour ralentir l'ego car	
	case 107:
		/*	map.easeTo({
			zoom: (map.getZoom()+1),
			//easing: easing
			});*/
			//map.setZoom(20);
			//map.setZoom(map.getZoom()+1);
		console.log(" signe + : " + map.getZoom());
	break;
	//touche ----------[ T ]----------  pour le tilt		
	case 84:
		console.log("pitch + : " + map.getPitch() + deltaPitch);
			map.easeTo({
			pitch: map.getPitch() + deltaPitch,
			easing: easing
			});
	break;

//touche ----------[ G ]----------  pour le tilt		
	case 71:
		console.log("pitch - : " + (map.getPitch() - deltaPitch));
			map.easeTo({
			pitch: map.getPitch() - deltaPitch,
			easing: easing
			});
	break;
//touche ----------[ R ]----------  pour la rotation		
	case 82:
		console.log("bearing + : " + map.getBearing() + deltaBearing);
			map.easeTo({
			bearing: map.getBearing() + deltaBearing,
			easing: easing
			});
	break;

//touche ----------[ F ]----------  pour la rotation		
	case 70:
		console.log("bearing - : " + (map.getBearing() - deltaBearing));
			map.easeTo({
			bearing: map.getBearing() - deltaBearing,
			easing: easing
			});
	break;
		
//touche ----------[ i ]----------  pour ralentir l'ego car	
	case 73:
		console.log("tt "+ value6);
		resetPage();
		//isPaused = !isPaused; // flips the pause state
		
		//console.log(" lettre i ");
	break;
		
	//touche ----------[ p ]----------  pour ralentir l'ego car	
	case 80:
			//egoCarCircle.removeEventListener('ObjectChanged', onObjectChanged, false);
		//console.log("isplaying : " + action);
		//isPaused = !isPaused; // flips the pause state
		//egoCarCircle.isPlaying = true;
			
			console.log("isplaying : " );
		//console.log(" lettre i ");
	break;
		}
	};
/////////////////////////////////////Fin Keyboard/////////////////////////////////	
 //ajout gocar + ligne bleue et  de la source (geojson) du trajet ainsi que du chrgt de la gui 


var animONOFF = true;	
var obj1 = {  // action Play/Pause Camera
	add:function(){ 
		console.log("play : " + animLaunched);
		if (animLaunched){
			egoCarCircle.addEventListener('ObjectChanged', onObjectChanged, false);

		}else{
			egoCarCircle.removeEventListener('ObjectChanged', onObjectChanged, false);
		}	
		animLaunched = !animLaunched; 
	}
}; // action Play/Pause Camera
var obj2 = { // action Play/Pause Car
	add:function(){ 
		if (egoLaunched){
			console.log("joue" );
			egoExist = true;
			animONOFF = true;
		}else{
			console.log("arrete");
			//fly = function(){return false;};
			animONOFF = false;
			//egoCarCircle.stop();
		}	
		egoLaunched = !egoLaunched; /**/
			if (clic == 0){
				clic = 1;
				calcClic1 = retour7Container.value;
			}else if (clic == 1){
				clic = 0;
				calcClic2 = retour7Container.value;
				calcClicR = calcClic2 - calcClic1;
			}
			if (calcClicR == undefined){
				console.log("1er point ")
			}else{
			 	console.log("clacClicR resulkt : "+ calcClicR)  
			}
	}
};// action Play/Pause Car
var obj3 = { // action Reset 
	add:function(){ 
		//egoExist = true;
		
		
		console.log("triuc " + truc)
		if (!egoExist){
			//egoExist = true;
		}
		//delete window.truc;
		resetPage();
	}
};// action Reset 
	initGUI();
	function initGUI() {

			//gui = new GUI()
			//gui.domElement.attr("hidden", true);
			//gui.toggleHide();
			gui.domElement.id = 'gui_css';
			// ajout du menu de selection de theme
			//gui.add(optionsTheme, 'theme', optionsTheme.theme).onChange(changeTheme).setValue(optionsTheme.theme.streets_A);

			gui.add(api, 'carSize', 18, 20).step(0.1).onChange(changeScale);
			gui.add(api, 'terrain', 0.0001, 2).step(0.01).onChange(changeTerrain);
			gui.add(api, 'time', timeMinMax[0], timeMinMax[1]).step(10).onChange(changetime);
			gui.add(api, 'tailleLine', 1, 30).step(1).onChange(changeLineWidth);
			gui.add(api, 'carAltitude', 0, 3).step(0.0001).onChange(changeHeight);
			
			gui.add(obj1, 'add').name('play/pause Camera');
			gui.add(obj2, 'add').name('play/pause Car');//.onChange(onSelectedChange)
			gui.add(obj3, 'add').name('reset');
			// going above 45 degrees will also produce clipping and performance issues
            gui.add(api, 'fov', 2.5, 55.0).step(0.1).onChange(changeFOV);
      /*      // this will set 0.01 degrees in Mapbox which is the minimum possible and an OrthographicCamera in three.js
			//gui.add(api, 'orthographic').name('pure orthographic').onChange(changeFOV);
			*/
			
		}
	/////////////////////////////////fonctions de la GUI///////////////////////////////////
		function changeScale() { ////pour changer la taille de l'egocar
			egoCarCircle.fixedZoom = (api.fixedZoom ? api.carSize : null);
			egoCarCircle.setObjectScale(map.transform.scale);
			tb.map.repaint = true;
		} //pour changer la taille de l'egocar
		function changeTerrain() { ////pour changer la hauteur du sol
			console.log("changé : " + api.terrain)
			map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': api.terrain });
		} //pour changer la hauteur du sol
		function changetime() { ////pour changer la durée du parcours
			console.log("time : " + secondsToTime(api.time))
			console.log("gui.time " + gui.api)
			console.log(egoCarCircle.animationQueue[0].parameters.duration)
			egoCarCircle.animationQueue[0].parameters.duration = api.time*100;
		} //pour changer la durée du parcours
		function changeLineWidth() { ////pour changer la durée du parcours
			console.log("changeLineWidth : " + api.tailleLine)
			//const myLayer = map.getLayer('line').paint._values['line-width'].value;
			map.setPaintProperty('lineBlue1', 'line-width', api.tailleLine+5);
			map.setPaintProperty('lineBlue', 'line-width', api.tailleLine);
			//map.getLayer('line').paint._values['line-width'].value.value = api.tailleLine;
			console.log(map.getLayer('lineBlue'))
		} //pour changer la durée du parcours
		function changeHeight() {////pour changer la hauteur de l'egocar
		console.log("kkk " + api.carAltitude)
		}//pour changer la hauteur de l'egocar
	
		var toto = true; // pour gerer l'altitude du vehicule ou voir avec turf linestring
		function onObjectChanged(e) {//// boucle permettant de bouger l'egocar et retourner les valeurs "retour1-container"
			let model = e.detail.object; //here's the object already modified
			let action = e.detail.action;
			let selected = e.detail.selected;
			//console.log(model.coordinates)
			//////////////////////////////////////////// ici ////////////
			map.setBearing(-THREE.Math.radToDeg(action.rotation.z)+180);
			if (api.pan) {
				map.panTo(model.coordinates);
			}
			if (toto) {}
			model.position.z = api.carAltitude;
changeScale();
			//////////////////////////////////////////// ici ////////////
			
			value1.textContent = String("coords Lon " + model.coordinates[0]);
			value2.textContent = String("coords Lat " + model.coordinates[0]);
			//value3.textContent = String("map bearing " + model.rotation;
			value3.textContent = String("map bearing " + map.getBearing());
			value4.textContent = String("map pitch " + map.getPitch());
			//console.log(retour5Container.value);
			//value5.textContent = String("car rotation1 " + (retour5Container.value+180)) ;
			value6.textContent = String("car rotation " + (-THREE.Math.radToDeg(action.rotation.z)+180).toFixed(2)+"%");
			value7.textContent = String("timing " + (retour7Container.value));

			map.dragRotate.enable();
			map.touchPitch.enable();
			//selectedObject = selected;
			//console.log(e.detail)
		}// boucle permettant de bouger l'egocar et retourner les valeurs "retour1-container"
		function changeFOV() {
			//tb.orthographic = api.orthographic;
			tb.fov = api.fov;
		}
		function resetPage(){ //fonction Reset 
			egoCarCircle.stop();
			map.remove();
			animONOFF = true;
			egoExist = true;
			init();
		} //fonction Reset
		function fly(data) {
			// extract path geometry from callback geojson, and set duration of travel
				var options = {
					path: data.geometry.coordinates,
					duration: api.time*100,
					//trackHeading: false,
				}
		if (egoExist){	}else{}

			

			// start the truck animation with above options, and remove the line when animation ends
			egoCarCircle.followPath(
				options,
				function () {
					console.log("c'est finiiiiii !!")
					egoExist = true;
					map.remove();
					//egoCarCircle.stop();
					init();
					//resetPage();
				}
			);
		}
		
	function secondsToTime(e){ // fonction de conversion secondes en 00:00:00
		var h = Math.floor(e / 3600).toString().padStart(2,'0'),
			m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
			s = Math.floor(e % 60).toString().padStart(2,'0');

		return h + ':' + m + ':' + s;
    //return `${h}:${m}:${s}`;
	} // fonction de conversion secondes en 00:00:00
function easing(t) { ////easing des actions claviers
	return t * (10 - t);
} //easing des actions claviers



		init(); // lancement de la premiere initialisation de la map
