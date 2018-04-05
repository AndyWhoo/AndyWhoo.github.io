let saveButton;

function setup(){
noCanvas();


  saveButton= createButton("SAVE");
  saveButton.mousePressed(saveDefinition);
}


function saveDefinition(){

  console.log("saving definition");

  createP(wordInput.value() + ' is surf word' + definitionInput.value());
}

function draw(){

  textSize(30);
  text(wordInput.value)
}
