// const buttons = document.querySelectorAll(".button");
// const body = document.body;
// buttons.forEach(button => {
//     button.addEventListener("click",(event)=>{
//            btncolor=event.target;
//            clickingEvent = event.target.id;
//            isbgWhite=body.style.backgroundColor='white'
//         console.log("button clicked",clickingEvent)
        
//         switch (clickingEvent) {
//             case "green":
//                 body.style.backgroundColor="green";
//                 break;
//             case "red":
//                 body.style.backgroundColor="red";
                
//                 break;
//             case "blue":
//                 body.style.backgroundColor="blue";
               
//                 break;
//             case "yellow":
//                   body.style.backgroundColor="yellow"
//                     break;
//             case "white":
//                   body.style.backgroundColor="white"
//                   break;
//             default:
//                body.style.backgroundColor="white"
                
//                 break;
//         }
//         if(btnColor=="white"){
//             body.style.backgroundColor="white";
//             btnColor=clickingEvent;
//         }
//     })
// });
const buttons = document.querySelectorAll(".button");
const body = document.body;
let currentBackgroundColor = "white";

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const clickedButton = event.target;
        const buttonColor = clickedButton.id;
        const isWhiteBackground = body.style.backgroundColor === "white";

        if (isWhiteBackground) {
            // Change body background color to button color and button to white
            body.style.backgroundColor = buttonColor;
            clickedButton.style.backgroundColor = "white";
         }
        else if (body.style.backgroundColor === buttonColor) {
            // Revert body background color to white and button to original color
            body.style.backgroundColor = "white";
            clickedButton.style.backgroundColor = buttonColor
        } 
        else {
            // Change body background color to button color and button to white
            body.style.backgroundColor = buttonColor;
            buttons.forEach(btn => {
                if (btn.id === buttonColor) {
                    btn.style.backgroundColor = "white";
                } else {
                    btn.style.backgroundColor = "";
                }
            });
        }
    });
});
