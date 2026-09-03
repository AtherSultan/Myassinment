// /import React from "react";
import profileImage from './assets/ather sultan.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-gray-900 text-white text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Ather Sultan
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Front-End Web Developer
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Profile Section */}
        <section className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center gap-8">

          <img
            src={profileImage}
            alt="Ather Sultan Profile Picture"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              About Me
            </h2>

            <p className="text-gray-600 leading-7">
              Hello! I am Ather Sultan, a passionate front-end web
              developer. I enjoy creating responsive and user-friendly
              websites using HTML, CSS, JavaScript, React, and
              Tailwind CSS.
            </p>
          </div>

        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            My Skills
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>

        </section>

        {/* Goals Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            My Goals
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Improve my web development skills</li>
            <li>Build professional websites</li>
            <li>Work as a freelance developer</li>
            <li>Gain professional experience</li>
          </ol>

        </section>

        {/* Links Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            Useful Links
          </h2>

          <p className="text-gray-600">
            Visit my{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
            >
              GitHub Profile
            </a>
          </p>

        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8">

          <h2 className="text-3xl font-bold mb-5">
            Contact Me
          </h2>

          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Email:</strong> example@email.com
            </p>

            <p>
              <strong>Phone:</strong> +92 XXX XXXXXXX
            </p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">

        <p className="text-gray-300">
          &copy; 2026 Ather Sultan. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;


