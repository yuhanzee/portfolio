import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRightIcon } from "./Icons";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/project/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          className={styles.image}
          width={600}
          height={400}
          priority={project.slug === "wedding-rsvp-app"}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.type}>{project.type}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.toolsContainer}>
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className={styles.toolBadge}>
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className={styles.toolBadge}>+{project.tools.length - 3}</span>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>View Case Study</span>
            <span className={styles.arrow}>
              <ArrowRightIcon size={16} />
            </span>
          </div>
          {project.githubUrl && (
            <span
              className={styles.githubIcon}
              title="View GitHub Repository"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.githubUrl, "_blank", "noopener,noreferrer");
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
