const airports = [
  {code:'MRU',name:'Sir Seewoosagur Ramgoolam International',city:'Mauritius',country:'Mauritius',lat:-20.4302,lon:57.6836},
  {code:'DXB',name:'Dubai International',city:'Dubai',country:'United Arab Emirates',lat:25.2532,lon:55.3657},
  {code:'SIN',name:'Singapore Changi',city:'Singapore',country:'Singapore',lat:1.3644,lon:103.9915},
  {code:'LHR',name:'London Heathrow',city:'London',country:'United Kingdom',lat:51.4700,lon:-0.4543},
  {code:'JFK',name:'John F. Kennedy International',city:'New York',country:'United States',lat:40.6413,lon:-73.7781},
  {code:'CDG',name:'Charles de Gaulle',city:'Paris',country:'France',lat:49.0097,lon:2.5479},
  {code:'DOH',name:'Hamad International',city:'Doha',country:'Qatar',lat:25.2731,lon:51.6081},
  {code:'HND',name:'Tokyo Haneda',city:'Tokyo',country:'Japan',lat:35.5494,lon:139.7798},
  {code:'SYD',name:'Sydney Kingsford Smith',city:'Sydney',country:'Australia',lat:-33.9399,lon:151.1753},
  {code:'FRA',name:'Frankfurt Airport',city:'Frankfurt',country:'Germany',lat:50.0379,lon:8.5622},
  {code:'IST',name:'Istanbul Airport',city:'Istanbul',country:'Türkiye',lat:41.2753,lon:28.7519},
  {code:'BOM',name:'Chhatrapati Shivaji Maharaj International',city:'Mumbai',country:'India',lat:19.0896,lon:72.8656},
  {code:'DEL',name:'Indira Gandhi International',city:'Delhi',country:'India',lat:28.5562,lon:77.1000},
  {code:'CPT',name:'Cape Town International',city:'Cape Town',country:'South Africa',lat:-33.9700,lon:18.6021},
  {code:'NBO',name:'Jomo Kenyatta International',city:'Nairobi',country:'Kenya',lat:-1.3192,lon:36.9278},
  {code:'GRU',name:'São Paulo/Guarulhos International',city:'São Paulo',country:'Brazil',lat:-23.4356,lon:-46.4731},
  {code:'LAX',name:'Los Angeles International',city:'Los Angeles',country:'United States',lat:33.9416,lon:-118.4085},
  {code:'YYZ',name:'Toronto Pearson International',city:'Toronto',country:'Canada',lat:43.6777,lon:-79.6248},
  {code:'ADD',name:'Addis Ababa Bole International',city:'Addis Ababa',country:'Ethiopia',lat:8.9779,lon:38.7993},
  {code:'KUL',name:'Kuala Lumpur International',city:'Kuala Lumpur',country:'Malaysia',lat:2.7456,lon:101.7072},
  {code:'BKK',name:'Suvarnabhumi Airport',city:'Bangkok',country:'Thailand',lat:13.6900,lon:100.7501},
  {code:'HKG',name:'Hong Kong International',city:'Hong Kong',country:'China',lat:22.3080,lon:113.9185},
  {code:'ICN',name:'Incheon International',city:'Seoul',country:'South Korea',lat:37.4602,lon:126.4407},
  {code:'PEK',name:'Beijing Capital International',city:'Beijing',country:'China',lat:40.0799,lon:116.6031},
  {code:'PVG',name:'Shanghai Pudong International',city:'Shanghai',country:'China',lat:31.1443,lon:121.8083},
  {code:'MNL',name:'Ninoy Aquino International',city:'Manila',country:'Philippines',lat:14.5086,lon:121.0198},
  {code:'CGK',name:'Soekarno–Hatta International',city:'Jakarta',country:'Indonesia',lat:-6.1256,lon:106.6559},
  {code:'CMB',name:'Bandaranaike International',city:'Colombo',country:'Sri Lanka',lat:7.1808,lon:79.8841},
  {code:'KHI',name:'Jinnah International',city:'Karachi',country:'Pakistan',lat:24.9065,lon:67.1608},
  {code:'MCT',name:'Muscat International',city:'Muscat',country:'Oman',lat:23.5933,lon:58.2844},
  {code:'AUH',name:'Zayed International',city:'Abu Dhabi',country:'United Arab Emirates',lat:24.4330,lon:54.6511},
  {code:'RUH',name:'King Khalid International',city:'Riyadh',country:'Saudi Arabia',lat:24.9576,lon:46.6988},
  {code:'JED',name:'King Abdulaziz International',city:'Jeddah',country:'Saudi Arabia',lat:21.6796,lon:39.1565},
  {code:'MEL',name:'Melbourne Airport',city:'Melbourne',country:'Australia',lat:-37.6690,lon:144.8410},
  {code:'AKL',name:'Auckland Airport',city:'Auckland',country:'New Zealand',lat:-37.0082,lon:174.7850},
  {code:'PER',name:'Perth Airport',city:'Perth',country:'Australia',lat:-31.9403,lon:115.9672},
  {code:'JNB',name:'O. R. Tambo International',city:'Johannesburg',country:'South Africa',lat:-26.1392,lon:28.2460},
  {code:'DUR',name:'King Shaka International',city:'Durban',country:'South Africa',lat:-29.6144,lon:31.1197},
  {code:'LOS',name:'Murtala Muhammed International',city:'Lagos',country:'Nigeria',lat:6.5774,lon:3.3212},
  {code:'ACC',name:'Kotoka International',city:'Accra',country:'Ghana',lat:5.6052,lon:-0.1668},
  {code:'EBB',name:'Entebbe International',city:'Entebbe',country:'Uganda',lat:0.0424,lon:32.4435},
  {code:'RUN',name:'Roland Garros Airport',city:'Saint-Denis',country:'Réunion',lat:-20.8871,lon:55.5103},
  {code:'SEZ',name:'Seychelles International',city:'Mahé',country:'Seychelles',lat:-4.6743,lon:55.5218},
  {code:'TNR',name:'Ivato International',city:'Antananarivo',country:'Madagascar',lat:-18.7969,lon:47.4788},
  {code:'MAD',name:'Adolfo Suárez Madrid–Barajas',city:'Madrid',country:'Spain',lat:40.4983,lon:-3.5676},
  {code:'AMS',name:'Amsterdam Airport Schiphol',city:'Amsterdam',country:'Netherlands',lat:52.3105,lon:4.7683},
  {code:'FCO',name:'Leonardo da Vinci–Fiumicino',city:'Rome',country:'Italy',lat:41.8003,lon:12.2389},
  {code:'ZRH',name:'Zurich Airport',city:'Zurich',country:'Switzerland',lat:47.4581,lon:8.5555},
  {code:'VIE',name:'Vienna International',city:'Vienna',country:'Austria',lat:48.1103,lon:16.5697},
  {code:'ATH',name:'Athens International',city:'Athens',country:'Greece',lat:37.9364,lon:23.9445},
  {code:'MIA',name:'Miami International',city:'Miami',country:'United States',lat:25.7959,lon:-80.2870},
  {code:'ORD',name:"O’Hare International",city:'Chicago',country:'United States',lat:41.9742,lon:-87.9073},
  {code:'SFO',name:'San Francisco International',city:'San Francisco',country:'United States',lat:37.6213,lon:-122.3790},
  {code:'ATL',name:'Hartsfield–Jackson Atlanta International',city:'Atlanta',country:'United States',lat:33.6407,lon:-84.4277},
  {code:'SEA',name:'Seattle–Tacoma International',city:'Seattle',country:'United States',lat:47.4502,lon:-122.3088},
  {code:'MEX',name:'Mexico City International',city:'Mexico City',country:'Mexico',lat:19.4361,lon:-99.0719},
  {code:'EZE',name:'Ministro Pistarini International',city:'Buenos Aires',country:'Argentina',lat:-34.8222,lon:-58.5358},
  {code:'SCL',name:'Arturo Merino Benítez International',city:'Santiago',country:'Chile',lat:-33.3930,lon:-70.7858},
  {code:'BNE',name:'Brisbane Airport',city:'Brisbane',country:'Australia',lat:-27.3842,lon:153.1175}
];

