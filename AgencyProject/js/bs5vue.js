const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");


myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})

createApp({
    data() {
        return{
            Portfolio:[
                {modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"},
                {modal: "#portfolioModal2", imgSrc:"startup-framework.png", heading:"Startup Framework", text:"Website Design"},
                {modal: "#portfolioModal3", imgSrc:"treehouse.png", heading:"Treehouse", text:"Website Design"},
                {modal: "#portfolioModal4", imgSrc:"golden.png", heading:"Golden", text:"Website Design"},
                {modal: "#portfolioModal5", imgSrc:"escape.png", heading:"Escape", text:"Website Design"},
                {modal: "#portfolioModal6", imgSrc:"dreams.png", heading:"Dreams", text:"Website Design"}
            ]
        }
    }
}).mount("#portfolio")

createApp({
    data() {
        return{
            About:[
                {}
                
            ]
        }
    }
}).mount("#about")