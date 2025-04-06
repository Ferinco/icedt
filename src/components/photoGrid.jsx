import { MainButton } from "./custom/button";
import { PhotoCard } from "./custom/photoCard";

export const PhotoGrid = () => {
  return (
    <div className="flex flex-col items-start gap-5 container mx-auto px-3 sm:px-0 lg:px-20 pb-20">
      <p>What are your interests?</p>
      <div class="grid grid-cols-12 gap-2 sm:gap-4 w-full ">
        <PhotoCard span={"col-span-12 md:col-span-8"} title={"Rafting"} image={"images/rafting.png"}/>
        <PhotoCard span={"col-span-6 md:col-span-4"} title={"Nature Walk"} image={"images/nature.png"}/>
        <PhotoCard span={"col-span-6 md:col-span-4"} title={"Bike Riding"} image={"images/bike.png"}/>
        <PhotoCard span={"col-span-12 sm:col-span-7 md:col-span-4"} title={"Bungee Jumping"} image={"images/bungee.png"}/>
        <PhotoCard span={"col-span-12 sm:col-span-5 md:col-span-4"} title={"Wine Tasting"} image={"images/wine.png"}/>
        <PhotoCard span={"col-span-12 sm:col-span-5 md:col-span-4"} title={"Coffee Tasting"} image={"images/coffee.png"}/>
        <PhotoCard span={"col-span-12 sm:col-span-7 md:col-span-8"} title={"Farm Visit"} image={"images/farm.png"}/>
        <PhotoCard span={"col-span-6 md:col-span-8"} title={"Camping"} image={"images/camping.png"}/>
        <PhotoCard span={"col-span-6 md:col-span-4"} title={"Kibera Tour"} image={"images/tour.png"}/>
      </div>
      <MainButton text={"Set"}/>
    </div>
  );
};
