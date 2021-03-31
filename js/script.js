const container2 = document.getElementsByClassName("container2")[0];
const container3 =  document.getElementsByClassName("container3")[0];  
const checkIcon = document.getElementById("check-icon");
const xIcon = document.getElementById("x-icon");


let i = 0;

xIcon.addEventListener('click',typeNote)

checkIcon.addEventListener('click', createNote)


function typeNote(){
  if(container3.style.display == 'none'){
    container3.style.display = 'block';
  }
  else {
    container3.style.display = 'none'
  }
}

function createNote() {
  const nodeText = document.getElementById('note-text').value;
  const node0 = document.createElement('div')
  const node1 = document.createElement('h1')

  node1.innerHTML = nodeText;
  console.log(node0)

  node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px;margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.25)");

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);
  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', function(){
    node0.style.transform = 'scale(1.1)'
  })
  node0.addEventListener('mouseleave', function(){
    node0.style.transform = 'scale(1)';
  })
  node0.addEventListener('dblclick', function(){
    node0.remove();
  })
  document.getElementById('note-text').value = '';  
}


function margin() {
  let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px']
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = ['rotate(5deg)','rotate(4deg)', 'rotate(2deg)', 'rotate(-2deg)', 'rotate(-5deg)', 'rotate(-7deg)'];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color() {
  let random_color = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328']
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++]
}

  

