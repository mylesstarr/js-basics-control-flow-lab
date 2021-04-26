function scuberGreetingForFeet(feet){
  if (feet <= 400) 
  { return "This one is on me!"
} else if (feet >= 2000 && feet <= 2500) {
  return "I will gladly take your thirty bucks." 
} else if (feet >= 2500) {
  return "No can do."
} 
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

// function switchOnCharmFromTip(tip){
//   let generous = (tip >= 10) 
//   let notSoGenerous = (tip >= 5 && tip <= 10)
//   let 
  
  // if (tip = generous) {
  //   return "Thank you so much."
  // } else if (tip >= 5 && tip <= 10) {
  //   return "Thank you."
  // } else if (tip <= 5) {
  //   return "Bye."}
// }



// let switchOnCharmForTip = (tip) => {

// let generous = (tip >= 10)
// let notAsGenerous = (tip >= 5 && tip <= 10)
// let anythingElse = (tip <= 5)

  // switch("tip"){
  //     case tip = "generous":
  //         return "Thank you so much."
  //         break;
  //     case tip = "notAsGenerous":
  //         return "Thank you."
  //         break;
  //     default:
  //         return "Bye."
  //         break;
  //       }
  //     }

  function switchOnCharmFromTip(tip){

  if (tip == "generous") {
    return "Thank you so much."
  } else if (tip == "not as generous") {
    return "Thank you."
  } else {
    return "Bye."}
  }

