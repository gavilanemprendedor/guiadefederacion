// Lista de negocios de la Guía de Federación.
// Para agregar uno nuevo, copiar un bloque { } y completar los datos.
// "rubro" tiene que coincidir exactamente con un nombre de data/rubros.js
//
// Nota: relevamiento hecho a partir de las historias destacadas de @guiadefederacion.
// Verificado por muestreo (no cuenta por cuenta) — revisar antes de publicar en producción.
// 2 negocios quedaron afuera por no tener un usuario de Instagram legible en el material
// (Aime Mia Cafetería y Carlos Bordagaray Seguros).
// "Maja Boutique" tenía 2 entradas posibles (@maja_boutique y @majaboutique_jazmines980);
// se dejó solo la primera hasta confirmar si son el mismo negocio.

const NEGOCIOS = [
  { nombre: "IRUPE Apart Hotel", rubro: "Alojamientos", instagram: "https://instagram.com/irupefederacion" },

  { nombre: "Marisa Colazo — Terapeuta Bach / Mindfulness", rubro: "Bienestar", instagram: "https://instagram.com/terapeutabach" },

  { nombre: "100Fuegos", rubro: "Comidas para llevar", instagram: "https://instagram.com/100fuegoshamburguesas" },
  { nombre: "Rotisería Las Azaleas", rubro: "Comidas para llevar", instagram: "https://instagram.com/rotiserialasazaleas" },
  { nombre: "Fábrica de pastas Albertone", rubro: "Comidas para llevar", instagram: "https://instagram.com/pastasalbertone" },
  { nombre: "Empanadas La Abuela", rubro: "Comidas para llevar", instagram: "https://instagram.com/donvicenteroti" },
  { nombre: "VG Food", rubro: "Comidas para llevar", instagram: "https://instagram.com/vg_food" },

  { nombre: "Despensa Magui", rubro: "Despensas", instagram: "https://instagram.com/despensa_magui" },
  { nombre: "Despensa La 25", rubro: "Despensas", instagram: "https://instagram.com/despensa_la25" },
  { nombre: "Almacén Schönborn", rubro: "Despensas", instagram: "https://instagram.com/almacensch5" },

  { nombre: "Alejandra — Productora Asesora de Seguros (M.N. 62389)", rubro: "Seguros", instagram: "https://instagram.com/alejandrafederacionpas" },

  { nombre: "Alegría — Maca Bordón", rubro: "Eventos-Fiestas", instagram: "https://instagram.com/alegriamacarena.ok" },

  { nombre: "aKüa Resto Pub", rubro: "Bailables", instagram: "https://instagram.com/akuaresto" },

  { nombre: "Ramira Petrona", rubro: "Tiendas", instagram: "https://instagram.com/ramirapetrona" },
  { nombre: "Roni Yani Burna", rubro: "Tiendas", instagram: "https://instagram.com/roniyaniburna" },
  { nombre: "Mi Paquete", rubro: "Tiendas", instagram: "https://instagram.com/mipaquete_st" },
  { nombre: "Mary Sport Federación", rubro: "Tiendas", instagram: "https://instagram.com/mary_sport_federacion" },
  { nombre: "Bendita Locura Almacén de Diseño", rubro: "Tiendas", instagram: "https://instagram.com/bendita_locura_almacendediseno" },
  { nombre: "Rouse Íntima", rubro: "Tiendas", instagram: "https://instagram.com/rouseintima" },
  { nombre: "Inestina", rubro: "Tiendas", instagram: "https://instagram.com/inestinaa" },
  { nombre: "Maja Boutique", rubro: "Tiendas", instagram: "https://instagram.com/maja_boutique" },
  { nombre: "Janna Accesorios", rubro: "Tiendas", instagram: "https://instagram.com/janna_acc" },
  { nombre: "Casa Luján", rubro: "Tiendas", instagram: "https://instagram.com/casalujan" },
  { nombre: "Donna Store", rubro: "Tiendas", instagram: "https://instagram.com/donna.store.federacion" },
  { nombre: "Macoba Urbano", rubro: "Tiendas", instagram: "https://instagram.com/macoba.urbano" },
  { nombre: "Arco Iriis", rubro: "Tiendas", instagram: "https://instagram.com/arco_iriis" },
  { nombre: "Zenona Boutique", rubro: "Tiendas", instagram: "https://instagram.com/zenona_boutique" },
  { nombre: "Buena Fortuna", rubro: "Tiendas", instagram: "https://instagram.com/buenaafortuna" },
  { nombre: "Storee Mym", rubro: "Tiendas", instagram: "https://instagram.com/storee.mym.7" },
  { nombre: "Casa Elsie (deportes)", rubro: "Tiendas", instagram: "https://instagram.com/casaelsie.deportes" },
  { nombre: "Zurgena Textil", rubro: "Tiendas", instagram: "https://instagram.com/zurgenatextil" },
  { nombre: "Bendita Seas Boutique", rubro: "Tiendas", instagram: "https://instagram.com/bendita_seas_boutique" },
  { nombre: "Amon Personalizados", rubro: "Tiendas", instagram: "https://instagram.com/amon.personalizados_" },
  { nombre: "Aura Verde", rubro: "Tiendas", instagram: "https://instagram.com/aura.verde31" },
  { nombre: "Fusión Look", rubro: "Tiendas", instagram: "https://instagram.com/_fusion.look" },
  { nombre: "Agustina Indumentaria", rubro: "Tiendas", instagram: "https://instagram.com/agustina_indumentaria_of_" },

  { nombre: "Agencia N°1020 — Lotería de Entre Ríos", rubro: "Quinielas", instagram: "https://instagram.com/agenciaoficial1020" },

  { nombre: "Gimnasio MG", rubro: "Gimnasios", instagram: "https://instagram.com/gimnasio_mg" },
  { nombre: "Gimnasio Géminis", rubro: "Gimnasios", instagram: "https://instagram.com/gym_geminis" },
  { nombre: "Ener-gym", rubro: "Gimnasios", instagram: "https://instagram.com/energym806" },
  { nombre: "Aerogym (acrobacias aéreas)", rubro: "Gimnasios", instagram: "https://instagram.com/aerogym.fed" },
  { nombre: "Imperio Gym", rubro: "Gimnasios", instagram: "https://instagram.com/imperiogym_federacion" },

  { nombre: "Los Pitufos", rubro: "Librerías/Jugueterías", instagram: "https://instagram.com/lospitufosfederacion" },
  { nombre: "Dulce Papel Federación", rubro: "Librerías/Jugueterías", instagram: "https://instagram.com/dulcepapels" },

  { nombre: "Grupo Scout Inmaculada Concepción N°681", rubro: "Instituciones", instagram: "https://instagram.com/gsinmaculadaconcepcion" },
  { nombre: "Club Social Federación", rubro: "Instituciones", instagram: "https://instagram.com/clubsocialfederacion" },

  { nombre: "Claudio Pizzi — Estilista", rubro: "Belleza y Estética", instagram: "https://instagram.com/estilista_claudio" },
  { nombre: "Peluquería Sentidos", rubro: "Belleza y Estética", instagram: "https://instagram.com/sentidospeluqueria" },
  { nombre: "Valentina Stivanello — Cosmetología y Estética", rubro: "Belleza y Estética", instagram: "https://instagram.com/vs.cosmetologiayestetica" },
  { nombre: "Luciana Rastelli — Estilista", rubro: "Belleza y Estética", instagram: "https://instagram.com/estilista.lucianarastelli" },
  { nombre: "Armonía Belleza y Relax", rubro: "Belleza y Estética", instagram: "https://instagram.com/armoniabellezayrelax" },
  { nombre: "Barbería Los Amigos", rubro: "Belleza y Estética", instagram: "https://instagram.com/losamigos_barberia_fede_turi" },
  { nombre: "MS Centro de Estética", rubro: "Belleza y Estética", instagram: "https://instagram.com/esteticacorporalms" },
  { nombre: "Beuty Make Up", rubro: "Belleza y Estética", instagram: "https://instagram.com/_beutymakeup_" },
  { nombre: "Luciana Studio (uñas)", rubro: "Belleza y Estética", instagram: "https://instagram.com/__luciana_studio__" },
  { nombre: "Nati Inda — Uñas", rubro: "Belleza y Estética", instagram: "https://instagram.com/_nailsbynatii" },
  { nombre: "A&C Nails", rubro: "Belleza y Estética", instagram: "https://instagram.com/a.y.c_nails" },

  { nombre: "FG Graphics", rubro: "Gráficas/Tecnología", instagram: "https://instagram.com/_fg_graphics" },
  { nombre: "GZ Informática", rubro: "Gráficas/Tecnología", instagram: "https://instagram.com/gz_informatica_servicios" },
  { nombre: "Niccell", rubro: "Gráficas/Tecnología", instagram: "https://instagram.com/niccell_ok" },

  { nombre: "La Taberna Federación", rubro: "Restaurantes", instagram: "https://instagram.com/latabernafederacion" },
  { nombre: "Parrilla Sabor a Fuego", rubro: "Restaurantes", instagram: "https://instagram.com/saborafuegoparrilla" },
  { nombre: "La Boutique de la Carne", rubro: "Carnicerías", instagram: "https://instagram.com/laboutiuque_delacarne" },
  { nombre: "Divina Providencia (carnicería)", rubro: "Carnicerías", instagram: "https://instagram.com/carniceria_divina_providencia" },
  { nombre: "Lo de Lidia (carnicería)", rubro: "Carnicerías", instagram: "https://instagram.com/carniceria_lodelidia" },

  { nombre: "La Última Campana (noticias)", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/laultimacampananoticias" },
  { nombre: "FM Posta", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/fm.posta" },
  { nombre: "Mis Pichones (alfajores)", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/mispichones" },
  { nombre: "Finca Dulce", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/fincadulce.federacion" },
  { nombre: "Mate Seco", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/matee.seco" },
  { nombre: "Chiro Ríos (excursiones)", rubro: "Medios/Regionales/Excursiones", instagram: "https://instagram.com/rioschiro" },

  { nombre: "Punto Hogar", rubro: "Hogar/Inmobiliarias", instagram: "https://instagram.com/puntohogar26" },
  { nombre: "Inmobiliaria Schulz", rubro: "Hogar/Inmobiliarias", instagram: "https://instagram.com/inmobiliariaschulz" },
  { nombre: "Inmobiliaria Montecarlo", rubro: "Hogar/Inmobiliarias", instagram: "https://instagram.com/inmobmontecarlo" },
  { nombre: "Inmobiliaria Depauli", rubro: "Hogar/Inmobiliarias", instagram: "https://instagram.com/inmobiliariadepauli" },

  { nombre: "Marzoratti Distribuciones", rubro: "Distribuidoras", instagram: "https://instagram.com/marzorattidistribuciones.fed" },
  { nombre: "La Criolla Pizza", rubro: "Pizzerías", instagram: "https://instagram.com/la_criolla_pizza" },
  { nombre: "Pizzería Del Puerto", rubro: "Pizzerías", instagram: "https://instagram.com/pizzedelpuerto" },
  { nombre: "Verdulería Alva e Hijos", rubro: "Verdulerías", instagram: "https://instagram.com/alvahijos" },
  { nombre: "Polirubro Verdulería/Frutería Disfruta", rubro: "Verdulerías", instagram: "https://instagram.com/polirubro.verduleria" },

  { nombre: "Pintu del Centro Federación", rubro: "Pinturerías", instagram: "https://instagram.com/pintudelcentrofederacion" },
  { nombre: "La Reina Panadería", rubro: "Panaderías", instagram: "https://instagram.com/lareinapanificacion" },
  { nombre: "La Piamontesa (panadería)", rubro: "Panaderías", instagram: "https://instagram.com/lapiamontesapanaderia" },
  { nombre: "Corralón Federación", rubro: "Corralones", instagram: "https://instagram.com/corralon.federacion" },

  { nombre: "Drugstore Verde Esmeralda", rubro: "Kioscos y Drugstores", instagram: "https://instagram.com/drugstoreverde.esmeralda" },
  { nombre: "Drugstore Urquiza", rubro: "Kioscos y Drugstores", instagram: "https://instagram.com/drugstoreurquiza_" },
  { nombre: "Chetomal Drugstore", rubro: "Kioscos y Drugstores", instagram: "https://instagram.com/chetomaldrugstore" },
  { nombre: "A La Cucha — Clínica Veterinaria", rubro: "Veterinarias", instagram: "https://instagram.com/veterinaria.alacucha" },
  { nombre: "Lobo Mayorista", rubro: "Supermercados", instagram: "https://instagram.com/lobo_mayorista" },
  { nombre: "Autoservicio Yvu Vera", rubro: "Supermercados", instagram: "https://instagram.com/yvuvera" },
  { nombre: "Farmacia Barbieri", rubro: "Farmacias", instagram: "https://instagram.com/farmacia.barbieri.fcion" },
];
