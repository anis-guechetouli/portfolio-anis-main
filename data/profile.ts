import { link } from "fs"

export const profile = {
  firstName: 'Anis',
  lastName: 'Guechetouli',
  role: 'Étudiant en BTS SIO – Option SISR 2eme année',
  email: 'anisguechetouli5@gmail.com',
  github: 'https://github.com/anis-guechetouli',
  linkedin: 'https://www.linkedin.com/in/anis-guechetouli',
}

export interface NavItem {
  id: string
  label: string
  icon: string
  subItems?: { id: string; label: string }[]
}

export const sections: NavItem[] = [
  { id: 'accueil', label: 'Accueil', icon: 'Home' },
  { id: 'profil', label: 'Profil', icon: 'User' },
  {
    id: 'parcours',
    label: 'Parcours',
    icon: 'GraduationCap',
    subItems: [
      { id: 'parcours-scolaire', label: 'Parcours scolaire' },
      { id: 'parcours-pro', label: 'Parcours pro' },
    ],
  },
  { id: 'competences', label: 'Compétences', icon: 'Code' },
  { id: 'certifications', label: 'Certifications', icon: 'Award' },
  { id: 'plateforme', label: 'Plateforme d\'entraînement', icon: 'Shield' },
  { id: 'projets', label: 'Projets', icon: 'FolderKanban' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
]

export const parcoursEcole = [
    {
        year: "2024-2026",
        title: "BTS SIO",
        description: `
    Pendant ces deux années, j’ai acquis des compétences solides en informatique à travers des cours et des projets concrets.
    
    • Réseaux : adressage IP, sous-réseaux, VLAN, routage, DHCP/DNS  
    • Systèmes : Windows Server, Linux, installation, administration, maintenance  
    • Virtualisation : création d’environnements de test (VM)  
    • Cybersécurité : bonnes pratiques, gestion des accès, VPN, sécurisation des services  
    • Développement : HTML, CSS, JavaScript, PHP  
    • Base de données : SQL / MySQL  
    • Outils : Git/GitHub, Docker, documentation technique
        `.trim(),
        location: "IRIS - École supérieure d'informatique",
      },
      {
        year: "2024",
        title: "École 42 Paris",
        description: `
      J’ai participé à la Piscine de l’École 42, une formation intensive d’un mois axée sur la pratique et l’autonomie.
      
      • Programmation en C : variables, conditions, boucles, fonctions, tableaux  
      • Shell : commandes Linux, scripts, gestion de fichiers et permissions  
      • Algorithmique : logique, résolution de problèmes, optimisation  
      • Méthode : travail en autonomie, entraide, gestion du temps et rigueur
        `.trim(),
        location: "École 42 Paris",
      },
      
]

export const parcoursProfessionnel = [
    {
        year: "2025",
        title: "Stage Informatique (Support / Réseau)",
        description: `
      Stage au sein de l’entreprise de transport FastTrack. 
      J’ai participé à plusieurs missions techniques liées au développement web, à l’assistance informatique et à la mise en place d’un serveur de stockage à distance.
       
      • Mise en place d’un serveur de stockage de fichiers à distance (partage réseau) pour centraliser les documents  
      • Configuration et préparation de postes utilisateurs : installation Windows, pilotes, logiciels, mises à jour  
      • Montage de tours (PC fixes) : installation des composants, branchements, tests et vérification du matériel  
      • Support et dépannage : résolution de problèmes simples (connexion, imprimantes, erreurs Windows)  
      • Rédaction de documentation : procédures d’installation et guides rapides pour les utilisateurs
        `.trim(),
        location: "FastTrack (entreprise de transport)",
        duration: "1 mois",
        link : "https://dandy-cowbell-23a.notion.site/Stage-Informatique-Support-R-seau-2f4beac706b780d18c65e5274278aaa8",
      },
      
  {
    year: "2024",
    title: "Stage Développement Web",
    description: `
  Stage de développement web au sein de l’entreprise de transport FastTrack.
  J’ai participé à la création d’un site web permettant aux clients de contacter l’entreprise et de faire des demandes de renseignements.
  
  • Développement backend : PHP  
  • Base de données : MySQL  
  • Fonctionnalités : formulaire de contact, gestion des messages, pages informatives
    `.trim(),
    location: "FastTrack (entreprise de transport)",
    duration: "1 mois",
    link : "https://fasttrack.alwaysdata.net/",
  },
  
]

export const competences = {
  developpement: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'Python', level: 65 },
  ],
  outilsDeveloppement: [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 75 },
    { name: 'VS Code', level: 85 },
    { name: 'Docker', level: 60 },
  ],
  outilsCybersecurite: [
    { name: 'Wireshark', level: 65 },
    { name: 'Nmap', level: 60 },
    { name: 'Metasploit', level: 55 },
    { name: 'Burp Suite', level: 50 },
  ],
  autresOutils: [
    { name: 'Linux (debian , kali, ubuntu,)', level: 75 },
    { name: 'Windows Server (AD)', level: 70 },
    { name: 'Virtualisation ( VMware )', level: 65 },
  ],
}

