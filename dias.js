(() => {
  "use strict";

  // Programa partilhado: todos os visitantes veem o mesmo conteúdo do dia.
  const INICIO = "2026-11-24";
  const FIM = "2027-05-23";
  const FUSO = "Africa/Luanda";
  const TOTAL_DIAS = 181;

  const dias = [
  {
    "data": "2026-11-24",
    "versiculo": "Génesis 1:1-5",
    "explicacao": "A leitura de Génesis 1:1-5 apresenta um convite a escutar a voz de Deus. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa escutar a voz de Deus. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a escutar a voz de Deus. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas escutar a voz de Deus. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de escutar a voz de Deus."
  },
  {
    "data": "2026-11-25",
    "versiculo": "Génesis 12:1-4",
    "explicacao": "Esta passagem bíblica recorda a importância de recomeçar com humildade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: recomeçar com humildade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a recomeçar com humildade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para recomeçar com humildade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de recomeçar com humildade num sinal de esperança."
  },
  {
    "data": "2026-11-26",
    "versiculo": "Génesis 15:1-6",
    "explicacao": "A mensagem desta leitura destaca o valor de servir sem procurar aplausos. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: servir sem procurar aplausos. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para servir sem procurar aplausos. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de servir sem procurar aplausos. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de servir sem procurar aplausos."
  },
  {
    "data": "2026-11-27",
    "versiculo": "Êxodo 3:1-12",
    "explicacao": "Neste trecho, encontramos um convite a permanecer firme na esperança. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso permanecer firme na esperança nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a permanecer firme na esperança e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a permanecer firme na esperança. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de permanecer firme na esperança."
  },
  {
    "data": "2026-11-28",
    "versiculo": "Êxodo 14:13-22",
    "explicacao": "A leitura de Êxodo 14:13-22 apresenta um convite a tratar os outros com misericórdia. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa tratar os outros com misericórdia. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a tratar os outros com misericórdia. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas tratar os outros com misericórdia. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de tratar os outros com misericórdia."
  },
  {
    "data": "2026-11-29",
    "versiculo": "Êxodo 20:1-17",
    "explicacao": "Esta passagem bíblica recorda a importância de confiar durante a espera. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: confiar durante a espera. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a confiar durante a espera. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para confiar durante a espera e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de confiar durante a espera num sinal de esperança."
  },
  {
    "data": "2026-11-30",
    "versiculo": "Levítico 19:1-18",
    "explicacao": "A mensagem desta leitura destaca o valor de escolher a verdade. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: escolher a verdade. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para escolher a verdade. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de escolher a verdade. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de escolher a verdade."
  },
  {
    "data": "2026-12-01",
    "versiculo": "Levítico 19:9-18",
    "explicacao": "Neste trecho, encontramos um convite a cultivar a gratidão. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso cultivar a gratidão nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a cultivar a gratidão e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a cultivar a gratidão. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de cultivar a gratidão."
  },
  {
    "data": "2026-12-02",
    "versiculo": "Números 6:22-27",
    "explicacao": "A leitura de Números 6:22-27 apresenta um convite a procurar a reconciliação. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa procurar a reconciliação. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a procurar a reconciliação. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas procurar a reconciliação. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de procurar a reconciliação."
  },
  {
    "data": "2026-12-03",
    "versiculo": "Números 11:16-17",
    "explicacao": "Esta passagem bíblica recorda a importância de cuidar dos mais frágeis. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: cuidar dos mais frágeis. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a cuidar dos mais frágeis. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para cuidar dos mais frágeis e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de cuidar dos mais frágeis num sinal de esperança."
  },
  {
    "data": "2026-12-04",
    "versiculo": "Deuteronómio 6:4-9",
    "explicacao": "A mensagem desta leitura destaca o valor de agir com justiça. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: agir com justiça. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para agir com justiça. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de agir com justiça. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de agir com justiça."
  },
  {
    "data": "2026-12-05",
    "versiculo": "Deuteronómio 8:2-10",
    "explicacao": "Neste trecho, encontramos um convite a vencer a indiferença. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso vencer a indiferença nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a vencer a indiferença e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a vencer a indiferença. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de vencer a indiferença."
  },
  {
    "data": "2026-12-06",
    "versiculo": "Deuteronómio 30:15-20",
    "explicacao": "A leitura de Deuteronómio 30:15-20 apresenta um convite a partilhar os dons recebidos. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa partilhar os dons recebidos. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a partilhar os dons recebidos. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas partilhar os dons recebidos. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de partilhar os dons recebidos."
  },
  {
    "data": "2026-12-07",
    "versiculo": "Josué 1:1-9",
    "explicacao": "Esta passagem bíblica recorda a importância de proteger a unidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: proteger a unidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a proteger a unidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para proteger a unidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de proteger a unidade num sinal de esperança."
  },
  {
    "data": "2026-12-08",
    "versiculo": "Josué 24:14-18",
    "explicacao": "A mensagem desta leitura destaca o valor de pedir sabedoria. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: pedir sabedoria. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para pedir sabedoria. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de pedir sabedoria. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de pedir sabedoria."
  },
  {
    "data": "2026-12-09",
    "versiculo": "Juízes 6:11-16",
    "explicacao": "Neste trecho, encontramos um convite a acolher quem está sozinho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso acolher quem está sozinho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a acolher quem está sozinho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a acolher quem está sozinho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de acolher quem está sozinho."
  },
  {
    "data": "2026-12-10",
    "versiculo": "Juízes 10:10-16",
    "explicacao": "A leitura de Juízes 10:10-16 apresenta um convite a perdoar com sinceridade. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa perdoar com sinceridade. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a perdoar com sinceridade. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas perdoar com sinceridade. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de perdoar com sinceridade."
  },
  {
    "data": "2026-12-11",
    "versiculo": "Rute 1:15-18",
    "explicacao": "Esta passagem bíblica recorda a importância de falar com bondade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: falar com bondade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a falar com bondade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para falar com bondade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de falar com bondade num sinal de esperança."
  },
  {
    "data": "2026-12-12",
    "versiculo": "Rute 2:8-12",
    "explicacao": "A mensagem desta leitura destaca o valor de ser fiel nas pequenas tarefas. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser fiel nas pequenas tarefas. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser fiel nas pequenas tarefas. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser fiel nas pequenas tarefas. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser fiel nas pequenas tarefas."
  },
  {
    "data": "2026-12-13",
    "versiculo": "1 Samuel 3:1-10",
    "explicacao": "Neste trecho, encontramos um convite a procurar a paz. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso procurar a paz nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a procurar a paz e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a procurar a paz. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de procurar a paz."
  },
  {
    "data": "2026-12-14",
    "versiculo": "1 Samuel 16:1-13",
    "explicacao": "A leitura de 1 Samuel 16:1-13 apresenta um convite a renovar a confiança. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa renovar a confiança. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a renovar a confiança. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas renovar a confiança. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de renovar a confiança."
  },
  {
    "data": "2026-12-15",
    "versiculo": "1 Samuel 17:32-47",
    "explicacao": "Esta passagem bíblica recorda a importância de reconhecer os próprios limites. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: reconhecer os próprios limites. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a reconhecer os próprios limites. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para reconhecer os próprios limites e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de reconhecer os próprios limites num sinal de esperança."
  },
  {
    "data": "2026-12-16",
    "versiculo": "2 Samuel 7:18-29",
    "explicacao": "A mensagem desta leitura destaca o valor de resistir ao desânimo. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: resistir ao desânimo. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para resistir ao desânimo. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de resistir ao desânimo. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de resistir ao desânimo."
  },
  {
    "data": "2026-12-17",
    "versiculo": "2 Samuel 22:1-7",
    "explicacao": "Neste trecho, encontramos um convite a dar atenção à família. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso dar atenção à família nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a dar atenção à família e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a dar atenção à família. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de dar atenção à família."
  },
  {
    "data": "2026-12-18",
    "versiculo": "1 Reis 3:5-14",
    "explicacao": "A leitura de 1 Reis 3:5-14 apresenta um convite a ser generoso no quotidiano. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa ser generoso no quotidiano. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a ser generoso no quotidiano. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser generoso no quotidiano. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de ser generoso no quotidiano."
  },
  {
    "data": "2026-12-19",
    "versiculo": "1 Reis 19:1-13",
    "explicacao": "Esta passagem bíblica recorda a importância de valorizar a oração. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: valorizar a oração. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a valorizar a oração. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para valorizar a oração e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de valorizar a oração num sinal de esperança."
  },
  {
    "data": "2026-12-20",
    "versiculo": "2 Reis 4:1-7",
    "explicacao": "A mensagem desta leitura destaca o valor de agir com coragem. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: agir com coragem. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para agir com coragem. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de agir com coragem. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de agir com coragem."
  },
  {
    "data": "2026-12-21",
    "versiculo": "2 Reis 5:1-14",
    "explicacao": "Neste trecho, encontramos um convite a aprender a esperar. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso aprender a esperar nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a aprender a esperar e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a aprender a esperar. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de aprender a esperar."
  },
  {
    "data": "2026-12-22",
    "versiculo": "1 Crónicas 16:8-12",
    "explicacao": "A leitura de 1 Crónicas 16:8-12 apresenta um convite a respeitar a dignidade de cada pessoa. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa respeitar a dignidade de cada pessoa. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a respeitar a dignidade de cada pessoa. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas respeitar a dignidade de cada pessoa. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de respeitar a dignidade de cada pessoa."
  },
  {
    "data": "2026-12-23",
    "versiculo": "1 Crónicas 29:10-13",
    "explicacao": "Esta passagem bíblica recorda a importância de dar testemunho através das atitudes. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: dar testemunho através das atitudes. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a dar testemunho através das atitudes. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para dar testemunho através das atitudes e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de dar testemunho através das atitudes num sinal de esperança."
  },
  {
    "data": "2026-12-24",
    "versiculo": "2 Crónicas 7:11-16",
    "explicacao": "A mensagem desta leitura destaca o valor de viver com simplicidade. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: viver com simplicidade. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para viver com simplicidade. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de viver com simplicidade. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de viver com simplicidade."
  },
  {
    "data": "2026-12-25",
    "versiculo": "2 Crónicas 20:1-22",
    "explicacao": "Neste trecho, encontramos um convite a acolher a orientação do Espírito. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso acolher a orientação do Espírito nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a acolher a orientação do Espírito e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a acolher a orientação do Espírito. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de acolher a orientação do Espírito."
  },
  {
    "data": "2026-12-26",
    "versiculo": "Esdras 3:10-13",
    "explicacao": "A leitura de Esdras 3:10-13 apresenta um convite a não responder ao mal com mal. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa não responder ao mal com mal. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a não responder ao mal com mal. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não responder ao mal com mal. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de não responder ao mal com mal."
  },
  {
    "data": "2026-12-27",
    "versiculo": "Esdras 7:6-10",
    "explicacao": "Esta passagem bíblica recorda a importância de ser paciente nas diferenças. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: ser paciente nas diferenças. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a ser paciente nas diferenças. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para ser paciente nas diferenças e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de ser paciente nas diferenças num sinal de esperança."
  },
  {
    "data": "2026-12-28",
    "versiculo": "Neemias 8:1-12",
    "explicacao": "A mensagem desta leitura destaca o valor de cuidar das palavras. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: cuidar das palavras. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para cuidar das palavras. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de cuidar das palavras. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de cuidar das palavras."
  },
  {
    "data": "2026-12-29",
    "versiculo": "Neemias 9:5-8",
    "explicacao": "Neste trecho, encontramos um convite a manter a esperança viva. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso manter a esperança viva nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a manter a esperança viva e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a manter a esperança viva. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de manter a esperança viva."
  },
  {
    "data": "2026-12-30",
    "versiculo": "Tobias 4:5-11",
    "explicacao": "A leitura de Tobias 4:5-11 apresenta um convite a estar disponível para ajudar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa estar disponível para ajudar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a estar disponível para ajudar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas estar disponível para ajudar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de estar disponível para ajudar."
  },
  {
    "data": "2026-12-31",
    "versiculo": "Tobias 12:6-10",
    "explicacao": "Esta passagem bíblica recorda a importância de reconhecer os dons dos outros. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: reconhecer os dons dos outros. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a reconhecer os dons dos outros. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para reconhecer os dons dos outros e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de reconhecer os dons dos outros num sinal de esperança."
  },
  {
    "data": "2027-01-01",
    "versiculo": "Judite 8:11-17",
    "explicacao": "A mensagem desta leitura destaca o valor de escolher o bem mesmo sem reconhecimento. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: escolher o bem mesmo sem reconhecimento. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para escolher o bem mesmo sem reconhecimento. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de escolher o bem mesmo sem reconhecimento. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de escolher o bem mesmo sem reconhecimento."
  },
  {
    "data": "2027-01-02",
    "versiculo": "Judite 13:14-20",
    "explicacao": "Neste trecho, encontramos um convite a fazer da fé uma prática diária. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso fazer da fé uma prática diária nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a fazer da fé uma prática diária e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a fazer da fé uma prática diária. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de fazer da fé uma prática diária."
  },
  {
    "data": "2027-01-03",
    "versiculo": "Ester 4:12-17",
    "explicacao": "A leitura de Ester 4:12-17 apresenta um convite a crescer na confiança. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa crescer na confiança. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a crescer na confiança. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas crescer na confiança. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de crescer na confiança."
  },
  {
    "data": "2027-01-04",
    "versiculo": "Ester 14:1-19",
    "explicacao": "Esta passagem bíblica recorda a importância de partilhar consolo. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: partilhar consolo. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a partilhar consolo. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para partilhar consolo e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de partilhar consolo num sinal de esperança."
  },
  {
    "data": "2027-01-05",
    "versiculo": "1 Macabeus 2:49-64",
    "explicacao": "A mensagem desta leitura destaca o valor de ser verdadeiro nas decisões. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser verdadeiro nas decisões. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser verdadeiro nas decisões. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser verdadeiro nas decisões. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser verdadeiro nas decisões."
  },
  {
    "data": "2027-01-06",
    "versiculo": "1 Macabeus 4:36-51",
    "explicacao": "Neste trecho, encontramos um convite a dar lugar ao silêncio. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso dar lugar ao silêncio nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a dar lugar ao silêncio e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a dar lugar ao silêncio. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de dar lugar ao silêncio."
  },
  {
    "data": "2027-01-07",
    "versiculo": "2 Macabeus 6:18-31",
    "explicacao": "A leitura de 2 Macabeus 6:18-31 apresenta um convite a não esquecer as bênçãos. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa não esquecer as bênçãos. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a não esquecer as bênçãos. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não esquecer as bênçãos. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de não esquecer as bênçãos."
  },
  {
    "data": "2027-01-08",
    "versiculo": "2 Macabeus 7:1-14",
    "explicacao": "Esta passagem bíblica recorda a importância de agir com responsabilidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: agir com responsabilidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a agir com responsabilidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para agir com responsabilidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de agir com responsabilidade num sinal de esperança."
  },
  {
    "data": "2027-01-09",
    "versiculo": "Jó 1:20-22",
    "explicacao": "A mensagem desta leitura destaca o valor de ser perseverante. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser perseverante. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser perseverante. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser perseverante. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser perseverante."
  },
  {
    "data": "2027-01-10",
    "versiculo": "Jó 19:23-27",
    "explicacao": "Neste trecho, encontramos um convite a procurar a vontade de Deus. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso procurar a vontade de Deus nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a procurar a vontade de Deus e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a procurar a vontade de Deus. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de procurar a vontade de Deus."
  },
  {
    "data": "2027-01-11",
    "versiculo": "Jó 42:1-6",
    "explicacao": "A leitura de Jó 42:1-6 apresenta um convite a acolher a correção. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa acolher a correção. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a acolher a correção. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas acolher a correção. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de acolher a correção."
  },
  {
    "data": "2027-01-12",
    "versiculo": "Salmos 23:1-6",
    "explicacao": "Esta passagem bíblica recorda a importância de ser sinal de paz. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: ser sinal de paz. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a ser sinal de paz. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para ser sinal de paz e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de ser sinal de paz num sinal de esperança."
  },
  {
    "data": "2027-01-13",
    "versiculo": "Salmos 27:1-6",
    "explicacao": "A mensagem desta leitura destaca o valor de viver a caridade. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: viver a caridade. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para viver a caridade. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de viver a caridade. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de viver a caridade."
  },
  {
    "data": "2027-01-14",
    "versiculo": "Salmos 34:1-10",
    "explicacao": "Neste trecho, encontramos um convite a respeitar os compromissos. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso respeitar os compromissos nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a respeitar os compromissos e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a respeitar os compromissos. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de respeitar os compromissos."
  },
  {
    "data": "2027-01-15",
    "versiculo": "Salmos 46:1-7",
    "explicacao": "A leitura de Salmos 46:1-7 apresenta um convite a pedir perdão. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa pedir perdão. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a pedir perdão. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir perdão. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de pedir perdão."
  },
  {
    "data": "2027-01-16",
    "versiculo": "Salmos 51:1-12",
    "explicacao": "Esta passagem bíblica recorda a importância de oferecer uma palavra de ânimo. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: oferecer uma palavra de ânimo. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a oferecer uma palavra de ânimo. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para oferecer uma palavra de ânimo e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de oferecer uma palavra de ânimo num sinal de esperança."
  },
  {
    "data": "2027-01-17",
    "versiculo": "Salmos 91:1-8",
    "explicacao": "A mensagem desta leitura destaca o valor de não julgar apressadamente. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: não julgar apressadamente. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para não julgar apressadamente. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de não julgar apressadamente. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de não julgar apressadamente."
  },
  {
    "data": "2027-01-18",
    "versiculo": "Salmos 121:1-8",
    "explicacao": "Neste trecho, encontramos um convite a valorizar a comunidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso valorizar a comunidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a valorizar a comunidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a valorizar a comunidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de valorizar a comunidade."
  },
  {
    "data": "2027-01-19",
    "versiculo": "Provérbios 3:1-12",
    "explicacao": "A leitura de Provérbios 3:1-12 apresenta um convite a recomeçar depois de errar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa recomeçar depois de errar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a recomeçar depois de errar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas recomeçar depois de errar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de recomeçar depois de errar."
  },
  {
    "data": "2027-01-20",
    "versiculo": "Provérbios 4:20-27",
    "explicacao": "Esta passagem bíblica recorda a importância de ser firme sem perder a ternura. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: ser firme sem perder a ternura. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a ser firme sem perder a ternura. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para ser firme sem perder a ternura e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de ser firme sem perder a ternura num sinal de esperança."
  },
  {
    "data": "2027-01-21",
    "versiculo": "Provérbios 16:1-9",
    "explicacao": "A mensagem desta leitura destaca o valor de cuidar da criação. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: cuidar da criação. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para cuidar da criação. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de cuidar da criação. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de cuidar da criação."
  },
  {
    "data": "2027-01-22",
    "versiculo": "Eclesiastes 3:1-13",
    "explicacao": "Neste trecho, encontramos um convite a escutar antes de responder. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso escutar antes de responder nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a escutar antes de responder e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a escutar antes de responder. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de escutar antes de responder."
  },
  {
    "data": "2027-01-23",
    "versiculo": "Eclesiastes 11:7-10",
    "explicacao": "A leitura de Eclesiastes 11:7-10 apresenta um convite a fazer o bem em segredo. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa fazer o bem em segredo. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a fazer o bem em segredo. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas fazer o bem em segredo. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de fazer o bem em segredo."
  },
  {
    "data": "2027-01-24",
    "versiculo": "Cântico dos Cânticos 2:8-14",
    "explicacao": "Esta passagem bíblica recorda a importância de confiar a Deus os planos. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: confiar a Deus os planos. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a confiar a Deus os planos. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para confiar a Deus os planos e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de confiar a Deus os planos num sinal de esperança."
  },
  {
    "data": "2027-01-25",
    "versiculo": "Cântico dos Cânticos 8:6-7",
    "explicacao": "A mensagem desta leitura destaca o valor de praticar a justiça. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: praticar a justiça. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para praticar a justiça. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de praticar a justiça. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de praticar a justiça."
  },
  {
    "data": "2027-01-26",
    "versiculo": "Sabedoria 3:1-9",
    "explicacao": "Neste trecho, encontramos um convite a viver com coração agradecido. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso viver com coração agradecido nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a viver com coração agradecido e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a viver com coração agradecido. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de viver com coração agradecido."
  },
  {
    "data": "2027-01-27",
    "versiculo": "Sabedoria 7:7-14",
    "explicacao": "A leitura de Sabedoria 7:7-14 apresenta um convite a cuidar da criação no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa cuidar da criação no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a cuidar da criação no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar da criação no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de cuidar da criação no relacionamento com os outros."
  },
  {
    "data": "2027-01-28",
    "versiculo": "Sabedoria 11:21-26",
    "explicacao": "Esta passagem bíblica recorda a importância de escutar a voz de Deus na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: escutar a voz de Deus na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a escutar a voz de Deus na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para escutar a voz de Deus na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de escutar a voz de Deus na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-01-29",
    "versiculo": "Eclesiástico 2:1-11",
    "explicacao": "A mensagem desta leitura destaca o valor de cultivar a gratidão no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: cultivar a gratidão no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para cultivar a gratidão no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de cultivar a gratidão no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de cultivar a gratidão no serviço diário."
  },
  {
    "data": "2027-01-30",
    "versiculo": "Eclesiástico 6:5-17",
    "explicacao": "Neste trecho, encontramos um convite a pedir sabedoria na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso pedir sabedoria na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a pedir sabedoria na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a pedir sabedoria na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de pedir sabedoria na escola e no trabalho."
  },
  {
    "data": "2027-01-31",
    "versiculo": "Eclesiástico 17:1-14",
    "explicacao": "A leitura de Eclesiástico 17:1-14 apresenta um convite a reconhecer os próprios limites quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa reconhecer os próprios limites quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a reconhecer os próprios limites quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas reconhecer os próprios limites quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de reconhecer os próprios limites quando surgem diferenças."
  },
  {
    "data": "2027-02-01",
    "versiculo": "Isaías 9:1-6",
    "explicacao": "Esta passagem bíblica recorda a importância de respeitar a dignidade de cada pessoa ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: respeitar a dignidade de cada pessoa ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a respeitar a dignidade de cada pessoa ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para respeitar a dignidade de cada pessoa ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de respeitar a dignidade de cada pessoa ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-02-02",
    "versiculo": "Isaías 40:27-31",
    "explicacao": "A mensagem desta leitura destaca o valor de manter a esperança viva mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: manter a esperança viva mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para manter a esperança viva mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de manter a esperança viva mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de manter a esperança viva mesmo sem ser visto."
  },
  {
    "data": "2027-02-03",
    "versiculo": "Isaías 43:1-7",
    "explicacao": "Neste trecho, encontramos um convite a ser verdadeiro nas decisões com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso ser verdadeiro nas decisões com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a ser verdadeiro nas decisões com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a ser verdadeiro nas decisões com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de ser verdadeiro nas decisões com serenidade."
  },
  {
    "data": "2027-02-04",
    "versiculo": "Isaías 55:1-11",
    "explicacao": "A leitura de Isaías 55:1-11 apresenta um convite a ser sinal de paz na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa ser sinal de paz na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a ser sinal de paz na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser sinal de paz na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de ser sinal de paz na vida familiar."
  },
  {
    "data": "2027-02-05",
    "versiculo": "Jeremias 17:5-10",
    "explicacao": "Esta passagem bíblica recorda a importância de recomeçar depois de errar na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: recomeçar depois de errar na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a recomeçar depois de errar na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para recomeçar depois de errar na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de recomeçar depois de errar na comunidade num sinal de esperança."
  },
  {
    "data": "2027-02-06",
    "versiculo": "Jeremias 29:11-14",
    "explicacao": "A mensagem desta leitura destaca o valor de viver com coração agradecido nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: viver com coração agradecido nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para viver com coração agradecido nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de viver com coração agradecido nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de viver com coração agradecido nas escolhas de hoje."
  },
  {
    "data": "2027-02-07",
    "versiculo": "Jeremias 31:31-34",
    "explicacao": "Neste trecho, encontramos um convite a confiar durante a espera nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso confiar durante a espera nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a confiar durante a espera nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a confiar durante a espera nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de confiar durante a espera nos momentos difíceis."
  },
  {
    "data": "2027-02-08",
    "versiculo": "Lamentações 3:19-26",
    "explicacao": "A leitura de Lamentações 3:19-26 apresenta um convite a partilhar os dons recebidos no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa partilhar os dons recebidos no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a partilhar os dons recebidos no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas partilhar os dons recebidos no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de partilhar os dons recebidos no relacionamento com os outros."
  },
  {
    "data": "2027-02-09",
    "versiculo": "Baruc 3:9-15",
    "explicacao": "Esta passagem bíblica recorda a importância de procurar a paz na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: procurar a paz na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a procurar a paz na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para procurar a paz na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de procurar a paz na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-02-10",
    "versiculo": "Baruc 4:1-4",
    "explicacao": "A mensagem desta leitura destaca o valor de agir com coragem no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: agir com coragem no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para agir com coragem no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de agir com coragem no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de agir com coragem no serviço diário."
  },
  {
    "data": "2027-02-11",
    "versiculo": "Ezequiel 34:11-16",
    "explicacao": "Neste trecho, encontramos um convite a ser paciente nas diferenças na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso ser paciente nas diferenças na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a ser paciente nas diferenças na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a ser paciente nas diferenças na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de ser paciente nas diferenças na escola e no trabalho."
  },
  {
    "data": "2027-02-12",
    "versiculo": "Ezequiel 36:24-28",
    "explicacao": "A leitura de Ezequiel 36:24-28 apresenta um convite a crescer na confiança quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa crescer na confiança quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a crescer na confiança quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas crescer na confiança quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de crescer na confiança quando surgem diferenças."
  },
  {
    "data": "2027-02-13",
    "versiculo": "Ezequiel 37:1-14",
    "explicacao": "Esta passagem bíblica recorda a importância de procurar a vontade de Deus ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: procurar a vontade de Deus ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a procurar a vontade de Deus ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para procurar a vontade de Deus ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de procurar a vontade de Deus ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-02-14",
    "versiculo": "Daniel 3:25-45",
    "explicacao": "A mensagem desta leitura destaca o valor de não julgar apressadamente mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: não julgar apressadamente mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para não julgar apressadamente mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de não julgar apressadamente mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de não julgar apressadamente mesmo sem ser visto."
  },
  {
    "data": "2027-02-15",
    "versiculo": "Daniel 6:10-23",
    "explicacao": "Neste trecho, encontramos um convite a confiar a Deus os planos com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso confiar a Deus os planos com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a confiar a Deus os planos com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a confiar a Deus os planos com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de confiar a Deus os planos com serenidade."
  },
  {
    "data": "2027-02-16",
    "versiculo": "Oseias 2:16-22",
    "explicacao": "A leitura de Oseias 2:16-22 apresenta um convite a permanecer firme na esperança na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa permanecer firme na esperança na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a permanecer firme na esperança na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas permanecer firme na esperança na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de permanecer firme na esperança na vida familiar."
  },
  {
    "data": "2027-02-17",
    "versiculo": "Oseias 6:1-6",
    "explicacao": "Esta passagem bíblica recorda a importância de agir com justiça na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: agir com justiça na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a agir com justiça na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para agir com justiça na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de agir com justiça na comunidade num sinal de esperança."
  },
  {
    "data": "2027-02-18",
    "versiculo": "Joel 2:12-18",
    "explicacao": "A mensagem desta leitura destaca o valor de falar com bondade nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: falar com bondade nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para falar com bondade nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de falar com bondade nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de falar com bondade nas escolhas de hoje."
  },
  {
    "data": "2027-02-19",
    "versiculo": "Joel 3:1-5",
    "explicacao": "Neste trecho, encontramos um convite a ser generoso no quotidiano nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso ser generoso no quotidiano nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a ser generoso no quotidiano nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a ser generoso no quotidiano nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de ser generoso no quotidiano nos momentos difíceis."
  },
  {
    "data": "2027-02-20",
    "versiculo": "Amós 5:14-24",
    "explicacao": "A leitura de Amós 5:14-24 apresenta um convite a acolher a orientação do Espírito no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa acolher a orientação do Espírito no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a acolher a orientação do Espírito no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas acolher a orientação do Espírito no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de acolher a orientação do Espírito no relacionamento com os outros."
  },
  {
    "data": "2027-02-21",
    "versiculo": "Amós 9:11-15",
    "explicacao": "Esta passagem bíblica recorda a importância de escolher o bem mesmo sem reconhecimento na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: escolher o bem mesmo sem reconhecimento na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a escolher o bem mesmo sem reconhecimento na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para escolher o bem mesmo sem reconhecimento na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de escolher o bem mesmo sem reconhecimento na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-02-22",
    "versiculo": "Abdias 1:15-21",
    "explicacao": "A mensagem desta leitura destaca o valor de agir com responsabilidade no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: agir com responsabilidade no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para agir com responsabilidade no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de agir com responsabilidade no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de agir com responsabilidade no serviço diário."
  },
  {
    "data": "2027-02-23",
    "versiculo": "Jonas 2:1-10",
    "explicacao": "Neste trecho, encontramos um convite a pedir perdão na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso pedir perdão na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a pedir perdão na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a pedir perdão na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de pedir perdão na escola e no trabalho."
  },
  {
    "data": "2027-02-24",
    "versiculo": "Jonas 4:1-11",
    "explicacao": "A leitura de Jonas 4:1-11 apresenta um convite a escutar antes de responder quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa escutar antes de responder quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a escutar antes de responder quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas escutar antes de responder quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de escutar antes de responder quando surgem diferenças."
  },
  {
    "data": "2027-02-25",
    "versiculo": "Miqueias 6:6-8",
    "explicacao": "Esta passagem bíblica recorda a importância de recomeçar com humildade ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: recomeçar com humildade ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a recomeçar com humildade ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para recomeçar com humildade ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de recomeçar com humildade ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-02-26",
    "versiculo": "Miqueias 7:18-20",
    "explicacao": "A mensagem desta leitura destaca o valor de procurar a reconciliação mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: procurar a reconciliação mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para procurar a reconciliação mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de procurar a reconciliação mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de procurar a reconciliação mesmo sem ser visto."
  },
  {
    "data": "2027-02-27",
    "versiculo": "Naum 1:2-8",
    "explicacao": "Neste trecho, encontramos um convite a acolher quem está sozinho com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso acolher quem está sozinho com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a acolher quem está sozinho com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a acolher quem está sozinho com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de acolher quem está sozinho com serenidade."
  },
  {
    "data": "2027-02-28",
    "versiculo": "Habacuc 2:1-4",
    "explicacao": "A leitura de Habacuc 2:1-4 apresenta um convite a resistir ao desânimo na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa resistir ao desânimo na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a resistir ao desânimo na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas resistir ao desânimo na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de resistir ao desânimo na vida familiar."
  },
  {
    "data": "2027-03-01",
    "versiculo": "Habacuc 3:17-19",
    "explicacao": "Esta passagem bíblica recorda a importância de dar testemunho através das atitudes na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: dar testemunho através das atitudes na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a dar testemunho através das atitudes na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para dar testemunho através das atitudes na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de dar testemunho através das atitudes na comunidade num sinal de esperança."
  },
  {
    "data": "2027-03-02",
    "versiculo": "Sofonias 3:14-20",
    "explicacao": "A mensagem desta leitura destaca o valor de estar disponível para ajudar nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: estar disponível para ajudar nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para estar disponível para ajudar nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de estar disponível para ajudar nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de estar disponível para ajudar nas escolhas de hoje."
  },
  {
    "data": "2027-03-03",
    "versiculo": "Ageu 1:2-8",
    "explicacao": "Neste trecho, encontramos um convite a dar lugar ao silêncio nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso dar lugar ao silêncio nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a dar lugar ao silêncio nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a dar lugar ao silêncio nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de dar lugar ao silêncio nos momentos difíceis."
  },
  {
    "data": "2027-03-04",
    "versiculo": "Ageu 2:4-9",
    "explicacao": "A leitura de Ageu 2:4-9 apresenta um convite a viver a caridade no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa viver a caridade no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a viver a caridade no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas viver a caridade no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de viver a caridade no relacionamento com os outros."
  },
  {
    "data": "2027-03-05",
    "versiculo": "Zacarias 8:1-8",
    "explicacao": "Esta passagem bíblica recorda a importância de ser firme sem perder a ternura na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: ser firme sem perder a ternura na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a ser firme sem perder a ternura na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para ser firme sem perder a ternura na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de ser firme sem perder a ternura na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-03-06",
    "versiculo": "Zacarias 9:9-10",
    "explicacao": "A mensagem desta leitura destaca o valor de cuidar da criação no relacionamento com os outros no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: cuidar da criação no relacionamento com os outros no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para cuidar da criação no relacionamento com os outros no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de cuidar da criação no relacionamento com os outros no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de cuidar da criação no relacionamento com os outros no serviço diário."
  },
  {
    "data": "2027-03-07",
    "versiculo": "Malaquias 3:1-4",
    "explicacao": "Neste trecho, encontramos um convite a escolher a verdade na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso escolher a verdade na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a escolher a verdade na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a escolher a verdade na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de escolher a verdade na escola e no trabalho."
  },
  {
    "data": "2027-03-08",
    "versiculo": "Malaquias 3:19-24",
    "explicacao": "A leitura de Malaquias 3:19-24 apresenta um convite a proteger a unidade quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa proteger a unidade quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a proteger a unidade quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas proteger a unidade quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de proteger a unidade quando surgem diferenças."
  },
  {
    "data": "2027-03-09",
    "versiculo": "Mateus 5:1-12",
    "explicacao": "Esta passagem bíblica recorda a importância de renovar a confiança ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: renovar a confiança ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a renovar a confiança ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para renovar a confiança ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de renovar a confiança ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-03-10",
    "versiculo": "Mateus 6:25-34",
    "explicacao": "A mensagem desta leitura destaca o valor de aprender a esperar mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: aprender a esperar mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para aprender a esperar mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de aprender a esperar mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de aprender a esperar mesmo sem ser visto."
  },
  {
    "data": "2027-03-11",
    "versiculo": "Mateus 11:25-30",
    "explicacao": "Neste trecho, encontramos um convite a cuidar das palavras com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso cuidar das palavras com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a cuidar das palavras com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a cuidar das palavras com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de cuidar das palavras com serenidade."
  },
  {
    "data": "2027-03-12",
    "versiculo": "Mateus 25:31-40",
    "explicacao": "A leitura de Mateus 25:31-40 apresenta um convite a partilhar consolo na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa partilhar consolo na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a partilhar consolo na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas partilhar consolo na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de partilhar consolo na vida familiar."
  },
  {
    "data": "2027-03-13",
    "versiculo": "Marcos 4:35-41",
    "explicacao": "Esta passagem bíblica recorda a importância de acolher a correção na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: acolher a correção na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a acolher a correção na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para acolher a correção na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de acolher a correção na comunidade num sinal de esperança."
  },
  {
    "data": "2027-03-14",
    "versiculo": "Marcos 10:13-16",
    "explicacao": "A mensagem desta leitura destaca o valor de valorizar a comunidade nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: valorizar a comunidade nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para valorizar a comunidade nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de valorizar a comunidade nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de valorizar a comunidade nas escolhas de hoje."
  },
  {
    "data": "2027-03-15",
    "versiculo": "Marcos 12:28-34",
    "explicacao": "Neste trecho, encontramos um convite a praticar a justiça nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso praticar a justiça nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a praticar a justiça nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a praticar a justiça nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de praticar a justiça nos momentos difíceis."
  },
  {
    "data": "2027-03-16",
    "versiculo": "Lucas 1:46-55",
    "explicacao": "A leitura de Lucas 1:46-55 apresenta um convite a tratar os outros com misericórdia no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa tratar os outros com misericórdia no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a tratar os outros com misericórdia no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas tratar os outros com misericórdia no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de tratar os outros com misericórdia no relacionamento com os outros."
  },
  {
    "data": "2027-03-17",
    "versiculo": "Lucas 10:25-37",
    "explicacao": "Esta passagem bíblica recorda a importância de vencer a indiferença na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: vencer a indiferença na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a vencer a indiferença na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para vencer a indiferença na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de vencer a indiferença na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-03-18",
    "versiculo": "Lucas 15:11-32",
    "explicacao": "A mensagem desta leitura destaca o valor de ser fiel nas pequenas tarefas no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser fiel nas pequenas tarefas no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser fiel nas pequenas tarefas no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser fiel nas pequenas tarefas no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser fiel nas pequenas tarefas no serviço diário."
  },
  {
    "data": "2027-03-19",
    "versiculo": "Lucas 24:13-35",
    "explicacao": "Neste trecho, encontramos um convite a valorizar a oração na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso valorizar a oração na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a valorizar a oração na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a valorizar a oração na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de valorizar a oração na escola e no trabalho."
  },
  {
    "data": "2027-03-20",
    "versiculo": "João 1:1-14",
    "explicacao": "A leitura de João 1:1-14 apresenta um convite a não responder ao mal com mal quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa não responder ao mal com mal quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a não responder ao mal com mal quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não responder ao mal com mal quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de não responder ao mal com mal quando surgem diferenças."
  },
  {
    "data": "2027-03-21",
    "versiculo": "João 10:1-18",
    "explicacao": "Esta passagem bíblica recorda a importância de fazer da fé uma prática diária ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: fazer da fé uma prática diária ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a fazer da fé uma prática diária ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para fazer da fé uma prática diária ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de fazer da fé uma prática diária ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-03-22",
    "versiculo": "João 14:1-7",
    "explicacao": "A mensagem desta leitura destaca o valor de ser perseverante mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser perseverante mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser perseverante mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser perseverante mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser perseverante mesmo sem ser visto."
  },
  {
    "data": "2027-03-23",
    "versiculo": "João 15:1-17",
    "explicacao": "Neste trecho, encontramos um convite a oferecer uma palavra de ânimo com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso oferecer uma palavra de ânimo com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a oferecer uma palavra de ânimo com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a oferecer uma palavra de ânimo com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de oferecer uma palavra de ânimo com serenidade."
  },
  {
    "data": "2027-03-24",
    "versiculo": "Actos dos Apóstolos 2:1-13",
    "explicacao": "A leitura de Actos dos Apóstolos 2:1-13 apresenta um convite a fazer o bem em segredo na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa fazer o bem em segredo na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a fazer o bem em segredo na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas fazer o bem em segredo na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de fazer o bem em segredo na vida familiar."
  },
  {
    "data": "2027-03-25",
    "versiculo": "Actos dos Apóstolos 4:32-37",
    "explicacao": "Esta passagem bíblica recorda a importância de servir sem procurar aplausos na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: servir sem procurar aplausos na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a servir sem procurar aplausos na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para servir sem procurar aplausos na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de servir sem procurar aplausos na comunidade num sinal de esperança."
  },
  {
    "data": "2027-03-26",
    "versiculo": "Actos dos Apóstolos 9:1-19",
    "explicacao": "A mensagem desta leitura destaca o valor de cuidar dos mais frágeis nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: cuidar dos mais frágeis nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para cuidar dos mais frágeis nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de cuidar dos mais frágeis nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de cuidar dos mais frágeis nas escolhas de hoje."
  },
  {
    "data": "2027-03-27",
    "versiculo": "Romanos 5:1-11",
    "explicacao": "Neste trecho, encontramos um convite a perdoar com sinceridade nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso perdoar com sinceridade nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a perdoar com sinceridade nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a perdoar com sinceridade nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de perdoar com sinceridade nos momentos difíceis."
  },
  {
    "data": "2027-03-28",
    "versiculo": "Romanos 8:18-39",
    "explicacao": "A leitura de Romanos 8:18-39 apresenta um convite a dar atenção à família no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa dar atenção à família no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a dar atenção à família no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas dar atenção à família no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de dar atenção à família no relacionamento com os outros."
  },
  {
    "data": "2027-03-29",
    "versiculo": "Romanos 12:1-21",
    "explicacao": "Esta passagem bíblica recorda a importância de viver com simplicidade na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: viver com simplicidade na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a viver com simplicidade na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para viver com simplicidade na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de viver com simplicidade na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-03-30",
    "versiculo": "1 Coríntios 13:1-13",
    "explicacao": "A mensagem desta leitura destaca o valor de reconhecer os dons dos outros no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: reconhecer os dons dos outros no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para reconhecer os dons dos outros no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de reconhecer os dons dos outros no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de reconhecer os dons dos outros no serviço diário."
  },
  {
    "data": "2027-03-31",
    "versiculo": "1 Coríntios 15:1-11",
    "explicacao": "Neste trecho, encontramos um convite a não esquecer as bênçãos na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso não esquecer as bênçãos na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a não esquecer as bênçãos na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a não esquecer as bênçãos na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de não esquecer as bênçãos na escola e no trabalho."
  },
  {
    "data": "2027-04-01",
    "versiculo": "2 Coríntios 4:7-18",
    "explicacao": "A leitura de 2 Coríntios 4:7-18 apresenta um convite a respeitar os compromissos quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa respeitar os compromissos quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a respeitar os compromissos quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas respeitar os compromissos quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de respeitar os compromissos quando surgem diferenças."
  },
  {
    "data": "2027-04-02",
    "versiculo": "2 Coríntios 5:14-21",
    "explicacao": "Esta passagem bíblica recorda a importância de cuidar da criação ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: cuidar da criação ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a cuidar da criação ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para cuidar da criação ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de cuidar da criação ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-04-03",
    "versiculo": "Gálatas 5:13-26",
    "explicacao": "A mensagem desta leitura destaca o valor de escutar a voz de Deus mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: escutar a voz de Deus mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para escutar a voz de Deus mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de escutar a voz de Deus mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de escutar a voz de Deus mesmo sem ser visto."
  },
  {
    "data": "2027-04-04",
    "versiculo": "Gálatas 6:1-10",
    "explicacao": "Neste trecho, encontramos um convite a cultivar a gratidão com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso cultivar a gratidão com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a cultivar a gratidão com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a cultivar a gratidão com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de cultivar a gratidão com serenidade."
  },
  {
    "data": "2027-04-05",
    "versiculo": "Efésios 2:1-10",
    "explicacao": "A leitura de Efésios 2:1-10 apresenta um convite a pedir sabedoria na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa pedir sabedoria na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a pedir sabedoria na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir sabedoria na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de pedir sabedoria na vida familiar."
  },
  {
    "data": "2027-04-06",
    "versiculo": "Efésios 4:1-16",
    "explicacao": "Esta passagem bíblica recorda a importância de reconhecer os próprios limites na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: reconhecer os próprios limites na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a reconhecer os próprios limites na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para reconhecer os próprios limites na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de reconhecer os próprios limites na comunidade num sinal de esperança."
  },
  {
    "data": "2027-04-07",
    "versiculo": "Efésios 6:10-18",
    "explicacao": "A mensagem desta leitura destaca o valor de respeitar a dignidade de cada pessoa nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: respeitar a dignidade de cada pessoa nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para respeitar a dignidade de cada pessoa nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de respeitar a dignidade de cada pessoa nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de respeitar a dignidade de cada pessoa nas escolhas de hoje."
  },
  {
    "data": "2027-04-08",
    "versiculo": "Filipenses 2:1-11",
    "explicacao": "Neste trecho, encontramos um convite a manter a esperança viva nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso manter a esperança viva nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a manter a esperança viva nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a manter a esperança viva nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de manter a esperança viva nos momentos difíceis."
  },
  {
    "data": "2027-04-09",
    "versiculo": "Filipenses 4:4-9",
    "explicacao": "A leitura de Filipenses 4:4-9 apresenta um convite a ser verdadeiro nas decisões no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa ser verdadeiro nas decisões no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a ser verdadeiro nas decisões no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser verdadeiro nas decisões no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de ser verdadeiro nas decisões no relacionamento com os outros."
  },
  {
    "data": "2027-04-10",
    "versiculo": "Colossenses 3:1-17",
    "explicacao": "Esta passagem bíblica recorda a importância de ser sinal de paz na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: ser sinal de paz na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a ser sinal de paz na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para ser sinal de paz na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de ser sinal de paz na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-04-11",
    "versiculo": "1 Tessalonicenses 5:12-24",
    "explicacao": "A mensagem desta leitura destaca o valor de recomeçar depois de errar no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: recomeçar depois de errar no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para recomeçar depois de errar no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de recomeçar depois de errar no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de recomeçar depois de errar no serviço diário."
  },
  {
    "data": "2027-04-12",
    "versiculo": "2 Tessalonicenses 3:1-5",
    "explicacao": "Neste trecho, encontramos um convite a viver com coração agradecido na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso viver com coração agradecido na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a viver com coração agradecido na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a viver com coração agradecido na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de viver com coração agradecido na escola e no trabalho."
  },
  {
    "data": "2027-04-13",
    "versiculo": "1 Timóteo 4:6-16",
    "explicacao": "A leitura de 1 Timóteo 4:6-16 apresenta um convite a confiar durante a espera quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa confiar durante a espera quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a confiar durante a espera quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas confiar durante a espera quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de confiar durante a espera quando surgem diferenças."
  },
  {
    "data": "2027-04-14",
    "versiculo": "1 Timóteo 6:6-12",
    "explicacao": "Esta passagem bíblica recorda a importância de partilhar os dons recebidos ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: partilhar os dons recebidos ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a partilhar os dons recebidos ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para partilhar os dons recebidos ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de partilhar os dons recebidos ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-04-15",
    "versiculo": "2 Timóteo 1:6-14",
    "explicacao": "A mensagem desta leitura destaca o valor de procurar a paz mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: procurar a paz mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para procurar a paz mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de procurar a paz mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de procurar a paz mesmo sem ser visto."
  },
  {
    "data": "2027-04-16",
    "versiculo": "2 Timóteo 3:14-17",
    "explicacao": "Neste trecho, encontramos um convite a agir com coragem com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso agir com coragem com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a agir com coragem com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a agir com coragem com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de agir com coragem com serenidade."
  },
  {
    "data": "2027-04-17",
    "versiculo": "Tito 2:11-14",
    "explicacao": "A leitura de Tito 2:11-14 apresenta um convite a ser paciente nas diferenças na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa ser paciente nas diferenças na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a ser paciente nas diferenças na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser paciente nas diferenças na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de ser paciente nas diferenças na vida familiar."
  },
  {
    "data": "2027-04-18",
    "versiculo": "Tito 3:1-8",
    "explicacao": "Esta passagem bíblica recorda a importância de crescer na confiança na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: crescer na confiança na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a crescer na confiança na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para crescer na confiança na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de crescer na confiança na comunidade num sinal de esperança."
  },
  {
    "data": "2027-04-19",
    "versiculo": "Filémon 1:8-21",
    "explicacao": "A mensagem desta leitura destaca o valor de procurar a vontade de Deus nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: procurar a vontade de Deus nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para procurar a vontade de Deus nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de procurar a vontade de Deus nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de procurar a vontade de Deus nas escolhas de hoje."
  },
  {
    "data": "2027-04-20",
    "versiculo": "Hebreus 4:14-16",
    "explicacao": "Neste trecho, encontramos um convite a não julgar apressadamente nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso não julgar apressadamente nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a não julgar apressadamente nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a não julgar apressadamente nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de não julgar apressadamente nos momentos difíceis."
  },
  {
    "data": "2027-04-21",
    "versiculo": "Hebreus 11:1-16",
    "explicacao": "A leitura de Hebreus 11:1-16 apresenta um convite a confiar a Deus os planos no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa confiar a Deus os planos no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a confiar a Deus os planos no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas confiar a Deus os planos no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de confiar a Deus os planos no relacionamento com os outros."
  },
  {
    "data": "2027-04-22",
    "versiculo": "Hebreus 12:1-13",
    "explicacao": "Esta passagem bíblica recorda a importância de permanecer firme na esperança na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: permanecer firme na esperança na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a permanecer firme na esperança na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para permanecer firme na esperança na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de permanecer firme na esperança na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-04-23",
    "versiculo": "Tiago 1:2-8",
    "explicacao": "A mensagem desta leitura destaca o valor de agir com justiça no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: agir com justiça no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para agir com justiça no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de agir com justiça no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de agir com justiça no serviço diário."
  },
  {
    "data": "2027-04-24",
    "versiculo": "Tiago 2:14-26",
    "explicacao": "Neste trecho, encontramos um convite a falar com bondade na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso falar com bondade na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a falar com bondade na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a falar com bondade na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de falar com bondade na escola e no trabalho."
  },
  {
    "data": "2027-04-25",
    "versiculo": "Tiago 3:13-18",
    "explicacao": "A leitura de Tiago 3:13-18 apresenta um convite a ser generoso no quotidiano quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa ser generoso no quotidiano quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a ser generoso no quotidiano quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser generoso no quotidiano quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de ser generoso no quotidiano quando surgem diferenças."
  },
  {
    "data": "2027-04-26",
    "versiculo": "1 Pedro 1:3-9",
    "explicacao": "Esta passagem bíblica recorda a importância de acolher a orientação do Espírito ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: acolher a orientação do Espírito ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a acolher a orientação do Espírito ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para acolher a orientação do Espírito ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de acolher a orientação do Espírito ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-04-27",
    "versiculo": "1 Pedro 5:6-11",
    "explicacao": "A mensagem desta leitura destaca o valor de escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de escolher o bem mesmo sem reconhecimento mesmo sem ser visto."
  },
  {
    "data": "2027-04-28",
    "versiculo": "2 Pedro 1:3-11",
    "explicacao": "Neste trecho, encontramos um convite a agir com responsabilidade com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso agir com responsabilidade com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a agir com responsabilidade com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a agir com responsabilidade com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de agir com responsabilidade com serenidade."
  },
  {
    "data": "2027-04-29",
    "versiculo": "2 Pedro 3:8-14",
    "explicacao": "A leitura de 2 Pedro 3:8-14 apresenta um convite a pedir perdão na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa pedir perdão na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a pedir perdão na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir perdão na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de pedir perdão na vida familiar."
  },
  {
    "data": "2027-04-30",
    "versiculo": "1 João 3:1-10",
    "explicacao": "Esta passagem bíblica recorda a importância de escutar antes de responder na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: escutar antes de responder na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a escutar antes de responder na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para escutar antes de responder na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de escutar antes de responder na comunidade num sinal de esperança."
  },
  {
    "data": "2027-05-01",
    "versiculo": "1 João 4:7-21",
    "explicacao": "A mensagem desta leitura destaca o valor de recomeçar com humildade nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: recomeçar com humildade nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para recomeçar com humildade nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de recomeçar com humildade nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de recomeçar com humildade nas escolhas de hoje."
  },
  {
    "data": "2027-05-02",
    "versiculo": "2 João 1:4-11",
    "explicacao": "Neste trecho, encontramos um convite a procurar a reconciliação nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso procurar a reconciliação nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a procurar a reconciliação nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a procurar a reconciliação nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de procurar a reconciliação nos momentos difíceis."
  },
  {
    "data": "2027-05-03",
    "versiculo": "3 João 1:2-8",
    "explicacao": "A leitura de 3 João 1:2-8 apresenta um convite a acolher quem está sozinho no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa acolher quem está sozinho no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a acolher quem está sozinho no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas acolher quem está sozinho no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de acolher quem está sozinho no relacionamento com os outros."
  },
  {
    "data": "2027-05-04",
    "versiculo": "Judas 1:17-25",
    "explicacao": "Esta passagem bíblica recorda a importância de resistir ao desânimo na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: resistir ao desânimo na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a resistir ao desânimo na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para resistir ao desânimo na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de resistir ao desânimo na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-05-05",
    "versiculo": "Apocalipse 1:9-18",
    "explicacao": "A mensagem desta leitura destaca o valor de dar testemunho através das atitudes no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: dar testemunho através das atitudes no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para dar testemunho através das atitudes no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de dar testemunho através das atitudes no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de dar testemunho através das atitudes no serviço diário."
  },
  {
    "data": "2027-05-06",
    "versiculo": "Apocalipse 21:1-7",
    "explicacao": "Neste trecho, encontramos um convite a estar disponível para ajudar na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso estar disponível para ajudar na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a estar disponível para ajudar na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a estar disponível para ajudar na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de estar disponível para ajudar na escola e no trabalho."
  },
  {
    "data": "2027-05-07",
    "versiculo": "Apocalipse 22:1-5",
    "explicacao": "A leitura de Apocalipse 22:1-5 apresenta um convite a dar lugar ao silêncio quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa dar lugar ao silêncio quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a dar lugar ao silêncio quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas dar lugar ao silêncio quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de dar lugar ao silêncio quando surgem diferenças."
  },
  {
    "data": "2027-05-08",
    "versiculo": "Génesis 22:1-14",
    "explicacao": "Esta passagem bíblica recorda a importância de viver a caridade ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: viver a caridade ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a viver a caridade ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para viver a caridade ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de viver a caridade ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-05-09",
    "versiculo": "Êxodo 33:12-23",
    "explicacao": "A mensagem desta leitura destaca o valor de ser firme sem perder a ternura mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: ser firme sem perder a ternura mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para ser firme sem perder a ternura mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de ser firme sem perder a ternura mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de ser firme sem perder a ternura mesmo sem ser visto."
  },
  {
    "data": "2027-05-10",
    "versiculo": "Levítico 25:8-17",
    "explicacao": "Neste trecho, encontramos um convite a cuidar da criação no relacionamento com os outros com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso cuidar da criação no relacionamento com os outros com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a cuidar da criação no relacionamento com os outros com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a cuidar da criação no relacionamento com os outros com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de cuidar da criação no relacionamento com os outros com serenidade."
  },
  {
    "data": "2027-05-11",
    "versiculo": "Números 14:1-9",
    "explicacao": "A leitura de Números 14:1-9 apresenta um convite a escolher a verdade na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa escolher a verdade na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a escolher a verdade na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas escolher a verdade na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de escolher a verdade na vida familiar."
  },
  {
    "data": "2027-05-12",
    "versiculo": "Deuteronómio 10:12-22",
    "explicacao": "Esta passagem bíblica recorda a importância de proteger a unidade na comunidade. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: proteger a unidade na comunidade. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a proteger a unidade na comunidade. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para proteger a unidade na comunidade e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de proteger a unidade na comunidade num sinal de esperança."
  },
  {
    "data": "2027-05-13",
    "versiculo": "Josué 3:1-17",
    "explicacao": "A mensagem desta leitura destaca o valor de renovar a confiança nas escolhas de hoje. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: renovar a confiança nas escolhas de hoje. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para renovar a confiança nas escolhas de hoje. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de renovar a confiança nas escolhas de hoje. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de renovar a confiança nas escolhas de hoje."
  },
  {
    "data": "2027-05-14",
    "versiculo": "Rute 4:13-17",
    "explicacao": "Neste trecho, encontramos um convite a aprender a esperar nos momentos difíceis. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso aprender a esperar nos momentos difíceis nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a aprender a esperar nos momentos difíceis e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a aprender a esperar nos momentos difíceis. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de aprender a esperar nos momentos difíceis."
  },
  {
    "data": "2027-05-15",
    "versiculo": "1 Samuel 2:1-10",
    "explicacao": "A leitura de 1 Samuel 2:1-10 apresenta um convite a cuidar das palavras no relacionamento com os outros. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa cuidar das palavras no relacionamento com os outros. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a cuidar das palavras no relacionamento com os outros. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar das palavras no relacionamento com os outros. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de cuidar das palavras no relacionamento com os outros."
  },
  {
    "data": "2027-05-16",
    "versiculo": "2 Samuel 9:1-13",
    "explicacao": "Esta passagem bíblica recorda a importância de partilhar consolo na oração pessoal. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: partilhar consolo na oração pessoal. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a partilhar consolo na oração pessoal. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para partilhar consolo na oração pessoal e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de partilhar consolo na oração pessoal num sinal de esperança."
  },
  {
    "data": "2027-05-17",
    "versiculo": "1 Reis 8:22-30",
    "explicacao": "A mensagem desta leitura destaca o valor de acolher a correção no serviço diário. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: acolher a correção no serviço diário. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para acolher a correção no serviço diário. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de acolher a correção no serviço diário. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de acolher a correção no serviço diário."
  },
  {
    "data": "2027-05-18",
    "versiculo": "Jó 28:12-28",
    "explicacao": "Neste trecho, encontramos um convite a valorizar a comunidade na escola e no trabalho. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso valorizar a comunidade na escola e no trabalho nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a valorizar a comunidade na escola e no trabalho e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a valorizar a comunidade na escola e no trabalho. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de valorizar a comunidade na escola e no trabalho."
  },
  {
    "data": "2027-05-19",
    "versiculo": "Salmos 139:1-18",
    "explicacao": "A leitura de Salmos 139:1-18 apresenta um convite a praticar a justiça quando surgem diferenças. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa praticar a justiça quando surgem diferenças. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a praticar a justiça quando surgem diferenças. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas praticar a justiça quando surgem diferenças. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de praticar a justiça quando surgem diferenças."
  },
  {
    "data": "2027-05-20",
    "versiculo": "Provérbios 31:10-31",
    "explicacao": "Esta passagem bíblica recorda a importância de tratar os outros com misericórdia ao tomar decisões. A sua mensagem lembra-nos que seguir a Deus exige confiança e escolhas coerentes, mesmo nas situações mais simples.",
    "reflexao": "Leva esta mensagem contigo e procura colocá-la em prática: tratar os outros com misericórdia ao tomar decisões. Observa as tuas atitudes e identifica uma mudança pequena que possa aproximar-te de Deus e dos outros.",
    "oracao": "Pai de bondade, acompanha-me neste dia e ensina-me a tratar os outros com misericórdia ao tomar decisões. Que as minhas palavras e ações transmitam respeito, paciência e amor. Amém.",
    "proposito": "Antes do fim do dia, encontra uma oportunidade para tratar os outros com misericórdia ao tomar decisões e responde com uma ação concreta, sem esperar reconhecimento.",
    "frase": "Uma fé vivida transforma a decisão de tratar os outros com misericórdia ao tomar decisões num sinal de esperança."
  },
  {
    "data": "2027-05-21",
    "versiculo": "Isaías 58:6-12",
    "explicacao": "A mensagem desta leitura destaca o valor de vencer a indiferença mesmo sem ser visto. Ela recorda que a relação com Deus se fortalece quando a escuta da Palavra se transforma em atitudes de justiça, cuidado e caridade.",
    "reflexao": "Leva esta mensagem contigo: vencer a indiferença mesmo sem ser visto. Em que momento do teu dia será mais importante colocá-la em prática? Faz uma escolha consciente.",
    "oracao": "Senhor Jesus, ilumina o meu caminho e dá-me força para vencer a indiferença mesmo sem ser visto. Afasta de mim a indiferença e ajuda-me a reconhecer a dignidade de cada pessoa. Amém.",
    "proposito": "Reserva um momento para pensar numa forma realista de vencer a indiferença mesmo sem ser visto. Depois, põe essa decisão em prática com humildade.",
    "frase": "Cada gesto de amor torna mais visível a escolha de vencer a indiferença mesmo sem ser visto."
  },
  {
    "data": "2027-05-22",
    "versiculo": "Mateus 18:21-35",
    "explicacao": "Neste trecho, encontramos um convite a ser fiel nas pequenas tarefas com serenidade. A leitura ajuda-nos a compreender que a fé não fica apenas nas palavras: deve orientar as decisões e o relacionamento com o próximo.",
    "reflexao": "Pergunta a ti próprio: como posso ser fiel nas pequenas tarefas com serenidade nas circunstâncias de hoje? Começa por um gesto possível e mantém-te fiel a essa escolha.",
    "oracao": "Espírito Santo, guia os meus pensamentos e as minhas decisões. Ajuda-me a ser fiel nas pequenas tarefas com serenidade e a viver este dia com humildade, esperança e caridade. Amém.",
    "proposito": "Pratica hoje um gesto que te ajude a ser fiel nas pequenas tarefas com serenidade. Que seja uma atitude sincera, feita com atenção e respeito.",
    "frase": "A fé cresce quando pomos em prática o propósito de ser fiel nas pequenas tarefas com serenidade."
  },
  {
    "data": "2027-05-23",
    "versiculo": "João 20:19-29",
    "explicacao": "A leitura de João 20:19-29 apresenta um convite a valorizar a oração na vida familiar. A Palavra de Deus ilumina as escolhas quotidianas e recorda que a fé se revela também na maneira como vivemos e tratamos os outros.",
    "reflexao": "Hoje, pensa no que significa valorizar a oração na vida familiar. Que atitude concreta podes assumir para levar esta mensagem para a tua família, a comunidade e os teus encontros?",
    "oracao": "Senhor, ajuda-me a valorizar a oração na vida familiar. Dá-me atenção para reconhecer as oportunidades de viver a tua Palavra e coragem para agir com bondade. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas valorizar a oração na vida familiar. Transforma essa intenção num gesto simples e realiza-o com sinceridade.",
    "frase": "A Palavra ganha vida quando pomos em prática o propósito de valorizar a oração na vida familiar."
  }
];

  function dataAngola() {
    const partes = new Intl.DateTimeFormat("en-CA", {
      timeZone: FUSO,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const valor = tipo => partes.find(p => p.type === tipo).value;
    return `${valor("year")}-${valor("month")}-${valor("day")}`;
  }

  function numeroDia(data) {
    const inicio = new Date(INICIO + "T00:00:00Z");
    const atual = new Date(data + "T00:00:00Z");
    return Math.floor((atual - inicio) / 86400000) + 1;
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
      adicionar(area, "Em breve",
        "O programa começa no dia 24 de novembro de 2026. Volta nessa data para receber a primeira palavra.");
      return;
    }

    if (hoje > FIM || numero < 1 || numero > TOTAL_DIAS) {
      adicionar(area, "Programa concluído",
        "Os 181 dias chegaram ao fim. Que Deus continue a iluminar a tua caminhada.");
      return;
    }

    const palavra = dias[numero - 1];
    if (!palavra || palavra.data !== hoje) {
      adicionar(area, "Conteúdo indisponível",
        "Não foi possível localizar a palavra deste dia. Atualiza a página e tenta novamente.");
      return;
    }

    adicionar(area, "Data", `Dia ${numero} de ${TOTAL_DIAS} — ${hoje}`);
    adicionar(area, "Passagem bíblica", palavra.versiculo);
    adicionar(area, "Explicação da passagem", palavra.explicacao);
    adicionar(area, "Reflexão", palavra.reflexao);
    adicionar(area, "Oração", palavra.oracao);
    adicionar(area, "Propósito do dia", palavra.proposito);
    adicionar(area, "Frase do dia", palavra.frase);
  }

  // Mantém a função pública utilizada pelo index.html atual.
  window.mostrarPalavraDoDia = mostrarPalavraDoDia;

  if (dias.length !== TOTAL_DIAS) {
    console.error("O ficheiro dias.js não contém os 181 dias esperados.");
  }
})();
