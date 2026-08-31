"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/shared/components/Navbar";
import { ProjectFilter } from "@/features/projects/components/ProjectFilter";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { projectsData } from "@/features/projects/data/projects";
import {
  DownloadIcon,
  ArrowRightIcon,
  LinkedInIcon,
  BehanceIcon,
  MailIcon,
  GithubIcon,
  FigmaLogo,
  ReactLogo,
  NextjsLogo,
  NodejsLogo,
} from "@/shared/components/Icons";
import {
  OvalScribble,
  UnderlineScribble,
  SparkleDoodle,
  ArrowDoodle,
  SpiralSwirlDoodle,
  CurlyBracketDoodle,
  SmileyDoodle,
  HeartDoodle,
  LotusDoodle,
  MugDoodle,
  SwanDoodle,
  PawDoodle,
  RainCloudDoodle,
  PurpleBrushDoodle,
  ForestDoodle,
  PaperPlaneLeftDoodle,
  PaperPlaneRightDoodle,
  CreativeWorkRays,
  YellowWaveUnderline,
  HelloRays,
  StarOutlineDoodle,
  YellowCurvedArrow,
  MusicNoteDoodle,
} from "@/shared/components/Scribbles";
import styles from "./page.module.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "UI/UX Design", "Development"];

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* HERO BANNER SECTION */}
        <section id="home" className={styles.topBanner}>
          <div className={`${styles.topBannerHeader} container`}>
            <span>2026</span>
            <span>YUHANSI PATHIRAJA</span>
          </div>

          <div className={styles.topBannerTitleContainer}>
            {/* Paper plane left */}
            <div className={styles.paperPlaneLeft}>
              <PaperPlaneLeftDoodle color="#A78BFA" width={140} height={100} />
            </div>

            {/* Star doodle top left of P */}
            <div className={styles.starTopLeft}>
              <StarOutlineDoodle color="#FACC15" width={32} height={32} />
            </div>

            <h1 className={styles.topBannerTitle}>
              Portfolio
            </h1>

            {/* Creative Work badge top right */}
            <div className={styles.creativeWorkBadge}>
              <div className={styles.creativeWorkRays}>
                <CreativeWorkRays color="#FACC15" width={40} height={20} />
              </div>
              <span className={styles.creativeWorkText}>Creative Work</span>
              <div className={styles.creativeWorkLine}>
                <UnderlineScribble color="#FACC15" strokeWidth={3} />
              </div>
            </div>

            {/* Small purple star bottom right */}
            <div className={styles.starBottomRight}>
              <SparkleDoodle color="#A78BFA" width={28} height={28} />
            </div>

            {/* Paper plane right */}
            <div className={styles.paperPlaneRight}>
              <PaperPlaneRightDoodle color="#8B5CF6" width={140} height={100} />
            </div>
          </div>

          <div className={styles.subtitleWrapper}>
            <span className={styles.subtitleText}>UI/UX &amp; Frontend Developer</span>
            <div className={styles.yellowWaveUnderline}>
              <YellowWaveUnderline color="#FACC15" strokeWidth={3.5} />
            </div>
          </div>

          {/* Smooth SVG Wave Divider into white section */}
          <div className={styles.heroWaveDivider}>
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
              <path
                d="M0 30 C360 110 720 0 1080 50 C1260 85 1380 45 1440 30 L1440 120 L0 120 Z"
                fill="var(--hero-wave)"
              />
            </svg>
          </div>
        </section>

        {/* HELLO / INTRODUCTION SECTION */}
        <section className={styles.helloSection}>
          {/* Corner dot grids */}
          <div className={styles.dotsBottomLeft} />
          <div className={styles.dotsBottomRight} />

          <div className={`${styles.helloGrid} container`}>
            {/* Left intro text */}
            <div className={styles.helloLeft}>
              <div className={styles.helloGreetingWrap}>
                <div className={styles.helloRays}>
                  <HelloRays color="#8B5CF6" width={28} height={24} />
                </div>
                <h2 className={styles.helloGreeting}>Hello,</h2>
                <div className={styles.helloStar}>
                  <StarOutlineDoodle color="#FACC15" width={22} height={22} />
                </div>
              </div>
              
              <p className={styles.helloText}>
                As a Software Engineering Undergraduate based in Sri Lanka, I get to turn
                ideas into meaningful digital experiences. I enjoy building clean,
                user-friendly interfaces and scalable web applications.
              </p>

              {/* 3 Pill Cards */}
              <div className={styles.pillCardsRow}>
                <div className={styles.pillCard}>
                  <div className={styles.pillIconBg}>
                    {/* Lightbulb */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <div className={styles.pillContent}>
                    <span className={styles.pillTitle}>creative</span>
                    <span className={styles.pillSubtitle}>I love turning ideas into reality.</span>
                  </div>
                </div>

                <div className={styles.pillCard}>
                  <div className={styles.pillIconBg}>
                    {/* </> Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className={styles.pillContent}>
                    <span className={styles.pillTitle}>problem solver</span>
                    <span className={styles.pillSubtitle}>I enjoy solving problems with code.</span>
                  </div>
                </div>

                <div className={styles.pillCard}>
                  <div className={styles.pillIconBg}>
                    {/* Rocket Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                    </svg>
                  </div>
                  <div className={styles.pillContent}>
                    <span className={styles.pillTitle}>detail-oriented</span>
                    <span className={styles.pillSubtitle}>I focus on quality and precision.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right portrait circle */}
            <div className={styles.helloRight}>
              <div className={styles.portraitContainer}>
                {/* Detail oriented floating tag & arrow top right */}
                <div className={styles.detailTagWrap}>
                  <span className={styles.detailTagText}>detail-oriented 💡</span>
                  <div className={styles.detailArrow}>
                    <YellowCurvedArrow color="#FACC15" width={35} height={40} />
                  </div>
                </div>

                {/* Main circular frame */}
                <div className={styles.circleFrame}>
                  {/* Outer Purple Arc Line */}
                  <div className={styles.outerArcRing} />
                  {/* Dashed outer ring */}
                  <div className={styles.dashedOuterRing} />

                  <div className={styles.avatarInnerCircle}>
                    <Image
                      src="/avatar.png"
                      alt="Yuhansi Pathiraja"
                      width={280}
                      height={280}
                      priority
                      className={styles.portraitAvatar}
                    />
                  </div>
                </div>

                {/* Creative tag bottom left */}
                <div className={styles.creativeTagBottom}>
                  creative <span style={{ color: "#FACC15", marginLeft: 2 }}>★</span>
                </div>

                {/* 3 purple dashes bottom right */}
                <div className={styles.purpleDashesBottom}>
                  <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
                    <path d="M6 24 L12 6 M14 24 L20 6 M22 24 L28 6" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS MARQUEE BANNER */}
        <section className={styles.toolsSection}>
          <div className="marquee-container">
            <div className="marquee-content">
              <div className={styles.toolItem}>
                <FigmaLogo size={18} />
                Figma
              </div>

              <div className={styles.toolItem}>
                <ReactLogo size={18} />
                React
              </div>

              <div className={styles.toolItem}>
                <NextjsLogo
                  size={18}
                  style={{ color: "var(--text-primary)" }}
                />
                Next.js
              </div>

              <div className={styles.toolItem}>
                <NodejsLogo size={18} />
                Node.js
              </div>

              <div className={styles.toolItem}>
                Express
              </div>

              <div className={styles.toolItem}>
                Tailwind CSS
              </div>

              <div className={styles.toolItem}>
                TypeScript
              </div>

              <div className={styles.toolItem}>
                MongoDB
              </div>

              {/* Duplicate items for continuous marquee */}
              <div className={styles.toolItem}>
                <FigmaLogo size={18} />
                Figma
              </div>

              <div className={styles.toolItem}>
                <ReactLogo size={18} />
                React
              </div>

              <div className={styles.toolItem}>
                <NextjsLogo
                  size={18}
                  style={{ color: "var(--text-primary)" }}
                />
                Next.js
              </div>

              <div className={styles.toolItem}>
                <NodejsLogo size={18} />
                Node.js
              </div>

              <div className={styles.toolItem}>
                Express
              </div>

              <div className={styles.toolItem}>
                Tailwind CSS
              </div>

              <div className={styles.toolItem}>
                TypeScript
              </div>

              <div className={styles.toolItem}>
                MongoDB
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (Screenshot 4) */}
        <section id="projects" className={styles.projectsSection}>
          <div className="container">
            <div className={styles.projectsHeader}>
              <div className={styles.projectsTitleGroup}>
                <span className={styles.sectionSubtitle}>Featured Work</span>
                <h2 className={styles.sectionTitle} style={{ color: "#FFFDF6" }}>
                  Projects.
                </h2>
                <div className={styles.projectsSubtitleHandwritten}>
                  My full case studies are available below!
                  <span className={styles.smileyDoodle}>
                    <SmileyDoodle color="var(--accent)" strokeWidth={3} />
                  </span>
                </div>
              </div>

              <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT ME & PHILOSOPHY SECTION */}