const aircraft = [
 {id:'a350',maker:'AIRBUS',model:'A350-900',category:'widebody',badge:'LONG HAUL',range:15000,rangeLabel:'8,100 nm',speed:903,cruise:'Mach 0.85',seats:'300–350',engines:'2 × Rolls-Royce Trent XWB',firstFlight:'2013',description:'A next-generation long-haul widebody designed around a carbon-fibre composite airframe, advanced aerodynamics and a quieter cabin.',fact:'The A350 uses a high proportion of advanced materials, including carbon-fibre-reinforced plastic in its fuselage and wings.',image:'https://static.independent.co.uk/2022/11/11/15/2d59077e8728c30f1b1a64e9766f7c00Y29udGVudHNlYXJjaGFwaSwxNjY4MjYzODY1-2.25615052.jpg?auto=webp&crop=3%3A2%2Csmart&quality=85&width=1200',alt:'Airbus A350 aircraft in flight'},
 {id:'787',maker:'BOEING',model:'787-9 DREAMLINER',category:'widebody',badge:'LONG HAUL',range:14100,rangeLabel:'7,565 nm',speed:903,cruise:'Mach 0.85',seats:'296 (typical)',engines:'2 × GEnx / Trent 1000',firstFlight:'2013',description:'The 787 Dreamliner family was designed to open more direct routes with a lightweight composite structure and efficient systems.',fact:'The 787 family uses composite materials for roughly half of its primary structure by weight, including the fuselage and wings.',image:'https://runway-media-production.global.ssl.fastly.net/us/originals/2023/02/GettyImages-1243956479.jpg',alt:'Boeing 787 Dreamliner in flight'},
 {id:'a380',maker:'AIRBUS',model:'A380-800',category:'widebody',badge:'SUPERJUMBO',range:14800,rangeLabel:'8,000 nm',speed:903,cruise:'Mach 0.85',seats:'555 (typical)',engines:'4 × Rolls-Royce / Engine Alliance',firstFlight:'2005',description:'The world’s largest passenger airliner in regular service, with two full-length passenger decks and a distinctive four-engine silhouette.',fact:'The A380 has a maximum certified passenger capacity of 853 in a high-density single-class layout, although airlines configure it very differently.',image:'https://cdn.prod.website-files.com/65c26eeea7cdaa706d97a75c/68fe62c0c10014a12d09ba2f_662e7969ff8886191648e96f_AW_Kochan-Kleps-5-1024x819.webp',alt:'Emirates Airbus A380 in flight'},
 {id:'777',maker:'BOEING',model:'777-300ER',category:'widebody',badge:'LONG HAUL',range:13650,rangeLabel:'7,370 nm',speed:905,cruise:'Mach 0.84',seats:'365–396',engines:'2 × GE90-115B',firstFlight:'2003',description:'A long-range twin-engine widebody known for its large GE90 engines, high capacity and strong presence on intercontinental routes.',fact:'The GE90-115B powering the 777-300ER was once recognised as the world’s most powerful commercial jet engine.',image:'https://media.assettype.com/gulfnews/import/2021/07/22/Stock-Emirates-airlines-aircraft_17acd501a27_large.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200',alt:'Emirates Boeing 777-300ER in flight'},
 {id:'a320',maker:'AIRBUS',model:'A320neo',category:'narrowbody',badge:'SHORT / MEDIUM HAUL',range:6300,rangeLabel:'3,400 nm',speed:840,cruise:'Mach 0.78',seats:'150–180',engines:'2 × CFM LEAP-1A / PW1100G',firstFlight:'2014',description:'An updated member of the A320 family, with new-generation engines and aerodynamic improvements for short- and medium-haul networks.',fact:'The “neo” in A320neo stands for “new engine option”; the aircraft can be fitted with either CFM LEAP-1A or Pratt & Whitney GTF engines.',image:'https://business.lufthansagroup.com/content/dam/b2bneo/images/mnl/2026-04/1440x960_2389_06_0004.jpg.transform/lh-dcep-transform-width-2560/img.jpg',alt:'Lufthansa Airbus A320neo in flight'},
 {id:'737',maker:'BOEING',model:'737 MAX 8',category:'narrowbody',badge:'SHORT / MEDIUM HAUL',range:6570,rangeLabel:'3,550 nm',speed:839,cruise:'Mach 0.79',seats:'162–178',engines:'2 × CFM LEAP-1B',firstFlight:'2016',description:'A member of Boeing’s 737 MAX family, designed for high-frequency short- and medium-haul operations with updated engines and systems.',fact:'The 737 MAX uses split-tip winglets, designed to improve aerodynamic efficiency compared with earlier blended winglets.',image:'https://s.yimg.com/ny/api/res/1.2/LyvhAgIutxOt2G3.0EWmQA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzUw/https%3A/media.zenfs.com/en/guessing_headlights_178/a5a252b12e987e046942f28b0d34ff65',alt:'Alaska Airlines Boeing 737 MAX 8 in flight'},
 {id:'a220',maker:'AIRBUS',model:'A220-300',category:'narrowbody',badge:'REGIONAL / SHORT HAUL',range:6100,rangeLabel:'3,300 nm',speed:829,cruise:'Mach 0.78',seats:'120–150',engines:'2 × Pratt & Whitney PW1500G',firstFlight:'2015',description:'A clean-sheet single-aisle jet sized for smaller markets while bringing widebody-inspired comfort and long range for its class.',fact:'The A220 began life as the Bombardier C Series before Airbus took a majority stake in the programme and rebranded the family.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Airbus_A220-300.jpg/1280px-Airbus_A220-300.jpg',alt:'Airbus A220-300 in flight'},
 {id:'atr',maker:'ATR',model:'72-600',category:'regional',badge:'REGIONAL TURBOPROP',range:1528,rangeLabel:'825 nm',speed:510,cruise:'Approx. 276 kt',seats:'68–78',engines:'2 × Pratt & Whitney PW127M',firstFlight:'2009',description:'A twin-engine turboprop built for regional routes, particularly where smaller airports and shorter sectors matter.',fact:'Unlike jet airliners, the ATR 72-600 uses propellers driven by turboprop engines, which are well suited to many short regional sectors.',image:'https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2025-09/atr-72-600_ocean_source_atr.jpg?itok=ukiqTc7A',alt:'ATR 72-600 regional turboprop in flight'}
,

 {id:'a330neo',maker:'AIRBUS',model:'A330-900neo',category:'widebody',badge:'LONG HAUL',range:13334,rangeLabel:'7,200 nm',speed:880,cruise:'Mach 0.82',seats:'287–303',engines:'2 × Rolls-Royce Trent 7000',firstFlight:'2017',description:'The A330neo updates Airbus’s popular A330 with new-generation engines, aerodynamic refinements and a modern cabin.',fact:'The A330neo’s wingtip devices and redesigned wing help improve aerodynamic efficiency compared with earlier A330 versions.',image:'https://img.europapress.es/fotoweb/fotonoticia_20260506142544_1200.jpg',alt:'Delta Airbus A330-900neo cruising above the ocean'},
 {id:'7478',maker:'BOEING',model:'747-8 INTERCONTINENTAL',category:'widebody',badge:'FOUR-ENGINE ICON',range:14320,rangeLabel:'7,730 nm',speed:908,cruise:'Mach 0.86',seats:'410–467',engines:'4 × GE GEnx-2B',firstFlight:'2011',description:'The final passenger evolution of the 747 combines the familiar hump-backed profile with a stretched fuselage, advanced wings and modern engines.',fact:'The 747-8 is the longest passenger aircraft Boeing has built, with a length of about 76 metres.',image:'https://assets-global.website-files.com/65a0f5e2f3a73fc7e30e9205/65b140d5c6f25e77de71b749_53483815192_10c4208966_k.webp',alt:'Lufthansa Boeing 747-8 approaching for landing'},
 {id:'78710',maker:'BOEING',model:'787-10 DREAMLINER',category:'widebody',badge:'MEDIUM / LONG HAUL',range:11730,rangeLabel:'6,330 nm',speed:903,cruise:'Mach 0.85',seats:'330–336',engines:'2 × GEnx-1B / Trent 1000',firstFlight:'2017',description:'The largest Dreamliner variant, offering more passenger capacity while retaining the family’s composite structure and modern systems.',fact:'The 787-10 is the longest member of the Dreamliner family, but it has less range than the smaller 787-8 and 787-9.',image:'https://www.journal-aviation.com/storage/2026/01/UA-787-10.jpg',alt:'United Airlines Boeing 787-10 Dreamliner in flight'},
 {id:'a321neo',maker:'AIRBUS',model:'A321neo',category:'narrowbody',badge:'MEDIUM HAUL',range:7400,rangeLabel:'4,000 nm',speed:840,cruise:'Mach 0.78',seats:'180–220',engines:'2 × CFM LEAP-1A / PW1100G',firstFlight:'2016',description:'The longest A320neo-family member brings single-aisle economics to longer, thinner routes and high-capacity short- and medium-haul services.',fact:'The A321neo can be configured with extra fuel capacity and range packages, including the A321LR and A321XLR derivatives.',image:'https://news.delta.com/sites/default/files/styles/frontpage_poster/public/gtf-engine-education-hero-image.jpeg?itok=QopT4Ack',alt:'Delta Airbus A321neo in flight'},
 {id:'e195e2',maker:'EMBRAER',model:'E195-E2',category:'regional',badge:'NEXT-GENERATION REGIONAL',range:4815,rangeLabel:'2,600 nm',speed:870,cruise:'Mach 0.82',seats:'120–146',engines:'2 × Pratt & Whitney PW1900G',firstFlight:'2017',description:'The largest E-Jet E2 variant is designed to serve thinner routes with jet comfort, modern engines and right-sized capacity.',fact:'The E195-E2 is part of Embraer’s second-generation E-Jet family, featuring new wings, updated systems and Pratt & Whitney geared turbofan engines.',image:'https://fotografias-2.larazon.es/clipping/cmsimages02/2023/11/16/C3568DB8-AB88-4993-B239-5C49EDD36B06/58.jpg?crop=1200%2C680%2Cx0%2Cy60&format=webply&height=567&optimize=low&width=1000',alt:'Embraer E195-E2 regional jet in flight'},
 {id:'e190e2',maker:'EMBRAER',model:'E190-E2',category:'regional',badge:'REGIONAL JET',range:5278,rangeLabel:'2,850 nm',speed:870,cruise:'Mach 0.82',seats:'97–114',engines:'2 × Pratt & Whitney PW1900G',firstFlight:'2016',description:'The E190-E2 is a modern regional jet designed to connect smaller cities with major airline networks efficiently.',fact:'The E190-E2 features a completely new wing and high-bypass geared turbofan engines compared with the first-generation E190.',image:'https://aviationweek.com/sites/default/files/styles/crop_freeform/public/gallery_images/E2-Pic5.jpg?itok=y0C414h1',alt:'Embraer E190-E2 demonstrator in flight'},
 {id:'737800',maker:'BOEING',model:'737-800',category:'narrowbody',badge:'SHORT / MEDIUM HAUL',range:5765,rangeLabel:'3,115 nm',speed:842,cruise:'Mach 0.785',seats:'162–189',engines:'2 × CFM56-7B',firstFlight:'1997',description:'One of the most widely used members of the 737 Next Generation family, the 737-800 became a workhorse on domestic and international short-haul routes.',fact:'The 737-800 is a stretched Next Generation 737 and was delivered to airlines in large numbers around the world.',image:'https://static.voegol.com.br/voegol/2021-06-29/Aeronave_NG_LogoOK1.jpg',alt:'GOL Boeing 737-800 cruising above clouds'},
 {id:'a340600',maker:'AIRBUS',model:'A340-600',category:'widebody',badge:'FOUR-ENGINE LONG HAUL',range:14450,rangeLabel:'7,800 nm',speed:871,cruise:'Mach 0.82',seats:'320–370',engines:'4 × Rolls-Royce Trent 500',firstFlight:'2001',description:'The A340-600 is an exceptionally long four-engine widebody, built for long-range routes and high-capacity premium travel.',fact:'At roughly 75 metres long, the A340-600 was once the longest commercial passenger aircraft in the world.',image:'https://www.flugzeug-lexikon.de/ILA_2004/Grossraumflugzeuge/Airbus_A340-600/Airbus_A340-600_-_Flug_2.jpg',alt:'Airbus A340-600 flying against a clear sky'},
 {id:'crj900',maker:'BOMBARDIER',model:'CRJ900',category:'regional',badge:'REGIONAL JET',range:2876,rangeLabel:'1,553 nm',speed:830,cruise:'Mach 0.78',seats:'76–90',engines:'2 × GE CF34-8C5',firstFlight:'2001',description:'A popular regional jet with rear-mounted engines and a narrow fuselage, the CRJ900 connects smaller communities to larger airline hubs.',fact:'The CRJ900’s engines are mounted at the rear of the fuselage, a layout that distinguishes it from most larger narrowbody airliners.',image:'https://news.delta.com/sites/default/files/styles/fact_sheet_full_width_835px/public/2022-07/bombardier_header.jpg?itok=Kuvd1TgJ',alt:'Delta Connection Bombardier CRJ900 climbing into the sky'}
];

