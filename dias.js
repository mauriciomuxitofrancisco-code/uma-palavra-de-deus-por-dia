
"use strict";

/*
  UMA PALAVRA DE DEUS POR DIA
  Programa: 24/11/2026 a 23/03/2027
  Total: 120 dias
  Fuso horário: Africa/Luanda
*/

(function () {
  const DATA_INICIO = "2026-11-24";
  const DATA_FIM = "2027-03-23";
  const FUSO = "Africa/Luanda";

  const conteudos = {
    "Génesis": [
      ["Génesis 1", "Deus é o princípio de tudo."],
      ["Génesis 2", "Deus conhece as nossas necessidades."],
      ["Génesis 3", "Escolher o caminho do bem."],
      ["Génesis 4", "O amor ao próximo."],
      ["Génesis 5", "Uma vida que deixa marcas."],
      ["Génesis 6", "A fidelidade em tempos difíceis."],
      ["Génesis 7", "Confiar na protecção de Deus."],
      ["Génesis 8", "Deus renova a esperança."],
      ["Génesis 9", "A promessa de Deus permanece."],
      ["Génesis 10", "Cada pessoa tem o seu lugar."],
      ["Génesis 11", "A humildade diante de Deus."],
      ["Génesis 12", "A coragem de seguir Deus."],
      ["Génesis 13", "Escolher a paz."],
      ["Génesis 14", "A generosidade verdadeira."],
      ["Génesis 15", "A fé nas promessas."],
      ["Génesis 16", "Deus vê as nossas dificuldades."],
      ["Génesis 17", "Uma aliança de fidelidade."],
      ["Génesis 18", "A hospitalidade e a fé."],
      ["Génesis 19", "A importância de escolher o bem."],
      ["Génesis 20", "A verdade nas nossas atitudes."],
      ["Génesis 21", "Deus cumpre as suas promessas."],
      ["Génesis 22", "A confiança em Deus."],
      ["Génesis 23", "Respeitar e honrar o próximo."],
      ["Génesis 24", "Deus orienta os nossos caminhos."],
      ["Génesis 25", "As escolhas têm consequências."],
      ["Génesis 26", "A perseverança na fé."],
      ["Génesis 27", "A honestidade é essencial."],
      ["Génesis 28", "Deus caminha connosco."],
      ["Génesis 29", "A paciência e o amor."],
      ["Génesis 30", "A gratidão pelas bênçãos."]
    ],

    "Salmos": [
      ["Salmo 1", "Felizes os que seguem o caminho de Deus."],
      ["Salmo 2", "Deus é o nosso refúgio."],
      ["Salmo 3", "A confiança vence o medo."],
      ["Salmo 4", "Encontrar paz em Deus."],
      ["Salmo 5", "Entregar o dia ao Senhor."],
      ["Salmo 6", "Deus escuta a nossa oração."],
      ["Salmo 7", "A justiça pertence a Deus."],
      ["Salmo 8", "A grandeza da criação."],
      ["Salmo 9", "Louvar a bondade de Deus."],
      ["Salmo 10", "Deus não abandona os necessitados."],
      ["Salmo 11", "Deus é a nossa segurança."],
      ["Salmo 12", "A importância da verdade."],
      ["Salmo 13", "Esperar mesmo nos dias difíceis."],
      ["Salmo 14", "Procurar viver com sabedoria."],
      ["Salmo 15", "Viver com integridade."],
      ["Salmo 16", "Deus é a nossa herança."],
      ["Salmo 17", "Pedir orientação ao Senhor."],
      ["Salmo 18", "Deus fortalece os seus filhos."],
      ["Salmo 19", "A criação anuncia a glória de Deus."],
      ["Salmo 20", "Confiar no Senhor."],
      ["Salmo 21", "A alegria de caminhar com Deus."],
      ["Salmo 22", "Deus está presente no sofrimento."],
      ["Salmo 23", "O Senhor é o nosso pastor."],
      ["Salmo 24", "Abrir o coração a Deus."],
      ["Salmo 25", "Ensina-me os teus caminhos."],
      ["Salmo 26", "Caminhar na sinceridade."],
      ["Salmo 27", "O Senhor é a minha luz."],
      ["Salmo 28", "Deus é a nossa força."],
      ["Salmo 29", "Reconhecer a voz de Deus."],
      ["Salmo 30", "A alegria renasce com Deus."]
    ],

    "Mateus": [
      ["Mateus 1", "Deus realiza as suas promessas."],
      ["Mateus 2", "Procurar Jesus com fé."],
      ["Mateus 3", "Preparar o coração para Deus."],
      ["Mateus 4", "Resistir às tentações."],
      ["Mateus 5", "Ser luz no mundo."],
      ["Mateus 6", "Confiar na providência divina."],
      ["Mateus 7", "Construir a vida sobre a Palavra."],
      ["Mateus 8", "A fé abre caminhos."],
      ["Mateus 9", "Jesus chama-nos à misericórdia."],
      ["Mateus 10", "Coragem para anunciar o Evangelho."],
      ["Mateus 11", "Encontrar descanso em Jesus."],
      ["Mateus 12", "A misericórdia vale mais que a aparência."],
      ["Mateus 13", "A Palavra cresce no coração."],
      ["Mateus 14", "Não ter medo de confiar em Jesus."],
      ["Mateus 15", "A pureza começa no coração."],
      ["Mateus 16", "Reconhecer quem é Jesus."],
      ["Mateus 17", "Escutar a voz de Cristo."],
      ["Mateus 18", "Perdoar de coração."],
      ["Mateus 19", "O valor do amor e da família."],
      ["Mateus 20", "Servir com humildade."],
      ["Mateus 21", "Receber Jesus com alegria."],
      ["Mateus 22", "Amar a Deus e ao próximo."],
      ["Mateus 23", "Viver a fé com sinceridade."],
      ["Mateus 24", "Permanecer vigilante."],
      ["Mateus 25", "Fazer o bem com responsabilidade."],
      ["Mateus 26", "A fidelidade de Jesus."],
      ["Mateus 27", "O amor de Cristo até ao fim."],
      ["Mateus 28", "A missão de anunciar Jesus."],
      ["Mateus 5:1-12", "As bem-aventuranças na nossa vida."],
      ["Mateus 6:25-34", "Não viver dominado pelas preocupações."]
    ],

    "João": [
      ["João 1", "Jesus é a luz do mundo."],
      ["João 2", "Fazer tudo o que Jesus nos pede."],
      ["João 3", "Nascer para uma vida nova."],
      ["João 4", "A água viva que Jesus oferece."],
      ["João 5", "Levantar-se e caminhar com fé."],
      ["João 6", "Jesus é o pão da vida."],
      ["João 7", "Procurar a verdade."],
      ["João 8", "A verdade liberta."],
      ["João 9", "Abrir os olhos à fé."],
      ["João 10", "Escutar a voz do Bom Pastor."],
      ["João 11", "Jesus é a ressurreição e a vida."],
      ["João 12", "Servir com humildade."],
      ["João 13", "Amar como Jesus nos amou."],
      ["João 14", "Jesus é o caminho, a verdade e a vida."],
      ["João 15", "Permanecer unidos a Cristo."],
      ["João 16", "A esperança no Espírito Santo."],
      ["João 17", "A importância da unidade."],
      ["João 18", "A coragem de permanecer fiel."],
      ["João 19", "O amor de Jesus na cruz."],
      ["João 20", "A alegria da ressurreição."],
      ["João 21", "Recomeçar com Jesus."],
      ["João 1:1-18", "A Palavra fez-se carne."],
      ["João 3:16-21", "Deus ama o mundo."],
      ["João 6:35-40", "Encontrar em Cristo o alimento da vida."],
      ["João 8:1-11", "Não julgar, mas aprender a amar."],
      ["João 10:1-18", "Jesus cuida de cada um de nós."],
      ["João 13:1-17", "O serviço é uma expressão do amor."],
      ["João 14:1-14", "Confiar em Jesus nos momentos difíceis."],
      ["João 15:1-17", "Dar frutos através do amor."],
      ["João 20:19-31", "Acreditar mesmo quando não compreendemos tudo."]
    ]
  };

  const temas = [
    "Fé e confiança",
    "Esperança",
    "Amor ao próximo",
    "Perdão",
    "Humildade",
    "Gratidão",
    "Oração",
    "Fidelidade",
    "Serviço",
    "Paz"
  ];

  const reflexoes = [
    "Hoje, procura reconhecer a presença de Deus nas pequenas coisas. A fé também se manifesta nas nossas atitudes diárias.",
    "Deus convida-te a confiar nele. Mesmo quando não conheces o caminho completo, podes dar o próximo passo com fé.",
    "O amor cristão começa nas pequenas atitudes: escutar, respeitar, ajudar e acolher quem está ao nosso lado.",
    "A Palavra de Deus convida-nos a olhar para a nossa vida e a escolher aquilo que nos aproxima de Cristo.",
    "Não deixes que as dificuldades apaguem a tua esperança. Continua a caminhar com confiança e humildade."
  ];

  const oracoes = [
    "Senhor, aumenta a minha fé e ensina-me a confiar em Ti em todos os momentos. Guia os meus passos. Ámen.",
    "Pai Santo, obrigado por este novo dia. Dá-me sabedoria para escolher o bem e força para praticar o amor. Ámen.",
    "Jesus, fica comigo durante este dia. Que as minhas palavras e atitudes transmitam a tua paz. Ámen.",
    "Senhor, transforma o meu coração. Ensina-me a perdoar, servir e amar como Tu nos ensinaste. Ámen.",
    "Espírito Santo, ilumina as minhas decisões e ajuda-me a viver segundo a Palavra de Deus. Ámen."
  ];

  const propositos = [
    "Fazer hoje uma boa acção sem esperar recompensa.",
    "Reservar alguns minutos para conversar com Deus.",
    "Tratar todas as pessoas com respeito e bondade.",
    "Perdoar uma ofensa e evitar guardar ressentimentos.",
    "Agradecer a Deus por três bênçãos da minha vida.",
    "Ajudar alguém que esteja a passar por uma dificuldade.",
    "Ler atentamente a passagem bíblica indicada.",
    "Evitar palavras que magoem outras pessoas.",
    "Partilhar uma mensagem de esperança com alguém.",
    "Viver este dia com fé, responsabilidade e alegria."
  ];

  function dataAngola() {
    const partes = new Intl.DateTimeFormat("en-CA", {
      timeZone: FUSO,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const p = {};
    partes.forEach(x => p[x.type] = x.value);

    return `${p.year}-${p.month}-${p.day}`;
  }

  function calcularDia() {
    const hoje = dataAngola();
    const inicio = new Date(DATA_INICIO + "T00:00:00Z");
    const atual = new Date(hoje + "T00:00:00Z");
    const fim = new Date(DATA_FIM + "T00:00:00Z");

    if (atual < inicio) return 0;
    if (atual > fim) return 119;

    return Math.floor((atual - inicio) / 86400000);
  }

  function obterPrograma(numero) {
    const indice = Math.min(Math.max(numero, 0), 119);
    const grupo = Math.floor(indice / 30);
    const diaLivro = indice % 30;

    const nomes = ["Génesis", "Salmos", "Mateus", "João"];
    const livro = nomes[grupo];
    const leitura = conteudos[livro][diaLivro];

    return {
      numero: indice + 1,
      leitura: leitura[0],
      tema: leitura[1],
      mensagem: `A Palavra de Deus de hoje, em ${leitura[0]}, recorda-nos que ${leitura[1].toLowerCase()} Procura levar esta mensagem para a tua vida e testemunhar a tua fé através das tuas atitudes.`,
      reflexao: reflexoes[indice % reflexoes.length],
      oracao: oracoes[indice % oracoes.length],
      proposito: propositos[indice % propositos.length],
      frase: temas[indice % temas.length] + ": caminha com Deus e deixa a tua fé transformar o teu dia."
    };
  }

  function aplicarEstilos() {
    if (document.getElementById("estilo-palavra")) return;

    const estilo = document.createElement("style");
    estilo.id = "estilo-palavra";

    estilo.textContent = `
      #conteudo {
        background: transparent !important;
        color: #ffffff !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        width: 100%;
      }

      #conteudo .daily-card {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 28px;
        color: #ffffff;
        background: linear-gradient(145deg, #192b49, #101c35);
        border: 1px solid #c9a96e88;
        border-radius: 22px;
        box-shadow: 0 20px 55px #0005;
      }

      #conteudo .daily-header {
        text-align: center;
        padding: 18px 10px 28px;
        margin-bottom: 25px;
        border-bottom: 1px solid #c9a96e77;
      }

      #conteudo .daily-header h2 {
        color: #ffffff !important;
        font-family: Georgia, serif;
        font-size: clamp(25px, 5vw, 36px);
        font-weight: 500;
        line-height: 1.3;
        margin: 0 0 15px;
      }

      #conteudo .daily-date {
        color: #aeb9c9 !important;
        margin: 8px 0;
      }

      #conteudo .daily-number {
        color: #c9a96e !important;
        font-weight: bold;
        letter-spacing: 2px;
        margin: 12px 0 0;
      }

      #conteudo .daily-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 18px;
      }

      #conteudo .daily-section {
        min-width: 0;
        padding: 23px;
        background: linear-gradient(145deg, #243957, #192b49);
        border: 1px solid #c9a96e88;
        border-radius: 17px;
        box-shadow: 0 7px 0 #0b1528, 0 13px 25px #0004;
      }

      #conteudo .daily-section h3 {
        color: #c9a96e !important;
        font-family: Georgia, serif;
        font-size: 21px;
        line-height: 1.35;
        margin: 0 0 13px;
      }

      #conteudo .daily-section p {
        color: #ffffff !important;
        font-size: 16px;
        line-height: 1.85;
        margin: 0;
        overflow-wrap: anywhere;
      }

      #conteudo .daily-quote {
        margin-top: 22px;
        padding: 25px;
        text-align: center;
        background: linear-gradient(145deg, #263d5b, #192b49);
        border: 1px solid #c9a96e;
        border-radius: 18px;
        box-shadow: 0 7px 0 #0b1528, 0 13px 25px #0004;
      }

      #conteudo .daily-quote strong {
        color: #c9a96e;
        letter-spacing: 1px;
      }

      #conteudo .daily-quote p {
        color: #ffffff !important;
        line-height: 1.8;
        margin: 12px 0 0;
      }

      #conteudo .daily-welcome {
        padding: 25px;
        background: linear-gradient(145deg, #243957, #192b49);
        border: 1px solid #c9a96e88;
        border-radius: 17px;
        box-shadow: 0 7px 0 #0b1528, 0 13px 25px #0004;
      }

      #conteudo .daily-welcome h3 {
        color: #c9a96e !important;
        font-family: Georgia, serif;
        font-size: 22px;
        margin: 0 0 12px;
      }

      #conteudo .daily-welcome p {
        color: #ffffff !important;
        line-height: 1.85;
        margin: 0;
      }

      @media (min-width: 700px) {
        #conteudo .daily-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        #conteudo .daily-section:nth-child(3),
        #conteudo .daily-section:nth-child(4) {
          grid-column: 1 / -1;
        }
      }

      @media (max-width: 600px) {
        #conteudo .daily-card {
          padding: 17px;
          border-radius: 18px;
        }

        #conteudo .daily-section {
          padding: 20px;
        }

        #conteudo .daily-section h3 {
          font-size: 20px;
        }

        #conteudo .daily-section p {
          font-size: 15px;
        }
      }
    `;

    document.head.appendChild(estilo);
  }

  function mostrarPalavraDoDia() {
    const area = document.getElementById("conteudo");
    if (!area) return;

    aplicarEstilos();

    const hoje = dataAngola();
    const dataFormatada = hoje.split("-").reverse().join("/");

    if (hoje < DATA_INICIO) {
      area.innerHTML = `
        <div class="daily-card">
          <div class="daily-header">
            <h2>Uma Palavra de Deus por Dia</h2>
            <p class="daily-date">Data: ${dataFormatada}</p>
            <p class="daily-number">A NOSSA JORNADA COMEÇA AMANHÃ</p>
          </div>

          <div class="daily-welcome">
            <h3>Prepara o teu coração</h3>
            <p>
              Amanhã começa um momento especial de encontro com a
              Palavra de Deus. Reserva um tempo para a oração,
              a reflexão e o crescimento na fé.
            </p>
          </div>
        </div>
      `;
      return;
    }

    const numero = calcularDia();
    const dia = obterPrograma(numero);
    const numeroFormatado = String(dia.numero).padStart(3, "0");

    area.innerHTML = `
      <div class="daily-card">

        <div class="daily-header">
          <h2>Uma Palavra de Deus por Dia</h2>
          <p class="daily-date">Data: ${dataFormatada}</p>
          <p class="daily-number">
            DIA ${numeroFormatado} / 120
          </p>
        </div>

        <div class="daily-grid">

          <div class="daily-section">
            <h3>Leitura bíblica</h3>
            <p><strong>${dia.leitura}</strong></p>
          </div>

          <div class="daily-section">
            <h3>Tema do dia</h3>
            <p>${dia.tema}</p>
          </div>

          <div class="daily-section">
            <h3>Mensagem</h3>
            <p>${dia.mensagem}</p>
          </div>

          <div class="daily-section">
            <h3>Reflexão</h3>
            <p>${dia.reflexao}</p>
          </div>

          <div class="daily-section">
            <h3>Oração</h3>
            <p>${dia.oracao}</p>
          </div>

          <div class="daily-section">
            <h3>Propósito do dia</h3>
            <p>${dia.proposito}</p>
          </div>

        </div>

        <div class="daily-quote">
          <strong>FRASE INSPIRADORA</strong>
          <p>${dia.frase}</p>
        </div>

      </div>
    `;
  }

  window.mostrarPalavraDoDia = mostrarPalavraDoDia;

  // Actualização automática à meia-noite de Angola.
  let ultimaData = dataAngola();

  setInterval(function () {
    const novaData = dataAngola();

    if (novaData !== ultimaData) {
      ultimaData = novaData;

      const area = document.getElementById("conteudo");

      if (area && area.offsetParent !== null) {
        mostrarPalavraDoDia();
      }
    }
  }, 30000);

})();
                   
