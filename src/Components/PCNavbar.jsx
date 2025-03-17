import '../index.css';
const Navbar = () => {
    const navItems = [
        { label: 'Home', key: 'home', sectionId: 'home' },
        { label: 'About Me', key: 'about', sectionId: 'about' },
        { label: 'Blogs', key: 'blog', sectionId: 'blog' },
        { label: 'Projects', key: 'projects', sectionId: 'projects' },
        { label: 'Work Experience', key: 'work', sectionId: 'work' },
        { label: 'Contact Info', key: 'contact', sectionId: 'contact' },
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const start = window.scrollY;
            const end = section.offsetTop;
            const distance = end - start;
            const duration = 750;

            let startTime = null;

            const scroll = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const scrollAmount =
                    Math.min(progress / duration, 1) * distance;
                window.scrollTo(0, start + scrollAmount);
                if (progress < duration) {
                    requestAnimationFrame(scroll);
                }
            };

            requestAnimationFrame(scroll);
        }
    };

    return (
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-1 bg-[#0A0A0E] rounded-md z-50 fade-in">
            <ul className="flex justify-center opacity-95 max-w-[80vw]">
                {navItems.map((item) => (
                    <li key={item.key} className="font-medium">
                        <button
                            onClick={() => scrollToSection(item.sectionId)}
                            className="text-white px-6 py-3 hover:cursor-none"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
