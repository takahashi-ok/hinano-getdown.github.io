document.addEventListener('keydown', function(event) {
  const container = document.getElementById('image-container');
  container.innerHTML = '';
  
  let img = document.createElement('img');
  switch(event.key) {
    case 't':
      img.src = 'img/start1.png';
      break;
    case 'y':
      img.src = 'img/start2.png';
      break;
  
    case 'a':
      img.src = 'img/getdown1.png';
      break;
    case 's':
      img.src = 'img/getdown2.png';
      break;
    case 'd':
      img.src = 'img/getdown3.png';
      break;
    case 'f':
      img.src = 'img/getdown4.png';
      break;
    case 'v':
      img.src = 'img/getdown5.png';
      break;
    case 'n':
      img.src = 'img/getdown6.png';
      break;
    case 'j':
      img.src = 'img/getdown7.png';
      break;
    case 'k':
      img.src = 'img/getdown8.png';
      break;
    case 'l':
      img.src = 'img/getdown9.png';
      break;
    case ';':
      img.src = 'img/getdown10.png';
      break;
      
    case 'u':
      img.src = 'img/Y_l.png';
      break;
    case 'i':
      img.src = 'img/Y_c.png';
      break;
    case 'o':
      img.src = 'img/Y_r.png';
      break;
    
    case 'r':
      img.src = 'img/koshi1.png';
      break;
    case 'e':
      img.src = 'img/koshi2.png';
      break;
    case 'w':
      img.src = 'img/koshi3.png';
      break;
    
    case 'g':
      img.src = 'img/ashi_l.png';
      break;
    case 'h':
      img.src = 'img/ashi_r.png';
      break;
    
    default:
      img.src = 'img/kawaii.png';
      break;
  }
  
  container.appendChild(img);
});
