
(() => {
  "use strict";

  const INICIO = "2026-12-05";
  const FIM = "2027-12-04";
  const FUSO = "Africa/Luanda";

  const palavras = {
    1: {
      tema: "Deus está contigo",
      versiculo: "Não temas, porque eu sou contigo. — Isaías 41:10",
      reflexao: "Hoje começa uma nova caminhada. Mesmo quando não sabes o que vem amanhã, lembra-te de que Deus caminha contigo. A tua vida está nas mãos d'Ele.",
      proposito: "Entrega a Deus as tuas preocupações e confia na Sua direção.",
      oracao: "Senhor, guia os meus passos, fortalece a minha fé e nunca permitas que eu me afaste da Tua presença. Amém.",
      frase: "Com Deus ao teu lado, nunca caminhas sozinho."
    },
    2: {
      tema: "Confia de todo o coração",
      versiculo: "Confia no Senhor de todo o teu coração. — Provérbios 3:5",
      reflexao: "Nem sempre compreenderás o caminho, mas podes confiar naquele que conhece o teu futuro. Deus vê além daquilo que os teus olhos conseguem alcançar.",
      proposito: "Antes de tomares uma decisão, apresenta-a a Deus em oração.",
      oracao: "Pai, ensina-me a confiar em Ti mesmo quando não compreendo o que está a acontecer. Amém.",
      frase: "A confiança em Deus transforma a incerteza em esperança."
    },
    3: {
      tema: "A força vem de Deus",
      versiculo: "Tudo posso naquele que me fortalece. — Filipenses 4:13",
      reflexao: "Há dias em que as forças parecem faltar. Nesses momentos, lembra-te de que não precisas enfrentar tudo sozinho. Deus pode renovar o teu ânimo.",
      proposito: "Enfrenta hoje uma dificuldade com fé e coragem.",
      oracao: "Senhor, renova as minhas forças e ajuda-me a continuar sem perder a esperança. Amém.",
      frase: "Quando a tua força termina, Deus continua a sustentar-te."
    },
    4: {
      tema: "Não tenhas medo",
      versiculo: "Não temas, porque eu te remi; chamei-te pelo teu nome, tu és meu. — Isaías 43:1",
      reflexao: "Deus conhece-te profundamente. Não és esquecido nem abandonado. Mesmo nas situações difíceis, podes encontrar segurança no amor do Senhor.",
      proposito: "Entrega a Deus um medo que tens guardado no coração.",
      oracao: "Senhor, tira de mim o medo e ajuda-me a descansar no Teu amor. Amém.",
      frase: "És conhecido e amado por Deus."
    },
    5: {
      tema: "Deus ouve a tua oração",
      versiculo: "Clama a mim, e responder-te-ei. — Jeremias 33:3",
      reflexao: "Nenhuma oração sincera é insignificante. Podes falar com Deus sobre as tuas alegrias, dúvidas e lágrimas. Ele convida-te a aproximar-te.",
      proposito: "Reserva alguns minutos para conversar com Deus em silêncio.",
      oracao: "Pai, obrigado porque posso aproximar-me de Ti. Escuta o meu coração e guia-me. Amém.",
      frase: "Fala com Deus: Ele conhece o teu coração."
    },
    6: {
      tema: "A paz que vem do Senhor",
      versiculo: "Deixo-vos a paz, a minha paz vos dou. — João 14:27",
      reflexao: "A paz de Jesus não depende de tudo estar perfeito. Ela pode guardar o teu coração mesmo quando existem problemas à tua volta.",
      proposito: "Quando sentires ansiedade, faz uma pausa e ora.",
      oracao: "Jesus, acalma o meu coração e ensina-me a viver na Tua paz. Amém.",
      frase: "A paz de Cristo é maior do que a inquietação."
    },
    7: {
      tema: "O amor nunca falha",
      versiculo: "O amor é paciente, é benigno. — 1 Coríntios 13:4",
      reflexao: "O amor verdadeiro aparece nas atitudes simples: ouvir, perdoar, respeitar e cuidar. Deus chama-te a refletir esse amor nas tuas relações.",
      proposito: "Demonstra amor através de uma atitude concreta.",
      oracao: "Senhor, torna o meu coração mais paciente, bondoso e disposto a amar. Amém.",
      frase: "Que as tuas atitudes revelem o amor de Deus."
    },
    8: {
      tema: "Deus renova a tua esperança",
      versiculo: "Os que esperam no Senhor renovarão as suas forças. — Isaías 40:31",
      reflexao: "Esperar nem sempre é fácil. Mas a espera pode fortalecer a tua fé e ensinar-te a depender de Deus. Não desistas por causa da demora.",
      proposito: "Escolhe uma situação em que precisas de voltar a ter esperança e entrega-a a Deus.",
      oracao: "Pai, renova a minha esperança e dá-me paciência para esperar no Teu tempo. Amém.",
      frase: "A espera com Deus nunca é uma caminhada sem propósito."
    },
    9: {
      tema: "Sê agradecido",
      versiculo: "Em tudo dai graças. — 1 Tessalonicenses 5:18",
      reflexao: "A gratidão ajuda-te a reconhecer as bênçãos que muitas vezes passam despercebidas. Mesmo em dias difíceis, existem motivos para agradecer.",
      proposito: "Identifica três motivos pelos quais podes agradecer hoje.",
      oracao: "Senhor, abre os meus olhos para reconhecer a Tua bondade em cada dia. Amém.",
      frase: "Um coração agradecido reconhece a presença de Deus."
    },
    10: {
      tema: "A Palavra ilumina o caminho",
      versiculo: "Lâmpada para os meus pés é tua palavra e luz para o meu caminho. — Salmos 119:105",
      reflexao: "A Palavra de Deus oferece orientação para as decisões e atitudes do dia a dia. Quanto mais a conheces, mais aprendes a caminhar segundo a vontade do Senhor.",
      proposito: "Lê hoje um pequeno trecho da Bíblia e medita nele.",
      oracao: "Senhor, ilumina as minhas escolhas através da Tua Palavra. Amém.",
      frase: "Deixa a Palavra de Deus iluminar cada passo."
    },
    11: {
      tema: "Perdoar também é amar",
      versiculo: "Perdoai-vos uns aos outros, como também Deus vos perdoou em Cristo. — Efésios 4:32",
      reflexao: "O perdão nem sempre apaga a dor imediatamente, mas ajuda a libertar o coração do peso do ressentimento. Deus ensina-te a perdoar com sinceridade.",
      proposito: "Ora por alguém com quem precisas de encontrar paz.",
      oracao: "Pai, ajuda-me a perdoar e cura as feridas que ainda carrego. Amém.",
      frase: "O perdão abre espaço para a paz."
    },
    12: {
      tema: "Deus cuida de ti",
      versiculo: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. — 1 Pedro 5:7",
      reflexao: "Não precisas carregar sozinho todas as preocupações. Deus convida-te a entregar-lhe aquilo que pesa no teu coração.",
      proposito: "Escreve uma preocupação e apresenta-a a Deus em oração.",
      oracao: "Senhor, entrego-Te as minhas preocupações. Ajuda-me a confiar no Teu cuidado. Amém.",
      frase: "O cuidado de Deus alcança até aquilo que não consegues explicar."
    },
    13: {
      tema: "Escolhe fazer o bem",
      versiculo: "Não nos cansemos de fazer o bem. — Gálatas 6:9",
      reflexao: "Uma pequena atitude de bondade pode transformar o dia de alguém. Continua a fazer o bem, mesmo quando ninguém reconhece o teu esforço.",
      proposito: "Ajuda alguém sem esperar recompensa.",
      oracao: "Deus, usa as minhas mãos e palavras para levar bondade a outras pessoas. Amém.",
      frase: "Faz o bem: Deus vê cada gesto de amor."
    },
    14: {
      tema: "A alegria do Senhor",
      versiculo: "A alegria do Senhor é a vossa força. — Neemias 8:10",
      reflexao: "A verdadeira alegria não depende apenas das circunstâncias. Ela nasce da relação com Deus e da certeza de que Ele permanece contigo.",
      proposito: "Procura hoje uma oportunidade para agradecer e partilhar alegria.",
      oracao: "Senhor, enche o meu coração com a alegria que vem da Tua presença. Amém.",
      frase: "A alegria que vem de Deus fortalece a alma."
    },
    15: {
      tema: "Sê paciente",
      versiculo: "O amor é paciente. — 1 Coríntios 13:4",
      reflexao: "A paciência ensina-te a respeitar o tempo das coisas e das pessoas. Nem tudo acontece quando desejas, mas podes escolher agir com serenidade.",
      proposito: "Pratica a paciência numa situação que normalmente te irrita.",
      oracao: "Senhor, dá-me calma para esperar e sabedoria para agir no momento certo. Amém.",
      frase: "A paciência também é uma expressão de fé."
    },
    16: {
      tema: "Deus é o teu refúgio",
      versiculo: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. — Salmos 46:1",
      reflexao: "Quando a vida parece difícil, podes encontrar abrigo em Deus. Ele é uma fonte de força e consolo nos momentos de angústia.",
      proposito: "Procura um momento tranquilo para descansar na presença de Deus.",
      oracao: "Senhor, sê o meu refúgio e fortalece-me nos momentos de dificuldade. Amém.",
      frase: "Em Deus encontras abrigo para o coração."
    },
    17: {
      tema: "Caminha com humildade",
      versiculo: "Deus resiste aos soberbos, mas dá graça aos humildes. — Tiago 4:6",
      reflexao: "A humildade permite reconhecer que todos precisamos de aprender e crescer. Caminhar com Deus é também aprender a ouvir e servir.",
      proposito: "Ouve alguém com atenção e evita responder com orgulho.",
      oracao: "Pai, ensina-me a viver com humildade e a reconhecer que preciso de Ti. Amém.",
      frase: "Um coração humilde está disponível para aprender com Deus."
    },
    18: {
      tema: "A fé abre caminhos",
      versiculo: "A fé é o firme fundamento das coisas que se esperam. — Hebreus 11:1",
      reflexao: "Ter fé não significa nunca sentir dúvidas. Significa continuar a confiar em Deus mesmo quando ainda não vês o resultado.",
      proposito: "Dá hoje um passo de coragem numa área em que tens hesitado.",
      oracao: "Senhor, aumenta a minha fé e ajuda-me a confiar nas Tuas promessas. Amém.",
      frase: "Continua a crer, mesmo antes de veres."
    },
    19: {
      tema: "Guarda o teu coração",
      versiculo: "Sobre tudo o que se deve guardar, guarda o teu coração. — Provérbios 4:23",
      reflexao: "Aquilo que alimentas no pensamento influencia as tuas palavras e atitudes. Procura cultivar pensamentos que promovam a verdade, a paz e o amor.",
      proposito: "Afasta-te hoje de algo que prejudica a tua paz interior.",
      oracao: "Senhor, guarda o meu coração e orienta os meus pensamentos. Amém.",
      frase: "Cuida do teu coração e aproxima-o de Deus."
    },
    20: {
      tema: "Jesus é a luz",
      versiculo: "Eu sou a luz do mundo. — João 8:12",
      reflexao: "Jesus oferece direção quando tudo parece confuso. Segui-lo é escolher a verdade, o amor e a esperança em cada passo.",
      proposito: "Procura ser luz para alguém através de uma atitude bondosa.",
      oracao: "Jesus, ilumina a minha vida e ajuda-me a refletir a Tua luz. Amém.",
      frase: "Quem caminha com Jesus não precisa viver nas trevas."
    },
    21: {
      tema: "Deus conhece o teu coração",
      versiculo: "Tu, Senhor, me sondaste e me conheces. — Salmos 139:1",
      reflexao: "Podes apresentar-te diante de Deus sem máscaras. Ele conhece as tuas lutas, os teus sonhos e aquilo que ainda não consegues dizer.",
      proposito: "Fala com Deus com sinceridade sobre aquilo que sentes.",
      oracao: "Senhor, obrigado porque me conheces por completo. Ajuda-me a viver com sinceridade diante de Ti. Amém.",
      frase: "Deus conhece-te profundamente e continua a amar-te."
    },
    22: {
      tema: "Semeia paz",
      versiculo: "Bem-aventurados os pacificadores, porque serão chamados filhos de Deus. — Mateus 5:9",
      reflexao: "A paz começa muitas vezes numa escolha: não alimentar discussões, ouvir com respeito e procurar reconciliação quando possível.",
      proposito: "Evita alimentar um conflito e procura uma atitude de paz.",
      oracao: "Pai, faz de mim um instrumento de paz na minha família e comunidade. Amém.",
      frase: "Onde chega a paz, o amor encontra espaço."
    },
    23: {
      tema: "A bondade de Deus permanece",
      versiculo: "Porque a sua benignidade dura para sempre. — Salmos 136:1",
      reflexao: "Os dias mudam e as circunstâncias também, mas a bondade de Deus permanece. Recorda as vezes em que recebeste força para continuar.",
      proposito: "Lembra-te de uma bênção passada e agradece a Deus por ela.",
      oracao: "Senhor, obrigado pela Tua bondade que me acompanha em todos os momentos. Amém.",
      frase: "A bondade de Deus não perde a sua força com o passar do tempo."
    },
    24: {
      tema: "O amor de Deus veio ao mundo",
      versiculo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigénito. — João 3:16",
      reflexao: "O nascimento de Jesus recorda-nos o amor de Deus pela humanidade. Nesta época, que a esperança, a generosidade e a fé ocupem o centro do teu coração.",
      proposito: "Partilha amor e bondade com alguém que precisa de carinho.",
      oracao: "Pai, obrigado por Jesus e pelo Teu grande amor. Que a minha vida revele esse amor. Amém.",
      frase: "O maior presente é o amor que Deus nos ofereceu em Jesus."
    },
    25: {
      tema: "Nasceu o Salvador",
      versiculo: "Hoje vos nasceu, na cidade de David, o Salvador, que é Cristo, o Senhor. — Lucas 2:11",
      reflexao: "O Natal anuncia a chegada de Jesus, a esperança prometida. Mais do que presentes e celebrações, recorda o significado espiritual deste dia: Deus aproximou-se de nós.",
      proposito: "Agradece a Deus pelo nascimento de Jesus e partilha uma mensagem de esperança.",
      oracao: "Senhor, obrigado pelo presente de Jesus. Que a Sua luz habite na minha vida e na minha família. Amém.",
      frase: "Jesus é a razão da nossa esperança."
    },
    26: {
      tema: "Continua a amar",
      versiculo: "Amados, se Deus assim nos amou, também nós devemos amar uns aos outros. — 1 João 4:11",
      reflexao: "O amor de Deus recebido deve tornar-se amor oferecido. Depois das celebrações, continua a demonstrar cuidado, respeito e generosidade.",
      proposito: "Faz algo concreto para apoiar alguém próximo de ti.",
      oracao: "Deus, ensina-me a amar com atitudes sinceras e generosas. Amém.",
      frase: "Recebe o amor de Deus e partilha-o com o mundo."
    },
    27: {
      tema: "Deus está a trabalhar em ti",
      versiculo: "Aquele que em vós começou a boa obra a aperfeiçoará. — Filipenses 1:6",
      reflexao: "O teu crescimento espiritual é uma caminhada. Mesmo quando não percebes mudanças, Deus pode estar a trabalhar no teu coração e a ensinar-te a amadurecer.",
      proposito: "Reconhece uma área da tua vida em que desejas crescer com Deus.",
      oracao: "Senhor, continua a transformar a minha vida e ajuda-me a não desistir do crescimento espiritual. Amém.",
      frase: "Deus ainda está a escrever a tua história."
    }
  };

  function dataAngola() {
    const partes = new Intl.DateTimeFormat("en-CA", {
      timeZone: FUSO,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const p = Object.fromEntries(
      partes.map(x => [x.type, x.value])
    );

    return `${p.year}-${p.month}-${p.day}`;
  }

  function numeroDia(data) {
    const [a, m, d] = data.split("-").map(Number);
    const [ia, im, id] = INICIO.split("-").map(Number);

    const atual = Date.UTC(a, m - 1, d);
    const inicio = Date.UTC(ia, im - 1, id);

    return Math.floor((atual - inicio) / 86400000) + 1;
  }

  function elemento(tag, texto) {
    const el = document.createElement(tag);
    el.textContent = texto;
    return el;
  }

  window.mostrarPalavraDoDia = function () {
    const area = document.getElementById("conteudo");
    if (!area) return;

    const hoje = dataAngola();
    const dia = numeroDia(hoje);

    const [a, m, d] = hoje.split("-");
    const dataFormatada = `${d}/${m}/${a}`;

    area.replaceChildren();
    area.appendChild(elemento("h2", "Uma Palavra de Deus por Dia"));

    if (hoje < INICIO) {
      area.appendChild(elemento("p", "A nossa caminhada começa em 5 de dezembro de 2026."));
      return;
    }

    if (hoje > FIM) {
      area.appendChild(elemento("p", "A caminhada dos 365 dias foi concluída. Que Deus continue contigo!"));
      return;
    }

    const conteudo = palavras[dia];

    area.appendChild(elemento("p", `Dia ${dia} de 365 · ${dataFormatada}`));

    if (!conteudo) {
      area.appendChild(elemento("h3", "A Palavra deste dia"));
      area.appendChild(elemento("p", "O conteúdo deste dia está a ser preparado."));
      return;
    }

    area.appendChild(elemento("h3", conteudo.tema));
    area.appendChild(elemento("h3", "Passagem bíblica"));
    area.appendChild(elemento("p", conteudo.versiculo));
    area.appendChild(elemento("h3", "Reflexão"));
    area.appendChild(elemento("p", conteudo.reflexao));
    area.appendChild(elemento("h3", "Propósito do dia"));
    area.appendChild(elemento("p", conteudo.proposito));
    area.appendChild(elemento("h3", "Oração"));
    area.appendChild(elemento("p", conteudo.oracao));
    area.appendChild(elemento("h3", "Uma frase para guardar"));
    area.appendChild(elemento("p", conteudo.frase));
    area.appendChild(elemento("p", "Que Deus abençoe o teu dia!"));
  };
})();