const $ = (s,root=document)=>root.querySelector(s);
const kmToNm = km => km / 1.852;
function haversine(a,b){const rad=x=>x*Math.PI/180;const dLat=rad(b.lat-a.lat),dLon=rad(b.lon-a.lon);const x=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLon/2)**2;return 6371*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function fmtNum(n){return Math.round(n).toLocaleString('en-US');}
function formatTime(hours){const mins=Math.round(hours*60);const h=Math.floor(mins/60),m=mins%60;return h?`${h}h ${m}m`:`${m} min`;}
function addOptions(){
 const from=$('#from-airport'),to=$('#to-airport'),plane=$('#aircraft-choice');
 airports.forEach(a=>{const text=`${a.code} · ${a.city}, ${a.country}`;from.add(new Option(text,a.code));to.add(new Option(text,a.code));});
 aircraft.forEach(a=>plane.add(new Option(`${a.maker} ${a.model}`,a.id)));
 from.value='MRU';to.value='DXB';plane.value='a350';
}
let flightMap, satelliteLayer, routeGlow, routeLine, routeMarkers=[], routePlaneMarker;
let currentMapStyle='satellite';
function airportIcon(code,type){return L.divIcon({className:`airport-pin-wrap ${type||''}`,html:`<span class="airport-pin"><i></i>${code}</span>`,iconSize:[72,30],iconAnchor:[36,15]});}
function greatCirclePoints(a,b,steps=110){
 const rad=v=>v*Math.PI/180,deg=v=>v*180/Math.PI;
 const p1=rad(a.lat),l1=rad(a.lon),p2=rad(b.lat),l2=rad(b.lon);
 const d=Math.acos(Math.min(1,Math.max(-1,Math.sin(p1)*Math.sin(p2)+Math.cos(p1)*Math.cos(p2)*Math.cos(l2-l1))));
 const sinD=Math.sin(d)||1e-12;let previous=a.lon;const points=[];
 for(let i=0;i<=steps;i++){
  const f=i/steps,A=Math.sin((1-f)*d)/sinD,B=Math.sin(f*d)/sinD;
  const x=A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2);
  const y=A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2);
  const z=A*Math.sin(p1)+B*Math.sin(p2);
  const lat=deg(Math.atan2(z,Math.sqrt(x*x+y*y)));let lon=deg(Math.atan2(y,x));
  while(lon-previous>180)lon-=360;while(lon-previous<-180)lon+=360;
  points.push([lat,lon]);previous=lon;
 }
 return points;
}
function initFlightMap(){
 const host=$('#flight-map');if(!host||!window.L){if(host)host.innerHTML='<div class="map-fallback"><strong>Map library unavailable</strong><span>Connect to the internet and reload to see the interactive route map.</span></div>';return;}
 flightMap=L.map(host,{scrollWheelZoom:true,zoomControl:false,worldCopyJump:true,preferCanvas:true}).setView([-12,66],3);
 L.control.zoom({position:'bottomleft'}).addTo(flightMap);
 satelliteLayer=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Imagery &copy; Esri, Vantor, Earthstar Geographics, and the GIS User Community'});
 satelliteLayer.addTo(flightMap);
 satelliteLayer.on('tileerror',()=>{$('#map-status').textContent='Satellite imagery is temporarily unavailable';});
 $('#map-status').textContent='SATELLITE IMAGERY';
 setTimeout(()=>flightMap.invalidateSize(),250);
}
function updateRouteMap(from,to,plane){
 if(!flightMap)return;
 routeMarkers.forEach(m=>flightMap.removeLayer(m));routeMarkers=[];
 [routeGlow,routeLine,routePlaneMarker].filter(Boolean).forEach(layer=>flightMap.removeLayer(layer));
 const points=greatCirclePoints(from,to),end=points[points.length-1];
 routeGlow=L.polyline(points,{color:'#6acbff',weight:10,opacity:.22,interactive:false}).addTo(flightMap);
 routeLine=L.polyline(points,{color:'#9de3ff',weight:3.2,opacity:.98,dashArray:'7 9',lineCap:'round',className:'flight-route-line'}).addTo(flightMap);
 const markerFrom=L.marker([from.lat,from.lon],{icon:airportIcon(from.code,'departure'),keyboard:true}).addTo(flightMap);
 const markerTo=L.marker(end,{icon:airportIcon(to.code,'arrival'),keyboard:true}).addTo(flightMap);
 markerFrom.bindPopup(`<strong>${from.code} · ${from.city}</strong><br>${from.name}`);
 markerTo.bindPopup(`<strong>${to.code} · ${to.city}</strong><br>${to.name}`);
 routeMarkers=[markerFrom,markerTo];
 const mid=points[Math.floor(points.length/2)];
 routePlaneMarker=L.marker(mid,{interactive:false,zIndexOffset:500,icon:L.divIcon({className:'route-aircraft-wrap',html:'<span class="route-aircraft">✈</span>',iconSize:[28,28],iconAnchor:[14,14]})}).addTo(flightMap);
 flightMap.fitBounds(L.latLngBounds(points).pad(.20),{padding:[38,38],maxZoom:6,animate:true,duration:.8});
 $('#map-from-code').textContent=from.code;$('#map-to-code').textContent=to.code;$('#map-aircraft-name').textContent=plane.model;
 $('#map-distance-label').textContent=`${fmtNum(haversine(from,to))} KM`;
 $('#map-status').textContent='SATELLITE IMAGERY';
 setTimeout(()=>flightMap.invalidateSize(),120);
}
function calculateRoute(event){if(event)event.preventDefault();const from=airports.find(a=>a.code===$('#from-airport').value),to=airports.find(a=>a.code===$('#to-airport').value),plane=aircraft.find(a=>a.id===$('#aircraft-choice').value);const out=$('#planner-result');
 if(!from||!to||!plane)return;
 if(from.code===to.code){out.innerHTML='<div class="result-empty"><div class="route-doodle">↻</div><div><strong>Choose two different airports.</strong><p>Your departure and destination can’t be the same airport.</p></div></div>';return;}
 const km=haversine(from,to),nm=kmToNm(km),estimatedDistance=km*1.06,averageSpeed=plane.speed*.91,flightHours=estimatedDistance/averageSpeed+.48,rangeOK=km<=plane.range;
 const rangeClass=rangeOK?'':'warning';const rangeText=rangeOK?`Within the aircraft’s published indicative range (${plane.rangeLabel}). This is not a dispatch or fuel-planning check.`:`This route exceeds the listed aircraft range (${plane.rangeLabel}). A different aircraft or a stop would be needed in practice.`;
 out.innerHTML=`<div class="result-filled"><div class="airport-result"><div class="airport-code">${from.code}</div><span class="airport-city">${from.city}</span><span class="airport-name">${from.name}</span></div><div class="route-middle"><div class="route-plane">✈</div><div class="route-rule"></div><div class="route-distance">${fmtNum(km)} <span style="font-size:9px;color:#8ca2b8;font-weight:500">km</span></div><div class="route-unit">${fmtNum(nm)} NAUTICAL MILES · GREAT CIRCLE</div></div><div class="airport-result"><div class="airport-code">${to.code}</div><span class="airport-city">${to.city}</span><span class="airport-name">${to.name}</span></div><div class="result-meta"><div><strong>${formatTime(flightHours)}</strong><span>ESTIMATED FLIGHT TIME</span></div><div><strong>${plane.model}</strong><span>SELECTED AIRCRAFT</span></div><div><strong>${plane.cruise}</strong><span>TYPICAL CRUISE</span></div></div><div class="range-note ${rangeClass}">${rangeOK?'✓':'!'} ${rangeText}</div></div>`;
 updateRouteMap(from,to,plane);
}

