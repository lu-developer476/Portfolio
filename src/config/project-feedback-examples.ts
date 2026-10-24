export type ProjectRecommendations = {
  recommendations: { es: string[]; en: string[] };
};

export const projectRecommendations: Record<string, ProjectRecommendations> = {
  "irbis-supplies": {
    recommendations: {
      es: ["Separar catálogo, estado del carrito y presentación de productos como módulos independientes.","Mostrar costos y condiciones de compra antes del último paso.","Mantener los controles de cantidad visibles en pantallas chicas.","Agregar búsqueda por nombre y categoría para catálogos extensos.","Validar existencias antes de confirmar una compra."],
      en: ["Keep catalog, cart state, and product presentation in separate modules.","Show costs and purchase conditions before the final step.","Keep quantity controls easy to use on small screens.","Add name and category search for larger catalogs.","Validate stock before confirming a purchase."]
    }
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.","Distinguir el estado de carga de un catálogo vacío.","Dar jerarquía a imagen, nombre y precio en las fichas.","Probar qué sucede si la consulta a la base de datos falla."],
      en: ["Clarify which catalog data is coming from Firebase.","Differentiate loading states from an empty catalog.","Prioritize image, name, and price in product details.","Test what happens when the database request fails."]
    }
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio.","Incluir fuentes junto a los datos paleontológicos.","Facilitar la comparación de tamaño y alimentación entre especies.","Añadir búsqueda por nombre científico y nombre común.","Distinguir las estimaciones científicas de los datos confirmados.","Incluir una ficha breve de hábitat para cada especie."],
      en: ["Organize the encyclopedia by geological period and dinosaur type.","Include sources alongside paleontology facts.","Make size and diet comparisons between species easy.","Add search by scientific and common names.","Distinguish scientific estimates from confirmed data.","Include a short habitat entry for each species."]
    }
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.","Mostrar la operación aplicada junto al resultado.","Definir cómo se validan entradas vacías y valores fuera de rango."],
      en: ["Group tools by calculation type instead of one undifferentiated list.","Show the operation used alongside each result.","Define how empty and out-of-range inputs are validated."]
    }
  },
  "calcu-lenD": {
    recommendations: {
      es: ["Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio.","Diferenciar tasa de compra, venta y referencia si corresponde.","Aclarar si los valores son informativos o provienen de una API en vivo.","Indicar la moneda base y la moneda de destino antes de convertir.","Mostrar el resultado con una precisión coherente con la tasa usada.","Permitir invertir rápidamente las monedas seleccionadas.","Informar cuándo no se pudo actualizar la cotización."],
      en: ["Display the quote date and time beside an exchange rate.","Differentiate buy, sell, and reference rates when applicable.","Clarify whether values are informational or fetched from a live API.","Show the base and target currencies before converting.","Format results consistently with the rate used.","Allow users to swap the selected currencies quickly.","Explain when a quote could not be refreshed."]
    }
  },
  "tick-tack-toe": {
    recommendations: {
      es: ["Distinguir con claridad el turno de cada jugador.","Resolver empate y victoria con mensajes distintos.","Permitir reiniciar una partida sin recargar la página.","Bloquear jugadas después de terminar la partida."],
      en: ["Make each player's turn clearly visible.","Use distinct messages for a draw and a win.","Allow a new round without reloading the page.","Block moves after the game ends."]
    }
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta.","Mostrar con claridad el contador de minas restantes.","Evitar que una pulsación accidental marque o abra una casilla en móvil.","Explicar el resultado cuando se gana o se activa una mina.","Permitir ajustar la dificultad antes de generar el tablero."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells.","Keep the remaining-mine counter easy to find.","Prevent accidental flagging or revealing on mobile.","Explain the outcome after winning or triggering a mine.","Let players choose difficulty before generating the board."]
    }
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.","Explicar los controles de teclado y táctiles en el primer uso.","Impedir que una entrada inválida cambie el estado del tablero.","Evitar que las teclas mantenidas disparen movimientos involuntarios.","Dar una señal visual cuando dos fichas se fusionan.","Guardar la mejor puntuación entre sesiones cuando corresponda."],
      en: ["Keep current and best scores visible.","Explain keyboard and touch controls on first use.","Ensure invalid input does not alter the board state.","Prevent held keys from triggering unintended moves.","Give visual feedback when two tiles merge.","Persist the best score between sessions where appropriate."]
    }
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.","Distinguir claramente comida, cuerpo y límites del escenario.","Mostrar la puntuación sin ocultar el área jugable."],
      en: ["Keep movement consistent with the selected speed.","Clearly distinguish food, the character's body, and arena boundaries.","Show the score without hiding the play area."]
    }
  },
  "ajedrez": {
    recommendations: {
      es: ["Diferenciar las piezas seleccionadas y las casillas válidas.","Validar movimientos legales antes de cambiar el tablero.","Destacar jaque, jaque mate y tablas con mensajes inequívocos.","Añadir controles táctiles cómodos sin depender solo de arrastrar piezas.","Mostrar las piezas capturadas sin confundirlas con las activas.","Permitir deshacer una jugada si el modo de juego lo contempla.","Mantener el reloj y el turno sincronizados en partidas temporizadas."],
      en: ["Distinguish selected pieces and legal destination squares.","Validate legal moves before changing the board.","Clearly identify check, checkmate, and draws.","Provide touch controls that do not rely only on dragging pieces.","Show captured pieces without confusing them with active ones.","Allow undo when supported by the selected game mode.","Keep the clock and turn synchronized in timed games."]
    }
  },
  "monster-duelists": {
    recommendations: {
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.","Separar visualmente selección, turno y resultado del combate.","Mostrar con claridad qué acción produjo daño y cuánto.","Explicar las reglas de desempate antes de iniciar el combate."],
      en: ["Explain each monster's stats before a duel.","Separate selection, turn, and battle-result states visually.","Show which action caused damage and how much.","Explain tie-breaking rules before combat begins."]
    }
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.","Mantener el puntaje y el objetivo de la partida visibles.","Evitar que un movimiento fuera del tablero parezca aceptado.","Indicar qué combinaciones de fichas generan progreso.","Confirmar visualmente cada movimiento válido."],
      en: ["Explain how numbers relate to the game's progression goal.","Keep the score and round objective visible.","Prevent off-board moves from appearing to succeed.","Explain which tile combinations advance the game.","Provide visual confirmation for every valid move."]
    }
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse.","Indicar el número de intentos restantes sin depender solo del dibujo.","Separar victoria, derrota y nueva palabra.","Revisar que el teclado virtual responda bien en móvil.","Elegir palabras adecuadas al idioma seleccionado.","Evitar que una letra repetida consuma otro intento."],
      en: ["Show guessed letters and letters still available.","Indicate remaining attempts without relying only on the drawing.","Separate win, loss, and new-word states.","Ensure the on-screen keyboard works well on mobile.","Choose words appropriate to the selected language.","Ensure a repeated letter does not consume another attempt."]
    }
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.","Dar una señal clara cuando se completa el cruce.","Asegurar que los controles táctiles no tapen la zona de peligro."],
      en: ["Keep obstacle speed consistent and readable.","Provide clear feedback when a crossing is completed.","Ensure touch controls do not cover danger zones."]
    }
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.","Mantener el salto previsible al aterrizar en plataformas estrechas.","Diferenciar objetos coleccionables de elementos decorativos.","Mostrar las vidas restantes y el progreso sin tapar el escenario.","Diferenciar una caída recuperable de una derrota definitiva."],
      en: ["Clearly state each level's goal and completion condition.","Make jumps predictable when landing on narrow platforms.","Distinguish collectibles from decorative objects.","Show remaining lives and progress without covering the scene.","Distinguish a recoverable fall from a definitive loss."]
    }
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar.","Mantener la identidad de Paper Duck sin recargar la pantalla con adornos.","Dar feedback inmediato a cada interacción del jugador.","Evitar que el reinicio borre progreso sin una indicación clara."],
      en: ["Make the round's objective clear before play begins.","Keep Paper Duck's identity without overcrowding the screen with decoration.","Give immediate feedback for every player interaction.","Avoid clearing progress on restart without clear indication."]
    }
  },
  "otter-rescue": {
    recommendations: {
      es: ["Explicar a quién o qué hay que rescatar y cómo se gana.","Distinguir obstáculos, objetivos y zonas seguras.","Dar señales de colisión y progreso que no dependan solo del color.","Indicar cuántos objetivos quedan por rescatar.","Hacer legibles las instrucciones antes de que empiece el movimiento.","Asegurar que las zonas seguras se distingan también en pantallas pequeñas.","Dar feedback específico cuando se pierde una oportunidad."],
      en: ["Explain what needs rescuing and how to win.","Distinguish obstacles, objectives, and safe areas.","Use collision and progress cues beyond color alone.","Show how many rescue objectives remain.","Make instructions readable before movement begins.","Keep safe zones distinguishable on small screens too.","Give specific feedback when an opportunity is lost."]
    }
  },
  "chint": {
    recommendations: {
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.","Separar datos, interpretación y opinión para que el argumento sea rastreable.","Usar enlaces de contexto donde se hagan afirmaciones fuertes.","Definir los términos clave antes de usarlos en el argumento.","Separar con claridad las fuentes primarias de los comentarios editoriales.","Asegurar que los enlaces externos indiquen a dónde conducen."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.","Separate data, interpretation, and opinion so the argument can be traced.","Link to context for strong claims.","Define key terms before using them in the argument.","Clearly separate primary sources from editorial commentary.","Make external links clear about where they lead."]
    }
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar.","Mostrar ubicación y horarios cerca de la información de contacto.","Usar imágenes apetitosas sin sacrificar la velocidad de carga."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path.","Place location and opening hours near contact details.","Use appetizing imagery without sacrificing loading speed."]
    }
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.","Mostrar duración, ubicación y temporada cuando estén disponibles.","Mantener filtros y navegación al cambiar de sección en una SPA.","Permitir volver a los resultados después de consultar un destino."],
      en: ["Organize destinations and experiences around traveler intent.","Show duration, location, and season when available.","Keep filters and navigation consistent across SPA sections.","Let visitors return to results after viewing a destination."]
    }
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.","Explicar qué recibe una persona al participar en una mentoría.","Presentar perfiles, especialidades y disponibilidad con criterios comparables.","Explicar el proceso de inscripción paso a paso.","Indicar los requisitos previos de cada ruta formativa."],
      en: ["Separate paths for students, developers, and professionals.","Explain what someone receives from joining a mentoring program.","Present profiles, specialties, and availability in comparable ways.","Explain the enrollment process step by step.","List prerequisites for each learning path."]
    }
  },
  "arkhe": {
    recommendations: {
      es: ["Dar prioridad a la obra y su contexto antes que a la animación.","Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan.","Ofrecer navegación accesible aunque haya interacciones motion.","Respetar la preferencia de movimiento reducido del navegador.","Asegurar que las imágenes tengan texto alternativo útil.","Permitir ampliar una obra sin perder el contexto de su ficha.","Mantener tipografía y contraste cómodos en textos curatoriales largos."],
      en: ["Prioritize each artwork and its context over animation.","Include artist, date, and medium where known.","Keep navigation accessible even with motion interactions.","Respect the browser's reduced-motion preference.","Give images useful alternative text.","Allow artwork to be enlarged without losing its context.","Keep typography and contrast comfortable for long curatorial text."]
    }
  },
  "grupo-meridiano": {
    recommendations: {
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.","Permitir distinguir venta y alquiler desde el comienzo.","Acompañar las fotos con datos clave y no solo texto promocional.","Añadir filtros por ubicación y rango de precio cuando haya suficientes propiedades."],
      en: ["Show each property's listing type, location, and price consistently.","Make sale and rental listings easy to distinguish from the start.","Pair photos with key facts rather than promotional text alone.","Add location and price-range filters when enough properties are listed."]
    }
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta.","Indicar la documentación inicial necesaria para cada consulta.","Separar consultas generales de solicitudes de presupuesto.","Indicar plazos aproximados solo cuando estén confirmados.","Explicar qué datos personales son necesarios antes de enviar un formulario.","Hacer visibles los canales de contacto y sus horarios de atención."],
      en: ["Translate each administrative service into a concrete task or need.","List the initial documents required for each inquiry.","Separate general questions from quote requests.","Give estimated timelines only when confirmed.","Explain what personal data is needed before submitting a form.","Make contact channels and service hours easy to find."]
    }
  }
};
