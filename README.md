# PMPS · Sitio Catálogo — Operadora Química Menlun

Sitio web institucional y catálogo de productos PMPS, distribuido por Operadora Química Menlun.

## Estructura del proyecto

```
pmps-menlun/
├── index.html          ← Página principal (todo el sitio)
├── css/
│   └── style.css       ← Estilos completos
├── js/
│   └── app.js          ← Filtros, buscador y renderizado dinámico
├── data/
│   └── productos.json  ← Base de datos de los 70 productos PMPS
├── netlify.toml        ← Configuración de deploy
└── README.md
```

## Cómo agregar o editar productos

Solo editar `data/productos.json`. Cada producto tiene esta estructura:

```json
{
  "id": 1,
  "nombre": "Nombre del producto",
  "subtitulo": "Tipo de producto",
  "categoria": "areas-proceso",
  "descripcion": "Descripción del producto...",
  "aplicacion": "Uso principal",
  "tipo": "Alcalino"
}
```

### Categorías disponibles:
- `areas-proceso`
- `desinfectantes`
- `cip`
- `membranas`
- `alimentos`
- `especialidades`
- `lavanderia`
- `personal`
- `comunes`
- `mantenimiento`

## Deploy en Netlify

1. Subir este repo a GitHub
2. Conectar en Netlify → "New site from Git"
3. Seleccionar el repo
4. Build command: *(dejar vacío)*
5. Publish directory: `.`
6. Deploy

Netlify auto-despliega cada vez que se hace push a `main`.

## Tecnologías

- HTML5 + CSS3 vanilla
- JavaScript ES6+ (sin frameworks)
- Google Fonts (DM Sans + DM Serif Display)
- Sin dependencias npm