<section id="about" className={styles.about}>
          <div className={`${styles.aboutGrid} container`}>
            {/* About traits */}
            <div>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionSubtitle}>Get to know me</span>
                <h2 className={styles.aboutHeading}>About Me</h2>
              </div>
              <p className={styles.aboutText}>
                I’m currently pursuing a BSc (Hons) in Information Technology – Software Engineering at Sri Lanka Institute of Information Technology (SLIIT), Malabe. As an aspiring UI/UX Designer with hands-on experience in web development, I enjoy creating digital experiences that are both intuitive and visually engaging.
                I love combining thoughtful design with clean, purposeful development to build interfaces that not only look beautiful but also solve real user problems. With experience in the MERN stack, I enjoy bringing ideas from wireframes to fully functional applications while continuously exploring new trends in design and technology.
                I’m always eager to learn, embrace new challenges, and create products that leave a meaningful impact on the people who use them.

              </p>

              <div className={styles.traitsList}>
                <div className={styles.traitItem}>
                  <span className={styles.traitCheck}>✓</span>
                  Currently Pursuing: BSc (Hons) in Information Technology – Software Engineering
                  Sri Lanka Institute of Information Technology (SLIIT), Malabe
                </div>
                <div className={styles.traitItem}>
                  <span className={styles.traitCheck}>✓</span>
                  Aspiring UI/UX Designer: Passionate about designing intuitive, user-centered digital experiences that balance creativity with usability.
                </div>
                <div className={styles.traitItem}>
                  <span className={styles.traitCheck}>✓</span>
                  Full-Stack Web Developer: Building responsive web applications using the MERN stack and modern web technologies.
                </div>
              </div>

              <div className={styles.aboutButtons}>
  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        window.scrollTo({
          top: contactEl.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }}
    className="sketchy-btn"
  >
    Let&apos;s Connect
  </a>

  <a
    href="/cv/Yuhansi-Pathiraja-CV.pdf"
    download
    className={styles.cvScrapbookBtn}
  >
    Download CV
  </a>
