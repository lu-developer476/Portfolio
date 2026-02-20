# Portfolio Frontend

Portfolio profesional desarrollado con **Next.js**, **React** y **TypeScript**, diseñado con **Tailwind CSS** y una estética cyberpunk/futurista definida.

Este proyecto combina diseño visual sólido, animaciones controladas, integración 3D y backend real con Firebase, incluyendo sistema de notificaciones por correo en tiempo real.

---

## Descripción General

Es una aplicación moderna lista para producción que demuestra:

* Arquitectura clara con App Router
* Componentes reutilizables y desacoplados
* Feedback visual inmediato
* Integración real con backend
* Envío automático de notificaciones por email
* Preparación directa para deploy en Vercel

El formulario de contacto:

* Guarda los mensajes en **Cloud Firestore**
* Envía notificación automática al administrador
* Envía respuesta automática de confirmación al usuario

Todo mediante entorno server-side seguro.

---

## Stack Tecnológico

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### Animación y Visual

* Anime.js (microinteracciones)
* Three.js (background 3D dinámico)
* Swiper.js (carrusel de proyectos)

### Experiencia de Usuario

* SweetAlert2 en modo oscuro (feedback visual consistente)

### Backend

* Firebase Admin SDK
* Cloud Firestore
* API Routes de Next.js
* Resend (envío de emails transaccionales)

### Complementos

* CoffeeScript (compilación automática previa al build)
* Configuración optimizada para Vercel

---

## Instalación Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplicación disponible en:

```
http://localhost:3000
```

---

## Estructura Relevante

* `src/app` → Rutas y estructura principal
* `src/components` → Componentes reutilizables
* `src/config` → Configuración editable (perfil y proyectos)
* `src/app/api/contact` → Endpoint de guardado y notificaciones
* `src/lib/firebaseAdmin.ts` → Inicialización segura de Firebase

---

## Configuración de Firebase

### 1. Crear Proyecto

* Crear proyecto en Firebase Console
* Activar **Cloud Firestore**

### 2. Generar Service Account

* Project Settings → Service Accounts
* Generar nueva clave privada (JSON)

### 3. Variables de entorno

Configurar en `.env.local` y en Vercel:

```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Importante:
La clave privada debe mantener los saltos de línea usando `\n`.

---

## Configuración de Resend (Email Transaccional)

### 1. Crear cuenta

* Registrarse en [https://resend.com](https://resend.com)
* Generar una API Key

### 2. Variable de entorno

Agregar en `.env.local` y en Vercel:

```
RESEND_API_KEY=
```

### 3. Funcionamiento

Cada envío del formulario ejecuta:

1. Guardado seguro en Firestore.
2. Email de notificación al administrador.
3. Email automático de confirmación al usuario.

Todo el envío se realiza desde el entorno server-side usando API Routes.

---

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Importar proyecto en Vercel.
3. Configurar variables de entorno:

   * Firebase
   * Resend

4. Deploy automático.

No requiere servidor adicional.

---

## Flujo del Sistema de Contacto

1. Usuario envía mensaje.
2. Validación con Zod.
3. Persistencia en Firestore.
4. Notificación por email al administrador.
5. Auto-respuesta automática al usuario.
6. Confirmación visual mediante SweetAlert2.

Sistema completamente serverless.

---

## Enfoque del Proyecto

Este portfolio prioriza:

* Identidad visual coherente
* Código mantenible
* Integración real con backend
* Seguridad en entorno server-side
* Arquitectura escalable

La base permite incorporar:

* Autenticación
* Panel administrativo
* Analytics
* Logs estructurados
* Monitorización
* Integración con CRM

Sin necesidad de reestructurar el proyecto.

---

## Licencia

Uso libre para portfolio personal o profesional.
