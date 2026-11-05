import type { Activity, Filter } from "./activities";

/** Spanish labels for the filter buttons; the English names stay as the internal keys. */
export const filterLabelsEs: Record<Filter, string> = {
  Projects: "Proyectos",
  Research: "Investigación",
  Internships: "Pasantías",
  "Academics & Enrichment": "Académico y enriquecimiento",
  Music: "Música",
  Sports: "Deportes",
  Volunteering: "Voluntariado",
  All: "Todo",
};

type Text = Pick<Activity, "label" | "title" | "description"> &
  Partial<Pick<Activity, "highlights" | "footnote" | "sections">>;

/** Spanish text for each card, keyed by the card's `name`. Media and layout come from the English card. */
export const activityTextEs: Record<string, Text> = {
  "Open Hearth": {
    label: "Tecnología accesible",
    title: "Open Hearth: un micrófono abierto para cada músico",
    description:
      "Un micrófono abierto en línea y gratuito para músicos neurodivergentes y subrepresentados: sin toxicidad, sin juicios, sin presión. Open Hearth ya conecta a más de 120 músicos y oyentes en India y Estados Unidos.",
    sections: [
      {
        heading: "Lo que creé",
        list: [
          "Una comunidad basada solo en la amabilidad, con monitoreo de IA para comentarios tóxicos.",
          "Controles para el anfitrión sobre el chat, las cámaras y los micrófonos, además de ajustes de comodidad sensorial.",
          "Un escenario global: artistas y público se conectan en línea desde distintos países.",
        ],
      },
      {
        heading: "Resultados reales",
        list: [
          "Más de 120 usuarios en la plataforma, entre músicos y público.",
          "Añadí un chat monitoreado por IA para comentarios tóxicos y reescribí la difusión según la misión de cada organización sin fines de lucro y las necesidades de sus usuarios, ambos en respuesta a los primeros comentarios.",
        ],
      },
    ],
  },
  VirtuosoFix: {
    label: "Tecnología accesible",
    title: "VirtuosoFix para pianistas con discapacidades físicas",
    description:
      "Creé un programa en Python que utiliza varias bibliotecas para ayudar a pianistas con discapacidades físicas a leer y tocar partituras, y lo presenté en la feria de ciencias de mi condado.",
    sections: [
      {
        heading: "Por qué importa",
        text: "Los pianistas con destreza limitada necesitan comentarios de práctica que señalen exactamente qué notas fallaron. VirtuosoFix compara lo que se tocó con la partitura y muestra el resultado nota por nota.",
      },
      {
        heading: "Cómo funciona",
        steps: [
          "Grabación de la interpretación",
          "Alineación con la partitura MIDI de referencia",
          "Etiquetado de la precisión de cada nota",
          "Comentarios para la práctica",
        ],
      },
      {
        heading: "Lo que creé",
        list: [
          "Un programa en Python que compara una grabación con una partitura MIDI de referencia y luego detecta y etiqueta la precisión de las notas para encontrar y corregir errores durante la práctica.",
          "Herramientas de recuperación de información musical: PyPianoRoll para la alineación de tonos y el reemplazo de notas, y pretty_midi para el análisis y la síntesis MIDI.",
          "NumPy y pandas para organizar los datos a nivel de nota.",
        ],
      },
      {
        heading: "Resultados reales",
        list: [
          "Tercer lugar en la Feria de Ciencias e Ingeniería de Contra Costa (marzo de 2026).",
          "Ayuda a pianistas con destreza limitada a practicar y grabar de forma independiente.",
        ],
      },
    ],
  },
  AdapTune: {
    label: "Tecnología accesible",
    title: "Música adaptativa con IA para el manejo del estrés",
    description:
      "Ante la creciente crisis de salud mental entre estudiantes de secundaria en EE. UU., estoy trabajando en la idea de una aplicación accesible y privada que ayude a los estudiantes a manejar el estrés mediante música adaptativa.",
  },
  IEEE: {
    label: "Investigación en procesamiento digital de señales",
    title: "Clasificación acústica submarina ligera de fuentes de propulsión de embarcaciones",
    description:
      "Evalué modelos de aprendizaje automático, parámetros y técnicas de procesamiento digital de señales para mejorar la precisión con la que se pueden identificar los motores de embarcaciones a partir de su firma sonora.",
    sections: [
      {
        heading: "Por qué importa",
        text: "El aumento del tráfico marítimo genera más ruido ambiental que afecta la vida marina. Además, los métodos actuales de identificación de embarcaciones requieren que los barcos ingresen su información por sí mismos, lo que plantea un problema de seguridad. Por eso se necesita una forma confiable y segura de identificar características de las embarcaciones.",
      },
      {
        heading: "Resultados reales",
        list: [
          "Aceptado para publicación en IEEE SoutheastCon 2027.",
          "92 % de precisión en pruebas al clasificar cinco motores de embarcación (cuatro motores fueraborda de combustión y uno eléctrico) a partir de audio submarino.",
          "Un modelo de regresión logística de 1 KB igualó a una red neuronal de 3,2 MB: unas 3.000 veces más pequeño y adecuado para sensores oceánicos de bajo consumo.",
        ],
      },
    ],
  },
  "Stress management system": {
    label: "Investigación en procesamiento digital de señales",
    title: "Hacia un sistema para smartphone con control de calidad para intervención musical consciente del estrés",
    description:
      "Propuse un sistema que combina un sensor PPG con un modelo ligero de aprendizaje automático en el teléfono que clasifica el estrés y responde con una intervención musical, para que el manejo del estrés sea más eficiente y accesible.",
    sections: [
      {
        heading: "Por qué importa",
        text: "El objetivo es un sistema que detecte el estrés a partir de señales del cuerpo y responda de inmediato con música adaptada al oyente, cerrando el ciclo entre la detección y el apoyo.",
      },
      {
        heading: "Cómo funciona",
        steps: [
          "Sensor Arduino de 5 canales",
          "CNN + LSTM sobre señales sin procesar / MLP sobre características extraídas",
          "Fusión calibrada: índice de estrés de 0 a 100",
          "Biblioteca musical original de Suno / selecciones de Spotify mediante Claude",
        ],
      },
      {
        heading: "Resultados reales",
        list: [
          "Aceptado para publicación en IEEE SoutheastCon 2027.",
          "94 % de precisión al distinguir estados de calma y estrés en datos de un sensor de muñeca, usando señales cardíacas que puede captar la cámara de un teléfono.",
          "Frecuencia cardíaca a partir de video de la cámara del smartphone con un error promedio de 6,5 BPM, con un control de calidad que descarta grabaciones inutilizables con un 78 % de precisión.",
          "La música elegida por el oyente mejoró la recuperación del estrés en 1,05 puntos frente a un control con radio, con el mayor beneficio en el nerviosismo.",
          "Solicitud de patente de EE. UU. en trámite n.º 19/858,559 · Quality-Gated Physiological Feedback and Adaptive Music Intervention · noviembre de 2026",
        ],
      },
    ],
  },
  "UC San Diego COSMOS research": {
    label: "Investigación en procesamiento digital de señales · Líder de equipo",
    title: "Interpolación musical en UC San Diego",
    description:
      "Creé un programa que mezcla los sonidos de dos instrumentos y produce un solo resultado que se percibe como ambos instrumentos combinados.",
    sections: [
      {
        heading: "Por qué importa",
        text: "La mayoría de las estaciones de trabajo de audio digital y los instrumentos tradicionales limitan a los creadores a sonidos específicos, lo que restringe su expresividad. El morphing tímbrico permite diseñar sonidos híbridos interpolando entre instrumentos.",
      },
      {
        heading: "Objetivo del proyecto",
        text: "Fusionar los parámetros de un saxofón y una viola en un solo instrumento.",
      },
      {
        heading: "Cómo funciona",
        steps: [
          "Grabar notas La4 analógicas y analizarlas en Audacity",
          "Trasladar las características analógicas a osciladores de Pure Data",
          "Sintetizar versiones digitales de los instrumentos originales",
          "Interpolar los parámetros para crear el instrumento híbrido",
        ],
      },
      {
        heading: "Lo que creamos",
        list: [
          "Analizamos las señales analógicas sin procesar de notas La4 en Audacity, graficando el espectro para estudiar las frecuencias y usando espectrogramas para captar cómo cambia el sonido con el tiempo.",
          "Trasladamos esas características a osciladores de Pure Data y sintetizamos versiones digitales del saxofón y la viola, modelando sus envolventes de amplitud y sus armónicos.",
          "Añadimos importaciones de archivos de texto que se asignan directamente a los osciladores en Pure Data.",
          "Mezclamos los dos instrumentos con interpolación: lineal para los tiempos de sostenimiento y liberación, y logarítmica para los tiempos de ataque, las frecuencias y las amplitudes.",
        ],
      },
      {
        heading: "Resultados reales",
        list: ["Obtuve una sólida carta de recomendación de mi profesor de UC San Diego."],
      },
    ],
  },
  Hinkal: {
    label: "Desarrollo de software",
    title: "Pasante de desarrollo UI/UX en Hinkal",
    description:
      "En Hinkal, una startup líder en privacidad y seguridad blockchain, diseñé y desarrollé interfaces que hacen accesibles las transacciones seguras en una amplia variedad de redes.",
  },
  "Hey, Blue!": {
    label: "Desarrollo de software",
    title: "Pasante en Hey, Blue!",
    description:
      "Hey, Blue! convierte en juego la relación entre los policías y los vecindarios que patrullan, generando confianza y acercando a residentes y agentes.",
  },
  "Compass Lessons": {
    label: "Desarrollo de software",
    title: "Pasante en Compass Lessons",
    description:
      "Compass Lessons ayuda a empresas de salud a convertir desafíos complejos en estrategias prácticas y centradas en las personas que mejoran los resultados clínicos y económicos.",
  },
  Academics: {
    label: "Académico",
    title: "California High School, promoción 2028",
    description: "GPA: 4,5 ponderado / 3,93 no ponderado. Cursos que incluyen:",
    highlights: ["AP Cálculo", "AP Informática", "AP Física", "Ingeniería"],
  },
  "UC San Diego COSMOS": {
    label: "Programa de verano",
    title: "UC San Diego COSMOS: música y matemáticas",
    description:
      "Estudié procesamiento digital de señales, análisis de Fourier y transformación del sonido usando programación gráfica y sistemas embebidos.",
  },
  "UC Berkeley Fundamentals of Engineering": {
    label: "Programa de verano",
    title: "Programa de Fundamentos de Ingeniería de UC Berkeley",
    description:
      "Simulé la construcción de un puente en MATLAB y estudié termodinámica mediante el diseño de un motor Stirling.",
  },
  Piano: {
    label: "Música",
    title: "Piano competitivo: Carnegie Hall, Stanford y más",
    description:
      "El piano me ha regalado momentos inolvidables, desde una presentación solista ganadora en Carnegie Hall para The Royal Foundation hasta premios en las competencias International Youth Music, Berlin Grand Prize Virtuoso, San Francisco International Innovative, Special Venue Music en la Universidad de Stanford y Global Genius Music.\n\nEstoy agradecido con cada maestro y cada público que los hicieron posibles.",
  },
  Tennis: {
    label: "Deportes",
    title: "Tenis universitario (varsity)",
    description:
      "Fui nombrado MVP de mi equipo junior varsity tras una temporada invicta, llevando al equipo a su primera temporada sin derrotas en 10 años. Después jugué como n.º 6 en el equipo varsity de mi escuela.",
    footnote: "Estoy agradecido con mis entrenadores y compañeros por cada partido que compartimos.",
  },
  "Down Syndrome Connection": {
    label: "Voluntariado · Musicoterapia",
    title: "Voluntario de musicoterapia, Down Syndrome Connection of the Bay Area",
    description:
      "Soy voluntario en sesiones de musicoterapia en Down Syndrome Connection of the Bay Area, una organización sin fines de lucro de Danville que apoya a personas con síndrome de Down y a sus familias.",
  },
  "Disable the Difference": {
    label: "Voluntariado · Mentoría",
    title: "Compañero de niños neurodiversos, Disable the Difference",
    description:
      "Soy compañero y enseño inglés o historia a niños neurodiversos con Disable the Difference, una organización sin fines de lucro que ofrece programas gratuitos y amistad a jóvenes con discapacidades intelectuales y del desarrollo.",
  },
};
