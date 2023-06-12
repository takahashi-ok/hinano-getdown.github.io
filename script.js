const originalWidth = 1669;
const originalHeight = 660;

const keyRegions = {
  'q': [221, 210, 327, 311],
  'w': [327, 210, 433, 311],
  'e': [433, 210, 539, 311],
  'r': [539, 210, 645, 311],
  't': [645, 210, 751, 311],
  'y': [751, 210, 857, 311],
  'u': [857, 210, 963, 311],
  'i': [963, 210, 1069, 311],
  'o': [1069, 210, 1175, 311],
  
  'a': [240, 311, 346, 416],
  's': [346, 311, 452, 416],
  'd': [452, 311, 558, 416],
  'f': [558, 311, 664, 416],
  'g': [664, 311, 770, 416],
  'h': [770, 311, 876, 416],
  'j': [876, 311, 982, 416],
  'k': [982, 311, 1088, 416],
  'l': [1088, 311, 1194, 416],
  ';': [1194, 311, 1300, 416],
  
  'v': [585, 416, 692, 524],
  'n': [797, 416, 905, 524],
};

const keyboard = document.getElementById('keyboard');
keyboard.addEventListener('click', function(event) {
  const scaleX = originalWidth / keyboard.offsetWidth;
  const scaleY = originalHeight / keyboard.offsetHeight;
  const x = event.offsetX * scaleX;
  const y = event.offsetY * scaleY;
  
  for (const key in keyRegions) {
    const [x1, y1, x2, y2] = keyRegions[key];
    if (x >= x1 && x < x2 && y >= y1 && y < y2) {
      displayImageForKey(key);
      break;
    }
  }
});

document.addEventListener('keydown', function(event) {
  displayImageForKey(event.key);
});

function displayImageForKey(key){
  const container = document.getElementById('image-container');
  container.innerHTML = '';
  
  let img = document.createElement('img');
  switch(key) {
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
}


// 画像一覧
var images = [
    'img/start1.png',
    'img/start2.png',
    'img/getdown1.png',
    'img/getdown2.png',
    'img/getdown3.png',
    'img/getdown4.png',
    'img/getdown5.png',
    'img/getdown6.png',
    'img/getdown7.png',
    'img/getdown8.png',
    'img/getdown9.png',
    'img/getdown10.png',
    'img/Y_l.png',
    'img/Y_c.png',
    'img/Y_r.png',
    'img/koshi1.png',
    'img/koshi2.png',
    'img/koshi3.png',
    'img/ashi_l.png',
    'img/ashi_r.png',
    'img/kawaii.png'
];

window.onload = function(){

    // 表示高速化のため画像プリロード
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
}
