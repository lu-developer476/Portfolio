# Portfolio — Lucas Montenegro

Portfolio profesional bilingüe (ES/EN) desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. El proyecto está orientado a presentar perfil, metodología, stack, proyectos desplegados y canales de contacto con una estética cyberpunk/futurista, animaciones controladas, microinteracciones sonoras y backend serverless real.

---

## Estado actual

El proyecto se encuentra en estado funcional y listo para despliegue en **Vercel**. Actualmente incluye:

* Aplicación Next.js con **App Router**.
* Experiencia responsive con estética cyberpunk y múltiples temas visuales.
* Navegación entre inicio, perfil y contacto.
* Selector de idioma **Español / Inglés** mediante contexto React.
* Selector de modo visual: oscuro, claro, beige, neblina y galaxia.
* Modal de reloj mundial con zona horaria local detectada y horarios internacionales.
* Hero con tagline generado desde CoffeeScript antes de desarrollo/build.
* Sección de metodología con animaciones mediante Anime.js e Intersection Observer.
* Página de perfil con stack tecnológico y carruseles de proyectos profesionales/personales.
* Formulario de contacto con validación, persistencia en Firestore y notificaciones por email.
* Integración con Vercel Analytics.

---

## Stack tecnológico

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

### Animación, interacción y visual

![Anime.js](https://img.shields.io/badge/Anime.js-FE4A49?style=for-the-badge&logo=javascript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Howler.js](https://img.shields.io/badge/Howler.js-000000?style=for-the-badge&logo=javascript&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF5A5F?style=for-the-badge&logo=sweetalert2&logoColor=white)

### Backend y servicios

![Firebase Admin](https://img.shields.io/badge/Firebase_Admin-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=maildotru&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-009688?style=for-the-badge&logo=gmail&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Herramientas

![CoffeeScript](https://img.shields.io/badge/CoffeeScript-2F2625?style=for-the-badge&logo=coffeescript&logoColor=white)
![SVGR](https://img.shields.io/badge/SVGR-FFB13B?style=for-the-badge&logo=svg&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

---

## Funcionalidades principales

### Experiencia de usuario

* Interfaz responsive con estilos Tailwind y variables de tema.
* Menú superior sticky con avatar ampliable en modal.
* Microinteracciones con sonidos de hover/click usando Howler.js.
* Animaciones progresivas con respeto por `prefers-reduced-motion`.
* Alertas visuales de éxito/error con SweetAlert2.

### Internacionalización

* Textos centralizados en `src/lib/i18n.tsx`.
* Idiomas disponibles: español e inglés.
* Cambio de idioma desde el menú de navegación sin recargar la página.

### Temas visuales

* Modos disponibles: `dark`, `light`, `beige`, `cloud` y `galaxy`.
* Persistencia del tema elegido en `localStorage`.
* Aplicación del tema mediante `data-theme` en el documento.

### Reloj mundial

* Detección automática de la zona horaria local del visitante.
* Listado de horarios para Argentina, Chile, Brasil, Perú, México, Estados Unidos, España, Reino Unido y Japón.
* Actualización en tiempo real cada segundo mientras el modal está abierto.

### Gestión de proyectos

Los proyectos se administran desde archivos de configuración:

* `src/config/professionalprojects.ts` para proyectos profesionales.
* `src/config/personalprojects.ts` para proyectos personales.

Estado actual de proyectos cargados:

* **5 proyectos profesionales** publicados y una tarjeta de próximos proyectos.
* **17 proyectos personales** publicados y una tarjeta de próximos proyectos.

### Formulario de contacto

El endpoint `POST /api/contact` realiza el siguiente flujo:

1. Recibe los datos del formulario.
2. Valida nombre, email y mensaje con Zod.
3. Sanitiza caracteres HTML básicos en el mensaje.
4. Guarda el mensaje en la colección `contact_messages` de Cloud Firestore.
5. Envía una notificación al administrador mediante Resend.
6. Envía una auto-respuesta al usuario mediante Nodemailer + Gmail SMTP.
7. Responde al frontend para mostrar feedback visual.

---

## Estructura relevante

```txt
src/
├─ app/
│  ├─ api/contact/route.ts   # Endpoint serverless del formulario
│  ├─ about/page.tsx         # Perfil, stack y proyectos
│  ├─ contact/page.tsx       # Página de contacto
│  ├─ layout.tsx             # Layout global y providers
│  └─ page.tsx               # Home y metodología
├─ components/               # Componentes reutilizables de UI
├─ config/                   # Perfil y catálogos de proyectos
├─ coffee/                   # Fuente CoffeeScript del tagline
├─ generated/                # Salida compilada del tagline
├─ lib/                      # i18n, Firebase, mailer y hooks
└─ types/                    # Declaraciones TypeScript auxiliares
```

---

## Instalación local

> El proyecto incluye `pnpm-lock.yaml`, por lo que se recomienda usar **pnpm** para instalaciones reproducibles. También puede ejecutarse con npm si se mantiene el lock correspondiente.

```bash
pnpm install
pnpm dev
```

La aplicación queda disponible en:

```txt
http://localhost:3000
```

Scripts disponibles:

```bash
pnpm dev          # Compila el tagline CoffeeScript y levanta Next.js en desarrollo
pnpm build        # Compila el tagline CoffeeScript y genera build de producción
pnpm start        # Sirve la build de producción
pnpm lint         # Ejecuta el lint configurado por Next.js
pnpm coffee:build # Compila src/coffee hacia src/generated
```

---

## Variables de entorno

Crear un archivo `.env.local` con las variables necesarias para el backend:

```env
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
RESEND_API_KEY=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

### Firebase

1. Crear un proyecto en Firebase Console.
2. Activar Cloud Firestore.
3. Generar una cuenta de servicio desde Project Settings → Service Accounts.
4. Copiar `project_id`, `client_email` y `private_key` a las variables de entorno.

Importante: `FIREBASE_PRIVATE_KEY` debe conservar los saltos de línea usando `\n` cuando se configure como variable de entorno.

### Resend

Resend se utiliza para enviar la notificación transaccional al administrador cuando llega un nuevo mensaje desde el portfolio.

1. Crear una cuenta en [https://resend.com](https://resend.com).
2. Generar una API Key.
3. Configurar `RESEND_API_KEY`.

### Nodemailer + Gmail SMTP

Nodemailer se utiliza para enviar la auto-respuesta al visitante que completa el formulario.

1. Activar 2FA en la cuenta de Gmail emisora.
2. Generar una contraseña de aplicación.
3. Configurar `GMAIL_USER` y `GMAIL_APP_PASSWORD`.

---

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Importar el proyecto desde Vercel.
3. Configurar las variables de entorno de Firebase, Resend y Nodemailer.
4. Ejecutar el deploy.

No requiere servidor adicional: el formulario funciona mediante API Routes serverless de Next.js.

---

## Seguridad y buenas prácticas

* Las credenciales se consumen únicamente en server-side.
* No se deben commitear archivos `.env*` con secretos reales.
* La validación del formulario se realiza en backend con Zod.
* El mensaje se sanitiza antes de persistirse y enviarse por email.
* El envío SMTP tiene timeout de protección para evitar bloqueos prolongados.

---

## Próximos pasos posibles

La base actual permite incorporar sin reestructurar el proyecto:

* Panel administrativo para visualizar mensajes.
* Autenticación.
* Logs estructurados y monitorización.
* Integración con CRM.
* Persistencia del idioma seleccionado.
* Tests automatizados de componentes y API.
