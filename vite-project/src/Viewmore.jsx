import "./Viewmore.css"
import Nextpage from "./assets/Viewmore.png"
function Viewmore() {
    return (
        <div id="container">
        <button id='GroupVm'>
            <span id="ViewmoreText">View More</span>
            <img className="Viewmoreimage " src={Nextpage} alt="nextpage"/>
        </button>
        </div>


    )
}

export default Viewmore