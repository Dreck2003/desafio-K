# Country Search:

> Nombre: Dikson<br>

>Para ver la demo haz click [aqui](https://desafio-nine.vercel.app/)

## Question:

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario. ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

>Yo pienso que se debería implementar una arquitectura de <code>microservicios</code>, tanto  en el backend como con la base de datos. Talvez es necesario 
>separar funcionalidades en distintos módulos. Por el lado de las bases de datos, se podría replicar la estructura, para que los servidores no apunten a una sola base >de datos, o crear otra con un distinto modelo relacional como <code>noSQL</code> dependiendo de cuál es la mejor y para que caso.
>Además creo que sería una buena idea usar tecnologías que hagan un muy buen uso de la memoria como **java**, **C#**, y que puedan acercarse a más bajo nivel. De la misma forma se puede aplicar esto en el frontent con **Web Assembly**, que permite Mostar un mayor desempeño.
