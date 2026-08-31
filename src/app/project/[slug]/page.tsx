"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, Project } from "@/features/projects/data/projects";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  BriefcaseIcon,
  AwardIcon,
  CheckmarkIcon,
  LightBulbIcon,
} from "@/shared/components/Icons";
import styles from "./page.module.css";

// Next.js params type
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  // Unwrap params using React.use()
  const { slug } = use(params);
  const [liked, setLiked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedWireframe, setSelectedWireframe] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    // If project is not found, render fallback
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1>Project Not Found</h1>
        <p style={{ margin: "20px 0" }}>The project you are looking for does not exist.</p>
        <Link href="/" style={{ color: "var(--primary)", fontWeight: "bold" }}>
          Back to Home
        </Link>
      </div>
    );
  }

  // Fallback research stats if chartData is missing
  const defaultChartData = [
    { name: "Usability Score", value: 45, color: "#7E5CAD" },
    { name: "Task Efficiency", value: 35, color: "#E66C97" },
    { name: "User Satisfaction", value: 20, color: "#958CAE" },
  ];

  const chartSegments = project.caseStudy?.userResearch.chartData || defaultChartData;

  // Donut chart math: radius = 50, circumference = 2 * pi * r = 314.16
  const r = 50;
  const circ = 2 * Math.PI * r; // ~314.16
  let accumulatedPercent = 0;

  return (
    <div className="fade-in" style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className={styles.container}>
        {/* TOP BAR */}
        <div className={styles.topBar}>
          <Link href="/" className={styles.backLink}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
              <ArrowRightIcon size={16} />
            </span>
            Back to Projects
          </Link>

          <button
            onClick={() => setLiked(!liked)}
            className={`${styles.heartBtn} ${liked ? styles.heartActive : ""}`}
            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
            title="Favorite"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>
            {project.category} &bull; {project.type}
          </p>
        </div>

        {/* STATS SUMMARY GRID */}
        <div className={styles.statsGrid}>
         <div className={styles.statCard}>
  <div className={styles.statLabelGroup}>
    <CalendarIcon size={14} />
    <span className={styles.statLabel}>Duration</span>
  </div>
  <span className={styles.statValue}>{project.duration}</span>
</div>

          <div className={styles.statCard}>
            <div className={styles.statLabelGroup}>
              <BriefcaseIcon size={14} />
              <span className={styles.statLabel}>Role</span>
            </div>
            <span className={styles.statValue}>{project.role || "Designer & Dev"}</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statLabelGroup}>
              <AwardIcon size={14} />
              <span className={styles.statLabel}>Tools</span>
            </div>
            <span className={styles.statValue}>{project.tools.slice(0, 2).join(", ")}</span>
          </div>

         <div className={styles.statCard}>
  <div className={styles.statLabelGroup}>
    <CalendarIcon size={14} />
    <span className={styles.statLabel}>Duration</span>
  </div>
  <span className={styles.statValue}>{project.duration}</span>
