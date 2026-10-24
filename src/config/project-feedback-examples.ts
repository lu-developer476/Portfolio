export type ProjectRecommendations = {
  recommendations: { es: string[]; en: string[] };
};

export const projectRecommendations: Record<string, ProjectRecommendations> = {
  "irbis-supplies": {
    recommendations: {
      es: ["Separar catálogo, estado del carrito y presentación de productos como módulos independientes.","Mostrar costos y condiciones de compra antes del último paso.","Mantener los controles de cantidad visibles en pantallas chicas.","Agregar búsqueda por nombre y categoría para catálogos extensos.","Validar existencias antes de confirmar una compra.","Conservar el carrito al navegar entre páginas.","Explicar qué ocurre cuando un producto deja de estar disponible."],
      en: ["Keep catalog, cart state, and product presentation in separate modules.","Show costs and purchase conditions before the final step.","Keep quantity controls easy to use on small screens.","Add name and category search for larger catalogs.","Validate stock before confirming a purchase.","Preserve the cart when navigating between pages.","Explain what happens when a product becomes unavailable."]
    }
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.","Distinguir el estado de carga de un catálogo vacío.","Dar jerarquía a imagen, nombre y precio en las fichas.","Probar qué sucede si la consulta a la base de datos falla.","Agregar estados de error recuperables si Firebase no responde.","Mantener los filtros al abrir y cerrar una ficha de producto.","Verificar contraste y legibilidad de precios sobre las imágenes."],
      en: ["Clarify which catalog data is coming from Firebase.","Differentiate loading states from an empty catalog.","Prioritize image, name, and price in product details.","Test what happens when the database request fails.","Add recoverable error states when Firebase does not respond.","Preserve filters when opening and closing product details.","Check price contrast and legibility over images."]
    }
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio.","Incluir fuentes junto a los datos paleontológicos.","Facilitar la comparación de tamaño y alimentación entre especies.","Añadir búsqueda por nombre científico y nombre común.","Distinguir las estimaciones científicas de los datos confirmados.","Incluir una ficha breve de hábitat para cada especie.","Optimizar las ilustraciones para que no ralenticen la consulta."],
      en: ["Organize the encyclopedia by geological period and dinosaur type.","Include sources alongside paleontology facts.","Make size and diet comparisons between species easy.","Add search by scientific and common names.","Distinguish scientific estimates from confirmed data.","Include a short habitat entry for each species.","Optimize illustrations so they do not slow browsing."]
    }
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.","Mostrar la operación aplicada junto al resultado.","Definir cómo se validan entradas vacías y valores fuera de rango.","Mantener una forma rápida de limpiar y repetir un cálculo.","Indicar las unidades de entrada y salida en cada herramienta.","Usar ejemplos de entrada que permitan comprobar el resultado.","Evitar redondeos ocultos en operaciones intermedias."],
      en: ["Group tools by calculation type instead of one undifferentiated list.","Show the operation used alongside each result.","Define how empty and out-of-range inputs are validated.","Provide a quick way to clear and repeat a calculation.","Label input and output units in each tool.","Use sample inputs that make results easy to verify.","Avoid hidden rounding in intermediate operations."]
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
      es: ["Distinguir con claridad el turno de cada jugador.","Resolver empate y victoria con mensajes distintos.","Permitir reiniciar una partida sin recargar la página.","Bloquear jugadas después de terminar la partida.","Indicar qué símbolo corresponde a cada jugador durante toda la ronda.","Hacer que el tablero sea usable con teclado y lector de pantalla.","Evitar que el reinicio conserve accidentalmente el resultado anterior."],
      en: ["Make each player's turn clearly visible.","Use distinct messages for a draw and a win.","Allow a new round without reloading the page.","Block moves after the game ends.","Keep each player's symbol visible throughout the round.","Make the board usable with a keyboard and screen reader.","Ensure a restart does not retain the previous result."]
    }
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta.","Mostrar con claridad el contador de minas restantes.","Evitar que una pulsación accidental marque o abra una casilla en móvil.","Explicar el resultado cuando se gana o se activa una mina.","Permitir ajustar la dificultad antes de generar el tablero.","Asegurar que el primer movimiento no termine injustamente la partida, si esa es la regla elegida.","Confirmar que las banderas no se cuentan como casillas reveladas."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells.","Keep the remaining-mine counter easy to find.","Prevent accidental flagging or revealing on mobile.","Explain the outcome after winning or triggering a mine.","Let players choose difficulty before generating the board.","Ensure the first move cannot unfairly end the game if that is the chosen rule.","Make sure flags are not counted as revealed cells."]
    }
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.","Explicar los controles de teclado y táctiles en el primer uso.","Impedir que una entrada inválida cambie el estado del tablero.","Evitar que las teclas mantenidas disparen movimientos involuntarios.","Dar una señal visual cuando dos fichas se fusionan.","Guardar la mejor puntuación entre sesiones cuando corresponda.","Adaptar el tablero a pantallas pequeñas sin cortar fichas."],
      en: ["Keep current and best scores visible.","Explain keyboard and touch controls on first use.","Ensure invalid input does not alter the board state.","Prevent held keys from triggering unintended moves.","Give visual feedback when two tiles merge.","Persist the best score between sessions where appropriate.","Fit the board to small screens without clipping tiles."]
    }
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.","Distinguir claramente comida, cuerpo y límites del escenario.","Mostrar la puntuación sin ocultar el área jugable.","Ajustar la zona de control táctil para que no cubra la partida.","Definir claramente qué ocurre al chocar contra el propio cuerpo.","Evitar saltos bruscos de velocidad al cambiar de nivel.","Mostrar una opción para pausar y reanudar la partida."],
      en: ["Keep movement consistent with the selected speed.","Clearly distinguish food, the character's body, and arena boundaries.","Show the score without hiding the play area.","Keep touch controls from covering the play area.","Define clearly what happens when the character hits its own body.","Avoid sudden speed jumps between levels.","Provide a way to pause and resume the game."]
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
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.","Separar visualmente selección, turno y resultado del combate.","Mostrar con claridad qué acción produjo daño y cuánto.","Explicar las reglas de desempate antes de iniciar el combate.","Mantener visibles los puntos de vida durante cada turno.","Evitar que se pueda ejecutar dos veces una acción por doble clic.","Permitir revisar el resultado antes de iniciar otro duelo."],
      en: ["Explain each monster's stats before a duel.","Separate selection, turn, and battle-result states visually.","Show which action caused damage and how much.","Explain tie-breaking rules before combat begins.","Keep health points visible during every turn.","Prevent double-clicks from executing an action twice.","Let players review the result before starting another duel."]
    }
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.","Mantener el puntaje y el objetivo de la partida visibles.","Evitar que un movimiento fuera del tablero parezca aceptado.","Indicar qué combinaciones de fichas generan progreso.","Confirmar visualmente cada movimiento válido.","Conservar la legibilidad del tablero cuando aumentan los valores.","Distinguir el fin de partida de una pausa o bloqueo temporal."],
      en: ["Explain how numbers relate to the game's progression goal.","Keep the score and round objective visible.","Prevent off-board moves from appearing to succeed.","Explain which tile combinations advance the game.","Provide visual confirmation for every valid move.","Keep the board readable as values grow.","Distinguish game over from a pause or temporary lock."]
    }
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse.","Indicar el número de intentos restantes sin depender solo del dibujo.","Separar victoria, derrota y nueva palabra.","Revisar que el teclado virtual responda bien en móvil.","Elegir palabras adecuadas al idioma seleccionado.","Evitar que una letra repetida consuma otro intento.","Mostrar la palabra completa al finalizar la ronda."],
      en: ["Show guessed letters and letters still available.","Indicate remaining attempts without relying only on the drawing.","Separate win, loss, and new-word states.","Ensure the on-screen keyboard works well on mobile.","Choose words appropriate to the selected language.","Ensure a repeated letter does not consume another attempt.","Reveal the full word when the round ends."]
    }
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.","Dar una señal clara cuando se completa el cruce.","Asegurar que los controles táctiles no tapen la zona de peligro.","Asegurar que las colisiones coincidan con lo que se ve en pantalla.","Aumentar la dificultad de forma gradual entre rondas.","Indicar cuántas vidas o intentos quedan.","Evitar que los obstáculos aparezcan sin tiempo de reacción."],
      en: ["Keep obstacle speed consistent and readable.","Provide clear feedback when a crossing is completed.","Ensure touch controls do not cover danger zones.","Make collisions match what players see on screen.","Increase difficulty gradually between rounds.","Show how many lives or attempts remain.","Avoid spawning obstacles without reaction time."]
    }
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.","Mantener el salto previsible al aterrizar en plataformas estrechas.","Diferenciar objetos coleccionables de elementos decorativos.","Mostrar las vidas restantes y el progreso sin tapar el escenario.","Diferenciar una caída recuperable de una derrota definitiva.","Mantener los controles de salto accesibles en dispositivos táctiles.","Dar una señal clara al recoger una zanahoria o completar un objetivo."],
      en: ["Clearly state each level's goal and completion condition.","Make jumps predictable when landing on narrow platforms.","Distinguish collectibles from decorative objects.","Show remaining lives and progress without covering the scene.","Distinguish a recoverable fall from a definitive loss.","Keep jump controls accessible on touch devices.","Give clear feedback when collecting a carrot or completing an objective."]
    }
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar.","Mantener la identidad de Paper Duck sin recargar la pantalla con adornos.","Dar feedback inmediato a cada interacción del jugador.","Evitar que el reinicio borre progreso sin una indicación clara.","Mantener consistentes los colores y estados de los objetos interactivos.","Hacer que las instrucciones iniciales se puedan consultar durante la ronda.","Asegurar que las animaciones no retrasen la respuesta al tocar."],
      en: ["Make the round's objective clear before play begins.","Keep Paper Duck's identity without overcrowding the screen with decoration.","Give immediate feedback for every player interaction.","Avoid clearing progress on restart without clear indication.","Keep interactive object colors and states consistent.","Let players revisit the initial instructions during a round.","Ensure animations do not delay touch responses."]
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
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.","Separar datos, interpretación y opinión para que el argumento sea rastreable.","Usar enlaces de contexto donde se hagan afirmaciones fuertes.","Definir los términos clave antes de usarlos en el argumento.","Separar con claridad las fuentes primarias de los comentarios editoriales.","Asegurar que los enlaces externos indiquen a dónde conducen.","Cerrar la página con una síntesis que responda la pregunta inicial."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.","Separate data, interpretation, and opinion so the argument can be traced.","Link to context for strong claims.","Define key terms before using them in the argument.","Clearly separate primary sources from editorial commentary.","Make external links clear about where they lead.","End with a synthesis that answers the opening question."]
    }
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar.","Mostrar ubicación y horarios cerca de la información de contacto.","Usar imágenes apetitosas sin sacrificar la velocidad de carga.","Repetir la acción de reserva después de presentar el menú.","Aclarar qué platos requieren consulta previa o disponibilidad estacional.","Hacer que el menú se lea bien desde el móvil.","Indicar alternativas de contacto si no funciona el formulario."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path.","Place location and opening hours near contact details.","Use appetizing imagery without sacrificing loading speed.","Repeat the reservation action after presenting the menu.","Clarify which dishes require prior inquiry or seasonal availability.","Keep the menu readable on mobile.","Provide alternate contact options if the form fails."]
    }
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.","Mostrar duración, ubicación y temporada cuando estén disponibles.","Mantener filtros y navegación al cambiar de sección en una SPA.","Permitir volver a los resultados después de consultar un destino.","Usar criterios uniformes para describir cada experiencia.","Evitar filtros que devuelvan resultados vacíos sin explicación.","Facilitar el acceso a consultas y reservas desde cada destino."],
      en: ["Organize destinations and experiences around traveler intent.","Show duration, location, and season when available.","Keep filters and navigation consistent across SPA sections.","Let visitors return to results after viewing a destination.","Use consistent criteria to describe each experience.","Explain when filters return no results.","Make inquiries and bookings accessible from each destination."]
    }
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.","Explicar qué recibe una persona al participar en una mentoría.","Presentar perfiles, especialidades y disponibilidad con criterios comparables.","Explicar el proceso de inscripción paso a paso.","Indicar los requisitos previos de cada ruta formativa.","Evitar prometer resultados laborales que no estén garantizados.","Hacer accesibles los formularios de contacto desde móvil."],
      en: ["Separate paths for students, developers, and professionals.","Explain what someone receives from joining a mentoring program.","Present profiles, specialties, and availability in comparable ways.","Explain the enrollment process step by step.","List prerequisites for each learning path.","Avoid promising employment outcomes that are not guaranteed.","Make contact forms accessible on mobile."]
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
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.","Permitir distinguir venta y alquiler desde el comienzo.","Acompañar las fotos con datos clave y no solo texto promocional.","Añadir filtros por ubicación y rango de precio cuando haya suficientes propiedades.","Mantener actualizada la disponibilidad de cada publicación.","Mostrar gastos y condiciones relevantes junto al precio.","Hacer que la consulta de una propiedad incluya su identificador o enlace."],
      en: ["Show each property's listing type, location, and price consistently.","Make sale and rental listings easy to distinguish from the start.","Pair photos with key facts rather than promotional text alone.","Add location and price-range filters when enough properties are listed.","Keep each listing's availability up to date.","Show relevant fees and conditions alongside the price.","Include the property's identifier or link in inquiries."]
    }
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta.","Indicar la documentación inicial necesaria para cada consulta.","Separar consultas generales de solicitudes de presupuesto.","Indicar plazos aproximados solo cuando estén confirmados.","Explicar qué datos personales son necesarios antes de enviar un formulario.","Hacer visibles los canales de contacto y sus horarios de atención.","Evitar que el texto prometa resultados administrativos garantizados."],
      en: ["Translate each administrative service into a concrete task or need.","List the initial documents required for each inquiry.","Separate general questions from quote requests.","Give estimated timelines only when confirmed.","Explain what personal data is needed before submitting a form.","Make contact channels and service hours easy to find.","Avoid wording that promises guaranteed administrative outcomes."]
    }
  }
};
