export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col  max-w-7xl relative w-full items-center"
    >
      <h2 className="text-2xl md:text-2xl font-bold font-jura-light uppercase text-light my-8 mt-20">
        Contact me
      </h2>
      <div className="flex flex-col sm:flex-row w-[95%] lg:w-[80%] font-jura-light text-light bg-bloody rounded-xl p-5">
        <div //LEFT SIDE
          className="flex flex-col justify-center items-center  "
        >
          <div className="flex sm:flex-col text-md items-center p-1 sm:p-4 m-2 w-full sm:w-auto">
            <i className="fa-solid fa-location-dot fa-xl sm:mb-3 mr-2 sm:mr-0"></i>
            <h2 className="font-jura mr-2 sm:mr-0">Adress</h2>
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
        <div //Right side
          className="flex flex-col font-jura-light text-sm text-light w-full border-t sm:border-t-0  sm:border-l border-light mt-4 pt-4 sm:pl-5"
        >
          <h1 className="text-lg">Send me a message</h1>
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <textarea
            className="p-2 text-black font-jura bg-light rounded-md my-2 w-full h-full min-h-[100px]"
            name="message"
            id=""
            placeholder="Enter Your Message"
          ></textarea>
        </div>
      </div>
    </section>
  );
}
