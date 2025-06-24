import React, { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Proxima Cloud Solutions!");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative">
      {/* MacBook window bar */}
      <div className="flex items-center h-10 px-4 rounded-t-xl bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700">
        <span className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        </span>
        <span className="mx-auto text-xs text-neutral-500 dark:text-neutral-400 font-mono select-none">
          proxima-cloud-contact.js
        </span>
      </div>
      {/* Content */}
      <div className="p-6 md:p-8">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Contact Proxima Cloud Solutions
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Let's build something great together. Fill out the form and our team will get back to you soon.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your Company"
                value={form.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            />
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-cyan-600 to-blue-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-cyan-800 dark:from-cyan-900 dark:to-blue-900"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}