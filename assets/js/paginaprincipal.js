const frases = [
    "Acho que você esqueceu meu número. Aqui está: (11)99199-4746",
    "Vai me mandar mensagem 😘",
    "Saudades 😪",
    "Vai no Whatsapp, cacete 😡"
  ];
  function mostrarFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("fraseAmorosa").innerText = frase;
  }