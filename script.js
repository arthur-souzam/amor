function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(s => s.classList.remove('ativa'));
  document.getElementById(tela).classList.add('ativa');
}


const descricoes = [
  "Nunca vou esquecer o nervosismo que senti quando te mandei essas flores, e minha felicidade quando você me mandou essa foto dizendo que gostou. Te ver feliz assim me deixou todo bobo, continuei assistindo aquele vídeo por semanas e ainda assisto de vez em quando.", // img1
  "Essa foto foi no nosso segundo encontro, e eu já me sentia tão bem contigo. Mal esperava que ia dar em tudo isso.", // img2
  "Nunca comi um pão de queijo tão bom, era nosso segundo encontro e a gente já parecia um casalzão. Foi uma tarde tão boa, adoro essa foto nossa.", // img3
  "Essa foto foi tão genuína, você estava linda(sempre está), de vez em quando eu olhava e percebia como estava ficando apaixonado por você. Esse dia foi muito divertido e a gente riu muito no carro.", // img4
  "Esse dia foi muito marcante pra mim, conheci suas amigas e me senti começando a fazer parte do seu mundo. Me senti muito bem e você me deixou tão tranquilo que meu nervosismo sumiu.", // img5
  "Quase te pedi em namoro nesse dia, eu já tinha certeza absoluta e foi uma tarde tão boa. Essa foto passa uma sensação ótima.", // img6
  "Me dá vontade de chorar só de ver,fiquei tão ansioso por 2 semanas mas deu tudo certo, você ficou tão feliz com esse pedido e eu amei planejar tudo e fazer esse momento ser mágico pra gente, valeu todos os meus esforços.", // img7
  "Eu amo essa foto, você estava linda e já estávamos namorando, um dos dias mais importantes da minha vida.", // img8
  "Acho você tão meiga fazendo carinho nos bichinhos, essa foto mostra exatamente esse seu lado e eu acho linda.", // img9
  "Aqui foi uma semana após o pedido de namoro, e você estava linda como sempre, essa foto exala uma energia de casal foda.", // img10
  "Essa foto é bonita, a gente passeando no parque que virou um dos meus lugares favoritos no mundo, amo passar a tarde com você lá, vamos passar muitas ainda.", // img11
  "Essa é bem recente, quando saímos pra comer comida mexicana, e você me animou pra ir lá mesmo depois de eu ter desistido, só porque sabia que eu queria comer lá. Isso diz muito sobre você.", // img12
  "Aqui a gente estava feliz da vida(meio levinhos também), mas eu me sentia realizado e foi uma das melhores noites da minha vida.", // img13
  "Essa é a rosa que você me deu depois daquela crise de ciúmes por causa da disney plus, achei muito fofo da sua parte e guardei essa flor até o fim.", // img14
  "Esse dia foi muito importante pra mim, quando você conheceu meus amigos e se deu tão bem com todos, só me deu mais certeza de que era a pessoa certa pra minha vida.", // img15
  "Você pode achar que não, mas esse presente significou muito pra mim, você lembrou de quando te pedi esse chaveiro e fez questão de me dar sem nem me julgar antes.", // img16
  "Eu não teria ido nesse show, mas ir com você foi incrível, ficar abraçadinho com você cantando as músicas foi perfeito e ver sua animação me deixou ainda mais feliz. A Marina e o Bruno também colaboraram pra deixar o dia mais divertido.", // img17
  "Essa foto eu botei pra demonstrar meu amor pela kira, e o amor dela por mim. Eu gosto muito dela de verdade.", // img18
  "Esse foi o dia que fomos comer sushi juntos e ver você toda felizinha comendo sushi me fez ganhar o dia.", // img19
  "Amei ver sua alegria quando conseguiu pegar a última hello kitty morena do mc e comprei pra você com prazer.", // img20
  "Esse foi um snickers que você me levou na faculdade, amo como você faz eu me sentir amado e cuidado sempre e esses detalhes mostram isso.", // img21
  "Adorei participar desse churrasco com sua família, todos sempre me trataram muito bem e eu amo passar o tempo com eles, apesar da minha timidez.", // img22
  "Essa foto me faz rir sempre, fico comparando os pratos e me sinto uma criança. Mas o importante era você comer o sushi e pra mim estava perfeito assim.", // img23
  "Você me surpreendeu com essas panquecas, estavam muito boas e foi ótimo comer elas de manhã com você também.", // img24
  "Esse balde de pipoca significa muito pra mim, eu odiava dinossauros mas passei a gostar depois disso", // img25
  "Gosto muito dessa foto e dava de ver como eu já olhava pra você, nem imaginava que algum tempo depois eu estaria aqui escrevendo isso pra você.", // img26
  "Essa foto também é linda e eu gosto muito.Lembro que eu quase fiz propagando pra red bull na hora de tirar.", // img27
  "Me acho muito feio nessa foto, mas você estava tão bonitinha e elegante que decidi botar aqui. Gostei muito dessa tarde.", // img28
  "Eu que não gostava de sertanejo me diverti muito cantando com você ou só ouvindo você cantar todas as músicas que eu nunca ouvi.", // img29
  "Ver essa foto me deixa com saudade de te abraçar.", // img30
  "Uma linda foto da kira apreciando a vista no parque", // img31
  "Essa foi a foto que mandei pra minha mãe depois do pedido de namoro, já me emocionei vendo essa foto porque acho muito linda.", // img32
  "Passamos a tarde toda andando no meio do mato e aí já era finalzinho da tarde, gosto muito de lembrar dessa tarde, foi um dia depois de começarmos a namorar.", // img33
  "Achei essa foto bonitinha, mas não tem muito o que falar dela.", // img34
  "Não fomos nós que tiramos, infelizmente não tiramos foto nenhuma do nosso primeiro encontro, mas só queria dizer que gostei muito daquele filme e é muito doido perceber todos os momentos que já passamos juntos e ainda vamos passar muitos. Tenho um carinho enorme por esse filme."  // img35
];


