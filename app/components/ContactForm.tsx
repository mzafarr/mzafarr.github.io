import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white py-14 px-4 sm:px-6 lg:px-8" id="contact">
      <h2 className="text-5xl text-center font-semibold pb-14">Contact Form</h2>
      <div className="max-w-2xl mx-auto">
        <form
          action="https://formspree.io/f/xzbqlanl"
          method="POST"
          className="rounded-lg p-5 shadow-lg bg-[#f3f3f3d0]"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              className="focus:border-[#daccfa] focus:ring-[#daccfa] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:border-[#daccfa] focus:ring-[#daccfa] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              style={{ resize: "none" }}
              className="focus:border-[#daccfa] focus:ring-[#daccfa] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows={6}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            className="flex justify-center bg-violet-700 text-center hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-20"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
