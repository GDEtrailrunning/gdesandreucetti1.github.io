document.addEventListener("DOMContentLoaded", function () {
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
   // Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2', 'Dia 3', 'Día 4', 'Dia 5', 'Día 6'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 42',
    data: [4, 7, 8, 9, 13, 26], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2', 'Dia 3', 'Día 4', 'Día 5'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 43',
    data: [8, 8, 7, 8, 9], // Datos de los km recorridos en cada día
    borderColor: 'rgba(153, 102, 255, 1)',
    fill: true,
    tension: 0.1
  }]
};

// Configuración del gráfico de líneas
const configLine = {
  type: 'line',
  data: dataLine1, // Puede cambiar esto a dataLine2 para mostrar el gráfico de la segunda sección
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Seleccione los contextos de los <canvas> y cree los gráficos
const myChartLine1 = new Chart(document.getElementById('myChart-line-1'), configLine);
const myChartLine2 = new Chart(document.getElementById('myChart-line-2'), {
  type: 'line',
  data: dataLine2,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-11-20');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

  // Crear dos nuevas instancias de HTMLVideoElement para cada sección
  let Semana_1_video_1 = document.createElement("video");
  let Semana_1_video_2 = document.createElement("video");
  let Semana_2_video_3 = document.createElement("video");
  let Semana_2_video_4 = document.createElement("video");

  // Establecer las fuentes de video
  Semana_1_video_1.src = "video 1.mp4"; // ruta de su primer video
  Semana_1_video_2.src = "video 2.mp4"; // ruta de su segundo video
  Semana_2_video_3.src = "video 3.mp4"; // ruta de su tercer video
  Semana_2_video_4.src = "video 4.mp4"; // ruta de su cuarto video

  // Establecer atributos de video
  Semana_1_video_1.controls = true;
  Semana_1_video_1.autoplay = false;
  Semana_1_video_1.loop = false;

  Semana_1_video_2.controls = true;
  Semana_1_video_2.autoplay = false;
  Semana_1_video_2.loop = false;

  Semana_2_video_3.controls = true;
  Semana_2_video_3.autoplay = false;
  Semana_2_video_3.loop = false;

  Semana_2_video_4.controls = true;
  Semana_2_video_4.autoplay = false;
  Semana_2_video_4.loop = false;


  if (typeof audios !== 'undefined' && audios && audios.forEach) {
    audios.forEach(audio => {
      audio.addEventListener("play", () => {
        audios.forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
          }
        });
      });
    });
  }
});