const imagens = [];
for (let i = 1; i <= 35; i++) {
  imagens.push({
    src: `/amor/imagens/img${i}.JPEG`, 
    desc: descricoes[i - 1] || "Momento especial" 
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function carregarGaleria() {
  const galeria = document.getElementById("galeria-momentos");
  galeria.innerHTML = "";
  const aleatorio = shuffleArray([...imagens]);
  aleatorio.forEach(img => {
    const div = document.createElement("div");
    div.classList.add("item");
    const imagem = document.createElement("img");
    imagem.src = img.src;
    imagem.alt = "Momento";
    imagem.onclick = () => abrirModal(img.src, img.desc);
    div.appendChild(imagem);
    galeria.appendChild(div);
  });
}

function abrirModal(src, desc) {
  document.getElementById("imgModal").src = src;
  document.getElementById("descricaoModal").textContent = desc;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

const envelopesData = [
  "Sei que não sou perfeito, mas com você ao meu lado, sinto que consigo passar por qualquer coisa e ser a melhor versão de mim mesmo, você é meu porto seguro e sei que posso sempre contar contigo. Saiba que você também pode sempre contar comigo.",
  "Meu amor, desde o primeiro dia em que te vi, senti algo especial que nunca havia sentido antes. Dividir minha vida contigo tem sido a minha maior alegria e sinto que cada segundo ao seu lado vale ouro.",
  "Namorar com você é como viver em um filme de romance clichê, mas sem a parte entediante, você sempre sabe me fazer rir e me surpreender e quanto mais eu te conheço, mais eu quero conhecer.", 
  "Obrigado por sempre me fazer sentir tão amado e valorizado, você é a melhor coisa que já me aconteceu, sempre é muito compreensiva e cainhosa comigo.",
  "As vezes me pergunto onde você esteve esse tempo todo, mas sinto que te encontrei no momento certo. Nem sabia que era possível amar tanto alguém e se sentir tão bem com essa pessoa.",
  "Tudo isso pode parecer exagerado ou clichê demais, mas decidi fazer isso pra você porque você merece e quero que você saiba o quanto eu te amo.",
  "Espero que essas mensagens possam te fazer sorrir e lembrar o quanto você é importante e especial pra mim.Não te trocaria por nada no universo.",
  "Você merece todo o amor e felicidade do mundo, e eu quero sempre poder te proporcionar isso. Você é o amor da minha vida.",
  "Prometo estar sempre contigo, nos momentos bons e nos péssimos, sempre quero te apoiar e ver você feliz. Te amo muito."
];

function carregarEnvelopes() {
  const container = document.getElementById("envelopes-container");
  container.innerHTML = "";
  const aleatorio = shuffleArray([...envelopesData]);
  aleatorio.forEach(text => {
    const div = document.createElement("div");
    div.classList.add("envelope");
    div.textContent = "✉️";
    div.onclick = () => abrirCarta(div, text);
    container.appendChild(div);
  });
}

function abrirCarta(div, text) {
  document.getElementById("texto-carta").textContent = text;
  document.getElementById("carta-modal").style.display = "flex";
  div.textContent = "📬";
}

function fecharCarta() {
  document.getElementById("carta-modal").style.display = "none";
}

function formatTempo(diff) {
  const meses = Math.floor(diff / (30 * 24 * 3600));
  diff -= meses * 30 * 24 * 3600;
  const dias = Math.floor(diff / (24 * 3600));
  diff -= dias * 24 * 3600;
  const horas = Math.floor(diff / 3600);
  diff -= horas * 3600;
  const minutos = Math.floor(diff / 60);
  const segundos = diff % 60;
  return `${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

function iniciarContadores() {
  const startData = new Date(2025, 8, 6, 19, 45, 0);
  const primeiraVez = new Date(2025, 6, 26, 16, 10, 0);
  const primeiraConversa = new Date(2025, 6, 20, 11, 15, 0);


  function atualizar() {
    const agora = new Date();
    const diffStart = Math.floor((agora - startData) / 1000);
    const diffVimos = Math.floor((agora - primeiraVez) / 1000);
    const diffConversa = Math.floor((agora - primeiraConversa) / 1000);

    document.getElementById("contador").textContent = formatTempo(diffStart);
    document.getElementById("contador-vimos").textContent = formatTempo(diffVimos);
    document.getElementById("contador-conversamos").textContent = formatTempo(diffConversa);
  }

  atualizar();
  setInterval(atualizar, 1000);
}

window.addEventListener("load", () => {
  carregarGaleria();
  carregarEnvelopes();
  iniciarContadores();
});