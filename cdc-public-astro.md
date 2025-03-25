## 13. Budget Technique Estimatif (Mensuel)

| Poste | Coût mensuel |
|-------|--------------|
| Hébergement Vercel Pro | 20€ |
| CDN / Edge | 30€ |
| Algolia Search | 29€ |
| Plausible Analytics | 9€ |
| **Total** | **88€** |# Cahier des Charges - Site Marchand Véhicules B2B - Partie Publique (Astro.js)

## 1. Présentation du Projet

### 1.1 Objectif
Création de la partie publique d'un site marchand de véhicules à destination des professionnels de l'automobile, avec une interface utilisateur innovante et extrêmement performante. Cette partie publique vise à maximiser le référencement naturel (SEO) et offrir des temps de chargement ultra-rapides (<1s) pour se positionner comme la référence du secteur dans les résultats de recherche.

### 1.2 Cible
- Professionnels de l'automobile (concessionnaires, revendeurs, distributeurs, exportateurs)
- Utilisateurs effectuant des recherches génériques sur les plateformes de véhicules professionnels
- Moteurs de recherche (Google, Bing, DuckDuckGo) et nouveaux moteurs IA (Perplexity, Claude)

### 1.3 Valeur Ajoutée
- Site ultra-performant avec score PageSpeed Insights >95/100
- Architecture "zero JavaScript par défaut" pour chargement instantané
- Optimisation SEO poussée avec données structurées spécifiques au secteur automobile
- Contenu riche et optimisé pour cibler les requêtes des professionnels
- Design minimaliste "Apple-like" différenciant des plateformes concurrentes
- Approche "Content-first" avec focus sur les informations critiques

## 2. Architecture Technique

### 2.1 Stack Technique
- **Framework**: Astro.js v4+ (génération statique avec hydratation sélective)
- **Framework CSS**: Tailwind CSS v4 avec stratégie de purge optimisée
- **Composants UI**: Astro Island Architecture avec hydration partielle
- **Format Images**: AVIF/WebP via l'API native d'Astro
- **CDN**: Cloudflare R2 ou Fastly pour edge distribution
- **Analytics**: Plausible (RGPD-compliant, zero-cookie)
- **Cache**: Edge caching + Service Workers pour offline capabilities
- **CMS Headless**: Contentful pour gestion de contenu (option)
- **Search**: Algolia InstantSearch pour recherche rapide
- **Monitoring**: Web Vitals API + UX Signals pour analyse performance réelle

### 2.2 Installation et Dépendances (Compatibles 2025)

```bash
# Installation de base
npm create astro@latest -- --template minimal

# Installation des intégrations Astro officielles
npx astro add tailwind
npx astro add sitemap
npx astro add prefetch
npx astro add partytown
npx astro add mdx
npx astro add react
npx astro add vue

# Installation des intégrations tierces
npx astro add astro-icon
npx astro add astro-robots-txt
npx astro add @playform/compress

# Dépendances supplémentaires
npm install schema-dts           # Schéma.org TypeScript
npm install astro-seo           # SEO avancé
npm install sharp               # Optimisation images
npm install mobile-detect       # Détection précise d'appareils
npm install swiper              # Galeries photos tactiles optimisées
npm install @astrojs/vercel    # Pour déploiement Vercel si besoin

# Configuration manuelle pour remplacer @astrojs/image
# Utilisation de l'API image native d'Astro
# Documentation: https://docs.astro.build/en/guides/images/
```

**Note concernant l'optimisation des images**: Astro dispose désormais d'une API native pour les images qui remplace l'ancien `@astrojs/image`. Nous utiliserons cette API intégrée plutôt que le module externe qui n'est plus compatible.

Exemple d'utilisation de l'API image native:

