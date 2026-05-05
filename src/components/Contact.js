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
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden max-w-4xl mx-auto mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div
        className="flex-1 bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl w-full border border-gray-100 dark:border-gray-700 shadow-xl"
      >
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-2">Get in touch</p>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
        >
          <label className="flex flex-col gap-2">
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-50 dark:bg-gray-900 py-3.5 px-6 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-gray-50 dark:bg-gray-900 py-3.5 px-6 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-50 dark:bg-gray-900 py-3.5 px-6 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium resize-none"
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 py-3.5 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md transition-all active:scale-95"
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
