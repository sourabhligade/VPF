"use client";

import Link from "next/link";
import Image from "next/image";
import RepositoryLink from "@/components/RepositoryLink";
import Timer from "@/components/Timer";
import { useEffect, useRef } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import StatusIndicator from "@/components/StatusIndicator";

export default function Home() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  // Add this effect to handle mouse movement
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the container
      const y = e.clientY - rect.top; // y position within the container

      // Calculate middle point displacement based on cursor position
      const midX = rect.width / 2;
      const displacement = (y - rect.height / 2) * 1.5; // Amplify movement

      // Update the path with new coordinates that follow the cursor
      path.setAttribute("d", `M0 0 Q ${midX} ${displacement} 793 0`);
    };

    const handleMouseLeave = () => {
      // Return to flat line when mouse leaves
      path.setAttribute("d", "M0 0 H793");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Define your projects data
  const projects = [
    {
      title: "Algoheads.com",
      description:
        "AlgoHeads flips the traditional job search process. Instead of finding jobs and then searching for connections, AlgoHeads automatically shows you jobs where you already have connections.",
      image: "/Algohead.png",
      liveLink: "https://algoheads.com/",
      // repoLink: "https://github.com/naaa760/lms-app",
      techStack: [
  "Python",
  "React",
  "AWS",
  "PostgreSQL",
  "REST API",
]

    },

      {
    title: "Document-Based RAG Chatbot",
    description:
      "A chatbot that lets users ask questions about PDF documents using natural language, powered by Mistral7B, Langchain, and FAISS for accurate and fast information retrieval.",
     image: "/ragg.png", // Replace with the actual image path if available
    liveLink: "", // Add a live demo link if available
    repoLink: "", // Add GitHub repo link if available
    techStack: [
      "Mistral7B",
      "FAISS",
      "FastAPI",
      "Langchain",
      "HuggingFace Transformers",
      "Torch",
      "PyPDF",
      "Streamlit",
    ],
  },


      {
    title: "Object Detection & Color Analysis System",
    description:
      "A web and mobile app that detects objects in images and identifies their dominant colors using YOLO, OpenCV, and k-means clustering.",
    image: "/object.png", // Replace with actual image path if available
    liveLink: "", // Add live demo link if available
    repoLink: "", // Add GitHub repo link if available
    techStack: [
      "Python",
      "YOLO",
      "OpenCV",
      "K-Means",
      "Django",
      "Flutter",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },


    // {
    //   title: "BeamUp(Video calling + Chat App)",
    //   description:
    //     "BeamUp connects language learners with native speakers for authentic conversations about shared interests, building fluency through real-world practice in a supportive community.",
    //   image: "/i2.png",
    //   liveLink:
    //     "https://mern-video-calling-realtime-chat-app-50ki.onrender.com/",
    //   repoLink:
    //     "https://github.com/naaa760/mern-video-calling-realtime-chat-app-social-app",
    //   techStack: [
    //     "React",
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "Context API",
    //     "JWT",
    //   ],
    // },

    // {
    //   title: "AI Workflow Builder (HITL Interface)",
    //   description:
    //     "A Human-In-The-Loop (HITL) interface that allows users to create, edit, and manage AI-assisted workflow steps.",
    //   image: "/hub.png",
    //   liveLink: "https://assignment-mmau.vercel.app/",
    //   repoLink:
    //     "https://github.com/naaa760/workflow-interface?tab=readme-ov-file",
    //   techStack: [
    //     "React",
    //     "Next.js",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Zustand",
    //     "Tailwind CSS",
    //   ],
    // },

    // {
    //   title: "EchoHire(AI Interview Platform)",
    //   description:
    //     "This AI platform offers realistic mock technical interviews with personalized questions and detailed feedback. Built with React and Firebase, it features secure authentication.",
    //   image: "/i3.png",
    //   liveLink:
    //     "https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/landing",
    //   repoLink:
    //     "https://github.com/naaa760/interview-platform-with-a-real-time-ai-voice-agent",
    //   techStack: ["Next.js", "Firebase", "React", "VAPI", "Zod"],
    // },

    // {
    //   title: "Jirnov(Project Management + Collaboration)",
    //   description:
    //     "JINova integrates project management, team collaboration, and client communication in one intuitive platform. With built-in tracking, resource management, and analytics, it streamlines.",
    //   image: "/i5.png",
    //   liveLink: "https://jirnov.vercel.app/",
    //   repoLink: "https://github.com/naaa760/jirnov",
    //   techStack: ["React", "MongoDB", "Node.js", "Express", "JWT"],
    // },
    // {
    //   title: "TalkCast(Podcast + AI)",
    //   description:
    //     "TalkCast creates a unified platform for podcast creators and listeners. It personalizes discovery with smart recommendations and helps creators grow through community.",
    //   image: "/i6.png",
    //   liveLink: "https://mutli-app.vercel.app/",
    //   repoLink: "https://github.com/naaa760/mutli-app",
    //   techStack: ["Next.js", "TypeScript", "React", "Convex", "Clerk"],
    // },

    // Add any other projects you have
  ];

  return (
    <>
      <main className="container">
        <Timer />
        <header className="header">
          <nav className="nav-links">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#tech-stack" className="nav-link">
              Stack
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
            <Link href="#videos" className="nav-link">
              Videos
            </Link>
          </nav>
        </header>

        <section className="hero">
          <div className="profile-image-container">
            <Image
              src="/user.png"
              alt="Neha"
              className="profile-image"
              width={200}
              height={200}
              priority
            />
            <div className="profile-scan"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Hey, I&apos;m Sourabh Ligade</h1>
            <StatusIndicator />
            <p className="hero-subtitle">
              I build <strong>Full Stack Apps</strong> that matter.
            </p>
            <div className="social-links">
              <a href="https://x.com/SourabhLigade" className="social-link">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </svg>
                Twitter
              </a>
              <a
                href="https://drive.google.com/file/d/1bcdWUhcoZLJiPfI0DoJ2mNDLeyP7lokI/view?usp=sharing"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z" />
                  <path d="M8 11.5h8v1H8zm0-3h8v1H8zm0 6h4v1H8z" />
                </svg>
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ligade24/"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/sourabhligade" className="social-link">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </a>
              {/* <a
                href="https://peerlist.io/nehaaa6"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20,20 h40 a20,20 0 1,1 0,40 h-20 v20 h-20 z M40,40 h20 a10,10 0 1,0 0,-20 h-20 z" />
                </svg>
                Peerlist
              </a> */}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-content">
            <div className="about-education">
              B.Sc in Statistics | University of Pune
              2019 - 2022
            </div>
            <div className="about-summary">
              I&apos;m a Software Developer with 15+ month&apos;s experience
              building scalable, user-friendly web applications using Python,
              React, and AWS. Built and scaled <a 
  href="https://algoheads.com" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ color: '#ccc', textDecoration: 'underline' }}
>
  AlgoHeads.com
</a>
, a job referral platform that matches job listings 
              with relevant 
              candidates using automation—now serving 1,000+ users. Skilled in clean code, performance 
              optimization, and AI/ML integration. Experienced across the SDLC in Agile teams, with DevOps, CI/CD, and AWS.
              I love sharing what I&apos;m learning—whether it&rsquo;s through blogs, tweets, wins, or mistakes
              .
            </div>
          </div>
        </section>

        <section className="tech-stack-section" id="tech-stack">
  <h2 className="section-title">TECH STACK</h2>

  <div className="tech-categories">
    <div className="tech-category">
      <h3 className="category-title">Languages</h3>
      <div className="tech-items">
        <span className="tech-item">Python</span>
        <span className="tech-item">React</span>
        <span className="tech-item">Javascript</span>
        <span className="tech-item">MySQL</span>
        <span className="tech-item">TailwindCSS</span>
        <span className="tech-item">Shadcn UI</span>
        <span className="tech-item">HTML/CSS</span>
        <span className="tech-item">PostgreSQL</span>

      </div>
    </div>

    <div className="tech-category">
      <h3 className="category-title">Frameworks</h3>
      <div className="tech-items">
        <span className="tech-item">Django</span>
        <span className="tech-item">FastAPI</span>
        <span className="tech-item">OpenCV</span>
        <span className="tech-item">RestAPI</span>
        <span className="tech-item">Numpy</span>
        <span className="tech-item">Flask</span>
        <span className="tech-item">Pandas</span>
      </div>
    </div>

    <div className="tech-category">
      <h3 className="category-title">Tools, Cloud & Databases</h3>
      <div className="tech-items">
        <span className="tech-item">AWS</span>
        <span className="tech-item">Cloudflare</span>
        <span className="tech-item">GPU Cloud</span>
        <span className="tech-item">Docker</span>
        <span className="tech-item">HTTP</span>
        <span className="tech-item">Git</span>
      </div>
    </div>

    <div className="tech-category">
      <h3 className="category-title">Data Science</h3>
      <div className="tech-items">
        <span className="tech-item">Statistics</span>
        <span className="tech-item">Machine Learning</span>
        <span className="tech-item">Artificial Intelligence</span>
        <span className="tech-item">Regression</span>
        <span className="tech-item">Classification</span>
      </div>
    </div>

    <div className="tech-category">
      <h3 className="category-title">Visualization &amp; Documentation</h3>
      <div className="tech-items">
        <span className="tech-item">Matplotlib</span>
        <span className="tech-item">Streamlit</span>
        <span className="tech-item">Docusaurus</span>
      </div>
    </div>
  </div>
</section>


        <ProjectsSection projects={projects} />

        <section className="experience-section" id="experience">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="experience-title-styled">Software Engineer</h3>
              <h4 className="experience-company-container">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  JarvisLabs
                </a>
                {/* <Image
                  src="/lg1.png"
                  alt="Keploy logo"
                  width={20}
                  height={20}
                  className="company-logo"
                /> */}
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • At JarvisLabs, we built and integrated ML models with cloud GPUs to speed up training and inference. 
                Worked on continuously  improving the product&apos;s UI using Python and React and helped maintain clean, testable code. Also worked on full-stack features 
                and set up CI/CD pipelines to streamline deployments.
              </p>
              <div className="experience-timeline">07/2024 - Present</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">
                Machine Learning intern
              </h3>
              <h4 className="experience-company-container">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  Yhworks
                </a>
                {/* <Image
                  src="/lg.png"
                  alt="Travana logo"
                  width={20}
                  height={20}
                  className="company-logo"
                /> */}
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • At Yhworks, we built a YOLO-based object detection system in Python that identifies objects and their dominant colors with 95% accuracy. Integrated into a Django web app and Flutter mobile app, it supports real-time detection with optimized performance and a user-friendly interface.
              </p>
              <div className="experience-timeline">04/2024 - 07/2024 </div>
            </div>

            {/* <div className="experience-item">
              <h3 className="experience-title-styled">Hackathon Contributor</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://lablab.ai/u/@nehhaa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  Lablab.ai
                </a>
                <Image
                  src="/lg2.png"
                  alt="Lablab.ai logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Built AI-driven solutions with advanced models, APIs, and
                automation leading full-stack development in hackathons to
                deliver impactful projects like MindsDB and HealthPulse focused
                on prompt optimization and scalability.
              </p>
              <div className="experience-timeline">09/2024 - 05/2025</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">Frontend Developer</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://www.linkedin.com/company/girlscriptsoc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  GSSOC
                </a>
                <Image
                  src="/lg3.png"
                  alt="GSSOC logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Led frontend teams using React and Next.js to build
                responsive, API-driven interfaces boosting performance by 40%
                with code optimization and lazy loading, while mentoring juniors
                and ensuring intuitive UX through close design collaboration.
              </p>
              <div className="experience-timeline">05/2023 - 08/2023</div>
            </div> */}

            {/* <div className="experience-item">
              <h3 className="experience-title-styled">SWE</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://www.linkedin.com/company/headstarterai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  HeadStarter
                </a>
                <Image
                  src="/lg4.png"
                  alt="HeadStarter logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Architected and deployed 5 AI-driven apps with React, Next.js,
                Firebase, Clerk, and Vercel setting up CI/CD for fast, reliable
                releases. Led a team to launch a flashcard SaaS with OpenAI and
                built a RAG-based Q&A system using Pinecone.
              </p>
              <div className="experience-timeline">06/2024 - 09/2024</div>
            </div> */}
          </div>
        </section>

        <section className="video-section" id="videos">
          <h2 className="section-title">VIDEOS</h2>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/thIG-7m4jlA"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">
                  Stop Searching – Let Your Network Bring You the Jobs You&apos;re Already Connected To!
                </h3>
                {/* <a
                  href="https://github.com/naaa760/flicclash"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a> */}
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/GcZbY1s0Ddw?start=69"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">Chat with any PDF</h3>
                <a
                  href="https://github.com/sourabhligade/Document_chat"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/IvXqkn6QN9c
"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">Object Detection</h3>
                <a
                  href="https://github.com/sourabhligade/dominant_color"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="chat-section">
          <div className="chat-container">
            <div className="chat-left">
              <h3>Start here</h3>
              <h2>
                Let&apos;s hop on a quick call and see we&apos;ve got the right
                chemistry.
              </h2>
              <p>Want to bounce ideas?</p>
              <p>
                Let&apos;s jump on a quick call and explore what&apos;s
                possible.
              </p>
              <p>Looking to build something bigger?</p>

              <p>Perfect! Let&apos;s grab a coffee and brainstorm in person.</p>
            </div>
            <div className="chat-right">
              <div className="chat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 11 12.7L2 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="chat-title">Ready to chat?</h2>
              <p className="chat-description">
                Schedule a free strategy call to discuss your project and
                explore how we can work together.
              </p>
              <div className="chat-buttons">
                <a
                  href="https://cal.com/sourabh-ligade/quick-chat"
                  className="chat-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="chat-button-icon">🕒</span>
                  15 Min Quick Chat
                </a>
                <a
                  href="https://cal.com/sourabh-ligade/30min"
                  className="chat-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="chat-button-icon">📅</span>
                  30 Min Deep Dive
                </a>
              </div>
              <p className="chat-quote">
                &quot;Turning your vision into digital reality is just one
                conversation away&quot;
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="bottom-line-container" ref={containerRef}>
        <svg
          className="w-full h-16 overflow-visible undefined"
          viewBox="0 0 793 64"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            stroke="rgba(192, 192, 192, 0.5)"
            strokeWidth="1.5"
            fill="none"
            d="M0 0 H793"
          />
        </svg>
      </div>
    </>
  );
}
