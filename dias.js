
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

