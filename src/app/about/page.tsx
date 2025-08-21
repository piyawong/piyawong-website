"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { OrbitingCircles } from "@/components/ui/orbitting-circles";

const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none">
        <rect width="256" height="256" fill="#F7DF1E" />
        <path
          d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996"
          fill="#000"
        />
        <path
          d="M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none">
        <rect width="256" height="256" fill="#3178C6" />
        <path
          d="m56.611 128.85-.081 10.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.244l-44.74.04-.122 10.567Z"
          fill="#fff"
        />
        <path
          d="M204.643 131.557c6.364-.326 7.888.082 12.275 2.928 3.663 2.328 5.186 4.675 5.186 8.094 0 3.663-1.625 7.062-3.663 7.918-.853.366-1.788.528-2.5.446l-1.3-.163 1.625 2.398c3.581 5.389 5.186 12.053 4.35 18.717-1.544 12.275-9.883 20.654-22.443 22.443-2.073.285-8.46.122-14.096-.122-14.381-.651-28.721-.569-44.983.285V128.688c19.434-.488 41.877-.366 65.549.569Zm-4.147 19.066c.651 1.301-.162 3.174-1.625 3.744-.975.366-2.113.284-2.8-.163-.773-.528-.853-1.625-.284-2.601.61-1.138 3.825-1.788 4.71-.98Zm-33.565 20.04c4.066 1.788 6.02 6.895 4.554 11.898-1.625 5.57-7.46 8.906-13.177 7.623-6.406-1.422-10.553-8.54-8.785-15.114 1.625-5.978 7.46-9.07 13.25-6.04 1.138.61 2.601 1.3 4.158 1.634Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#61DAFB">
        <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.204 83.404 0 107.464 0 128.064s17.204 44.66 44.413 53.394c2.807.955 5.72 1.86 8.743 2.717c-.553 2.281-1.019 4.581-1.396 6.898C46.249 219.275 50.283 243.547 63.674 251.271c13.812 7.967 37.309-.473 60.132-20.458a169.17 169.17 0 0 0 5.132-4.374a174.36 174.36 0 0 0 5.882 5.017c22.46 18.745 44.322 26.407 57.37 18.814c13.47-7.859 17.888-33.2 12.005-63.298c-.465-2.377-.961-4.8-1.487-7.264c1.902-.621 3.758-1.267 5.564-1.939C238.597 172.713 256 148.675 256 128.064c0-20.611-17.403-44.649-45.517-53.24zM128.001 93.967c2.062 0 4.124.028 6.174.085v35.886c-2.049.057-4.112.085-6.174.085s-4.125-.028-6.175-.085V94.052c2.05-.057 4.113-.085 6.175-.085zm0 68.129c2.062 0 4.124-.028 6.174-.085v35.886c-2.049-.057-4.112-.085-6.174-.085s-4.125.028-6.175.085v-35.886c2.05.057 4.113.085 6.175.085z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="currentColor">
        <circle cx="128" cy="128" r="128" fill="#000" />
        <path
          d="M212.633 174.106L98.875 19.994h-4.688v.031l113.758 154.081z"
          fill="#fff"
        />
        <path
          d="M199.941 213.75L128 19.994h-10.625l-10 13.563 69.316 180.31c4.375-.157 8.625-.407 12.25-1.117z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#339933">
        <path d="M128 256c-6.903 0-13.806-1.815-19.806-5.446L82.416 235.88c-9.402-5.25-4.807-7.109-1.707-8.183c12.454-4.359 14.995-5.359 28.252-12.957c1.38-.774 3.187-.464 4.608.464l20.583 12.225c.774.43 1.86.43 2.549 0l80.181-46.25c.774-.43 1.29-1.29 1.29-2.204V81.657c0-.946-.516-1.807-1.29-2.236l-80.181-46.25c-.774-.43-1.86-.43-2.549 0l-80.181 46.25c-.774.43-1.29 1.29-1.29 2.236v96.318c0 .946.516 1.807 1.29 2.236l21.975 12.697c11.937 5.964 19.249-1.075 19.249-8.183v-95.028c0-1.344 1.075-2.419 2.419-2.419h10.537c1.344 0 2.419 1.075 2.419 2.419v95.028c0 16.536-8.999 26.034-24.684 26.034c-4.816 0-8.609 0-19.205-5.222L27.759 195.04c-12.01-6.932-19.377-19.8-19.377-33.606V94.647c0-13.807 7.367-26.674 19.377-33.606L107.94 14.791c11.764-6.675 27.393-6.675 39.156 0L227.277 61.04c12.01 6.932 19.377 19.8 19.377 33.606v66.787c0 13.806-7.367 26.674-19.377 33.606l-80.181 46.25C141.806 254.185 134.903 256 128 256z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none">
        <defs>
          <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd43b" />
            <stop offset="100%" stopColor="#ffe873" />
          </linearGradient>
          <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4584b6" />
            <stop offset="100%" stopColor="#306998" />
          </linearGradient>
        </defs>
        <path
          d="M116.904 0C78.408 0 64.532 13.876 64.532 52.372v16.745h52.372v6.983H58.06C19.564 76.1 0 94.132 0 128c0 33.868 19.564 51.9 58.06 51.9h13.876v-20.508c0-19.564 16.745-36.309 36.309-36.309h52.371c19.564 0 36.31-16.746 36.31-36.31V52.372C196.926 13.876 183.05 0 144.554 0H116.904zM92.436 18.127c6.983 0 12.437 5.454 12.437 12.437c0 6.983-5.454 12.437-12.437 12.437c-6.983 0-12.437-5.454-12.437-12.437c0-6.983 5.454-12.437 12.437-12.437z"
          fill="url(#pyYellow)"
        />
        <path
          d="M139.096 256c38.496 0 52.372-13.876 52.372-52.372v-16.745h-52.372v-6.983h58.904C236.496 179.9 256 161.868 256 128c0-33.868-19.564-51.9-58.06-51.9h-13.876v20.508c0 19.564-16.745 36.309-36.309 36.309h-52.371c-19.564 0-36.31 16.746-36.31 36.31v45.201C59.074 242.124 72.95 256 111.446 256h27.65zm24.468-18.127c-6.983 0-12.437-5.454-12.437-12.437c0-6.983 5.454-12.437 12.437-12.437c6.983 0 12.437 5.454 12.437 12.437c0 6.983-5.454 12.437-12.437 12.437z"
          fill="url(#pyBlue)"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#2496ED">
        <path d="M37.719 107.462h15.354v14.72H37.719zM56.84 107.462h15.354v14.72H56.84zM75.964 107.462h15.354v14.72H75.964zM95.087 107.462h15.354v14.72H95.087zM114.21 107.462h15.354v14.72H114.21zM133.334 92.738h15.354v14.72h-15.354zM114.21 78.015h15.354v14.72H114.21zM95.087 92.738h15.354v14.72H95.087zM75.964 92.738h15.354v14.72H75.964zM56.84 92.738h15.354v14.72H56.84zM37.719 92.738h15.354v14.72H37.719zM95.087 78.015h15.354v14.72H95.087zM75.964 78.015h15.354v14.72H75.964zM56.84 78.015h15.354v14.72H56.84zM75.964 63.292h15.354v14.72H75.964z" />
        <path d="M218.24 107.462c-.625-4.219-4.219-7.813-9.375-7.813h-3.125c-1.563 0-3.125.625-4.219 1.563c-3.125-15.625-15.625-25-31.25-25c-6.25 0-12.5 2.188-17.188 5.625c-1.563 1.25-2.188 3.125-2.188 5c0 1.875.625 3.75 1.875 5l6.25 6.25c1.25 1.25 3.125 1.875 5 1.875s3.75-.625 5-1.875c1.875-1.875 4.375-2.813 6.875-2.813c6.25 0 11.875 4.375 13.125 10.625c.313 1.563 1.25 2.813 2.5 3.438c1.25.625 2.813.625 4.063 0l3.125-1.563c3.438-1.875 7.813-1.25 10.625 1.25c2.813 2.5 3.75 6.25 2.5 9.688l-1.563 4.375c-.625 1.563-.313 3.438.625 4.688c.938 1.25 2.5 1.875 4.063 1.875h4.375c3.75 0 6.875-2.813 7.188-6.563c.313-8.75-6.563-15.938-15.313-16.25z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none">
        <defs>
          <linearGradient id="awsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9900" />
            <stop offset="100%" stopColor="#ff6600" />
          </linearGradient>
        </defs>
        <path
          d="M64 150.97c0 8.63 1.07 15.58 3.2 20.77c2.14 5.2 5.35 10.73 9.6 16.58c1.07 1.6.8 2.67-.53 3.47l-8.8 5.87c-1.34.8-2.4 1.07-3.74.27c-4.27-4.53-7.74-9.33-10.4-14.4c-2.67-5.07-4-10.67-4-16.8c0-21.07 12.8-31.73 38.4-31.73c5.6 0 11.47.8 17.6 2.4v-5.33c0-11.2-2.4-19.2-7.2-23.73c-4.8-4.53-12.53-6.93-23.2-6.93c-4.8 0-9.87.53-15.2 1.6c-5.34 1.07-10.4 2.4-15.2 4c-2.13.8-3.73 1.33-4.8 1.6c-1.07.27-1.87.4-2.4.4c-2.13 0-3.2-1.6-3.2-4.8v-7.73c0-2.4.27-4.27 1.07-5.33c.8-1.07 2.13-2.13 4-2.93c4.8-2.4 10.53-4.4 17.33-5.87C49.87.8 57.07 0 64.8 0c19.73 0 34.13 4.53 43.2 13.6c9.07 9.07 13.6 22.93 13.6 41.6v54.93c0 16.8-.27 30.13-.8 40.27c-.53 10.13-1.6 20.8-3.2 32h-12.27c-2.4 0-4.27-.4-5.33-1.33c-1.07-.8-1.87-2.4-2.4-4.8l-2.67-13.87c-7.73 8.27-15.73 14.4-24 18.4c-8.27 4-17.87 6-28.8 6C75.73 186.8 64 177.2 64 150.97zm49.33-12.53v-8.27c-4.27-1.07-8.8-1.87-13.6-2.4c-4.8-.53-9.33-.8-13.6-.8c-9.73 0-16.8 1.87-21.33 5.6c-4.53 3.73-6.8 9.33-6.8 16.8c0 6.93 1.87 12.27 5.6 15.73c3.73 3.47 9.07 5.2 16 5.2c7.2 0 13.87-2.4 20-7.2c6.13-4.8 9.33-11.47 9.6-20z"
          fill="url(#awsGradient)"
        />
        <path
          d="M230.4 186.8c-2.67 0-4.53-.53-5.87-1.6c-1.33-1.07-2.67-3.47-4-7.2L179.2 63.47c-1.33-4-2-6.67-2-8c0-3.2 1.6-4.8 4.8-4.8h19.73c2.8 0 4.8.53 5.87 1.6c1.33 1.07 2.4 3.47 3.2 7.2l29.87 117.33l27.73-117.33c.8-4 1.87-6.4 3.2-7.2c1.33-1.07 3.47-1.6 6.4-1.6h16c2.93 0 5.07.53 6.4 1.6c1.33 1.07 2.4 3.47 3.2 7.2l28 118.93l30.67-118.93c.8-4 2.13-6.4 3.47-7.2c1.33-1.07 3.2-1.6 5.87-1.6h18.67c3.2 0 4.8 1.6 4.8 4.8c0 .8-.13 1.6-.27 2.4c-.13.8-.53 2.13-1.33 4l-42.93 114.67c-1.33 4-2.67 6.4-4 7.2c-1.33 1.07-3.47 1.6-5.87 1.6h-17.33c-2.93 0-5.07-.53-6.4-1.6c-1.33-1.07-2.4-3.47-3.2-7.2l-27.47-114.4l-27.2 114.27c-.8 4-1.87 6.4-3.2 7.2c-1.33 1.07-3.47 1.6-6.4 1.6h-17.33z"
          fill="url(#awsGradient)"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#47A248">
        <path d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-40.6 48.130-59.037 82.5-59.037 110.466c0 91.256 82.5 90.307 103.365 90.307s103.365.949 103.365-90.307c0-27.966-18.437-62.336-59.036-110.466zM127.05 233.64v-4.047s0-80.138.949-81.086c.949-.949.949-82.984-.949-82.984s-1.898 82.035-.949 82.984c.949.948.949 81.086.949 81.086v4.047z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#336791">
        <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.608-8.395-.608c-5.676 0-11.647.927-17.788 2.756c-12.98 3.867-26.046 10.497-38.825 19.71c-7.618 5.49-14.98 11.737-21.997 18.616c-3.618 3.547-7.079 7.296-10.356 11.188c-3.276 3.892-6.369 7.927-9.243 12.065c-11.647 16.759-20.98 35.784-27.775 56.677c-3.398 10.446-6.232 21.204-8.449 32.139c-.554 2.73-1.07 5.484-1.546 8.262c-.119.694-.238 1.388-.357 2.082c-.476 2.778-.952 5.556-1.309 8.358c-.476 3.73-.833 7.484-1.07 11.238c-.119 1.864-.238 3.752-.238 5.64v.119c0 2.183.119 4.366.357 6.525c.238 2.183.595 4.342 1.07 6.478c.952 4.295 2.619 8.447 4.929 12.302c2.31 3.855 5.26 7.413 8.756 10.497c3.496 3.084 7.537 5.684 11.932 7.767c4.394 2.083 9.14 3.649 14.028 4.649c2.452.5 4.929.714 7.43.714c4.214 0 8.452-.714 12.547-2.159c4.095-1.446 7.953-3.532 11.455-6.168c3.501-2.636 6.646-5.822 9.336-9.557c2.69-3.735 4.929-7.953 6.646-12.422c1.717-4.469 2.929-9.212 3.62-14.074c.357-2.452.476-4.929.476-7.43c0-2.5-.119-5.023-.476-7.5c-.714-4.905-2.19-9.69-4.357-14.24c-2.167-4.55-4.977-8.875-8.333-12.803c-3.357-3.928-7.262-7.459-11.597-10.497c-4.334-3.037-9.098-5.58-14.169-7.54c-5.071-1.959-10.45-3.335-16.026-4.071c-2.786-.368-5.643-.552-8.523-.552c-2.881 0-5.785.184-8.643.552c-5.738.737-11.401 2.113-16.905 4.071c-5.504 1.959-10.831 4.503-15.784 7.54c-4.953 3.037-9.524 6.569-13.618 10.497c-4.095 3.928-7.715 8.253-10.736 12.803c-3.021 4.55-5.404 9.335-7.095 14.24c-1.691 4.905-2.69 9.976-2.952 15.095c-.131 2.548-.131 5.119 0 7.667c.262 5.119 1.261 10.19 2.952 15.095c1.691 4.905 4.074 9.69 7.095 14.24c3.021 4.55 6.641 8.875 10.736 12.803c4.095 3.928 8.665 7.459 13.618 10.497c4.953 3.037 10.28 5.58 15.784 7.54c5.504 1.959 11.167 3.335 16.905 4.071c2.858.368 5.762.552 8.643.552c2.88 0 5.737-.184 8.523-.552c5.576-.737 10.955-2.113 16.026-4.071c5.071-1.959 9.835-4.503 14.169-7.54c4.334-3.037 8.24-6.569 11.597-10.497c3.357-3.928 6.167-8.253 8.333-12.803c2.167-4.55 3.643-9.335 4.357-14.24c.357-2.477.476-4.999.476-7.5c0-2.5-.119-4.977-.476-7.43c-.69-4.861-1.903-9.604-3.62-14.074c-1.717-4.469-3.956-8.687-6.646-12.422c-2.69-3.735-5.835-6.921-9.336-9.557c-3.501-2.636-7.36-4.722-11.455-6.168c-4.095-1.446-8.333-2.159-12.547-2.159c-2.5 0-4.977.214-7.43.714c-4.887 1-9.633 2.566-14.028 4.649c-4.394 2.083-8.435 4.684-11.932 7.767c-3.496 3.084-6.446 6.642-8.756 10.497c-2.31 3.855-3.977 8.007-4.929 12.302c-.476 2.136-.833 4.295-1.07 6.478c-.238 2.159-.357 4.342-.357 6.525v.119c0 1.888.119 3.776.238 5.64c.238 3.754.595 7.508 1.07 11.238c.357 2.802.833 5.58 1.309 8.358c.119.694.238 1.388.357 2.082c.476 2.778.992 5.532 1.546 8.262c2.217 10.935 5.051 21.693 8.449 32.139c6.795 20.893 16.128 39.918 27.775 56.677c2.874 4.138 5.967 8.173 9.243 12.065c3.277 3.892 6.738 7.641 10.356 11.188c7.018 6.879 14.379 13.126 21.997 18.616c12.779 9.213 25.845 15.843 38.825 19.71c6.141 1.829 12.112 2.756 17.788 2.756c3.135 0 5.943-.242 8.395-.608c5.2-.777 9.221-4.015 10.756-8.664c.777-2.35.777-4.823 0-7.173z" />
      </svg>
    ),
  },
  {
    name: "Express",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="currentColor">
        <path d="M254.328 94.077c-.815-17.093-21.432-25.714-35.029-14.645c-4.589 3.735-8.234 8.523-10.876 13.918c-2.642 5.395-4.284 11.295-4.866 17.335c-.582 6.04-.005 12.22 1.714 17.996c1.719 5.776 4.635 11.149 8.644 15.625c4.009 4.476 9.111 7.955 14.758 10.06c5.647 2.105 11.84 2.837 17.93 2.118c6.09-.719 12.078-2.789 17.378-5.999c5.3-3.21 9.911-7.56 13.363-12.739c3.452-5.179 5.745-11.187 6.651-17.415c.906-6.228.425-12.677-1.394-18.718z" />
        <path d="M1.672 161.923c.815 17.093 21.432 25.714 35.029 14.645c4.589-3.735 8.234-8.523 10.876-13.918c2.642-5.395 4.284-11.295 4.866-17.335c.582-6.04.005-12.22-1.714-17.996c-1.719-5.776-4.635-11.149-8.644-15.625c-4.009-4.476-9.111-7.955-14.758-10.06c-5.647-2.105-11.84-2.837-17.93-2.118c-6.09.719-12.078 2.789-17.378 5.999c-5.3 3.21-9.911 7.56-13.363 12.739c-3.452 5.179-5.745 11.187-6.651 17.415c-.906 6.228-.425 12.677 1.394 18.718z" />
      </svg>
    ),
  },
  {
    name: "Django",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="#092E20">
        <path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193c-65.098 0-97.98-29.725-97.98-86.861c0-55.263 35.312-92.043 87.197-92.043c8.26 0 14.453.58 26.622 2.32V0zm0 106.275c-8.549-2.32-13.582-3.188-20.775-3.188c-31.756 0-51.268 19.514-51.268 51.847c0 31.466 17.775 48.369 51.268 48.369c7.193 0 13.873-.29 20.775-1.449V106.275z" />
        <path d="M255.731 77.619v155.64c0 28.566-2.03 42.148-8.26 54.024c-5.74 10.581-13.293 17.194-28.857 25.744l-49.238-23.425c15.564-8.26 23.117-14.742 28.566-24.895c5.74-10.581 7.48-22.457 7.48-53.734V77.619h50.309z" />
      </svg>
    ),
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GraphQL",
  "REST APIs",
];

