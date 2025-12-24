import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="bg-[#0B1320] w-full max-w-xl  p-8 md:p-10 rounded-2xl shadow-lg">
      <form className="flex flex-col gap-6">
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-[#253451] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col mt-4 md:mt-0">
            <label className="text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="vincent@gmail.com"
              className="bg-[#253451] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="text-white mb-2">Subject</label>
          <input
            type="text"
            placeholder="What's this about"
            className="bg-[#253451] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-white mb-2">Message</label>
          <textarea
            placeholder="Tell me about your project or inquiry..."
            className="bg-[#253451] text-white rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          <IoIosSend className="text-xl" />
          <p className="md:text-xl text-sm">Send Message</p>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
