# PMM_IONIC_Ejercicio_Cursos_y_Notas
______
INTRO
______
Empezamos el repaso del contenido del segundo trimestre aprendiendo los conceptos fundamentales de IONIC.  
Como veremos en profundidad, IONIC es un framework basado en Componentes Web que nos ayuda a realizar no solo páginas web,  sino también aplicaciones híbridas para móviles y tablets con diferentes sistemas operativos.  Se trata simplemente que lo investiguéis y os hagáis una idea de sus posibilidades.  
En esta primera práctica lo veréis de forma aislada, aunque la verdadera potencia de IONIC  se muestra cuando se mezcla con algún framework de desarrollo en JavaScript como Angular o React.  

____________
Ideas fundamentales
____________
-IONIC es, en principio, un conjunto de nuevas etiquetas que podéis incluir en vuestra páginas como si se trataran de etiquetas HTML.  
Son nuevas etiquetas que se denominan Componentes Web (Al igual que Angular).  

-Al igual que pasa con un control de un formulario .NET, podéis considerar un Componente Web como una etiqueta especial que tiene dos cosas unidas:  un aspecto visual modificable y un comportamiento sin necesidad de escribir el código.  

____________
Para empezar
____________
- Para que el navegador reconozca esas nuevas etiquetas tenéis que enlazar a una librería, al igual que se hace con JQuery o BootStrap.  
Cuando se hacen proyectos de IONIC mezclados con Angular el proceso de instalación es más complejo.  
Pero lo que yo os pido, que es usar solo IONIC en una página web, es muy simple. 

En la página oficial podéis ver el código para enlazar a la librería:  
https://ionicframework.com/docs/intro/cdn  

Este es el código que necesitáis insertar en la cabecera de vuestra página:  
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script> 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>   

- Una vez referenciada, podemos añadir estos nuevos componentes a nuestras páginas.  Tenemos plantillas, botones, controles de formularios, tarjetas, etc; todas con un aspecto muy profesional.  Podemos también mediante atributos modificar sus comportamientos y estilos visuales.  

- Podemos acceder a todos estos nuevos elementos desde JavaScript a igual que lo hemos hecho con el resto de etiquetas HTML (getElement...).  - Lo más interesante de esta práctica es que intentéis desarrollar vuestra capacidad de lectura de una documentación técnica. Es más sencillo de lo que pudiera parecer. 
Tenéis ejemplos y códigos de uso de cada componente.  https://ionicframework.com/docs/components  

________________
LA PRÁCTICA
________________
1- Realizad una pequeña aplicación en JavaScript como la de la imagen adjunta. Se trata de un pequeño formulario donde podéis introducir el nombre de un curso y la puntuación que le dais de 1 a 5.  Con un botón "Add" añadimos el curso a una lista.La parte visual la conseguiréis utilizando componentes IONIC en lugar de etiquetas HTML. El comportamiento lo programaréis, como habitualmente, usando JavaScript.  

2.Intentad que la vista de la página se adapte automáticamente al tamaño de las pantallas donde se visualice.