const experiences = [
  {
    title: "Software Engineer (Django)",
    company: "Cloudtronics",
    location: "Remote",
    period: "Jan 2023 - Present (2 years 6 months)",
    description:
      "Led backend development using Django, designing and maintaining robust APIs, authentication systems, and database schemas for various web applications.",
    achievements: [
      "Built and optimized CI/CD pipelines to automate testing, deployment, and environment provisioning, ensuring fast and reliable delivery across projects.",
      "Occasionally contributed to front-end development (React, Next.js), ensuring full-stack alignment and seamless integration.",
      "Designed and implemented real-time features using WebSocket and async architecture for instant updates (e.g., chat systems, live dashboards).",
      "Worked closely with cross-functional teams to define system architecture, ensure scalability, and improve overall developer workflow.",
    ],
  },
  {
    title: "Software Developer (Electron + Next.js)",
    company: "Snocko-tech",
    location: "Remote",
    period: "Jan 2023 - Jan 2025 (2 years 1 month)",
    description:
      "Developed a cross-platform desktop chat application using Next.js and Electron, focusing on seamless performance, real-time communication, and intuitive user experience.",
    achievements: [
      "Implemented core features including multi-room messaging, real-time updates, and local data persistence.",
      "Designed and built a complete CI/CD pipeline to automate build, test, and deployment for macOS and Windows.",
      "Integrated auto-update functionality using Electron’s update system for smooth delivery of new versions.",
      "Handled code signing and certificate management for Windows (SignTool) and macOS (Apple Developer ID), ensuring security and compliance.",
      "Collaborated across teams to ensure development best practices, consistent versioning, and secure release management.",
    ],
  },
  {
    title: "Junior Software Developer (Internship – React.js)",
    company: "Customix.co",
    location: "Bangkok, Thailand",
    period: "Oct 2021 - Mar 2022 (6 months)",
    description:
      "Contributed to the development of a WYSIWYG website builder tailored for client use, enabling non-technical users to create and customize web pages.",
    achievements: [
      "Focused on front-end development using React.js, building dynamic components and enhancing user interaction within the page editor.",
      "Collaborated with senior developers to implement drag-and-drop features, real-time previews, and reusable UI components.",
      "Gained experience in component-based architecture, responsive design, and modern front-end development workflows.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Kasetsart University, Thailand",
    year: "2022",
    details:
      "Graduated with a Bachelor of Computer Engineering degree from Kasetsart University, Thailand. GPA: 3.03",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding relative py-20 overflow-hidden">
        <AnimatedGridPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-30"
          )}
        />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I’m a passionate and driven software engineer with a strong love
              for learning and problem-solving. With experience across
              full-stack development—ranging from backend systems and CI/CD
              pipelines to desktop and web applications—I bring adaptability,
              perseverance, and a solution-oriented mindset to every project I
              work on.
              <br />
              <br />I am currently seeking new opportunities in Australia as I
              transition to living there permanently. I strongly believe in my
              ability to learn anything required to deliver high-quality results
              and thrive in fast-paced environments. My strengths lie in
              analytical thinking, consistent improvement, and the determination
              to overcome challenges, no matter how complex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skill Levels */}
              <div>
                <div className="relative flex items-center justify-center h-96">
                  <OrbitingCircles>
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                      >
                        {skill.icon}
                      </div>
                    ))}
                  </OrbitingCircles>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Technologies I Work With
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="tech-tag">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding py-16">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Work Experience
            </h2>

            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-8 max-w-2xl mx-auto"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Class of {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
