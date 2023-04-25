function updateClock() {
  // criar uma nova instância de Date
  let currentTime = new Date();

  // extrair horas, minutos e segundos
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  // pad 0 se minuto / segundo tiver apenas 1 dígito
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  // escolher "AM" ou "PM" conforme hora atual
  let timeOfDay = currentHours < 12 ? "AM" : "PM";

  // converter para formato 12 horas
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;

  // formar o formato de exibição do relógio
  let currentTimeString =
    currentHours +
    ":" +
    currentMinutes +
    ":" +
    currentSeconds +
    " " +
    timeOfDay;

  // atualizar a página com a hora atual
  document.getElementById("clock").innerHTML = currentTimeString;
}

// atualizar a cada segundo utilizando setInterval
setInterval(updateClock, 1000);
