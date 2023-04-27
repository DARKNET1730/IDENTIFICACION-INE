const arrayINE={
    apPaterno:"Chel",
    apMaterno: "Koh",
    nombres: "Luis Miguel",
    sexo: "sexo H",
    domicilio:"Domicilio C Adolfo Lopez Mateos s/n <br> LOC Santo Domingo 77366 <br> Lazaro Cardenas, Q.Roo",
    claveelector: "Clave de elector CHKHLS95111823H900",
    curp: "Curp CEKL951118HQRHHS02",
    registro: "año de registro 2013 01",
    estado:"Estado 23",
    localidad:"localidad 0038",
    municipio:"municipio 0060",
    vigen: "vigencia 2028",
    emision:"emisión 2018",
    fechanacimientio: "18/11/1995",
    seccion: "sección 0108",
    escudo:"https://cdn.pixabay.com/photo/2018/08/18/18/38/coat-of-arms-3615253_1280.png",
    map1:"map1.png",
    map2:"map2.png",
    perfil:"perfil.png",

};

let apPaterno=arrayINE.apPaterno;
let apMaterno=arrayINE.apMaterno;
let nombres=arrayINE.nombres;
let sexo=arrayINE.sexo;
let domicilio=arrayINE.domicilio;
let claveelector=arrayINE.claveelector;
const curp = arrayINE.curp;
let registro= arrayINE.registro;
let fechanacimiento = arrayINE.fechanacimientio;
let seccion=arrayINE.seccion;
let vigen=arrayINE.vigen;
let estado=arrayINE.estado;
let localidad=arrayINE.localidad;
let municipio=arrayINE.municipio;
let emision=arrayINE.emision;
let escudo=arrayINE.escudo;
let map1=arrayINE.map1;
let map2=arrayINE.map2;
let perfil=arrayINE.perfil;


document.getElementById("apPaterno").innerHTML=apPaterno
document.getElementById("apMaterno").innerHTML=apMaterno
document.getElementById("nombres").innerHTML=nombres
document.getElementById("domicilio").innerHTML=domicilio
document.getElementById("claveelector").innerHTML=claveelector
document.getElementById("fechanacimiento").innerHTML=fechanacimiento
document.getElementById("sexo").innerHTML=sexo
document.getElementById("registro").innerHTML=registro
document.getElementById("curp").innerHTML=curp
document.getElementById("vigen").innerHTML=vigen
document.getElementById("estado").innerHTML=estado
document.getElementById("localidad").innerHTML=localidad
document.getElementById("municipio").innerHTML=municipio
document.getElementById("emision").innerHTML=emision
document.getElementById("seccion").innerHTML=seccion
document.getElementById("escudo").src=escudo
document.getElementById("map1").src=map1
document.getElementById("map2").src=map2
document.getElementById("perfil").src=perfil
document.getElementById("perfil2").src=perfil