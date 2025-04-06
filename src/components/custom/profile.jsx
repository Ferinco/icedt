import { Icon } from "@iconify/react/dist/iconify.js";

export const Profile = ({img}) => {
    return(

<div className="flex gap-1 items-center">
<div className="relative w-10 h-10 rounded-full">
<img src={img} className="w-10 h-10 object-contain rounded-full"/>
<span className="absolute top-0 right-0 w-[10px] aspect-square rounded-full bg-red-600"></span>


</div>
<Icon icon="iconoir:nav-arrow-down" width="18" height="18" color="#4a4a4a" />
</div>
    )
}