import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", key: "home", sectionId: "home" },
        { label: "About Me", key: "about", sectionId: "about" },
        { label: "Blogs", key: "blog", sectionId: "blog" },
        { label: "Projects", key: "projects", sectionId: "projects" },
        { label: "Work Experience", key: "work", sectionId: "work" },
        { label: "Contact Info", key: "contact", sectionId: "contact" },
    ];

    return (
        <div className="fixed top-5 right-5 z-50">
            <motion.button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white shadow-lg"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="absolute top-0 right-0 mt-14 w-48 bg-gray-900 text-white shadow-lg rounded-lg p-4"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.key}
                                href={`#${item.sectionId}`}
                                className="block px-4 py-2 text-sm font-medium bg-gray-800 rounded-lg mb-2 last:mb-0 hover:bg-gray-700 transition"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;
