import { AboutMe } from "../components/AboutMe"
import { ChooseRoom } from "../components/ChooseRoom"
import { NavBar } from "../components/NavBar"
import { RoomSlider } from "../components/RoomSlider"

export const Home =()=>
{
    return(
        <div>
            <NavBar/>
            <ChooseRoom />
            <RoomSlider/>
            <AboutMe />
        </div>
    )
}