</div>
</div>
        {/* MAIN MOCKUP BANNER */}
        <div className={styles.bannerWrapper}>
          <Image
            src={project.image}
            alt={`${project.title} Banner Mockup`}
            fill
            className={styles.bannerImage}
            priority
          />
        </div>

        {/* CASE STUDY TIMELINE */}
        {project.caseStudy ? (
          <div className={styles.timeline}>
            {/* 01 THE PROBLEM */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>The Problem</h3>
                <p className={styles.text}>{project.caseStudy.problem}</p>
              </div>
            </div>

            {/* 02 THE GOAL */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>The Goal</h3>
                <p className={styles.text}>{project.caseStudy.goal}</p>
              </div>
            </div>

            {/* 03 USER RESEARCH */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>User Research</h3>
                <p className={styles.text}>{project.caseStudy.userResearch.intro}</p>

                <div className={styles.chartContainer}>
                  {/* Donut Chart SVG */}
                  <div className={styles.chartVisual}>
                    <svg width="150" height="150" viewBox="0 0 120 120">
                      {chartSegments.map((segment, idx) => {
                        const strokeDashoffset = circ - (segment.value / 100) * circ;
                        const rotationAngle = -90 + (accumulatedPercent * 360) / 100;
                        accumulatedPercent += segment.value;

                        return (
                          <circle
                            key={idx}
                            cx="60"
                            cy="60"
                            r={r}
                            fill="transparent"
                            stroke={segment.color}
                            strokeWidth="12"
                            strokeDasharray={circ}
                            strokeDashoffset={strokeDashoffset}
                            transform={`rotate(${rotationAngle} 60 60)`}
                            style={{
                              transition: "stroke-dashoffset 0.8s ease-out",
                            }}
                          />
                        );
                      })}
                    </svg>
                    <div className={styles.chartCenterLabel}>
                      <span className={styles.chartCenterNum}>100%</span>
                      <span className={styles.chartCenterText}>Focus</span>
                    </div>
                  </div>

                  {/* Legend list */}
                  <div className={styles.chartLegend}>
                    {chartSegments.map((segment, idx) => (
                      <div key={idx} className={styles.legendItem}>
                        <div className={styles.legendLeft}>
                          <span
                            className={styles.legendDot}
                            style={{ backgroundColor: segment.color }}
                          />
                          <span>{segment.name}</span>
                        </div>
                        <span className={styles.legendVal}>{segment.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    listStyle: "none",
                  }}
                >
                  {project.caseStudy.userResearch.points.map((point, idx) => (
                    <li
                      key={idx}
                      className={styles.text}
                      style={{ display: "flex", gap: "10px", alignItems: "center" }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--primary)",
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 04 USER PERSONA */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>04</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>User Persona</h3>
                <div className={styles.personaCard}>
                  <div className={styles.personaLeft}>
                    <div className={styles.personaAvatar}>
                      <Image
                        src={project.caseStudy.userPersona.image}
                        alt={project.caseStudy.userPersona.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.personaName}>{project.caseStudy.userPersona.name}</div>
                    <div className={styles.personaMeta}>
                      Age: {project.caseStudy.userPersona.age} &bull; {project.caseStudy.userPersona.role}
                    </div>
                    <p className={styles.personaBio}>
                      &ldquo;{project.caseStudy.userPersona.bio}&rdquo;
                    </p>
                  </div>

                  <div className={styles.personaRight}>
                    <div className={styles.personaCol}>
                      <h4 className={styles.personaListTitle}>Goals</h4>
                      <ul className={styles.personaList}>
                        {project.caseStudy.userPersona.goals.map((g, idx) => (
                          <li key={idx} className={styles.personaItem}>
                            <span className={styles.personaCheck}>&bull;</span>
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.personaCol}>
                      <h4 className={styles.personaListTitle}>Frustrations</h4>
                      <ul className={styles.personaList}>
                        {project.caseStudy.userPersona.frustrations.map((f, idx) => (
                          <li key={idx} className={styles.personaItem}>
                            <span className={styles.personaCross}>&times;</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 USER FLOW */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>05</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>User Flow</h3>
                <div className={styles.flowContainer}>
                  {project.caseStudy.userFlow.map((flowStep, idx) => (
                    <React.Fragment key={idx}>
                      <div className={styles.flowCard}>
                        <span className={styles.flowNum}>{idx + 1}</span>
                        {flowStep}
                      </div>
                      {idx < project.caseStudy!.userFlow.length - 1 && (
                        <span className={styles.flowArrow}>
                          <ArrowRightIcon size={14} />
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* 06 WIREFRAMES */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>06</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Wireframes</h3>
                <p className={styles.text}>
                  {project.caseStudy.wireframesIntro ||
                    "Initial hand-drawn sketches and gray-box layout prototypes were mapped to resolve information structure."}
                </p>
                {project.caseStudy.wireframes && project.caseStudy.wireframes.length > 0 ? (
                  <div className={styles.designGrid}>
                    {project.caseStudy.wireframes.map((wf, idx) => (
                      <div 
                        key={idx} 
                        className={styles.designBlock} 
                        style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                        onClick={() => setSelectedWireframe(wf)}
                      >
                        <Image src={wf} alt={`Wireframe ${idx + 1}`} width={800} height={600} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.designGrid}>
                    <div className={styles.designBlock}>
                      <div className="grid-dots" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
                      <span className={styles.designWatermark}>Low-Fi Layout</span>
                    </div>
                    <div className={styles.designBlock}>
                      <div className="grid-dots" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
                      <span className={styles.designWatermark}>Wireframe Grid</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 07 FINAL DESIGN */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>07</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Final Design</h3>
                <p className={styles.text}>
                  {project.caseStudy.finalDesignIntro ||
                    "The high-fidelity final interface utilizes components from the design system, applying typography scales and contrast ratios."}
                </p>
                <div
                  className={styles.bannerWrapper}
                  style={{ marginTop: "24px", marginBottom: "0", paddingTop: "50%" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} Final High Fidelity Showcase`}
                    fill
                    className={styles.bannerImage}
                  />
                </div>
              </div>
            </div>

            {/* 08 PROTOTYPE & ASSETS */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>08</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Project Assets &amp; Prototype</h3>
                <div className={styles.protoCard}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary)" }}>
                    Explore the Project Assets
                  </h4>
                  <p className={styles.text} style={{ maxWidth: "480px" }}>
                    Access the source code repository, review design sheets, or interact directly with the high-fidelity prototype.
                  </p>
                  
                  <div className={styles.btnGroup}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.protoBtn}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "4px" }}
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View Source Code
                      </a>
                    )}

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.protoBtn}
                        style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "4px" }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          <path d="M2 12h20" />
                        </svg>
                        Explore Figma File
                      </a>
                    )}

                    {project.caseStudy.prototypeUrl && !project.figmaUrl && !project.githubUrl && (
                      <a
                        href={project.caseStudy.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.protoBtn}
                      >
                        Interact with Prototype
                        <ArrowRightIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 09 WHAT I LEARNED */}
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>09</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>What I Learned</h3>
                <div className={styles.learnBox}>
                  <span className={styles.learnIcon}>
                    <LightBulbIcon size={24} />
                  </span>
                  <p className={styles.learnText}>{project.caseStudy.whatILearned}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: "40px 0", textAlign: "center" }}>
            <p className={styles.text}>Case study detailed content is being compiled for this project.</p>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedWireframe && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedWireframe(null)}
        >
          <div 
            style={{ position: 'relative', width: '100%', maxWidth: '1200px', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWireframe(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '32px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <Image 
              src={selectedWireframe} 
              alt="Full Wireframe" 
              width={1200}
              height={900}
              style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