```astro
---
import { Image } from 'astro:assets';
import monImage from '../assets/images/vehicle.jpg';
---

<Image 
  src={monImage} 
  width={800} 
  height={600} 
  alt="Description du véhicule" 
  format="avif"
  quality={80}
/>
```
```

### 2.3 Structure des Dossiers

```
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/
│       └── branding/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── vehicles/
│   │   │   ├── backgrounds/
│   │   │   └── team/
│   │   └── fonts/
│   ├── components/
│   │   ├── core/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── seo/
│   │   │   ├── SchemaVehicle.astro
│   │   │   ├── Breadcrumb.astro
│   │   │   └── MetaTags.astro
│   │   ├── vehicle/
│   │   │   ├── VehicleCard.astro
│   │   │   ├── VehicleSpecTable.astro
│   │   │   └── VehicleGallery.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── Modal.astro
│   │   └── search/
│   │       ├── SearchBox.astro
│   │       └── Filters.vue (hydraté avec Vue)
│   ├── content/
│   │   ├── blog/
│   │   ├── vehicles/
│   │   ├── brands/
│   │   └── pages/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── VehicleLayout.astro
│   │   └── BrandLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── a-propos.astro
│   │   ├── contact.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── vehicules/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── marques/
│   │   │   ├── index.astro
│   │   │   └── [marque]/
│   │   │       ├── index.astro
│   │   │       └── [modele].astro
│   │   ├── legal/
│   │   │   ├── mentions-legales.astro
│   │   │   ├── cgv.astro
│   │   │   └── politique-confidentialite.astro
│   │   └── demande-acces.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── seo.ts
│   │   ├── schema.ts
│   │   └── imageUtils.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 3. Fonctionnalités du Site Public

### 3.1 Pages Principales

#### 3.1.1 Page d'Accueil
- Hero section avec proposition de valeur claire
- Mise en avant des avantages concurrentiels
- Call-to-action pour inscription professionnelle
- Témoignages de clients B2B
- Statistiques valorisantes (nombre de véhicules, délais moyens, etc.)
- Sélection de véhicules premium ou lots recommandés
- Accès rapide par marques populaires

#### 3.1.2 Page À Propos
- Histoire et valeurs de l'entreprise
- Équipe dirigeante (option)
- Garanties et certifications
- Processus d'achat simplifié (infographie)
- Avantages concurrentiels
- Partenaires stratégiques

#### 3.1.3 Page Contact
- Formulaire de contact optimisé (validation côté client via Islands)
- Informations de contact (téléphone, email)
- Carte d'emplacement
- Horaires d'ouverture
- FAQ spécifique au contact

#### 3.1.4 FAQ
- Questions organisées par catégories
- Recherche instantanée dans les questions
- Schéma FAQ pour rich snippets Google
- Statistiques d'utilité des réponses (option)

#### 3.1.5 Blog / Actualités
- Articles optimisés SEO sur le marché automobile
- Catégorisation par thématiques
- Tags pour navigation transversale
- Partage simplifié sur réseaux sociaux professionnels
- Pagination optimisée pour le SEO

#### 3.1.6 Catalogue Véhicules (Version Publique Limitée)
- Présentation simplifiée des véhicules disponibles
- Filtres de base (marque, modèle, année, prix)
- Pagination optimisée pour performance et SEO
- Aperçu des lots disponibles
- Incitation à s'inscrire pour fonctionnalités avancées

#### 3.1.7 Pages Marques et Modèles
- Landing pages dédiées pour chaque marque majeure
- Landing pages pour combinaisons marque/modèle populaires
- Contenus uniques et substantiels pour SEO
- Données techniques et statistiques pertinentes

#### 3.1.8 Inscription / Demande d'Accès
- Formulaire d'inscription professionnelle
- Explication du processus de validation
- FAQ spécifique à l'inscription
- Témoignages de clients

#### 3.1.9 Connexion (Redirection vers Application)
- Page de connexion simple
- Option "mot de passe oublié"
- Redirection vers l'application Nuxt après authentification

### 3.2 Optimisation SEO Avancée

#### 3.2.1 Structure Technique SEO
- Architecture full SSG (Static Site Generation)
- URLs sémantiques et optimisées
- Sitemap.xml dynamique multi-niveau
- Fichier robots.txt optimisé
- Canonical URLs sur toutes les pages
- Redirection 301 automatisée pour URLs obsolètes
- Gestion des erreurs 404 avec suggestions

#### 3.2.2 Métadonnées et Schema.org
- Implementation Schema.org Vehicle, ItemList, Organization, BreadcrumbList
- Schema.org personnalisé pour spécificités automobile B2B
- Open Graph et Twitter Cards optimisés
- JSON-LD généré dynamiquement selon contenu
- Données structurées pour rich snippets Google

```typescript
// Exemple schéma véhicule
const vehicleSchema = {
  "@context": "https://schema.org",
  "@type": "Vehicle",
  "name": vehicle.brand + " " + vehicle.model,
  "model": vehicle.model,
  "vehicleEngine": {
    "@type": "EngineSpecification",
    "engineType": vehicle.fuel,
    "enginePower": {
      "@type": "QuantitativeValue",
      "value": vehicle.power,
      "unitCode": "KWT"
    }
  },
  "mileageFromOdometer": {
    "@type": "QuantitativeValue",
    "value": vehicle.mileage,
    "unitCode": "KMT"
  },
  "modelDate": vehicle.year,
  "numberOfDoors": vehicle.doors,
  "vehicleTransmission": vehicle.transmission,
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "EUR",
    "businessFunction": "https://purl.org/goodrelations/v1#Sell",
    "seller": {
      "@type": "Organization",
      "name": "Votre Entreprise"
    }
  }
};
```

