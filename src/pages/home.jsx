import { Landing } from "../components/landing";
import { PhotoGrid } from "../components/photoGrid";
import {Testimonials} from "../components/testimonials";

export const Home = ()=> {
    return(
        <div>
            <Landing/>
            <PhotoGrid/>
            <Testimonials/>
        </div>
    )
}