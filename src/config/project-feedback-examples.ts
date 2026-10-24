export type ProjectFeedbackExample = {
  recommendations: { es: string[]; en: string[] };
  comments: Array<{ rating: number; es: string; en: string }>;
};

// These are editorial examples, not visitor submissions or verified testimonials.
export const projectFeedbackExamples: Record<string, ProjectFeedbackExample> = {
  "irbis-supplies": {
    recommendations: {
      es: ["Separar catálogo, estado del carrito y presentación de productos como módulos independientes.", "Mostrar costos y condiciones de compra antes del último paso.", "Mantener los controles de cantidad visibles en pantallas chicas."],
      en: ["Keep catalog, cart state, and product presentation in separate modules.", "Show costs and purchase conditions before the final step.", "Keep quantity controls easy to use on small screens."]
    },
    comments: [
      { rating: 5, es: "La refactorización modular le da más sentido a una tienda hecha con JavaScript vanilla; es una buena base para seguir agregando funciones sin mezclar todo.", en: "The modular refactor makes a vanilla-JavaScript store easier to extend without mixing every feature together." },
      { rating: 4, es: "La idea funciona como práctica de e-commerce. Para el siguiente paso, explicaría mejor qué datos se mantienen al volver al catálogo.", en: "It works well as an e-commerce exercise. Next, I would make it clearer which data stays available when returning to the catalog." },
      { rating: 3, es: "Se entiende el objetivo comercial, aunque la experiencia ganaría con estados vacíos y mensajes de carrito más explícitos.", en: "The store's purpose is clear, but empty states and cart messages could be more explicit." },
      { rating: 4, es: "Me interesa que sea una tienda ficticia refactorizada y no solo una maqueta visual; sumaría pruebas para los cálculos del carrito.", en: "I like that this is a refactored fictional store rather than only a visual mockup; tests for cart calculations would be a useful addition." }
    ]
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.", "Distinguir el estado de carga de un catálogo vacío.", "Dar jerarquía a imagen, nombre y precio en las fichas.", "Probar qué sucede si la consulta a la base de datos falla."],
      en: ["Clarify which catalog data is coming from Firebase.", "Differentiate loading states from an empty catalog.", "Prioritize image, name, and price in product details.", "Test what happens when the database request fails."]
    },
    comments: [
      { rating: 5, es: "La base de datos integrada eleva el ejercicio respecto de una tienda estática; es un buen caso para mostrar manejo de datos en React.", en: "The integrated database makes this more useful than a static store; it demonstrates a practical React data-flow case." },
      { rating: 4, es: "La combinación de tienda y persistencia es pertinente. Me gustaría ver un mensaje claro si Firebase tarda o no responde.", en: "Combining a store with persistence is relevant. A clear message when Firebase is slow or unavailable would help." },
      { rating: 3, es: "La parte técnica tiene potencial, pero una indicación visible de carga evitaría pensar que el catálogo quedó vacío.", en: "The technical setup has potential, but a visible loading state would prevent users from assuming the catalog is empty." },
    ]
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio.", "Incluir fuentes junto a los datos paleontológicos.", "Facilitar la comparación de tamaño y alimentación entre especies."],
      en: ["Organize the encyclopedia by geological period and dinosaur type.", "Include sources alongside paleontology facts.", "Make size and diet comparisons between species easy."]
    },
    comments: [
      { rating: 5, es: "La temática tiene identidad propia y permite mostrar bastante más que una landing; las fichas comparables serían una evolución natural para una enciclopedia.", en: "The topic has its own identity and can demonstrate more than a landing page; comparable species entries are a natural next step." },
      { rating: 4, es: "Es fácil entender para qué sirve Dinosauria. Agregaría referencias a las fuentes para separar datos científicos de elementos de cultura popular.", en: "Dinosauria's purpose is easy to understand. I would add sources to distinguish scientific facts from pop-culture references." },
      { rating: 4, es: "Buena idea para practicar contenido estructurado. Los filtros por período y alimentación aportarían más valor que sumar texto sin organización.", en: "A good structured-content project. Filters for period and diet would add more value than simply adding more text." },
    ]
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.", "Mostrar la operación aplicada junto al resultado.", "Definir cómo se validan entradas vacías y valores fuera de rango.", "Mantener una forma rápida de limpiar y repetir un cálculo."],
      en: ["Group tools by calculation type instead of one undifferentiated list.", "Show the operation used alongside each result.", "Define how empty and out-of-range inputs are validated.", "Provide a quick way to clear and repeat a calculation."]
    },
    comments: [
      { rating: 4, es: "Una calculadora integral es una buena oportunidad para organizar muchas pequeñas utilidades sin que compitan entre sí; la navegación entre tipos de cálculo es clave.", en: "An all-purpose calculator is a good test of how to organize many small tools without making them compete; navigation between calculation types matters." },
      { rating: 5, es: "El valor está en reunir operaciones distintas en un solo lugar. Añadir ejemplos cortos junto a las fórmulas menos obvias ayudaría a nuevos usuarios.", en: "Its value is bringing different operations together. Short examples beside less familiar formulas would help new users." },
      { rating: 3, es: "El alcance es ambicioso, pero una lista larga de herramientas puede abrumar. Priorizar las más usadas mejoraría el primer recorrido.", en: "The scope is ambitious, but a long tool list can overwhelm. Prioritizing common calculations would improve the first visit." },
    ]
  },
  "calcu-lenD": {
    recommendations: {
      es: ["Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio.", "Diferenciar tasa de compra, venta y referencia si corresponde.", "Aclarar si los valores son informativos o provienen de una API en vivo."],
      en: ["Display the quote date and time beside an exchange rate.", "Differentiate buy, sell, and reference rates when applicable.", "Clarify whether values are informational or fetched from a live API."]
    },
    comments: [
      { rating: 4, es: "El convertidor resuelve una necesidad concreta, pero en monedas la confianza depende mucho de saber de cuándo es la cotización y de dónde sale.", en: "The converter addresses a real need, but currency tools depend on users knowing when a rate was updated and where it came from." },
      { rating: 4, es: "La idea de tener una herramienta separada de Calcu-len tiene sentido. Haría muy visible que es no oficial y no usaría cifras sin contexto.", en: "Keeping this separate from Calcu-len makes sense. I would make the unofficial status clear and avoid showing rates without context." },
      { rating: 3, es: "Como utilidad rápida funciona como concepto; para usarlo en decisiones reales necesitaría fuente, actualización y aclaración de comisiones.", en: "It makes sense as a quick utility; real decisions would require a source, update time, and fee disclaimer." },
      { rating: 5, es: "La conversión de monedas tiene un propósito claro y fácil de explicar. La trazabilidad de cada tasa sería el detalle que más elevaría el proyecto.", en: "Currency conversion has a clear, easy-to-explain purpose. Rate traceability would be the improvement that adds the most value." }
    ]
  },
  "tick-tack-toe": {
    recommendations: {
      es: ["Distinguir con claridad el turno de cada jugador.", "Resolver empate y victoria con mensajes distintos.", "Permitir reiniciar una partida sin recargar la página."],
      en: ["Make each player's turn clearly visible.", "Use distinct messages for a draw and a win.", "Allow a new round without reloading the page."]
    },
    comments: [
      { rating: 5, es: "El tres en raya tiene reglas conocidas, así que los detalles de interacción importan más que explicar el juego. El estado del turno debe quedar a la vista.", en: "Tic-tac-toe has familiar rules, so interaction details matter more than explaining the game. The active turn should always be visible." },
      { rating: 4, es: "Es un buen proyecto acotado para practicar lógica de estados y reinicio. También comprobaría que una celda ocupada no pueda modificarse.", en: "It is a well-scoped project for state logic and restarting. I would also ensure an occupied cell cannot be changed." },
      { rating: 3, es: "La mecánica es simple, pero los mensajes de final de partida hacen la diferencia; conviene evitar que el jugador tenga que deducir si hubo empate.", en: "The mechanics are simple, but end-game messages matter; players should not have to infer whether the round ended in a draw." },
    ]
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta.", "Mostrar con claridad el contador de minas restantes.", "Evitar que una pulsación accidental marque o abra una casilla en móvil.", "Explicar el resultado cuando se gana o se activa una mina."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells.", "Keep the remaining-mine counter easy to find.", "Prevent accidental flagging or revealing on mobile.", "Explain the outcome after winning or triggering a mine."]
    },
    comments: [
      { rating: 5, es: "Buscaminas exige que cada estado de casilla se entienda al instante. La legibilidad de números y banderas es parte central de la jugabilidad.", en: "Minesweeper depends on each cell state being instantly recognizable. Number and flag legibility are core to the gameplay." },
      { rating: 4, es: "Es una buena recreación de lógica clásica; probaría la primera jugada para que no resulte frustrante por una mina inevitable.", en: "It is a good recreation of a classic logic game; I would test the first move so it does not feel unfair because of an unavoidable mine." },
      { rating: 3, es: "La dificultad del juego no debería venir de controles poco claros. En móvil, el gesto para marcar una bandera necesita especial cuidado.", en: "The difficulty should come from the puzzle, not unclear controls. On mobile, flagging needs particular care." },
    ]
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.", "Explicar los controles de teclado y táctiles en el primer uso.", "Impedir que una entrada inválida cambie el estado del tablero."],
      en: ["Keep current and best scores visible.", "Explain keyboard and touch controls on first use.", "Ensure invalid input does not alter the board state."]
    },
    comments: [
      { rating: 4, es: "2048 se entiende rápido si el movimiento de fichas es consistente. La sensación de control depende mucho de que cada deslizamiento se registre una sola vez.", en: "2048 is easy to understand when tile movement is consistent. The sense of control depends on each swipe being registered exactly once." },
      { rating: 5, es: "Es una elección sólida para mostrar manejo de teclado, cuadrícula y estado de juego sin necesitar una explicación larga.", en: "It is a solid choice for demonstrating keyboard input, a grid, and game state without a long explanation." },
      { rating: 3, es: "Para que la partida sea más legible, separaría visualmente la mejor puntuación del puntaje de la ronda actual.", en: "I would visually separate the best score from the current round score to make progress easier to read." },
      { rating: 4, es: "El reto principal está en que los movimientos se sientan previsibles. También sumaría una confirmación antes de reiniciar una partida avanzada.", en: "The main challenge is making movement predictable. I would also confirm before restarting an advanced game." }
    ]
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.", "Distinguir claramente comida, cuerpo y límites del escenario.", "Mostrar la puntuación sin ocultar el área jugable."],
      en: ["Keep movement consistent with the selected speed.", "Clearly distinguish food, the character's body, and arena boundaries.", "Show the score without hiding the play area."]
    },
    comments: [
      { rating: 4, es: "Un juego de movimiento continuo necesita controles previsibles; cuidaría que las teclas no cambien de comportamiento según el foco del navegador.", en: "A continuous-movement game needs predictable controls; keys should not behave differently depending on browser focus." },
      { rating: 5, es: "La propuesta se presta a partidas cortas y repetibles. El marcador y un reinicio inmediato ayudan a que una derrota no corte el ritmo.", en: "The concept suits short, repeatable rounds. A score display and quick restart keep a loss from breaking the flow." },
      { rating: 3, es: "La velocidad puede volverlo desafiante, pero conviene que el jugador sepa cuándo perdió y por qué ocurrió la colisión.", en: "Speed can make it challenging, but players should understand when they lost and what caused the collision." },
    ]
  },
  "ajedrez": {
    recommendations: {
      es: ["Diferenciar las piezas seleccionadas y las casillas válidas.", "Validar movimientos legales antes de cambiar el tablero.", "Destacar jaque, jaque mate y tablas con mensajes inequívocos.", "Añadir controles táctiles cómodos sin depender solo de arrastrar piezas."],
      en: ["Distinguish selected pieces and legal destination squares.", "Validate legal moves before changing the board.", "Clearly identify check, checkmate, and draws.", "Provide touch controls that do not rely only on dragging pieces."]
    },
    comments: [
      { rating: 5, es: "El ajedrez pone a prueba muchas reglas además de dibujar un tablero. Señalar movimientos legales ayuda a entender la interacción sin resolverle la partida al jugador.", en: "Chess tests many rules beyond drawing a board. Showing legal moves helps explain interaction without solving the game for the player." },
      { rating: 4, es: "El tablero es una base reconocible, pero la calidad depende de cubrir enroque, promoción y detección de jaque con las mismas reglas.", en: "The board is a familiar foundation, but quality depends on handling castling, promotion, and check detection consistently." },
      { rating: 3, es: "Antes de sumar modos, priorizaría que no se permita mover una pieza clavada ni dejar al propio rey en jaque.", en: "Before adding modes, I would prioritize preventing pinned-piece moves and moves that leave the player's own king in check." },
    ]
  },
  "monster-duelists": {
    recommendations: {
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.", "Separar visualmente selección, turno y resultado del combate.", "Mostrar con claridad qué acción produjo daño y cuánto."],
      en: ["Explain each monster's stats before a duel.", "Separate selection, turn, and battle-result states visually.", "Show which action caused damage and how much."]
    },
    comments: [
      { rating: 4, es: "La temática de duelos puede diferenciarlo de un minijuego clásico. Las estadísticas deberían influir de forma comprensible, no sentirse como números decorativos.", en: "The duel theme can distinguish it from a classic mini-game. Stats should affect play in a way users can understand, not feel decorative." },
      { rating: 5, es: "El nombre promete enfrentamientos y progresión; un registro corto de cada turno haría más fácil entender por qué ganó un monstruo.", en: "The concept promises battles and progression; a short turn log would make it easier to understand why a monster won." },
      { rating: 3, es: "La propuesta necesita reglas visibles para que el resultado no parezca arbitrario, sobre todo si existen habilidades distintas por personaje.", en: "The rules need to be visible so outcomes do not feel arbitrary, especially if monsters have different abilities." },
      { rating: 4, es: "Me centraría en que las decisiones del jugador tengan una consecuencia clara: daño, defensa o ventaja deberían explicarse en el momento.", en: "I would make each player choice have a clear consequence: damage, defense, or advantage should be explained as it happens." }
    ]
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.", "Mantener el puntaje y el objetivo de la partida visibles.", "Evitar que un movimiento fuera del tablero parezca aceptado."],
      en: ["Explain how numbers relate to the game's progression goal.", "Keep the score and round objective visible.", "Prevent off-board moves from appearing to succeed."]
    },
    comments: [
      { rating: 4, es: "El nombre genera una expectativa de juego numérico; conviene explicar la regla central en una frase antes del primer movimiento.", en: "The title suggests a number game; the core rule should be explained in one sentence before the first move." },
      { rating: 4, es: "Como variante de puzle, la clave es que cada acción tenga una respuesta visual clara y que la progresión no dependa de adivinar reglas.", en: "As a puzzle variant, each action needs clear visual feedback so progress does not depend on guessing the rules." },
      { rating: 3, es: "Revisaría la legibilidad de los números en todos los estados del tablero y evitaría que colores parecidos dificulten distinguir valores.", en: "I would check number legibility in every board state and avoid similar colors making values hard to distinguish." },
    ]
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse.", "Indicar el número de intentos restantes sin depender solo del dibujo.", "Separar victoria, derrota y nueva palabra.", "Revisar que el teclado virtual responda bien en móvil."],
      en: ["Show guessed letters and letters still available.", "Indicate remaining attempts without relying only on the drawing.", "Separate win, loss, and new-word states.", "Ensure the on-screen keyboard works well on mobile."]
    },
    comments: [
      { rating: 5, es: "El ahorcado tiene una regla sencilla y por eso el estado debe ser muy claro: letras acertadas, errores y oportunidades restantes.", en: "Hangman has simple rules, so the state should be clear: correct letters, mistakes, and attempts left." },
      { rating: 4, es: "El juego funciona como ejercicio de validación de entradas. También conviene bloquear letras repetidas para que no descuenten intentos dos veces.", en: "It works well as an input-validation exercise. Repeated letters should not consume another attempt." },
      { rating: 3, es: "Una pista o categoría inicial haría la partida menos azarosa, especialmente si el vocabulario incluye palabras poco comunes.", en: "A starting hint or category would make the game feel less random, especially if the word list includes uncommon terms." },
    ]
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.", "Dar una señal clara cuando se completa el cruce.", "Asegurar que los controles táctiles no tapen la zona de peligro."],
      en: ["Keep obstacle speed consistent and readable.", "Provide clear feedback when a crossing is completed.", "Ensure touch controls do not cover danger zones."]
    },
    comments: [
      { rating: 4, es: "La premisa de cruzar obstáculos se entiende rápido. La dificultad debería subir por etapas y no por cambios bruscos que parezcan injustos.", en: "The obstacle-crossing premise is easy to grasp. Difficulty should rise in steps rather than through sudden, unfair-feeling changes." },
      { rating: 5, es: "Es un buen formato para trabajar tiempo de respuesta y feedback inmediato; cada choque o cruce exitoso debería tener una señal inequívoca.", en: "It is a good format for testing response timing and immediate feedback; every collision or successful crossing should be unmistakable." },
      { rating: 3, es: "Revisaría el control desde teclado y móvil por separado. Si el salto responde tarde, el jugador puede atribuirlo a una colisión injusta.", en: "I would test keyboard and mobile controls separately. Delayed jumps can make a collision feel unfair." },
      { rating: 4, es: "Una pantalla de inicio breve con controles y objetivo ahorraría intentos perdidos sin convertir el juego en un tutorial largo.", en: "A short start screen explaining controls and the goal would prevent wasted attempts without turning the game into a long tutorial." }
    ]
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.", "Mantener el salto previsible al aterrizar en plataformas estrechas.", "Diferenciar objetos coleccionables de elementos decorativos."],
      en: ["Clearly state each level's goal and completion condition.", "Make jumps predictable when landing on narrow platforms.", "Distinguish collectibles from decorative objects."]
    },
    comments: [
      { rating: 5, es: "El concepto de aventura con un conejo se presta a niveles cortos y objetivos claros; el control del salto es lo que más cuidaría.", en: "A bunny adventure suits short levels and clear goals; jump control is the mechanic I would focus on most." },
      { rating: 4, es: "La identidad visual puede ayudar a que el juego se destaque. Sería útil indicar cuándo se recogió un objeto y cuánto falta para completar el nivel.", en: "A distinct visual identity can help the game stand out. Feedback on collected items and level progress would be useful." },
      { rating: 3, es: "Si hay plataformas precisas, hace falta que la colisión sea consistente. Un salto que parece correcto pero no registra termina frustrando rápido.", en: "If precise platforms are involved, collision detection needs to be consistent. A jump that looks correct but fails to register gets frustrating quickly." },
    ]
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar.", "Mantener la identidad de Paper Duck sin recargar la pantalla con adornos.", "Dar feedback inmediato a cada interacción del jugador.", "Evitar que el reinicio borre progreso sin una indicación clara."],
      en: ["Make the round's objective clear before play begins.", "Keep Paper Duck's identity without overcrowding the screen with decoration.", "Give immediate feedback for every player interaction.", "Avoid clearing progress on restart without clear indication."]
    },
    comments: [
      { rating: 4, es: "Paper Duck tiene un nombre reconocible y simpático; una explicación inicial concreta ayudaría a entender el bucle de juego sin probar botones al azar.", en: "Paper Duck has a memorable, playful name; a concise opening explanation would help users understand the gameplay loop without random clicking." },
      { rating: 5, es: "La temática da margen para una presentación cálida. Cuidaría que las interacciones principales sigan destacando por encima de los elementos decorativos.", en: "The theme leaves room for a warm presentation. I would keep primary interactions more prominent than decoration." },
      { rating: 3, es: "La pantalla inicial debería explicar el objetivo, no solo el tono del juego. Sin esa pista cuesta saber qué acción conviene probar primero.", en: "The opening screen should explain the objective, not only the game's mood. Without that hint, it is hard to know what to try first." },
    ]
  },
  "otter-rescue": {
    recommendations: {
      es: ["Explicar a quién o qué hay que rescatar y cómo se gana.", "Distinguir obstáculos, objetivos y zonas seguras.", "Dar señales de colisión y progreso que no dependan solo del color."],
      en: ["Explain what needs rescuing and how to win.", "Distinguish obstacles, objectives, and safe areas.", "Use collision and progress cues beyond color alone."]
    },
    comments: [
      { rating: 4, es: "Otter Rescue transmite una misión concreta, algo útil para orientar al jugador. La primera pantalla debería explicar el rescate y la condición de éxito.", en: "Otter Rescue suggests a clear mission, which can guide players well. The first screen should explain the rescue and win condition." },
      { rating: 4, es: "Me gusta la posibilidad de construir niveles alrededor de obstáculos; marcar mejor los elementos interactivos evitaría confundir decoración con peligro.", en: "The idea lends itself to obstacle-based levels; clearer interactive cues would prevent decorative elements being mistaken for hazards." },
      { rating: 3, es: "La ambientación puede atraer, pero el movimiento y las colisiones tienen que sentirse justos. Revisaría la respuesta cuando se juega desde el móvil.", en: "The setting can draw people in, but movement and collisions need to feel fair. I would check mobile responsiveness closely." },
      { rating: 5, es: "El tema de rescate da una motivación fácil de comunicar. Mostrar el progreso hacia el objetivo puede hacer que cada intento tenga más sentido.", en: "The rescue theme provides an easy-to-understand motivation. Showing progress toward the goal could make each attempt feel more purposeful." }
    ]
  },
  "chint": {
    recommendations: {
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.", "Separar datos, interpretación y opinión para que el argumento sea rastreable.", "Usar enlaces de contexto donde se hagan afirmaciones fuertes."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.", "Separate data, interpretation, and opinion so the argument can be traced.", "Link to context for strong claims."]
    },
    comments: [
      { rating: 4, es: "El eje entre inteligencia artificial e interacción social tiene más personalidad que un sitio corporativo genérico. La jerarquía del argumento debería guiar toda la página.", en: "The focus on AI and social interaction gives it more personality than a generic corporate site. The argument's hierarchy should guide the whole page." },
      { rating: 5, es: "El tema invita a leer y debatir, no solo a navegar. Separar evidencia, análisis y conclusiones reforzaría la credibilidad del contenido.", en: "The topic invites reading and discussion rather than simple browsing. Separating evidence, analysis, and conclusions would strengthen credibility." },
      { rating: 3, es: "La reversión visual puede funcionar, pero cualquier afirmación sobre comportamiento social necesita contexto para no sonar más concluyente de lo que permiten los datos.", en: "The visual rework can work, but claims about social behavior need context so they do not sound stronger than the evidence allows." },
    ]
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar.", "Mostrar ubicación y horarios cerca de la información de contacto.", "Usar imágenes apetitosas sin sacrificar la velocidad de carga.", "Repetir la acción de reserva después de presentar el menú."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path.", "Place location and opening hours near contact details.", "Use appetizing imagery without sacrificing loading speed.", "Repeat the reservation action after presenting the menu."]
    },
    comments: [
      { rating: 5, es: "En una landing gastronómica, el usuario suele querer ver qué se ofrece y cómo reservar. Esa ruta debería ser más visible que cualquier animación secundaria.", en: "On a restaurant landing page, visitors usually want to see the offer and how to book. That path should stand out over secondary animation." },
      { rating: 4, es: "La temática permite trabajar muy bien imagen y tipografía. Sumaria horarios, ubicación y una acción de contacto fáciles de encontrar desde el móvil.", en: "The topic is well suited to strong imagery and typography. I would make hours, location, and contact easy to find on mobile." },
      { rating: 3, es: "Una web gastronómica puede verse muy bien y aun así perder consultas si el botón de reserva o el teléfono quedan escondidos.", en: "A restaurant site can look good and still lose inquiries if the reservation button or phone number is hard to find." },
    ]
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.", "Mostrar duración, ubicación y temporada cuando estén disponibles.", "Mantener filtros y navegación al cambiar de sección en una SPA."],
      en: ["Organize destinations and experiences around traveler intent.", "Show duration, location, and season when available.", "Keep filters and navigation consistent across SPA sections."]
    },
    comments: [
      { rating: 4, es: "El formato SPA encaja con una experiencia turística, donde comparar opciones importa. Mantendría visibles los datos prácticos además de la presentación visual.", en: "A SPA suits tourism, where comparing options matters. I would keep practical details visible alongside the visual presentation." },
      { rating: 5, es: "El proyecto tiene un contexto claro: ayudar a imaginar y organizar un viaje. Fichas consistentes para cada destino harían más sencilla la comparación.", en: "The project has a clear purpose: helping people imagine and plan a trip. Consistent destination entries would make comparison easier." },
      { rating: 3, es: "La parte visual puede inspirar, pero no debería obligar a buscar demasiado la ubicación, duración o condiciones de cada propuesta.", en: "The visual presentation can inspire, but visitors should not have to hunt for each option's location, duration, or conditions." },
      { rating: 4, es: "Como portfolio, muestra un caso de navegación con varias secciones. Revisaría estados de carga y el comportamiento del botón atrás del navegador.", en: "As a portfolio piece, it demonstrates multi-section navigation. I would test loading states and the browser back button." }
    ]
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.", "Explicar qué recibe una persona al participar en una mentoría.", "Presentar perfiles, especialidades y disponibilidad con criterios comparables."],
      en: ["Separate paths for students, developers, and professionals.", "Explain what someone receives from joining a mentoring program.", "Present profiles, specialties, and availability in comparable ways."]
    },
    comments: [
      { rating: 5, es: "La mentoría es una propuesta concreta para la comunidad tecnológica. El contenido debería ayudar a saber quién puede participar y qué resultado esperar.", en: "Mentoring is a concrete offer for the tech community. The content should clarify who can join and what outcomes to expect." },
      { rating: 4, es: "Me parece acertado hablarle a estudiantes y profesionales, aunque conviene separar sus necesidades para que el mensaje no quede demasiado amplio.", en: "Addressing students and professionals makes sense, but their needs should be separated so the message does not become too broad." },
      { rating: 3, es: "En una plataforma de mentoría, los detalles prácticos importan: modalidad, duración y criterios para conectar con alguien deberían aparecer antes del contacto.", en: "For a mentoring platform, practical details matter: format, duration, and matching criteria should appear before the contact step." },
    ]
  },
  "arkhe": {
    recommendations: {
      es: ["Dar prioridad a la obra y su contexto antes que a la animación.", "Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan.", "Ofrecer navegación accesible aunque haya interacciones motion.", "Respetar la preferencia de movimiento reducido del navegador."],
      en: ["Prioritize each artwork and its context over animation.", "Include artist, date, and medium where known.", "Keep navigation accessible even with motion interactions.", "Respect the browser's reduced-motion preference."]
    },
    comments: [
      { rating: 5, es: "Un museo digital se beneficia de una experiencia inmersiva, pero el movimiento debería acompañar la obra y no dificultar leer sus datos.", en: "A digital museum benefits from immersion, but motion should support the artwork rather than make its details hard to read." },
      { rating: 4, es: "La combinación de arte y motion design tiene una identidad clara. Agregaría información curatorial consistente para que la colección no dependa solo del impacto visual.", en: "The combination of art and motion design has a clear identity. Consistent curatorial details would keep the collection from relying only on visual impact." },
      { rating: 4, es: "La navegación de una colección diversa puede volverse confusa; categorías y una vuelta fácil a la galería ayudarían a explorar por cuenta propia.", en: "Browsing a diverse collection can become confusing; categories and an easy return to the gallery would support exploration." },
    ]
  },
  "grupo-meridiano": {
    recommendations: {
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.", "Permitir distinguir venta y alquiler desde el comienzo.", "Acompañar las fotos con datos clave y no solo texto promocional."],
      en: ["Show each property's listing type, location, and price consistently.", "Make sale and rental listings easy to distinguish from the start.", "Pair photos with key facts rather than promotional text alone."]
    },
    comments: [
      { rating: 4, es: "En inmobiliaria, comparar propiedades es central. La consistencia entre fichas pesa tanto como la fotografía, especialmente para precio, ubicación y cantidad de ambientes.", en: "Property comparison is central to real estate. Consistent listing details matter as much as photography, especially price, location, and room count." },
      { rating: 5, es: "El rubro tiene una necesidad funcional clara: pasar de explorar inmuebles a consultar por uno. Haría que ese siguiente paso siempre sea visible.", en: "The sector has a clear functional need: moving from browsing listings to asking about one. I would keep that next step visible." },
      { rating: 3, es: "Las fotos pueden atraer, pero sin información práctica comparable cuesta decidir. Revisaría también la experiencia cuando una búsqueda no devuelve resultados.", en: "Photos can attract attention, but decisions are hard without comparable details. I would also review the empty-search state." },
      { rating: 4, es: "El caso de uso encaja con una web de propiedades. Un filtro que preserve la selección al entrar y volver de una ficha ahorraría pasos.", en: "The use case fits a property website. Filters that retain selections when opening and leaving a listing would save steps." }
    ]
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta.", "Indicar la documentación inicial necesaria para cada consulta.", "Separar consultas generales de solicitudes de presupuesto."],
      en: ["Translate each administrative service into a concrete task or need.", "List the initial documents required for each inquiry.", "Separate general questions from quote requests."]
    },
    comments: [
      { rating: 5, es: "Para una gestoría, transmitir confianza depende de explicar con claridad qué resuelve y cómo iniciar una consulta. La simpleza es más importante que los efectos visuales.", en: "For an administrative consultancy, trust comes from explaining what it handles and how to start. Clarity matters more than visual effects." },
      { rating: 4, es: "El servicio se entiende mejor cuando cada trámite tiene requisitos y próximos pasos claros. Esa estructura reduciría las consultas que llegan sin datos suficientes.", en: "Each service is easier to understand when requirements and next steps are clear. This structure could reduce inquiries missing basic information." },
      { rating: 3, es: "La presencia web puede ordenar la oferta, pero conviene diferenciar lo que se gestiona directamente de lo que depende de organismos externos.", en: "The website can organize the offering, but it should distinguish direct services from tasks dependent on outside agencies." },
    ]
  }
};
