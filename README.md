# Lista de Tareas con Web Storage

## Descripción
Este proyecto es una aplicación web sencilla de lista de tareas que utiliza **Web Storage** para almacenar información del usuario. Implementa **LocalStorage**, **SessionStorage** y **Cookies** para mejorar la experiencia del usuario y permitir la persistencia de datos.

## Tecnologías utilizadas
- **HTML5** para la estructura de la página.
- **CSS3** para el diseño y estilos.
- **JavaScript** para la funcionalidad e interacción con Web Storage.

## Características
1. **Añadir tareas:** El usuario puede agregar tareas a la lista.
2. **Eliminar tareas:** Cada tarea tiene un botón para ser eliminada individualmente.
3. **Persistencia con LocalStorage:** Las tareas se guardan en LocalStorage para que permanezcan después de recargar la página.
4. **Contador de sesión con SessionStorage:** Se cuenta el número de accesos en la sesión actual.
5. **Personalización con Cookies:** Se solicita y almacena el nombre del usuario para mostrar un saludo personalizado.

## Instrucciones de uso
1. Abre el archivo `index.html` en un navegador web.
2. Ingresa tu nombre cuando se te solicite (este se almacenará en una cookie por 7 días).
3. Agrega tareas escribiéndolas en el campo de texto y presionando el botón **Agregar**.
4. Observa cómo las tareas se almacenan y persisten tras recargar la página.
5. Para eliminar una tarea, haz clic en la **X** junto a la tarea correspondiente.
6. Revisa el contador de accesos en la sesión actual.

## Estructura del Proyecto
```
/WebStorageTodo
│── index.html  # Página principal con la funcionalidad
│── styles.css  # (Opcional) Archivo de estilos CSS
│── script.js   # (Opcional) Archivo separado de JavaScript
```

## Autor
Desarrollado como práctica educativa para el aprendizaje de Web Storage y manipulación del DOM en JavaScript.

## Licencia
Este proyecto es de código abierto y puede ser utilizado con fines educativos y de aprendizaje.

