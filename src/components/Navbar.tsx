"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SparkleIcon, SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ["home", "projects", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Toggler logic
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Custom smooth scroll if we are on the homepage
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // offset for navbar height
        behavior: "smooth",
      });
      setActiveSection(targetId);
    } else {
      // Redirect to home page with hash
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logo} aria-label="Home">
        <span className={styles.logoIcon}>
          <SparkleIcon size={24} color="#7C5CFC" />
        </span>
        <span>Yuhanzee</span>
      </Link>

          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "home")}
                  className={`${styles.navLink} ${activeSection === "home" ? styles.navLinkActive : ""}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                  className={`${styles.navLink} ${activeSection === "projects" ? styles.navLinkActive : ""}`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "about")}
                  className={`${styles.navLink} ${activeSection === "about" ? styles.navLinkActive : ""}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, "skills")}
                  className={`${styles.navLink} ${activeSection === "skills" ? styles.navLinkActive : ""}`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className={`${styles.navLink} ${activeSection === "contact" ? styles.navLinkActive : ""}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.rightContainer}>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle visual theme"
              title="Toggle theme"
            >
              {mounted ? (
                theme === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} />
              ) : (
                <span style={{ width: 18, height: 18 }} />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className={styles.connectBtn}
            >
              Let&apos;s Connect <span style={{ marginLeft: 4 }}>&rarr;</span>
            </a>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <span className={styles.logoIcon}>
              <SparkleIcon size={22} />
            </span>
            Yuhanzee
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <CloseIcon size={24} />
          </button>
        </div>

        <ul className={styles.mobileLinks}>
          <li>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className={styles.mobileLink}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "projects")}
              className={styles.mobileLink}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className={styles.mobileLink}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleLinkClick(e, "skills")}
              className={styles.mobileLink}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className={styles.mobileLink}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.mobileFooter}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className={styles.connectBtn}
            style={{ display: "flex" }}
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </>
  );
};
