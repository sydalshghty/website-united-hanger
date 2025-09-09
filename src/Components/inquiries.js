import "../CSS/inquiries.css";
import { useState } from "react";
import { useRef } from "react";

function Inquiries(){

    const AllMaterials = [
        {id: 1, material: "PP"},
        {id: 2, material: "PET"},
        {id: 3, material: "PVC"},
    ]
    //
    const Sizes = [
        {id: 1, size: 20},
        {id: 2, size: 30},
        {id: 3, size: 40},
        {id: 4, size: 50}
    ]
    //
    const Colors = [
        {id: 1, itemcolor: "white"},
        {id: 2, itemcolor: "black"},
    ]
    const [showMaterial,setShowMaterial] = useState(false);

    const [showIcon,setShowIcon] = useState(false);
    const [showYesIcon,setshowYes] = useState(false);

    //
     const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click(); // يفتح نافذة رفع الملف
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("تم رفع الصورة:", file.name);
    }
  };
//

const handleClick = () => {
  alert("Inquiry has been added successfully ✅");
};


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
                        <p className="p-size"></p>
                    </div>
                        <>
                        {Sizes.map((item,index) => {
                            return(
                                <p className="paragraph content-size" key={item.id}>{`${item.size}`} {`CM`}</p>
                            )
                        })}
                        </>
                </div>
                <div className="col-Color">
                    <div className="color">
                        <h3>color</h3>
                        <p className="p-color"></p>
                    </div>
                        <>
                        {Colors.map((color,index) => {
                            return(
                                <div className="white content-color" key={color.id}>
                                    <p className="paragraph color-name">{color.itemcolor}</p>
                                    <p className="icon icon-color" style={{backgroundColor: `${color.itemcolor}`}}></p>
                                </div>
                             )
                        })}
                        </>
                        
                </div>
                <div className={`col-materials `}>
                    <div>
                        <h3>raw materials</h3>
                        <p className="p-materials" onClick={() => {
                            setShowMaterial(!showMaterial)
                        }}></p>
                    </div>
                </div>
                <div className={`all-materials ${showMaterial ? "show" : ""}`}>
                    {AllMaterials.map((item,index) => {
                        return(
                            <div key={item.id}>
                                <p>{`${item.material}`}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="col-logo">
                    <h3>logo printing</h3>
                    <div className="col-Yes-and-No">
                        <div className="no">
                             <p className={`icon ${showIcon ? "click-no" : ""}`} onClick={() => {
                                setShowIcon(!showIcon)
                             }}></p>
                            <p className="paragraph">no</p>
                         </div>
                         <div className="yes">
                            <p className={`icon ${showYesIcon ? "click-yes" : ""}`} onClick={() => {
                                setshowYes(!showYesIcon)
                            }}></p>
                            <p className="paragraph">yes</p>
                        </div>
                        <div className="upload-logo" onClick={handleDivClick}>
                            <p className="paragraph">upload logo</p>
                            <div>
                                <p className="icon"></p>
                            </div>

                            {/* input مخفي */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
            </div>
                <div className="add-inquiry" onClick={handleClick}>
                    <p>add inquiry</p>
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
                    <p>send inquiry</p>
                </div>
            </div>
        </div>
    )
}
export default Inquiries;