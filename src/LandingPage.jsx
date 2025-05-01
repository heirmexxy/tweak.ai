import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AI Visibility Optimizer</h1>
        <nav>
          <a href="#features" className="mr-6 hover:underline">Features</a>
          <a href="#how-it-works" className="mr-6 hover:underline">How It Works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">Get Your Product Discovered by AI</h2>
        <p className="text-xl mb-6">Make sure your solution shows up when AI tools search for answers.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Request Early Access
        </button>
      </section>

      <section id="features" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Smart Metadata Tagging</h4>
            <p>Automatically embed structured tags that AI models can read and interpret.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">AI Schema Recommendations</h4>
            <p>Receive suggestions to align your product pages with AI prompt patterns.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Visibility Analytics</h4>
            <p>Track how often and where your product appears in AI responses.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-blue-100 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">How It Works</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Install our lightweight script on your website or use our plugin. Our AI agent will analyze
          your content and optimize its discoverability across leading AI models and prompt tools.
        </p>
      </section>

      <section id="contact" className="py-16 px-8 text-center bg-gray-50">
        <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
        <p className="mb-6">Join the waitlist or get in touch for a demo.</p>
        <input type="email" placeholder="Enter your email" className="border border-gray-300 px-4 py-2 rounded mr-2" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AI Visibility Optimizer. All rights reserved.
      </footer>
    </div>
  );
}