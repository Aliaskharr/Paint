const ifonts = document.getElementById("inputFonts")
const icolors = document.getElementById("inputColors")
let fontFamily = 'font-family'
let fontSize = 'font-size'
$("div").css({
    display: 'flex'
})
$("button").css({
    width: '60px',
    height: '20px',
    margin: '0 10px 5px 0'
})
$("#bold").css({
    font:"bold .9em Arial"
})
$("#bold").click(function(){
    $("textarea").toggleClass("bold")
})
$("#italic").click(function(){
    $("textarea").toggleClass("italic")
})
$("#underline").click(function(){
    $("textarea").toggleClass("underline")
})
$("#inputColors").css({
    height:'20px',
    border: '0',
    margin: '0 0 0 3px',
    padding: '0'
    
})
$("#last").css({
    margin: '0 0 0 10px'
})
$("#inputFonts").css({
    margin: '0 0 0 5px',
    height: '14px'
})
$("textarea").css({
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '20px',
    resize: 'none',
    
})
$("#inputFonts").change(function(){
    $("textarea").css({
        fontFamily: `${ifonts.value}`
    })
})
$("#inputColors").change(function(){
    $("textarea").css({
        color: `${icolors.value}`
    })
})