> ⚠️ **Proyecto no oficial — solo de inspiración**
> Este sitio es un ejercicio de diseño y desarrollo front-end inspirado en una cafetería real de Cuenca, Ecuador. **No soy el propietario del negocio ni de la marca "Café Morlaco"**, no tengo ninguna afiliación con ella, y este proyecto no representa su sitio oficial. Es un trabajo de práctica/portafolio.

---

# Café Morlaco — Landing page

Landing page de 4 páginas para Café Morlaco, cafetería en el Centro Histórico de Cuenca, Ecuador. Sitio estático (HTML + CSS + JS), sin frameworks ni paso de compilación: se abre directamente en el navegador o se sube tal cual a cualquier hosting estático.

## Estructura

```
cafe-morlaco/
├── index.html          → Inicio
├── 404.html            → Página de error personalizada
├── .htaccess           → Activa el 404 en hosting Apache/cPanel
├── style.css
├── script.js
├── favicon.svg          (única imagen local del proyecto)
├── nosotros/
│   ├── index.html       → Historia y valores
│   ├── style.css
│   └── script.js
├── menu/
│   ├── index.html       → Catálogo completo (cafés, postres, sánduches, aperitivos, chocolates)
│   ├── style.css
│   └── script.js        (además del menú móvil, resalta la pestaña activa al hacer scroll)
└── visitanos/
    ├── index.html       → Ubicación, mapa y horarios
    ├── style.css
    └── script.js
```

Cada página es una carpeta independiente con su propio HTML, CSS y JS — puedes editar una página sin afectar a las demás.

## ⚠️ Cosas que debes revisar antes de publicar

**1. No hay fotos ni logo reales todavía.**
Usé fotografía de stock libre de derechos (Unsplash / Pexels, licencias gratuitas, no requieren atribución) como *placeholder* para que el sitio se vea completo:
- Portada y ubicación: calles del Centro Histórico de Cuenca (fotos reales de la ciudad, pero no del local).
- Interior, cafés, postres, sánduches, aperitivos, chocolates: fotografía genérica de café/gastronomía.

Ninguna de estas fotos es del local real. En cuanto tengas fotos propias (fachada, interior, platos) o el logo definitivo, reemplaza:
- Las URLs `src="https://images.unsplash.com/..."` y `src="https://images.pexels.com/..."` en cada HTML.
- El ícono de marca (arco de puerta colonial, inline SVG en `favicon.svg` y en cada `<header>`/`<footer>`) por tu logo real.

**2. Los precios del menú son de referencia.**
Inventé precios típicos de una cafetería en Cuenca para que el catálogo se vea real y completo. Debes confirmarlos y ajustarlos — están marcados con una nota al final del menú, pero conviene revisarlos ítem por ítem.

**3. Los horarios son un supuesto.**
Puse "Lunes a sábado 8:00–20:00 · Domingo 9:00–18:00" como horario de referencia. Reemplázalo por el horario real en los 4 archivos (buscar "8:00–20:00").

**4. El enlace de Instagram se construyó a partir del usuario.**
Me diste `@cafemorlaco`; lo convertí en `https://instagram.com/cafemorlaco`. Verifica que sea correcto.

## Cómo editar contenido

- **Textos y precios del menú**: `menu/index.html`, dentro de cada `.menu-item`.
- **WhatsApp**: el número aparece en 3 lugares por página (botón flotante, pie de página, y en Visítanos) como `https://wa.me/593991234567`. Si cambia el número, hay que actualizarlo en los 4 archivos HTML.
- **Colores y tipografía**: variables al inicio de `style.css` (`:root { --color-primary: ... }`), duplicadas en cada carpeta.
- **Mapa**: `visitanos/index.html`, el `<iframe>` usa la dirección en texto (sin API key de Google), por lo que no requiere configuración adicional.

## Redes y contacto ya integrados

- WhatsApp flotante en todas las páginas → `+593 99 123 4567`
- Facebook, Instagram y TikTok → pie de página de todas las páginas, y sección dedicada en Visítanos
- Mapa embebido con la dirección: Calle Larga 7-70 y Luis Cordero, Centro Histórico, Cuenca

## Página 404 — cómo activarla según dónde la subas

El archivo `404.html` ya está listo y usa el mismo diseño del sitio. Lo que cambia es **cómo el servidor sabe que debe mostrarlo**:

**Hosting tipo cPanel / Apache (Hostinger, Namecheap, GoDaddy, etc.)**
Sube el `.htaccess` junto al resto de archivos, en la misma carpeta que `index.html`. Ya viene configurado con `ErrorDocument 404 /404.html` y funciona solo.
⚠️ El `.htaccess` empieza con punto, así que es un archivo oculto — si tu gestor de archivos no lo muestra, activa la opción "mostrar archivos ocultos" (en cPanel: *Settings → Show Hidden Files*) para confirmar que se subió.

**Netlify, Vercel, Cloudflare Pages, GitHub Pages**
No necesitan el `.htaccess` (lo ignoran). Detectan el `404.html` de la raíz automáticamente y lo usan. No hay que configurar nada.

**Si el sitio queda dentro de una subcarpeta** (ej. `tudominio.com/cafe-morlaco/`)
Abre el `.htaccess`, comenta la línea `ErrorDocument 404 /404.html` y descomenta la de abajo ajustando el nombre de tu carpeta. Además, en `404.html` las rutas empiezan con `/` (ej. `/style.css`, `/menu/index.html`) asumiendo que el sitio está en la raíz del dominio; si lo pones en subcarpeta, hay que anteponer el nombre de la carpeta a esas rutas.

**Para probarlo**: una vez subido, entra a `tudominio.com/cualquier-cosa-inventada` — debería aparecer tu página 404 con el diseño del sitio, no la pantalla gris del servidor.
