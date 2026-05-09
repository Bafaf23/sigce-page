# 🎓 SIGCE · Sitio web

Landing page de **SIGCE** — **Control de Estudios Inteligente**: plataforma para instituciones educativas que unifica inscripción, carga de notas y reportes académicos.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## ✨ Qué incluye

- 🦸 **Hero** con llamadas a la acción y métricas de ejemplo.
- 🤝 **Nosotros** con valores: seguridad, comunidad educativa y agilidad administrativa.
- 💳 **Planes** para mostrar ofertas comerciales.
- 🧭 **Navegación** con anclas (`#hero`, `#nosotros`, `#planes`).
- 📱 **Diseño responsive** y estilos con Tailwind CSS v4.

La UI sigue una estructura tipo **Atomic Design**: `atoms` → `molecules` → `organisms`. 🧬

---

## 📋 Requisitos

- [Node.js](https://nodejs.org/) **18.18+** o **20+** (recomendado para Next.js 16).

---

## 🚀 Cómo arrancar el proyecto

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev
```

Otros comandos útiles:

| Comando      | Descripción                |
| ------------ | -------------------------- |
| `npm run build` | 🏗️ Compilación de producción |
| `npm run start` | ▶️ Servidor tras `build`     |
| `npm run lint`  | 🔍 ESLint (config Next.js)   |

---

## 📁 Estructura principal

```
src/
├── app/
│   ├── layout.jsx    # Metadatos, idioma es, estilos globales
│   └── page.jsx      # Página principal (composición de secciones)
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/    # Header, Hero, About, Planes, Footer, etc.
└── globals.css
```

El alias `@/` apunta a `src/` (ver `jsconfig.json`). 🔗

---

## 🛠️ Stack

| Tecnología | Uso |
| ---------- | --- |
| **Next.js** | ⚡ App Router, SSR/SSG según rutas |
| **React** | ⚛️ Componentes y cliente donde hace falta (`"use client"`) |
| **Tailwind CSS** | 🎨 Utilidades y tema visual |
| **Font Awesome** | ⭐ Iconos (`@fortawesome/react-fontawesome`) |

---

Hecho con 💡 claridad, ⚡ rendimiento y una experiencia coherente para centros de estudio.
