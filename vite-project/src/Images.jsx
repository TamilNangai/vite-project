import "./Images.css"
import one from "./assets/i1.png"
import two from "./assets/i2.png"
import three from "./assets/i3.png"
import four from "./assets/i4.png"
import five from "./assets/i5.png"
import six from "./assets/i6.png"
import seven from "./assets/i7.png"
import eight from "./assets/i8.png"
import nine from "./assets/i9.png"
import ten from "./assets/i10.png"
import eleven from "./assets/i11.png"
import twelve from "./assets/i12.png"
import thirteen from "./assets/i13.png"
import fourteen from "./assets/i14.png"
import fifteen from "./assets/i15.png"
function Images() {
  return (
    <div id="flex-container">
        <div class="flex-item"><img src={one} alt="i1" /></div>
        <div class="flex-item"><img src={two} alt="i2" /></div>
        <div class="flex-item"><img src={three} alt="i3" /></div>
        <div class="flex-item"><img src={four} alt="i4" /></div>
        <div class="flex-item"><img src={five} alt="i6" /></div>
        <div class="flex-item"><img src={six} alt="i7" /></div>
        <div class="flex-item"><img src={seven} alt="i8" /></div>
        <div class="flex-item"><img src={eight} alt="i9" /></div>
        <div class="flex-item"><img src={nine} alt="i10" /></div>
        <div class="flex-item"><img src={ten} alt="i11" /></div>
        <div class="flex-item"><img src={eleven} alt="i5" /></div>
        <div class="flex-item"><img src={twelve} alt="i12" /></div>
        <div class="flex-item"><img src={thirteen} alt="i13" /></div>
        <div class="flex-item"><img src={fourteen} alt="i14" /></div>
        <div class="flex-item"><img src={fifteen} alt="i15" /></div>
        

    </div>
  )
}

export default Images