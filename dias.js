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
      "Senhor, coloca em mim o gosto pela Tua Palavra. Que as minhas escolhas produzam fr
