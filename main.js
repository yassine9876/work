var area = document.getElementById('myTextArea')

function makeBold(){
    if (area.style.fontWeight=="bold"){
        area.style.fontWeight ="normal"
    }
    else {
        area.style.fontWeight ="bold"
    }
}

function makeItalic(){
    if (area.style.fontStyle=="italic"){
        area.style.fontStyle ="normal"
    }
    else {
        area.style.fontStyle ="italic"
    }
}


function makeUnderline(){
    if (area.style.textDecoration=="underline"){
        area.style.textDecoration = "none"
    }
    else
    {
        area.style.textDecoration = "underline"
    }
}


function changeSize(){
    area.style.fontSize = document.getElementById('selectSize').value
}


function changeFamily(){
    area.style.fontFamily = document.getElementById('selectFamily').value
}