</div>
</div>
           {/* Right side CV QR Code card */}
            <div className={styles.cvCard}>
           <div className={styles.philosophyBox}>

              <div className={styles.philosophyHeading}>
                <span className={styles.philosophyArrow}>
                  <ArrowDoodle
                    direction="down-left"
                    color="var(--primary)"
                    strokeWidth={2}
                  />
                </span>
                
                <span className={styles.philosophyTitle}>
                  my philosophy!
                </span>
              </div>

              <p className={styles.philosophyQuote}>
                "I believe great digital experiences happen
                when thoughtful design meets clean,
                purposeful development. Every interface
                should feel intuitive, accessible,
                and meaningful."
              </p>
              
              <span className={styles.philosophySignature}>
                — Yuhansi ♡
              </span>

            </div>
              
            </div>
              {/* Languages Sub-section */}
              <div className={styles.languagesWrapper}>
                <h3 className={styles.languagesTitle}>Languages</h3>
                <div className={styles.languagesList}>
                  <div className={styles.langItem}>
                    <span className={styles.langLabel}>Native:</span>
                    <span className={styles.langValue}>Sinhala</span>
                  </div>
                  <div className={styles.langItem}>
                    <span className={styles.langLabel}>Others:</span>
                    <span className={styles.langValue}>English</span>
                  </div>
                </div>
              </div>
            </div>
          
        
        </section>

        {/* EXPERTISE / SKILLS SECTION */}
        <section id="skills" className={styles.skillsSection}>
          <div className="container">
            <div className={styles.sectionHeader} style={{ textAlign: "center" }}>
              <span className={styles.sectionSubtitle}>My Expertise</span>
              <h2 className={styles.sectionTitle}>
                Skills &amp; Toolkit
                <div className={styles.sectionTitleUnderline}>
                  <UnderlineScribble color="var(--primary)" strokeWidth={3} />
                </div>
              </h2>
            </div>

            <div className={styles.skillsGrid}>
              <div className={styles.skillsColumn}>
                <h3 className={styles.skillsColTitle}>UI/UX Design</h3>
                <div className={styles.skillsTags}>
                  <span className={styles.skillTag}>Figma</span>
                  <span className={styles.skillTag}>Wireframing</span>
                  <span className={styles.skillTag}>Prototyping</span>
                  <span className={styles.skillTag}>Design Systems</span>
                  <span className={styles.skillTag}>User Flows</span>
                  <span className={styles.skillTag}>Information Architecture</span>
                </div>
              </div>

              <div className={styles.skillsColumn}>
                <h3 className={styles.skillsColTitle}>Development</h3>
                <div className={styles.skillsTags}>
                  <span className={styles.skillTag}>React.js</span>
                  <span className={styles.skillTag}>Next.js</span>
                  <span className={styles.skillTag}>TypeScript</span>
                  <span className={styles.skillTag}>JavaScript</span>
                  <span className={styles.skillTag}>HTML5 / CSS3</span>
                  <span className={styles.skillTag}>Tailwind CSS</span>
                  <span className={styles.skillTag}>Node.js</span>
                  <span className={styles.skillTag}>Express.js</span>
                  <span className={styles.skillTag}>REST APIs</span>
                  <span className={styles.skillTag}>MongoDB</span>
                  <span className={styles.skillTag}>MySQL</span>
                  <span className={styles.skillTag}>Git / GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FUN FACTS SECTION */}
        {/* <section id="fun-facts" className={styles.funFactsSection}>
          <div className={styles.funFactsInner}>
            {/* Left: Instagram phone mockup */}
            {/* <div className={styles.phoneMockupWrap}>
              <SparkleDoodle className={styles.phoneFloatDoodle} color="var(--primary)" width={60} height={60} />
              <div className={styles.phoneMockup}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  {/* Instagram-style header */}
                  {/* <div className={styles.instaHeader}>
                    <div className={styles.instaAvatar}>🦢</div>
                    <div className={styles.instaInfo}>
                      <span className={styles.instaHandle}>@yuhansii</span>
                      <span className={styles.instaName}>Yuhansi Dinethma 🦢</span>
                    </div>
                  </div> */}
                  {/* <div className={styles.instaBio}>Que sera, sera ! 🪷</div>
                  {/* Photo grid */}
                  {/* <div className={styles.instaGrid}>
                    <div className={styles.instaCell}>🌺</div>
                    <div className={styles.instaCell}>🐱</div>
                    <div className={styles.instaCell}>🌹</div>
                    <div className={styles.instaCell}>🌿</div> 
                    <div className={styles.instaCell}>🌊</div>
                    <div className={styles.instaCell}>🪷</div>
                  </div> 
                  {/* <div className={styles.instaStats}>
                    <span><strong>11</strong> posts</span>
                    <span><strong>651</strong> followers</span>
                    <span><strong>971</strong> following</span>
                  </div>
                </div> */}
              {/* </div>
            </div> */}

            {/* Right: Fun facts cards */}
            {/* <div className={styles.funFactsRight}>
              <span className={styles.funFactsSectionLabel}>About Me ✨</span>
              <h2 className={styles.funFactsHeading}>Fun Facts</h2>
              <div className={styles.funFactsGrid}>
                <div className={styles.doodleFactCard}>
                  <PurpleBrushDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>💜</div>
                  <span className={styles.doodleFactText}>I always sneak a touch of purple into every design I make!</span>
                </div>
                <div className={styles.doodleFactCard}>
                  <PawDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>🐾</div>
                  <span className={styles.doodleFactText}>I love every single animal — from the tiniest bug to the biggest bear!</span>
                </div>
                <div className={styles.doodleFactCard}>
                  <LotusDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>🪷</div>
                  <span className={styles.doodleFactText}>Lotus flowers are my absolute favourite — I find them magical!</span>
                </div>
                <div className={styles.doodleFactCard}>
                  <MugDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>☕</div>
                  <span className={styles.doodleFactText}>I collect mugs — each one has its own little story and vibe.</span>
                </div> */}
                {/* <div className={styles.doodleFactCard}>
                  <SwanDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>🦢</div>
                  <span className={styles.doodleFactText}>"Hansi" means Swan in Sinhala — and I think I truly am one at heart!</span>
                </div>
                <div className={styles.doodleFactCard}>
                  <RainCloudDoodle className={styles.doodleFactIcon} />
                  <div className={styles.doodleFactEmoji}>🌧️</div>
                  <span className={styles.doodleFactText}>Nature & rain are my recharge — nothing beats rain on a quiet evening!</span>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        {/* </section>  */}

        {/* ======================================================
    FUN FACTS
====================================================== */}