#### 3.2.3 Stratégie de Contenu SEO
- Contenu "evergreen" pour marques et modèles populaires
- Articles d'expertise sur le marché B2B automobile
- Pages de catégories avec contenus uniques
- Optimisation pour requêtes longue traîne
- Structure de données de véhicules organisée par hiérarchie

#### 3.2.4 Performance SEO
- Core Web Vitals optimisés
  - LCP < 1.2s
  - FID < 100ms
  - CLS < 0.1
- Mise en cache intelligente avec stratégie stale-while-revalidate
- Pré-chargement sélectif des ressources critiques
- Image lazy-loading natif avec placeholders BlurHash

### 3.3 Stratégie d'Images Optimisées

#### 3.3.1 Format et Compression
- Utilisation prioritaire d'AVIF avec fallback WebP et JPEG
- Optimisation automatique via l'API d'images native d'Astro
- Redimensionnement adaptatif selon contexte
- Compression intelligente sans perte de qualité perceptible

```astro
---
import { Image } from 'astro:assets';
import vehicleImage from '../assets/images/vehicles/model.jpg';
---

<Image
  src={vehicleImage}
  width={1200}
  height={800}
  alt={`${vehicle.brand} ${vehicle.model} - Vue extérieure`}
  format="avif"
  quality={85}
  class="rounded-lg shadow-md"
/>
```

#### 3.3.2 Stratégie de Chargement
- Images critiques en chargement prioritaire
- Images secondaires avec attribut loading="lazy"
- Utilisation de LQIP (Low Quality Image Placeholders) via Sharp
- Images de fond en CSS avec media queries adaptatives

### 3.4 Internationalisation (Option)

- Support multi-langue via i18n-routing d'Astro
- URLs localisées (/fr/vehicules, /en/vehicles)
- Contenu adaptable par marché cible
- Auto-détection de langue avec redirection

```astro
// src/pages/[lang]/index.astro
---
export async function getStaticPaths() {
  return [
    { params: { lang: 'fr' } },
    { params: { lang: 'en' } },
    { params: { lang: 'de' } }, // Si marché allemand ciblé
  ];
}

const { lang } = Astro.params;
const translations = await import(`../../i18n/${lang}.js`);
---

<Layout title={translations.home.title}>
  <h1>{translations.home.heading}</h1>
  <!-- ... -->
</Layout>
```

## 4. Optimisation de Performance

### 4.1 Stratégies Frontend

#### 4.1.1 Zero-JS par Défaut
- Architecture sans JavaScript par défaut
- Hydratation sélective uniquement pour composants interactifs
- Utilisation de l'approche Islands pour composants dynamiques

```astro
<!-- Composant statique (zero JS) -->
<VehicleCard vehicle={vehicle} />

<!-- Composant interactif avec hydratation à l'affichage -->
<SearchFilters client:visible />

<!-- Hydratation au chargement pour éléments critiques -->
<LoginForm client:load />
```

#### 4.1.2 Optimisations CSS
- Critical CSS intégré dans le `<head>`
- Extraction et chargement différé du CSS non-critique
- Purge CSS intelligent via Tailwind JIT
- Minimisation CSS avec combinaison de règles

#### 4.1.3 Stratégie de Chargement
- Prefetch intelligent des pages probables via `@astrojs/prefetch`
- Preconnect pour ressources tierces (CDN, Algolia)
- Priorité de chargement pour ressources au-dessus de la ligne de flottaison
- Service Worker pour mise en cache sélective
- PWA (Progressive Web App) complète pour expérience mobile native
  - Manifest.json personnalisé
  - Service Worker avec stratégies cache avancées
  - Installation sur écran d'accueil
  - Expérience offline pour pages critiques
  - Push notifications pour alertes de nouveaux véhicules (opt-in)

### 4.2 Stratégies Serveur et Déploiement

#### 4.2.1 Génération Statique (SSG)
- Build complet pour toutes les pages statiques
- Pre-rendering des pages véhicules populaires
- Régénération statique incrémentale pour contenus fréquemment mis à jour

#### 4.2.2 Edge Deployment
- Déploiement sur edge network (Vercel Edge, Cloudflare Pages)
- Distribution globale via CDN performant
- Compression Brotli pour assets textuels
- Cache-Control optimisé par type de ressource

