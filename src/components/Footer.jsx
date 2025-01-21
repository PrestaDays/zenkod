import React from 'react';
import { Twitter, Linkedin, Instagram, Github, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Twitter, label: 'Twitter', href: '#' },
        { icon: Linkedin, label: 'LinkedIn', href: '#' },
        { icon: Instagram, label: 'Instagram', href: '#' },
        { icon: Github, label: 'GitHub', href: '#' }
    ];

    const services = ['Développement Web', 'Design UI/UX', 'Mobile Apps', 'Consulting'];
    const companyPages = [
        { label: 'À propos', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Presta Days</h2>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:translate-x-2">
                                <Mail size={16} />
                                <a href="mailto:zenkod@gmail.com" className="hover:text-white">
                                    zenkod@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:translate-x-2">
                                <ChevronRight size={16} />
                                <a href="/rgpd" className="hover:text-white">
                                    RGPD
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:translate-x-2">
                                <ChevronRight size={16} />
                                <a href="/mentions-legales" className="hover:text-white">
                                    Mentions légales
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Rest of the component stays the same */}
                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center group cursor-pointer">
                                    <ChevronRight
                                        size={16}
                                        className="transform transition-transform duration-300 group-hover:translate-x-2"
                                    />
                                    <span className="ml-2 transition-colors duration-300 group-hover:text-white">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Entreprise</h3>
                        <ul className="space-y-2">
                            {companyPages.map((item, index) => (
                                <li key={index} className="flex items-center group cursor-pointer">
                                    <ChevronRight
                                        size={16}
                                        className="transform transition-transform duration-300 group-hover:translate-x-2"
                                    />
                                    <span
                                        className="ml-2 transition-colors duration-300 group-hover:text-white"
                                        onClick={() => window.location.href = item.path}
                                    >
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Réseaux sociaux</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="transform transition-all duration-300 hover:scale-110 hover:text-white"
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Presta Days. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;