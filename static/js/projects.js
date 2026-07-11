const projects = [
  {
    title: "Movie Recommendation System",
    icon: "fas fa-film",
    image: "/static/images/movie-recommendation.png",
description:
  "Content-based movie recommendation system using NLP (TF-IDF), Machine Learning, and FastAPI.",
    tech: ["Python", "FastAPI", "Scikit-learn", "TMDB API"],
    link: "http://movie-recommendation.duckdns.org/"
  },

  {
    title: "Car Price Prediction",
    icon: "fas fa-car",
    image: "/static/images/car-price-prediction.png",
    description:
      "Machine Learning application for predicting Ford car prices.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    link: "#"
  },

  {
    title: "Heart Disease Prediction",
    icon: "fas fa-heartbeat",
    image: "/static/images/heart-disease-prediction.png",
    description:
      "Classification model for predicting heart disease.",
    tech: ["TensorFlow", "Machine Learning", "Python"],
    link: "#"
  },
  {
  title: "Emotion Detection",
  icon: "fas fa-face-smile",
  image: "/static/images/emotion-detection.png",
  description:
    "NLP-based emotion detection system that identifies emotions from text using machine learning techniques.",
  tech: ["Python", "NLP", "TensorFlow", "Machine Learning"],
  link: "http://emotiongenai.duckdns.org/"
},
{
  title: "Rydex Vehicle Booking Platform",
  icon: "fas fa-car-side",
  image: "/static/images/rydex.png",
  description:
    "A full-stack vehicle booking platform built with Next.js, TypeScript, MongoDB, and Google Maps API, enabling users to search, book, and manage vehicle rentals through a modern and responsive interface.",
  tech: [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Google Maps API",
    "Tailwind CSS"
  ],
  link: "#"
},
 {
  title: "Virtual AI Assistant",
  icon: "fas fa-robot",
  image: "/static/images/ai-assistant.png",
  description:
    "An intelligent virtual AI assistant built with the MERN Stack and Google's Gemini API, enabling natural language conversations, real-time responses, and an interactive chat experience.",
  tech: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Gemini API",
    "JavaScript",
    "Tailwind CSS"
  ],
  link: "#"
}
];

const container = document.getElementById("projects-container");

projects.forEach(project => {

  const techStack = project.tech
    .map(skill => `<span>${skill}</span>`)
    .join("");

  container.innerHTML += `
    <div class="col-md-6">
      <div class="project-card">

        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-content">
          <i class="${project.icon}"></i>

          <h4>${project.title}</h4>

          <p>${project.description}</p>

          <a href="${project.link}"
             target="_blank"
             rel="noopener noreferrer">
             Go to Project
          </a>

          <div class="tech-stack">
              ${techStack}
          </div>

        </div>
      </div>
    </div>
  `;
});