import "../CSS/inquiries.css";
import { useNavigate } from "react-router-dom";
function Inquiries(){
    const navigate = useNavigate();

    const handleInquiry = () => {
        navigate("/inquiry-Form")
    }
    return(
        <div className="inquiries-departemant">
            <div className="hanger-Name">
                <div className="col-one">
                    <h3>hanger name</h3>
                    <p></p>
                </div>
                <div className="col-Size">
                    <div>
                        <h3>size</h3>
                        <p></p>
                    </div>
                    <p className="paragraph">36 cm</p>
                    <p className="paragraph">40 cm</p>
                    <p className="paragraph">42 cm</p>
                </div>
                <div className="col-Color">
                    <div className="color">
                        <h3>color</h3>
                        <p></p>
                    </div>
                    <div className="white">
                        <p className="paragraph">white</p>
                        <p className="icon"></p>
                    </div>
                    <div className="black">
                        <p className="paragraph">black</p>
                        <p className="icon"></p>
                    </div>
                </div>
                <div className="col-materials">
                    <h3>raw materials</h3>
                    <p></p>
                </div>
                <div className="col-logo">
                    <h3>logo printing</h3>
                    <div className="col-Yes-and-No">
                        <div className="no">
                             <p className="icon"></p>
                            <p className="paragraph">no</p>
                         </div>
                         <div className="yes">
                            <p className="icon"></p>
                            <p className="paragraph">yes</p>
                        </div>
                        <div className="upload-logo">
                            <p className="paragraph">upload logo</p>
                            <div>
                                <p className="icon"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-inquiry">
                    <p onClick={handleInquiry}>add inquiry</p>
                </div>
            </div>
            <div className="inquiries-Details">
                <div className="content-Details">
                    <div className="heading">
                        <h3>inquiries details</h3>
                    </div>
                    <div className="model-MH">
                        <p>model name: mh</p>
                        <p>size: 26 cm</p>
                        <p>color: white</p>
                        <p>raw material: pp</p>
                        <p>logo print: no</p>
                    </div>
                    <div className="model-RH">
                        <p>model name: rh</p>
                        <p>size: 36 cm</p>
                        <p>color: black</p>
                        <p>raw material: pp</p>
                        <p>logo print: yes</p>
                    </div>
                    <p className="number-One">1</p>
                    <p className="number-two">2</p>
                </div>
                <div className="send-inquiry">
                    <p onClick={handleInquiry}>send inquiry</p>
                </div>
            </div>
        </div>
    )
}
export default Inquiries;