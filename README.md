# Portfolio BTS SIO

Portfolio web responsive pour un étudiant en BTS SIO (Option SLAM), avec un design moderne et un thème sombre.

## 🚀 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 📁 Structure du projet

```
portfolio anis/
├── app/
│   ├── globals.css          # Styles globaux et Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page principale avec toutes les sections
├── components/
│   ├── Sidebar.tsx          # Sidebar avec navigation et profil
│   ├── BlobBackground.tsx   # Arrière-plan avec formes organiques
│   ├── FloatingActionButton.tsx  # Bouton retour en haut
│   └── Section.tsx          # Wrapper pour les sections
├── data/
│   └── profile.ts           # Configuration et données (nom, projets, etc.)
└── ...
```

## 🎨 Personnalisation

Pour modifier les informations personnelles, éditez le fichier `data/profile.ts` :

- **Nom et prénom** : Modifiez `firstName` et `lastName`
- **Rôle** : Modifiez `role`
- **Projets** : Ajoutez/modifiez les projets dans le tableau `projets`
- **Compétences** : Ajustez le tableau `competences`
- **Certifications** : Modifiez le tableau `certifications`
- **Timeline** : Personnalisez le parcours dans `timeline`

## 🛠️ Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icônes)
- **Framer Motion** (animations)

## 📱 Responsive

Le portfolio est entièrement responsive :
- **Desktop** : Sidebar fixe à gauche (280px)
- **Mobile** : Menu hamburger avec drawer

## 🎯 Sections

1. **Accueil** - Hero avec nom et liens sociaux
2. **Profil** - Présentation, objectifs, qualités
3. **Parcours** - Timeline du parcours académique
4. **BTS SIO** - Explication des options SLAM et SISR
5. **Compétences** - Grille avec barres de progression
6. **Certifications** - Cartes des certifications
7. **Projets** - Grille de projets avec tags
8. **Contact** - Formulaire de contact et liens

## 🎨 Palette de couleurs

- **Background** : `#0b0f10` → `#0f1416` (dégradé)
- **Accent** : `#63f5d6` (menthe/turquoise)
- **Sidebar** : Glassmorphism avec `rgba(255, 255, 255, 0.04)`

## 📝 Build pour production

```bash
npm run build
npm start
```
