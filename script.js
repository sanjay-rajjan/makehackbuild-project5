function optionHandler(btn){
  //alert(btn.innerText);
  if(btn.innerText == "California"){
    document.getElementById("question").innerText = "Do you want to go to Yosemite National Park or Disneyland?";
    document.getElementById("option1").innerText = "Yosemite National Park";
    document.getElementById("option2").innerText = "Disneyland";
    
  }
  else if (btn.innerText == "Florida"){
    document.getElementById("question").innerText = "Do you want to go to Universal Studios or Disney World?";
    document.getElementById("option1").innerText = "Universal Studios";
    document.getElementById("option2").innerText = "Disney World";
    
  }
  else if(btn.innerText == "Yosemite National Park"){
    document.getElementById("question").innerText = "What would you like to do here?";
    document.getElementById("option1").innerText = "Hiking";
    document.getElementById("option2").innerText = "Water Activities";
    
  }
  else if(btn.innerText == "Disneyland"){
    document.getElementById("question").innerText = "Do you want to go to Adventureland or Fantasyland?";
    document.getElementById("option1").innerText = "Adventureland";
    document.getElementById("option2").innerText = "Fantasyland";
    
  }
  else if (btn.innerText == "Universal Studios"){
    document.getElementById("question").innerText = "Do you want to go to Islands of Adventure or Volcano Bay?";
    document.getElementById("option1").innerText = "Islands of Adventure";
    document.getElementById("option2").innerText = "Volcano Bay";
  }
  else if (btn.innerText == "Disney World"){
    document.getElementById("question").innerText = "Do you want to go to Magic Kingdom or Animal Kingdom?";
    document.getElementById("option1").innerText = "Magic Kingdom";
    document.getElementById("option2").innerText = "Animal Kingdom";
  }
  else if (btn.innerText == "Universal Studios"){
    document.getElementById("question").innerText = "Do you want to go to Islands of Adventure or Volcano Bay?";
    document.getElementById("option1").innerText = "Islands of Adventure";
    document.getElementById("option2").innerText = "Volcano Bay";
    }
  else 
    {
      alert("Congratulations for choosing your vacation! Please start over.");
      document.getElementById("question").innerText = "Would you like to go to California or Florida for vacation?";
      document.getElementById("option1").innerText = "California";
      document.getElementById("option2").innerText = "Florida";
    }
}

