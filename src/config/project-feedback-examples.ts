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
    reviews: {"es":[{"rating":5,"name":"María Castillo","message":"Me resultó fácil ubicar los productos y entender cómo funciona el carrito. Se nota qué parte corresponde al catálogo y cuál a la compra."},{"rating":4,"name":"Selina Miranda","message":"Antes de llegar al final estaría bueno ver el costo total y las condiciones de compra, así no hay sorpresas."}],"en":[{"rating":5,"name":"María Castillo","message":"I could find the products easily and figure out how the cart works. It is clear where browsing ends and the purchase begins."},{"rating":4,"name":"Selina Miranda","message":"It would be nice to see the full cost and purchase terms earlier, rather than finding them right at the end."}]}
  },
  "art-syntex": {
    recommendations: {
      es: ["Explicar con claridad qué información del catálogo proviene de Firebase.","Distinguir el estado de carga de un catálogo vacío.","Dar jerarquía a imagen, nombre y precio en las fichas."],
      en: ["Clarify which catalog data is coming from Firebase.","Differentiate loading states from an empty catalog.","Prioritize image, name, and price in product details."]
    },
    reviews: {"es":[{"rating":5,"name":"Lucía Fernández","message":"La tienda tiene una idea clara y las imágenes ayudan a recorrer el catálogo. Me gustaría saber de dónde sale la información de cada producto."},{"rating":4,"name":"Tomás Rivas","message":"Cuando tarda en cargar, no queda del todo claro si no hay productos o si la página sigue buscando."}],"en":[{"rating":5,"name":"Lucía Fernández","message":"The store has a clear direction, and the images make the catalog easy to browse. I would like to know where the product information comes from."},{"rating":4,"name":"Tomás Rivas","message":"When loading takes a while, it is hard to tell whether the catalog is empty or the page is still waiting."}]}
  },
  "dinosauria": {
    recommendations: {
      es: ["Ordenar la enciclopedia por período geológico y tipo de dinosaurio."],
      en: ["Organize the encyclopedia by geological period and dinosaur type."]
    },
    reviews: {"es":[{"rating":5,"name":"Camila Duarte","message":"Está buena para curiosear sobre dinosaurios; encontrar las especies por época haría la búsqueda mucho más cómoda."},{"rating":4,"name":"Nicolás Herrera","message":"Me quedé con ganas de ver de dónde salen algunos datos, sobre todo los más específicos."},{"rating":5,"name":"Valentina Paredes","message":"Comparar de un vistazo el tamaño y la alimentación de las especies sería un detalle buenísimo."}],"en":[{"rating":5,"name":"Camila Duarte","message":"It is a fun place to browse dinosaur facts. Finding species by period would make it much easier to explore."},{"rating":4,"name":"Nicolás Herrera","message":"I wanted to see where some of the more specific facts came from."},{"rating":5,"name":"Valentina Paredes","message":"Being able to compare each species' size and diet at a glance would be a great addition."}]}
  },
  "calcu-len": {
    recommendations: {
      es: ["Agrupar herramientas por tipo de cálculo en vez de presentarlas como una lista indiferenciada.","Mostrar la operación aplicada junto al resultado."],
      en: ["Group tools by calculation type instead of one undifferentiated list.","Show the operation used alongside each result."]
    },
    reviews: {"es":[{"rating":5,"name":"Mateo Cabrera","message":"Tener varias calculadoras en el mismo sitio viene bien, aunque las encontraría más rápido si estuvieran agrupadas por tema."},{"rating":4,"name":"Sofía Navarro","message":"Me gusta ver cómo se llegó al resultado, no solo el número final."},{"rating":5,"name":"Julián Benítez","message":"Estaría bueno que avisara claramente cuando falta un dato o se ingresa un valor fuera de rango."}],"en":[{"rating":5,"name":"Mateo Cabrera","message":"Having several calculators in one place is handy, though I would find them faster if they were grouped by topic."},{"rating":4,"name":"Sofía Navarro","message":"I like being able to see how the result was worked out, not just the final number."},{"rating":5,"name":"Julián Benítez","message":"It should give a clear warning when a value is missing or falls outside the allowed range."}]}
  },
  "calcu-lenD": {
    recommendations: {
      es: ["Indicar fecha y hora de la cotización cuando se muestre un tipo de cambio.","Diferenciar tasa de compra, venta y referencia si corresponde.","Aclarar si los valores son informativos o provienen de una API en vivo.","Indicar la moneda base y la moneda de destino antes de convertir."],
      en: ["Display the quote date and time beside an exchange rate.","Differentiate buy, sell, and reference rates when applicable.","Clarify whether values are informational or fetched from a live API.","Show the base and target currencies before converting."]
    },
    reviews: {"es":[{"rating":5,"name":"Florencia Acosta","message":"Ver la fecha y la hora junto al cambio me ayudaría a saber qué tan actual es la cotización."},{"rating":4,"name":"Bruno Medina","message":"No todas las tasas significan lo mismo; estaría bueno que aclarara si es compra, venta o solo referencia."}],"en":[{"rating":5,"name":"Florencia Acosta","message":"Seeing the date and time next to the rate would help me tell how current the quote is."},{"rating":4,"name":"Bruno Medina","message":"Exchange rates do not all mean the same thing, so it would help to say whether a rate is for buying, selling, or reference only."}]}
  },
  "tick-tack-toe": {
    recommendations: {
      es: ["Distinguir con claridad el turno de cada jugador.","Resolver empate y victoria con mensajes distintos."],
      en: ["Make each player's turn clearly visible.","Use distinct messages for a draw and a win."]
    },
    reviews: {"es":[{"rating":5,"name":"Martina Reyes","message":"Se entiende enseguida cómo jugar. Tener más visible de quién es el turno evitaría esas dudas en plena partida."},{"rating":4,"name":"Agustín Molina","message":"Cuando termina, vendría bien que el mensaje de empate sea distinto al de victoria."}],"en":[{"rating":5,"name":"Martina Reyes","message":"You can work out how to play right away. Making the current player's turn more visible would prevent confusion mid-game."},{"rating":4,"name":"Agustín Molina","message":"It would be helpful to show a different message for a draw than for a win."}]}
  },
  "minesweeper": {
    recommendations: {
      es: ["Diferenciar visualmente una casilla abierta, una marcada y una todavía oculta."],
      en: ["Clearly distinguish revealed, flagged, and hidden cells."]
    },
    reviews: {"es":[{"rating":5,"name":"Julieta Peralta","message":"Al principio dudé qué casillas había abierto y cuáles había marcado; distinguirlas un poco más ayudaría."},{"rating":4,"name":"Facundo Ibarra","message":"El contador de minas restantes se me perdió entre los otros elementos."},{"rating":5,"name":"Emilia Torres","message":"En el móvil es fácil tocar donde no querías; un control más cómodo evitaría abrir una casilla por accidente."},{"rating":4,"name":"Thiago Silva","message":"Cuando ganás o pisás una mina, el juego podría dejar más claro qué pasó."}],"en":[{"rating":5,"name":"Julieta Peralta","message":"At first I had to double-check which squares I had opened and which I had flagged. Making them look more distinct would help."},{"rating":4,"name":"Facundo Ibarra","message":"I almost missed the remaining-mine counter among the other elements."},{"rating":5,"name":"Emilia Torres","message":"It is easy to tap the wrong square on a phone, so more forgiving controls would help prevent accidental moves."},{"rating":4,"name":"Thiago Silva","message":"After a win or a mine hit, the game could make the outcome clearer."}]}
  },
  "2048": {
    recommendations: {
      es: ["Hacer visible la puntuación actual y la mejor puntuación.","Explicar los controles de teclado y táctiles en el primer uso.","Impedir que una entrada inválida cambie el estado del tablero."],
      en: ["Keep current and best scores visible.","Explain keyboard and touch controls on first use.","Ensure invalid input does not alter the board state."]
    },
    reviews: {"es":[{"rating":5,"name":"Renata Campos","message":"La partida engancha, y tener a la vista el puntaje actual y el récord hace que den ganas de probar otra vez."},{"rating":4,"name":"Benjamín Vera","message":"Me costó saber qué teclas o gestos podía usar hasta que empecé a mover las fichas."}],"en":[{"rating":5,"name":"Renata Campos","message":"The game gets its hooks into you, and seeing both the current score and the record makes you want to try again."},{"rating":4,"name":"Benjamín Vera","message":"I was not sure which keys or gestures to use until I started moving the tiles."}]}
  },
  "boaworm": {
    recommendations: {
      es: ["Mantener el movimiento del personaje consistente con la velocidad elegida.","Distinguir claramente comida, cuerpo y límites del escenario."],
      en: ["Keep movement consistent with the selected speed.","Clearly distinguish food, the character's body, and arena boundaries."]
    },
    reviews: {"es":[{"rating":5,"name":"Alma Fuentes","message":"El movimiento se siente mejor cuando mantiene el ritmo de la velocidad elegida; estaría bueno que no cambie de forma inesperada."},{"rating":4,"name":"Santiago Costa","message":"A veces cuesta distinguir la comida de los bordes mientras estás concentrado en no chocarte."},{"rating":5,"name":"Micaela Suárez","message":"Me gustaría ver el puntaje sin que tape parte del espacio para jugar."}],"en":[{"rating":5,"name":"Alma Fuentes","message":"The movement feels best when it matches the speed you chose. It should not change pace unexpectedly."},{"rating":4,"name":"Santiago Costa","message":"It can be hard to tell the food from the edges when you are focused on not crashing."},{"rating":5,"name":"Micaela Suárez","message":"I would like to see the score without it covering part of the play area."}]}
  },
  "ajedrez": {
    recommendations: {
      es: ["Diferenciar las piezas seleccionadas y las casillas válidas.","Validar movimientos legales antes de cambiar el tablero.","Destacar jaque, jaque mate y tablas con mensajes inequívocos.","Añadir controles táctiles cómodos sin depender solo de arrastrar piezas."],
      en: ["Distinguish selected pieces and legal destination squares.","Validate legal moves before changing the board.","Clearly identify check, checkmate, and draws.","Provide touch controls that do not rely only on dragging pieces."]
    },
    reviews: {"es":[{"rating":5,"name":"Lautaro Vega","message":"Se agradece poder jugar desde el navegador. Marcar las piezas elegidas y las casillas donde pueden moverse haría todo bastante más claro."}],"en":[{"rating":5,"name":"Lautaro Vega","message":"It is nice to be able to play right in the browser. Highlighting the selected piece and its legal moves would make things much clearer."}]}
  },
  "monster-duelists": {
    recommendations: {
      es: ["Explicar las estadísticas de cada monstruo antes del duelo.","Separar visualmente selección, turno y resultado del combate."],
      en: ["Explain each monster's stats before a duel.","Separate selection, turn, and battle-result states visually."]
    },
    reviews: {"es":[{"rating":5,"name":"Clara Méndez","message":"Antes de empezar un duelo, me gustaría tener más claro qué hace fuerte a cada monstruo y cuáles son sus puntos débiles."},{"rating":4,"name":"Damián Ortiz","message":"La selección, el turno y el resultado de la pelea podrían diferenciarse un poco más; a veces cuesta seguir en qué etapa estás."}],"en":[{"rating":5,"name":"Clara Méndez","message":"Before starting a duel, I would like a clearer idea of each monster's strengths and weaknesses."},{"rating":4,"name":"Damián Ortiz","message":"The selection, turn, and battle result could look a bit more different from one another. Sometimes it is hard to tell which stage you are in."}]}
  },
  "2042": {
    recommendations: {
      es: ["Explicar la relación entre los números y la condición de progreso del juego.","Mantener el puntaje y el objetivo de la partida visibles.","Evitar que un movimiento fuera del tablero parezca aceptado."],
      en: ["Explain how numbers relate to the game's progression goal.","Keep the score and round objective visible.","Prevent off-board moves from appearing to succeed."]
    },
    reviews: {"es":[{"rating":5,"name":"Catalina Paz","message":"Me llevó un rato entender qué relación tienen los números con el objetivo de la partida. Una explicación breve al empezar ayudaría bastante."},{"rating":4,"name":"Franco Núñez","message":"Tener siempre a la vista el puntaje y lo que hay que conseguir haría más fácil seguir jugando."},{"rating":5,"name":"Pilar Sosa","message":"Si un movimiento no se puede hacer, debería notarse enseguida para no pensar que el tablero respondió."}],"en":[{"rating":5,"name":"Catalina Paz","message":"It took me a little while to understand how the numbers connect to the goal. A quick explanation at the start would help."},{"rating":4,"name":"Franco Núñez","message":"Keeping the score and the goal in view would make it easier to stay focused on the game."},{"rating":5,"name":"Pilar Sosa","message":"When a move is not allowed, that should be obvious so it does not look like the board accepted it."}]}
  },
  "hangman": {
    recommendations: {
      es: ["Mostrar las letras elegidas y las que todavía pueden probarse."],
      en: ["Show guessed letters and letters still available."]
    },
    reviews: {"es":[{"rating":5,"name":"Lorenzo Gil","message":"Me vendría bien ver de un vistazo las letras que ya probé y las que todavía me quedan."},{"rating":4,"name":"Violeta Arias","message":"El dibujo está bueno, pero también mostrar cuántos intentos quedan evitaría tener que contarlos mentalmente."},{"rating":5,"name":"Máximo Figueroa","message":"Separar mejor el final de victoria y el de derrota haría que cada ronda cierre con más claridad."}],"en":[{"rating":5,"name":"Lorenzo Gil","message":"It would help to see which letters I have already tried and which ones are still available."},{"rating":4,"name":"Violeta Arias","message":"The drawing is a nice touch, but showing the number of tries left would save me from counting them in my head."},{"rating":5,"name":"Máximo Figueroa","message":"Making the win and loss screens more distinct would give each round a clearer ending."}]}
  },
  "jumping-frogger": {
    recommendations: {
      es: ["Hacer que la velocidad de obstáculos sea consistente y legible.","Dar una señal clara cuando se completa el cruce."],
      en: ["Keep obstacle speed consistent and readable.","Provide clear feedback when a crossing is completed."]
    },
    reviews: {"es":[{"rating":5,"name":"Abril Correa","message":"Los obstáculos se entienden, aunque un ritmo más parejo ayudaría a anticipar cuándo cruzar."},{"rating":4,"name":"Simón León","message":"Cuando llegás al otro lado, una señal más clara te deja saber que completaste el cruce."}],"en":[{"rating":5,"name":"Abril Correa","message":"The obstacles are easy enough to understand, but a steadier pace would make it easier to judge when to cross."},{"rating":4,"name":"Simón León","message":"A clearer signal when you reach the other side would let you know the crossing is complete."}]}
  },
  "bunny-quest": {
    recommendations: {
      es: ["Indicar con claridad el objetivo y las condiciones de cada nivel.","Mantener el salto previsible al aterrizar en plataformas estrechas.","Diferenciar objetos coleccionables de elementos decorativos."],
      en: ["Clearly state each level's goal and completion condition.","Make jumps predictable when landing on narrow platforms.","Distinguish collectibles from decorative objects."]
    },
    reviews: {"es":[{"rating":5,"name":"Amparo Vidal","message":"Me dieron ganas de seguir jugando, pero al entrar a un nivel estaría bueno que el objetivo se entienda sin tener que adivinarlo."},{"rating":4,"name":"Ramiro Luna","message":"Los saltos se sienten mucho mejor cuando calculás dónde vas a caer; en plataformas angostas, que sean más previsibles ayudaría un montón."}],"en":[{"rating":5,"name":"Amparo Vidal","message":"It made me want to keep playing, but each level should make its goal clear instead of making you guess."},{"rating":4,"name":"Ramiro Luna","message":"Jumping feels much better when you can judge where you will land. More predictable jumps would really help on narrow platforms."}]}
  },
  "paper-duck": {
    recommendations: {
      es: ["Hacer evidente cuál es el objetivo de la ronda antes de empezar."],
      en: ["Make the round's objective clear before play begins."]
    },
    reviews: {"es":[{"rating":5,"name":"Isabella Marín","message":"Antes de arrancar me quedé buscando qué había que hacer en la ronda. Un objetivo claro desde el principio ayudaría."},{"rating":4,"name":"Valentín Acuña","message":"El estilo de Paper Duck tiene personalidad; con un poco menos de decoración en algunos lugares, la pantalla respiraría más."},{"rating":5,"name":"Antonella Roldán","message":"Que cada toque tenga una respuesta visible hace que el juego se sienta mucho más vivo."},{"rating":4,"name":"Gael Bravo","message":"No me gustaría perder lo que llevaba por reiniciar sin querer; una confirmación antes de borrar el progreso vendría bien."}],"en":[{"rating":5,"name":"Isabella Marín","message":"Before starting, I found myself looking around for the goal of the round. Making it clear from the beginning would help."},{"rating":4,"name":"Valentín Acuña","message":"Paper Duck has its own personality. A little less decoration in a few places would give the screen more room to breathe."},{"rating":5,"name":"Antonella Roldán","message":"Visible feedback for each tap makes the game feel much more alive."},{"rating":4,"name":"Gael Bravo","message":"I would hate to lose my progress by restarting accidentally, so a confirmation before clearing it would be useful."}]}
  },
  "otter-rescue": {
    recommendations: {
      es: ["Explicar a quién o qué hay que rescatar y cómo se gana.","Distinguir obstáculos, objetivos y zonas seguras.","Dar señales de colisión y progreso que no dependan solo del color."],
      en: ["Explain what needs rescuing and how to win.","Distinguish obstacles, objectives, and safe areas.","Use collision and progress cues beyond color alone."]
    },
    reviews: {"es":[{"rating":5,"name":"Malena Quiroga","message":"La idea de rescatar algo se entiende, pero me gustaría saber desde el principio a quién hay que ayudar y qué cuenta como ganar."},{"rating":4,"name":"Ignacio Prieto","message":"Separar mejor los obstáculos de las zonas seguras ayudaría a leer la pantalla de un vistazo."}],"en":[{"rating":5,"name":"Malena Quiroga","message":"I get the idea of a rescue, but I would like to know from the start who needs help and what counts as winning."},{"rating":4,"name":"Ignacio Prieto","message":"Making obstacles stand out from safe areas would make the screen easier to read at a glance."}]}
  },
  "chint": {
    recommendations: {
      es: ["Presentar la pregunta central sobre IA e interacción social sin sobrecargar el primer pantallazo.","Separar datos, interpretación y opinión para que el argumento sea rastreable."],
      en: ["Present the central question about AI and social interaction without overcrowding the first screen.","Separate data, interpretation, and opinion so the argument can be traced."]
    },
    reviews: {"es":[{"rating":5,"name":"Olivia Salas","message":"El tema de la IA y las relaciones sociales da para pensar; una introducción más directa ayudaría a entrar en la idea sin leer tanto de golpe."},{"rating":4,"name":"Dante Escobar","message":"Me gustó el tema, aunque separaría con más claridad los datos de las opiniones para seguir el argumento."},{"rating":5,"name":"Aitana Rojas","message":"Cuando se hace una afirmación fuerte, un enlace que permita comprobar el contexto le daría más peso."}],"en":[{"rating":5,"name":"Olivia Salas","message":"The topic of AI and social relationships gives you a lot to think about. A more direct opening would make it easier to get into the subject."},{"rating":4,"name":"Dante Escobar","message":"I liked the topic, though it would be easier to follow if facts and opinions were more clearly separated."},{"rating":5,"name":"Aitana Rojas","message":"Links to the background behind stronger claims would make them easier to check and give the argument more weight."}]}
  },
  "la-buena-mesa": {
    recommendations: {
      es: ["Priorizar menú, propuesta gastronómica y forma de reservar o consultar."],
      en: ["Prioritize the menu, food offering, and reservation or inquiry path."]
    },
    reviews: {"es":[{"rating":5,"name":"Pedro Lozano","message":"Lo primero que buscaría en una web gastronómica es el menú y cómo hacer una reserva; tener eso bien a mano suma mucho."},{"rating":4,"name":"Milagros Vidal","message":"Me faltó encontrar rápido la dirección y los horarios junto a los datos de contacto."}],"en":[{"rating":5,"name":"Pedro Lozano","message":"The first things I look for on a restaurant website are the menu and how to book a table, so keeping them easy to find makes a difference."},{"rating":4,"name":"Milagros Vidal","message":"I wanted to find the address and opening hours more quickly alongside the contact details."}]}
  },
  "gran-milla": {
    recommendations: {
      es: ["Organizar destinos y experiencias según la intención del viajero.","Mostrar duración, ubicación y temporada cuando estén disponibles.","Mantener filtros y navegación al cambiar de sección en una SPA."],
      en: ["Organize destinations and experiences around traveler intent.","Show duration, location, and season when available.","Keep filters and navigation consistent across SPA sections."]
    },
    reviews: {"es":[{"rating":5,"name":"Ezequiel Soto","message":"Tiene sentido organizar los destinos según el tipo de viaje que uno está buscando. Agregar duración y época recomendada ayudaría a decidir mejor."}],"en":[{"rating":5,"name":"Ezequiel Soto","message":"Organizing destinations around the kind of trip someone wants makes sense. Including trip length and the best time to visit would help with planning."}]}
  },
  "ascendo-crescendo": {
    recommendations: {
      es: ["Separar las rutas para estudiantes, desarrolladores y profesionales.","Explicar qué recibe una persona al participar en una mentoría."],
      en: ["Separate paths for students, developers, and professionals.","Explain what someone receives from joining a mentoring program."]
    },
    reviews: {"es":[{"rating":5,"name":"Bianca Peralta","message":"Me resultaría más fácil encontrar lo que busco si hubiera un recorrido distinto para estudiantes, desarrolladores y gente que ya trabaja en el área."},{"rating":4,"name":"Leandro Robles","message":"Antes de anotarme a una mentoría, quisiera saber concretamente qué incluye y con qué me voy a quedar."}],"en":[{"rating":5,"name":"Bianca Peralta","message":"It would be easier to find what I need if students, developers, and people already working in the field had their own paths through the site."},{"rating":4,"name":"Leandro Robles","message":"Before signing up for mentoring, I would want to know exactly what is included and what I can expect to take away from it."}]}
  },
  "arkhe": {
    recommendations: {
      es: ["Dar prioridad a la obra y su contexto antes que a la animación.","Incluir autoría, fecha y técnica junto a cada pieza cuando se conozcan.","Ofrecer navegación accesible aunque haya interacciones motion.","Respetar la preferencia de movimiento reducido del navegador."],
      en: ["Prioritize each artwork and its context over animation.","Include artist, date, and medium where known.","Keep navigation accessible even with motion interactions.","Respect the browser's reduced-motion preference."]
    },
    reviews: {"es":[{"rating":5,"name":"Carolina Ferreyra","message":"Las obras deberían ser lo primero que llame la atención; las animaciones están bien, siempre que no le quiten protagonismo al arte."},{"rating":4,"name":"Esteban Ocampo","message":"Me gusta conocer quién hizo una pieza y cómo fue creada. Esa información junto a la obra le daría más contexto."}],"en":[{"rating":5,"name":"Carolina Ferreyra","message":"The artwork should be the first thing that catches your eye. Animations are fine as long as they do not take attention away from it."},{"rating":4,"name":"Esteban Ocampo","message":"I like knowing who made a piece and how it was created. Having that information next to the work would add useful context."}]}
  },
  "grupo-meridiano": {
    recommendations: {
      es: ["Mostrar operación, ubicación y precio de cada propiedad de forma consistente.","Permitir distinguir venta y alquiler desde el comienzo."],
      en: ["Show each property's listing type, location, and price consistently.","Make sale and rental listings easy to distinguish from the start."]
    },
    reviews: {"es":[{"rating":5,"name":"Agostina Vázquez","message":"Cuando miro propiedades, quiero encontrar rápido el precio, la ubicación y si se vende o alquila. Tener esos datos siempre en el mismo lugar facilita comparar."},{"rating":4,"name":"Pablo Valle","message":"Que se vea desde el principio si una propiedad es para venta o alquiler ahorra tiempo."},{"rating":5,"name":"Celeste Romero","message":"Las fotos ayudan, pero también necesito datos concretos de la propiedad para saber si me interesa."}],"en":[{"rating":5,"name":"Agostina Vázquez","message":"When I browse properties, I want to find the price, location, and whether it is for sale or rent right away. Keeping those details in the same place makes comparison easier."},{"rating":4,"name":"Pablo Valle","message":"Seeing from the start whether a property is for sale or rent saves time."},{"rating":5,"name":"Celeste Romero","message":"Photos help, but I also need the actual property details to know whether it is worth considering."}]}
  },
  "gestoría-ays": {
    recommendations: {
      es: ["Traducir cada servicio administrativo a un trámite o necesidad concreta."],
      en: ["Translate each administrative service into a concrete task or need."]
    },
    reviews: {"es":[{"rating":5,"name":"Nahuel Domínguez","message":"Los servicios se entienden mejor cuando explican qué trámite resuelven en la práctica; así uno sabe si llegó al lugar correcto."},{"rating":4,"name":"Lara Ponce","message":"Antes de hacer una consulta, estaría bueno saber qué documentos conviene tener preparados."},{"rating":5,"name":"Gabriel Farías","message":"Separar las consultas generales de los pedidos de presupuesto ayudaría a ir directo a lo que necesita cada persona."}],"en":[{"rating":5,"name":"Nahuel Domínguez","message":"The services make more sense when the site explains which real-life task each one helps with. That way, you know you have come to the right place."},{"rating":4,"name":"Lara Ponce","message":"Before getting in touch, it would be useful to know which documents to have ready."},{"rating":5,"name":"Gabriel Farías","message":"Separating general questions from quote requests would help people get straight to what they need."}]}
  }
};
