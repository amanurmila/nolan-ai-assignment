import { FaShieldAlt } from "react-icons/fa";

const SecureSection = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Secure</h2>
        <p className="text-2xl font-light mb-6">
          Don’t worry, your data is secure and encrypted with{" "}
          <span className="font-semibold">Nolan AI</span>
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          We take your privacy and the ownership of your work very seriously. We
          respect your creative content and have no rights over it. We do not
          use your work for training our models or for any other purposes
          without your explicit consent.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 flex items-center justify-center shadow-xl">
          <FaShieldAlt className="text-6xl text-white drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
