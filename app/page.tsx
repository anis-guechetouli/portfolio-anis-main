'use client'

import {useState} from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import BlobBackground from '@/components/BlobBackground'
import FloatingActionButton from '@/components/FloatingActionButton'
import Section from '@/components/Section'
import {
    profile,
    parcoursEcole,
    parcoursProfessionnel,
    competences,
    plateforme,
    certifications,
    projets,
    btsSioInfo
} from '@/data/profile'
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Calendar,
    MapPin,
    Clock,
    Award,
    X
} from 'lucide-react'

export default function Home() {
    const [selectedImage, setSelectedImage] = useState < string | null > (null)

    return (
        <div className="flex min-h-screen w-full">
            <Sidebar/>
            <main className="flex-1 lg:ml-80 relative z-10 w-full">
                <BlobBackground/> {/* Section Accueil */}
                <Section id="accueil" className="flex items-center justify-center">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            <span className="text-white">{profile.firstName}
                            </span>
                            <span className="text-gradient">{profile.lastName}</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                            {profile.role}
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl glass border border-white/10 hover:border-accent/50 hover:text-accent transition-all flex items-center gap-2">
                                <Github size={20}/>
                                GitHub
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl glass border border-white/10 hover:border-accent/50 hover:text-accent transition-all flex items-center gap-2">
                                <Linkedin size={20}/>
                                LinkedIn
                            </a>

                            <a
                                href="https://dandy-cowbell-23a.notion.site/Espace-Projets-2f4beac706b78072b6fbd65566114f82"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors flex items-center gap-2">
                                <ExternalLink size={20}/>
                                Espace projets
                            </a>
                        </div>

                    </div>
                </Section>

                {/* Section Profil */}
                <Section id="profil">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-gradient">Profil</h2>
                        <div className="glass rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                                Présentation
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Passionné par l’informatique et la sécurité, je suis actuellement étudiant en
                                BTS SIO option SISR. J’aime comprendre comment les systèmes fonctionnent,
                                repérer les failles et renforcer les infrastructures. Mon objectif est de
                                devenir spécialiste en cybersécurité et de contribuer à protéger les réseaux et
                                les données face aux menaces actuelles.
                            </p>
                            <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                                Objectifs
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">•</span>
                                    <span>
                                        Me spécialiser en cybersécurité (réseaux, systèmes, défense)
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">•</span>
                                    <span>
                                        Renforcer mes compétences en administration Linux & Windows Servers
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">•</span>
                                    <span>
                                        Maîtriser les bases de la sécurité réseau (firewall, VPN, VLAN, segmentation)s
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">•</span>
                                    <span>
                                        Apprendre les bonnes pratiques : durcissement, sauvegardes, supervision et logs
                                    </span>
                                </li>
                            </ul>
                            <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                                Qualités
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {
                                    ['Curieux', 'Rigoureux', 'Autonome', 'Esprit d\'équipe', 'Sociable'].map(
                                        (quality) => (
                                            <span
                                                key={quality}
                                                className="px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/30">
                                                {quality}
                                            </span>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section Parcours scolaire */}
                <Section id="parcours-scolaire">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-4xl font-bold text-gradient">Parcours scolaire</h2>

                            <a
                                href="https://dandy-cowbell-23a.notion.site/Projets-acad-miques-TP-Productions-Projets-r-seaux-2f4beac706b7802ba7dcf3fcdc922060"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-xl bg-accent/20 text-accent border border-accent/30 text-sm font-semibold hover:bg-accent/30 transition-colors flex items-center gap-2">
                                Projets académiques
                                <ExternalLink size={16}/>
                            </a>
                        </div>

                        <div className="glass rounded-2xl p-8 border border-white/10">
                            <div className="relative">
                                <div
                                    className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent"/>

                                <div className="space-y-6 pl-12">
                                    {
                                        parcoursEcole.map((item, index) => (
                                            <div key={index} className="relative">
                                                <div
                                                    className="absolute -left-6 w-4 h-4 rounded-full bg-accent border-4 border-dark-bg"/>

                                                <div className="mb-6">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-accent font-bold text-lg">
                                                            {item.year}
                                                        </span>

                                                        <h4 className="text-lg font-semibold text-white">
                                                            {item.title}
                                                        </h4>
                                                    </div>

                                                    <p className="text-gray-300 mb-2 text-sm whitespace-pre-line leading-relaxed">
                                                        {item.description}
                                                    </p>

                                                    <div className="flex items-center gap-1 text-sm text-gray-400">
                                                        <MapPin size={14}/> {item.location}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section Parcours pro */}
                <Section id="parcours-pro">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-4xl font-bold text-gradient">Parcours pro</h2>

                            <a
                                href="https://dandy-cowbell-23a.notion.site/R-alisations-en-entreprise-missions-support-audits-d-ploiements-2f4beac706b78097b05ae2c0e1b81f15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-xl bg-accent/20 text-accent border border-accent/30 text-sm font-semibold hover:bg-accent/30 transition-colors flex items-center gap-2">
                                Projets pro
                                <ExternalLink size={16}/>
                            </a>
                        </div>

                        <div className="glass rounded-2xl p-8 border border-white/10">
                            <div className="relative">
                                <div
                                    className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent"/>

                                <div className="space-y-6 pl-12">
                                    {
                                        parcoursProfessionnel.map((item, index) => (
                                            <div key={index} className="relative">
                                                <div
                                                    className="absolute -left-6 w-4 h-4 rounded-full bg-accent border-4 border-dark-bg"/>

                                                <div className="mb-6">
                                                    <div className="flex items-center justify-between gap-3 mb-2">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-accent font-bold text-lg">
                                                                {item.year}
                                                            </span>
                                                            <h4 className="text-lg font-semibold text-white">
                                                                {item.title}
                                                            </h4>
                                                        </div>

                                                        {
                                                            item.link && (
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="px-3 py-1 rounded-lg bg-accent/20 text-accent border border-accent/30 text-xs font-semibold hover:bg-accent/30 transition-colors flex items-center gap-2">
                                                                    Voir
                                                                    <ExternalLink size={14}/>
                                                                </a>
                                                            )
                                                        }
                                                    </div>

                                                    <p className="text-gray-300 mb-2 text-sm whitespace-pre-line leading-relaxed">
                                                        {item.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={14}/> {item.location}
                                                        </span>

                                                        {
                                                            item.duration && (
                                                                <span className="flex items-center gap-1">
                                                                    <Clock size={14}/> {item.duration}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section Compétences */}
                <Section id="competences">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-gradient">
                            Compétences
                        </h2>

                        {/* Développement */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-white mb-6">Développement</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    competences
                                        .developpement
                                        .map((competence, index) => (
                                            <div
                                                key={index}
                                                className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all">
                                                <h4 className="text-lg font-semibold text-white text-center">
                                                    {competence.name}
                                                </h4>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>

                        {/* Outils de développement */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-white mb-6">Outils de développement</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    competences
                                        .outilsDeveloppement
                                        .map((competence, index) => (
                                            <div
                                                key={index}
                                                className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all">
                                                <h4 className="text-lg font-semibold text-white text-center">
                                                    {competence.name}
                                                </h4>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>

                        {/* Outils en cybersécurité */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-white mb-6">Outils en cybersécurité</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    competences
                                        .outilsCybersecurite
                                        .map((competence, index) => (
                                            <div
                                                key={index}
                                                className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all">
                                                <h4 className="text-lg font-semibold text-white text-center">
                                                    {competence.name}
                                                </h4>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>

                        {/* Autres outils */}
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">Autres outils</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    competences
                                        .autresOutils
                                        .map((competence, index) => (
                                            <div
                                                key={index}
                                                className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all">
                                                <h4 className="text-lg font-semibold text-white text-center">
                                                    {competence.name}
                                                </h4>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </Section>
                {/* Section Certifications */}
                <Section id="certifications">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-gradient">
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all group">
                                        {
                                            cert.image && (
                                                <button
                                                    onClick={() => setSelectedImage(cert.image !)}
                                                    className="mb-4 rounded-xl overflow-hidden bg-white/5 relative h-48 w-full cursor-pointer group/image">
                                                    <Image
                                                        src={cert.image}
                                                        alt={cert.name}
                                                        fill
                                                        className="object-cover group-hover/image:scale-105 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                                    <div
                                                        className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center">
                                                        <span
                                                            className="opacity-0 group-hover/image:opacity-100 text-white text-sm font-medium transition-opacity">
                                                            Cliquer pour agrandir
                                                        </span>
                                                    </div>
                                                </button>
                                            )
                                        }
                                        <div className="flex items-center gap-3 mb-4">
                                            <Award className="text-accent" size={32}/>
                                            <div>
                                                <h3
                                                    className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-sm text-gray-400">{cert.issuer}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400 flex items-center gap-1">
                                                <Calendar size={14}/> {cert.date}
                                            </span>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-accent hover:text-accent-light transition-colors">
                                                <ExternalLink size={16}/>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Section>

                {/* Section Plateforme d'entraînement */
                }
                <Section id="plateforme">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold mb-8 text-gradient">
                                {plateforme.title}
                            </h2>

                            <div className="glass rounded-2xl p-8 border border-white/10 mb-6">
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    {plateforme.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Objectifs</h3>
                                        <ul className="space-y-2">
                                            {
                                                plateforme
                                                    .objectifs
                                                    .map((objectif, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                                            <span className="text-accent mt-1">▸</span>
                                                            <span>{objectif}</span>
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités</h3>
                                        <ul className="space-y-2">
                                            {
                                                plateforme
                                                    .fonctionnalites
                                                    .map((fonctionnalite, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                                            <span className="text-accent mt-1">▸</span>
                                                            <span>{fonctionnalite}</span>
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">Technologies utilisées</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {
                                            plateforme
                                                .technologies
                                                .map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/30">
                                                        {tech}
                                                    </span>
                                                ))
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Plateformes</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {
                                            plateforme
                                                .platforms
                                                .map((platform, index) => (
                                                    <a
                                                        key={index}
                                                        href={platform.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="glass rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group">
                                                        <h4
                                                            className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                                                            {platform.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-400 mb-2">{platform.description}</p>
                                                        <span className="text-sm text-accent font-medium">{platform.level}</span>
                                                    </a>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Section Projets */
                }
                <Section id="projets">
                        <div className="max-w-6xl mx-auto">
                            {/* Titre + bouton */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-4xl font-bold text-gradient">Projets</h2>

                                <a
                                    href="https://dandy-cowbell-23a.notion.site/Espace-Projets-2f4beac706b78072b6fbd65566114f82"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-accent/20 text-accent border border-accent/30 text-sm font-semibold hover:bg-accent/30 transition-colors flex items-center gap-2">
                                    Espace projets
                                    <ExternalLink size={16}/>
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    projets.map((projet) => (
                                        <div
                                            key={projet.id}
                                            className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all group">
                                            <h3
                                                className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                                                {projet.title}
                                            </h3>

                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {projet.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {
                                                    projet
                                                        .tags
                                                        .map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-3 py-1 rounded-lg bg-accent/20 text-accent text-sm border border-accent/30">
                                                                {tag}
                                                            </span>
                                                        ))
                                                }
                                            </div>

                                            <div className="flex gap-3">
                                                <a
                                                    href={projet.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-lg bg-accent text-dark-bg font-semibold hover:bg-accent-light transition-colors flex items-center gap-2">
                                                    Voir
                                                    <ExternalLink size={16}/>
                                                </a>

                                                <a
                                                    href={projet.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-lg glass border border-white/10 hover:border-accent/50 hover:text-accent transition-all flex items-center gap-2">
                                                    <Github size={16}/>
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Section>

                    <Section id="contact">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-8 text-gradient">Contact</h2>
                            <div className="glass rounded-2xl p-8 border border-white/10">
                                <form
                                    className="space-y-6"
                                    action={`mailto:${profile.email}`}
                                    method="POST"
                                    encType="text/plain">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                                            placeholder="Votre nom"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                                            placeholder="votre.email@example.com"/>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                                            placeholder="Votre message..."/>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 rounded-xl bg-accent text-dark-bg font-semibold hover:bg-accent-light transition-colors glow-accent-hover">
                                        Envoyer
                                    </button>
                                </form>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <a
                                            href={`mailto:${profile.email}?subject=${encodeURIComponent("Contact depuis le portfolio")}`}
                                            className="w-full px-6 py-3 rounded-xl bg-accent text-dark-bg font-semibold hover:bg-accent-light transition-colors glow-accent-hover text-center block">
                                            <Mail size={20}/> {profile.email}
                                        </a>
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                                            <Github size={20}/>
                                            GitHub
                                        </a>
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                                            <Linkedin size={20}/>
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </main>
                <FloatingActionButton/>

                    {/* Modal pour les images de certifications */
                } {
                    selectedImage && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                            onClick={() => setSelectedImage(null)}>
                            <div className="relative max-w-4xl w-full max-h-[90vh]">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
                                    aria-label="Fermer">
                                    <X size={32}/>
                                </button>
                                <div
                                    className="relative w-full h-full rounded-xl overflow-hidden bg-white/5 border border-white/20">
                                    <Image
                                        src={selectedImage}
                                        alt="Certification"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain"
                                        sizes="90vw"/>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
    )
}
