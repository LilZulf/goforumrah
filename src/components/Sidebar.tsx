"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}

        >
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
        </motion.div>
    );
};

export default Sidebar;