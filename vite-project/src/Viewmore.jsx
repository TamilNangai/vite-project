import "./Viewmore.css"
import Nextpage from "./vite-project/src/viewmore.png"
function Viewmore() {
    return (
        <div>
        <button id='Group'>
            <span id="ViewmoreText">View More</span>
            <img className="Viewmoreimage " src={Nextpage} alt="nextpage"/>
        </button>
        </div>


    )
}

export default Viewmore