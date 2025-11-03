function mostrarTela(tela){
  document.querySelectorAll('.tela').forEach(s=>s.classList.remove('ativa'));
  document.getElementById(tela).classList.add('ativa');
}

const imagens = [];
for(let i=1;i<=29;i++){
  imagens.push({src:`imagens/img${i}.jpeg`, desc:`Descrição do momento ${i}`});
}

function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

function carregarGaleria(){
  const galeria=document.getElementById("galeria-momentos");
  galeria.innerHTML="";
  const aleatorio=shuffleArray([...imagens]);
  aleatorio.forEach(img=>{
    const div=document.createElement("div");
    div.classList.add("item");
    const imagem=document.createElement("img");
    imagem.src=img.src;
    imagem.alt="Momento";
    imagem.onclick=()=>abrirModal(img.src,img.desc);
    div.appendChild(imagem);
    galeria.appendChild(div);
  });
}

function abrirModal(src,desc){
  document.getElementById("imgModal").src=src;
  document.getElementById("descricaoModal").textContent=desc;
  document.getElementById("modal").style.display="flex";
}

function fecharModal(){
  document.getElementById("modal").style.display="none";
}

const envelopesData=[
  "Aqui vai o textão da declaração.",
  "Mensagem fofa 1",
  "Mensagem fofa 2",
  "Mensagem fofa 3",
  "Mensagem fofa 4",
  "Mensagem fofa 5",
  "Mensagem fofa 6",
  "Mensagem fofa 7",
  "Mensagem fofa 8"
];

function carregarEnvelopes(){
  const container=document.getElementById("envelopes-container");
  container.innerHTML="";
  const aleatorio=shuffleArray([...envelopesData]);
  aleatorio.forEach(text=>{
    const div=document.createElement("div");
    div.classList.add("envelope");
    div.textContent="✉️";
    div.onclick=()=>abrirCarta(div,text);
    container.appendChild(div);
  });
}

function abrirCarta(div,text){
  document.getElementById("texto-carta").textContent=text;
  document.getElementById("carta-modal").style.display="flex";
  div.textContent="📬";
}

function fecharCarta(){
  document.getElementById("carta-modal").style.display="none";
}

function formatTempo(diff){
  const meses=Math.floor(diff/(30*24*3600));
  diff-=meses*30*24*3600;
  const dias=Math.floor(diff/(24*3600));
  diff-=dias*24*3600;
  const horas=Math.floor(diff/3600);
  diff-=horas*3600;
  const minutos=Math.floor(diff/60);
  const segundos=diff%60;
  return `${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

function iniciarContadores(){
  const startData=new Date(2025,8,6,19,45,0);
  const primeiraVez=new Date(2025,6,26,16,10,0);
  const primeiraConversa=new Date(2025,6,20,11,15,0);

  
  function atualizar(){
    const agora=new Date();
    const diffStart=Math.floor((agora-startData)/1000);
    const diffVimos=Math.floor((agora-primeiraVez)/1000);
    const diffConversa=Math.floor((agora-primeiraConversa)/1000);

    document.getElementById("contador").textContent=formatTempo(diffStart);
    document.getElementById("contador-vimos").textContent=formatTempo(diffVimos);
    document.getElementById("contador-conversamos").textContent=formatTempo(diffConversa);
  }

  atualizar();
  setInterval(atualizar,1000);
}

window.addEventListener("load",()=>{
  carregarGaleria();
  carregarEnvelopes();
  iniciarContadores();
});
