
type StepProps = {
    number: number;
    label: string;
    active?: boolean; // Optional, since you don't pass it for inactive steps
  };
const Step: React.FC<StepProps> = ({ number, label, active=false }) => {
    return (
      <div className="flex flex-wrap  items-center space-x-2">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full border ${
            active ? "border-custom-blue bg-white text-custom-blue" : "border-gray-300 text-custom-blue"
            }`}
        >
          {number}
        </div>
            <div className="border border-gray-300 w-10 flex "></div>  
        <span
          className={`text-sm ${
            active ? "text-custom-blue" : "text-custom-blue"
          }`}
        >
          {label}
        </span>
      </div>
    );
  };
export default Step  