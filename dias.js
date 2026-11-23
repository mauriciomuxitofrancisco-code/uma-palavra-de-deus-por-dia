
function mostrarPalavraDoDia() {
  const area = document.getElementById("conteudo");
  if (!area) return;

  // Estilos dos cartões individuais
  if (!document.getElementById("estilo-palavra")) {
    const estilo = document.createElement("style");
    estilo.id = "estilo-palavra";

    estilo.textContent = `
      #conteudo {
        background: transparent !important;
        color: #ffffff !important;
        padding: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }

      #conteudo .daily-card {
        background: linear-gradient(145deg, #192b49, #101c35);
        border: 1px solid #c9a96e66;
        border-radius: 22px;
        padding: 25px;
        box-shadow: 0 20px 55px #0004;
      }

      #conteudo .daily-header {
        text-align: center;
        padding: 20px 10px 25px;
        border-bottom: 1px solid #c9a96e66;
        margin-bottom: 25px;
      }

      #conteudo .daily-header h2 {
        color: #ffffff !important;
        font-family: Georgia, serif;
        font-size: clamp(25px, 5vw, 36px);
        font-weight: 500;
        margin: 0 0 15px;
      }

      #conteudo .daily-date {
        color: #aeb9c9;
      }

      #conteudo .daily-number {
        color: #c9a96e;
        font-weight: bold;
        letter-spacing: 2px;
      }

      #conteudo .daily-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 18px;
      }

      #conteudo .daily-section {
        background: linear-gradient(145deg, #243957, #192b49);
        border: 1px solid #c9a96e88;
        border-radius: 17px;
        padding: 22px;
        box-shadow:
          0 7px 0 #0b1528,
          0 13px 25px #0004;
      }

      #conteudo .daily-section h3 {
        color: #c9a96e !important;
        font-family: Georgia, serif;
        font-size: 21px;
        margin: 0 0 13px;
      }

      #conteudo .daily-section p {
        color: #ffffff;
        font-size: 16px;
        line-height: 1.85;
        margin: 0;
      }

      #conteudo .daily-quote {
        background: linear-gradient(145deg, #263d5b, #192b49);
        border: 1px solid #c9a96e;
        border-radius: 18px;
        padding: 25px;
        margin-top: 20px;
        text-align: center;
        box-shadow: 0 7px 0 #0b1528, 0 13px 25px #0004;
      }

      #conteudo .daily-quote strong {
        color: #c9a96e;
        letter-spacing: 1px;
      }

      #conteudo .daily-quote p {
        color: #ffffff;
        line-height: 1.8;
      }

      #conteudo #botaoSair {
        display: block;
        max-width: 230px;
        margin: 30px auto 5px;
        background: #c9a96e !important;
        color: #101c35 !important;
        border-radius: 12px;
      }

      @media(min-width: 850px) {
        #conteudo .daily-grid {
          grid-template-columns: 1fr 1fr;
        }

        #conteudo .daily-section:nth-child(3),
        #conteudo .daily-section:nth-child(4),
        #conteudo .daily-section:nth-child(7) {
          grid-column: 1 / -1;
        }
      }

      @media(max-width: 600px) {
        #conteudo .daily-card {
          padding: 17px;
        }

        #conteudo .daily-section {
          padding: 20px;
        }
      }
    `;

    document.head.appendChild(estilo);
  }

  const hoje = dataAngola();
  const dataFormatada = hoje.split("-").reverse().join("/");

  // Antes do início do programa
  if (hoje < DATA_INICIO) {
    area.innerHTML = `
      <div class="daily-card">
        <div class="daily-header">
          <h2>Uma Palavra de Deus por Dia</h2>
          <p class="daily-date">Data: ${dataFormatada}</p>
          <p class="daily-number">A NOSSA JORNADA COMEÇA AMANHÃ</p>
        </div>

        <div class="daily-section">
          <h3>Prepara o teu coração</h3>
          <p>Amanhã começa um momento especial de encontro com a Palavra de Deus. Reserva um tempo para a oração, a reflexão e o crescimento na fé.</p>
        </div>
      </div>
    `;
    return;
  }

  const numero = calcularDia();
  const dia = obterPrograma(numero);

  const numeroFormatado =
    String(dia.numero).padStart(3, "0");

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
