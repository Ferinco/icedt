import { Icon } from "@iconify/react/dist/iconify.js";
import { MainButton } from "./button";

export const EmailInput =()=> {
    return(
    <div className="flex w-full mt-3">
<input className="w-4/6 border border-r-0 py-2 px-3" placeholder="Your Email"/>
<MainButton text={"Subscribe"}/>

    </div>

    )
}

export const Select = ({ options = [], icon, placeholder = "Select..." }) => {
    return (
      <div className="relative">
        <div className="flex items-center border border-[#ccc] rounded-[3px] text-[13px] py-2 px-3 pr-8 w-full gap-2">
          {icon && <span className="w-5 h-5">{icon}</span>}
          <select
            className="w-full bg-transparent outline-none appearance-none pr-6"
          >
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#999] text-sm">
        <Icon icon="iconamoon:arrow-down-2-thin" width="24" height="24" />
        </div>
      </div>
    );
  };

  export const SearchInput = ()=> {
    return(
        <div className="flex items-center border p-3 max-w-[300px] justify-between mt-10 border-[#000] rounded-md">
<input placeholder="Search Here" className="outline-none border-none"/>
<Icon
              icon="iconamoon:search-light"
              width="24"
              height="24"
              color="#000"
             
            />
        </div>
    )
  }
  
  

