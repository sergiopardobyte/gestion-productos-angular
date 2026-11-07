# Gestión de Productos - Angular

Proyecto práctico basado en la guía **CLASE 7 PRÁCTICA**. Incluye:
- Interfaz `Producto` en TypeScript.
- Servicio `ProductoService` con `Observable` y RxJS.
- Listado de productos con `*ngFor` y `*ngIf`.
- Formulario con `[(ngModel)]`.
- Navegación con Angular Router.
- Agregar y eliminar productos en memoria.

## Requisitos
- Node.js LTS (recomendado Node 20).
- Visual Studio Code.

## Cómo abrir y ejecutar
1. Descomprime el archivo ZIP.
2. Abre Visual Studio Code.
3. Selecciona **Archivo > Abrir carpeta** y elige `gestion-productos-angular`.
4. Abre una terminal en VS Code: **Terminal > Nueva terminal**.
5. Ejecuta:

```bash
npm install
npm start
```

6. Angular abrirá el navegador en `http://localhost:4200`.

También puedes ejecutar `ng serve --open` si tienes Angular CLI instalado globalmente.

## Importante
Los productos se guardan en memoria. Al recargar la página, la lista vuelve a los datos iniciales. El servicio usa `HttpClient` como en la guía, pero las operaciones de esta práctica se simulan con `of()` de RxJS; no requiere un backend ni una API externa.