function cardTemplate(a){return `<article class="aircraft-card" data-id="${a.id}" data-category="${a.category}" tabindex="0" role="button" aria-label="View ${a.model} details"><div class="aircraft-photo"><img src="${a.image}" alt="${a.alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=1400&auto=format&fit=crop'"><span class="aircraft-badge">${a.badge}</span></div><div class="aircraft-card-body"><div class="maker">${a.maker}</div><h3>${a.model}</h3><div class="aircraft-mini-specs"><div><strong>${a.rangeLabel}</strong><span>MAX RANGE</span></div><div><strong>${a.seats}</strong><span>SEATS · TYPICAL</span></div><div><strong>${a.cruise}</strong><span>CRUISE</span></div></div><div class="card-bottom"><span>First flight · ${a.firstFlight}</span><button type="button" data-open="${a.id}">View details ↗</button></div></div></article>`;}
let activeFilter='all';
function renderAircraft(){const q=$('#aircraft-search').value.trim().toLowerCase();const list=aircraft.filter(a=>(activeFilter==='all'||a.category===activeFilter)&&(!q||`${a.maker} ${a.model} ${a.category}`.toLowerCase().includes(q)));$('#aircraft-grid').innerHTML=list.map(cardTemplate).join('');$('#empty-state').hidden=list.length>0;}
function openAircraft(id){const a=aircraft.find(x=>x.id===id);if(!a)return;$('#dialog-content').innerHTML=`<div class="dialog-hero"><img src="${a.image}" alt="${a.alt}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=1400&auto=format&fit=crop'"></div><div class="dialog-body"><div class="maker">${a.maker} · ${a.badge}</div><h2>${a.model}</h2><p>${a.description}</p><div class="spec-grid"><div class="spec-item"><strong>${a.rangeLabel}</strong><span>INDICATIVE RANGE</span></div><div class="spec-item"><strong>${a.cruise}</strong><span>CRUISE SPEED</span></div><div class="spec-item"><strong>${a.seats}</strong><span>TYPICAL SEATING</span></div><div class="spec-item"><strong>${a.firstFlight}</strong><span>FIRST FLIGHT</span></div></div><div class="dialog-fact"><strong>✦ Aircraft fact</strong><br>${a.fact}</div><div class="dialog-actions"><button class="button button-primary" id="use-aircraft">Use in flight planner ↗</button><button class="button button-quiet" id="close-dialog">Close</button></div></div>`;
 $('#aircraft-dialog').showModal();$('#use-aircraft').addEventListener('click',()=>{$('#aircraft-choice').value=a.id;$('#aircraft-dialog').close();document.querySelector('#planner').scrollIntoView({behavior:'smooth'});calculateRoute();});$('#close-dialog').addEventListener('click',()=>$('#aircraft-dialog').close());}
