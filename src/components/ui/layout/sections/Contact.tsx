import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact_icon from "/src/assets/img/contact_icon.png";

export default function Contact() {
  // Track scroll progress for the section
  const contactRef = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: contactRef,
      offset: ["end start", "start end"],
    });

  // -------------------TITLE--------------------
  const projectsTitleIconX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-50, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const projectsTitleX: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [50, 0]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const titleY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, -300]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const titleOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0, 1]
  );

  // Section animation: Slide from above and fade in
  const contactSectionY: MotionValue<number> = useSpring(
    useTransform(scrollYProgress, [0, 1], [-700, -200]),
    {
      stiffness: 200,
      damping: 30,
    }
  );

  const contentOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [1, 0.7],
    [0, 1]
  );

  // Form state
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tcwheg8", // Replace with your EmailJS Service ID
        "template_prvk9yl", // Replace with your EmailJS Template ID
        formData,
        "8pIO-22VeYIUKOeXc" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <motion.section
      style={{
        y: contactSectionY,
        opacity: contentOpacity,
      }}
      ref={contactRef}
      id="contact"
      className="flex flex-col max-w-7xl relative w-full items-center h-screen justify-center"
    >
      <motion.div // TITLE
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex items-center justify-center text-2xl md:text-3xl font-bold font-jura-light uppercase text-light translate-y-[290px]"
      >
        <motion.img
          style={{ x: projectsTitleIconX }}
          src={contact_icon}
          alt="an icon representing finished projects"
          className="w-10 md:w-12 h-10 md:h-13"
        />
        <motion.h2 style={{ x: projectsTitleX }} className="ml-2">
          Contact Me
        </motion.h2>
      </motion.div>
      <form // Body
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 sm:flex-row w-[95%] lg:w-[80%] h-[70%] font-jura-light text-light bg-bloody rounded-xl p-5"
      >
        <div // LEFT SIDE
          className="flex flex-col justify-center items-center"
        >
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-location-dot fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Address</h2>
            <p className="text-light/65 text-sm">Bašigovci bb</p>
            <p className="text-light/65 text-sm">Živinice 75270</p>
          </div>
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-phone fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Phone</h2>
            <p className="text-light/65 text-sm">+38761648575</p>
          </div>
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-envelope fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Email</h2>
            <p className="text-light/65 text-sm">
              nevres_muratovic@hotmail.com
            </p>
          </div>
        </div>
        <div // RIGHT SIDE
          className="flex flex-col font-jura-light text-sm text-light w-full border-t sm:border-t-0 sm:border-l border-light mt-4 pt-4 sm:pl-5"
        >
          <h1 className="text-lg">Send me a message</h1>
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <textarea
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full h-full min-h-[100px]"
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-red-600 text-light font-jura rounded-md my-2 w-full hover:bg-red-700 transition-colors cursor-pointer shadow-xl "
          >
            Send Message
          </button>
          {status && <p className="text-light/80 mt-2">{status}</p>}
        </div>
      </form>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute left-[0] hidden md:block sm:left-[calc(50%-300px)] md:left-[-0%] top-[12%] md:top-[15%] w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute right-[0] hidden lg:block lg:left-[25%] top-[20%] md:top-[15%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute right-[calc(50%-300px)] top-[15%] md:top-[15%] md:right-[-0%] w-[600px] lg:w-[600px] aspect-square rounded-full bg-red-500/50 md:bg-red-500/35 blur-[80px] opacity-40 -z-10"
      ></motion.div>
    </motion.section>
  );
}
