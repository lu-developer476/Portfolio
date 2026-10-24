export type ProjectRecommendations = {
  recommendations: { es: string[]; en: string[] };
};

export const projectRecommendations: Record<string, ProjectRecommendations> = {
  "irbis-supplies": {
    recommendations: {
      es: ["Separar catálogo, estado del carrito y presentación de productos como módulos independientes.", "Mostrar costos y condiciones de compra antes del último paso.", "Mantener los controles de cantidad visibles en pantallas chicas."],
      en: ["Keep catalog, cart state, and product presentation in separate modules.", "Show costs and purchase conditions before the final step.", "Keep quantity controls easy to use on small screens."]
    }
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.", "Distinguir el estado de carga de un catálogo vacío.", "Dar jerarquía a imagen, nombre y precio en las fichas.", "Probar qué sucede si la consulta a la base de datos falla."],
      en: ["Clarify which catalog data is coming from Firebase.", "Differentiate loading states from an empty catalog.", "Prioritize image, name, and price in product details.", "Test what happens when the database request fails."]
    }
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio.", "Incluir fuentes junto a los datos paleontológicos.", "Facilitar la comparación de tamaño y alimentación entre especies."],
      en: ["Organize the encyclopedia by geological period and dinosaur type.", "Include sources alongside paleontology facts.", "Make size and diet comparisons between species easy."]
    }
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.", "Mostrar la operación aplicada junto al resultado.", "Definir cómo se validan entradas vacías y valores fuera de rango.", "Mantener una forma rápida de limpiar y repetir un cálculo."],
      en: ["Group tools by calculation type instead of one undifferentiated list.", "Show the operation used alongside each result.", "Define how empty and out-of-range inputs are validated.", "Provide a quick way to clear and repeat a calculation."]
    }
  },
  "calcu-lenD": {
    recommendations: {
      es: ["Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio.", "Diferenciar tasa de compra, venta y referencia si corresponde.", "Aclarar si los valores son informativos o provienen de una API en vivo."],
      en: ["Display the quote date and time beside an exchange rate.", "Differentiate buy, sell, and reference rates when applicable.", "Clarify whether values are informational or fetched from a live API."]
    }
  },
  "tick-tack-toe": {
    recommendations: {
      es: ["Distinguir con claridad el turno de cada jugador.", "Resolver empate y victoria con mensajes distintos.", "Permitir reiniciar una partida sin recargar la página."],
      en: ["Make each player's turn clearly visible.", "Use distinct messages for a draw and a win.", "Allow a new round without reloading the page."]
    }
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta.", "Mostrar con claridad el contador de minas restantes.", "Evitar que una pulsación accidental marque o abra una casilla en móvil.", "Explicar el resultado cuando se gana o se activa una mina."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells.", "Keep the remaining-mine counter easy to find.", "Prevent accidental flagging or revealing on mobile.", "Explain the outcome after winning or triggering a mine."]
    }
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.", "Explicar los controles de teclado y táctiles en el primer uso.", "Impedir que una entrada inválida cambie el estado del tablero."],
      en: ["Keep current and best scores visible.", "Explain keyboard and touch controls on first use.", "Ensure invalid input does not alter the board state."]
    }
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.", "Distinguir claramente comida, cuerpo y límites del escenario.", "Mostrar la puntuación sin ocultar el área jugable."],
      en: ["Keep movement consistent with the selected speed.", "Clearly distinguish food, the character's body, and arena boundaries.", "Show the score without hiding the play area."]
    }
  },
  "ajedrez": {
    recommendations: {
      es: ["Diferenciar las piezas seleccionadas y las casillas válidas.", "Validar movimientos legales antes de cambiar el tablero.", "Destacar jaque, jaque mate y tablas con mensajes inequívocos.", "Añadir controles táctiles cómodos sin depender solo de arrastrar piezas."],
      en: ["Distinguish selected pieces and legal destination squares.", "Validate legal moves before changing the board.", "Clearly identify check, checkmate, and draws.", "Provide touch controls that do not rely only on dragging pieces."]
    }
  },
  "monster-duelists": {
    recommendations: {
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.", "Separar visualmente selección, turno y resultado del combate.", "Mostrar con claridad qué acción produjo daño y cuánto."],
      en: ["Explain each monster's stats before a duel.", "Separate selection, turn, and battle-result states visually.", "Show which action caused damage and how much."]
    }
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.", "Mantener el puntaje y el objetivo de la partida visibles.", "Evitar que un movimiento fuera del tablero parezca aceptado."],
      en: ["Explain how numbers relate to the game's progression goal.", "Keep the score and round objective visible.", "Prevent off-board moves from appearing to succeed."]
    }
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse.", "Indicar el número de intentos restantes sin depender solo del dibujo.", "Separar victoria, derrota y nueva palabra.", "Revisar que el teclado virtual responda bien en móvil."],
      en: ["Show guessed letters and letters still available.", "Indicate remaining attempts without relying only on the drawing.", "Separate win, loss, and new-word states.", "Ensure the on-screen keyboard works well on mobile."]
    }
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.", "Dar una señal clara cuando se completa el cruce.", "Asegurar que los controles táctiles no tapen la zona de peligro."],
      en: ["Keep obstacle speed consistent and readable.", "Provide clear feedback when a crossing is completed.", "Ensure touch controls do not cover danger zones."]
    }
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.", "Mantener el salto previsible al aterrizar en plataformas estrechas.", "Diferenciar objetos coleccionables de elementos decorativos."],
      en: ["Clearly state each level's goal and completion condition.", "Make jumps predictable when landing on narrow platforms.", "Distinguish collectibles from decorative objects."]
    }
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar.", "Mantener la identidad de Paper Duck sin recargar la pantalla con adornos.", "Dar feedback inmediato a cada interacción del jugador.", "Evitar que el reinicio borre progreso sin una indicación clara."],
      en: ["Make the round's objective clear before play begins.", "Keep Paper Duck's identity without overcrowding the screen with decoration.", "Give immediate feedback for every player interaction.", "Avoid clearing progress on restart without clear indication."]
    }
  },
  "otter-rescue": {
    recommendations: {
      es: ["Explicar a quién o qué hay que rescatar y cómo se gana.", "Distinguir obstáculos, objetivos y zonas seguras.", "Dar señales de colisión y progreso que no dependan solo del color."],
      en: ["Explain what needs rescuing and how to win.", "Distinguish obstacles, objectives, and safe areas.", "Use collision and progress cues beyond color alone."]
    }
  },
  "chint": {
    recommendations: {
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.", "Separar datos, interpretación y opinión para que el argumento sea rastreable.", "Usar enlaces de contexto donde se hagan afirmaciones fuertes."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.", "Separate data, interpretation, and opinion so the argument can be traced.", "Link to context for strong claims."]
    }
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar.", "Mostrar ubicación y horarios cerca de la información de contacto.", "Usar imágenes apetitosas sin sacrificar la velocidad de carga.", "Repetir la acción de reserva después de presentar el menú."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path.", "Place location and opening hours near contact details.", "Use appetizing imagery without sacrificing loading speed.", "Repeat the reservation action after presenting the menu."]
    }
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.", "Mostrar duración, ubicación y temporada cuando estén disponibles.", "Mantener filtros y navegación al cambiar de sección en una SPA."],
      en: ["Organize destinations and experiences around traveler intent.", "Show duration, location, and season when available.", "Keep filters and navigation consistent across SPA sections."]
    }
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.", "Explicar qué recibe una persona al participar en una mentoría.", "Presentar perfiles, especialidades y disponibilidad con criterios comparables."],
      en: ["Separate paths for students, developers, and professionals.", "Explain what someone receives from joining a mentoring program.", "Present profiles, specialties, and availability in comparable ways."]
    }
  },
  "arkhe": {
    recommendations: {
      es: ["Dar prioridad a la obra y su contexto antes que a la animación.", "Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan.", "Ofrecer navegación accesible aunque haya interacciones motion.", "Respetar la preferencia de movimiento reducido del navegador."],
      en: ["Prioritize each artwork and its context over animation.", "Include artist, date, and medium where known.", "Keep navigation accessible even with motion interactions.", "Respect the browser's reduced-motion preference."]
    }
  },
  "grupo-meridiano": {
    recommendations: {
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.", "Permitir distinguir venta y alquiler desde el comienzo.", "Acompañar las fotos con datos clave y no solo texto promocional."],
      en: ["Show each property's listing type, location, and price consistently.", "Make sale and rental listings easy to distinguish from the start.", "Pair photos with key facts rather than promotional text alone."]
    }
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta.", "Indicar la documentación inicial necesaria para cada consulta.", "Separar consultas generales de solicitudes de presupuesto."],
      en: ["Translate each administrative service into a concrete task or need.", "List the initial documents required for each inquiry.", "Separate general questions from quote requests."]
    }
  }
};
