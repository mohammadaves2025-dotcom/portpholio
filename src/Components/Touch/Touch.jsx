import React, { useState } from "react";
import toast from "react-hot-toast";

const Touch = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "b3d7e990-d276-4db3-bee2-0c8243615500");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        toast.success("Message sent successfully")
        form.reset();
      } else {
        setResult("Failed to send message.");
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="touch" className="bg-zinc-950 text-white w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
        Get in <span className="text-green-500">Touch</span>
      </h1>

      <div className="mt-12 sm:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">

        {/* Contact Info */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
            <span className="text-white">Let's</span>{" "}
            <span className="text-green-500">Talk</span>
          </h2>

          <p className="mt-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
            I'm currently available for new projects. Feel free to send me a
            message about anything you'd like me to work on. You can contact me
            anytime via email, phone, or location info below.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-zinc-300 text-sm sm:text-base">
            <p className="flex items-center gap-3">
              📧 <span className="break-all">mohammadaves2025@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              📞 <span>+91-9770448008</span>
            </p>
            <p className="flex items-center gap-3">
              📍 <span>New Delhi, INDIA</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <label className="text-base sm:text-lg font-semibold">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded-lg bg-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />

            <label className="text-base sm:text-lg font-semibold mt-4">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-3 rounded-lg bg-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />

            <label className="text-base sm:text-lg font-semibold mt-4">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Enter Your Message Here"
              className="w-full p-3 rounded-lg bg-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="
              mt-6 
              px-8 sm:px-12 
              py-3 sm:py-4 
              rounded-full
              font-semibold 
              text-white 
              text-sm sm:text-lg
              bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500
              shadow-lg shadow-emerald-500/30
              hover:shadow-emerald-500/60
              hover:scale-105 active:scale-95
              transition-all duration-300
              w-full sm:w-auto
            "
            >
              Submit Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );

};

export default Touch;