```
# Example headers pour déploiement
/*.html
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400
```

#### 4.2.3 Monitoring Performance
- RUM (Real User Monitoring) via Web Vitals API
- Audit automatisé via Lighthouse CI
- Tests de performance dans différentes régions
- Alertes de régression performance

## 5. Interface Utilisateur et Design

### 5.1 Design Général
- Design minimaliste "Apple-like" avec focus sur contenu
- Palette de couleurs sobre avec accents dynamiques
- Typographie optimisée pour lecture (system fonts prioritaires)
- Espaces blancs généreux mais contrôlés
- Thème sombre/clair avec respect des préférences système

### 5.2 Expérience Mobile Exceptionnelle

#### 5.2.1 Principes Mobile-First
- Développement en mobile-first obligatoire (conception mobile avant desktop)
- Test systématique sur vrais appareils (iPhone, Samsung, Google Pixel)
- Maquettes dédiées pour smartphone et tablette
- Navigation repensée pour usage au pouce (zone d'atteinte optimisée)
- Micro-interactions spécifiques aux appareils tactiles

#### 5.2.2 Performance Mobile
- Bundle JavaScript minimal sur mobile (<150KB)
- Core Web Vitals mobile optimisés (LCP<1.5s, FID<50ms, CLS<0.1)
- Optimisation agressive des images pour connexions mobiles
- Préchargement intelligent basé sur la qualité de connexion détectée
- Support complet des fonctionnalités en mode déconnecté (option PWA)

```javascript
// Exemple d'optimisation images selon appareil/connexion
const imageQualityStrategy = {
  getQualityForDevice() {
    // Détection connexion lente
    if (navigator.connection && navigator.connection.effectiveType === '3g') {
      return {
        quality: 60,
        format: 'webp',
        maxWidth: 640
      };
    }
    
    // Connexion standard mobile
    if (window.innerWidth < 768) {
      return {
        quality: 75,
        format: 'webp',
        maxWidth: 828
      };
    }
    
    // Connexion desktop standard
    return {
      quality: 85,
      format: 'avif',
      maxWidth: 1200
    };
  }
};
```

#### 5.2.3 UI Mobile Spécifique
- Menu mobile innovant avec navigation gestuelle
- Mode immersif pour visualisation des véhicules (plein écran optimisé)
- Recherche vocale intégrée pour requêtes mains-libres
- Filtres adaptés à l'interaction tactile (sliders, grands boutons)
- Zoom intelligent sur galeries photos (pinch-to-zoom natif)
- Animations subtiles pour transitions entre pages
- Feedback haptique sur actions importantes (via vibration API)

#### 5.2.4 Éléments UI Tactiles Optimisés
- Zones tactiles minimales de 44×44px (norme Apple)
- Boutons Call-to-Action en zone d'atteinte naturelle du pouce
- Espacement adapté entre éléments cliquables
- Formulaires optimisés pour clavier mobile
- Chargement préalable des formulaires pour saisie instantanée
- État de survol remplacé par interactions tap alternatives
- Support des gestes mobiles standards (swipe, pinch)

#### 5.2.5 Tests et Optimisations Mobile
- Tests sur différentes tailles d'écran (iPhone SE au iPhone Pro Max)
- Tests de réseau throttling (3G, 4G instable)
- Tests d'ergonomie avec heat mapping mobile
- Optimisation des interactions pour utilisation à une main
- Audits accessibilité spécifiques mobile (contrastes, taille texte)

### 5.3 Composants UI Spécifiques

#### 5.2.1 Cartes Véhicules
- Design compact mais informatif
- Priorité aux informations clés (marque, modèle, prix, kilométrage)
- Badge visuel pour statut (disponible, réservé)
- Optimisation pour ratio clic/impression

#### 5.2.2 Navigation
- Menu principal simplifié
- Navigation secondaire contextuelle
- Fil d'Ariane (breadcrumbs) pour SEO et UX
- Search toujours accessible
- Menu mobile optimisé pour conversion

#### 5.3.3 Appels à l'Action
- CTA primaire (Inscription) et secondaire (Connexion)
- Contraste élevé pour boutons principaux
- Micro-interactions subtiles pour feedback utilisateur
- Formulaires simplifiés avec validation instantanée
- Adaptation contextuelle des CTA selon appareil (téléphone vs email)

## 6. Sécurité et Conformité

### 6.1 RGPD et Cookies
- Approche privacy-first avec consentement explicite
- Bannière cookies minimale et non-invasive
- Plausible Analytics pour statistiques RGPD-compliant
- Politique de confidentialité détaillée et accessible

### 6.2 Sécurité Générale
- CSP (Content Security Policy) strict
- En-têtes de sécurité optimisés
- Protection contre injections XSS
- HTTPS strict avec HSTS

```javascript
// astro.config.mjs
export default defineConfig({
  // ...
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline';"
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
});
```

## 7. Tests et Qualité

### 7.1 Stratégie de Test
- Tests d'accessibilité automatisés (WCAG AA)
- Tests de performance via Lighthouse CI
- Tests cross-browser automatisés
- Tests de compatibilité mobile
- Tests SEO techniques
- Validation schema.org

### 7.2 Critères de Qualité
- Score PageSpeed Insights: 95+/100 sur mobile et desktop
- Score Lighthouse global: 90+/100
- Accessibilité WCAG AA
- Compatible dernières versions de Chrome, Firefox, Safari, Edge
- Temps de chargement complet < 1.5s sur 4G
- Tests utilisateurs mobile avec taux de satisfaction > 90%
- Fluidité d'animation: 60fps constant sur mobile
- Conformité Material Motion pour animations mobiles

## 8. Planning et Phasage

### 8.1 Phase 1: Fondations (1 mois)
- Setup du projet Astro.js
- Architecture de base
- Composants UI core
- Templates principaux
- Structure SEO fondamentale

### 8.2 Phase 2: Contenu et Pages (1 mois)
- Développement de toutes les pages statiques
- Intégration du design
- Optimisation images
- Mise en place blog
- Structure de données véhicules

### 8.3 Phase 3: Optimisations (1 mois)
- Optimisation SEO poussée
- Optimisation performance
- Tests et corrections
- Intégration analytics et monitoring
- Documentation

## 9. Intégration avec le Backend

### 9.1 Interface avec Application Nuxt
- API endpoints pour données véhicules
- Système de login seamless
- Partage des types TypeScript
- Redirection intelligente après authentification

### 9.2 Synchronisation Données
- Régénération statique à la demande pour nouvelles données
- Webhook pour rebuild pages impactées par changements
- Cache invalidation pour données modifiées

```typescript
// Example webhook handler pour rebuild
export async function post({ request }) {
  const auth = request.headers.get('Authorization');
  if (auth !== `Bearer ${import.meta.env.WEBHOOK_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const data = await request.json();
  
  // Trigger rebuild pour pages spécifiques
  await fetch(
    `https://api.vercel.com/v1/integrations/deploy/prj_xxx...`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VERCEL_DEPLOY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        targets: [`pages/vehicules/${data.vehicleId}.astro`]
      }),
    }
  );
  
  return new Response('OK');
}
```

## 11. Livrables Attendus

- Code source du site public Astro.js
- Documentation technique
- Rapport d'optimisation SEO
- Rapport de performance
- Guide de maintenance et mise à jour
- Documentation d'intégration avec backend Nuxt

## 12. Configuration Initiale (Code pour démarrer)

Voici la configuration de base pour lancer le projet avec les bonnes dépendances:

### astro.config.mjs
```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// Compression
import playformCompress from '@playform/compress';