<section id="fun-facts" className={styles.funFactsSection}>
  <div className={styles.funFactsContainer}>

    {/* LEFT SIDE */}
    <div className={styles.funFactsLeft}>

      <span className={styles.aboutLabel}>
        A LITTLE ABOUT ME
      </span>

      <h2 className={styles.funFactsTitle}>
        Fun
        <br />
        Facts
      </h2>

      <div className={styles.instagramWrapper}>

        <div className={styles.tapeLeft}></div>
        <div className={styles.tapeRight}></div>

        <Image
          src="/projects/instagram-sketch.jpg"
          alt="Instagram Sketch"
          width={380}
          height={720}
          className={styles.instagramSketch}
        />

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className={styles.funFactsRight}>

      {/* Purple */}

      <div className={`${styles.fact} ${styles.factPurple}`}>

        <PurpleBrushDoodle
          className={styles.factIcon}
        />

        <h4>Purple</h4>

        <p>
          Purple is my 
          <br />
          signature touch..
        </p>

      </div>

      {/* Music */}

     <div className={`${styles.fact} ${styles.factMusic}`}>

        <MusicNoteDoodle className={styles.factIcon} />

        <h4>Music</h4>

        <p>
          The perfect
          <br />
          background noise.
        </p>

      </div>

      {/* Swan */}

      <div className={`${styles.fact} ${styles.factSwan}`}>

        <SwanDoodle
          className={styles.factIcon}
        />

        <h4>A Swan</h4>

        <p>
          at heart,
          <br />
           by name too.
        </p>

      </div>

      {/* Lotus */}

      <div className={`${styles.fact} ${styles.factLotus}`}>

        <LotusDoodle
          className={styles.factIcon}
        />

        <h4>Lotus</h4>

        <p>
          My favourite
          <br />
          flower.
        </p>

      </div>

      {/* Paw */}

      <div className={`${styles.fact} ${styles.factPaw}`}>

        <PawDoodle
          className={styles.factIcon}
        />

        <h4>Animals</h4>

        <p>
          Every animal
          <br />
          deserves love.
        </p>

      </div>

      {/* Rain */}

      <div className={`${styles.fact} ${styles.factRain}`}>

        <RainCloudDoodle
          className={styles.factIcon}
        />

        <h4>Rain</h4>

        <p>
          Rainy evenings
          <br />
          are my favourite.
        </p>

      </div>

     <div className={`${styles.fact} ${styles.factForest}`}>

 
