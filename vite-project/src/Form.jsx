import "./Form.css"
import Phone from "./assets/contactus/phone.png"
import Email from "./assets/contactus/Email.png"
import Place from "./assets/contactus/Place.png"
import trp from "./assets/contactus/trp.png"


function Form() {
    return (
        <div id="container">
            <span id="conducthead">Contact us</span>
            <div id="container-items">
                <div id="officecontainer">

                    <ul>
                        <span id="officehead">OFFICE DETAILS</span>
                        <li id="phone">
                            <div><img src={Phone} alt="Phone" /></div>
                            <div id="number">995082301558</div>
                        </li>
                        <li id="email">
                            <div><img src={Email} alt="Email" /></div>
                            <div id="emailid">Desflyer.tech@gamil.com</div>
                        </li>
                        <li id="address">
                            <div><img src={Place} alt="Place" /></div>
                            <div id="add">
                                123, Raja Street,
                                Kumbakonam,
                                Thanjavur District,
                                Tamil Nadu, 612001,
                                India.
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="chatcontainer">
                    <div id="chathead">Chat With Us</div>
                    <div id="chatcontainer-items">
                        <form>
                            <div >
                                <input id="name1" type="text" placeholder="First Name" />
                                <input id="name2" type="text" placeholder="Last Name" />
                            </div>
                            <input id="chatemail" type="email" placeholder="Enter Email" />
                            <input id="num" type="number" placeholder="Contact No" />
                            <input id="chatadd" name="address" type="text" placeholder="Enter Address" />
                            <input id="pin" type="number" placeholder="Pincode" />
                            <input id="formproduct" type="text" placeholder="Select Product" />
                            <input id="message" type="text" placeholder="Message" />
                        </form>

                        <div id="image">
                            <div id="para1">Tarpaulins are used across a wide range of applications, from the construction sector to agriculture, from home use to commercial use.
                            </div><br />
                            <img src={trp} alt="trp" /><br />
                            <div id="para2"> In construction projects, tarpaulins are used to protect materials and equipment, while in agriculture, they cover products to provide protection.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form