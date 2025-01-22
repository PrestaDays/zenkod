import React from 'react';
import { motion } from "framer-motion";

export const Content = () => {
    return (
        <div className="relative z-10 text-center px-4 sm:px-8">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-8xl font-bold text-gray-800 mb-4"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 mb-8"
            >
                Oops! Page not found.
            </motion.p>

            <motion.a
                href="/"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-[#D57A66] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c56e5b] transition-colors duration-300"
            >
                Retour à l'accueil
            </motion.a>
        </div>
    );
};