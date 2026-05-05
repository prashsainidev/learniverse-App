"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import AmazingThankYouModal from "./ThankYouModal";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields before sending.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prashant Saini",
          from_email: form.email,
          to_email: "singingph.buddhu@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true); 
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-gray-900 w-full px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">Get in touch</p>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight">Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 w-full"
        >
          <label className="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 focus-within:border-indigo-600 dark:focus-within:border-indigo-400 transition-colors">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-transparent py-2 placeholder:text-gray-300 dark:placeholder:text-gray-600 text-gray-900 dark:text-white outline-none border-none font-medium text-lg w-full"
            />
          </label>
          <label className="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 focus-within:border-indigo-600 dark:focus-within:border-indigo-400 transition-colors">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-transparent py-2 placeholder:text-gray-300 dark:placeholder:text-gray-600 text-gray-900 dark:text-white outline-none border-none font-medium text-lg w-full"
            />
          </label>
          <label className="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 focus-within:border-indigo-600 dark:focus-within:border-indigo-400 transition-colors">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-transparent py-2 placeholder:text-gray-300 dark:placeholder:text-gray-600 text-gray-900 dark:text-white outline-none border-none font-medium text-lg resize-none w-full"
            />
          </label>
          <button
            type="submit"
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 py-3.5 px-8 rounded-full outline-none w-full sm:w-fit text-white font-bold shadow-md transition-all active:scale-95"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Render the Thank You Modal */}
      {showModal && (
        <AmazingThankYouModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
