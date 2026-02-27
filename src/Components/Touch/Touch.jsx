import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Touch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

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
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Server error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="touch" className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Branding & Info */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
              // Contact Me
            </h2>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Let's <span className="italic text-zinc-500 underline decoration-emerald-500/40">Work</span> Together.
            </h1>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a specific project in mind or just want to chat about AI and Web Dev—my inbox is always open.
            </p>

            <div className="space-y-6">
              {[
                { icon: <HiOutlineMail />, label: "Email", value: "mohammadaves2025@gmail.com" },
                { icon: <HiOutlinePhone />, label: "Phone", value: "+91-9770448008" },
                { icon: <HiOutlineLocationMarker />, label: "Location", value: "New Delhi, India" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.label}</p>
                    <p className="text-zinc-200 font-medium group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:w-3/5">
            <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-2xl">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 focus:outline-none transition-all resize-none placeholder:text-zinc-700"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 bg-emerald-500 text-black font-black text-lg rounded-xl overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Touch;