<ForestDoodle className={styles.factIcon} />

<h4>Road Trips</h4>

<p>
  Forest roads
  <br />
  have my heart.
</p>
</div>


      {/* Decorations */}

      <div className={styles.sparkle1}>
        <SparkleDoodle />
      </div>

      <div className={styles.sparkle2}>
        <SparkleDoodle />
      </div>

      <div className={styles.arrow1}>
        <ArrowDoodle
          direction="down-left"
        />
      </div>

      <div className={styles.arrow2}>
        <ArrowDoodle
          direction="down-right"
        />
      </div>

    </div>

  </div>
</section>

        {/* THANK YOU SECTION */}
        <section id="thank-you" className={styles.thankYouSection}>
          <HeartDoodle
            className={styles.thankYouBgScribble}
            color="#FFFDF6"
            width={300}
            height={300}
          />
          <div className={styles.thankYouInner}>
            {/* Left side */}
            <div className={styles.thankYouLeft}>
              <div className={styles.thankYouPortraitWrap}>
                <div className={styles.thankYouPortrait}>🦢</div>
                <div className={styles.portraitOrbit} />
              </div>
              <h2 className={styles.thankYouTitle}>Thank<br />you.</h2>
              <div className={styles.thankYouContact}>
                <span>Get in touch → </span>
                <a href="mailto:yuhansidinethma@gmail.com">yuhansidinethma@gmail.com</a>
              </div>
            </div>

            {/* Right side — handwritten statement */}
            <div className={styles.thankYouRight}>
              <div className={styles.thankYouDivider} />
              <p className={styles.thankYouStatement}>
                While I may be early in my journey, I am overflowing with passion
                for design and a drive to keep learning and growing. I bring fresh
                perspectives and boundless creativity to every project I take on.
                I am not afraid of challenges — I see them as beautiful puzzles waiting
                to be solved.
              </p>
              <p className={styles.thankYouStatement}>
                Whether it&rsquo;s a tiny detail in a UI, a thoughtful user flow, or a whole
                design system — I put my whole heart into it. Just like a swan, I move
                gracefully on the surface while working tirelessly beneath.
              </p>
              <div className={styles.thankYouSignature}>— Yuhansi 🦢</div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={`${styles.contactSection} container`}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionSubtitle}>Get in Touch</span>
                <h2 className={styles.sectionTitle}>
                  Let&apos;s work together!
                  <div className={styles.sectionTitleUnderline}>
                    <UnderlineScribble color="var(--primary)" strokeWidth={3} />
                  </div>
                </h2>
              </div>
              <p className={styles.helloText} style={{ marginBottom: "20px" }}>
                I am currently looking for software engineering opportunities, UI/UX internships, and web development projects. 
                Feel free to reach out and connect!
              </p>

              <div className={styles.contactCards}>
                <a href="mailto:yuhansidinethma@gmail.com" className={styles.contactCard}>
                  <span className={styles.contactCardIcon}>
                    <MailIcon size={20} />
                  </span>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>Email</span>
                    <span className={styles.contactCardValue}>yuhansidinethma@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/yuhansi-pathiraja-22b90127a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <span className={styles.contactCardIcon}>
                    <LinkedInIcon size={20} />
                  </span>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>LinkedIn</span>
                    <span className={styles.contactCardValue}>linkedin.com/in/Yuhansi-Pathiraja</span>
                  </div>
                </a>

                <a
                  href="https://github.com/yuhanzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <span className={styles.contactCardIcon}>
                    <GithubIcon size={20} />
                  </span>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>GitHub</span>
                    <span className={styles.contactCardValue}>github.com/yuhanzee</span>
                  </div>
                </a>
              </div>

              <div className={styles.contactIllustration}>
                <Image
                  src="/contact-illustration.png"
                  alt="Illustration of designer working on a computer"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="sketchy-card" style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px", fontFamily: "var(--font-serif)" }}>
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>

          <div className={styles.footerNote}>
            <span>&copy; {new Date().getFullYear()} Yuhansi Pathiraja. All Rights Reserved.</span>
            <button
              onClick={handleBackToTop}
              className={styles.backToTopBtn}
              aria-label="Back to top"
              title="Back to top"
            >
              &uarr;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
