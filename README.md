## La Palma Mapa Interactivo 
#### Juan Ignacio Hita 

## ¿Qué es RaphaelJS?

RaphaelJS es una librería de JavaScript que simplifica el desarrollo de graficos vectoriales en la web. Mediante esta librería se pueden manipular formas Canvas, imágenes, realizar cortes, rotaciones de forma simple y fácil. 
Raphael usa el formato SVG, recomendado por W3School y VML como creador de gráficos. 
Raphael es soportado en:
*	Firefox 3.0+
*	Safari 3.0+
*	Chrome 5.0+
*	Opera 9.5+
*	Internet Explorer 6.0

## Instalación de RaphaelJS y las herramientas que usaremos

Para usar RaphaelJS sólo es necesario descargar el código fuente de la librería y añadirlo a nuestro proyecto. 
Link de RaphaelJS
http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js

## Creando el Mapa Interactivo

###### PASO 1: Preparamos la imagen que usaremos para el mapa interactivo de la isla de La Palma.

Mediante un programa vectorial abriremos la imagen del mapa, es importante que tenga unas medidas fijas ya que a la hora de ponerlo en la web es un objeto SVG.
Link Fichero SVG: https://drive.google.com/a/ull.edu.es/file/d/0B18dUNHzQRIRUkdoZGZVSmlwdEE/view?usp=sharing

###### PASO 2: Convertimos SVG al formato de RaphaelJS con ReadySetRaphael
Cuando tenemos nuestro fichero SVG listo, usaremos una herramienta online llamada ReadySetRaphael. 
Esta herramienta nos dara un código primitivo de las diferentes áreas de nuestro dibujo vectorial. 
Existen muchas herramientas en la red que realizan el mismo cometido, ReadySetRaphael es la que yo he usado en este proyecto. Tambien cabe destacar Raphael2SVG y Raphael SVG Import.