// CSS
import tailwindcss from '@tailwindcss/vite';

// SEO
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// Performance
import prefetch from '@astrojs/prefetch';
import partytown from '@astrojs/partytown';

// Content
import mdx from '@astrojs/mdx';

// Components
import icon from 'astro-icon';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://votre-domaine.com',
  integrations: [
    // SEO
    sitemap({
      filter: (page) => !page.includes('/admin/')
    }),
    robotsTxt(),
    
    // Performance
    prefetch(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    playformCompress(),
    
    // Content
    mdx(),
    
    // Components
    icon(),
    react(),
    vue(),
  ],
  
  // CSS
  vite: {
    plugins: [tailwindcss()]
  },
  
  // Image optimisation utilise l'API native d'Astro
});
```

### tailwind.config.mjs
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          // Votre palette secondaire
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        // Tailwind default pour le reste
      }
    },
  },
  plugins: [],
}
```

### src/layouts/BaseLayout.astro
```astro
---
import { SEO } from 'astro-seo';
import '../styles/global.css';

const { title, description, image, canonical } = Astro.props;
---

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <SEO
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        basic: {
          title: title,
          type: "website",
          image: image || "/images/og-default.jpg",
        }
      }}
    />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="min-h-screen bg-white dark:bg-gray-900">
    <slot />
  </body>
</html>
```
