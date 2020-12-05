var button , greeting;

function setup(){
  
  var canvas = createCanvas(750,600);

  // The First Coloumn

  button = createButton ( "Mr. Narendra Modi" ) ;
  button . position ( 550 , 160 ) ;
  button . mouseClicked ( vote1 ) ;
  button = createButton ( "Mr. Rahul Gandhi" ) ;
  button . position ( 550 , 190 ) ;
  button . mouseClicked ( vote1 ) ;

  greeting = createElement ( "h3" ) ;
  greeting . html ( " 1) Whom will you vote for the next Prime Minister?" ) ;
  greeting . position ( 330 , 100 ) ;


  // The Second Coloumn

  button = createButton( "Joe Biden" ) ;
  button . position ( 550 , 300 ) ;
  button . mouseClicked ( vote2 ) ;
  button = createButton ( "Donald trump" ) ;
  button . position ( 550 , 330 ) ;
  button . mouseClicked ( vote2 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 2) Whom did you support in united States presedential elections?" )  ;
  greeting . position ( 330 , 250 ) ;


  // The Third Coloumn

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 460 ) ;
  button . mouseClicked ( vote3 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 490 ) ;
  button . mouseClicked ( vote3 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 3) Do you think India will be a developed nation by 2040?" ) ;
  greeting . position ( 330 , 400 ) ;
  input = createInput ( "Name" ) ;
  input . position ( 650 , 50 ) ;
  
}


function draw () {
  background ( "#17F9E1" ) ;
}

 
function vote1(){
  greeting = createElement( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 165 ) ;
}

function vote2 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 320 ) ;
}

function vote3 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 500 ) ;
  
  button = createButton ( "Submit" ) ;
  button . position ( 800 , 600 ) ;
  button . mouseClicked ( vote4 ) ;
}

  function vote4(){

  
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Your votes have been submitted!!!  Thank You For Voting!!!" ) ;
  greeting . position ( 400 , 640 ) ;
  }
