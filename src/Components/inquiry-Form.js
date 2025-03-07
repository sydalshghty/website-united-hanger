import "../CSS/inquiry-Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


function Inquiryform(){

    const myNavigate = useNavigate();

    const navigate = () => {
        myNavigate("/inquiries")
    }
    return(
        <div className="inquiry-Form">
            <form>
                <FontAwesomeIcon
                onClick={navigate} 
                className="icon-Mark" icon={faTimes}/>
                <div className="all-Inputs">
                    <div className="input-Name">
                        <label>full name</label>
                        <input
                        type="text" name="Full-Name" required/>
                    </div>
                    <div className="input-Email">
                        <label>email</label>
                        <input type="email" name="Email" required/>
                    </div>
                    <div className="input-Phone">
                        <label>phone</label>
                        <input type="number" name="Phone" required/>
                    </div>
                    <div className="input-Submit">
                        <input
                        onSubmit={(e) => {
                            e.preventDefault();
                        }} 
                        type="submit" value={"submit"}/>
                    </div>
                    <div className="text-Content">
                        <p>after submit your inquiry, we will contact you to confirm your order thank you for your business</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Inquiryform;