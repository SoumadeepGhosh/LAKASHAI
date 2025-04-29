
import * as React from "react"
import { Button } from "./ui/button"

// Self-contained button component for the footer

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              LAKSH<span className="text-[#00B7FF]">AI</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Your AI-powered career coach helping you land your dream job with personalized resumes, cover letters, and
              interview preparation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="/ai-cover-letter" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                  Cover Letter Generator
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                  Job Market Analysis
                </a>
              </li>
              <li>
                <a href="/interview" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                  Mock Interviews
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Column */}
          <div className="space-y-4 gap-2">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="flex items-center space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:contact@lakshai.com" className="text-gray-400 hover:text-[#00B7FF] transition-colors">
                contact@lakshai.com
              </a>
            </div>
            <div className="pt-4">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333333] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {currentYear} LakshAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-[#00B7FF] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-[#00B7FF] transition-colors">
              Terms of Service
            </a>
            <div className="text-gray-500">Made with 💜 by Soumadeep</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