export const plateforme = {
  title: 'Plateforme d\'entraînement',
  description: 'Pratique régulière sur des plateformes d\'entraînement en cybersécurité pour développer mes compétences en sécurité informatique. Ces plateformes permettent de s\'exercer sur des défis réalistes, des machines virtuelles vulnérables et des scénarios d\'attaque/défense.',
  objectifs: [
    'Maîtriser les techniques de penetration testing',
    'Comprendre les vulnérabilités web et réseau',
    'Développer des compétences en forensique',
    'Apprendre les bonnes pratiques de sécurisation',
  ],
  fonctionnalites: [
    'Challenges interactifs et progressifs',
    'Machines virtuelles vulnérables',
    'CTF (Capture The Flag)',
    'Laboratoires pratiques',
  ],
  technologies: ['Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'John the Ripper'],
  platforms: [
    { name: 'TryHackMe', level: 'Intermédiaire', link: '#', description: 'Plateforme d\'apprentissage avec parcours guidés' },
    { name: 'HackTheBox', level: 'Débutant', link: '#', description: 'Machines vulnérables et challenges' },
    { name: 'Root-Me', level: 'Intermédiaire', link: '#', description: 'Challenges de sécurité web et système' },
  ],
}

export const certifications = [
  {
    name: 'Introduction à la cybersécurité',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    link: 'https://www.credly.com/badges/a470fe22-ee03-40c3-ac99-0159df88e92e/public_url',
    image: '/certifications/Mise à jour I2CS Jan 22.png', // Chemin vers l'image
  },
]

export const projets = [
   {
  id: 2,
  title: "Stage FastTrack — Support & Stockage",
  description:
    "Stage au sein de l’entreprise FastTrack (transport). Mise en place d’un serveur de stockage à distance (partage réseau) pour centraliser les fichiers, préparation et configuration de postes (Windows, pilotes, logiciels, mises à jour), montage de PC fixes (installation des composants + tests), support utilisateur (connexion, imprimantes, erreurs Windows) et rédaction de procédures techniques.",
  tags: ["Support IT", "Windows", "Partage réseau", "Stockage", "Montage PC", "Documentation"],
  link: "https://dandy-cowbell-23a.notion.site/Stage-Informatique-Support-R-seau-2f4beac706b780d18c65e5274278aaa8",
},
    {
        id: 1,
        title: "MISE EN PLACE D’UNE INFRASTRUCTURE DE VIRTUALISATION AVEC DOCKER (2024)",
        description:
          "Restauration d’un ancien PC en mini data center avec ajout d’un SSD 1 To pour optimiser le stockage. Installation et configuration de Docker pour déployer plusieurs services conteneurisés (base de données, application web, serveur Minecraft). Mise en place d’une configuration réseau permettant l’accès local et distant aux services (ports, redirections, sécurisation de base).",
        tags: ["Docker", "Linux", "Réseau", "Virtualisation", "Stockage", "Services Web"],
        link: "https://dandy-cowbell-23a.notion.site/MISE-EN-PLACE-D-UNE-INFRASTRUCTURE-DE-VIRTUALISATION-AVEC-DOCKER-2f4beac706b7803e8856c15a7f8cccd5",
      },
      {
        id: 2,
        title: "APPLICATION EN PYTHON POUR DJ (OPEN SOURCE)",
        description:
          "Développement d’une application de bureau destinée aux DJ permettant de rechercher des musiques sur YouTube et de télécharger l’audio au format MP3. L’application propose une interface graphique simple et rapide, une recherche via l’API YouTube Data, ainsi qu’un téléchargement automatisé avec conversion MP3 grâce à yt-dlp et FFmpeg. L’utilisateur peut sélectionner le dossier de destination avant chaque téléchargement.",
        tags: ["Python", "Tkinter", "YouTube Data API", "yt-dlp", "FFmpeg", "Open Source"],
        link: "https://dandy-cowbell-23a.notion.site/APPLICATION-EN-PYTHON-POUR-DJ-OPEN-SOURCE-2f4beac706b780a9a2b8dbd0a2df8133",
        github: "https://github.com/anis-guechetouli/free-musique-DJ",
      },

]

export const btsSioInfo = {
  slam: {
    title: 'Solutions Logicielles et Applications Métiers (SLAM)',
    description: 'L\'option SLAM est orientée développement d\'applications et de solutions logicielles. Elle forme des développeurs capables de concevoir, développer et maintenir des applications.',
    matieres: [
      'Développement d\'applications',
      'Conception et développement d\'applications',
      'Maintenance applicative',
      'Gestion de projet',
      'Cybersécurité des services informatiques',
    ],
  },
  sisr: {
    title: 'Solutions d\'Infrastructure, Systèmes et Réseaux (SISR)',
    description: 'L\'option SISR est orientée administration et maintenance des infrastructures réseau. Elle forme des techniciens capables d\'installer, configurer et maintenir des équipements réseau.',
    matieres: [
      'Installation et maintenance des équipements',
      'Administration des systèmes et des réseaux',
      'Virtualisation des serveurs et des postes de travail',
      'Gestion de projet',
      'Cybersécurité des services informatiques',
    ],
  },
}
