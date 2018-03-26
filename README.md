# Intro

Una pequeña aplicación de ejemplo realizada en Ionic 3 para lectura de beacons Estimote utilizando el protocolo Eddystone en dispositivos Android.

# Instalación

* Decargar el proyecto con `git clone https://github.com/IsaacYAGI/lectura-estimote-beacons-ionic-app.git`
* Ingresar a la carpeta del proyecto con `cd lectura-estimote-beacons-ionic-app`
* Ejecutar el comando `npm install`
* Luego ejecutar el comando `ionic cordova prepare` para descargar los plugins y plataformas configuradas en el proyecto.
* Ejecutar el comando `ionic cordova build android` para compilar el APK.
* Ejecutar el comando `ionic cordova run android --target=[IP]:[PUERTO]` para compilar el APK y lanzarlo al emulador.

# Créditos

Se siguió el siguiente tutorial para la elaboración de la app (¡muchas gracias! :smiley: ) 

* [Ionic 3 - Estimote Location Beacons with via Eddystone Protocol (#1)](https://www.youtube.com/watch?v=-v0Bs7VyotU)