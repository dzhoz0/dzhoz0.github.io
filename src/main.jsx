import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const isContact = window.location.hash === '#/contact';
  const [contact, setContact] = React.useState(isContact);

  React.useEffect(() => {
    const updatePage = () => setContact(window.location.hash === '#/contact');
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  return (
    <main>
      <nav aria-label="Main navigation">
        <a href="#/" aria-current={!contact ? 'page' : undefined}>About</a>
        <a href="#/contact" aria-current={contact ? 'page' : undefined}>Contact</a>
      </nav>
      {contact ? <Contact /> : <About />}
    </main>
  );
}

function About() {
  return (
    <>
      <h1>Hi, I'm Tuan Dat Ho.</h1>
      <p>I'm a student and developer based in Vietnam. I enjoy building useful software and learning how things work.</p>
      <p>I'm studying informatics at VNUHCM High School for the Gifted. I work on web and mobile apps, and I'm interested in the infrastructure that keeps them running.</p>
      <h2>Contents</h2>
      <ol>
        <li><a href="#history">History and projects</a>
          <ol>
            <li><a href="#secondary">Secondary school</a></li>
            <li><a href="#projects">High school</a>
              <ol>
                <li><a href="#competitive-programming">Competitive programming</a></li>
                <li><a href="#tgb">The Gifted Battlefield</a></li>
                <li><a href="#other-projects">Other projects</a></li>
              </ol>
            </li>
          </ol>
        </li>
        <li><a href="#skills">Skills</a></li>
      </ol>
      <h2 id="history">1. History and projects</h2>
      <h3 id="secondary">Secondary school</h3>
      <p>I got into web development, starting with simple websites and React. I also learned competitive programming and earned third prize in a city-wide competition. Outside of programming, I daily-drove Linux and spent time ricing and configuring my setup.</p>

      <h3 id="projects">High school</h3>
      <h4 id="competitive-programming">Competitive programming</h4>
      <p>I continued with competitive programming, earning consolation prizes in the Vietnam Olympiad in Informatics (VOI) and the Youth Informatics Competition.</p>

      <h4 id="tgb">The Gifted Battlefield</h4>
      <p>I'm Vice Head of the Informatics Infrastructure Department at The Gifted Battlefield, where I work on organizational infrastructure, production website operations, and CI/CD. I also contribute to internal tools and event platforms, including Dynasty Showdown.</p>
      <p>My work includes operational safeguards and documentation to help keep services reliable. TGB's event registration platform uses a Nuxt frontend and an ASP.NET Core backend with PostgreSQL and Redis.</p>
      <h5 id="dynasty-showdown">Dynasty Showdown 2026</h5>
      <p>I contributed to The Gifted Battlefield's real-time multiplayer game platform for Dynasty Showdown, a TGB game event. It supports multiple game modes, live scoring, administrative controls, and a shared big-screen experience.</p>
      <p>I worked on web development for the platform. Its TypeScript monorepo combines a TanStack Start frontend, an Elysia API, and a Colyseus WebSocket game server. PostgreSQL and Redis support the services, while shared packages hold data access, contracts, and utilities.</p>

      <h4 id="other-projects">Other projects</h4>
      <h5 id="eukoria">Eukoria Ticketing Platform</h5>
      <p><a href="https://eukoria-chi.vercel.app/">Visit the Eukoria website</a></p>
      <p>I built an event website for ticket and merchandise sales, used across multiple events to process over 100 purchases. Customers can browse products, manage a cart, and pay online; organizers have tools for order management and QR code check-in.</p>
      <p>The platform uses Next.js, Supabase for authentication and data storage, and PayOS for payments. Its check-in tools look up ticket codes and record whether a ticket has already been used. I also resolved a race condition between payment confirmation and asynchronous payment notifications.</p>

      <h5 id="somra">Somra</h5>
      <p>I'm developing Somra, a cross-platform companion app for an ESP32-S3 smart diffuser. It connects to the device over Bluetooth and brings its controls together with sleep and mood logging.</p>
      <p>The app also includes a chatbot informed by medical sources. It's built with Expo, with Cloudflare Workers and D1 for backend services and data synchronization.</p>

      <h5 id="binaural-beats">Binaural-Beats Sleep App</h5>
      <p>I implemented the Bluetooth communication pipeline between the mobile app and its device. The project received a first prize for its poster at a medical conference.</p>

      <p>I've also made games for the Informatics Class Traditional Festival.</p>
      <h2 id="skills">2. Skills</h2>
      <p>My work spans application development and the infrastructure needed to run it. I use these tools across personal projects and TGB platforms:</p>
      <ul>
        <li><strong>Languages:</strong> C++, TypeScript, and JavaScript.</li>
        <li><strong>Web and mobile:</strong> React, Next.js, TanStack Start, Nuxt, Expo, and Tailwind CSS. I build interfaces for event registration, commerce, games, and mobile device control.</li>
        <li><strong>Backend and data:</strong> Node.js, Elysia, PostgreSQL, Supabase, Drizzle ORM, Redis, and Cloudflare Workers and D1. My experience includes authentication, payment integration, APIs, and data storage.</li>
        <li><strong>Infrastructure and tools:</strong> Linux, Git, Docker, and CI/CD. At TGB, I work on production website operations and procedures that support reliable services.</li>
        <li><strong>Connected devices:</strong> Bluetooth communication between an Expo app and an ESP32-S3 diffuser, including device controls.</li>
      </ul>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>You can reach me by email or find me on GitHub.</p>
      <ul>
        <li><a href="mailto:htdat.contact@gmail.com">htdat.contact@gmail.com</a></li>
        <li><a href="https://github.com/dzhoz0">github.com/dzhoz0</a></li>
        <li><a href={`${import.meta.env.BASE_URL}cv.pdf`}>View my CV</a></li>
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