function init(){addOptions();renderAircraft();$('#year').textContent=new Date().getFullYear();$('#aircraft-total').textContent=String(aircraft.length).padStart(2,'0');$('#airport-total').textContent=airports.length;$('#maker-total').textContent=String(new Set(aircraft.map(a=>a.maker)).size).padStart(2,'0');$('#all-aircraft-count').textContent=String(aircraft.length).padStart(2,'0');initFlightMap();$('#flight-form').addEventListener('submit',calculateRoute);$('#swap-airports').addEventListener('click',()=>{const f=$('#from-airport'),t=$('#to-airport'),v=f.value;f.value=t.value;t.value=v;calculateRoute();});document.querySelectorAll('[data-route-from]').forEach(btn=>btn.addEventListener('click',()=>{$('#from-airport').value=btn.dataset.routeFrom;$('#to-airport').value=btn.dataset.routeTo;$('#aircraft-choice').value=btn.dataset.aircraft||'a350';calculateRoute();}));document.querySelectorAll('.filter-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderAircraft();}));$('#aircraft-search').addEventListener('input',renderAircraft);$('#aircraft-grid').addEventListener('click',e=>{const card=e.target.closest('.aircraft-card');const id=e.target.dataset.open||card?.dataset.id;if(id)openAircraft(id);});$('#aircraft-grid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('aircraft-card')){e.preventDefault();openAircraft(e.target.dataset.id);}});$('#dialog-close').addEventListener('click',()=>$('#aircraft-dialog').close());$('#aircraft-dialog').addEventListener('click',e=>{if(e.target===$('#aircraft-dialog'))$('#aircraft-dialog').close();});$('#menu-toggle').addEventListener('click',()=>{const nav=$('.desktop-nav'),btn=$('#menu-toggle'),open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>$('.desktop-nav').classList.remove('open')));calculateRoute();}
document.addEventListener('DOMContentLoaded',init);
