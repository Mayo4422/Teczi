# Teczi
Empresa de cursos
 # Clase: Publicación de una Galería Educativa con AWS S3 (o Azure Storage)

En esta clase aprenderás a crear un **bucket en la nube**, subir imágenes y videos, diseñar una **página web con HTML, CSS y JavaScript**, y finalmente habilitar un **hosting estático** para que cualquiera pueda acceder a tu galería desde internet.

---

## 1️⃣ Creación del bucket S3 o Almacenamiento en Azure

1. Ingresa a tu consola de **Amazon S3** (o Azure Storage).
2. Crea un bucket con un nombre único, por ejemplo:
3. Selecciona la **región más cercana** a tu ubicación.
4. Desactiva la opción **Block Public Access** para que los objetos puedan ser públicos.

---

## 2️⃣ Subida de objetos

1. Sube al menos:
- 3 imágenes en formato `.jpg` o `.png`
- 2 videos cortos en formato `.mp4`
2. Configura permisos públicos:
- En S3: ve a **ACL → public-read**
- En Azure: habilita acceso público en el contenedor
3. Copia los **enlaces públicos** de cada archivo, ya que los usarás en el proyecto.

Ejemplo de enlaces en S3:



---

## 3️⃣ Diseño de la página web

Tu proyecto estará compuesto por **3 archivos principales**:

- `index.html` → estructura de la página  
- `style.css` → estilos con **CSS Grid**  
- `script.js` → genera la galería dinámicamente con los enlaces de S3  

### Características:
✅ Diseño sencillo pero estético, inspirado en plataformas como Platzi.  
✅ Galería responsive que se adapta a móviles, tablets y escritorio.  
✅ Uso de **JavaScript dinámico**:
- Inserta imágenes y videos desde un arreglo de URLs.
- Manipula el DOM para generar elementos automáticamente.
- Maneja eventos para abrir un **modal interactivo** al hacer clic.

---

## 4️⃣ Publicación como sitio estático

1. En tu bucket, abre **Propiedades → Static website hosting**.
2. Activa la opción:  
3. En **Index document**, escribe:
4. Sube los archivos `index.html`, `style.css` y `script.js` al bucket.
5. Copia la **URL pública del sitio web** que te da S3, ejemplo:
6. Abre esa URL en cualquier navegador externo 🚀

---

## 🎯 Resultado Final

Al terminar esta clase tendrás:
- Un **bucket en la nube** con acceso público.
- Una **galería web moderna y responsive** que muestra tus imágenes y videos.
- Un **sitio estático** accesible desde cualquier navegador del mundo, sin servidores adicionales.

---

