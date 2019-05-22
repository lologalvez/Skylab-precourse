

var dictionary = [
    [
        {letter:'a', question:`Con la A. Nombre de la hija menor de Ned Stark.`, answer:'Arya', status:0},
        {letter:'a', question:'Con la A. Nombre real de Jon Snow.', answer:'Aegon', status:0},
        {letter:'a', question:'Con la A. Fortaleza ancestral de la Casa Tully.', answer:'Aguasdulces', status:0}
    ],
    [
        {letter:'b', question:'Con la B. Ciudad Libre en la que se encuentra el Banco de Hierro.', answer:'Braavos', status:0},
        {letter:'b', question:'Con la B. Apellido del señor de Invernalia tras la boda roja y hasta la Batalla de los Bastardos.', answer:'Bolton', status:0},
        {letter:'b', question:'Con la B. Nombre de pila del joven tullido Stark.', answer:'Bran', status:0}
    ],
    [
        {letter:'c', question:'Con la C. Nombre de pila del hermano de La Montaña.', answer:'Clegane', status:0},
        {letter:'c', question:'Con la C. Animal emblema de la Casa Baratheon.', answer:'Ciervo', status:0},
        {letter:'c', question:'Con la C. Ave que es usada como sistema de mensajería en los Siete Reinos.', answer:'Cuervo', status:0}
    ],
    [
        {letter:'d', question:'Con la D. Madre de dragones, Reina de los Ándalos, rompedora de cadenas, la que no arde.', answer:'Daenerys', status:0},
        {letter:'d', question:'Con la D. Península al sur de los siete reinos gobernada por la casa Martell.', answer:'Dorne', status:0},
        {letter:'d', question:'Con la D. Señores de los caballos nómadas de Essos.', answer:'Dothraki', status:0}
    ],
    [
        {letter:'e', question:'Con la E. Nombre de pila de la hermana de Oberyn Martell, violada y asesinada por La Montaña.', answer:'Elia', status:0},
        {letter:'e', question:'', answer:'', status:0},
        {letter:'e', question:'', answer:'', status:0}
    ],
    [
        {letter:'f', question:'Con la F. Apellido de la familia anfitriona de la Boda Roja.', answer:'Frey', status:0},
        {letter:'f', question:'Con la F. Nombre del lobo de Jon Snow.', answer:'Fantasma', status:0},
        {letter:'f', question:'Con la F.', answer:'', status:0}
    ],
    [
        {letter:'g', question:'Con la G. Casa que gobierna Pyke, las Islas del Hierro', answer:'Greyjoy', status:0},
        {letter:'g', question:'Con la G. Ser mitológico de gran altura que puede encontrarse más allá del muro.', answer:'Gigante', status:0},
        {letter:'g', question:'Con la G. Nombre de la espada que Jon Snow recibe como regalo de parte de Jeor Mormont.', answer:'Garra', status:0}
    ],
    [
        {letter:'h', question:'Con la H. Tipo de lobos que encuentran los hijos de Ned Stark.', answer:'Huargo', status:0},
        {letter:'h', question:'Con la H. Mozo de cuadra de los Stark capaz de articular una única palabra.', answer:'Hodor', status:0},
        {letter:'h', question:'Con la H. Presente de boda que Daenerys recibe de parte de Illyrio Mopatis.', answer:'Huevos', status:0}
    ],
    [
        {letter:'i', question:'Con la I. Soldados-esclavo y eunucos entrenados en Astapor.', answer:'Inmaculados', status:0},
        {letter:'i', question:'Con la I. Fortaleza ancestral de los Stark.', answer:'Invernalia', status:0},
    ],
    [
        {letter:'j', question:'Con la J. Hijo mayor de Cersei Lannister.', answer:'Joffrey', status:0},
        {letter:'j', question:'Con la J. Animal que hiere de muerte a Robert Baratheon.', answer:'Jabalí', status:0},
        {letter:'j', question:'con la J. Fiel compañero de Daenerys Targaryen, hijo de Jeor Mormont.', answer:'Jorah', status:0}
    ],
    [
        {letter:'k', question:'Con la K. Reina en lengua Dothraki.', answer:'Khaleesi', status:0},
        {letter:'k', question:'Con la K. Rey en lengua Dothraki', answer:'Khal', status:0},
        {letter:'k', question:'Con la K. Casa norteña, aliada de los Stark', answer:'Karstark', status:0},
    ],
    [
        {letter:'l', question:'Con la L. Nombre de pila de la hermana de Ned Stark.', answer:'Lyanna', status:0},
        {letter:'l', question:'Con la L. Animal emblema de la Casa Lannister.', answer:'León', status:0},
        {letter:'l', question:'Con la L. Animal emblema de la Casa Stark.', answer:'Lobo', status:0}
    ],
        [
        {letter:'m', question:'Con la M. Barrera de hielo que separa los Siete Reinos de las Tierras Salvajes.', answer:'Muro', status:0},
        {letter:'m', question:'Con la M. Cargo que ostenta el consejero más cercano al Rey en los Siete Reinos.', answer:'Mano', status:0},
        {letter:'m', question:'con la M. Nombre de pila de la hermana de Loras Tyrell.', answer:'Margaery', status:0}
    ],
    [
        {letter:'n', question:'Con la N. Apellido que reciben (en castellano) los bastardos nacidos en el Norte.', answer:'Nieve', status:0},
        {letter:'n', question:'Con la N. Nombre de la loba de Arya Stark.', answer:'Nymeria', status:0},
    ],
    [
        {letter:'ñ', question:'Contiene la Ñ. Apodo de Petyr Baelish.', answer:'Meñique', status:0},
        {letter:'ñ', question:'Contiene la Ñ. Arma que Arya Stark usa contra el Rey de la Noche.', answer:'Puñal', status:0},
    ],
    [
        {letter:'o', question:'Con la O. Nombre de pila de La Víbora.', answer:'Oberyn', status:0},
        {letter:'o', question:'Con la O. Nombre de pila de la Salvaje que ayuda a los pequeños Stark a huir de Invernalia.', answer:'Osha', status:0},
    ],
        [
        {letter:'p', question:'Con la P. Negocio del que es propietario Petyr Baelish en Desembarco del Rey.', answer:'Prostíbulo', status:0},
        {letter:'p', question:'Con la P. Extraña enfermedad que padecen la hija de Stannis Baratheon.', answer:'Psoriagrís', status:0},
        {letter:'p', question:'Con la P. Mote con el que es conocido Sandor Clegane', answer:'Perro', status:0}
    ],
    [
        {letter:'q', question:'Con la Q. Ciudad Libre dónde se le niega la entrada a Daenerys Targaryen por negarse a enseñar sus dragones.', answer:'Qarth', status:0},
        {letter:'q', question:'Contiene la Q. Maestre y alquimista que ayuda a Cersei a volar el septo.', answer:'Qyburn', status:0},
    ],
    [
        {letter:'r', question:'Con la R. Nombre de pila del hijo menor de Ned Stark.', answer:'Rickon', status:0},
        {letter:'r', question:'Con la R. Nombre de uno de los dragones de Daenerys.', answer:'Rhaegal', status:0},
        {letter:'r', question:'Con la R. Animal emblema de la Casa Stark.', answer:'Lobo', status:0}
    ],
    [
        {letter:'s', question:'Con la S. Apellido que reciben los bastardos del sur (inglés).', answer:'Sand', status:0},
        {letter:'s', question:'Con la S. Nombre de pila del profesor de esgrima de Arya Stark .', answer:'Syrio', status:0},
        {letter:'s', question:'Con la S. Nombre de pila de la hija enferma de Stannis Baratheon.', answer:'Shireen', status:0}
    ],
    [
        {letter:'t', question:'Con la T. Batalla que decidió el resultado de La Rebelió de Robert.', answer:'Tridente', status:0},
        {letter:'t', question:'Con la T. Nombre de pila del hijo de Balon Greyjoy, criado por los Stark.', answer:'Theon', status:0},
        {letter:'t', question:'Con la T. Casa a la que pertenece Sam, el mejor amigo de Jon Snow.', answer:'Tarly', status:0}
    ],
    [
        {letter:'u', question:'Con la U. Casa a la que pertenece Great Jon, el primero en proponer a Robb Stark Rey en el Norte.', answer:'Umber', status:0},Batalla que decidió el resultado de La Rebelió de Robert
    ],
    [
        {letter:'v', question:'Con la V. Material de color oscuro capaz de acabar con los Caminantes Blancos.', answer:'Vidriagón', status:0},
        {letter:'v', question:'Con la V. Ciudad libre de la que procede Talisa, la mujer de Robb Stark.', answer:'Volantis', status:0},
        {letter:'v', question:'Con la V. Tipo de acero del que está hecho Garra, la espada de Jon Snow.', answer:'Valirio', status:0}
    ],
    [
        {letter:'w', question:'Con la W. Nombre del continente dónde se encuentran los siete reinos.', answer:'Westeros', status:0},
        {letter:'w', question:'Con la W. Nombre de pila de la esposa de Roose Boltón, hija de Walder Frey.', answer:'Walda', status:0},
        {letter:'w', question:'Con la W. Apellido de la actriz que interpreta a Arya Stark en la serie.', answer:'Williams', status:0}
    ],
    [
        {letter:'x', question:'Contiene la X. Orientación sexual de Oberyn Martell.', answer:'Bisexual', status:0},
        {letter:'x', question:'Contiene la X. Orientación sexual de Loras Tyrell.', answer:'Homosexual', status:0},
    ],
    [
        {letter:'y', question:'Con la Y. Nombre de la Salvaje de la que se enamora Jon Snow.', answer:'Ygritte', status:0},
        {letter:'y', question:'Contiene la Y. Nombre del hijo bastardo de Robert Baratheon que trabaja en la forja.', answer:'Gendry', status:0},
        {letter:'y', question:'Con la Y. Nombre de pila de la hermana de Theon Greyjoy.', answer:'Yara', status:0},
    ],
    [
        {letter:'z', question:'Con la Z. Animal emblema de la Casa Florent', answer:'Zorro', status:0},
        {letter:'z', question:'Con la Z. Caminante blanco, no-muerto, muerto viviente.', answer:'Zombie', status:0}
    ],
]
    

