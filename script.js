// Dessa funktioner körs när en knapp blir klickad. Gå in i HTML-filen
// för att kika hur det hänger ihop!

const toggleAudio = sound => {
    //Här skriver du kod för att växla mellan att ljudet
    //spelas eller pausas.
}

// const toggleButtonColor = button => {
//   let saxBtn = document.getElementById('saxBtn'); 
//   if (saxBtn.style.backgroundColor == 'orange') {
//     saxBtn.style.backgroundColor = 'green'; 
//   } 
//   else {
//     saxBtn.style.backgroundColor = 'orange'; 
//   }; 
//   let guitarBtn = document.getElementById('guitarBtn'); 
//   if (guitarBtn.style.backgroundColor == 'orange') {
//     guitarBtn.style.backgroundColor = 'green'; 
//   } else {
//     guitarBtn.style.backgroundColor = 'orange'; 
//   }
// }



//MAKING THE BUTTONS CHANGE COLOR WITH A SWITCH CASE

// using spread syntax to convert collection to array
// forEach is an array method
[...document.getElementsByTagName("button")].forEach(function(item) {
  // adding eventListener to the elements
  item.addEventListener('click', function() {
    // calling the methods
    // this.id will be the id of the clicked button
    // there is a method in the object by same name, which will be trigger
    obj[this.id]();

  })
})

var obj = {
  saxBtn: function() { 
    let saxBtn = document.getElementById('saxBtn'); 
    if (saxBtn.style.backgroundColor = 'orange') {
      saxBtn.style.backgroundColor = 'green'; 
    } ;
    if (saxBtn.style.backgroundColor = 'green') {
      saxBtn.style.backgroundColor = 'orange'; 
    };
  },
  guitarBtn: function() {
    let guitarBtn = document.getElementById('guitarBtn'); 
    if (guitarBtn.style.backgroundColor = 'orange') {
      guitarBtn.style.backgroundColor = 'green'; 
    } 
    else {
      guitarBtn.style.backgroundColor = 'orange'; 
    };
  },
  pianoBtn: function() {
    let pianoBtn = document.getElementById('pianoBtn'); 
    if (pianoBtn.style.backgroundColor = 'orange') {
      pianoBtn.style.backgroundColor = 'green'; 
    } 
    else {
      pianoBtn.style.backgroundColor = 'orange'; 
    };
  },
  trumpetBtn: function() {
    let trumpetBtn = document.getElementById('trumpetBtn'); 
    if (trumpetBtn.style.backgroundColor = 'orange') {
      trumpetBtn.style.backgroundColor = 'green'; 
    } 
    else {
      trumpetBtn.style.backgroundColor = 'orange'; 
    };
  },
  violinBtn: function() {
    let violinBtn = document.getElementById('violinBtn'); 
    if (violinBtn.style.backgroundColor = 'orange') {
      violinBtn.style.backgroundColor = 'green'; 
    } 
    else {
      violinBtn.style.backgroundColor = 'orange'; 
    };
  },
  banjoBtn: function() {
    let banjoBtn = document.getElementById('banjoBtn'); 
    if (banjoBtn.style.backgroundColor = 'orange') {
      banjoBtn.style.backgroundColor = 'green'; 
    } 
    else {
      banjoBtn.style.backgroundColor = 'orange'; 
    };
  },
  drumsBtn: function() {
    let drumsBtn = document.getElementById('drumsBtn'); 
    if (drumsBtn.style.backgroundColor = 'orange') {
      drumsBtn.style.backgroundColor = 'green'; 
    } 
    else {
      drumsBtn.style.backgroundColor = 'orange'; 
    };
  }, 
  voicesBtn: function() {
    let voicesBtn = document.getElementById('voicesBtn'); 
    if (voicesBtn.style.backgroundColor = 'orange') {
      voicesBtn.style.backgroundColor = 'green'; 
    } 
    else {
      voicesBtn.style.backgroundColor = 'orange'; 
    };
  }, 
  bellBtn: function() {
    let bellBtn = document.getElementById('bellBtn'); 
    if (bellBtn.style.backgroundColor = 'orange') {
      bellBtn.style.backgroundColor = 'green'; 
    } 
    else {
      bellBtn.style.backgroundColor = 'orange'; 
    };
  }
}

//END CHANGING BUTTON COLORS WITH SWITCH CASE 

//START TOGGLE MUSIC

//Saxophone
let isplay = '';
saxBtn.addEventListener('click',()=>{
    const playmusic = ()=>{
        isplay = true;
        console.log('play music');
        document.getElementById('saxophone').play();
    };
    const pausemusic = ()=>{
        isplay = false;
        document.getElementById('saxophone').pause();
    };
    if(isplay){
      pausemusic();
    }else{
      playmusic();
    };
});
//end Saxophone

//Guitar
guitarBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('guitar').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('guitar').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Guitar

//Piano
pianoBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('piano').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('piano').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Piano

//Trumpet
trumpetBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('trumpet').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('trumpet').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Trumpet

//Violin
violinBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('violin').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('violin').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Violin

//Banjo
banjoBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('banjo').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('banjo').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Banjo

//Drums
drumsBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('drums').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('drums').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Drums

//Voices
voicesBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('voices').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('voices').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Voices

//Bell
bellBtn.addEventListener('click',()=>{
  const playmusic = ()=>{
      isplay = true;
      console.log('play music');
      document.getElementById('bell').play();
  };
  const pausemusic = ()=>{
      isplay = false;
      document.getElementById('bell').pause();
  };
  if(isplay){
    pausemusic();
  }else{
    playmusic();
  };
});
//End Bell