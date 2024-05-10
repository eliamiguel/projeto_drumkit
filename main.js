const container = document.getElementById('container')

const itens={
  'A':'boom.wav',
  'S':'clap.wav',
  'D':'hihat.wav',
  'F':'kick.wav',
  'G':'openhat.wav',
  'H':'ride.wav',
  'J':'snare.wav',
  'K':'tink.wav',
  'L':'tom.wav',
}


const criarLetra= (itens)=>{
  const tecla= document.createElement('div')
  tecla.setAttribute('class', 'key')
  tecla.setAttribute('id', itens)
  tecla.innerHTML+= itens
  container.appendChild(tecla)

}




 const exibir = (itens)=>Object.keys(itens).forEach(criarLetra )
 
 const adicionarEfeito = (letra)=>{
  document.getElementById(letra).classList.add("active")
 }



 const removerEfeito = (letra)=>{
  const div = document.getElementById(letra)
  const removeActive= ()=> div.classList.remove('active')
  div.addEventListener("transitionend", removeActive)
   
 }

const letraDiv =(e) =>{
  let letra= ''
  if(e.type ==='click'){
    letra = e.target.id;
  } else{
    letra = e.key.toUpperCase();
  }
  const letraPermitida= itens.hasOwnProperty(letra)
  if(letraPermitida){
    adicionarEfeito(letra)
  tocarSom(letra);
  removerEfeito(letra)
}
 
 }


const tocarSom = (letra)=>{
const audio = new Audio(`./sounds/${itens[letra]}`)
 audio.play();
}
exibir(itens)
 container.addEventListener('click', letraDiv)

 window.addEventListener('keydown', letraDiv)
