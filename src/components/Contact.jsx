import { call, location, mail } from "../assets";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7c4dc468-8461-4e41-ab8c-3454733a902e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center mt-16 justify-center gap-20 md:gap-[80px] px-4"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-15 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[120px]">
        <div className="flex flex-col gap-8 lg:gap-[30px] items-center lg:items-start text-center lg:text-left">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Let's Talk
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-full lg:max-w-[550px] text-[#D8D8D8] text-xl"
          >
            I'm currently available to take on new projects. So feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col gap-4 lg:gap-8 text-[#D8D8D8] text-sm"
          >
            <div className="flex items-center gap-5">
              <img src={mail} alt="Mail" className="" />
              <p>muzamil987614@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={call} alt="Call" />
              <p>03008430810</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={location} alt="Location" />
              <p>Lahore - Iqbal Town, Pakistan</p>
            </div>
          </motion.div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center lg:items-start gap-8 w-full lg:w-auto"
        >
          <motion.label
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            htmlFor="name"
            className="text-[#D8D8D8] text-xl font-medium"
          >
            Your Name
          </motion.label>
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="border-none w-full lg:w-[700px] h-[60px] lg:h-[78px] rounded pl-5 bg-[#1c1c21] text-xl"
          />
          <motion.label
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 1 }}
            htmlFor="email"
            className="text-[#D8D8D8] text-xl font-medium"
          >
            Your Email
          </motion.label>
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 1 }}
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="border-none w-full lg:w-[700px] h-[60px] lg:h-[78px] rounded pl-5 bg-[#1c1c21] text-xl"
          />
          <motion.label
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
            htmlFor="message"
            className="text-[#D8D8D8] text-xl font-medium"
          >
            Write Your Message Here
          </motion.label>
          <motion.textarea
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            className="w-full lg:w-[650px] border-none p-6 rounded bg-[#1c1c21] text-xl"
          />
          <button
            type="submit"
            className="border-none text-white rounded-[40px] text-xl py-4 px-9 mb-12 cursor-pointer transition-transform transform hover:scale-105 bg-neutral-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
