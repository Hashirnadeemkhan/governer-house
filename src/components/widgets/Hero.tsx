import Wrapper from "../shared/Wrapper"; 
import Image from "next/image";
import Button from "../shared/Button";
import HeroImg from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className="bg-zinc-100">
      <div className="relative z-0">
        {/* Background image using Next.js Image component */}
        <Image
          src="/bg_house.jpg" // Path to your image in the public directory
          alt="Background"
          layout="fill" // Make the image cover the entire div  
          className="z-0"
        />
        <div className="absolute inset-0 z-50 w-full bg-zinc-100 bg-opacity-80"></div>
        
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center gap-y-20 mb-10">
            {/* Left content */}
            <div className="w-full lg:text-left text-center z-50 mt-32">
              <h1 className="lg:text-6xl font-extrabold tracking-wider whitespace-nowrap text-custom-blue text-4xl">Governor Sindh</h1>
              <h2 className="text-custom-blue lg:text-[2.5rem] text-3xl font-normal mt-2">Kamran Khan Tessori</h2>
              <h2 className="text-[#2eb6e8] lg:text-4xl text-3xl font-bold tracking-wider mt-6 max-w-md">Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
              <h4 className="text-custom-blue text-2xl font-bold mt-5">Earn up to $5,000 / month</h4>
              <h4 className="text-custom-blue text-2xl font-bold mt-5 max-w-md mb-10">Now admissions are open in Hyderabad</h4>
             <div className="flex flex-col  lg:flex-row gap-x-20 gap-y-5 w-full">
              <div className="w-full md:w-auto"><Button text={"APPLY NOW"}/></div>
              <div className="items-center justify-center flex flex-col gap-y-1 ">
              <span className="text-custom-blue text-3xl font-extrabold w-40 tracking-wider text-center ">562,143</span>
              <p className="text-custom-blue tracking-wider font-light text-sm ">Accepted Applications</p>
              </div>
            </div>
            </div>

            {/* Right content */}
            <div className="relative flex items-end justify-center w-full md:m-auto md:justify-end z-50">
              <Image
                src={HeroImg} // Adjust this path as necessary
                alt="Hero-img"
                width={1600} // Set the desired width for the image
                height={1212} // Set the desired height for the image
                className="h-full w-full  lg:w-[1000px]" // Responsive size adjustments
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;
