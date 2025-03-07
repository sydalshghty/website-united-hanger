import "../CSS/form.css";
import { useState,useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Form(){

    const [DataSettings,setDataSettings] = useState([]);

    const getAllSettings = async () => {
        await fetch("https://united-hanger-2025.up.railway.app//api/settings",{
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setDataSettings(data.settings))
    }

    useEffect(() => {
        getAllSettings();
    },[]);

    console.log(DataSettings)

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/inquiry-Form")
    }
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleName = (value) => {
        setName(value);
    }
    const handlePhone = (value) => {
        setPhone(value);
    }
    const handleEmail = (value) => {
        setEmail(value);
    }
    const handleMessage = (value) => {
        setMessage(value);
    }
    const handleSubmit = () => {
        const nameRe = /^[A-Za-z\s]+$/;
        const validationName = nameRe.test(name);

        sessionStorage.setItem("Name", name);
    
        const phoneRe = /^[0-9]+$/;
        const validationPhone = phoneRe.test(phone);

        sessionStorage.setItem("Phone", phone);
    
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validationEmail = emailRe.test(email);

        sessionStorage.setItem("Email", email);

        if(validationName === false){
            console.log("false");
        }
        if(validationPhone === false){
            return false;
        }
        if(validationEmail === false){
            return false;
        }
         return true;
    }
    sessionStorage.setItem("Message", message);
    const inputName = useRef(null);
    function FocusInputName(){
        if(inputName.current){
            inputName.current.setAttribute("data-place", inputName.current.getAttribute("placeholder"));

            inputName.current.setAttribute("placeholder", "")
        }
    }
    function blurInputName(){
        if(inputName.current){
            inputName.current.setAttribute("placeholder", inputName.current.getAttribute("data-place"));
            inputName.current.setAttribute("data-place", "")
        }
    }

    const inputPhone = useRef(null);
    function FocusInputPhone(){
        if(inputPhone.current){
            inputPhone.current.setAttribute("data-place", inputPhone.current.getAttribute("placeholder"));

            inputPhone.current.setAttribute("placeholder", "")
        }
    }
    function blurInputPhone(){
        if(inputPhone.current){
            inputPhone.current.setAttribute("placeholder", inputPhone.current.getAttribute("data-place"));
            inputPhone.current.setAttribute("data-place", "")
        }
    }

    const inputEmail = useRef(null);
    function FocusInputEmail(){
        if(inputEmail.current){
            if(inputEmail.current){
                inputEmail.current.setAttribute("data-place", inputEmail.current.getAttribute("placeholder"));
    
                inputEmail.current.setAttribute("placeholder", "")
            }
        }
    }
    function blurInputEmail(){
        if(inputEmail.current){
            if(inputEmail.current){
                inputEmail.current.setAttribute("placeholder", inputEmail.current.getAttribute("data-place"));
                inputEmail.current.setAttribute("data-place", "")
            }
        }
    }

    const inputMessage = useRef(null);
    function FocusInputMessage(){
        if(inputMessage.current){
            if(inputMessage.current){
                inputMessage.current.setAttribute("data-place", inputMessage.current.getAttribute("placeholder"));
                inputMessage.current.setAttribute("placeholder", "");
            }
        }
    }
    function blurInputMessage(){
        if(inputMessage.current){
            if(inputMessage.current){
                inputMessage.current.setAttribute("placeholder", inputMessage.current.getAttribute("data-place"));
                inputMessage.current.setAttribute("data-place", "");
            }
        }
    }
    return(
        <div className="form-Departemant">
            <div className="address-content">
                <div className="address-content-one">
                    <p>Address: VG/C3 Industrial zone,</p>
                    <p>10th of Ramadan City, Cairo, Egypt</p>
                    <p>Phone: +20 111 43 777 - +20 112 21 13 999</p>
                    <p onClick={handleClick}>Email: info@unitedhanger.com</p>
                </div>
                <div className="address-content-two">
                    <h2 className="head">Business Hours</h2>
                    <p>Saturday - Wedensday - 9am to 5pm</p>
                    <p>Thursday - 9am to 2pm</p>
                    <p>Friday - Closed</p>
                </div>
            </div>
            <div className="form-content">
                <h2>We are at your service at any time , Feel free to ask questions , 
                Happy to do business with you</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-content">
                        <input ref={inputName}
                         onChange={(even) => {
                            handleName(even.target.value);
                        }}
                        onFocus={FocusInputName}
                        onBlur={blurInputName}
                        className="input-name" 
                        type="text" 
                        placeholder="Name" 
                        name="Name" required
                        />
                        <input 
                        ref={inputPhone}
                         onChange={(even) => {
                            handlePhone(even.target.value)
                        }}
                        onFocus={FocusInputPhone}
                        onBlur={blurInputPhone}
                        className="input-number"
                         type="number"
                        placeholder="Contact Phone"
                         name="Phone" required/>
                        <input
                        ref={inputEmail} 
                        onFocus={FocusInputEmail}
                        onBlur={blurInputEmail}
                        onChange={(even) => {
                            handleEmail(even.target.value);
                        }}
                        className="input-email"
                         type="email"
                          placeholder="Email"
                           name="Email" required/>
                    </div>
                    <textarea
                    ref={inputMessage}
                    onFocus={FocusInputMessage}
                    onBlur={blurInputMessage}
                     onChange={(even) => {
                        handleMessage(even.target.value);
                    }} 
                    placeholder="Message"
                     name="Message" 
                     maxLength={"100"}
                      minLength={"10"}></textarea>
                    <input className="submit-button" type="submit" value={"send"}/>
                </form>
            </div>
        </div>
    )
}
export default Form;