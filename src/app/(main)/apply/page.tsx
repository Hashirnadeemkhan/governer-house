import { FaFacebook } from "react-icons/fa";
import Step from "@/components/widgets/Step";


const Apply = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-1 mt-10 mb-1 lg:mb-10 lg:min-h-screen bg-white">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-xl  p-16 lg:max-w-2xl  space-y-14">
        <h1 className="text-center lg:text-3xl text-xl  text-custom-blue mb-4">
          Before continuing to the application
          <br className="lg:block " />
          please subscribe on these social media platforms.
        </h1>

        {/* Social Icon */}
        <div className="flex justify-center mb-6">
          <FaFacebook className="text-custom-blue text-4xl" />
        </div>

        {/* Continue Button */}
        <div className="relative group flex flex-col items-center w-full">
          {/* Hover Text */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-red-500 text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity w-full text-center">
            Click the icon above first.
          </span>
          <button className="p-4 px-14 text-white bg-[#6895b5] rounded-md font-semibold lg:w-auto w-full">   
            CONTINUE
          </button>
        </div>

        {/* Link */}
        <p className="mt-4 text-center text-sm text-black">
          Already applied?{" "}
          <a href="#" className="text-custom-blue">
            Get Admit Card
          </a>
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap items-center gap-y-4 justify-center space-x-6 mt-8">
        <Step number={1} label="Facebook" active />
        <Step number={2} label="Youtube" />
        <Step number={3} label="Twitter" />
        <Step number={4} label="Instagram" />
        <Step number={5} label="Apply" />
      </div>
    </div>
  );
};



export default Apply;
