# Cyberpunk Frontend Portfolio — Next.js + Tailwind + Firebase

Portfolio profesional con estética cyberpunk (**violeta + dorado**, botones negros con acentos **rojo/verde**), animaciones y un formulario de contacto que guarda mensajes en **Firestore**.

## Stack incluido (según tu pedido)

- **Next.js + React + TypeScript**
- **Tailwind CSS**
- **Anime.js** (animación del Hero)
- **Three.js** (background 3D sutil)
- **Swiper.js** (carousel de proyectos)
- **SweetAlert2** (dark mode para feedback del formulario)
- **CoffeeScript** (generación de contenido compilado)
- **Firebase (Admin SDK)** (backend server-side, Firestore)
- Deploy pensado para **Vercel**

---

## 1) Instalación local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí `http://localhost:3000`.

---

## 2) Personalización rápida (lo que vas a editar en GitHub)

- Links LinkedIn/GitHub: `src/config/profile.ts`
- Proyectos: `src/config/projects.ts`
- Texto “Sobre mí”: `src/app/about/page.tsx`
- Estilos globales: `src/app/globals.css` y `tailwind.config.ts`

---

## 3) Firebase (Firestore) para el formulario

### Crear proyecto + Firestore
1. En Firebase Console, creá un proyecto.
2. Activá **Cloud Firestore** (modo producción o test, según tu preferencia).

### Service Account (Admin)
1. Firebase Console → Project Settings → **Service accounts**
2. Generate new private key (JSON)

En Vercel/Local, seteá estas env vars (copiá de `.env.example`):

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

**Importante:** la private key debe ir con `\n` en los saltos de línea (ver `.env.example`).

### Dónde se guardan los mensajes
Colección: `contact_messages`

Código: `src/app/api/contact/route.ts`

---

## 4) Deploy en Vercel (pasos)

1. Subí este proyecto a un repo en GitHub.
2. En Vercel: Import Project → elegí el repo.
3. En “Environment Variables”: cargá las 3 variables de Firebase.
4. Deploy.

---

## 5) Notas técnicas

- CoffeeScript se compila automáticamente antes de `dev` y `build` (scripts `predev`/`prebuild`).
- Three.js corre en un Client Component (`src/components/ThreeBackground.tsx`).
- Swiper requiere CSS importado en el componente (`ProjectsCarousel.tsx`).

---

## Licencia

Usalo libremente en tu portfolio. Si lo tuneás y queda mejor, buenísimo: eso es lo que queremos.
