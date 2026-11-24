"use strict";

/*
  UMA PALAVRA DE DEUS POR DIA
  Programa: 24/11/2026 a 23/03/2027
  Total: 120 dias
  Fuso horário: Africa/Luanda

  Cada registo contém:
  1. Referência bíblica
  2. Paráfrase da passagem
  3. Reflexão
  4. Oração
  5. Frase inspiradora
  6. Propósito do dia
*/

(function () {
  const DATA_INICIO = "2026-11-24";
  const DATA_FIM = "2027-03-23";
  const FUSO = "Africa/Luanda";

  /*
    FORMATO:
    [referência, leitura, reflexão, oração, frase, propósito]
  */

  const devocionais = [

    // ==========================================
    // GÉNESIS — DIAS 1 A 30
    // ==========================================

    [
      "Génesis 1:1-5",
      "No princípio, Deus criou o céu e a terra. A terra ainda não tinha forma, e as trevas cobriam o abismo. Deus ordenou que houvesse luz, e a luz surgiu. Deus viu que a luz era boa e separou-a das trevas.",
      "Deus é o princípio de todas as coisas. Assim como trouxe luz à criação, também pode iluminar os nossos caminhos. Quando não soubermos por onde seguir, devemos procurar a orientação do Senhor.",
      "Senhor, sê o princípio de todos os meus planos. Ilumina os meus pensamentos e guia os meus passos. Que a Tua luz esteja presente em tudo o que eu fizer. Ámen.",
      "Com Deus no princípio, a nossa caminhada encontra luz.",
      "Começar o dia com uma oração e entregar os meus planos a Deus."
    ],

    [
      "Génesis 2:7-9",
      "Deus formou o ser humano do pó da terra e deu-lhe o sopro da vida. Preparou também um jardim com árvores agradáveis e boas para alimento.",
      "A nossa vida é um dom de Deus. Não estamos aqui por acaso. Cada dia é uma oportunidade para cuidar da vida, agradecer e reconhecer a bondade do Criador.",
      "Pai, obrigado pelo dom da vida. Ensina-me a valorizar aquilo que recebi e a cuidar com responsabilidade de tudo o que colocaste nas minhas mãos. Ámen.",
      "A vida é um presente de Deus que merece ser vivido com gratidão.",
      "Agradecer pela vida e cuidar melhor daquilo que Deus me confiou."
    ],

    [
      "Génesis 3:1-13",
      "A humanidade desobedeceu à orientação de Deus. Depois da escolha errada, Adão e Eva sentiram vergonha e tentaram esconder-se. Deus chamou-os e perguntou-lhes o que tinha acontecido.",
      "As nossas escolhas têm consequências. Quando erramos, não devemos fugir da verdade nem procurar desculpas. Deus convida-nos a reconhecer as nossas falhas e a procurar um caminho de conversão.",
      "Senhor, dá-me coragem para reconhecer os meus erros. Ajuda-me a escolher o bem e a procurar sempre a Tua misericórdia. Ámen.",
      "Reconhecer o erro é o primeiro passo para recomeçar.",
      "Ser sincero comigo mesmo e corrigir uma atitude que precisa de mudança."
    ],

    [
      "Génesis 4:1-10",
      "Caim ficou dominado pela inveja contra o seu irmão Abel. Deus chamou a sua atenção, mas Caim não escutou. A história mostra como a falta de amor pode destruir a fraternidade.",
      "A inveja afasta-nos da alegria e prejudica as nossas relações. Deus chama-nos a respeitar a vida e a felicidade dos outros, sem transformar a comparação numa rivalidade.",
      "Senhor, retira do meu coração a inveja e o ressentimento. Ensina-me a alegrar-me com o bem dos outros e a tratar todos como irmãos. Ámen.",
      "Onde existe amor verdadeiro, não há espaço para a inveja.",
      "Evitar comparações e demonstrar alegria pelo sucesso de alguém."
    ],

    [
      "Génesis 5:21-24",
      "Enoque viveu em comunhão com Deus. A sua caminhada foi marcada por uma relação de proximidade com o Senhor, mostrando que a fé deve acompanhar toda a nossa vida.",
      "A fé não deve aparecer apenas nos momentos difíceis. Deus deseja caminhar connosco diariamente, nas decisões, no trabalho, nos estudos e nas relações.",
      "Senhor, ensina-me a caminhar Contigo todos os dias. Que a minha fé não seja apenas palavras, mas uma relação verdadeira contigo. Ámen.",
      "Uma vida próxima de Deus deixa marcas de bondade.",
      "Reservar um momento do dia para estar em silêncio e conversar com Deus."
    ],

    [
      "Génesis 6:5-9",
      "Num tempo em que a maldade se espalhava, Noé procurava viver com justiça e permanecia fiel a Deus. A sua atitude mostrou que era possível escolher o bem mesmo num ambiente difícil.",
      "Não devemos permitir que o comportamento dos outros determine os nossos valores. A fidelidade a Deus exige firmeza, mesmo quando o caminho certo parece ser o mais difícil.",
      "Pai, fortalece a minha consciência para escolher o bem. Ajuda-me a permanecer fiel aos Teus ensinamentos em todas as circunstâncias. Ámen.",
      "A fidelidade a Deus não depende da atitude dos outros.",
      "Manter uma atitude correta mesmo quando ninguém estiver a observar."
    ],

    [
      "Génesis 7:1-5",
      "Deus orientou Noé a entrar na arca com a sua família. Noé cumpriu as instruções recebidas e confiou na proteção do Senhor.",
      "Confiar em Deus também significa escutar e agir. A fé não é apenas esperar que tudo aconteça; é obedecer ao bem que Deus nos ensina.",
      "Senhor, ajuda-me a confiar na Tua orientação. Dá-me sabedoria para escutar a Tua Palavra e coragem para colocá-la em prática. Ámen.",
      "A confiança em Deus transforma a obediência em caminho de esperança.",
      "Cumprir com responsabilidade uma tarefa que tenho adiado."
    ],

    [
      "Génesis 8:1-12",
      "Depois do dilúvio, Deus lembrou-se de Noé e fez baixar as águas. Noé esperou pacientemente até encontrar sinais de que a terra estava novamente preparada para a vida.",
      "Há momentos em que precisamos de esperar. Nem todas as respostas chegam imediatamente, mas a espera pode ensinar-nos paciência, confiança e esperança.",
      "Senhor, dá-me paciência nos momentos de espera. Ajuda-me a não perder a esperança e a reconhecer os sinais da Tua presença. Ámen.",
      "Depois da espera, Deus pode fazer nascer um novo começo.",
      "Não desistir de uma situação importante e enfrentá-la com paciência."
    ],

    [
      "Génesis 9:8-17",
      "Deus estabeleceu uma aliança com Noé e com todos os seres vivos. O arco-íris tornou-se sinal dessa promessa de cuidado e fidelidade.",
      "Deus é fiel às suas promessas. Esta aliança recorda-nos também a responsabilidade de respeitar a vida e cuidar da criação.",
      "Deus fiel, obrigado pela Tua bondade. Ensina-me a respeitar a natureza, a vida e as pessoas que colocas no meu caminho. Ámen.",
      "A fidelidade de Deus é sinal de esperança para a humanidade.",
      "Praticar um gesto de cuidado com a natureza ou com alguém."
    ],

    [
      "Génesis 10:1-5",
      "Os descendentes de Noé formaram diferentes povos e famílias. A passagem apresenta a diversidade das gerações que se espalharam pela terra.",
      "A humanidade é formada por povos e culturas diferentes. Essa diversidade deve ensinar-nos respeito, fraternidade e reconhecimento da dignidade de cada pessoa.",
      "Senhor, ajuda-me a respeitar as diferenças e a acolher cada pessoa com dignidade. Que eu seja instrumento de união. Ámen.",
      "A diversidade humana é um convite à fraternidade.",
      "Tratar com respeito alguém que pensa ou vive de maneira diferente."
    ],

    [
      "Génesis 11:1-9",
      "Os homens quiseram construir uma cidade e uma torre para alcançar grande fama. A sua ambição tornou-se motivo de divisão, e Deus confundiu as suas línguas.",
      "A ambição sem humildade pode afastar-nos de Deus e dos outros. Os nossos projetos devem procurar o bem comum, e não apenas o reconhecimento pessoal.",
      "Senhor, livra-me do orgulho e ensina-me a trabalhar com humildade. Que os meus projetos sejam orientados pelo amor e pela justiça. Ámen.",
      "A verdadeira grandeza não está no orgulho, mas na humildade.",
      "Realizar uma tarefa em equipa, valorizando a contribuição dos outros."
    ],

    [
      "Génesis 12:1-9",
      "Deus chamou Abraão para deixar a sua terra e partir para um lugar que lhe seria indicado. Abraão confiou na promessa e começou a sua caminhada.",
      "Nem sempre conhecemos todos os passos do futuro. A fé ensina-nos a confiar em Deus e a avançar com coragem quando Ele nos chama a mudar.",
      "Senhor, dá-me coragem para seguir os caminhos que me aproximam de Ti. Que eu não tenha medo de começar de novo. Ámen.",
      "A fé começa quando confiamos em Deus e damos o primeiro passo.",
      "Dar um passo concreto numa mudança positiva que tenho adiado."
    ],

    [
      "Génesis 13:5-12",
      "Abraão e Lot enfrentaram dificuldades por causa dos seus rebanhos e decidiram separar os seus caminhos. Abraão procurou resolver a situação sem alimentar conflitos.",
      "A paz exige maturidade e capacidade de diálogo. Nem sempre precisamos de vencer uma discussão; muitas vezes, a melhor escolha é preservar a fraternidade.",
      "Senhor, ensina-me a procurar a paz. Dá-me humildade para dialogar e sabedoria para resolver conflitos sem ferir ninguém. Ámen.",
      "A paz vale mais do que a necessidade de ter sempre razão.",
      "Resolver uma divergência com diálogo e respeito."
    ],

    [
      "Génesis 14:17-24",
      "Depois de uma vitória, Abraão recebeu a bênção de Melquisedec e recusou enriquecer de maneira que comprometesse a sua integridade.",
      "Nem tudo o que podemos receber nos convém. A honestidade deve orientar as nossas decisões, mesmo quando existe uma vantagem aparentemente fácil.",
      "Senhor, guarda o meu coração da ganância. Ajuda-me a agir com honestidade e a valorizar aquilo que é justo. Ámen.",
      "A integridade vale mais do que qualquer vantagem.",
      "Ser honesto numa situação em que seria fácil escolher o caminho mais conveniente."
    ],

    [
      "Génesis 15:1-6",
      "Deus prometeu a Abraão uma grande descendência. Apesar da idade e das dificuldades, Abraão acreditou na promessa do Senhor.",
      "A fé não significa compreender tudo. Significa confiar em Deus mesmo quando a realidade parece contrária à esperança.",
      "Pai, aumenta a minha fé. Quando surgirem dúvidas, ajuda-me a recordar que posso confiar na Tua fidelidade. Ámen.",
      "A esperança permanece viva quando o coração confia em Deus.",
      "Entregar a Deus uma preocupação que tenho guardado no coração."
    ],

    [
      "Génesis 16:7-13",
      "Agar encontrou-se com o mensageiro do Senhor no deserto. Deus ouviu a sua aflição e mostrou-lhe que não estava esquecida.",
      "Deus conhece as nossas dificuldades, inclusive aquelas que os outros não conseguem perceber. Nenhuma pessoa é invisível aos olhos do Senhor.",
      "Senhor, obrigado porque conheces a minha vida. Dá-me sensibilidade para perceber também o sofrimento de quem está ao meu lado. Ámen.",
      "Mesmo no deserto, Deus vê e acompanha os seus filhos.",
      "Dar atenção a alguém que esteja a sentir-se sozinho ou esquecido."
    ],

    [
      "Génesis 17:1-8",
      "Deus renovou a sua aliança com Abraão e prometeu-lhe uma descendência numerosa. Chamou-o a caminhar na sua presença com fidelidade.",
      "A relação com Deus pede compromisso. Não basta procurar o Senhor quando precisamos de alguma coisa; é necessário viver com fidelidade.",
      "Senhor, renova a minha fé e ajuda-me a viver na Tua presença. Que as minhas escolhas revelem o compromisso que tenho Contigo. Ámen.",
      "A aliança com Deus convida-nos a uma vida de fidelidade.",
      "Cumprir um compromisso assumido com responsabilidade."
    ],

    [
      "Génesis 18:1-8",
      "Abraão recebeu visitantes e ofereceu-lhes acolhimento e alimento. A sua hospitalidade mostrou generosidade e atenção ao próximo.",
      "A bondade manifesta-se em gestos simples. Acolher, escutar e partilhar são formas concretas de viver o amor de Deus.",
      "Pai, abre o meu coração para acolher quem precisa. Ensina-me a servir com alegria e sem esperar recompensa. Ámen.",
      "A hospitalidade transforma um encontro num gesto de amor.",
      "Receber alguém com atenção ou ajudar uma pessoa que precise."
    ],

    [
      "Génesis 19:15-17",
      "Os mensageiros de Deus orientaram Lot e a sua família a abandonar a cidade. A passagem mostra a importância de escutar o aviso e afastar-se do mal.",
      "Existem situações das quais precisamos de nos afastar para proteger os nossos valores. A prudência também faz parte da vida de fé.",
      "Senhor, dá-me discernimento para reconhecer aquilo que me afasta do bem. Ajuda-me a escolher caminhos que preservem a minha dignidade. Ámen.",
      "A sabedoria também consiste em saber quando devemos afastar-nos.",
      "Evitar hoje uma situação ou hábito que prejudique o meu crescimento."
    ],

    [
      "Génesis 20:1-7",
      "Abraão enfrentou uma situação difícil e Deus interveio para impedir que o mal acontecesse. A passagem recorda a importância da verdade e da proteção divina.",
      "As nossas atitudes devem ser guiadas pela sinceridade. A confiança em Deus não dispensa a responsabilidade de falar e agir com verdade.",
      "Senhor, ajuda-me a ser verdadeiro nas minhas palavras e atitudes. Dá-me coragem para assumir as minhas responsabilidades. Ámen.",
      "A verdade constrói a confiança que a mentira destrói.",
      "Falar com sinceridade numa situação em que normalmente esconderia a verdade."
    ],

    [
      "Génesis 21:1-7",
      "Deus cumpriu a promessa feita a Abraão e Sara, e nasceu Isaac. A alegria da família mostrou que a promessa do Senhor não tinha sido esquecida.",
      "A espera não significa abandono. Deus ensina-nos a confiar no seu tempo e a reconhecer com gratidão as bênçãos que chegam.",
      "Pai, obrigado pelas promessas e pelos dons que colocas na minha vida. Ensina-me a esperar com fé e a agradecer sem deixar que a ansiedade me domine. Ámen.",
      "Deus não esquece as suas promessas.",
      "Agradecer por uma bênção que chegou depois de um período de espera."
    ],

    [
      "Génesis 22:1-14",
      "Abraão foi colocado diante de uma prova de fé, mas Deus providenciou o necessário e impediu que Isaac fosse sacrificado. A passagem destaca a confiança de Abraão e a providência divina.",
      "A confiança em Deus deve orientar as nossas escolhas. O Senhor não deseja a destruição da vida, mas ensina-nos a colocar a fé acima dos nossos medos.",
      "Senhor, fortalece a minha confiança em Ti. Ajuda-me a colocar nas Tuas mãos aquilo que mais me preocupa. Ámen.",
      "A confiança em Deus permite-nos caminhar mesmo sem conhecer o final.",
      "Entregar a Deus uma preocupação e agir com serenidade."
    ],

    [
      "Génesis 23:1-6",
      "Abraão viveu o luto pela morte de Sara e procurou um lugar digno para sepultá-la. Os habitantes reconheceram o seu respeito e a sua dignidade.",
      "O respeito pela memória e pela dignidade das pessoas é uma expressão de amor. Devemos tratar cada pessoa com consideração em todas as fases da vida.",
      "Senhor, ensina-me a valorizar as pessoas enquanto caminham comigo. Dá-me sensibilidade para respeitar a dor dos outros. Ámen.",
      "O respeito é uma forma de reconhecer a dignidade de cada pessoa.",
      "Demonstrar consideração por alguém através de uma atitude concreta."
    ],

    [
      "Génesis 24:10-21",
      "O servo de Abraão pediu orientação a Deus para encontrar uma esposa para Isaac. Rebeca apareceu e demonstrou generosidade ao oferecer água.",
      "A oração pode acompanhar as nossas decisões. Mas também precisamos de observar as atitudes e reconhecer a bondade que encontramos nas pessoas.",
      "Senhor, orienta as minhas decisões. Dá-me sabedoria para reconhecer o bem e humildade para aceitar a Tua orientação. Ámen.",
      "Deus também nos orienta através dos gestos de bondade.",
      "Antes de tomar uma decisão importante, parar e pedir orientação a Deus."
    ],

    [
      "Génesis 25:27-34",
      "Esaú trocou o seu direito de primogenitura por uma refeição. A sua escolha mostrou como uma necessidade imediata pode levar alguém a desprezar algo de grande valor.",
      "Nem sempre devemos trocar valores importantes por uma satisfação passageira. É necessário pensar nas consequências das nossas escolhas.",
      "Pai, dá-me domínio próprio e sabedoria. Ajuda-me a não trocar aquilo que é importante por vantagens momentâneas. Ámen.",
      "Uma decisão impulsiva pode comprometer algo de grande valor.",
      "Pensar nas consequências antes de tomar uma decisão."
    ],

    [
      "Génesis 26:12-25",
      "Isaac enfrentou conflitos por causa dos poços, mas continuou a procurar soluções. Deus confirmou a sua presença e renovou a promessa.",
      "A perseverança não significa alimentar conflitos. Podemos continuar a trabalhar pelo que é justo sem abandonar a paz e a confiança em Deus.",
      "Senhor, dá-me paciência diante das dificuldades. Ensina-me a perseverar sem perder a bondade. Ámen.",
      "Perseverar com paz é uma forma de demonstrar maturidade.",
      "Continuar uma tarefa difícil sem responder com agressividade."
    ],

    [
      "Génesis 27:18-29",
      "Jacó enganou o seu pai para receber a bênção destinada a Esaú. A passagem mostra como a mentira e o engano podem afetar profundamente uma família.",
      "O desejo de conseguir alguma coisa nunca justifica a desonestidade. A verdade deve estar presente nas relações familiares e em todas as nossas escolhas.",
      "Senhor, purifica as minhas intenções. Ajuda-me a não recorrer ao engano para alcançar os meus objetivos. Ámen.",
      "O que é conquistado pela mentira não constrói uma vida verdadeira.",
      "Escolher a honestidade, mesmo quando ela exige mais esforço."
    ],

    [
      "Génesis 28:10-17",
      "Durante a viagem, Jacó sonhou com uma escada que ligava a terra ao céu. Deus confirmou que estaria com ele e que não o abandonaria.",
      "Mesmo quando nos sentimos longe de casa ou inseguros, Deus permanece presente. A sua companhia dá-nos coragem para continuar.",
      "Senhor, acompanha-me nos caminhos que preciso de percorrer. Quando sentir medo, recorda-me que não estou sozinho. Ámen.",
      "Deus está presente até nos caminhos que parecem desconhecidos.",
      "Enfrentar uma responsabilidade com confiança e sem fugir dela."
    ],

    [
      "Génesis 29:15-20",
      "Jacó trabalhou durante anos para poder casar com Raquel. O seu amor levou-o a enfrentar o trabalho e a espera com perseverança.",
      "As coisas verdadeiramente importantes exigem compromisso e paciência. O amor não é apenas sentimento; também se demonstra através da dedicação.",
      "Pai, ensina-me a amar com respeito e responsabilidade. Dá-me paciência para construir relações verdadeiras. Ámen.",
      "O amor verdadeiro também se revela na dedicação.",
      "Demonstrar carinho e respeito por alguém através de uma atitude concreta."
    ],

    [
      "Génesis 30:22-24",
      "Deus lembrou-se de Raquel e ela deu à luz José. Depois de um longo período de espera, a sua vida foi marcada pela alegria.",
      "A gratidão ajuda-nos a reconhecer as bênçãos que recebemos. Não devemos permitir que a espera nos faça esquecer tudo aquilo que Deus já realizou.",
      "Senhor, obrigado por não me abandonares. Ensina-me a reconhecer as Tuas bênçãos e a agradecer em todas as circunstâncias. Ámen.",
      "Um coração agradecido encontra razões para louvar a Deus.",
      "Escrever ou recordar três motivos de gratidão."
    ],

    // ==========================================
    // SALMOS — DIAS 31 A 60
    // ==========================================

    [
      "Salmo 1:1-3",
      "Feliz é aquele que não segue os caminhos do mal, mas encontra alegria na lei do Senhor. É comparado a uma árvore plantada junto às águas, que dá fruto no tempo certo.",
      "As pessoas e os hábitos que escolhemos influenciam a nossa caminhada. A Palavra de Deus alimenta a nossa fé e ajuda-nos a produzir bons frutos.",
      "Senhor, coloca em mim o gosto pela Tua Palavra. Que as minhas escolhas produzam frutos de bondade e justiça. Ámen.",
      "Quem cria raízes na Palavra de Deus cresce com firmeza.",
      "Ler uma passagem bíblica e procurar praticar o seu ensinamento."
    ],

    [
      "Salmo 2:10-12",
      "O salmo aconselha os governantes a agir com sabedoria e a reconhecer a autoridade de Deus. A verdadeira segurança encontra-se em confiar no Senhor.",
      "A sabedoria começa quando reconhecemos que não somos donos de tudo. Deus convida-nos a viver com humildade e a procurar a sua orientação.",
      "Senhor, ensina-me a reconhecer a Tua autoridade. Que eu não confie apenas nas minhas capacidades, mas procure sempre a Tua sabedoria. Ámen.",
      "A verdadeira segurança nasce da confiança em Deus.",
      "Pedir a Deus sabedoria antes de tomar uma decisão."
    ],

    [
      "Salmo 3:3-6",
      "O salmista reconhece Deus como escudo e proteção. Mesmo cercado por dificuldades, encontra no Senhor a confiança necessária para descansar.",
      "A fé não elimina todos os problemas, mas ajuda-nos a enfrentá-los sem perder a esperança. Podemos procurar em Deus a força para continuar.",
      "Senhor, sê a minha proteção nos momentos de dificuldade. Dá-me serenidade e confiança para enfrentar este dia. Ámen.",
      "A presença de Deus dá coragem ao coração.",
      "Enfrentar uma dificuldade com calma, oração e confiança."
    ],

    [
      "Salmo 4:4-8",
      "O salmista convida à reflexão e à confiança em Deus. Mesmo diante das incertezas, encontra paz suficiente para repousar.",
      "A paz interior não depende apenas de termos tudo resolvido. Podemos entregar as nossas preocupações a Deus e aprender a descansar com confiança.",
      "Pai, acalma o meu coração. Ajuda-me a entregar as preocupações nas Tuas mãos e a viver este dia com paz. Ámen.",
      "A paz de Deus pode habitar num coração que confia.",
      "Reservar alguns minutos de silêncio para rezar e tranquilizar o coração."
    ],

    [
      "Salmo 5:1-3",
      "O salmista apresenta a Deus as suas palavras e os seus pedidos logo pela manhã, esperando com confiança a orientação do Senhor.",
      "Começar o dia com Deus ajuda-nos a colocar as nossas prioridades em ordem. A oração deve fazer parte da nossa rotina e não apenas dos momentos de emergência.",
      "Senhor, recebe a minha oração nesta manhã. Orienta os meus pensamentos, palavras e decisões. Ámen.",
      "Um dia entregue a Deus começa com um coração orientado.",
      "Fazer uma oração antes de iniciar as atividades do dia."
    ],

    [
      "Salmo 6:6-10",
      "O salmista apresenta a Deus a sua tristeza e o seu cansaço. No meio da aflição, acredita que o Senhor escuta a sua súplica.",
      "Podemos apresentar a Deus aquilo que nos pesa no coração. A oração é também um lugar de sinceridade, onde não precisamos de esconder os nossos sentimentos.",
      "Senhor, escuta a minha oração e dá-me força para enfrentar os momentos difíceis. Que eu nunca perca a esperança na Tua bondade. Ámen.",
      "Deus escuta até as orações que nascem do silêncio.",
      "Falar com Deus sinceramente sobre aquilo que me preocupa."
    ],

    [
      "Salmo 7:8-11",
      "O salmista pede que Deus julgue com justiça e reconheça a verdade. Ele confia que o Senhor conhece o coração humano.",
      "Nem sempre conseguimos resolver todas as injustiças. Mas podemos agir com retidão e deixar que Deus nos ensine a procurar a verdade sem vingança.",
      "Deus justo, ajuda-me a agir corretamente. Livra-me do desejo de vingança e ensina-me a procurar a justiça com serenidade. Ámen.",
      "A justiça começa também na sinceridade do nosso coração.",
      "Evitar julgar alguém sem conhecer toda a situação."
    ],

    [
      "Salmo 8:3-9",
      "Ao contemplar o céu e as estrelas, o salmista admira a grandeza de Deus e reconhece a dignidade que Ele concedeu ao ser humano.",
      "A criação recorda-nos que somos pequenos diante da grandeza de Deus, mas cada vida tem valor. Essa consciência deve despertar gratidão e responsabilidade.",
      "Criador do céu e da terra, obrigado pela beleza da Tua obra. Ensina-me a respeitar a vida e a cuidar da criação. Ámen.",
      "Somos pequenos diante do universo, mas preciosos aos olhos de Deus.",
      "Cuidar de um espaço, de uma planta ou de algo criado por Deus."
    ],

    [
      "Salmo 9:1-4",
      "O salmista louva a Deus de todo o coração e recorda as suas maravilhas. A gratidão torna-se motivo de alegria e confiança.",
      "Quando recordamos o que Deus já fez, encontramos razões para continuar a acreditar. O louvor muda a nossa maneira de olhar para a vida.",
      "Senhor, quero louvar-Te por tudo o que tens feito. Abre os meus olhos para reconhecer as Tuas maravilhas. Ámen.",
      "A gratidão transforma a memória em louvor.",
      "Agradecer a Deus por uma bênção que normalmente considero pequena."
    ],

    [
      "Salmo 10:14-18",
      "O salmista afirma que Deus vê o sofrimento e a injustiça. O Senhor não ignora os necessitados e permanece atento aos que procuram ajuda.",
      "A fé deve tornar-nos atentos ao sofrimento dos outros. Não basta rezar por justiça; precisamos também de praticar a solidariedade.",
      "Senhor, não permitas que eu seja indiferente à dor dos outros. Dá-me um coração atento e disposto a ajudar. Ámen.",
      "Quem confia em Deus aprende a não ignorar o próximo.",
      "Ajudar alguém que esteja a enfrentar uma necessidade."
    ],

    [
      "Salmo 11:1-7",
      "O salmista declara que encontra refúgio no Senhor, mesmo quando a situação parece ameaçadora. Deus permanece justo e atento à humanidade.",
      "A segurança verdadeira não está apenas nas circunstâncias favoráveis. A confiança em Deus ajuda-nos a permanecer firmes quando surgem incertezas.",
      "Senhor, sê o meu refúgio. Fortalece a minha fé e ajuda-me a permanecer firme diante das dificuldades. Ámen.",
      "A confiança em Deus é abrigo para o coração.",
      "Evitar alimentar o medo e procurar uma solução com serenidade."
    ],

    [
      "Salmo 12:2-7",
      "O salmista lamenta as palavras falsas e pede que Deus proteja os que sofrem com a mentira. A Palavra do Senhor é apresentada como pura e fiel.",
      "As palavras podem construir ou destruir. O cristão é chamado a falar com verdade, evitando a falsidade e a manipulação.",
      "Senhor, purifica as minhas palavras. Ajuda-me a falar com honestidade e a usar a minha voz para construir a paz. Ámen.",
      "Uma palavra verdadeira pode construir confiança.",
      "Evitar mentiras, boatos e comentários que prejudiquem alguém."
    ],

    [
      "Salmo 13:1-6",
      "O salmista pergunta até quando terá de esperar, mas termina renovando a confiança no amor de Deus e decide cantar ao Senhor.",
      "É possível sentir cansaço e ainda assim manter a fé. A esperança não exige que escondamos as dificuldades, mas que continuemos a procurar Deus.",
      "Pai, quando a espera parecer longa, sustenta a minha esperança. Ajuda-me a confiar no Teu amor. Ámen.",
      "A esperança pode continuar mesmo quando as respostas demoram.",
      "Não desistir de uma atitude boa só porque ainda não vejo resultados."
    ],

    [
      "Salmo 14:1-3",
      "O salmista denuncia a falta de sabedoria e a corrupção humana. A passagem convida a reconhecer a necessidade de procurar uma vida orientada por Deus.",
      "A sabedoria não se mede apenas pelo conhecimento. Também se revela na maneira como tratamos as pessoas e nas escolhas que fazemos.",
      "Senhor, dá-me sabedoria para distinguir o bem do mal. Que as minhas atitudes revelem respeito e responsabilidade. Ámen.",
      "A verdadeira sabedoria aparece nas nossas atitudes.",
      "Escolher uma atitude justa numa situação do quotidiano."
    ],

    [
      "Salmo 15:1-5",
      "O salmo descreve a pessoa que vive com integridade, pratica a justiça, fala a verdade e não prejudica o próximo.",
      "A proximidade de Deus deve transformar a nossa maneira de viver. A fé verdadeira aparece na honestidade, no respeito e na coerência.",
      "Senhor, ajuda-me a viver com integridade. Que eu seja verdadeiro nas palavras e justo nas atitudes. Ámen.",
      "A fé torna-se visível quando a vida é coerente.",
      "Cumprir uma promessa e tratar todos com justiça."
    ],

    [
      "Salmo 16:5-11",
      "O salmista reconhece o Senhor como a sua herança e fonte de alegria. Em Deus encontra orientação, segurança e esperança.",
      "Muitas coisas podem mudar, mas a relação com Deus permanece como fonte de sentido. A verdadeira alegria não depende apenas dos bens materiais.",
      "Senhor, sê a minha maior riqueza. Orienta os meus passos e ensina-me a encontrar alegria na Tua presença. Ámen.",
      "Quem encontra em Deus o seu tesouro descobre uma alegria profunda.",
      "Valorizar mais a presença de Deus do que as coisas materiais."
    ],

    [
      "Salmo 17:6-9",
      "O salmista pede que Deus escute a sua oração e o proteja. Ele procura abrigo na bondade do Senhor.",
      "Pedir ajuda não é sinal de fraqueza. Reconhecer que precisamos de Deus é um gesto de humildade e confiança.",
      "Pai, escuta a minha oração. Protege-me e ajuda-me a escolher caminhos que respeitem a Tua vontade. Ámen.",
      "A humildade de pedir ajuda abre espaço para a confiança.",
      "Pedir orientação a Deus antes de enfrentar uma situação difícil."
    ],

    [
      "Salmo 18:1-6",
      "O salmista declara o seu amor a Deus e apresenta o Senhor como rocha, fortaleza e libertador. Na dificuldade, invoca o nome do Senhor.",
      "A força não significa nunca enfrentar problemas. Significa encontrar apoio para continuar e não permitir que a dificuldade destrua a nossa esperança.",
      "Senhor, sê a minha força e o meu apoio. Ajuda-me a permanecer firme e a agir com coragem. Ámen.",
      "Deus é a rocha que sustenta a nossa caminhada.",
      "Enfrentar uma responsabilidade com coragem e confiança."
    ],

    [
      "Salmo 19:1-8",
      "Os céus anunciam a glória de Deus, e a lei do Senhor ilumina o caminho humano. A criação e a Palavra revelam a grandeza do Criador.",
      "Podemos aprender com a beleza da criação e com os ensinamentos da Bíblia. Deus oferece sinais da sua presença e orientação para a nossa vida.",
      "Criador, abre os meus olhos para reconhecer a Tua grandeza. Que a Tua Palavra ilumine as minhas decisões. Ámen.",
      "A criação anuncia a grandeza de Deus e a Palavra orienta os nossos passos.",
      "Ler um pequeno trecho da Bíblia e meditar no seu ensinamento."
    ],

    [
      "Salmo 20:1-7",
      "O salmista pede que Deus escute as orações do seu povo e lhe conceda auxílio. A confiança no Senhor é colocada acima da força humana.",
      "Os nossos recursos e capacidades têm limites. Reconhecer isso ajuda-nos a confiar mais em Deus e a agir com humildade.",
      "Senhor, acompanha os meus projetos e dá-me sabedoria para trabalhar com responsabilidade. Que a minha confiança esteja em Ti. Ámen.",
      "A força humana tem limites, mas Deus permanece fiel.",
      "Colocar um projeto nas mãos de Deus e trabalhar por ele com dedicação."
    ],

    [
      "Salmo 21:1-7",
      "O salmista celebra a alegria do rei e reconhece que as bênçãos recebidas vêm de Deus. A confiança no Senhor sustenta a sua esperança.",
      "A alegria cresce quando reconhecemos que não somos responsáveis por tudo sozinhos. Devemos agradecer a Deus e usar as bênçãos com responsabilidade.",
      "Pai, obrigado pelas alegrias que colocas no meu caminho. Ensina-me a partilhar as bênçãos e a permanecer fiel. Ámen.",
      "A alegria torna-se maior quando é acompanhada pela gratidão.",
      "Partilhar uma alegria ou uma boa notícia com alguém."
    ],

    [
      "Salmo 22:1-5",
       "O salmista expressa a sua angústia, mas recorda que os antepassados confiaram em Deus e foram amparados. A oração une sofrimento e esperança.",
      "A Bíblia não esconde os momentos de dor. Podemos falar sinceramente com Deus e recordar que a nossa história não se resume às dificuldades.",
      "Senhor, acompanha-me quando me sentir desanimado. Ajuda-me a recordar a Tua fidelidade e a encontrar esperança. Ámen.",
      "Mesmo na angústia, podemos continuar a procurar Deus.",
      "Oferecer uma palavra de conforto a alguém que esteja triste."
    ],

    [
      "Salmo 23:1-6",
      "O Senhor é apresentado como pastor que conduz, alimenta e protege. Mesmo atravessando um vale escuro, o salmista confia na presença de Deus.",
      "Deus acompanha-nos nos momentos tranquilos e nos momentos difíceis. A sua presença convida-nos a não perder a esperança.",
      "Senhor, guia os meus passos como um bom pastor. Dá-me paz, proteção e confiança para seguir o Teu caminho. Ámen.",
      "Com Deus como pastor, nunca caminhamos sem orientação.",
      "Procurar seguir uma orientação de Deus numa decisão concreta."
    ],

    [
      "Salmo 24:1-6",
      "A terra pertence ao Senhor. O salmo recorda que quem deseja aproximar-se de Deus deve procurar pureza de coração e atitudes sinceras.",
      "A fé exige coerência entre aquilo em que acreditamos e aquilo que fazemos. Aproximar-nos de Deus também significa cuidar da nossa conduta.",
      "Senhor, purifica o meu coração. Ajuda-me a viver com sinceridade e a procurar sempre o que é justo. Ámen.",
      "Um coração sincero encontra espaço para Deus.",
      "Examinar as minhas atitudes e corrigir algo que não esteja certo."
    ],

    [
      "Salmo 25:4-10",
      "O salmista pede que Deus lhe ensine os seus caminhos e o conduza na verdade. Reconhece a misericórdia e a fidelidade do Senhor.",
      "Não precisamos de caminhar apenas segundo as nossas ideias. Deus pode ensinar-nos a escolher melhor e a reconhecer quando precisamos de mudar.",
      "Senhor, mostra-me os Teus caminhos. Ensina-me a agir com humildade e a aprender com os meus erros. Ámen.",
      "Quem se deixa ensinar por Deus encontra direção.",
      "Procurar aprender uma lição antes de responder a uma dificuldade."
    ],

    [
      "Salmo 26:1-8",
      "O salmista pede que Deus examine o seu coração e afirma o desejo de caminhar com sinceridade e permanecer na presença do Senhor.",
      "A integridade exige que sejamos verdadeiros mesmo quando ninguém nos vê. A nossa relação com Deus deve influenciar todas as áreas da vida.",
      "Pai, examina o meu coração e ajuda-me a corrigir o que precisa de mudança. Ensina-me a viver com sinceridade. Ámen.",
      "A sinceridade diante de Deus começa no interior.",
      "Agir com honestidade numa tarefa ou responsabilidade."
    ],

    [
      "Salmo 27:1-6",
      "O salmista declara que Deus é a sua luz e salvação. Mesmo diante de ameaças, escolhe confiar e procurar a presença do Senhor.",
      "O medo pode surgir, mas não precisa de controlar as nossas decisões. A confiança em Deus dá-nos coragem para enfrentar o que está à nossa frente.",
      "Senhor, sê a minha luz nos momentos de incerteza. Fortalece a minha confiança e ajuda-me a não desistir. Ámen.",
      "A luz de Deus é maior do que as nossas incertezas.",
      "Enfrentar com coragem uma tarefa que tenho evitado por medo."
    ],

    [
      "Salmo 28:6-9",
      "O salmista bendiz o Senhor porque ouviu a sua oração. Deus é reconhecido como força e proteção do seu povo.",
      "A oração não deve terminar apenas no pedido. Também precisamos de reconhecer as respostas, agradecer e confiar no cuidado de Deus.",
      "Senhor, obrigado porque escutas a minha oração. Fortalece a minha fé e ajuda-me a reconhecer a Tua bondade. Ámen.",
      "Quem reconhece a bondade de Deus aprende a agradecer.",
      "Agradecer por uma oração ou pedido que tenha sido atendido."
    ],

    [
      "Salmo 29:1-11",
      "O salmo celebra a voz poderosa do Senhor sobre a criação e termina recordando que Deus concede força e paz ao seu povo.",
      "A grandeza de Deus não deve provocar apenas admiração, mas também confiança. O Senhor pode dar-nos força para agir e paz para enfrentar o dia.",
      "Deus poderoso, concede-me força para cumprir as minhas responsabilidades e paz para viver com equilíbrio. Ámen.",
      "A força de Deus também se manifesta na paz que oferece.",
      "Ser uma presença de paz numa conversa ou situação difícil."
    ],

    [
      "Salmo 30:2-6",
      "O salmista agradece porque Deus o ouviu e transformou o seu lamento em alegria. A tristeza não teve a última palavra na sua história.",
      "Os momentos difíceis não definem toda a nossa vida. Deus pode ajudar-nos a recuperar a esperança e a encontrar novos motivos para agradecer.",
      "Senhor, obrigado por me acompanhares nos dias bons e difíceis. Renova a minha esperança e ensina-me a louvar-Te sempre. Ámen.",
      "A alegria pode renascer quando confiamos na bondade de Deus.",
      "Procurar uma razão para agradecer, mesmo num dia difícil."
    ],

    // ==========================================
    // MATEUS — DIAS 61 A 90
    // ==========================================

    [
      "Mateus 1:18-25",
          "José recebeu em sonho a orientação do anjo e aceitou acolher Maria. O nascimento de Jesus revelou que Deus estava a cumprir a sua promessa.",
      "José ensina-nos a escutar a Deus e a agir com responsabilidade. A fé também se manifesta na coragem de proteger e acolher.",
      "Senhor, dá-me um coração atento à Tua vontade. Ensina-me a agir com responsabilidade e a acolher os outros com amor. Ámen.",
      "Deus realiza as suas promessas através de corações disponíveis.",
      "Acolher alguém com respeito e cumprir uma responsabilidade familiar."
    ],

    [
      "Mateus 2:1-12",
      "Os sábios do Oriente seguiram a estrela até encontrarem Jesus. Ao reconhecê-lo, ofereceram presentes e regressaram por outro caminho.",
      "Encontrar Jesus deve transformar a nossa vida. A fé não é apenas procurar bênçãos, mas reconhecer Cristo e permitir que Ele mude as nossas escolhas.",
      "Jesus, orienta a minha caminhada. Que eu Te procure com sinceridade e ofereça o melhor de mim. Ámen.",
      "Quem encontra Jesus descobre um caminho novo.",
      "Oferecer a Deus o melhor do meu tempo e das minhas capacidades."
    ],

    [
      "Mateus 3:1-12",
      "João Batista anunciou a necessidade de conversão e convidou o povo a preparar o caminho do Senhor. A verdadeira mudança deveria aparecer nos frutos da vida.",
      "A conversão não é apenas dizer que queremos mudar. É demonstrar através das atitudes que estamos a escolher um caminho melhor.",
      "Senhor, prepara o meu coração para Te receber. Ajuda-me a abandonar hábitos que me afastam de Ti e a produzir bons frutos. Ámen.",
      "Um coração convertido demonstra a sua mudança através das atitudes.",
      "Escolher um hábito concreto para melhorar a partir de hoje."
    ],

    [
      "Mateus 4:1-11",
      "Jesus enfrentou tentações no deserto e respondeu recorrendo à Palavra de Deus. Permaneceu fiel à missão que tinha recebido do Pai.",
      "Nem tudo o que parece vantajoso é correto. A Palavra de Deus ajuda-nos a discernir e a permanecer fiéis aos nossos valores.",
      "Jesus, fortalece-me nas minhas escolhas. Dá-me sabedoria para reconhecer o que não me faz bem e coragem para escolher o caminho certo. Ámen.",
      "A Palavra de Deus fortalece quem deseja permanecer fiel.",
      "Recusar uma atitude que contrarie os meus valores cristãos."
    ],

    [
      "Mateus 5:1-12",
      "Jesus ensinou as bem-aventuranças, chamando felizes os humildes, misericordiosos, pacificadores e aqueles que procuram a justiça.",
      "Jesus apresenta uma felicidade diferente daquela que o mundo muitas vezes procura. A verdadeira grandeza nasce de um coração humilde, misericordioso e comprometido com o bem.",
      "Senhor Jesus, transforma o meu coração. Ensina-me a ser humilde, misericordioso e promotor da paz. Ámen.",
      "A verdadeira felicidade cresce num coração que pratica o bem.",
      "Praticar uma atitude de misericórdia ou reconciliação."
    ],

    [
      "Mateus 6:25-34",
      "Jesus ensina os seus discípulos a não viverem dominados pelas preocupações. Convida-os a procurar primeiro o Reino de Deus e a confiar na providência do Pai.",
      "Planeamos o futuro, mas não devemos permitir que a ansiedade roube a paz do presente. Deus convida-nos a viver com confiança e responsabilidade.",
      "Pai, entrego-Te as minhas preocupações. Dá-me sabedoria para fazer a minha parte e confiança para deixar nas Tuas mãos aquilo que não posso controlar. Ámen.",
      "Confia em Deus e vive com responsabilidade o dia de hoje.",
      "Concentrar-me nas tarefas de hoje sem alimentar preocupações desnecessárias."
    ],

    [
      "Mateus 7:24-27",
      "Jesus compara quem escuta e pratica as suas palavras a alguém que constrói a casa sobre a rocha. A casa permanece firme quando chegam as tempestades.",
      "Conhecer a Palavra não é suficiente; precisamos de praticá-la. As atitudes construídas sobre os ensinamentos de Cristo dão firmeza à nossa vida.",
      "Senhor Jesus, ajuda-me a colocar em prática aquilo que aprendo contigo. Sê a base das minhas decisões. Ámen.",
      "Uma vida construída sobre Cristo permanece firme nas dificuldades.",
      "Praticar hoje um ensinamento de Jesus que já conheço."
    ],

    [
      "Mateus 8:5-13",
      "Um oficial pediu a Jesus que curasse o seu servo. Demonstrou uma fé tão profunda que reconheceu o poder de Cristo mesmo sem exigir a sua presença física.",
      "A fé verdadeira reconhece que Deus pode agir para além daquilo que conseguimos compreender. Também nos ensina a interceder por quem precisa.",
      "Jesus, aumenta a minha fé. Ensina-me a confiar no Teu poder e a rezar por aqueles que precisam de ajuda. Ámen.",
      "A fé reconhece o poder de Deus mesmo à distância.",
      "Rezar por uma pessoa que esteja a enfrentar uma dificuldade."
    ],

    [
      "Mateus 9:9-13",
      "Jesus chamou Mateus, um cobrador de impostos, para segui-lo. Depois, explicou que veio chamar os pecadores e que deseja misericórdia.",
      "Jesus não reduz ninguém aos seus erros. Ele oferece a possibilidade de recomeçar e ensina-nos a olhar para os outros com misericórdia.",
      "Senhor Jesus, obrigado por me chamares a seguir-Te. Ensina-me a não julgar rapidamente e a acolher as pessoas com misericórdia. Ámen.",
      "A misericórdia abre portas que o julgamento fecha.",
      "Evitar julgar alguém e procurar compreender a sua situação."
    ],

    [
      "Mateus 10:5-15",
      "Jesus enviou os seus discípulos a anunciar o Reino de Deus, levando uma mensagem de paz e confiança, sem dependerem de grandes recursos.",
      "Todos podemos testemunhar o Evangelho através da maneira como vivemos. Nem sempre são necessárias muitas palavras; uma atitude de amor também anuncia Cristo.",
      "Jesus, ajuda-me a ser testemunha do Teu amor. Que as minhas palavras e atitudes levem paz às pessoas que encontrar. Ámen.",
      "A missão cristã começa onde colocamos o amor em prática.",
      "Transmitir uma mensagem de esperança a alguém através das minhas atitudes."
    ],

    [
      "Mateus 11:28-30",
      "Jesus convida os cansados e sobrecarregados a aproximarem-se dele. Promete-lhes descanso e apresenta um caminho de mansidão e humildade.",
      "Não precisamos de carregar tudo sozinhos. Cristo convida-nos a entregar-lhe os pesos do coração e a aprender com a sua mansidão.",
      "Jesus, recebe as minhas preocupações e ensina-me a viver com humildade. Dá-me descanso interior e força para continuar. Ámen.",
      "Em Cristo encontramos descanso para o coração.",
      "Fazer uma pausa para rezar e entregar a Deus uma preocupação."
    ],

    [
      "Mateus 12:9-14",
      "Jesus curou um homem com a mão paralisada, mostrando que fazer o bem e salvar a vida está acima de interpretações rígidas da lei.",
      "A religião deve conduzir-nos ao amor. Quando uma regra ou costume nos torna indiferentes à necessidade do próximo, precisamos de recordar a misericórdia de Cristo.",
      "Senhor, ensina-me a colocar o amor acima do orgulho. Que eu nunca seja indiferente a quem precisa de ajuda. Ámen.",
      "A misericórdia deve orientar as nossas atitudes.",
      "Colocar a necessidade de alguém acima da minha comodidade."
    ],

    [
      "Mateus 13:1-9",
      "Jesus contou a parábola do semeador. As sementes caíram em diferentes terrenos, mas apenas a terra boa permitiu que crescessem e produzissem fruto.",
      "A Palavra de Deus precisa de encontrar espaço no nosso coração. É necessário afastar distrações e cultivar atitudes que permitam à fé crescer.",
      "Senhor, prepara o meu coração para receber a Tua Palavra. Ajuda-me a produzir frutos de amor, justiça e bondade. Ámen.",
      "Um coração disponível transforma a Palavra em frutos.",
      "Eliminar uma distração e dedicar tempo à leitura bíblica."
    ],

    [
      "Mateus 14:22-33",
      "Os discípulos enfrentaram o vento no lago. Jesus aproximou-se deles e chamou Pedro a confiar, mostrando que a fé deve permanecer firme mesmo diante do medo.",
      "As dificuldades podem fazer-nos perder a confiança. Quando isso acontecer, precisamos de voltar o olhar para Cristo e procurar a sua presença.",
      "Jesus, quando o medo surgir, ajuda-me a confiar em Ti. Não permitas que as dificuldades me afastem da fé. Ámen.",
      "Olhar para Cristo ajuda-nos a atravessar as tempestades.",
      "Enfrentar uma preocupação com oração e uma atitude de confiança."
    ],

    [
      "Mateus 15:10-20",
      "Jesus explicou que a verdadeira impureza não vem simplesmente do exterior, mas das más intenções e atitudes que nascem do coração.",
      "A aparência não revela tudo o que existe dentro de nós. Deus deseja transformar as nossas intenções para que as nossas palavras e ações sejam boas.",
      "Senhor, purifica o meu coração. Afasta de mim as palavras e intenções que possam ferir os outros. Ámen.",
      "A verdadeira mudança começa dentro do coração.",
      "Examinar as minhas intenções antes de falar ou agir."
    ],

    [
      "Mateus 16:13-20",
      "Jesus perguntou aos discípulos quem pensavam que Ele era. Pedro reconheceu-o como o Messias, o Filho do Deus vivo.",
      "A fé exige uma relação pessoal com Jesus. Não basta conhecer aquilo que os outros dizem sobre Ele; precisamos de descobrir quem Cristo é para nós.",
      "Jesus, ajuda-me a conhecer-Te cada vez melhor. Que a minha fé seja sincera e se manifeste nas minhas escolhas. Ámen.",
      "Conhecer Jesus transforma a maneira como vivemos.",
      "Dedicar tempo a refletir sobre o lugar de Jesus na minha vida."
    ],

    [
      "Mateus 17:1-8",
      "Jesus manifestou a sua glória diante de Pedro, Tiago e João. Os discípulos ouviram a voz do Pai que os convidava a escutar o Filho.",
      "A vida cristã exige atenção à voz de Jesus. Entre tantas opiniões, precisamos de reservar espaço para escutar a Palavra e deixar-nos orientar por ela.",
      "Pai, abre os meus ouvidos para escutar Jesus. Que a Sua Palavra ilumine as minhas escolhas. Ámen.",
      "Quem escuta Jesus encontra orientação para a vida.",
      "Escutar com atenção alguém e evitar interromper ou julgar."
    ],

    [
      "Mateus 18:21-35",
      "Jesus contou a parábola do servo que recebeu perdão, mas não quis perdoar o seu companheiro. A história ensina que devemos oferecer aos outros a misericórdia que recebemos.",
      "O perdão é essencial para a vida cristã. Não significa ignorar o mal, mas recusar que o ressentimento governe o nosso coração.",
      "Senhor, ensina-me a perdoar e a procurar a reconciliação. Dá-me um coração misericordioso como o Teu. Ámen.",
      "Quem recebe misericórdia é chamado a oferecer misericórdia.",
      "Dar um passo em direção à reconciliação com alguém."
    ],

    [
      "Mateus 19:13-15",
      "Jesus acolheu as crianças e afirmou que o Reino dos Céus pertence aos que se aproximam de Deus com a simplicidade e a confiança próprias de uma criança.",
      "A simplicidade não significa falta de maturidade. Significa aproximar-nos de Deus sem orgulho, com confiança e disponibilidade para aprender.",
      "Jesus, dá-me um coração simples e humilde. Ensina-me a confiar em Ti e a acolher os outros com bondade. Ámen.",
      "A simplicidade abre o coração à presença de Deus.",
      "Praticar a humildade e acolher alguém com atenção."
    ],

    [
      "Mateus 20:25-28",
      "Jesus ensinou que a verdadeira grandeza não está em dominar os outros, mas em servir. Ele próprio veio para servir e entregar a sua vida.",
      "Na visão de Jesus, liderar significa assumir responsabilidades e ajudar. O serviço cristão não procura aplausos, mas o bem do próximo.",
      "Senhor Jesus, ensina-me a servir sem orgulho. Que eu esteja disponível para ajudar e não procure apenas reconhecimento. Ámen.",
      "A grandeza cristã mede-se pela capacidade de servir.",
      "Realizar um serviço útil sem esperar elogios."
    ],

    [
      "Mateus 21:1-11",
      "Jesus entrou em Jerusalém montado num jumento e foi recebido pelo povo com aclamações. A sua chegada revelou um Rei humilde e diferente das expectativas humanas.",
      "Jesus mostra que a verdadeira autoridade não precisa de ostentação. A humildade deve orientar a maneira como tratamos e conduzimos os outros.",
      "Jesus, ensina-me a reconhecer-Te como Senhor da minha vida. Dá-me humildade para seguir o Teu exemplo. Ámen.",
      "Cristo reina através do amor e da humildade.",
      "Evitar procurar destaque e valorizar o trabalho de outras pessoas."
    ],

    [
      "Mateus 22:34-40",
      "Jesus resumiu a lei no amor a Deus com todo o coração e ao próximo como a nós mesmos. Toda a vida cristã encontra nesses mandamentos a sua orientação.",
      "O amor a Deus não pode estar separado do respeito pelo próximo. A nossa fé deve tornar-nos mais atentos, justos e bondosos.",
      "Senhor, ensina-me a amar-Te com todo o coração e a respeitar cada pessoa que encontro. Ámen.",
      "Amar a Deus é também aprender a amar o próximo.",
      "Demonstrar amor através de uma atitude concreta de respeito ou ajuda."
    ],

    [
      "Mateus 23:1-12",
      "Jesus criticou aqueles que ensinavam, mas não praticavam o que diziam. Ensinou que a verdadeira grandeza nasce da humildade e do serviço.",
      "A coerência é indispensável à fé. Não devemos exigir dos outros aquilo que não estamos dispostos a praticar na nossa própria vida.",
      "Senhor, ajuda-me a viver aquilo que ensino e digo. Livra-me da vaidade e dá-me um coração humilde. Ámen.",
      "A fé verdadeira é coerência entre palavras e atitudes.",
      "Praticar hoje aquilo que costumo aconselhar aos outros."
    ],

    [
      "Mateus 24:42-47",
      "Jesus aconselhou os discípulos a permanecerem vigilantes e fiéis nas suas responsabilidades, sem saberem o momento exato da sua chegada.",
      "Viver vigilante significa não adiar o bem. Devemos cumprir as nossas responsabilidades e procurar estar preparados através de uma vida coerente.",
      "Jesus, ajuda-me a viver com atenção e fidelidade. Que eu não adie as boas atitudes que posso praticar hoje. Ámen.",
      "A fidelidade de hoje prepara o caminho de amanhã.",
      "Cumprir uma responsabilidade sem esperar que alguém me cobre."
    ],

    [
      "Mateus 25:31-40",
      "Jesus identifica-se com os famintos, os estrangeiros, os doentes e os necessitados. Ensina que servir os mais pequenos é uma forma de servir o próprio Cristo.",
      "A fé torna-se concreta quando reconhecemos Cristo nas pessoas que precisam de atenção. A caridade não deve ficar apenas nas palavras.",
      "Senhor Jesus, abre os meus olhos para reconhecer-Te nos necessitados. Dá-me generosidade para ajudar com respeito. Ámen.",
      "Servir quem precisa é uma forma de encontrar Cristo.",
      "Praticar uma obra de misericórdia de acordo com as minhas possibilidades."
    ],

    [
      "Mateus 26:36-46",
      "No Getsémani, Jesus rezou ao Pai diante do sofrimento que se aproximava. Mesmo angustiado, procurou permanecer fiel à vontade do Pai.",
      "A oração não significa que nunca teremos dificuldades. Ela ajuda-nos a atravessar os momentos exigentes com confiança e entrega a Deus.",
      "Pai, ajuda-me a confiar na Tua vontade. Dá-me força para cumprir as minhas responsabilidades mesmo quando o caminho for difícil. Ámen.",
      "A oração fortalece-nos para permanecer fiéis.",
      "Rezar antes de enfrentar uma responsabilidade difícil."
    ],

    [
      "Mateus 27:45-54",
      "Durante a crucificação, Jesus entregou a sua vida. O centurião, ao observar os acontecimentos, reconheceu que Jesus era verdadeiramente Filho de Deus.",
      "A cruz revela a profundidade do amor de Cristo. O seu sacrifício convida-nos a viver com gratidão, compaixão e compromisso com o bem.",
      "Jesus, obrigado pelo amor que demonstraste por nós. Ensina-me a responder a esse amor através de uma vida de fé e serviço. Ámen.",
      "A cruz recorda-nos que o amor de Cristo não tem medida.",
      "Fazer um gesto de amor e sacrifício em benefício de alguém."
    ],

    [
      "Mateus 28:16-20",
      "Depois da ressurreição, Jesus enviou os discípulos a anunciar o Evangelho e prometeu permanecer com eles todos os dias.",
      "A missão de anunciar Jesus continua através de cada cristão. Podemos testemunhar a fé na família, na comunidade e no lugar onde vivemos.",
      "Jesus, acompanha-me na missão de testemunhar o Teu amor. Dá-me coragem e sabedoria para anunciar o Evangelho através da minha vida. Ámen.",
      "Quem encontra Cristo é chamado a partilhar a sua esperança.",
      "Partilhar uma mensagem de fé ou esperança com alguém."
    ],

    [
      "Mateus 5:13-16",
      "Jesus chama os discípulos de sal da terra e luz do mundo. As boas obras devem tornar visível a bondade do Pai.",
      "Não precisamos de grandes feitos para testemunhar Cristo. A honestidade, a solidariedade e a bondade podem iluminar o ambiente onde vivemos.",
      "Senhor, faz de mim sal e luz. Que as minhas atitudes ajudem outras pessoas a reconhecer a Tua bondade. Ámen.",
      "Uma pequena atitude de bondade pode iluminar um dia inteiro.",
      "Ser exemplo de honestidade e bondade no lugar onde estiver."
    ],

    [
      "Mateus 6:1-6",
      "Jesus ensina a praticar a caridade e a oração sem procurar aplausos. O Pai conhece as intenções e vê aquilo que é feito com sinceridade.",
      "A fé não deve ser um espetáculo. O valor de uma boa ação está no amor que a inspira, e não na quantidade de elogios que recebemos.",
      "Pai, purifica as minhas intenções. Ensina-me a fazer o bem com sinceridade, mesmo quando ninguém estiver a observar. Ámen.",
      "O bem feito com amor não precisa de aplausos.",
      "Fazer uma boa ação discretamente, sem procurar reconhecimento."
    ],

    // ==========================================
    // JOÃO — DIAS 91 A 120
    // ==========================================

    [
      "João 1:1-5",
       "No princípio existia a Palavra, que estava com Deus e era Deus. Nela estava a vida, e essa vida era a luz da humanidade. A luz brilha nas trevas.",
      "Jesus é a Palavra eterna e a luz que orienta a nossa vida. Quando nos aproximamos dele, encontramos sentido, verdade e esperança.",
      "Jesus, luz do mundo, ilumina o meu caminho. Ajuda-me a afastar tudo o que me impede de viver segundo o Teu amor. Ámen.",
      "A luz de Cristo continua a brilhar mesmo nas trevas.",
      "Procurar uma atitude que leve mais luz e esperança à minha família."
    ],

    [
      "João 2:1-11",
      "Durante um casamento em Caná, Jesus transformou água em vinho. A pedido de Maria, realizou o seu primeiro sinal e manifestou a sua glória.",
      "Maria ensina-nos a confiar em Jesus e a escutar as suas orientações. Deus pode transformar situações quando nos colocamos disponíveis para colaborar.",
      "Senhor Jesus, transforma aquilo que precisa de mudança na minha vida. Dá-me um coração atento e disponível para fazer a Tua vontade. Ámen.",
      "Quando confiamos em Jesus, abrimos espaço para a transformação.",
      "Escutar com atenção uma orientação sábia e colocá-la em prática."
    ],

    [
      "João 3:16-21",
      "Deus amou tanto o mundo que enviou o seu Filho para que todos tenham vida. Jesus veio como luz, convidando as pessoas a viverem na verdade.",
      "O amor de Deus não é uma recompensa para pessoas perfeitas. É um dom que nos chama a sair das trevas e a escolher a verdade.",
      "Pai, obrigado pelo Teu amor. Ajuda-me a viver na verdade e a corresponder ao dom que nos ofereceste em Jesus. Ámen.",
      "O amor de Deus oferece-nos um caminho de vida e esperança.",
      "Escolher a verdade numa situação em que seria mais fácil esconder algo."
    ],

    [
      "João 4:7-15",
      "Jesus conversou com uma mulher samaritana e falou-lhe da água viva que pode saciar a sede mais profunda da pessoa.",
      "Muitas vezes procuramos preencher o coração com coisas passageiras. Jesus convida-nos a procurar nele a fonte de uma vida com sentido.",
      "Jesus, sacia a sede do meu coração. Ajuda-me a procurar em Ti a verdadeira alegria e a partilhá-la com os outros. Ámen.",
      "Só Cristo pode dar sentido à sede mais profunda do coração.",
      "Dedicar um momento à oração e afastar uma distração desnecessária."
    ],

    [
      "João 5:1-9",
      "Jesus encontrou um homem doente junto à piscina e perguntou-lhe se queria ficar curado. Depois, ordenou-lhe que se levantasse, tomasse a sua esteira e caminhasse.",
      "Jesus aproxima-se das nossas dificuldades e convida-nos a não permanecer presos ao desânimo. A esperança deve conduzir-nos a passos concretos.",
      "Senhor Jesus, dá-me força para enfrentar as minhas dificuldades. Ajuda-me a levantar e a continuar a caminhar com fé. Ámen.",
      "Com Cristo, podemos encontrar coragem para recomeçar.",
      "Dar um passo concreto para resolver uma situação que tenho adiado."
    ],

    [
      "João 6:32-40",
      "Jesus apresenta-se como o pão da vida. Quem se aproxima dele encontra alimento espiritual e recebe a promessa de não ser abandonado.",
      "A nossa vida precisa de alimento espiritual. A Palavra e a Eucaristia ajudam-nos a permanecer unidos a Cristo e a crescer na fé.",
      "Jesus, pão da vida, alimenta a minha fé. Aproxima-me de Ti e ensina-me a viver unido ao Teu amor. Ámen.",
      "Cristo é o alimento que sustenta a nossa caminhada espiritual.",
      "Participar com atenção na oração ou na celebração da Eucaristia."
    ],

    [
      "João 7:37-39",
      "Jesus convida os que têm sede a aproximarem-se dele. A passagem relaciona essa promessa com o Espírito que seria recebido pelos que acreditassem.",
      "O Espírito Santo renova a nossa vida e fortalece a fé. Precisamos de manter o coração aberto à sua ação e orientação.",
      "Espírito Santo, vem ao meu coração. Renova a minha fé, ilumina as minhas decisões e ensina-me a viver no amor. Ámen.",
      "Um coração aberto ao Espírito encontra força para florescer.",
      "Invocar o Espírito Santo antes de uma decisão importante."
    ],

    [
      "João 8:1-11",
      "Jesus encontrou uma mulher acusada pelos outros. Em vez de participar na condenação, convidou todos a examinarem a própria consciência e ofereceu à mulher uma oportunidade de mudança.",
      "Jesus não aprova o pecado, mas também não reduz uma pessoa aos seus erros. A misericórdia deve acompanhar a verdade e abrir espaço para a conversão.",
      "Senhor Jesus, ensina-me a não condenar os outros. Dá-me humildade para reconhecer os meus erros e misericórdia para acolher quem precisa de recomeçar. Ámen.",
      "A misericórdia corrige sem destruir a dignidade.",
      "Evitar comentários condenatórios e tratar alguém com compreensão."
    ],

    [
      "João 9:1-11",
      "Jesus encontrou um homem que era cego desde o nascimento e devolveu-lhe a visão. O acontecimento revelou a ação de Deus e despertou a fé.",
      "Nem sempre compreendemos o sofrimento das pessoas. Em vez de procurar culpados, devemos agir com compaixão e ajudar sempre que possível.",
      "Jesus, abre os meus olhos para reconhecer as necessidades dos outros. Livra-me dos preconceitos e ensina-me a agir com compaixão. Ámen.",
      "A fé também nos ensina a olhar para os outros com compaixão.",
      "Ajudar alguém sem fazer julgamentos sobre a sua situação."
    ],

    [
      "João 10:1-18",
      "Jesus apresenta-se como o Bom Pastor que conhece as suas ovelhas e cuida delas. Diferente de quem abandona o rebanho, Ele entrega a vida por amor.",
      "Cristo conhece cada pessoa e não nos trata como desconhecidos. Escutar a sua voz significa aprender a reconhecer os caminhos do amor e da verdade.",
      "Jesus, meu Bom Pastor, guia os meus passos. Ajuda-me a reconhecer a Tua voz e a seguir os Teus ensinamentos. Ámen.",
      "O Bom Pastor conhece-nos e nunca deixa de cuidar de nós.",
      "Escutar a Palavra de Deus antes de tomar uma decisão."
    ],

    [
      "João 11:25-27",
      "Jesus declarou ser a ressurreição e a vida. Diante de Marta, revelou que a esperança em Deus ultrapassa os limites da morte.",
      "A esperança cristã não se limita ao que vemos. Em Cristo encontramos uma promessa de vida que sustenta a nossa fé mesmo nos momentos de dor.",
      "Jesus, fortalece a minha esperança. Ajuda-me a confiar na Tua promessa de vida e a levar consolo a quem sofre. Ámen.",
      "Em Cristo, a esperança é maior do que o medo.",
      "Levar uma palavra de conforto a alguém que esteja a passar por um momento difícil."
    ],

    [
      "João 12:24-26",
      "Jesus compara a semente que cai na terra e dá fruto com a necessidade de uma vida que se entrega ao serviço. Quem deseja segui-lo é chamado a servir.",
      "Uma vida centrada apenas em si mesma torna-se limitada. O amor cresce quando partilhamos o tempo, os dons e as capacidades com os outros.",
      "Senhor, ensina-me a viver com generosidade. Que os meus dons produzam frutos de serviço e de amor. Ámen.",
      "A vida ganha frutos quando é colocada ao serviço do bem.",
      "Usar uma capacidade minha para ajudar outra pessoa."
    ],

    [
      "João 13:1-17",
      "Durante a última ceia, Jesus lavou os pés dos discípulos. Sendo Mestre e Senhor, mostrou que a verdadeira grandeza se manifesta no serviço humilde.",
      "Jesus não ensinou apenas com palavras. Deu o exemplo. Seguir Cristo significa abandonar o orgulho e estar disponível para servir.",
      "Jesus, ensina-me a servir com humildade. Que eu não tenha vergonha de realizar tarefas simples para ajudar os outros. Ámen.",
      "Quem ama verdadeiramente não considera o serviço uma humilhação.",
      "Fazer uma tarefa simples para aliviar o trabalho de alguém."
    ],

    [
      "João 14:1-7",
      "Jesus pediu aos discípulos que não deixassem o coração ficar perturbado. Apresentou-se como caminho, verdade e vida, indicando a relação com o Pai.",
      "Quando o futuro parece incerto, podemos encontrar orientação em Cristo. Seguir Jesus significa escolher a verdade e construir a vida sobre os seus ensinamentos.",
      "Jesus, sê o caminho que orienta as minhas decisões. Dá-me serenidade quando o futuro parecer incerto. Ámen.",
      "Com Jesus como caminho, encontramos direção para a vida.",
      "Tomar uma decisão procurando agir com verdade e responsabilidade."
    ],

    [
      "João 15:1-8",
      "Jesus compara-se à videira e os discípulos aos ramos. Ensina que é necessário permanecer unidos a Ele para produzir frutos.",
      "A fé precisa de ser alimentada diariamente. Quando nos afastamos de Cristo, perdemos a referência que orienta as nossas atitudes.",
      "Senhor Jesus, mantém-me unido a Ti. Que a minha vida produza frutos de amor, paciência e bondade. Ámen.",
      "Permanecer em Cristo é a fonte de uma vida que dá bons frutos.",
      "Praticar uma atitude de amor que demonstre a minha união com Cristo."
    ],

    [
      "João 16:7-15",
      "Jesus prometeu enviar o Espírito da verdade para orientar os discípulos. O Espírito ajudaria a compreender e a testemunhar a mensagem de Cristo.",
      "Não caminhamos sozinhos na fé. O Espírito Santo orienta a nossa consciência e ajuda-nos a reconhecer aquilo que nos aproxima de Deus.",
      "Espírito Santo, guia os meus pensamentos e decisões. Ensina-me a viver na verdade e a testemunhar Jesus. Ámen.",
      "O Espírito Santo orienta quem se deixa conduzir por Deus.",
      "Pedir a orientação do Espírito Santo antes de uma escolha."
    ],

    [
      "João 17:20-23",
      "Jesus rezou pela unidade dos seus discípulos e também por aqueles que acreditariam através da sua palavra. Pediu que todos permanecessem unidos.",
      "A divisão enfraquece as comunidades e as relações. A oração de Jesus convida-nos a construir pontes, respeitar as diferenças e procurar a comunhão.",
      "Pai, torna-nos unidos no amor. Afasta de nós o orgulho e ajuda-nos a trabalhar pela paz nas nossas famílias e comunidades. Ámen.",
      "A unidade é um testemunho visível do amor de Cristo.",
      "Promover a união numa família, grupo ou comunidade."
    ],

    [
      "João 18:33-38",
      "Jesus falou com Pilatos sobre o seu Reino e afirmou que veio dar testemunho da verdade. Pilatos perguntou-lhe o que era a verdade.",
      "A verdade nem sempre é a opção mais fácil, mas é essencial para uma vida coerente. Seguir Jesus significa não negociar os nossos valores por conveniência.",
      "Jesus, ajuda-me a amar a verdade. Dá-me coragem para agir corretamente mesmo quando isso exigir esforço. Ámen.",
      "Quem segue Cristo procura viver na verdade.",
      "Assumir com honestidade uma responsabilidade ou um erro."
    ],

    [
      "João 19:25-30",
