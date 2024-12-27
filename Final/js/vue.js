const {createApp,ref}  = Vue;

var Pajamas = createApp({
    data() {
        return{
            Pajamas:[
            { imgSrc: "images/t12.jpg", hoverImg: "images/t32.jpg", heading: "Pajama 1", price: "2000 NTD" },
            { imgSrc: "images/t13.jpg", hoverImg: "images/t48.jpg", heading: "Pajama 2", price: "2000 NTD" },
            { imgSrc: "images/t14.jpg", hoverImg: "images/t47.jpg", heading: "Pajama 3", price: "2000 NTD" },
            { imgSrc: "images/t17.jpg", hoverImg: "images/t35.jpg", heading: "Pajama 4", price: "2000 NTD" }
            ]
        }
    }
}).mount("#pajamas")

var vuePajamas = createApp({
    data() {
        return{
            Pajamas:[]
        }
    }
}).mount("#pajamas")

$.ajax({
    
    url:"/pajamas",
    method: "get",
    dataType: "json",
    success: results=>{
        vuePajamas.Pajamas = results;
    }

})
