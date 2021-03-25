function ColoredPixel(props) {
    let red,green,blue;
    red = props.red;
    blue = props.blue;
    green = props.green;

    if(props.red === 256){
        red = 255;
    }
    if(props.green === 256){
        green = 255;
    }
    if(props.blue === 256){
        blue = 255;
    }
    var style_obj = {
                        backgroundColor:'rgb('+red+','+green+','+blue+')', 
                        // backgroundColor:'rgb('+green+','+red+','+blue+')', 
                        // backgroundColor:'rgb('+blue+','+red+','+green+')', 
                        // backgroundColor:'rgb('+red+','+blue+','+green+')', 
                        height:"1px", 
                        width:"1px"
                    };
    return <div style={style_obj} />;
}

export default ColoredPixel;