// import React from "react";

export const Button = ({btnText}) => {
    return(
        <button className="btn">{btnText}</button> 
    )
}

export const ButtonDisplay = ({btn1, btn2, btn3}) => {
    return (
        <div> 
            <Button  btnText={btn1}/>
            <Button btnText={btn2}/>
            <Button btnText={btn3}/>
        </div>
    )
}



// export default ButtonDisplay