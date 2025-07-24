"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Drawer, Switch } from "antd";
import { MenuOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "./theme-provider";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About" },
    { key: "/projects", label: "Projects" },
    { key: "/contact", label: "Contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gradient-text">
            Piyawong Mahattanasawat
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.key}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  pathname === item.key
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <Switch
              checked={theme === "dark"}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              className="bg-gray-200"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Switch
              checked={theme === "dark"}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              size="small"
            />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700 dark:text-gray-300"
            >
              <MenuOutlined className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="md:hidden"
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.key}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                pathname === item.key
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </motion.nav>
  );
};

export default Navigation;
