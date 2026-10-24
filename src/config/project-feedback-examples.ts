export type EditorialReview = { rating: number; name: string; message: string };
export type ProjectRecommendations = {
  recommendations: { es: string[]; en: string[] };
  reviews: { es: EditorialReview[]; en: EditorialReview[] };
};

export const projectRecommendations: Record<string, ProjectRecommendations> = {
  "irbis-supplies": {
    recommendations: {
      es: ["Separar catálogo, estado del carrito y presentación de productos como módulos independientes.","Mostrar costos y condiciones de compra antes del último paso."],
      en: ["Keep catalog, cart state, and product presentation in separate modules.","Show costs and purchase conditions before the final step."]
    },
    reviews: {"es":[{"rating":5,"name":"María Castillo (nombre ficticio)","message":"La propuesta se entiende con rapidez. Separar catálogo, estado del carrito y presentación de productos como módulos independientes."},{"rating":4,"name":"Selina Miranda (nombre ficticio)","message":"La experiencia puede ser más consistente. Mostrar costos y condiciones de compra antes del último paso."}],"en":[{"rating":5,"name":"María Castillo (fictional name)","message":"The project's direction is easy to understand. Keep catalog, cart state, and product presentation in separate modules."},{"rating":4,"name":"Selina Miranda (fictional name)","message":"The experience could be more consistent. Show costs and purchase conditions before the final step."}]}
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.","Distinguir el estado de carga de un catálogo vacío.","Dar jerarquía a imagen, nombre y precio en las fichas."],
      en: ["Clarify which catalog data is coming from Firebase.","Differentiate loading states from an empty catalog.","Prioritize image, name, and price in product details."]
    },
    reviews: {"es":[{"rating":5,"name":"Lucía Fernández (nombre ficticio)","message":"La propuesta se entiende con rapidez. Explicar con claridad qué información del catálogo proviene de Firebase."},{"rating":4,"name":"Tomás Rivas (nombre ficticio)","message":"La experiencia puede ser más consistente. Distinguir el estado de carga de un catálogo vacío."}],"en":[{"rating":5,"name":"Lucía Fernández (fictional name)","message":"The project's direction is easy to understand. Clarify which catalog data is coming from Firebase."},{"rating":4,"name":"Tomás Rivas (fictional name)","message":"The experience could be more consistent. Differentiate loading states from an empty catalog."}]}
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio."],
      en: ["Organize the encyclopedia by geological period and dinosaur type."]
    },
    reviews: {"es":[{"rating":5,"name":"Camila Duarte (nombre ficticio)","message":"La propuesta se entiende con rapidez. Ordenar la enciclopedia por período geológico y tipo de dinosaurio."},{"rating":4,"name":"Nicolás Herrera (nombre ficticio)","message":"La experiencia puede ser más consistente. Incluir fuentes junto a los datos paleontológicos."},{"rating":5,"name":"Valentina Paredes (nombre ficticio)","message":"El enfoque funcional es acertado. Facilitar la comparación de tamaño y alimentación entre especies."}],"en":[{"rating":5,"name":"Camila Duarte (fictional name)","message":"The project's direction is easy to understand. Organize the encyclopedia by geological period and dinosaur type."},{"rating":4,"name":"Nicolás Herrera (fictional name)","message":"The experience could be more consistent. Include sources alongside paleontology facts."},{"rating":5,"name":"Valentina Paredes (fictional name)","message":"The functional focus is a good choice. Make size and diet comparisons between species easy."}]}
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.","Mostrar la operación aplicada junto al resultado."],
      en: ["Group tools by calculation type instead of one undifferentiated list.","Show the operation used alongside each result."]
    },
    reviews: {"es":[{"rating":5,"name":"Mateo Cabrera (nombre ficticio)","message":"La propuesta se entiende con rapidez. Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada."},{"rating":4,"name":"Sofía Navarro (nombre ficticio)","message":"La experiencia puede ser más consistente. Mostrar la operación aplicada junto al resultado."},{"rating":5,"name":"Julián Benítez (nombre ficticio)","message":"El enfoque funcional es acertado. Definir cómo se validan entradas vacías y valores fuera de rango."}],"en":[{"rating":5,"name":"Mateo Cabrera (fictional name)","message":"The project's direction is easy to understand. Group tools by calculation type instead of one undifferentiated list."},{"rating":4,"name":"Sofía Navarro (fictional name)","message":"The experience could be more consistent. Show the operation used alongside each result."},{"rating":5,"name":"Julián Benítez (fictional name)","message":"The functional focus is a good choice. Define how empty and out-of-range inputs are validated."}]}
  },
  "calcu-lenD": {
    recommendations: {
      es: ["Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio.","Diferenciar tasa de compra, venta y referencia si corresponde.","Aclarar si los valores son informativos o provienen de una API en vivo.","Indicar la moneda base y la moneda de destino antes de convertir."],
      en: ["Display the quote date and time beside an exchange rate.","Differentiate buy, sell, and reference rates when applicable.","Clarify whether values are informational or fetched from a live API.","Show the base and target currencies before converting."]
    },
    reviews: {"es":[{"rating":5,"name":"Florencia Acosta (nombre ficticio)","message":"La propuesta se entiende con rapidez. Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio."},{"rating":4,"name":"Bruno Medina (nombre ficticio)","message":"La experiencia puede ser más consistente. Diferenciar tasa de compra, venta y referencia si corresponde."}],"en":[{"rating":5,"name":"Florencia Acosta (fictional name)","message":"The project's direction is easy to understand. Display the quote date and time beside an exchange rate."},{"rating":4,"name":"Bruno Medina (fictional name)","message":"The experience could be more consistent. Differentiate buy, sell, and reference rates when applicable."}]}
  },
  "tick-tack-toe": {
    recommendations: {
      es: ["Distinguir con claridad el turno de cada jugador.","Resolver empate y victoria con mensajes distintos."],
      en: ["Make each player's turn clearly visible.","Use distinct messages for a draw and a win."]
    },
    reviews: {"es":[{"rating":5,"name":"Martina Reyes (nombre ficticio)","message":"La propuesta se entiende con rapidez. Distinguir con claridad el turno de cada jugador."},{"rating":4,"name":"Agustín Molina (nombre ficticio)","message":"La experiencia puede ser más consistente. Resolver empate y victoria con mensajes distintos."}],"en":[{"rating":5,"name":"Martina Reyes (fictional name)","message":"The project's direction is easy to understand. Make each player's turn clearly visible."},{"rating":4,"name":"Agustín Molina (fictional name)","message":"The experience could be more consistent. Use distinct messages for a draw and a win."}]}
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells."]
    },
    reviews: {"es":[{"rating":5,"name":"Julieta Peralta (nombre ficticio)","message":"La propuesta se entiende con rapidez. Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta."},{"rating":4,"name":"Facundo Ibarra (nombre ficticio)","message":"La experiencia puede ser más consistente. Mostrar con claridad el contador de minas restantes."},{"rating":5,"name":"Emilia Torres (nombre ficticio)","message":"El enfoque funcional es acertado. Evitar que una pulsación accidental marque o abra una casilla en móvil."},{"rating":4,"name":"Thiago Silva (nombre ficticio)","message":"Un ajuste concreto para mejorar el resultado: Explicar el resultado cuando se gana o se activa una mina."}],"en":[{"rating":5,"name":"Julieta Peralta (fictional name)","message":"The project's direction is easy to understand. Clearly distinguish revealed, flagged, and hidden cells."},{"rating":4,"name":"Facundo Ibarra (fictional name)","message":"The experience could be more consistent. Keep the remaining-mine counter easy to find."},{"rating":5,"name":"Emilia Torres (fictional name)","message":"The functional focus is a good choice. Prevent accidental flagging or revealing on mobile."},{"rating":4,"name":"Thiago Silva (fictional name)","message":"A concrete improvement would be: Explain the outcome after winning or triggering a mine."}]}
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.","Explicar los controles de teclado y táctiles en el primer uso.","Impedir que una entrada inválida cambie el estado del tablero."],
      en: ["Keep current and best scores visible.","Explain keyboard and touch controls on first use.","Ensure invalid input does not alter the board state."]
    },
    reviews: {"es":[{"rating":5,"name":"Renata Campos (nombre ficticio)","message":"La propuesta se entiende con rapidez. Hacer visible la puntuación actual y la mejor puntuación."},{"rating":4,"name":"Benjamín Vera (nombre ficticio)","message":"La experiencia puede ser más consistente. Explicar los controles de teclado y táctiles en el primer uso."}],"en":[{"rating":5,"name":"Renata Campos (fictional name)","message":"The project's direction is easy to understand. Keep current and best scores visible."},{"rating":4,"name":"Benjamín Vera (fictional name)","message":"The experience could be more consistent. Explain keyboard and touch controls on first use."}]}
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.","Distinguir claramente comida, cuerpo y límites del escenario."],
      en: ["Keep movement consistent with the selected speed.","Clearly distinguish food, the character's body, and arena boundaries."]
    },
    reviews: {"es":[{"rating":5,"name":"Alma Fuentes (nombre ficticio)","message":"La propuesta se entiende con rapidez. Mantener el movimiento del personaje consistente con la velocidad elegida."},{"rating":4,"name":"Santiago Costa (nombre ficticio)","message":"La experiencia puede ser más consistente. Distinguir claramente comida, cuerpo y límites del escenario."},{"rating":5,"name":"Micaela Suárez (nombre ficticio)","message":"El enfoque funcional es acertado. Mostrar la puntuación sin ocultar el área jugable."}],"en":[{"rating":5,"name":"Alma Fuentes (fictional name)","message":"The project's direction is easy to understand. Keep movement consistent with the selected speed."},{"rating":4,"name":"Santiago Costa (fictional name)","message":"The experience could be more consistent. Clearly distinguish food, the character's body, and arena boundaries."},{"rating":5,"name":"Micaela Suárez (fictional name)","message":"The functional focus is a good choice. Show the score without hiding the play area."}]}
  },
  "ajedrez": {
    recommendations: {
      es: ["Diferenciar las piezas seleccionadas y las casillas válidas.","Validar movimientos legales antes de cambiar el tablero.","Destacar jaque, jaque mate y tablas con mensajes inequívocos.","Añadir controles táctiles cómodos sin depender solo de arrastrar piezas."],
      en: ["Distinguish selected pieces and legal destination squares.","Validate legal moves before changing the board.","Clearly identify check, checkmate, and draws.","Provide touch controls that do not rely only on dragging pieces."]
    },
    reviews: {"es":[{"rating":5,"name":"Lautaro Vega (nombre ficticio)","message":"La propuesta se entiende con rapidez. Diferenciar las piezas seleccionadas y las casillas válidas."}],"en":[{"rating":5,"name":"Lautaro Vega (fictional name)","message":"The project's direction is easy to understand. Distinguish selected pieces and legal destination squares."}]}
  },
  "monster-duelists": {
    recommendations: {
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.","Separar visualmente selección, turno y resultado del combate."],
      en: ["Explain each monster's stats before a duel.","Separate selection, turn, and battle-result states visually."]
    },
    reviews: {"es":[{"rating":5,"name":"Clara Méndez (nombre ficticio)","message":"La propuesta se entiende con rapidez. Explicar las estadísticas de cada monstruo antes del duelo."},{"rating":4,"name":"Damián Ortiz (nombre ficticio)","message":"La experiencia puede ser más consistente. Separar visualmente selección, turno y resultado del combate."}],"en":[{"rating":5,"name":"Clara Méndez (fictional name)","message":"The project's direction is easy to understand. Explain each monster's stats before a duel."},{"rating":4,"name":"Damián Ortiz (fictional name)","message":"The experience could be more consistent. Separate selection, turn, and battle-result states visually."}]}
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.","Mantener el puntaje y el objetivo de la partida visibles.","Evitar que un movimiento fuera del tablero parezca aceptado."],
      en: ["Explain how numbers relate to the game's progression goal.","Keep the score and round objective visible.","Prevent off-board moves from appearing to succeed."]
    },
    reviews: {"es":[{"rating":5,"name":"Catalina Paz (nombre ficticio)","message":"La propuesta se entiende con rapidez. Explicar la relación entre los números y la condición de progreso del juego."},{"rating":4,"name":"Franco Núñez (nombre ficticio)","message":"La experiencia puede ser más consistente. Mantener el puntaje y el objetivo de la partida visibles."},{"rating":5,"name":"Pilar Sosa (nombre ficticio)","message":"El enfoque funcional es acertado. Evitar que un movimiento fuera del tablero parezca aceptado."}],"en":[{"rating":5,"name":"Catalina Paz (fictional name)","message":"The project's direction is easy to understand. Explain how numbers relate to the game's progression goal."},{"rating":4,"name":"Franco Núñez (fictional name)","message":"The experience could be more consistent. Keep the score and round objective visible."},{"rating":5,"name":"Pilar Sosa (fictional name)","message":"The functional focus is a good choice. Prevent off-board moves from appearing to succeed."}]}
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse."],
      en: ["Show guessed letters and letters still available."]
    },
    reviews: {"es":[{"rating":5,"name":"Lorenzo Gil (nombre ficticio)","message":"La propuesta se entiende con rapidez. Mostrar las letras elegidas y las que todavía pueden probarse."},{"rating":4,"name":"Violeta Arias (nombre ficticio)","message":"La experiencia puede ser más consistente. Indicar el número de intentos restantes sin depender solo del dibujo."},{"rating":5,"name":"Máximo Figueroa (nombre ficticio)","message":"El enfoque funcional es acertado. Separar victoria, derrota y nueva palabra."}],"en":[{"rating":5,"name":"Lorenzo Gil (fictional name)","message":"The project's direction is easy to understand. Show guessed letters and letters still available."},{"rating":4,"name":"Violeta Arias (fictional name)","message":"The experience could be more consistent. Indicate remaining attempts without relying only on the drawing."},{"rating":5,"name":"Máximo Figueroa (fictional name)","message":"The functional focus is a good choice. Separate win, loss, and new-word states."}]}
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.","Dar una señal clara cuando se completa el cruce."],
      en: ["Keep obstacle speed consistent and readable.","Provide clear feedback when a crossing is completed."]
    },
    reviews: {"es":[{"rating":5,"name":"Abril Correa (nombre ficticio)","message":"La propuesta se entiende con rapidez. Hacer que la velocidad de obstáculos sea consistente y legible."},{"rating":4,"name":"Simón León (nombre ficticio)","message":"La experiencia puede ser más consistente. Dar una señal clara cuando se completa el cruce."}],"en":[{"rating":5,"name":"Abril Correa (fictional name)","message":"The project's direction is easy to understand. Keep obstacle speed consistent and readable."},{"rating":4,"name":"Simón León (fictional name)","message":"The experience could be more consistent. Provide clear feedback when a crossing is completed."}]}
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.","Mantener el salto previsible al aterrizar en plataformas estrechas.","Diferenciar objetos coleccionables de elementos decorativos."],
      en: ["Clearly state each level's goal and completion condition.","Make jumps predictable when landing on narrow platforms.","Distinguish collectibles from decorative objects."]
    },
    reviews: {"es":[{"rating":5,"name":"Amparo Vidal (nombre ficticio)","message":"La propuesta se entiende con rapidez. Indicar con claridad el objetivo y las condiciones de cada nivel."},{"rating":4,"name":"Ramiro Luna (nombre ficticio)","message":"La experiencia puede ser más consistente. Mantener el salto previsible al aterrizar en plataformas estrechas."}],"en":[{"rating":5,"name":"Amparo Vidal (fictional name)","message":"The project's direction is easy to understand. Clearly state each level's goal and completion condition."},{"rating":4,"name":"Ramiro Luna (fictional name)","message":"The experience could be more consistent. Make jumps predictable when landing on narrow platforms."}]}
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar."],
      en: ["Make the round's objective clear before play begins."]
    },
    reviews: {"es":[{"rating":5,"name":"Isabella Marín (nombre ficticio)","message":"La propuesta se entiende con rapidez. Hacer evidente cuál es el objetivo de la ronda antes de empezar."},{"rating":4,"name":"Valentín Acuña (nombre ficticio)","message":"La experiencia puede ser más consistente. Mantener la identidad de Paper Duck sin recargar la pantalla con adornos."},{"rating":5,"name":"Antonella Roldán (nombre ficticio)","message":"El enfoque funcional es acertado. Dar feedback inmediato a cada interacción del jugador."},{"rating":4,"name":"Gael Bravo (nombre ficticio)","message":"Un ajuste concreto para mejorar el resultado: Evitar que el reinicio borre progreso sin una indicación clara."}],"en":[{"rating":5,"name":"Isabella Marín (fictional name)","message":"The project's direction is easy to understand. Make the round's objective clear before play begins."},{"rating":4,"name":"Valentín Acuña (fictional name)","message":"The experience could be more consistent. Keep Paper Duck's identity without overcrowding the screen with decoration."},{"rating":5,"name":"Antonella Roldán (fictional name)","message":"The functional focus is a good choice. Give immediate feedback for every player interaction."},{"rating":4,"name":"Gael Bravo (fictional name)","message":"A concrete improvement would be: Avoid clearing progress on restart without clear indication."}]}
  },
  "otter-rescue": {
    recommendations: {
      es: ["Explicar a quién o qué hay que rescatar y cómo se gana.","Distinguir obstáculos, objetivos y zonas seguras.","Dar señales de colisión y progreso que no dependan solo del color."],
      en: ["Explain what needs rescuing and how to win.","Distinguish obstacles, objectives, and safe areas.","Use collision and progress cues beyond color alone."]
    },
    reviews: {"es":[{"rating":5,"name":"Malena Quiroga (nombre ficticio)","message":"La propuesta se entiende con rapidez. Explicar a quién o qué hay que rescatar y cómo se gana."},{"rating":4,"name":"Ignacio Prieto (nombre ficticio)","message":"La experiencia puede ser más consistente. Distinguir obstáculos, objetivos y zonas seguras."}],"en":[{"rating":5,"name":"Malena Quiroga (fictional name)","message":"The project's direction is easy to understand. Explain what needs rescuing and how to win."},{"rating":4,"name":"Ignacio Prieto (fictional name)","message":"The experience could be more consistent. Distinguish obstacles, objectives, and safe areas."}]}
  },
  "chint": {
    recommendations: {
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.","Separar datos, interpretación y opinión para que el argumento sea rastreable."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.","Separate data, interpretation, and opinion so the argument can be traced."]
    },
    reviews: {"es":[{"rating":5,"name":"Olivia Salas (nombre ficticio)","message":"La propuesta se entiende con rapidez. Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo."},{"rating":4,"name":"Dante Escobar (nombre ficticio)","message":"La experiencia puede ser más consistente. Separar datos, interpretación y opinión para que el argumento sea rastreable."},{"rating":5,"name":"Aitana Rojas (nombre ficticio)","message":"El enfoque funcional es acertado. Usar enlaces de contexto donde se hagan afirmaciones fuertes."}],"en":[{"rating":5,"name":"Olivia Salas (fictional name)","message":"The project's direction is easy to understand. Present the central question about AI and social interaction without overcrowding the first screen."},{"rating":4,"name":"Dante Escobar (fictional name)","message":"The experience could be more consistent. Separate data, interpretation, and opinion so the argument can be traced."},{"rating":5,"name":"Aitana Rojas (fictional name)","message":"The functional focus is a good choice. Link to context for strong claims."}]}
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path."]
    },
    reviews: {"es":[{"rating":5,"name":"Pedro Lozano (nombre ficticio)","message":"La propuesta se entiende con rapidez. Priorizar menú, propuesta gastronómica y forma de reservar o consultar."},{"rating":4,"name":"Milagros Vidal (nombre ficticio)","message":"La experiencia puede ser más consistente. Mostrar ubicación y horarios cerca de la información de contacto."}],"en":[{"rating":5,"name":"Pedro Lozano (fictional name)","message":"The project's direction is easy to understand. Prioritize the menu, food offering, and reservation or inquiry path."},{"rating":4,"name":"Milagros Vidal (fictional name)","message":"The experience could be more consistent. Place location and opening hours near contact details."}]}
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.","Mostrar duración, ubicación y temporada cuando estén disponibles.","Mantener filtros y navegación al cambiar de sección en una SPA."],
      en: ["Organize destinations and experiences around traveler intent.","Show duration, location, and season when available.","Keep filters and navigation consistent across SPA sections."]
    },
    reviews: {"es":[{"rating":5,"name":"Ezequiel Soto (nombre ficticio)","message":"La propuesta se entiende con rapidez. Organizar destinos y experiencias según la intención del viajero."}],"en":[{"rating":5,"name":"Ezequiel Soto (fictional name)","message":"The project's direction is easy to understand. Organize destinations and experiences around traveler intent."}]}
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.","Explicar qué recibe una persona al participar en una mentoría."],
      en: ["Separate paths for students, developers, and professionals.","Explain what someone receives from joining a mentoring program."]
    },
    reviews: {"es":[{"rating":5,"name":"Bianca Peralta (nombre ficticio)","message":"La propuesta se entiende con rapidez. Separar las rutas para estudiantes, desarrolladores y profesionales."},{"rating":4,"name":"Leandro Robles (nombre ficticio)","message":"La experiencia puede ser más consistente. Explicar qué recibe una persona al participar en una mentoría."}],"en":[{"rating":5,"name":"Bianca Peralta (fictional name)","message":"The project's direction is easy to understand. Separate paths for students, developers, and professionals."},{"rating":4,"name":"Leandro Robles (fictional name)","message":"The experience could be more consistent. Explain what someone receives from joining a mentoring program."}]}
  },
  "arkhe": {
    recommendations: {
      es: ["Dar prioridad a la obra y su contexto antes que a la animación.","Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan.","Ofrecer navegación accesible aunque haya interacciones motion.","Respetar la preferencia de movimiento reducido del navegador."],
      en: ["Prioritize each artwork and its context over animation.","Include artist, date, and medium where known.","Keep navigation accessible even with motion interactions.","Respect the browser's reduced-motion preference."]
    },
    reviews: {"es":[{"rating":5,"name":"Carolina Ferreyra (nombre ficticio)","message":"La propuesta se entiende con rapidez. Dar prioridad a la obra y su contexto antes que a la animación."},{"rating":4,"name":"Esteban Ocampo (nombre ficticio)","message":"La experiencia puede ser más consistente. Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan."}],"en":[{"rating":5,"name":"Carolina Ferreyra (fictional name)","message":"The project's direction is easy to understand. Prioritize each artwork and its context over animation."},{"rating":4,"name":"Esteban Ocampo (fictional name)","message":"The experience could be more consistent. Include artist, date, and medium where known."}]}
  },
  "grupo-meridiano": {
    recommendations: {
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.","Permitir distinguir venta y alquiler desde el comienzo."],
      en: ["Show each property's listing type, location, and price consistently.","Make sale and rental listings easy to distinguish from the start."]
    },
    reviews: {"es":[{"rating":5,"name":"Agostina Vázquez (nombre ficticio)","message":"La propuesta se entiende con rapidez. Mostrar operación, ubicación y precio de cada propiedad de forma consistente."},{"rating":4,"name":"Pablo Valle (nombre ficticio)","message":"La experiencia puede ser más consistente. Permitir distinguir venta y alquiler desde el comienzo."},{"rating":5,"name":"Celeste Romero (nombre ficticio)","message":"El enfoque funcional es acertado. Acompañar las fotos con datos clave y no solo texto promocional."}],"en":[{"rating":5,"name":"Agostina Vázquez (fictional name)","message":"The project's direction is easy to understand. Show each property's listing type, location, and price consistently."},{"rating":4,"name":"Pablo Valle (fictional name)","message":"The experience could be more consistent. Make sale and rental listings easy to distinguish from the start."},{"rating":5,"name":"Celeste Romero (fictional name)","message":"The functional focus is a good choice. Pair photos with key facts rather than promotional text alone."}]}
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta."],
      en: ["Translate each administrative service into a concrete task or need."]
    },
    reviews: {"es":[{"rating":5,"name":"Nahuel Domínguez (nombre ficticio)","message":"La propuesta se entiende con rapidez. Traducir cada servicio administrativo a un trámite o necesidad concreta."},{"rating":4,"name":"Lara Ponce (nombre ficticio)","message":"La experiencia puede ser más consistente. Indicar la documentación inicial necesaria para cada consulta."},{"rating":5,"name":"Gabriel Farías (nombre ficticio)","message":"El enfoque funcional es acertado. Separar consultas generales de solicitudes de presupuesto."}],"en":[{"rating":5,"name":"Nahuel Domínguez (fictional name)","message":"The project's direction is easy to understand. Translate each administrative service into a concrete task or need."},{"rating":4,"name":"Lara Ponce (fictional name)","message":"The experience could be more consistent. List the initial documents required for each inquiry."},{"rating":5,"name":"Gabriel Farías (fictional name)","message":"The functional focus is a good choice. Separate general questions from quote requests."}]}
  }
};
