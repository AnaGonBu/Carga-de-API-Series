# Carga-de-API-Series
Practica Desarrollo Entorno Cliente  
## Objetivos de la actividad  
Con esta actividad vas a conseguir desarrollar en Angular un sistema para consumir  
elementos de una API de manera tradicional. Crearemos un sistema que nos permite  
publicar a través de un pequeño formulario una serie nueva.  
Se debe realizar un proyecto en Angular 18 o posterior, para la conexión mediante  
fetch a la API usar la siguiente URL:  
https://jsonblob.com/api/1313446273633935360  
El sistema generado será una SPA, donde todos los componentes estén dentro de la ruta principal.  
Lista de tareas  
1. Generar el proyecto en Angular 18 o posterior.
2. Instalar y configurar Bootstrap.
3. Modificación del App-Component para que tenga una cabecera y un footer.
4. Desarrollar un elemento ProductService para comunicar e hidratar los datos de los componentes y la API-REST.
5. Desarrollar un componente ProductsList en el que se listen todos los productos de la API.
6. Desarrollar un componente ProductCard en el que se muestre la información
del producto, desde este componente se debe de poder eliminar el producto de la lista.
7. Desarrollar un componente ProductForm que contenga un formulario ReactiveForm con validadores para dar de alta un nuevo producto, este
producto debe verse en la lista cuando se da de alta.
8. Desarrollar un componente ProductFilter que contenga un formulario de tipo
FormsTemplate en el que se puedan realizar filtros de los productos de la lista (por nombre, categoría, precio y activo).
9. Implementar toda la funcionalidad necesaria en el Service
