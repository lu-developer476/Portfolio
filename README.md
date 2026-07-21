# Portfolio

Portfolio profesional desarrollado con **Next.js**, **React** y **TypeScript**, diseñado con **Tailwind CSS** y una estética cyberpunk/futurista definida.

Este proyecto combina diseño visual sólido, animaciones controladas, integración 3D y backend real con Firebase, incluyendo un sistema de notificaciones por correo en tiempo real.

## Descripción general

Es una aplicación moderna lista para producción que demuestra:

- Arquitectura clara con App Router.
- Componentes reutilizables y desacoplados.
- Feedback visual inmediato.
- Integración real con backend.
- Envío automático de notificaciones por email.
- Preparación directa para deploy en Vercel.

El formulario de contacto:

- Guarda los mensajes en Cloud Firestore.
- Envía notificación automática al administrador.
- Envía respuesta automática de confirmación al usuario.

Todo se ejecuta mediante un entorno server-side seguro.

## Stack tecnológico

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS

### Animación y visual

- Anime.js
- Three.js
- Swiper

### Sonidos

- Howler.js

### Experiencia de usuario

- SweetAlert2

### Backend

- Firebase Admin
- Resend
- Nodemailer
- Zod

### Complementos

- ESLint
- CoffeeScript
- SVGR

### Despliegue

- Vercel

## Instalación local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplicación disponible en:

```text
http://localhost:3000
```

## Estructura relevante

```text
src/app                 Rutas y estructura principal
src/components          Componentes reutilizables
src/config              Configuración editable de perfil y proyectos
src/app/api/contact     Endpoint de guardado y notificaciones
src/lib/firebaseAdmin.ts Inicialización segura de Firebase
src/lib/mailer.ts       Configuración de Nodemailer
```

## Configuración de Firebase

### 1. Crear proyecto

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Activar Cloud Firestore.

### 2. Generar cuenta de servicio

1. Ir a **Project Settings**.
2. Entrar en **Service Accounts**.
3. Generar una nueva clave privada en formato JSON.

### 3. Variables de entorno

Configurar en `.env.local` y en Vercel:

```env
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

> **Importante:** la clave privada debe mantener los saltos de línea usando `\n`.

## Configuración de Resend

### 1. ¿Qué es Resend?

Resend es un servicio moderno de envío de correos electrónicos transaccionales diseñado para aplicaciones web.

En este proyecto se utiliza para gestionar el envío de mensajes desde el formulario de contacto, permitiendo notificaciones inmediatas y confiables sin necesidad de configurar manualmente un servidor SMTP.

Esta arquitectura permite una comunicación robusta, escalable y alineada con prácticas modernas de desarrollo.

### 2. Creación de cuenta

1. Registrarse en [Resend](https://resend.com/).
2. Generar una API Key.

### 3. Variable de entorno necesaria

Agregar en `.env.local` y en Vercel:

```env
RESEND_API_KEY=
```

### 4. Funcionamiento dentro del proyecto

Cada envío del formulario ejecuta:

1. Guardado seguro en Firestore.
2. Email transaccional de notificación al administrador.

Todos los envíos se realizan desde el entorno server-side usando API Routes.

## Configuración de Nodemailer

### 1. ¿Qué es Nodemailer?

Nodemailer es una librería de Node.js que permite enviar emails usando protocolos SMTP tradicionales. A diferencia de servicios API como Resend, Nodemailer permite conectarse directamente a proveedores de correo como Gmail, Outlook u otros servidores SMTP.

En este proyecto se utiliza Nodemailer para enviar el email automático de confirmación al usuario que completa el formulario de contacto.

Esta implementación permite el envío programático de correos electrónicos mediante SMTP, ofreciendo control total sobre la configuración y el proveedor de envío.

Su uso resulta adecuado para entornos donde se requiere personalización avanzada o integración con servidores propios.

### 2. Instalación

Agregar la dependencia al proyecto:

```bash
npm install nodemailer
```

### 3. Variables de entorno necesarias

Agregar en `.env.local` y en Vercel:

```env
GMAIL_USER=tu_email@gmail.com
GMAIL_APP_PASSWORD=tu_app_password
```

> **Importante:** `GMAIL_APP_PASSWORD` es una contraseña de aplicación generada desde la cuenta de Google y requiere 2FA activado.

### 4. Configuración del transporter

Ejemplo en `src/lib/mailer.ts`:

```ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
```

### 5. Funcionamiento dentro del proyecto

El flujo completo del formulario es:

1. Guardado seguro del mensaje en Firestore.
2. Envío de notificación al administrador usando Resend.
3. Envío de email automático de confirmación al usuario usando Nodemailer + Gmail SMTP.

### 6. ¿Por qué usar Resend + Nodemailer juntos?

#### Resend

- Ideal para emails transaccionales.
- Alta entregabilidad.
- Fácil integración con API.

#### Nodemailer + Gmail

- Permite enviar auto-respuestas sin necesidad de dominio propio.
- Útil para proyectos personales y portfolios.
- Control directo del envío SMTP.

### 7. Seguridad

- Nunca exponer credenciales en el repositorio.
- Usar siempre variables de entorno.
- Mantener activado 2FA en la cuenta de Gmail utilizada.

### 8. Ejecución

Todo el envío de emails se ejecuta server-side mediante API Routes de Next.js, evitando exponer credenciales en el frontend.

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Importar el proyecto en Vercel.
3. Configurar variables de entorno:
   - Firebase
   - Resend
   - Nodemailer
4. Ejecutar el deploy automático.

No requiere servidor adicional.

## Flujo del sistema

1. El usuario envía un mensaje.
2. Validación con Zod.
3. Persistencia en Firestore.
4. Notificación por email al administrador.
5. Auto-respuesta automática al usuario.
6. Confirmación visual mediante SweetAlert2.

Sistema completamente serverless.

## Enfoque

Este portfolio prioriza:

- Identidad visual coherente.
- Código mantenible.
- Integración real con backend.
- Seguridad en entorno server-side.
- Arquitectura escalable.

La base permite incorporar:

- Autenticación.
- Panel administrativo.
- Analytics.
- Logs estructurados.
- Monitorización.
- Integración con CRM.

Sin necesidad de reestructuración.
