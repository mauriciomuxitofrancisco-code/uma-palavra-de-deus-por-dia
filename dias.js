
(() => {
  "use strict";

  const INICIO = "2026-11-24";
  const FIM = "2027-11-23";
  const FUSO = "Africa/Luanda";

  const temas = [
    ["A presença de Deus", "Salmos 23:1-4"],
    ["A fé que move montanhas", "Mateus 17:20"],
    ["O poder da oração", "Filipenses 4:6-7"],
    ["A confiança em Deus", "Provérbios 3:5-6"],
    ["O amor de Deus", "Romanos 8:38-39"],
    ["A esperança em Cristo", "Romanos 15:13"],
    ["A paz que vem de Deus", "João 14:27"],
    ["A força de Deus", "Isaías 40:29-31"],
    ["A sabedoria do Senhor", "Tiago 1:5"],
    ["O perdão de Deus", "1 João 1:9"],
    ["A misericórdia divina", "Lamentações 3:22-23"],
    ["A graça de Deus", "2 Coríntios 12:9"],
    ["A proteção do Senhor", "Salmos 91:1-2"],
    ["A fidelidade de Deus", "Deuteronómio 7:9"],
    ["A alegria no Senhor", "Neemias 8:10"],
    ["A coragem para avançar", "Josué 1:9"],
    ["A luz de Cristo", "João 8:12"],
    ["A palavra de Deus", "Salmos 119:105"],
    ["A bondade do Senhor", "Salmos 34:8"],
    ["A vitória sobre o medo", "2 Timóteo 1:7"],
    ["A paciência e a perseverança", "Romanos 12:12"],
    ["O cuidado de Deus", "1 Pedro 5:7"],
    ["A renovação da mente", "Romanos 12:2"],
    ["A vida em Cristo", "João 10:10"],
    ["A humildade diante de Deus", "Tiago 4:10"],
    ["A gratidão em todo o tempo", "1 Tessalonicenses 5:18"],
    ["A força de Deus", "Isaías 40:31"],
    ["A confiança nas promessas", "Números 23:19"],
    ["O caminho do Senhor", "Salmos 37:5"],
    ["O consolo de Deus", "2 Coríntios 1:3-4"],
    ["A liberdade em Cristo", "Gálatas 5:1"],
    ["O fruto do Espírito", "Gálatas 5:22-23"],
    ["A santidade da vida", "1 Pedro 1:15-16"],
    ["O serviço com amor", "Gálatas 5:13"],
    ["A família nas mãos de Deus", "Josué 24:15"],
    ["A vitória da fé", "1 João 5:4"],
    ["A justiça de Deus", "Mateus 6:33"],
    ["A coragem para testemunhar", "Atos 1:8"],
    ["A fidelidade nas pequenas coisas", "Lucas 16:10"],
    ["O descanso em Deus", "Mateus 11:28-29"],
    ["A generosidade do coração", "2 Coríntios 9:7"],
    ["A reconciliação", "2 Coríntios 5:18"],
    ["A direção do Espírito Santo", "João 16:13"],
    ["A esperança nas dificuldades", "Romanos 5:3-5"],
    ["A comunhão com Deus", "João 15:4-5"],
    ["A palavra que transforma", "Hebreus 4:12"],
    ["O amor ao próximo", "Marcos 12:31"],
    ["A coragem para recomeçar", "Isaías 43:18-19"],
    ["A promessa da vida eterna", "João 3:16"],
    ["A vitória em Cristo", "Romanos 8:37"],
    ["A presença do Espírito Santo", "João 14:16-17"],
    ["A alegria da salvação", "Salmos 51:12"],
    ["A confiança no futuro", "Jeremias 29:11"],
    ["A fidelidade até ao fim", "Apocalipse 2:10"]
  ];

  const reflexoes = [
    "Deus conhece a tua caminhada e não te abandona. Mesmo quando não compreendes o que acontece, podes confiar no cuidado dele.",
    "A fé não significa ausência de dificuldades. Significa escolher confiar em Deus mesmo quando ainda não consegues ver a resposta.",
    "A oração aproxima o teu coração do Senhor. Fala com Deus com sinceridade e entrega-lhe as tuas preocupações.",
    "Nem sempre terás todas as respostas. Entrega os teus caminhos ao Senhor e procura agir com sabedoria.",
    "O amor de Deus não depende das circunstâncias. Ele continua presente e oferece uma nova oportunidade.",
    "Não permitas que as dificuldades apaguem a esperança. Deus pode renovar as tuas forças.",
    "A paz verdadeira não depende de tudo estar perfeito. Aprende a entregar as tuas preocupações a Deus.",
    "Quando te sentires fraco, lembra-te de que a força do Senhor não tem limites.",
    "Pede sabedoria a Deus antes de tomar decisões. Um coração disposto a aprender encontra direção.",
    "Reconhecer os erros e procurar o perdão abre espaço para uma vida transformada.",
    "A misericórdia do Senhor renova-se. Não deixes que o passado te impeça de procurar um novo começo.",
    "A graça de Deus lembra-te de que não precisas enfrentar tudo sozinho.",
    "Faz do Senhor o teu refúgio. A confiança nele pode dar-te coragem.",
    "Deus é fiel às suas promessas. Continua firme e não percas a confiança.",
    "A alegria que vem de Deus pode permanecer mesmo nos dias difíceis.",
    "A coragem nasce quando decides avançar confiando que Deus caminha contigo.",
    "A luz de Cristo ajuda-te a reconhecer o caminho certo.",
    "A Palavra de Deus orienta os teus passos. Lê, medita e pratica os seus ensinamentos.",
    "Aprende a reconhecer a bondade do Senhor nas pequenas e grandes bênçãos.",
    "O medo pode surgir, mas não precisa controlar a tua vida.",
    "Perseverar é continuar a fazer o bem mesmo quando os resultados demoram.",
    "Entrega as tuas preocupações ao Senhor. Ele conhece aquilo que pesa no teu coração.",
    "Permite que Deus transforme a tua maneira de pensar.",
    "Em Cristo encontras vida e propósito. Aproxima-te dele diariamente.",
    "A humildade ajuda-te a reconhecer que precisas de Deus.",
    "A gratidão muda a maneira como olhas para a vida.",
    "A força de Deus sustenta-te quando as tuas próprias forças parecem terminar.",
    "As promessas de Deus são dignas de confiança.",
    "Entrega o teu caminho ao Senhor e procura seguir a sua orientação.",
    "Deus é fonte de consolo nos momentos de tristeza.",
    "A liberdade em Cristo chama-te a viver longe daquilo que te prende.",
    "O Espírito de Deus pode desenvolver em ti amor, paciência e bondade.",
    "A santidade começa nas escolhas diárias.",
    "Servir com amor é uma forma de demonstrar a tua fé.",
    "Coloca a tua família nas mãos de Deus.",
    "A fé dá-te coragem para enfrentar os desafios.",
    "Procura primeiro aquilo que agrada a Deus.",
    "A tua vida pode ser um testemunho de esperança.",
    "A fidelidade também se revela nas pequenas tarefas.",
    "Jesus convida-te a encontrar descanso nele.",
    "A generosidade nasce de um coração agradecido.",
    "A reconciliação exige humildade e disposição para perdoar.",
    "O Espírito Santo orienta e ensina.",
    "As dificuldades não precisam destruir a tua esperança.",
    "A comunhão com Deus cresce quando permaneces perto dele.",
    "A Palavra de Deus pode corrigir, ensinar e transformar.",
    "Amar o próximo é demonstrar o amor de Deus.",
    "Deus pode abrir um novo caminho mesmo depois de uma fase difícil.",
    "A promessa da vida eterna lembra-te de que a tua esperança vai além desta vida.",
    "Em Cristo podes encontrar força para continuar.",
    "O Espírito Santo está presente para ajudar e orientar.",
    "A salvação é motivo de alegria e gratidão.",
    "Confia o teu futuro ao Senhor.",
    "Continua fiel mesmo quando o caminho é difícil."
  ];

  const propositos = [
    "Reserva alguns minutos para orar e entregar esta área da tua vida a Deus.",
    "Lê a passagem bíblica indicada e escreve uma lição que podes aplicar hoje.",
    "Pratica uma atitude de amor, paciência ou bondade com alguém.",
    "Identifica uma preocupação e entrega-a a Deus em oração.",
    "Agradece a Deus por três coisas concretas da tua vida.",
    "Evita uma atitude negativa e escolhe responder com fé e sabedoria.",
    "Procura ajudar alguém sem esperar reconhecimento."
  ];

  const oracoes = [
    "Senhor, guia os meus passos e ajuda-me a confiar em ti em todos os momentos.",
    "Pai, aumenta a minha fé e ensina-me a permanecer firme diante das dificuldades.",
    "Meu Deus, aproxima o meu coração de ti e ensina-me a procurar a tua presença todos os dias.",
    "Senhor, dá-me sabedoria para tomar boas decisões e coragem para praticar a tua vontade.",
    "Pai celestial, obrigado pelo teu amor. Ajuda-me a viver com gratidão, esperança e bondade.",
    "Senhor, renova as minhas forças e não permitas que eu perca a esperança.",
    "Deus amado, cuida da minha vida e ajuda-me a ser instrumento de paz e amor."
  ];

  const frases = [
    "Deus está contigo em cada passo.",
    "A tua esperança está nas mãos de Deus.",
    "Continua a confiar: Deus não te abandona.",
    "A fé abre caminho para a esperança.",
    "O amor de Deus é maior do que qualquer dificuldade.",
    "Com Deus, podes encontrar forças para recomeçar.",
    "Entrega a Deus o que pesa no teu coração."
  ];

  // Variações para os sete ciclos de temas ao longo do ano.
  const variacoes = [
    {
      reflexao: "Hoje, procura reconhecer a presença de Deus nas situações simples da tua vida. A fé também cresce nas pequenas escolhas.",
      proposito: "Durante o dia, procura colocar este ensinamento em prática nas tuas atitudes.",
      oracao: "Ajuda-me a viver esta verdade com sinceridade e dedicação.",
      frase: "Caminha hoje com fé e confiança no Senhor."
    },
    {
      reflexao: "Não te limites a conhecer esta mensagem. Permite que ela transforme a maneira como pensas, falas e ages.",
      proposito: "Partilha uma palavra de encorajamento com alguém que precise de esperança.",
      oracao: "Ensina-me a demonstrar através das minhas atitudes aquilo em que acredito.",
      frase: "A Palavra de Deus pode transformar o teu coração."
    },
    {
      reflexao: "Mesmo que a resposta não chegue imediatamente, continua a confiar. Deus conhece o tempo e as necessidades da tua vida.",
      proposito: "Reserva um momento de silêncio para refletir sobre o que Deus te ensina hoje.",
      oracao: "Dá-me paciência para esperar e sabedoria para continuar a fazer o bem.",
      frase: "Não desistas de confiar em Deus."
    },
    {
      reflexao: "A caminhada espiritual é construída diariamente. Cada escolha feita com amor e fé pode aproximar-te mais de Deus.",
      proposito: "Escolhe uma atitude concreta que demonstre a tua fé durante este dia.",
      oracao: "Fortalece a minha caminhada e ajuda-me a permanecer perto de ti.",
      frase: "Cada dia é uma oportunidade para crescer com Deus."
    },
    {
      reflexao: "As circunstâncias podem mudar, mas a fidelidade de Deus permanece. Mantém o teu coração firme nas suas promessas.",
      proposito: "Escreve uma promessa bíblica que te dê coragem e medita nela.",
      oracao: "Obrigado porque posso encontrar segurança na tua fidelidade.",
      frase: "As promessas de Deus continuam firmes."
    },
    {
      reflexao: "Deus também trabalha no teu interior. Permite que a sua Palavra te ensine a responder com amor, humildade e verdade.",
      proposito: "Antes de reagires a uma dificuldade, faz uma pausa e procura agir com sabedoria.",
      oracao: "Transforma o meu coração e ajuda-me a refletir o teu amor.",
      frase: "Deixa Deus orientar as tuas escolhas."
    },
    {
      reflexao: "Não caminhes apenas com as tuas próprias forças. Procura a direção do Senhor e mantém viva a esperança.",
      proposito: "Termina o dia agradecendo a Deus pela sua presença e pelo que aprendeste.",
      oracao: "Conduz os meus passos e ajuda-me a permanecer fiel até ao fim.",
      frase: "Com Deus, há sempre razão para ter esperança."
    }
  ];

  function dataAngola() {
    const partes = new Intl.DateTimeFormat("en-GB", {
      timeZone: FUSO,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const valor = tipo =>
      partes.find(p => p.type === tipo).value;

    return `${valor("year")}-${valor("month")}-${valor("day")}`;
  }

  function numeroDia(data) {
    const inicio = new Date(INICIO + "T00:00:00Z");
    const atual = new Date(data + "T00:00:00Z");

    return Math.floor((atual - inicio) / 86400000) + 1;
  }

  function criarConteudo(numero) {
    const indice = numero - 1;

    const ciclo = Math.floor(indice / temas.length);
    const posicao = indice % temas.length;
    const foco = (indice + ciclo * 2) % 7;

    const base = temas[posicao];
    const variacao = variacoes[ciclo];

    return {
      tema: base[0],
      versiculo: base[1],

      reflexao:
        reflexoes[posicao] + " " +
        variacao.reflexao,

      proposito:
        propositos[foco] + " " +
        variacao.proposito,

      oracao:
        oracoes[foco] + " " +
        variacao.oracao + " Amém.",

      frase:
        frases[foco] + " " +
        variacao.frase
    };
  }

  function adicionar(area, rotulo, texto) {
    const subtitulo = document.createElement("h3");
    subtitulo.textContent = rotulo;
    area.appendChild(subtitulo);

    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    area.appendChild(paragrafo);
  }

  function mostrarPalavraDoDia() {
    const area = document.getElementById("conteudo");

    if (!area) return;

    area.innerHTML = "";

    const hoje = dataAngola();
    const numero = numeroDia(hoje);

    const titulo = document.createElement("h2");
    titulo.textContent = "Uma Palavra de Deus por Dia";
    area.appendChild(titulo);

    if (hoje < INICIO) {
      adicionar(
        area,
        "Em breve",
        "O programa começa no dia 24 de novembro de 2026. Volta nessa data para receber a tua primeira palavra."
      );
      return;
    }

    if (hoje > FIM || numero < 1 || numero > 365) {
      adicionar(
        area,
        "Programa concluído",
        "Os 365 dias chegaram ao fim. Que Deus continue a guiar a tua caminhada!"
      );
      return;
    }

    const palavra = criarConteudo(numero);

    adicionar(
      area,
      "Data",
      `Dia ${numero} de 365 — ${hoje}`
    );

    adicionar(area, "Tema de hoje", palavra.tema);
    adicionar(area, "Passagem bíblica", palavra.versiculo);
    adicionar(area, "Reflexão", palavra.reflexao);
    adicionar(area, "Propósito do dia", palavra.proposito);
    adicionar(area, "Oração", palavra.oracao);
    adicionar(area, "Frase especial", palavra.frase);

    adicionar(
      area,
      "Uma bênção para ti",
      "Que a Palavra de Deus ilumine o teu dia!"
    );
  }

  window.mostrarPalavraDoDia = mostrarPalavraDoDia;

})();
        
