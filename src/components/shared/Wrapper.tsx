import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="xl:max-w-screen-2xl max-w-screen-lg  px-4 py-4 md:px-10 xl:px-28 justify-center ">
      {children}
    </div>
  );
};

export default Wrapper;
