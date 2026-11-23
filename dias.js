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
    "explicacao": "Esta passagem mostra que escutar a voz de Deus. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, escutar a voz de Deus. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro escutar a voz de Deus. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura escutar a voz de Deus numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura escutar a voz de Deus."
  },
  {
    "data": "2026-11-25",
    "versiculo": "Génesis 12:1-4",
    "explicacao": "A mensagem recorda que recomeçar com humildade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras recomeçar com humildade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a recomeçar com humildade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para recomeçar com humildade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: recomeçar com humildade."
  },
  {
    "data": "2026-11-26",
    "versiculo": "Génesis 15:1-6",
    "explicacao": "Neste trecho, encontramos um convite a servir sem procurar aplausos. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando servir sem procurar aplausos. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a servir sem procurar aplausos. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas servir sem procurar aplausos e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura servir sem procurar aplausos com sinceridade."
  },
  {
    "data": "2026-11-27",
    "versiculo": "Êxodo 3:1-12",
    "explicacao": "A leitura ajuda-nos a compreender que permanecer firme na esperança. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura permanecer firme na esperança. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa permanecer firme na esperança. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: permanecer firme na esperança. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides permanecer firme na esperança."
  },
  {
    "data": "2026-11-28",
    "versiculo": "Êxodo 14:13-22",
    "explicacao": "Este texto bíblico chama a atenção para a importância de tratar os outros com misericórdia. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a tratar os outros com misericórdia. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para tratar os outros com misericórdia. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a tratar os outros com misericórdia e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a tratar os outros com misericórdia."
  },
  {
    "data": "2026-11-29",
    "versiculo": "Êxodo 20:1-17",
    "explicacao": "Esta passagem mostra que confiar durante a espera. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, confiar durante a espera. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro confiar durante a espera. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura confiar durante a espera numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura confiar durante a espera."
  },
  {
    "data": "2026-11-30",
    "versiculo": "Levítico 19:1-18",
    "explicacao": "A mensagem recorda que escolher a verdade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras escolher a verdade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a escolher a verdade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para escolher a verdade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: escolher a verdade."
  },
  {
    "data": "2026-12-01",
    "versiculo": "Levítico 19:9-18",
    "explicacao": "Neste trecho, encontramos um convite a cultivar a gratidão. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cultivar a gratidão. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cultivar a gratidão. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cultivar a gratidão e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cultivar a gratidão com sinceridade."
  },
  {
    "data": "2026-12-02",
    "versiculo": "Números 6:22-27",
    "explicacao": "A leitura ajuda-nos a compreender que procurar a reconciliação. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura procurar a reconciliação. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa procurar a reconciliação. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: procurar a reconciliação. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides procurar a reconciliação."
  },
  {
    "data": "2026-12-03",
    "versiculo": "Números 11:16-17",
    "explicacao": "Este texto bíblico chama a atenção para a importância de cuidar dos mais frágeis. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a cuidar dos mais frágeis. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para cuidar dos mais frágeis. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a cuidar dos mais frágeis e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a cuidar dos mais frágeis."
  },
  {
    "data": "2026-12-04",
    "versiculo": "Deuteronómio 6:4-9",
    "explicacao": "Esta passagem mostra que agir com justiça. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com justiça. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com justiça. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com justiça numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com justiça."
  },
  {
    "data": "2026-12-05",
    "versiculo": "Deuteronómio 8:2-10",
    "explicacao": "A mensagem recorda que vencer a indiferença. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras vencer a indiferença. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a vencer a indiferença e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para vencer a indiferença; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: vencer a indiferença."
  },
  {
    "data": "2026-12-06",
    "versiculo": "Deuteronómio 30:15-20",
    "explicacao": "Neste trecho, encontramos um convite a partilhar os dons recebidos. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando partilhar os dons recebidos. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a partilhar os dons recebidos. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas partilhar os dons recebidos e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura partilhar os dons recebidos com sinceridade."
  },
  {
    "data": "2026-12-07",
    "versiculo": "Josué 1:1-9",
    "explicacao": "A leitura ajuda-nos a compreender que proteger a unidade. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura proteger a unidade. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa proteger a unidade. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: proteger a unidade. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides proteger a unidade."
  },
  {
    "data": "2026-12-08",
    "versiculo": "Josué 24:14-18",
    "explicacao": "Este texto bíblico chama a atenção para a importância de pedir sabedoria. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a pedir sabedoria. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para pedir sabedoria. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a pedir sabedoria e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a pedir sabedoria."
  },
  {
    "data": "2026-12-09",
    "versiculo": "Juízes 6:11-16",
    "explicacao": "Esta passagem mostra que acolher quem está sozinho. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, acolher quem está sozinho. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro acolher quem está sozinho. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura acolher quem está sozinho numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura acolher quem está sozinho."
  },
  {
    "data": "2026-12-10",
    "versiculo": "Juízes 10:10-16",
    "explicacao": "A mensagem recorda que perdoar com sinceridade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras perdoar com sinceridade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a perdoar com sinceridade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para perdoar com sinceridade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: perdoar com sinceridade."
  },
  {
    "data": "2026-12-11",
    "versiculo": "Rute 1:15-18",
    "explicacao": "Neste trecho, encontramos um convite a falar com bondade. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando falar com bondade. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a falar com bondade. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas falar com bondade e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura falar com bondade com sinceridade."
  },
  {
    "data": "2026-12-12",
    "versiculo": "Rute 2:8-12",
    "explicacao": "A leitura ajuda-nos a compreender que ser fiel nas pequenas tarefas. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura ser fiel nas pequenas tarefas. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa ser fiel nas pequenas tarefas. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: ser fiel nas pequenas tarefas. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides ser fiel nas pequenas tarefas."
  },
  {
    "data": "2026-12-13",
    "versiculo": "1 Samuel 3:1-10",
    "explicacao": "Este texto bíblico chama a atenção para a importância de procurar a paz. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a procurar a paz. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para procurar a paz. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a procurar a paz e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a procurar a paz."
  },
  {
    "data": "2026-12-14",
    "versiculo": "1 Samuel 16:1-13",
    "explicacao": "Esta passagem mostra que renovar a confiança. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, renovar a confiança. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro renovar a confiança. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura renovar a confiança numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura renovar a confiança."
  },
  {
    "data": "2026-12-15",
    "versiculo": "1 Samuel 17:32-47",
    "explicacao": "A mensagem recorda que reconhecer os próprios limites. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras reconhecer os próprios limites. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a reconhecer os próprios limites e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para reconhecer os próprios limites; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: reconhecer os próprios limites."
  },
  {
    "data": "2026-12-16",
    "versiculo": "2 Samuel 7:18-29",
    "explicacao": "Neste trecho, encontramos um convite a resistir ao desânimo. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando resistir ao desânimo. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a resistir ao desânimo. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas resistir ao desânimo e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura resistir ao desânimo com sinceridade."
  },
  {
    "data": "2026-12-17",
    "versiculo": "2 Samuel 22:1-7",
    "explicacao": "A leitura ajuda-nos a compreender que dar atenção à família. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura dar atenção à família. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa dar atenção à família. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: dar atenção à família. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides dar atenção à família."
  },
  {
    "data": "2026-12-18",
    "versiculo": "1 Reis 3:5-14",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser generoso no quotidiano. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser generoso no quotidiano. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser generoso no quotidiano. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser generoso no quotidiano e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser generoso no quotidiano."
  },
  {
    "data": "2026-12-19",
    "versiculo": "1 Reis 19:1-13",
    "explicacao": "Esta passagem mostra que valorizar a oração. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a oração. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a oração. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a oração numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a oração."
  },
  {
    "data": "2026-12-20",
    "versiculo": "2 Reis 4:1-7",
    "explicacao": "A mensagem recorda que agir com coragem. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras agir com coragem. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a agir com coragem e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para agir com coragem; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: agir com coragem."
  },
  {
    "data": "2026-12-21",
    "versiculo": "2 Reis 5:1-14",
    "explicacao": "Neste trecho, encontramos um convite a aprender a esperar. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando aprender a esperar. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a aprender a esperar. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas aprender a esperar e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura aprender a esperar com sinceridade."
  },
  {
    "data": "2026-12-22",
    "versiculo": "1 Crónicas 16:8-12",
    "explicacao": "A leitura ajuda-nos a compreender que respeitar a dignidade de cada pessoa. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura respeitar a dignidade de cada pessoa. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa respeitar a dignidade de cada pessoa. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: respeitar a dignidade de cada pessoa. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides respeitar a dignidade de cada pessoa."
  },
  {
    "data": "2026-12-23",
    "versiculo": "1 Crónicas 29:10-13",
    "explicacao": "Este texto bíblico chama a atenção para a importância de dar testemunho através das atitudes. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a dar testemunho através das atitudes. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para dar testemunho através das atitudes. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a dar testemunho através das atitudes e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a dar testemunho através das atitudes."
  },
  {
    "data": "2026-12-24",
    "versiculo": "2 Crónicas 7:11-16",
    "explicacao": "Esta passagem mostra que viver com simplicidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, viver com simplicidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro viver com simplicidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura viver com simplicidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura viver com simplicidade."
  },
  {
    "data": "2026-12-25",
    "versiculo": "2 Crónicas 20:1-22",
    "explicacao": "A mensagem recorda que acolher a orientação do Espírito. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras acolher a orientação do Espírito. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a acolher a orientação do Espírito e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para acolher a orientação do Espírito; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: acolher a orientação do Espírito."
  },
  {
    "data": "2026-12-26",
    "versiculo": "Esdras 3:10-13",
    "explicacao": "Neste trecho, encontramos um convite a não responder ao mal com mal. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando não responder ao mal com mal. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a não responder ao mal com mal. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não responder ao mal com mal e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura não responder ao mal com mal com sinceridade."
  },
  {
    "data": "2026-12-27",
    "versiculo": "Esdras 7:6-10",
    "explicacao": "A leitura ajuda-nos a compreender que ser paciente nas diferenças. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura ser paciente nas diferenças. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa ser paciente nas diferenças. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: ser paciente nas diferenças. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides ser paciente nas diferenças."
  },
  {
    "data": "2026-12-28",
    "versiculo": "Neemias 8:1-12",
    "explicacao": "Este texto bíblico chama a atenção para a importância de cuidar das palavras. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a cuidar das palavras. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para cuidar das palavras. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a cuidar das palavras e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a cuidar das palavras."
  },
  {
    "data": "2026-12-29",
    "versiculo": "Neemias 9:5-8",
    "explicacao": "Esta passagem mostra que manter a esperança viva. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, manter a esperança viva. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro manter a esperança viva. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura manter a esperança viva numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura manter a esperança viva."
  },
  {
    "data": "2026-12-30",
    "versiculo": "Tobias 4:5-11",
    "explicacao": "A mensagem recorda que ser disponível para ajudar. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser disponível para ajudar. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser disponível para ajudar e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser disponível para ajudar; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser disponível para ajudar."
  },
  {
    "data": "2026-12-31",
    "versiculo": "Tobias 12:6-10",
    "explicacao": "Neste trecho, encontramos um convite a reconhecer os dons dos outros. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando reconhecer os dons dos outros. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a reconhecer os dons dos outros. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas reconhecer os dons dos outros e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura reconhecer os dons dos outros com sinceridade."
  },
  {
    "data": "2027-01-01",
    "versiculo": "Judite 8:11-17",
    "explicacao": "A leitura ajuda-nos a compreender que escolher o bem mesmo sem reconhecimento. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura escolher o bem mesmo sem reconhecimento. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa escolher o bem mesmo sem reconhecimento. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: escolher o bem mesmo sem reconhecimento. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides escolher o bem mesmo sem reconhecimento."
  },
  {
    "data": "2027-01-02",
    "versiculo": "Judite 13:14-20",
    "explicacao": "Este texto bíblico chama a atenção para a importância de fazer da fé uma prática diária. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a fazer da fé uma prática diária. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para fazer da fé uma prática diária. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a fazer da fé uma prática diária e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a fazer da fé uma prática diária."
  },
  {
    "data": "2027-01-03",
    "versiculo": "Ester 4:12-17",
    "explicacao": "Esta passagem mostra que crescer na confiança. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, crescer na confiança. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro crescer na confiança. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura crescer na confiança numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura crescer na confiança."
  },
  {
    "data": "2027-01-04",
    "versiculo": "Ester 14:1-19",
    "explicacao": "A mensagem recorda que partilhar consolo. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras partilhar consolo. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a partilhar consolo e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para partilhar consolo; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: partilhar consolo."
  },
  {
    "data": "2027-01-05",
    "versiculo": "1 Macabeus 2:49-64",
    "explicacao": "Neste trecho, encontramos um convite a ser verdadeiro nas decisões. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser verdadeiro nas decisões. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser verdadeiro nas decisões. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser verdadeiro nas decisões e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser verdadeiro nas decisões com sinceridade."
  },
  {
    "data": "2027-01-06",
    "versiculo": "1 Macabeus 4:36-51",
    "explicacao": "A leitura ajuda-nos a compreender que dar lugar ao silêncio. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura dar lugar ao silêncio. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa dar lugar ao silêncio. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: dar lugar ao silêncio. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides dar lugar ao silêncio."
  },
  {
    "data": "2027-01-07",
    "versiculo": "2 Macabeus 6:18-31",
    "explicacao": "Este texto bíblico chama a atenção para a importância de não esquecer as bênçãos. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a não esquecer as bênçãos. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para não esquecer as bênçãos. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a não esquecer as bênçãos e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a não esquecer as bênçãos."
  },
  {
    "data": "2027-01-08",
    "versiculo": "2 Macabeus 7:1-14",
    "explicacao": "Esta passagem mostra que agir com responsabilidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com responsabilidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com responsabilidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com responsabilidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com responsabilidade."
  },
  {
    "data": "2027-01-09",
    "versiculo": "Jó 1:20-22",
    "explicacao": "A mensagem recorda que ser perseverante. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser perseverante. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser perseverante e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser perseverante; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser perseverante."
  },
  {
    "data": "2027-01-10",
    "versiculo": "Jó 19:23-27",
    "explicacao": "Neste trecho, encontramos um convite a procurar a vontade de Deus. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando procurar a vontade de Deus. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a procurar a vontade de Deus. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas procurar a vontade de Deus e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura procurar a vontade de Deus com sinceridade."
  },
  {
    "data": "2027-01-11",
    "versiculo": "Jó 42:1-6",
    "explicacao": "A leitura ajuda-nos a compreender que acolher a correção. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura acolher a correção. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa acolher a correção. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: acolher a correção. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides acolher a correção."
  },
  {
    "data": "2027-01-12",
    "versiculo": "Salmos 23:1-6",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser sinal de paz. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser sinal de paz. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser sinal de paz. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser sinal de paz e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser sinal de paz."
  },
  {
    "data": "2027-01-13",
    "versiculo": "Salmos 27:1-6",
    "explicacao": "Esta passagem mostra que viver a caridade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, viver a caridade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro viver a caridade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura viver a caridade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura viver a caridade."
  },
  {
    "data": "2027-01-14",
    "versiculo": "Salmos 34:1-10",
    "explicacao": "A mensagem recorda que respeitar os compromissos. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras respeitar os compromissos. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a respeitar os compromissos e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para respeitar os compromissos; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: respeitar os compromissos."
  },
  {
    "data": "2027-01-15",
    "versiculo": "Salmos 46:1-7",
    "explicacao": "Neste trecho, encontramos um convite a pedir perdão. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando pedir perdão. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a pedir perdão. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir perdão e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura pedir perdão com sinceridade."
  },
  {
    "data": "2027-01-16",
    "versiculo": "Salmos 51:1-12",
    "explicacao": "A leitura ajuda-nos a compreender que oferecer uma palavra de ânimo. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura oferecer uma palavra de ânimo. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa oferecer uma palavra de ânimo. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: oferecer uma palavra de ânimo. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides oferecer uma palavra de ânimo."
  },
  {
    "data": "2027-01-17",
    "versiculo": "Salmos 91:1-8",
    "explicacao": "Este texto bíblico chama a atenção para a importância de não julgar apressadamente. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a não julgar apressadamente. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para não julgar apressadamente. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a não julgar apressadamente e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a não julgar apressadamente."
  },
  {
    "data": "2027-01-18",
    "versiculo": "Salmos 121:1-8",
    "explicacao": "Esta passagem mostra que valorizar a comunidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a comunidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a comunidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a comunidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a comunidade."
  },
  {
    "data": "2027-01-19",
    "versiculo": "Provérbios 3:1-12",
    "explicacao": "A mensagem recorda que recomeçar depois de errar. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras recomeçar depois de errar. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a recomeçar depois de errar e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para recomeçar depois de errar; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: recomeçar depois de errar."
  },
  {
    "data": "2027-01-20",
    "versiculo": "Provérbios 4:20-27",
    "explicacao": "Neste trecho, encontramos um convite a ser firme sem perder a ternura. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser firme sem perder a ternura. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser firme sem perder a ternura. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser firme sem perder a ternura e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser firme sem perder a ternura com sinceridade."
  },
  {
    "data": "2027-01-21",
    "versiculo": "Provérbios 16:1-9",
    "explicacao": "A leitura ajuda-nos a compreender que cuidar da criação. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura cuidar da criação. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa cuidar da criação. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: cuidar da criação. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides cuidar da criação."
  },
  {
    "data": "2027-01-22",
    "versiculo": "Eclesiastes 3:1-13",
    "explicacao": "Este texto bíblico chama a atenção para a importância de escutar antes de responder. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a escutar antes de responder. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para escutar antes de responder. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a escutar antes de responder e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a escutar antes de responder."
  },
  {
    "data": "2027-01-23",
    "versiculo": "Eclesiastes 11:7-10",
    "explicacao": "Esta passagem mostra que fazer o bem em segredo. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, fazer o bem em segredo. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro fazer o bem em segredo. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura fazer o bem em segredo numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura fazer o bem em segredo."
  },
  {
    "data": "2027-01-24",
    "versiculo": "Cântico dos Cânticos 2:8-14",
    "explicacao": "A mensagem recorda que confiar a Deus os planos. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras confiar a Deus os planos. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a confiar a Deus os planos e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para confiar a Deus os planos; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: confiar a Deus os planos."
  },
  {
    "data": "2027-01-25",
    "versiculo": "Cântico dos Cânticos 8:6-7",
    "explicacao": "Neste trecho, encontramos um convite a praticar a justiça. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando praticar a justiça. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a praticar a justiça. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas praticar a justiça e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura praticar a justiça com sinceridade."
  },
  {
    "data": "2027-01-26",
    "versiculo": "Sabedoria 3:1-9",
    "explicacao": "A leitura ajuda-nos a compreender que viver com coração agradecido. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura viver com coração agradecido. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa viver com coração agradecido. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: viver com coração agradecido. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides viver com coração agradecido."
  },
  {
    "data": "2027-01-27",
    "versiculo": "Sabedoria 7:7-14",
    "explicacao": "Este texto bíblico chama a atenção para a importância de cuidar da criação no relacionamento com os outros. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a cuidar da criação no relacionamento com os outros. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para cuidar da criação no relacionamento com os outros. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a cuidar da criação no relacionamento com os outros e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a cuidar da criação no relacionamento com os outros."
  },
  {
    "data": "2027-01-28",
    "versiculo": "Sabedoria 11:21-26",
    "explicacao": "Esta passagem mostra que escutar a voz de Deus na oração pessoal. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, escutar a voz de Deus na oração pessoal. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro escutar a voz de Deus na oração pessoal. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura escutar a voz de Deus na oração pessoal numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura escutar a voz de Deus na oração pessoal."
  },
  {
    "data": "2027-01-29",
    "versiculo": "Eclesiástico 2:1-11",
    "explicacao": "A mensagem recorda que cultivar a gratidão no serviço diário. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras cultivar a gratidão no serviço diário. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a cultivar a gratidão no serviço diário e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para cultivar a gratidão no serviço diário; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: cultivar a gratidão no serviço diário."
  },
  {
    "data": "2027-01-30",
    "versiculo": "Eclesiástico 6:5-17",
    "explicacao": "Neste trecho, encontramos um convite a pedir sabedoria na escola e no trabalho. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando pedir sabedoria na escola e no trabalho. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a pedir sabedoria na escola e no trabalho. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir sabedoria na escola e no trabalho e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura pedir sabedoria na escola e no trabalho com sinceridade."
  },
  {
    "data": "2027-01-31",
    "versiculo": "Eclesiástico 17:1-14",
    "explicacao": "A leitura ajuda-nos a compreender que reconhecer os próprios limites quando surgem diferenças. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura reconhecer os próprios limites quando surgem diferenças. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa reconhecer os próprios limites quando surgem diferenças. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: reconhecer os próprios limites quando surgem diferenças. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides reconhecer os próprios limites quando surgem diferenças."
  },
  {
    "data": "2027-02-01",
    "versiculo": "Isaías 9:1-6",
    "explicacao": "Este texto bíblico chama a atenção para a importância de respeitar a dignidade de cada pessoa ao tomar decisões. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a respeitar a dignidade de cada pessoa ao tomar decisões. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para respeitar a dignidade de cada pessoa ao tomar decisões. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a respeitar a dignidade de cada pessoa ao tomar decisões e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a respeitar a dignidade de cada pessoa ao tomar decisões."
  },
  {
    "data": "2027-02-02",
    "versiculo": "Isaías 40:27-31",
    "explicacao": "Esta passagem mostra que manter a esperança viva mesmo sem ser visto. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, manter a esperança viva mesmo sem ser visto. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro manter a esperança viva mesmo sem ser visto. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura manter a esperança viva mesmo sem ser visto numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura manter a esperança viva mesmo sem ser visto."
  },
  {
    "data": "2027-02-03",
    "versiculo": "Isaías 43:1-7",
    "explicacao": "A mensagem recorda que ser verdadeiro nas decisões com serenidade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser verdadeiro nas decisões com serenidade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser verdadeiro nas decisões com serenidade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser verdadeiro nas decisões com serenidade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser verdadeiro nas decisões com serenidade."
  },
  {
    "data": "2027-02-04",
    "versiculo": "Isaías 55:1-11",
    "explicacao": "Neste trecho, encontramos um convite a ser sinal de paz na vida familiar. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser sinal de paz na vida familiar. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser sinal de paz na vida familiar. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser sinal de paz na vida familiar e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser sinal de paz na vida familiar com sinceridade."
  },
  {
    "data": "2027-02-05",
    "versiculo": "Jeremias 17:5-10",
    "explicacao": "A leitura ajuda-nos a compreender que recomeçar depois de errar na comunidade. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura recomeçar depois de errar na comunidade. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa recomeçar depois de errar na comunidade. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: recomeçar depois de errar na comunidade. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides recomeçar depois de errar na comunidade."
  },
  {
    "data": "2027-02-06",
    "versiculo": "Jeremias 29:11-14",
    "explicacao": "Este texto bíblico chama a atenção para a importância de viver com coração agradecido nas escolhas de hoje. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a viver com coração agradecido nas escolhas de hoje. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para viver com coração agradecido nas escolhas de hoje. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a viver com coração agradecido nas escolhas de hoje e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a viver com coração agradecido nas escolhas de hoje."
  },
  {
    "data": "2027-02-07",
    "versiculo": "Jeremias 31:31-34",
    "explicacao": "Esta passagem mostra que confiar durante a espera nos momentos difíceis. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, confiar durante a espera nos momentos difíceis. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro confiar durante a espera nos momentos difíceis. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura confiar durante a espera nos momentos difíceis numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura confiar durante a espera nos momentos difíceis."
  },
  {
    "data": "2027-02-08",
    "versiculo": "Lamentações 3:19-26",
    "explicacao": "A mensagem recorda que partilhar os dons recebidos no relacionamento com os outros. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras partilhar os dons recebidos no relacionamento com os outros. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a partilhar os dons recebidos no relacionamento com os outros e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para partilhar os dons recebidos no relacionamento com os outros; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: partilhar os dons recebidos no relacionamento com os outros."
  },
  {
    "data": "2027-02-09",
    "versiculo": "Baruc 3:9-15",
    "explicacao": "Neste trecho, encontramos um convite a procurar a paz na oração pessoal. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando procurar a paz na oração pessoal. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a procurar a paz na oração pessoal. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas procurar a paz na oração pessoal e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura procurar a paz na oração pessoal com sinceridade."
  },
  {
    "data": "2027-02-10",
    "versiculo": "Baruc 4:1-4",
    "explicacao": "A leitura ajuda-nos a compreender que agir com coragem no serviço diário. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura agir com coragem no serviço diário. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa agir com coragem no serviço diário. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: agir com coragem no serviço diário. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides agir com coragem no serviço diário."
  },
  {
    "data": "2027-02-11",
    "versiculo": "Ezequiel 34:11-16",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser paciente nas diferenças na escola e no trabalho. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser paciente nas diferenças na escola e no trabalho. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser paciente nas diferenças na escola e no trabalho. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser paciente nas diferenças na escola e no trabalho e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser paciente nas diferenças na escola e no trabalho."
  },
  {
    "data": "2027-02-12",
    "versiculo": "Ezequiel 36:24-28",
    "explicacao": "Esta passagem mostra que crescer na confiança quando surgem diferenças. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, crescer na confiança quando surgem diferenças. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro crescer na confiança quando surgem diferenças. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura crescer na confiança quando surgem diferenças numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura crescer na confiança quando surgem diferenças."
  },
  {
    "data": "2027-02-13",
    "versiculo": "Ezequiel 37:1-14",
    "explicacao": "A mensagem recorda que procurar a vontade de Deus ao tomar decisões. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras procurar a vontade de Deus ao tomar decisões. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a procurar a vontade de Deus ao tomar decisões e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para procurar a vontade de Deus ao tomar decisões; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: procurar a vontade de Deus ao tomar decisões."
  },
  {
    "data": "2027-02-14",
    "versiculo": "Daniel 3:25-45",
    "explicacao": "Neste trecho, encontramos um convite a não julgar apressadamente mesmo sem ser visto. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando não julgar apressadamente mesmo sem ser visto. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a não julgar apressadamente mesmo sem ser visto. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não julgar apressadamente mesmo sem ser visto e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura não julgar apressadamente mesmo sem ser visto com sinceridade."
  },
  {
    "data": "2027-02-15",
    "versiculo": "Daniel 6:10-23",
    "explicacao": "A leitura ajuda-nos a compreender que confiar a Deus os planos com serenidade. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura confiar a Deus os planos com serenidade. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa confiar a Deus os planos com serenidade. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: confiar a Deus os planos com serenidade. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides confiar a Deus os planos com serenidade."
  },
  {
    "data": "2027-02-16",
    "versiculo": "Oseias 2:16-22",
    "explicacao": "Este texto bíblico chama a atenção para a importância de permanecer firme na esperança na vida familiar. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a permanecer firme na esperança na vida familiar. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para permanecer firme na esperança na vida familiar. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a permanecer firme na esperança na vida familiar e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a permanecer firme na esperança na vida familiar."
  },
  {
    "data": "2027-02-17",
    "versiculo": "Oseias 6:1-6",
    "explicacao": "Esta passagem mostra que agir com justiça na comunidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com justiça na comunidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com justiça na comunidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com justiça na comunidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com justiça na comunidade."
  },
  {
    "data": "2027-02-18",
    "versiculo": "Joel 2:12-18",
    "explicacao": "A mensagem recorda que falar com bondade nas escolhas de hoje. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras falar com bondade nas escolhas de hoje. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a falar com bondade nas escolhas de hoje e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para falar com bondade nas escolhas de hoje; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: falar com bondade nas escolhas de hoje."
  },
  {
    "data": "2027-02-19",
    "versiculo": "Joel 3:1-5",
    "explicacao": "Neste trecho, encontramos um convite a ser generoso no quotidiano nos momentos difíceis. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser generoso no quotidiano nos momentos difíceis. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser generoso no quotidiano nos momentos difíceis. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser generoso no quotidiano nos momentos difíceis e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser generoso no quotidiano nos momentos difíceis com sinceridade."
  },
  {
    "data": "2027-02-20",
    "versiculo": "Amós 5:14-24",
    "explicacao": "A leitura ajuda-nos a compreender que acolher a orientação do Espírito no relacionamento com os outros. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura acolher a orientação do Espírito no relacionamento com os outros. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa acolher a orientação do Espírito no relacionamento com os outros. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: acolher a orientação do Espírito no relacionamento com os outros. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides acolher a orientação do Espírito no relacionamento com os outros."
  },
  {
    "data": "2027-02-21",
    "versiculo": "Amós 9:11-15",
    "explicacao": "Este texto bíblico chama a atenção para a importância de escolher o bem mesmo sem reconhecimento na oração pessoal. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a escolher o bem mesmo sem reconhecimento na oração pessoal. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para escolher o bem mesmo sem reconhecimento na oração pessoal. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a escolher o bem mesmo sem reconhecimento na oração pessoal e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a escolher o bem mesmo sem reconhecimento na oração pessoal."
  },
  {
    "data": "2027-02-22",
    "versiculo": "Abdias 1:15-21",
    "explicacao": "Esta passagem mostra que agir com responsabilidade no serviço diário. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com responsabilidade no serviço diário. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com responsabilidade no serviço diário. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com responsabilidade no serviço diário numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com responsabilidade no serviço diário."
  },
  {
    "data": "2027-02-23",
    "versiculo": "Jonas 2:1-10",
    "explicacao": "A mensagem recorda que pedir perdão na escola e no trabalho. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras pedir perdão na escola e no trabalho. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a pedir perdão na escola e no trabalho e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para pedir perdão na escola e no trabalho; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: pedir perdão na escola e no trabalho."
  },
  {
    "data": "2027-02-24",
    "versiculo": "Jonas 4:1-11",
    "explicacao": "Neste trecho, encontramos um convite a escutar antes de responder quando surgem diferenças. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando escutar antes de responder quando surgem diferenças. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a escutar antes de responder quando surgem diferenças. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas escutar antes de responder quando surgem diferenças e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura escutar antes de responder quando surgem diferenças com sinceridade."
  },
  {
    "data": "2027-02-25",
    "versiculo": "Miqueias 6:6-8",
    "explicacao": "A leitura ajuda-nos a compreender que recomeçar com humildade ao tomar decisões. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura recomeçar com humildade ao tomar decisões. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa recomeçar com humildade ao tomar decisões. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: recomeçar com humildade ao tomar decisões. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides recomeçar com humildade ao tomar decisões."
  },
  {
    "data": "2027-02-26",
    "versiculo": "Miqueias 7:18-20",
    "explicacao": "Este texto bíblico chama a atenção para a importância de procurar a reconciliação mesmo sem ser visto. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a procurar a reconciliação mesmo sem ser visto. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para procurar a reconciliação mesmo sem ser visto. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a procurar a reconciliação mesmo sem ser visto e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a procurar a reconciliação mesmo sem ser visto."
  },
  {
    "data": "2027-02-27",
    "versiculo": "Naum 1:2-8",
    "explicacao": "Esta passagem mostra que acolher quem está sozinho com serenidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, acolher quem está sozinho com serenidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro acolher quem está sozinho com serenidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura acolher quem está sozinho com serenidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura acolher quem está sozinho com serenidade."
  },
  {
    "data": "2027-02-28",
    "versiculo": "Habacuc 2:1-4",
    "explicacao": "A mensagem recorda que resistir ao desânimo na vida familiar. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras resistir ao desânimo na vida familiar. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a resistir ao desânimo na vida familiar e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para resistir ao desânimo na vida familiar; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: resistir ao desânimo na vida familiar."
  },
  {
    "data": "2027-03-01",
    "versiculo": "Habacuc 3:17-19",
    "explicacao": "Neste trecho, encontramos um convite a dar testemunho através das atitudes na comunidade. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando dar testemunho através das atitudes na comunidade. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a dar testemunho através das atitudes na comunidade. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas dar testemunho através das atitudes na comunidade e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura dar testemunho através das atitudes na comunidade com sinceridade."
  },
  {
    "data": "2027-03-02",
    "versiculo": "Sofonias 3:14-20",
    "explicacao": "A leitura ajuda-nos a compreender que ser disponível para ajudar nas escolhas de hoje. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura ser disponível para ajudar nas escolhas de hoje. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa ser disponível para ajudar nas escolhas de hoje. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: ser disponível para ajudar nas escolhas de hoje. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides ser disponível para ajudar nas escolhas de hoje."
  },
  {
    "data": "2027-03-03",
    "versiculo": "Ageu 1:2-8",
    "explicacao": "Este texto bíblico chama a atenção para a importância de dar lugar ao silêncio nos momentos difíceis. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a dar lugar ao silêncio nos momentos difíceis. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para dar lugar ao silêncio nos momentos difíceis. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a dar lugar ao silêncio nos momentos difíceis e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a dar lugar ao silêncio nos momentos difíceis."
  },
  {
    "data": "2027-03-04",
    "versiculo": "Ageu 2:4-9",
    "explicacao": "Esta passagem mostra que viver a caridade no relacionamento com os outros. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, viver a caridade no relacionamento com os outros. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro viver a caridade no relacionamento com os outros. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura viver a caridade no relacionamento com os outros numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura viver a caridade no relacionamento com os outros."
  },
  {
    "data": "2027-03-05",
    "versiculo": "Zacarias 8:1-8",
    "explicacao": "A mensagem recorda que ser firme sem perder a ternura na oração pessoal. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser firme sem perder a ternura na oração pessoal. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser firme sem perder a ternura na oração pessoal e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser firme sem perder a ternura na oração pessoal; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser firme sem perder a ternura na oração pessoal."
  },
  {
    "data": "2027-03-06",
    "versiculo": "Zacarias 9:9-10",
    "explicacao": "Neste trecho, encontramos um convite a cuidar da criação no relacionamento com os outros no serviço diário. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cuidar da criação no relacionamento com os outros no serviço diário. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cuidar da criação no relacionamento com os outros no serviço diário. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar da criação no relacionamento com os outros no serviço diário e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cuidar da criação no relacionamento com os outros no serviço diário com sinceridade."
  },
  {
    "data": "2027-03-07",
    "versiculo": "Malaquias 3:1-4",
    "explicacao": "A leitura ajuda-nos a compreender que escolher a verdade na escola e no trabalho. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura escolher a verdade na escola e no trabalho. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa escolher a verdade na escola e no trabalho. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: escolher a verdade na escola e no trabalho. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides escolher a verdade na escola e no trabalho."
  },
  {
    "data": "2027-03-08",
    "versiculo": "Malaquias 3:19-24",
    "explicacao": "Este texto bíblico chama a atenção para a importância de proteger a unidade quando surgem diferenças. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a proteger a unidade quando surgem diferenças. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para proteger a unidade quando surgem diferenças. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a proteger a unidade quando surgem diferenças e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a proteger a unidade quando surgem diferenças."
  },
  {
    "data": "2027-03-09",
    "versiculo": "Mateus 5:1-12",
    "explicacao": "Esta passagem mostra que renovar a confiança ao tomar decisões. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, renovar a confiança ao tomar decisões. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro renovar a confiança ao tomar decisões. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura renovar a confiança ao tomar decisões numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura renovar a confiança ao tomar decisões."
  },
  {
    "data": "2027-03-10",
    "versiculo": "Mateus 6:25-34",
    "explicacao": "A mensagem recorda que aprender a esperar mesmo sem ser visto. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras aprender a esperar mesmo sem ser visto. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a aprender a esperar mesmo sem ser visto e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para aprender a esperar mesmo sem ser visto; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: aprender a esperar mesmo sem ser visto."
  },
  {
    "data": "2027-03-11",
    "versiculo": "Mateus 11:25-30",
    "explicacao": "Neste trecho, encontramos um convite a cuidar das palavras com serenidade. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cuidar das palavras com serenidade. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cuidar das palavras com serenidade. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar das palavras com serenidade e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cuidar das palavras com serenidade com sinceridade."
  },
  {
    "data": "2027-03-12",
    "versiculo": "Mateus 25:31-40",
    "explicacao": "A leitura ajuda-nos a compreender que partilhar consolo na vida familiar. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura partilhar consolo na vida familiar. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa partilhar consolo na vida familiar. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: partilhar consolo na vida familiar. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides partilhar consolo na vida familiar."
  },
  {
    "data": "2027-03-13",
    "versiculo": "Marcos 4:35-41",
    "explicacao": "Este texto bíblico chama a atenção para a importância de acolher a correção na comunidade. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a acolher a correção na comunidade. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para acolher a correção na comunidade. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a acolher a correção na comunidade e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a acolher a correção na comunidade."
  },
  {
    "data": "2027-03-14",
    "versiculo": "Marcos 10:13-16",
    "explicacao": "Esta passagem mostra que valorizar a comunidade nas escolhas de hoje. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a comunidade nas escolhas de hoje. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a comunidade nas escolhas de hoje. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a comunidade nas escolhas de hoje numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a comunidade nas escolhas de hoje."
  },
  {
    "data": "2027-03-15",
    "versiculo": "Marcos 12:28-34",
    "explicacao": "A mensagem recorda que praticar a justiça nos momentos difíceis. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras praticar a justiça nos momentos difíceis. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a praticar a justiça nos momentos difíceis e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para praticar a justiça nos momentos difíceis; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: praticar a justiça nos momentos difíceis."
  },
  {
    "data": "2027-03-16",
    "versiculo": "Lucas 1:46-55",
    "explicacao": "Neste trecho, encontramos um convite a tratar os outros com misericórdia no relacionamento com os outros. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando tratar os outros com misericórdia no relacionamento com os outros. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a tratar os outros com misericórdia no relacionamento com os outros. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas tratar os outros com misericórdia no relacionamento com os outros e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura tratar os outros com misericórdia no relacionamento com os outros com sinceridade."
  },
  {
    "data": "2027-03-17",
    "versiculo": "Lucas 10:25-37",
    "explicacao": "A leitura ajuda-nos a compreender que vencer a indiferença na oração pessoal. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura vencer a indiferença na oração pessoal. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa vencer a indiferença na oração pessoal. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: vencer a indiferença na oração pessoal. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides vencer a indiferença na oração pessoal."
  },
  {
    "data": "2027-03-18",
    "versiculo": "Lucas 15:11-32",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser fiel nas pequenas tarefas no serviço diário. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser fiel nas pequenas tarefas no serviço diário. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser fiel nas pequenas tarefas no serviço diário. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser fiel nas pequenas tarefas no serviço diário e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser fiel nas pequenas tarefas no serviço diário."
  },
  {
    "data": "2027-03-19",
    "versiculo": "Lucas 24:13-35",
    "explicacao": "Esta passagem mostra que valorizar a oração na escola e no trabalho. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a oração na escola e no trabalho. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a oração na escola e no trabalho. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a oração na escola e no trabalho numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a oração na escola e no trabalho."
  },
  {
    "data": "2027-03-20",
    "versiculo": "João 1:1-14",
    "explicacao": "A mensagem recorda que não responder ao mal com mal quando surgem diferenças. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras não responder ao mal com mal quando surgem diferenças. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a não responder ao mal com mal quando surgem diferenças e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para não responder ao mal com mal quando surgem diferenças; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: não responder ao mal com mal quando surgem diferenças."
  },
  {
    "data": "2027-03-21",
    "versiculo": "João 10:1-18",
    "explicacao": "Neste trecho, encontramos um convite a fazer da fé uma prática diária ao tomar decisões. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando fazer da fé uma prática diária ao tomar decisões. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a fazer da fé uma prática diária ao tomar decisões. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas fazer da fé uma prática diária ao tomar decisões e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura fazer da fé uma prática diária ao tomar decisões com sinceridade."
  },
  {
    "data": "2027-03-22",
    "versiculo": "João 14:1-7",
    "explicacao": "A leitura ajuda-nos a compreender que ser perseverante mesmo sem ser visto. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura ser perseverante mesmo sem ser visto. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa ser perseverante mesmo sem ser visto. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: ser perseverante mesmo sem ser visto. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides ser perseverante mesmo sem ser visto."
  },
  {
    "data": "2027-03-23",
    "versiculo": "João 15:1-17",
    "explicacao": "Este texto bíblico chama a atenção para a importância de oferecer uma palavra de ânimo com serenidade. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a oferecer uma palavra de ânimo com serenidade. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para oferecer uma palavra de ânimo com serenidade. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a oferecer uma palavra de ânimo com serenidade e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a oferecer uma palavra de ânimo com serenidade."
  },
  {
    "data": "2027-03-24",
    "versiculo": "Actos dos Apóstolos 2:1-13",
    "explicacao": "Esta passagem mostra que fazer o bem em segredo na vida familiar. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, fazer o bem em segredo na vida familiar. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro fazer o bem em segredo na vida familiar. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura fazer o bem em segredo na vida familiar numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura fazer o bem em segredo na vida familiar."
  },
  {
    "data": "2027-03-25",
    "versiculo": "Actos dos Apóstolos 4:32-37",
    "explicacao": "A mensagem recorda que servir sem procurar aplausos na comunidade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras servir sem procurar aplausos na comunidade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a servir sem procurar aplausos na comunidade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para servir sem procurar aplausos na comunidade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: servir sem procurar aplausos na comunidade."
  },
  {
    "data": "2027-03-26",
    "versiculo": "Actos dos Apóstolos 9:1-19",
    "explicacao": "Neste trecho, encontramos um convite a cuidar dos mais frágeis nas escolhas de hoje. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cuidar dos mais frágeis nas escolhas de hoje. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cuidar dos mais frágeis nas escolhas de hoje. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar dos mais frágeis nas escolhas de hoje e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cuidar dos mais frágeis nas escolhas de hoje com sinceridade."
  },
  {
    "data": "2027-03-27",
    "versiculo": "Romanos 5:1-11",
    "explicacao": "A leitura ajuda-nos a compreender que perdoar com sinceridade nos momentos difíceis. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura perdoar com sinceridade nos momentos difíceis. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa perdoar com sinceridade nos momentos difíceis. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: perdoar com sinceridade nos momentos difíceis. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides perdoar com sinceridade nos momentos difíceis."
  },
  {
    "data": "2027-03-28",
    "versiculo": "Romanos 8:18-39",
    "explicacao": "Este texto bíblico chama a atenção para a importância de dar atenção à família no relacionamento com os outros. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a dar atenção à família no relacionamento com os outros. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para dar atenção à família no relacionamento com os outros. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a dar atenção à família no relacionamento com os outros e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a dar atenção à família no relacionamento com os outros."
  },
  {
    "data": "2027-03-29",
    "versiculo": "Romanos 12:1-21",
    "explicacao": "Esta passagem mostra que viver com simplicidade na oração pessoal. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, viver com simplicidade na oração pessoal. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro viver com simplicidade na oração pessoal. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura viver com simplicidade na oração pessoal numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura viver com simplicidade na oração pessoal."
  },
  {
    "data": "2027-03-30",
    "versiculo": "1 Coríntios 13:1-13",
    "explicacao": "A mensagem recorda que reconhecer os dons dos outros no serviço diário. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras reconhecer os dons dos outros no serviço diário. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a reconhecer os dons dos outros no serviço diário e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para reconhecer os dons dos outros no serviço diário; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: reconhecer os dons dos outros no serviço diário."
  },
  {
    "data": "2027-03-31",
    "versiculo": "1 Coríntios 15:1-11",
    "explicacao": "Neste trecho, encontramos um convite a não esquecer as bênçãos na escola e no trabalho. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando não esquecer as bênçãos na escola e no trabalho. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a não esquecer as bênçãos na escola e no trabalho. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não esquecer as bênçãos na escola e no trabalho e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura não esquecer as bênçãos na escola e no trabalho com sinceridade."
  },
  {
    "data": "2027-04-01",
    "versiculo": "2 Coríntios 4:7-18",
    "explicacao": "A leitura ajuda-nos a compreender que respeitar os compromissos quando surgem diferenças. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura respeitar os compromissos quando surgem diferenças. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa respeitar os compromissos quando surgem diferenças. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: respeitar os compromissos quando surgem diferenças. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides respeitar os compromissos quando surgem diferenças."
  },
  {
    "data": "2027-04-02",
    "versiculo": "2 Coríntios 5:14-21",
    "explicacao": "Este texto bíblico chama a atenção para a importância de cuidar da criação ao tomar decisões. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a cuidar da criação ao tomar decisões. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para cuidar da criação ao tomar decisões. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a cuidar da criação ao tomar decisões e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a cuidar da criação ao tomar decisões."
  },
  {
    "data": "2027-04-03",
    "versiculo": "Gálatas 5:13-26",
    "explicacao": "Esta passagem mostra que escutar a voz de Deus mesmo sem ser visto. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, escutar a voz de Deus mesmo sem ser visto. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro escutar a voz de Deus mesmo sem ser visto. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura escutar a voz de Deus mesmo sem ser visto numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura escutar a voz de Deus mesmo sem ser visto."
  },
  {
    "data": "2027-04-04",
    "versiculo": "Gálatas 6:1-10",
    "explicacao": "A mensagem recorda que cultivar a gratidão com serenidade. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras cultivar a gratidão com serenidade. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a cultivar a gratidão com serenidade e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para cultivar a gratidão com serenidade; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: cultivar a gratidão com serenidade."
  },
  {
    "data": "2027-04-05",
    "versiculo": "Efésios 2:1-10",
    "explicacao": "Neste trecho, encontramos um convite a pedir sabedoria na vida familiar. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando pedir sabedoria na vida familiar. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a pedir sabedoria na vida familiar. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas pedir sabedoria na vida familiar e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura pedir sabedoria na vida familiar com sinceridade."
  },
  {
    "data": "2027-04-06",
    "versiculo": "Efésios 4:1-16",
    "explicacao": "A leitura ajuda-nos a compreender que reconhecer os próprios limites na comunidade. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura reconhecer os próprios limites na comunidade. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa reconhecer os próprios limites na comunidade. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: reconhecer os próprios limites na comunidade. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides reconhecer os próprios limites na comunidade."
  },
  {
    "data": "2027-04-07",
    "versiculo": "Efésios 6:10-18",
    "explicacao": "Este texto bíblico chama a atenção para a importância de respeitar a dignidade de cada pessoa nas escolhas de hoje. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a respeitar a dignidade de cada pessoa nas escolhas de hoje. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para respeitar a dignidade de cada pessoa nas escolhas de hoje. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a respeitar a dignidade de cada pessoa nas escolhas de hoje e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a respeitar a dignidade de cada pessoa nas escolhas de hoje."
  },
  {
    "data": "2027-04-08",
    "versiculo": "Filipenses 2:1-11",
    "explicacao": "Esta passagem mostra que manter a esperança viva nos momentos difíceis. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, manter a esperança viva nos momentos difíceis. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro manter a esperança viva nos momentos difíceis. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura manter a esperança viva nos momentos difíceis numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura manter a esperança viva nos momentos difíceis."
  },
  {
    "data": "2027-04-09",
    "versiculo": "Filipenses 4:4-9",
    "explicacao": "A mensagem recorda que ser verdadeiro nas decisões no relacionamento com os outros. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser verdadeiro nas decisões no relacionamento com os outros. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser verdadeiro nas decisões no relacionamento com os outros e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser verdadeiro nas decisões no relacionamento com os outros; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser verdadeiro nas decisões no relacionamento com os outros."
  },
  {
    "data": "2027-04-10",
    "versiculo": "Colossenses 3:1-17",
    "explicacao": "Neste trecho, encontramos um convite a ser sinal de paz na oração pessoal. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser sinal de paz na oração pessoal. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser sinal de paz na oração pessoal. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser sinal de paz na oração pessoal e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser sinal de paz na oração pessoal com sinceridade."
  },
  {
    "data": "2027-04-11",
    "versiculo": "1 Tessalonicenses 5:12-24",
    "explicacao": "A leitura ajuda-nos a compreender que recomeçar depois de errar no serviço diário. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura recomeçar depois de errar no serviço diário. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa recomeçar depois de errar no serviço diário. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: recomeçar depois de errar no serviço diário. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides recomeçar depois de errar no serviço diário."
  },
  {
    "data": "2027-04-12",
    "versiculo": "2 Tessalonicenses 3:1-5",
    "explicacao": "Este texto bíblico chama a atenção para a importância de viver com coração agradecido na escola e no trabalho. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a viver com coração agradecido na escola e no trabalho. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para viver com coração agradecido na escola e no trabalho. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a viver com coração agradecido na escola e no trabalho e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a viver com coração agradecido na escola e no trabalho."
  },
  {
    "data": "2027-04-13",
    "versiculo": "1 Timóteo 4:6-16",
    "explicacao": "Esta passagem mostra que confiar durante a espera quando surgem diferenças. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, confiar durante a espera quando surgem diferenças. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro confiar durante a espera quando surgem diferenças. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura confiar durante a espera quando surgem diferenças numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura confiar durante a espera quando surgem diferenças."
  },
  {
    "data": "2027-04-14",
    "versiculo": "1 Timóteo 6:6-12",
    "explicacao": "A mensagem recorda que partilhar os dons recebidos ao tomar decisões. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras partilhar os dons recebidos ao tomar decisões. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a partilhar os dons recebidos ao tomar decisões e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para partilhar os dons recebidos ao tomar decisões; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: partilhar os dons recebidos ao tomar decisões."
  },
  {
    "data": "2027-04-15",
    "versiculo": "2 Timóteo 1:6-14",
    "explicacao": "Neste trecho, encontramos um convite a procurar a paz mesmo sem ser visto. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando procurar a paz mesmo sem ser visto. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a procurar a paz mesmo sem ser visto. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas procurar a paz mesmo sem ser visto e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura procurar a paz mesmo sem ser visto com sinceridade."
  },
  {
    "data": "2027-04-16",
    "versiculo": "2 Timóteo 3:14-17",
    "explicacao": "A leitura ajuda-nos a compreender que agir com coragem com serenidade. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura agir com coragem com serenidade. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa agir com coragem com serenidade. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: agir com coragem com serenidade. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides agir com coragem com serenidade."
  },
  {
    "data": "2027-04-17",
    "versiculo": "Tito 2:11-14",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser paciente nas diferenças na vida familiar. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser paciente nas diferenças na vida familiar. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser paciente nas diferenças na vida familiar. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser paciente nas diferenças na vida familiar e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser paciente nas diferenças na vida familiar."
  },
  {
    "data": "2027-04-18",
    "versiculo": "Tito 3:1-8",
    "explicacao": "Esta passagem mostra que crescer na confiança na comunidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, crescer na confiança na comunidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro crescer na confiança na comunidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura crescer na confiança na comunidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura crescer na confiança na comunidade."
  },
  {
    "data": "2027-04-19",
    "versiculo": "Filémon 1:8-21",
    "explicacao": "A mensagem recorda que procurar a vontade de Deus nas escolhas de hoje. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras procurar a vontade de Deus nas escolhas de hoje. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a procurar a vontade de Deus nas escolhas de hoje e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para procurar a vontade de Deus nas escolhas de hoje; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: procurar a vontade de Deus nas escolhas de hoje."
  },
  {
    "data": "2027-04-20",
    "versiculo": "Hebreus 4:14-16",
    "explicacao": "Neste trecho, encontramos um convite a não julgar apressadamente nos momentos difíceis. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando não julgar apressadamente nos momentos difíceis. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a não julgar apressadamente nos momentos difíceis. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas não julgar apressadamente nos momentos difíceis e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura não julgar apressadamente nos momentos difíceis com sinceridade."
  },
  {
    "data": "2027-04-21",
    "versiculo": "Hebreus 11:1-16",
    "explicacao": "A leitura ajuda-nos a compreender que confiar a Deus os planos no relacionamento com os outros. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura confiar a Deus os planos no relacionamento com os outros. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa confiar a Deus os planos no relacionamento com os outros. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: confiar a Deus os planos no relacionamento com os outros. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides confiar a Deus os planos no relacionamento com os outros."
  },
  {
    "data": "2027-04-22",
    "versiculo": "Hebreus 12:1-13",
    "explicacao": "Este texto bíblico chama a atenção para a importância de permanecer firme na esperança na oração pessoal. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a permanecer firme na esperança na oração pessoal. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para permanecer firme na esperança na oração pessoal. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a permanecer firme na esperança na oração pessoal e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a permanecer firme na esperança na oração pessoal."
  },
  {
    "data": "2027-04-23",
    "versiculo": "Tiago 1:2-8",
    "explicacao": "Esta passagem mostra que agir com justiça no serviço diário. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com justiça no serviço diário. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com justiça no serviço diário. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com justiça no serviço diário numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com justiça no serviço diário."
  },
  {
    "data": "2027-04-24",
    "versiculo": "Tiago 2:14-26",
    "explicacao": "A mensagem recorda que falar com bondade na escola e no trabalho. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras falar com bondade na escola e no trabalho. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a falar com bondade na escola e no trabalho e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para falar com bondade na escola e no trabalho; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: falar com bondade na escola e no trabalho."
  },
  {
    "data": "2027-04-25",
    "versiculo": "Tiago 3:13-18",
    "explicacao": "Neste trecho, encontramos um convite a ser generoso no quotidiano quando surgem diferenças. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando ser generoso no quotidiano quando surgem diferenças. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a ser generoso no quotidiano quando surgem diferenças. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas ser generoso no quotidiano quando surgem diferenças e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura ser generoso no quotidiano quando surgem diferenças com sinceridade."
  },
  {
    "data": "2027-04-26",
    "versiculo": "1 Pedro 1:3-9",
    "explicacao": "A leitura ajuda-nos a compreender que acolher a orientação do Espírito ao tomar decisões. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura acolher a orientação do Espírito ao tomar decisões. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa acolher a orientação do Espírito ao tomar decisões. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: acolher a orientação do Espírito ao tomar decisões. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides acolher a orientação do Espírito ao tomar decisões."
  },
  {
    "data": "2027-04-27",
    "versiculo": "1 Pedro 5:6-11",
    "explicacao": "Este texto bíblico chama a atenção para a importância de escolher o bem mesmo sem reconhecimento mesmo sem ser visto. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para escolher o bem mesmo sem reconhecimento mesmo sem ser visto. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a escolher o bem mesmo sem reconhecimento mesmo sem ser visto e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a escolher o bem mesmo sem reconhecimento mesmo sem ser visto."
  },
  {
    "data": "2027-04-28",
    "versiculo": "2 Pedro 1:3-11",
    "explicacao": "Esta passagem mostra que agir com responsabilidade com serenidade. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, agir com responsabilidade com serenidade. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro agir com responsabilidade com serenidade. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura agir com responsabilidade com serenidade numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura agir com responsabilidade com serenidade."
  },
  {
    "data": "2027-04-29",
    "versiculo": "2 Pedro 3:8-14",
    "explicacao": "A mensagem recorda que pedir perdão na vida familiar. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras pedir perdão na vida familiar. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a pedir perdão na vida familiar e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para pedir perdão na vida familiar; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: pedir perdão na vida familiar."
  },
  {
    "data": "2027-04-30",
    "versiculo": "1 João 3:1-10",
    "explicacao": "Neste trecho, encontramos um convite a escutar antes de responder na comunidade. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando escutar antes de responder na comunidade. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a escutar antes de responder na comunidade. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas escutar antes de responder na comunidade e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura escutar antes de responder na comunidade com sinceridade."
  },
  {
    "data": "2027-05-01",
    "versiculo": "1 João 4:7-21",
    "explicacao": "A leitura ajuda-nos a compreender que recomeçar com humildade nas escolhas de hoje. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura recomeçar com humildade nas escolhas de hoje. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa recomeçar com humildade nas escolhas de hoje. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: recomeçar com humildade nas escolhas de hoje. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides recomeçar com humildade nas escolhas de hoje."
  },
  {
    "data": "2027-05-02",
    "versiculo": "2 João 1:4-11",
    "explicacao": "Este texto bíblico chama a atenção para a importância de procurar a reconciliação nos momentos difíceis. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a procurar a reconciliação nos momentos difíceis. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para procurar a reconciliação nos momentos difíceis. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a procurar a reconciliação nos momentos difíceis e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a procurar a reconciliação nos momentos difíceis."
  },
  {
    "data": "2027-05-03",
    "versiculo": "3 João 1:2-8",
    "explicacao": "Esta passagem mostra que acolher quem está sozinho no relacionamento com os outros. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, acolher quem está sozinho no relacionamento com os outros. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro acolher quem está sozinho no relacionamento com os outros. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura acolher quem está sozinho no relacionamento com os outros numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura acolher quem está sozinho no relacionamento com os outros."
  },
  {
    "data": "2027-05-04",
    "versiculo": "Judas 1:17-25",
    "explicacao": "A mensagem recorda que resistir ao desânimo na oração pessoal. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras resistir ao desânimo na oração pessoal. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a resistir ao desânimo na oração pessoal e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para resistir ao desânimo na oração pessoal; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: resistir ao desânimo na oração pessoal."
  },
  {
    "data": "2027-05-05",
    "versiculo": "Apocalipse 1:9-18",
    "explicacao": "Neste trecho, encontramos um convite a dar testemunho através das atitudes no serviço diário. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando dar testemunho através das atitudes no serviço diário. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a dar testemunho através das atitudes no serviço diário. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas dar testemunho através das atitudes no serviço diário e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura dar testemunho através das atitudes no serviço diário com sinceridade."
  },
  {
    "data": "2027-05-06",
    "versiculo": "Apocalipse 21:1-7",
    "explicacao": "A leitura ajuda-nos a compreender que ser disponível para ajudar na escola e no trabalho. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura ser disponível para ajudar na escola e no trabalho. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa ser disponível para ajudar na escola e no trabalho. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: ser disponível para ajudar na escola e no trabalho. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides ser disponível para ajudar na escola e no trabalho."
  },
  {
    "data": "2027-05-07",
    "versiculo": "Apocalipse 22:1-5",
    "explicacao": "Este texto bíblico chama a atenção para a importância de dar lugar ao silêncio quando surgem diferenças. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a dar lugar ao silêncio quando surgem diferenças. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para dar lugar ao silêncio quando surgem diferenças. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a dar lugar ao silêncio quando surgem diferenças e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a dar lugar ao silêncio quando surgem diferenças."
  },
  {
    "data": "2027-05-08",
    "versiculo": "Génesis 22:1-14",
    "explicacao": "Esta passagem mostra que viver a caridade ao tomar decisões. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, viver a caridade ao tomar decisões. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro viver a caridade ao tomar decisões. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura viver a caridade ao tomar decisões numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura viver a caridade ao tomar decisões."
  },
  {
    "data": "2027-05-09",
    "versiculo": "Êxodo 33:12-23",
    "explicacao": "A mensagem recorda que ser firme sem perder a ternura mesmo sem ser visto. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras ser firme sem perder a ternura mesmo sem ser visto. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a ser firme sem perder a ternura mesmo sem ser visto e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para ser firme sem perder a ternura mesmo sem ser visto; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: ser firme sem perder a ternura mesmo sem ser visto."
  },
  {
    "data": "2027-05-10",
    "versiculo": "Levítico 25:8-17",
    "explicacao": "Neste trecho, encontramos um convite a cuidar da criação no relacionamento com os outros com serenidade. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cuidar da criação no relacionamento com os outros com serenidade. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cuidar da criação no relacionamento com os outros com serenidade. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar da criação no relacionamento com os outros com serenidade e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cuidar da criação no relacionamento com os outros com serenidade com sinceridade."
  },
  {
    "data": "2027-05-11",
    "versiculo": "Números 14:1-9",
    "explicacao": "A leitura ajuda-nos a compreender que escolher a verdade na vida familiar. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura escolher a verdade na vida familiar. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa escolher a verdade na vida familiar. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: escolher a verdade na vida familiar. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides escolher a verdade na vida familiar."
  },
  {
    "data": "2027-05-12",
    "versiculo": "Deuteronómio 10:12-22",
    "explicacao": "Este texto bíblico chama a atenção para a importância de proteger a unidade na comunidade. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a proteger a unidade na comunidade. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para proteger a unidade na comunidade. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a proteger a unidade na comunidade e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a proteger a unidade na comunidade."
  },
  {
    "data": "2027-05-13",
    "versiculo": "Josué 3:1-17",
    "explicacao": "Esta passagem mostra que renovar a confiança nas escolhas de hoje. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, renovar a confiança nas escolhas de hoje. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro renovar a confiança nas escolhas de hoje. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura renovar a confiança nas escolhas de hoje numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura renovar a confiança nas escolhas de hoje."
  },
  {
    "data": "2027-05-14",
    "versiculo": "Rute 4:13-17",
    "explicacao": "A mensagem recorda que aprender a esperar nos momentos difíceis. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras aprender a esperar nos momentos difíceis. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a aprender a esperar nos momentos difíceis e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para aprender a esperar nos momentos difíceis; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: aprender a esperar nos momentos difíceis."
  },
  {
    "data": "2027-05-15",
    "versiculo": "1 Samuel 2:1-10",
    "explicacao": "Neste trecho, encontramos um convite a cuidar das palavras no relacionamento com os outros. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando cuidar das palavras no relacionamento com os outros. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a cuidar das palavras no relacionamento com os outros. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas cuidar das palavras no relacionamento com os outros e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura cuidar das palavras no relacionamento com os outros com sinceridade."
  },
  {
    "data": "2027-05-16",
    "versiculo": "2 Samuel 9:1-13",
    "explicacao": "A leitura ajuda-nos a compreender que partilhar consolo na oração pessoal. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura partilhar consolo na oração pessoal. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa partilhar consolo na oração pessoal. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: partilhar consolo na oração pessoal. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides partilhar consolo na oração pessoal."
  },
  {
    "data": "2027-05-17",
    "versiculo": "1 Reis 8:22-30",
    "explicacao": "Este texto bíblico chama a atenção para a importância de acolher a correção no serviço diário. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a acolher a correção no serviço diário. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para acolher a correção no serviço diário. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a acolher a correção no serviço diário e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a acolher a correção no serviço diário."
  },
  {
    "data": "2027-05-18",
    "versiculo": "Jó 28:12-28",
    "explicacao": "Esta passagem mostra que valorizar a comunidade na escola e no trabalho. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a comunidade na escola e no trabalho. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a comunidade na escola e no trabalho. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a comunidade na escola e no trabalho numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a comunidade na escola e no trabalho."
  },
  {
    "data": "2027-05-19",
    "versiculo": "Salmos 139:1-18",
    "explicacao": "A mensagem recorda que praticar a justiça quando surgem diferenças. A experiência apresentada na leitura ensina que a fé se torna concreta quando influencia as decisões e o modo de tratar os outros.",
    "reflexao": "Deixa que esta Palavra te acompanhe enquanto procuras praticar a justiça quando surgem diferenças. Mesmo um gesto discreto pode revelar um coração atento a Deus.",
    "oracao": "Senhor Jesus, fica comigo neste dia. Ajuda-me a praticar a justiça quando surgem diferenças e a tratar cada pessoa com respeito, paciência e caridade. Amém.",
    "proposito": "Antes do fim do dia, faz uma pausa e identifica uma oportunidade para praticar a justiça quando surgem diferenças; depois age com simplicidade.",
    "frase": "Que a tua caminhada de hoje seja marcada por esta escolha: praticar a justiça quando surgem diferenças."
  },
  {
    "data": "2027-05-20",
    "versiculo": "Provérbios 31:10-31",
    "explicacao": "Neste trecho, encontramos um convite a tratar os outros com misericórdia ao tomar decisões. A Palavra ilumina a realidade humana e aponta um caminho de fidelidade, esperança e responsabilidade.",
    "reflexao": "A fé amadurece quando tratar os outros com misericórdia ao tomar decisões. Não procures fazer tudo de uma vez; começa por uma escolha honesta e mantém-te fiel a ela.",
    "oracao": "Senhor, ensina-me a tratar os outros com misericórdia ao tomar decisões. Dá-me um coração atento à tua Palavra e força para viver aquilo que hoje compreendi. Amém.",
    "proposito": "Escolhe hoje uma situação concreta em que possas tratar os outros com misericórdia ao tomar decisões e transforma essa decisão num gesto real.",
    "frase": "Deus acompanha quem procura tratar os outros com misericórdia ao tomar decisões com sinceridade."
  },
  {
    "data": "2027-05-21",
    "versiculo": "Isaías 58:6-12",
    "explicacao": "A leitura ajuda-nos a compreender que vencer a indiferença mesmo sem ser visto. Esta orientação pode transformar escolhas concretas e fortalecer a relação com Deus e com o próximo.",
    "reflexao": "Não deixes esta mensagem ficar apenas na leitura: procura vencer a indiferença mesmo sem ser visto. A transformação começa quando a Palavra encontra espaço nas atitudes.",
    "oracao": "Deus de misericórdia, guia as minhas escolhas para que eu possa vencer a indiferença mesmo sem ser visto. Que a minha vida seja sinal da tua bondade. Amém.",
    "proposito": "Oferece a Deus uma ação concreta: vencer a indiferença mesmo sem ser visto. Faz isso sem esperar elogios ou recompensa.",
    "frase": "A fé ganha raízes quando decides vencer a indiferença mesmo sem ser visto."
  },
  {
    "data": "2027-05-22",
    "versiculo": "Mateus 18:21-35",
    "explicacao": "Este texto bíblico chama a atenção para a importância de ser fiel nas pequenas tarefas com serenidade. A sua mensagem orienta uma vida vivida com coerência, confiança e amor.",
    "reflexao": "Esta leitura desafia-te a ser fiel nas pequenas tarefas com serenidade. Leva essa mensagem para as tuas conversas, decisões e responsabilidades de hoje.",
    "oracao": "Espírito Santo, ilumina a minha consciência e dá-me coragem para ser fiel nas pequenas tarefas com serenidade. Que eu não me afaste do caminho do bem. Amém.",
    "proposito": "Escreve uma decisão prática que te ajude a ser fiel nas pequenas tarefas com serenidade e procura cumpri-la com serenidade.",
    "frase": "Que a Palavra transforme o teu dia e te ensine a ser fiel nas pequenas tarefas com serenidade."
  },
  {
    "data": "2027-05-23",
    "versiculo": "João 20:19-29",
    "explicacao": "Esta passagem mostra que valorizar a oração na vida familiar. O texto convida a reconhecer a iniciativa de Deus e a responder com confiança, em vez de depender apenas das próprias forças.",
    "reflexao": "Hoje, valorizar a oração na vida familiar. Observa as tuas atitudes e pergunta-te qual é o passo simples que pode tornar a tua fé mais visível.",
    "oracao": "Pai bom, acompanha-me enquanto procuro valorizar a oração na vida familiar. Corrige o que precisa de mudar em mim e ajuda-me a agir com amor. Amém.",
    "proposito": "Durante as próximas horas, procura valorizar a oração na vida familiar numa conversa ou tarefa que normalmente fazes sem pensar.",
    "frase": "Uma pequena atitude pode revelar a grandeza de um coração que procura valorizar a oração na vida familiar."
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
