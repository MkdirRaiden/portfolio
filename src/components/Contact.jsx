import { BsFillSendFill } from "react-icons/bs";
import { contactBg } from "../utils";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { styles } from "../styles";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = "service_bbi9kk7";
  const TEMPLATE_ID = "template_07gqnoj";
  const PUBLIC_KEY = "f0vBkdpQjIShl_puf";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );
      if (res.status !== 200) throw new Error(res.text);
      e.target.reset();
      toast.success("Message send successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="border-t-4 md:min-h-[120vh] min-h-[110vh] text-gray-300 border-white md:px-32 px-4 md:py-20 py-10 relative"
    >
      {/* <div className="absolute left-0 top-0 wh-full">
        <img className="wh-full" src={contactBg} alt="bg image" />
      </div> */}
      {/* <div className="absolute wh-full left-0 top-0 bg-primary opacity-90" /> */}
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:w-2/5 w-full mx-auto">
        <form
          className=" bg-black-100 p-8 octagon"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="pb-4">
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact Me</h3>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label htmlFor="from_name">Name</label>
            <input
              className="rounded-sm inputClass w-full h-10 p-2"
              type="text"
              name="from_name"
              id="from_name"
              required
              placeholder="Your name..."
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label htmlFor="from_email">Email</label>
            <input
              className="rounded-sm w-full inputClass h-10 p-2"
              type="text"
              name="from_email"
              id="from_email"
              required
              placeholder="Your email..."
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="rounded-sm w-full inputClass max-h-28 h-24 p-2"
              name="message"
              id="message"
              required
              placeholder="Leave your message here..."
            ></textarea>
          </div>
          <div className="mt-2 flex justify-end">
            <button
              disabled={loading}
              className={`w-fit h-10 py-2 px-4 flex gap-2 items-center text-black bg-[#a1bbff] hover:text-white rounded-sm ${
                loading ? "hover:bg-none" : "hover:bg-[#4479fd]"
              }`}
              type="submit"
            >
              <span>{loading ? "sending..." : "send"}</span>{" "}
              {!loading && <BsFillSendFill />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
