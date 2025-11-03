function mostrarTela(id){
  document.querySelectorAll('.tela').forEach(t=>t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
  window.scrollTo({top:0, behavior:'smooth'});
}

function tempoDecorrido(inicio){
  const agora = new Date();
  let diff = Math.floor((agora - inicio)/1000);
  const meses = Math.floor(diff / (60*60*24*30));
  diff -= meses*30*24*60*60;
  const dias = Math.floor(diff / (60*60*24));
  diff -= dias*24*60*60;
  const horas = Math.floor(diff / (60*60));
  diff -= horas*60*60;
  const minutos = Math.floor(diff/60);
  const segundos = diff % 60;
  return `${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

const inicio = new Date("2025-09-06T19:45:00");
const vimos = new Date("2025-07-26T16:10:00");
const conversamos = new Date("2025-07-20T11:15:00");

setInterval(()=>{
  document.getElementById("contador").textContent = tempoDecorrido(inicio);
  document.getElementById("contador-vimos").textContent = tempoDecorrido(vimos);
  document.getElementById("contador-conversamos").textContent = tempoDecorrido(conversamos);
},1000);


function abrirModal(src,descricao){
  const modal = document.getElementById("modal");
  const img = document.getElementById("imgModal");
  const desc = document.getElementById("descricaoModal");
  modal.classList.add("ativo");
  img.src = src;
  desc.textContent = descricao;
}
function fecharModal(){
  document.getElementById("modal").classList.remove("ativo");
}


let envelopeAtual = null;
function abrirCarta(el,texto){
  envelopeAtual = el;
  document.getElementById("texto-carta").textContent = texto;
  document.getElementById("carta-modal").classList.add("ativo");
}
function fecharCarta(){
  if(envelopeAtual){
    envelopeAtual.textContent = "📬";
    envelopeAtual = null;
  }
  document.getElementById("carta-modal").classList.remove("ativo");
}
