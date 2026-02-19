# Portfolio Frontend

Portfolio profesional desarrollado con **Next.js**, **React** y **TypeScript**, diseñado con **Tailwind CSS** y una estética cyberpunk/futurista definida.

Este proyecto combina diseño visual sólido, animaciones controladas, integración 3D y backend real con Firebase.

------------------------------------------------------------------------

## Descripción General

Es una aplicación moderna lista para producción que demuestra:

-   Arquitectura clara con App Router
-   Componentes reutilizables y desacoplados
-   Feedback visual inmediato
-   Integración real con backend
-   Preparación directa para deploy en Vercel

El formulario de contacto guarda los mensajes en **Cloud Firestore** mediante **Firebase Admin SDK** en entorno server-side.

------------------------------------------------------------------------

## Stack Tecnológico

### Frontend

-   Next.js (App Router)
-   React
-   TypeScript
-   Tailwind CSS

### Animación y Visual

-   Anime.js (microinteracciones)
-   Three.js (background 3D dinámico)
-   Swiper.js (carrusel de proyectos)

### Experiencia de Usuario

-   SweetAlert2 en modo oscuro (feedback visual consistente)

### Backend

-   Firebase Admin SDK
-   Cloud Firestore
-   API Routes de Next.js

### Complementos

-   CoffeeScript (compilación automática previa al build)
-   Configuración optimizada para Vercel

------------------------------------------------------------------------

## Instalación Local

``` bash
npm install
cp .env.example .env.local
npm run dev
```

Aplicación disponible en:

    http://localhost:3000

------------------------------------------------------------------------

## Estructura Relevante

-   `src/app` → Rutas y estructura principal
-   `src/components` → Componentes reutilizables
-   `src/config` → Configuración editable (perfil y proyectos)
-   `src/app/api/contact` → Endpoint para Firestore
-   `src/lib/firebaseAdmin.ts` → Inicialización segura de Firebase

------------------------------------------------------------------------

## Configuración de Firebase

### 1. Crear Proyecto

-   Crear proyecto en Firebase Console
-   Activar **Cloud Firestore**

### 2. Generar Service Account

-   Project Settings → Service Accounts
-   Generar nueva clave privada (JSON)

### 3. Variables de entorno

Configurar en `.env.local` y en Vercel:

    FIREBASE_PROJECT_ID=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_PRIVATE_KEY=

Importante:\
La clave privada debe mantener los saltos de línea usando `\n`.

------------------------------------------------------------------------

## Deploy en Vercel

1.  Subir el repositorio a GitHub
2.  Importar proyecto en Vercel
3.  Configurar variables de entorno
4.  Deploy automático

No requiere servidor adicional.

------------------------------------------------------------------------

## Enfoque del Proyecto

Este portfolio prioriza:

-   Identidad visual coherente
-   Código mantenible
-   Integración real con backend
-   Estructura escalable

La base permite incorporar autenticación, panel administrativo, analytics o cualquier integración futura sin reestructurar el proyecto completo.

------------------------------------------------------------------------

## Licencia

Uso libre para portfolio personal o profesional.
