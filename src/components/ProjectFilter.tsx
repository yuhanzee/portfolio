"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ProjectFilter.module.css";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    width: 0,
    transform: "translateX(0px)",
  });
  const tabsRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = categories.indexOf(activeCategory);
    const activeButton = buttonRefs.current[activeIndex];

    if (activeButton && tabsRef.current) {
      const activeRect = activeButton.getBoundingClientRect();
      const parentRect = tabsRef.current.getBoundingClientRect();
      
      const leftOffset = activeRect.left - parentRect.left;
      
      setIndicatorStyle({
        width: activeRect.width,
        transform: `translateX(${leftOffset}px)`,
      });
    }
  }, [activeCategory, categories]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = categories.indexOf(activeCategory);
      const activeButton = buttonRefs.current[activeIndex];

      if (activeButton && tabsRef.current) {
        const activeRect = activeButton.getBoundingClientRect();
        const parentRect = tabsRef.current.getBoundingClientRect();
        const leftOffset = activeRect.left - parentRect.left;
        
        setIndicatorStyle({
          width: activeRect.width,
          transform: `translateX(${leftOffset}px)`,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory, categories]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.tabsWrapper} ref={tabsRef}>
        <div
          className={styles.indicator}
          style={indicatorStyle}
        />
        {categories.map((category, idx) => (
          <button
            key={category}
            ref={(el) => {
              buttonRefs.current[idx] = el;
            }}
            onClick={() => onCategoryChange(category)}
            className={`${styles.tabBtn} ${
              activeCategory === category ? styles.tabBtnActive : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
