import { Icon } from "@iconify/react/dist/iconify.js";

export const MainButton = ({ text, round, icon }) => {
  return (
    <button
      className={`bg-[#ff5200] min-w-[100px] text-[13px] flex gap-1 text-center items-center justify-center ${
        round ? "rounded-[20px]" : "rounded-[3px]"
      } text-white px-4 py-2 hover:bg-[#ff5200] transition duration-300 ease-in-out`}
    >
      {icon && <Icon icon={icon} width="24" height="24" />}
      {text}
    </button>
  );
};
