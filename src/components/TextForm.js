import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked:" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("lowercase was clicked:" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        let newtext ='';
        setText(newtext)
        props.showAlert("Text cleared!", "success");
    }
    const handleCopy = ()=>{
        console.log("Iam a copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.Value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }
    const handleOnChange = (event)=>{
        // console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText]= useState('');
    // text= "new text"; //wrong way of changing the state
    // setText("new text"); // right way of changing the state
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'##042743'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
