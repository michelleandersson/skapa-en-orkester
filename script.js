// Dessa funktioner körs när en knapp blir klickad. Gå in i HTML-filen
// för att kika hur det hänger ihop!

// const toggleAudio = sound => {
//     Här skriver du kod för att växla mellan att ljudet
//     spelas eller pausas.
// }

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
    if (saxBtn.style.backgroundColor == 'green') {
      saxBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      saxBtn.style.backgroundColor = 'green'; 
    };
  },
  guitarBtn: function() {
    let guitarBtn = document.getElementById('guitarBtn'); 
    if (guitarBtn.style.backgroundColor == 'green') {
      guitarBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      guitarBtn.style.backgroundColor = 'green'; 
    };
  },
  pianoBtn: function() {
    let pianoBtn = document.getElementById('pianoBtn'); 
    if (pianoBtn.style.backgroundColor == 'green') {
      pianoBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      pianoBtn.style.backgroundColor = 'green'; 
    };
  },
  trumpetBtn: function() {
    let trumpetBtn = document.getElementById('trumpetBtn'); 
    if (trumpetBtn.style.backgroundColor == 'green') {
      trumpetBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      trumpetBtn.style.backgroundColor = 'green'; 
    };
  },
  violinBtn: function() {
    let violinBtn = document.getElementById('violinBtn'); 
    if (violinBtn.style.backgroundColor == 'green') {
      violinBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      violinBtn.style.backgroundColor = 'green'; 
    };
  },
  banjoBtn: function() {
    let banjoBtn = document.getElementById('banjoBtn'); 
    if (banjoBtn.style.backgroundColor == 'green') {
      banjoBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      banjoBtn.style.backgroundColor = 'green'; 
    };
  },
  drumsBtn: function() {
    let drumsBtn = document.getElementById('drumsBtn'); 
    if (drumsBtn.style.backgroundColor == 'green') {
      drumsBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      drumsBtn.style.backgroundColor = 'green'; 
    };
  }, 
  voicesBtn: function() {
    let voicesBtn = document.getElementById('voicesBtn'); 
    if (voicesBtn.style.backgroundColor == 'green') {
      voicesBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      voicesBtn.style.backgroundColor = 'green'; 
    };
  }, 
  bellBtn: function() {
    let bellBtn = document.getElementById('bellBtn'); 
    if (bellBtn.style.backgroundColor == 'green') {
      bellBtn.style.backgroundColor = 'orange'; 
    } 
    else {
      bellBtn.style.backgroundColor = 'green'; 
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