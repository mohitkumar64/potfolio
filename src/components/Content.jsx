import { motion } from "motion/react";
import { useState } from "react";
import LottieAnimation from "./lottieJson";
import contactus from "./img/Contactus.json"
import useMediaQuery from "./hook/MediaQuery"


export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log(isMobile);
  
    

  const [form, setForm] = useState({
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.message) {
      alert("Fill everything bro 😭");
      return;
    }

    // SEND TO BACKEND / API HERE
    console.log("Form submitted:", form);

    setForm({ email: "", message: "" });
  };

  return (
  <motion.div 
  name ={"contact"}
  className=" flex items-center w-full "
  >
     <motion.div 
      className="text-white flex-2 px-11 md:px-20 py-20 flex flex-col  gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-extrabold mb-5">Contact</h1>
      <p className="text-xl text-gray-300">
        Have a question or feedback? Send me a message.
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-8 md:w-1/2 mt-10"
      >

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your feedback…"
            rows="5"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 py-3 rounded-xl font-bold text-white text-lg"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>


    {!isMobile && <motion.div  className="flex-1 ">
          <LottieAnimation  animation={contactus}   />
      </motion.div>}
  </motion.div> 
   
  );
}
