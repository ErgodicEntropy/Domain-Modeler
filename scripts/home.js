const domainModel = [
  // ===================== C++ =====================
[
  {
    knowledgeUnit: "C++",
    definition: "Langage de programmation compilé multiparadigme supportant la programmation procédurale, orientée objet et générique.",
    purpose: "Servir de base au développement de logiciels performants et proches du matériel.",
    references: [
      "https://isocpp.org/",
      "https://en.cppreference.com/"
    ],
    prerequisites: []
  },
  {
    knowledgeUnit: "Compilation",
    definition: "Processus de transformation du code source en code machine via les phases de prétraitement, compilation, assemblage et édition de liens.",
    purpose: "Produire un exécutable et détecter les erreurs à la compilation.",
    references: [
      "https://en.cppreference.com/w/cpp/language/translation_phases"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Types fondamentaux",
    definition: "Types primitifs fournis par le langage tels que int, double, char et bool.",
    purpose: "Représenter et manipuler les données de base d’un programme.",
    references: [
      "https://en.cppreference.com/w/cpp/language/types"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Pointeurs",
    definition: "Variables contenant l’adresse mémoire d’une autre variable ou d’un objet.",
    purpose: "Permettre l’accès direct à la mémoire et la création de structures dynamiques.",
    references: [
      "https://en.cppreference.com/w/cpp/language/pointer"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Références",
    definition: "Alias typé vers une variable existante ne pouvant pas être réassigné.",
    purpose: "Simplifier la manipulation d’objets sans copie inutile.",
    references: [
      "https://en.cppreference.com/w/cpp/language/reference"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Allocation dynamique",
    definition: "Création et destruction d’objets à l’exécution à l’aide de new et delete.",
    purpose: "Gérer la durée de vie des objets dynamiques.",
    references: [
      "https://en.cppreference.com/w/cpp/language/new"
    ],
    prerequisites: [3]
  },
  {
    knowledgeUnit: "RAII",
    definition: "Principe liant la durée de vie des ressources à celle des objets.",
    purpose: "Garantir la libération automatique et sûre des ressources.",
    references: [
      "https://en.cppreference.com/w/cpp/language/raii"
    ],
    prerequisites: [5]
  },
  {
    knowledgeUnit: "Classes et objets",
    definition: "Mécanisme permettant de regrouper données et comportements au sein d’une même entité.",
    purpose: "Structurer les programmes selon le paradigme orienté objet.",
    references: [
      "https://en.cppreference.com/w/cpp/language/class"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Constructeurs",
    definition: "Fonctions membres spéciales appelées lors de la création d’un objet.",
    purpose: "Assurer une initialisation valide et cohérente.",
    references: [
      "https://en.cppreference.com/w/cpp/language/constructor"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Destructeurs",
    definition: "Fonctions membres appelées automatiquement lors de la destruction d’un objet.",
    purpose: "Libérer les ressources détenues par l’objet.",
    references: [
      "https://en.cppreference.com/w/cpp/language/destructor"
    ],
    prerequisites: [8]
  },
  {
    knowledgeUnit: "Encapsulation",
    definition: "Principe consistant à protéger l’état interne d’un objet via des niveaux d’accès.",
    purpose: "Réduire le couplage et améliorer la maintenabilité.",
    references: [
      "https://en.cppreference.com/w/cpp/language/access"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Mécanisme permettant à une classe de dériver d’une autre.",
    purpose: "Favoriser la réutilisation et la spécialisation du comportement.",
    references: [
      "https://en.cppreference.com/w/cpp/language/derived_class"
    ],
    prerequisites: [10]
  },
  {
    knowledgeUnit: "Fonctions virtuelles",
    definition: "Fonctions membres dont la liaison est résolue à l’exécution.",
    purpose: "Permettre le polymorphisme dynamique.",
    references: [
      "https://en.cppreference.com/w/cpp/language/virtual"
    ],
    prerequisites: [11]
  },
  {
    knowledgeUnit: "Classe abstraite",
    definition: "Classe ne pouvant pas être instanciée et contenant au moins une fonction virtuelle pure.",
    purpose: "Définir une abstraction commune pour des classes dérivées.",
    references: [
      "https://en.cppreference.com/w/cpp/language/abstract_class"
    ],
    prerequisites: [12]
  },
  {
    knowledgeUnit: "Polymorphisme",
    definition: "Capacité à manipuler des objets de types différents via une interface commune.",
    purpose: "Rendre les systèmes extensibles sans modifier le code existant.",
    references: [
      "https://en.cppreference.com/w/cpp/language/virtual"
    ],
    prerequisites: [13]
  },
  {
    knowledgeUnit: "Destructeur virtuel",
    definition: "Destructeur déclaré virtual assurant la destruction complète d’un objet polymorphe.",
    purpose: "Éviter les fuites mémoire lors de la destruction via un pointeur de base.",
    references: [
      "https://en.cppreference.com/w/cpp/language/destructor"
    ],
    prerequisites: [12]
  },
  {
    knowledgeUnit: "Templates",
    definition: "Mécanisme de programmation générique paramétrant les types.",
    purpose: "Écrire du code réutilisable sans perte de performance.",
    references: [
      "https://en.cppreference.com/w/cpp/language/templates"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Règle des trois et des cinq",
    definition: "Principes définissant les fonctions spéciales à implémenter pour une gestion correcte des ressources.",
    purpose: "Éviter les erreurs de copie et optimiser les performances.",
    references: [
      "https://en.cppreference.com/w/cpp/language/rule_of_three"
    ],
    prerequisites: [9, 6]
  }
],

  // ===================== PHP =====================
[
  {
    knowledgeUnit: "PHP",
    definition: "Langage de script côté serveur principalement utilisé pour le développement web dynamique.",
    purpose: "Permettre la création de pages web dynamiques et d’applications côté serveur.",
    references: [
      "https://www.php.net/",
      "https://www.php.net/manual/fr/"
    ],
    prerequisites: []
  },
  {
    knowledgeUnit: "Syntaxe de base",
    definition: "Règles fondamentales d’écriture du code PHP, incluant les balises, instructions et commentaires.",
    purpose: "Comprendre la structure minimale d’un script PHP.",
    references: [
      "https://www.php.net/manual/fr/language.basic-syntax.php"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Variables",
    definition: "Identificateurs précédés de $ servant à stocker des valeurs dynamiques.",
    purpose: "Manipuler des données tout au long de l’exécution du script.",
    references: [
      "https://www.php.net/manual/fr/language.variables.php"
    ],
    prerequisites: [1]
  },
  {
    knowledgeUnit: "Constantes",
    definition: "Identificateurs dont la valeur ne peut pas être modifiée après définition.",
    purpose: "Définir des valeurs fixes et globales.",
    references: [
      "https://www.php.net/manual/fr/language.constants.php"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Types de données",
    definition: "Catégories de valeurs telles que int, float, string, bool, array et object.",
    purpose: "Structurer et manipuler correctement les données.",
    references: [
      "https://www.php.net/manual/fr/language.types.php"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Opérateurs",
    definition: "Symboles permettant d’effectuer des opérations arithmétiques, logiques et de comparaison.",
    purpose: "Transformer et comparer des valeurs.",
    references: [
      "https://www.php.net/manual/fr/language.operators.php"
    ],
    prerequisites: [4]
  },
  {
    knowledgeUnit: "Structures de contrôle",
    definition: "Instructions conditionnelles et itératives telles que if, switch, for et while.",
    purpose: "Contrôler le flux d’exécution du programme.",
    references: [
      "https://www.php.net/manual/fr/language.control-structures.php"
    ],
    prerequisites: [5]
  },
  {
    knowledgeUnit: "Fonctions",
    definition: "Blocs de code réutilisables pouvant accepter des paramètres et retourner une valeur.",
    purpose: "Modulariser le code et éviter les répétitions.",
    references: [
      "https://www.php.net/manual/fr/language.functions.php"
    ],
    prerequisites: [6]
  },
  {
    knowledgeUnit: "Tableaux",
    definition: "Structures de données permettant de stocker plusieurs valeurs indexées ou associatives.",
    purpose: "Manipuler des collections de données.",
    references: [
      "https://www.php.net/manual/fr/language.types.array.php"
    ],
    prerequisites: [4]
  },
  {
    knowledgeUnit: "Superglobales",
    definition: "Variables prédéfinies accessibles globalement telles que $_GET, $_POST et $_SERVER.",
    purpose: "Accéder aux données de requête et d’environnement.",
    references: [
      "https://www.php.net/manual/fr/language.variables.superglobals.php"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Formulaires HTML et PHP",
    definition: "Mécanisme de récupération des données utilisateur envoyées via GET ou POST.",
    purpose: "Permettre l’interaction entre l’utilisateur et le serveur.",
    references: [
      "https://www.php.net/manual/fr/tutorial.forms.php"
    ],
    prerequisites: [9]
  },
  {
    knowledgeUnit: "Validation et sécurisation des entrées",
    definition: "Techniques de filtrage et de validation des données utilisateur.",
    purpose: "Prévenir les attaques comme XSS et injections.",
    references: [
      "https://www.php.net/manual/fr/filter.filters.php"
    ],
    prerequisites: [10]
  },
  {
    knowledgeUnit: "Gestion des fichiers",
    definition: "Lecture, écriture et manipulation de fichiers côté serveur.",
    purpose: "Persister des données et gérer des ressources locales.",
    references: [
      "https://www.php.net/manual/fr/book.filesystem.php"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Gestion des sessions",
    definition: "Mécanisme permettant de conserver des données utilisateur entre plusieurs requêtes.",
    purpose: "Maintenir un état utilisateur côté serveur.",
    references: [
      "https://www.php.net/manual/fr/book.session.php"
    ],
    prerequisites: [9]
  },
  {
    knowledgeUnit: "Programmation orientée objet en PHP",
    definition: "Utilisation de classes, objets, attributs et méthodes en PHP.",
    purpose: "Structurer le code de manière modulaire et réutilisable.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.php"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Encapsulation",
    definition: "Utilisation des niveaux de visibilité public, protected et private.",
    purpose: "Protéger l’état interne des objets.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.visibility.php"
    ],
    prerequisites: [14]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Mécanisme permettant à une classe d’en étendre une autre.",
    purpose: "Réutiliser et spécialiser le comportement des classes.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.inheritance.php"
    ],
    prerequisites: [15]
  },
  {
    knowledgeUnit: "Classes abstraites et interfaces",
    definition: "Structures permettant de définir des contrats et des abstractions.",
    purpose: "Imposer une architecture cohérente et extensible.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.abstract.php"
    ],
    prerequisites: [16]
  },
  {
    knowledgeUnit: "Exceptions et gestion des erreurs",
    definition: "Mécanisme de gestion des erreurs via try, catch et throw.",
    purpose: "Gérer proprement les erreurs et améliorer la robustesse.",
    references: [
      "https://www.php.net/manual/fr/language.exceptions.php"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Connexion à une base de données (PDO)",
    definition: "Interface permettant d’interagir avec des bases de données relationnelles.",
    purpose: "Accéder aux données persistantes de manière sécurisée.",
    references: [
      "https://www.php.net/manual/fr/book.pdo.php"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "SQL avec PHP",
    definition: "Utilisation de requêtes SQL préparées pour manipuler les données.",
    purpose: "Gérer efficacement les données applicatives.",
    references: [
      "https://www.php.net/manual/fr/pdo.prepared-statements.php"
    ],
    prerequisites: [19]
  }
],
  // ===================== UML =====================
[
  {
    knowledgeUnit: "UML",
    definition: "Langage de modélisation graphique standardisé pour représenter, spécifier, concevoir et documenter les systèmes logiciels.",
    purpose: "Fournir une représentation commune et compréhensible d’un système avant et pendant son développement.",
    references: [
      "https://www.uml-diagrams.org/",
      "https://www.omg.org/spec/UML/"
    ],
    prerequisites: []
  },
  {
    knowledgeUnit: "Diagramme de cas d’utilisation",
    definition: "Diagramme UML décrivant les interactions entre acteurs et système via des cas d’utilisation.",
    purpose: "Capturer les besoins fonctionnels du système du point de vue utilisateur.",
    references: [
      "https://www.uml-diagrams.org/use-case-diagrams.html"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Diagramme de classes",
    definition: "Diagramme statique représentant les classes, leurs attributs, méthodes et les relations entre elles.",
    purpose: "Modéliser la structure orientée objet d’un système.",
    references: [
      "https://www.uml-diagrams.org/class-diagrams-overview.html"
    ],
    prerequisites: [1]
  },
  {
    knowledgeUnit: "Classe",
    definition: "Description abstraite d’un ensemble d’objets partageant les mêmes attributs et comportements.",
    purpose: "Structurer les données et comportements d’un système orienté objet.",
    references: [
      "https://www.uml-diagrams.org/class.html"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Classe abstraite",
    definition: "Classe qui ne peut pas être instanciée et sert de modèle conceptuel pour des classes concrètes.",
    purpose: "Exprimer une abstraction partielle et factoriser des comportements communs.",
    references: [
      "https://www.uml-diagrams.org/class.html"
    ],
    prerequisites: [3]
  },
  {
    knowledgeUnit: "Interface",
    definition: "Contrat définissant un ensemble de méthodes que les classes implémentantes doivent fournir.",
    purpose: "Séparer la spécification des comportements de leur implémentation concrète.",
    references: [
      "https://www.uml-diagrams.org/interface.html"
    ],
    prerequisites: [4]
  },
  {
    knowledgeUnit: "Association",
    definition: "Relation structurelle décrivant un lien logique entre deux classes.",
    purpose: "Modéliser les collaborations entre objets.",
    references: [
      "https://www.uml-diagrams.org/association.html"
    ],
    prerequisites: [3]
  },
  {
    knowledgeUnit: "Agrégation",
    definition: "Relation faible de type tout/partie où les objets peuvent exister indépendamment.",
    purpose: "Exprimer une relation de possession non contraignante.",
    references: [
      "https://www.uml-diagrams.org/aggregation.html"
    ],
    prerequisites: [6]
  },
  {
    knowledgeUnit: "Composition",
    definition: "Relation forte de type tout/partie impliquant une dépendance de cycle de vie.",
    purpose: "Garantir la cohérence entre les objets composés.",
    references: [
      "https://www.uml-diagrams.org/composition.html"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Relation de généralisation permettant à une classe de réutiliser et spécialiser une autre.",
    purpose: "Favoriser la réutilisation et l’extension contrôlée des comportements.",
    references: [
      "https://www.uml-diagrams.org/generalization.html"
    ],
    prerequisites: [4]
  },
  {
    knowledgeUnit: "Polymorphisme",
    definition: "Capacité d’utiliser une interface commune pour des comportements différents selon le type concret.",
    purpose: "Permettre la flexibilité et l’extensibilité du système.",
    references: [
      "https://www.uml-diagrams.org/generalization.html",
      "https://www.uml-diagrams.org/polymorphism.html"
    ],
    prerequisites: [9, 5]
  },
  {
    knowledgeUnit: "Diagramme de séquence",
    definition: "Diagramme dynamique montrant l’ordre temporel des échanges de messages entre objets.",
    purpose: "Décrire le comportement dynamique d’un scénario précis.",
    references: [
      "https://www.uml-diagrams.org/sequence-diagrams.html"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Diagramme d’états",
    definition: "Diagramme représentant les différents états possibles d’un objet et les transitions entre eux.",
    purpose: "Modéliser le comportement interne dépendant du temps et des événements.",
    references: [
      "https://www.uml-diagrams.org/state-machine-diagrams.html"
    ],
    prerequisites: [11]
  },
  {
    knowledgeUnit: "Diagramme d’activités",
    definition: "Diagramme représentant le flux de contrôle ou d’activités dans un processus ou système.",
    purpose: "Visualiser les workflows et processus métier.",
    references: [
      "https://www.uml-diagrams.org/activity-diagrams.html"
    ],
    prerequisites: [11]
  },
  {
    knowledgeUnit: "Diagramme de composants",
    definition: "Diagramme représentant les composants logiciels et leurs relations.",
    purpose: "Planifier l’architecture physique et la modularité d’un système.",
    references: [
      "https://www.uml-diagrams.org/component-diagrams.html"
    ],
    prerequisites: [2]
  },
  {
    knowledgeUnit: "Diagramme de déploiement",
    definition: "Diagramme représentant les nœuds matériels et le déploiement des composants logiciels.",
    purpose: "Modéliser l’infrastructure et la distribution du système.",
    references: [
      "https://www.uml-diagrams.org/deployment-diagrams.html"
    ],
    prerequisites: [15]
  }
], 
// ===================== Networking =====================
[
  {
    knowledgeUnit: "Computer Networks",
    definition: "A collection of interconnected devices that can communicate and share resources.",
    purpose: "Understand how computers and devices communicate, exchange data, and access shared resources.",
    references: [
      "https://www.geeksforgeeks.org/computer-network-tutorials/",
      "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking.html"
    ],
    prerequisites: []
  },
  {
    knowledgeUnit: "Network Types",
    definition: "Classification of networks based on coverage: LAN, WAN, MAN, PAN.",
    purpose: "Understand different network scopes and their applications.",
    references: [
      "https://www.geeksforgeeks.org/types-of-computer-network/",
      "https://www.cisco.com/c/en/us/products/routers/what-is-a-router.html"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Network Topologies",
    definition: "Physical and logical arrangement of network devices: bus, star, ring, mesh, tree, hybrid.",
    purpose: "Design networks with optimal connectivity, reliability, and scalability.",
    references: [
      "https://www.geeksforgeeks.org/network-topologies/",
      "https://www.tutorialspoint.com/computer_network/computer_network_topologies.htm"
    ],
    prerequisites: [1]
  },
  {
    knowledgeUnit: "Network Models",
    definition: "Abstract frameworks to standardize networking: OSI model (7 layers) and TCP/IP model (4 layers).",
    purpose: "Understand how data flows through networks and how protocols interact.",
    references: [
      "https://www.geeksforgeeks.org/layers-of-osi-model/",
      "https://www.cisco.com/c/en/us/about/press/internet-protocol-journal/blogs/200404.html"
    ],
    prerequisites: [0]
  },
  {
    knowledgeUnit: "Physical Layer",
    definition: "The OSI layer responsible for transmitting raw bits over a physical medium.",
    purpose: "Understand cabling, electrical signals, fiber optics, and wireless transmissions.",
    references: [
      "https://www.geeksforgeeks.org/layers-of-osi-model/"
    ],
    prerequisites: [3]
  },
  {
    knowledgeUnit: "Data Link Layer",
    definition: "OSI layer that provides node-to-node data transfer and error detection/correction.",
    purpose: "Understand framing, MAC addresses, switches, and ARP.",
    references: [
      "https://www.geeksforgeeks.org/data-link-layer/"
    ],
    prerequisites: [4]
  },
  {
    knowledgeUnit: "Network Layer",
    definition: "OSI layer responsible for routing, addressing, and forwarding packets across networks.",
    purpose: "Learn about IP addressing, routing algorithms, and packet delivery.",
    references: [
      "https://www.geeksforgeeks.org/network-layer-in-computer-network/"
    ],
    prerequisites: [5]
  },
  {
    knowledgeUnit: "Transport Layer",
    definition: "OSI layer providing end-to-end communication services such as reliable delivery and flow control.",
    purpose: "Understand TCP, UDP, ports, and multiplexing.",
    references: [
      "https://www.geeksforgeeks.org/transport-layer-in-computer-network/"
    ],
    prerequisites: [6]
  },
  {
    knowledgeUnit: "Session, Presentation, and Application Layers",
    definition: "OSI layers managing sessions, data translation, encryption, and application protocols.",
    purpose: "Understand how applications communicate and how data is formatted and secured.",
    references: [
      "https://www.geeksforgeeks.org/osi-model-layers/",
      "https://www.tutorialspoint.com/osi-model"
    ],
    prerequisites: [7]
  },
  {
    knowledgeUnit: "IP Addressing",
    definition: "Unique numerical identifiers assigned to devices for network communication: IPv4, IPv6.",
    purpose: "Enable devices to locate each other on networks and route packets correctly.",
    references: [
      "https://www.geeksforgeeks.org/ip-addressing-in-computer-network/",
      "https://tools.ietf.org/html/rfc791"
    ],
    prerequisites: [6]
  },
  {
    knowledgeUnit: "Subnetting",
    definition: "Dividing an IP network into smaller sub-networks to optimize routing and address allocation.",
    purpose: "Improve network efficiency and management.",
    references: [
      "https://www.geeksforgeeks.org/subnetting-in-computer-network/"
    ],
    prerequisites: [9]
  },
  {
    knowledgeUnit: "Routing",
    definition: "The process of selecting paths for traffic in a network using routing algorithms and protocols.",
    purpose: "Ensure data is delivered efficiently across multiple networks.",
    references: [
      "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking.html",
      "https://www.geeksforgeeks.org/routing-in-computer-network/"
    ],
    prerequisites: [6, 9]
  },
  {
    knowledgeUnit: "Switching",
    definition: "Process of forwarding data at the data link layer using MAC addresses within LANs.",
    purpose: "Enable efficient communication between devices on the same network segment.",
    references: [
      "https://www.geeksforgeeks.org/switching-in-computer-network/"
    ],
    prerequisites: [5]
  },
  {
    knowledgeUnit: "NAT and DHCP",
    definition: "Network Address Translation maps private IPs to public IPs; DHCP automatically assigns IP addresses.",
    purpose: "Manage IP addressing dynamically and enable connectivity to the internet.",
    references: [
      "https://www.geeksforgeeks.org/nat-in-computer-network/",
      "https://www.geeksforgeeks.org/dhcp-dynamic-host-configuration-protocol/"
    ],
    prerequisites: [9]
  },
  {
    knowledgeUnit: "DNS",
    definition: "Domain Name System translates human-readable domain names into IP addresses.",
    purpose: "Enable user-friendly addressing and access to resources on the internet.",
    references: [
      "https://www.cloudflare.com/learning/dns/what-is-dns/"
    ],
    prerequisites: [9]
  },
  {
    knowledgeUnit: "TCP/IP Protocol Suite",
    definition: "The set of protocols enabling end-to-end communication over the internet, including TCP, UDP, IP, HTTP, etc.",
    purpose: "Provide reliable, standardized communication between devices across heterogeneous networks.",
    references: [
      "https://www.geeksforgeeks.org/tcp-ip-model/",
      "https://tools.ietf.org/html/rfc793"
    ],
    prerequisites: [4, 6, 7, 10]
  },
  {
    knowledgeUnit: "Sockets and Ports",
    definition: "Endpoints for sending and receiving data, combining IP addresses with port numbers.",
    purpose: "Enable communication between processes on networked devices.",
    references: [
      "https://www.geeksforgeeks.org/socket-programming-in-cc-handling-multiple-clients-on-server-with-multi-threading/"
    ],
    prerequisites: [7, 16]
  },
  {
    knowledgeUnit: "Firewalls and Security",
    definition: "Devices or software controlling incoming/outgoing network traffic based on security rules.",
    purpose: "Protect networks and systems from unauthorized access and attacks.",
    references: [
      "https://www.geeksforgeeks.org/firewall-in-computer-network/"
    ],
    prerequisites: [11, 14]
  },
  {
    knowledgeUnit: "Wireless Networking",
    definition: "Communication between devices over radio waves: Wi-Fi, Bluetooth, LTE, 5G.",
    purpose: "Enable mobility and flexible network deployment without physical cables.",
    references: [
      "https://www.geeksforgeeks.org/wireless-networking/"
    ],
    prerequisites: [4, 5]
  },
  {
    knowledgeUnit: "Network Troubleshooting",
    definition: "Techniques and tools to diagnose and fix network issues: ping, traceroute, netstat, Wireshark.",
    purpose: "Maintain network reliability and quickly resolve connectivity problems.",
    references: [
      "https://www.geeksforgeeks.org/network-troubleshooting-commands-in-linux/"
    ],
    prerequisites: [0, 4, 6]
  }
], 
// ===================== WebDev =====================
[
  {
    "knowledgeUnit": "Introduction to Web Development",
    "definition": "The practice of building websites and web applications that run on browsers or servers. Involves front-end (client-side) and back-end (server-side) development, understanding HTTP protocols, and web architecture.",
    "purpose": "Understand the fundamental concepts of the web, how websites and applications are built and served, and the roles of front-end, back-end, and databases.",
    "references": [
      "https://www.geeksforgeeks.org/web-development/",
      "https://www.tutorialspoint.com/web_development/index.htm"
    ],
    "prerequisites": []
  },
  {
    "knowledgeUnit": "HTML (HyperText Markup Language)",
    "definition": "The standard markup language used to create the structure and content of web pages. Elements include headings, paragraphs, links, images, tables, forms, and semantic tags.",
    "purpose": "Provide the structure and content of web pages and form the foundation for front-end development.",
    "references": [
      "https://www.geeksforgeeks.org/html-tutorials/",
      "https://www.tutorialspoint.com/html/index.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "CSS (Cascading Style Sheets)",
    "definition": "A stylesheet language used to describe the presentation of HTML elements, including layout, colors, fonts, animations, and responsive design. Supports selectors, combinators, and media queries.",
    "purpose": "Control the visual appearance of web pages and enable responsive and adaptive designs for multiple devices.",
    "references": [
      "https://www.geeksforgeeks.org/css-tutorials/",
      "https://www.tutorialspoint.com/css/index.htm"
    ],
    "prerequisites": [1]
  },
  {
    "knowledgeUnit": "JavaScript",
    "definition": "A high-level, interpreted programming language used to create dynamic and interactive behavior in web pages. Includes variables, functions, objects, DOM manipulation, event handling, and asynchronous programming.",
    "purpose": "Enhance user interactivity, handle client-side logic, and manipulate HTML and CSS dynamically.",
    "references": [
      "https://www.geeksforgeeks.org/javascript-tutorial/",
      "https://www.tutorialspoint.com/javascript/index.htm"
    ],
    "prerequisites": [1, 2]
  },
  {
    "knowledgeUnit": "DOM (Document Object Model) Manipulation",
    "definition": "Represents the structure of a web page as a tree of objects that can be accessed and modified using JavaScript. Includes methods like querySelector, getElementById, appendChild, and event listeners.",
    "purpose": "Enable dynamic updates to web page content, handle events, and create interactive web applications.",
    "references": [
      "https://www.geeksforgeeks.org/dom-document-object-model/",
      "https://www.tutorialspoint.com/javascript/javascript_dom.htm"
    ],
    "prerequisites": [3]
  },
  {
    "knowledgeUnit": "Front-End Frameworks and Libraries",
    "definition": "Tools like React, Angular, and Vue.js that provide reusable components, virtual DOM, data binding, and routing for building scalable and maintainable front-end applications.",
    "purpose": "Simplify front-end development, improve maintainability, enable component-based design, and enhance user experience.",
    "references": [
      "https://reactjs.org/",
      "https://angular.io/",
      "https://vuejs.org/"
    ],
    "prerequisites": [3, 4]
  },
  {
    "knowledgeUnit": "Responsive Web Design",
    "definition": "Techniques to ensure web applications work on various devices and screen sizes, using flexible grids, media queries, and relative units (%, em, rem).",
    "purpose": "Provide optimal user experience on desktops, tablets, and mobile devices.",
    "references": [
      "https://www.geeksforgeeks.org/responsive-web-design/",
      "https://www.tutorialspoint.com/responsive_web_design/index.htm"
    ],
    "prerequisites": [2, 3]
  },
  {
    "knowledgeUnit": "HTTP Protocol and REST APIs",
    "definition": "HyperText Transfer Protocol (HTTP) is the foundation of data communication on the web, using request methods like GET, POST, PUT, DELETE. REST (Representational State Transfer) APIs allow interaction with server resources over HTTP.",
    "purpose": "Enable communication between client and server, fetch or update data, and design scalable web services.",
    "references": [
      "https://www.geeksforgeeks.org/http-introduction/",
      "https://www.tutorialspoint.com/restful/index.htm"
    ],
    "prerequisites": [0, 3]
  },
  {
    "knowledgeUnit": "Back-End Programming",
    "definition": "Server-side development using languages like Node.js, Python (Django, Flask), PHP, Ruby, or Java. Handles business logic, authentication, authorization, database interaction, and API endpoints.",
    "purpose": "Manage data processing, implement server-side logic, and serve dynamic content to users.",
    "references": [
      "https://www.geeksforgeeks.org/server-side-scripting/",
      "https://www.tutorialspoint.com/server_side_scripting/index.htm"
    ],
    "prerequisites": [0, 8]
  },
  {
    "knowledgeUnit": "Databases (SQL and NoSQL)",
    "definition": "Databases store, organize, and manage structured (SQL: MySQL, PostgreSQL) or semi/unstructured (NoSQL: MongoDB, Firebase) data. Includes data modeling, queries, relationships, indexing, and transactions.",
    "purpose": "Store persistent application data, enable data retrieval and manipulation, and ensure consistency and performance.",
    "references": [
      "https://www.geeksforgeeks.org/dbms/",
      "https://www.tutorialspoint.com/sql/index.htm",
      "https://www.tutorialspoint.com/mongodb/index.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "Authentication and Authorization",
    "definition": "Techniques for verifying user identity (authentication) and controlling access to resources (authorization). Includes sessions, JWT (JSON Web Tokens), OAuth, and role-based access control.",
    "purpose": "Secure web applications, protect user data, and restrict access to authorized users.",
    "references": [
      "https://www.geeksforgeeks.org/authentication-vs-authorization/",
      "https://www.tutorialspoint.com/oauth/index.htm"
    ],
    "prerequisites": [8, 9]
  },
  {
    "knowledgeUnit": "Web Security Fundamentals",
    "definition": "Techniques and practices to protect web applications from vulnerabilities such as XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), SQL injection, and improper authentication.",
    "purpose": "Ensure application security, protect sensitive data, and prevent attacks on users and servers.",
    "references": [
      "https://owasp.org/",
      "https://www.geeksforgeeks.org/web-application-security/"
    ],
    "prerequisites": [10, 9]
  },
  {
    "knowledgeUnit": "Version Control with Git",
    "definition": "A system to track changes in source code, manage branches, and collaborate on projects. Includes commands like git init, clone, commit, push, pull, and merge.",
    "purpose": "Enable collaborative development, maintain history of changes, and support code deployment workflows.",
    "references": [
      "https://www.geeksforgeeks.org/git/",
      "https://www.tutorialspoint.com/git/index.htm"
    ],
    "prerequisites": []
  },
  {
    "knowledgeUnit": "Package Managers and Build Tools",
    "definition": "Tools like npm, Yarn, pip, Maven, Webpack, and Parcel that manage project dependencies, automate builds, and bundle assets for web applications.",
    "purpose": "Simplify dependency management, streamline project setup, and optimize web application delivery.",
    "references": [
      "https://www.geeksforgeeks.org/node-js-npm-introduction/",
      "https://www.tutorialspoint.com/webpack/index.htm"
    ],
    "prerequisites": [3, 5]
  },
  {
    "knowledgeUnit": "Deployment and Hosting",
    "definition": "Deploying web applications to web servers or cloud platforms such as AWS, Azure, Google Cloud, Heroku, or Netlify. Includes server configuration, domain setup, and SSL certificates.",
    "purpose": "Make applications publicly accessible, ensure scalability and reliability, and manage production environments.",
    "references": [
      "https://www.geeksforgeeks.org/deploying-web-application/",
      "https://www.tutorialspoint.com/web_development/web_deployment.htm"
    ],
    "prerequisites": [8, 9, 12]
  },
  {
    "knowledgeUnit": "Responsive and Progressive Web Applications",
    "definition": "Techniques for building apps that adapt to different devices (responsive) and provide offline capabilities, push notifications, and app-like experience (progressive web apps).",
    "purpose": "Enhance user experience, enable mobile-first development, and create applications that work across platforms and offline.",
    "references": [
      "https://www.geeksforgeeks.org/progressive-web-app-pwa/",
      "https://www.tutorialspoint.com/progressive_web_apps/index.htm"
    ],
    "prerequisites": [2, 3, 6, 7]
  },
  {
    "knowledgeUnit": "Web Performance Optimization",
    "definition": "Techniques to improve web page load time and responsiveness, including minification, caching, lazy loading, image optimization, and Content Delivery Networks (CDNs).",
    "purpose": "Enhance user experience, reduce bandwidth usage, and improve SEO and accessibility.",
    "references": [
      "https://www.geeksforgeeks.org/web-performance-optimization/",
      "https://www.tutorialspoint.com/web_performance_optimization/index.htm"
    ],
    "prerequisites": [2, 3, 6]
  },
  {
    "knowledgeUnit": "Testing and Debugging Web Applications",
    "definition": "Techniques to verify functionality and correctness of applications using unit testing, integration testing, and debugging tools such as Chrome DevTools, Jest, Mocha, Selenium.",
    "purpose": "Ensure reliability, detect and fix bugs, and maintain high-quality code.",
    "references": [
      "https://www.geeksforgeeks.org/web-application-testing/",
      "https://www.tutorialspoint.com/software_testing/index.htm"
    ],
    "prerequisites": [3, 4, 5, 6]
  },
  {
    "knowledgeUnit": "Modern Web Development Practices",
    "definition": "Includes single-page applications (SPA), component-based design, RESTful and GraphQL APIs, serverless architecture, CI/CD pipelines, and containerization with Docker.",
    "purpose": "Develop scalable, maintainable, and modern web applications with efficient workflows and deployment strategies.",
    "references": [
      "https://www.geeksforgeeks.org/modern-web-development/",
      "https://www.tutorialspoint.com/web_development_modern_practices.htm"
    ],
    "prerequisites": [5, 8, 12, 13]
  }
],

// ===================== Automata Theory =====================
[
  {
    "knowledgeUnit": "Finite Automata (FA)",
    "definition": "A computational model consisting of a finite set of states, an input alphabet, a transition function defining state changes, a start state, and a set of accepting (final) states. FA can be deterministic (DFA), where each state has exactly one transition per input symbol, or nondeterministic (NFA), where multiple or zero transitions per symbol are allowed. NFAs can include ε-transitions that allow state changes without consuming input symbols.",
    "purpose": "Model and analyze simple computational processes, provide the foundation for lexical analysis in compilers, text pattern recognition, and design of sequential circuits.",
    "references": [
      "https://www.geeksforgeeks.org/finite-automata-introduction-and-dfa-nfa/",
      "https://www.tutorialspoint.com/automata_theory/finite_automata.htm"
    ],
    "prerequisites": []
  },
  {
    "knowledgeUnit": "Regular Expressions",
    "definition": "Algebraic formulas that describe patterns over an alphabet using operators such as union (|), concatenation, and Kleene star (*). Parentheses are used for grouping and precedence. Regular expressions are equivalent in expressive power to finite automata.",
    "purpose": "Provide a concise representation of regular languages, support text searching, validation, and parsing, and define token patterns for compilers.",
    "references": [
      "https://www.geeksforgeeks.org/regular-expression-set-1/",
      "https://www.tutorialspoint.com/automata_theory/regular_expressions.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "Regular Languages",
    "definition": "Languages that can be recognized by finite automata or expressed using regular expressions. Regular languages are closed under union, intersection, complementation, concatenation, and Kleene star operations.",
    "purpose": "Form the theoretical foundation for pattern recognition, lexical analysis, and text processing, and allow formal proofs of limitations of finite automata.",
    "references": [
      "https://www.geeksforgeeks.org/regular-language/",
      "https://www.tutorialspoint.com/automata_theory/regular_languages.htm"
    ],
    "prerequisites": [0, 1]
  },
  {
    "knowledgeUnit": "Context-Free Grammars (CFG)",
    "definition": "Grammars consisting of a set of variables (non-terminals), terminals, production rules, and a start symbol. Each rule replaces a single non-terminal with a string of terminals and/or non-terminals. CFGs are more powerful than regular grammars and can generate languages with nested structures and recursion.",
    "purpose": "Model the syntax of programming languages, natural language constructs, and recursive structures, and form the basis for parser design.",
    "references": [
      "https://www.geeksforgeeks.org/context-free-grammar/",
      "https://www.tutorialspoint.com/automata_theory/context_free_grammar.htm"
    ],
    "prerequisites": [2]
  },
  {
    "knowledgeUnit": "Pushdown Automata (PDA)",
    "definition": "Automata equipped with a finite control and a stack, allowing recognition of context-free languages. PDA can be deterministic (DPDA) or nondeterministic (NPDA). The stack allows memory of unbounded size for nested computations.",
    "purpose": "Model computations requiring nested memory structures, such as balanced parentheses, arithmetic expressions, and recursive language parsing.",
    "references": [
      "https://www.geeksforgeeks.org/pushdown-automata/",
      "https://www.tutorialspoint.com/automata_theory/pushdown_automata.htm"
    ],
    "prerequisites": [0, 3]
  },
  {
    "knowledgeUnit": "Context-Free Languages (CFL)",
    "definition": "Languages that can be generated by context-free grammars or recognized by pushdown automata. CFLs are more powerful than regular languages, allowing nested and recursive patterns.",
    "purpose": "Enable modeling of programming language syntax, parse trees, and hierarchical data structures in computation.",
    "references": [
      "https://www.geeksforgeeks.org/context-free-language/",
      "https://www.tutorialspoint.com/automata_theory/context_free_languages.htm"
    ],
    "prerequisites": [3, 4]
  },
  {
    "knowledgeUnit": "Turing Machines (TM)",
    "definition": "Abstract machines consisting of an infinite tape, a read/write head, a finite set of states, and a transition function. Turing machines can simulate any algorithm and are capable of performing computations beyond the limits of finite automata and pushdown automata.",
    "purpose": "Provide a general model of computation, define algorithmic solvability, and form the foundation of computability theory and complexity analysis.",
    "references": [
      "https://www.geeksforgeeks.org/turing-machine/",
      "https://www.tutorialspoint.com/automata_theory/turing_machine.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "Decidability and Halting Problem",
    "definition": "Decidability studies which problems can be solved algorithmically. The halting problem is an example of an undecidable problem: no algorithm can determine whether every arbitrary Turing machine halts on a given input.",
    "purpose": "Understand the fundamental limits of computation, distinguish between solvable and unsolvable problems, and inform algorithm design and theoretical computer science.",
    "references": [
      "https://www.geeksforgeeks.org/decidability-and-the-halting-problem/",
      "https://www.tutorialspoint.com/automata_theory/decidability.htm"
    ],
    "prerequisites": [6]
  },
  {
    "knowledgeUnit": "Closure Properties",
    "definition": "Describes how classes of languages behave under operations such as union, intersection, concatenation, Kleene star, and complementation. Different language classes (regular, context-free, context-sensitive) have different closure properties.",
    "purpose": "Facilitate language manipulation, allow systematic proofs about languages, and support automata construction and transformation.",
    "references": [
      "https://www.geeksforgeeks.org/closure-properties-in-theory-of-automata/",
      "https://www.tutorialspoint.com/automata_theory/closure_properties.htm"
    ],
    "prerequisites": [2, 5]
  },
  {
    "knowledgeUnit": "Pumping Lemma",
    "definition": "A theorem used to prove that certain languages are not regular or not context-free. It provides a property that must hold for all sufficiently long strings in a regular or context-free language. If the property fails, the language is not in that class.",
    "purpose": "Demonstrate the limitations of finite automata and pushdown automata, prove non-regularity or non-context-freeness, and guide theoretical analysis of languages.",
    "references": [
      "https://www.geeksforgeeks.org/pumping-lemma/",
      "https://www.tutorialspoint.com/automata_theory/pumping_lemma.htm"
    ],
    "prerequisites": [2, 5]
  },
  {
    "knowledgeUnit": "Linear Bounded Automata (LBA)",
    "definition": "A Turing machine variant where the tape is bounded linearly by the input size. Recognizes context-sensitive languages, which are more powerful than context-free languages but less than general Turing-recognizable languages.",
    "purpose": "Model computations with limited memory, analyze context-sensitive languages, and support theoretical language hierarchy studies.",
    "references": [
      "https://www.tutorialspoint.com/automata_theory/linear_bounded_automata.htm"
    ],
    "prerequisites": [6, 5]
  },
  {
    "knowledgeUnit": "Mealy and Moore Machines",
    "definition": "Finite state machines with outputs. Mealy machines produce outputs based on the current state and input symbol, while Moore machines produce outputs based solely on the current state. Both are used in sequential circuit design and software modeling.",
    "purpose": "Model systems where outputs depend on sequences of inputs and states, design digital circuits, control systems, and reactive software components.",
    "references": [
      "https://www.geeksforgeeks.org/mealy-and-moore-finite-state-machines/",
      "https://www.tutorialspoint.com/automata_theory/mealy_moore_machines.htm"
    ],
    "prerequisites": [0]
  }
],
  // ===================== SQL =====================
[
  {
    "knowledgeUnit": "Relational Databases",
    "definition": "A database model where data is organized into tables (relations) with rows (tuples) and columns (attributes). Each table has a primary key to uniquely identify rows, and relationships between tables are represented using foreign keys.",
    "purpose": "Provide a structured way to store, retrieve, and manage data with integrity and consistency, supporting complex queries and relationships between data.",
    "references": [
      "https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/",
      "https://www.tutorialspoint.com/sql/sql-introduction.htm"
    ],
    "prerequisites": []
  },
  {
    "knowledgeUnit": "SQL Basics",
    "definition": "Structured Query Language (SQL) is the standard language used to interact with relational databases. Basic commands include SELECT, INSERT, UPDATE, DELETE, and CREATE/ALTER/DROP for tables and databases.",
    "purpose": "Enable users to query, manipulate, and define relational data structures efficiently.",
    "references": [
      "https://www.geeksforgeeks.org/sql-tutorial/",
      "https://www.tutorialspoint.com/sql/sql-overview.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "Data Types in SQL",
    "definition": "Specifies the type of data a column can hold, such as INTEGER, VARCHAR, CHAR, DATE, BOOLEAN, FLOAT, and DECIMAL. Data types enforce constraints and optimize storage.",
    "purpose": "Ensure data consistency, support type-specific operations, and improve query performance.",
    "references": [
      "https://www.geeksforgeeks.org/sql-data-types/",
      "https://www.tutorialspoint.com/sql/sql-data-types.htm"
    ],
    "prerequisites": [1]
  },
  {
    "knowledgeUnit": "SQL Constraints",
    "definition": "Rules applied to table columns to enforce data integrity. Common constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, and DEFAULT.",
    "purpose": "Maintain data integrity, enforce business rules, and prevent invalid or inconsistent data entries.",
    "references": [
      "https://www.geeksforgeeks.org/sql-constraints/",
      "https://www.tutorialspoint.com/sql/sql-constraints.htm"
    ],
    "prerequisites": [0, 2]
  },
  {
    "knowledgeUnit": "SELECT Queries",
    "definition": "SQL command to retrieve data from one or more tables. Supports projection (selecting specific columns), filtering with WHERE clauses, sorting with ORDER BY, and limiting results with LIMIT/OFFSET.",
    "purpose": "Access and retrieve specific information from a database efficiently, supporting reporting and data analysis.",
    "references": [
      "https://www.geeksforgeeks.org/sql-select-statement/",
      "https://www.tutorialspoint.com/sql/sql-select-query.htm"
    ],
    "prerequisites": [1, 2]
  },
  {
    "knowledgeUnit": "JOIN Operations",
    "definition": "Combining rows from two or more tables based on related columns. Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN.",
    "purpose": "Query relational data spanning multiple tables, retrieve combined information, and analyze relationships.",
    "references": [
      "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/",
      "https://www.tutorialspoint.com/sql/sql-joins.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "Aggregate Functions and GROUP BY",
    "definition": "SQL functions that compute a single result from a set of values, such as COUNT, SUM, AVG, MIN, and MAX. GROUP BY groups rows based on column values, often used with aggregate functions.",
    "purpose": "Summarize and analyze large datasets, generate reports, and extract meaningful insights.",
    "references": [
      "https://www.geeksforgeeks.org/sql-aggregate-functions/",
      "https://www.tutorialspoint.com/sql/sql-group-by.htm"
    ],
    "prerequisites": [4]
  },
  {
    "knowledgeUnit": "Subqueries and Nested Queries",
    "definition": "Queries embedded within other SQL queries. Can be used in SELECT, WHERE, or FROM clauses. Subqueries can be correlated (referencing outer query columns) or uncorrelated (independent).",
    "purpose": "Perform complex queries, filter results dynamically, and compute intermediate results within a single query.",
    "references": [
      "https://www.geeksforgeeks.org/sql-sub-queries/",
      "https://www.tutorialspoint.com/sql/sql-sub-queries.htm"
    ],
    "prerequisites": [4, 5]
  },
  {
    "knowledgeUnit": "Set Operations",
    "definition": "Operations that combine the results of two or more queries, such as UNION, UNION ALL, INTERSECT, and EXCEPT (or MINUS). Requires compatible columns and data types.",
    "purpose": "Combine query results for data analysis, reporting, or constructing complex datasets from multiple queries.",
    "references": [
      "https://www.geeksforgeeks.org/sql-union-intersect-except-clauses/",
      "https://www.tutorialspoint.com/sql/sql-union.htm"
    ],
    "prerequisites": [4]
  },
  {
    "knowledgeUnit": "Data Modification Statements",
    "definition": "SQL commands to manipulate existing data: INSERT adds new rows, UPDATE modifies existing rows, DELETE removes rows. Transactions often accompany these operations for reliability.",
    "purpose": "Manage database contents, maintain accurate and up-to-date data, and support CRUD operations in applications.",
    "references": [
      "https://www.geeksforgeeks.org/sql-insert-update-delete/",
      "https://www.tutorialspoint.com/sql/sql-insert-update-delete.htm"
    ],
    "prerequisites": [1, 2, 4]
  },
  {
    "knowledgeUnit": "Transactions and ACID Properties",
    "definition": "A transaction is a logical unit of work that may include multiple SQL statements. ACID properties ensure reliability: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (permanent changes).",
    "purpose": "Guarantee data integrity, support concurrent access, and prevent corruption during failures or errors.",
    "references": [
      "https://www.geeksforgeeks.org/acid-properties-in-dbms/",
      "https://www.tutorialspoint.com/sql/sql-transactions.htm"
    ],
    "prerequisites": [10]
  },
  {
    "knowledgeUnit": "Indexes in SQL",
    "definition": "Database objects that improve query performance by providing fast access to rows. Types include single-column, composite, unique, and full-text indexes.",
    "purpose": "Enhance query performance, speed up search operations, and optimize large datasets.",
    "references": [
      "https://www.geeksforgeeks.org/indexing-in-databases-set-1/",
      "https://www.tutorialspoint.com/sql/sql-indexes.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "Views",
    "definition": "Virtual tables defined by a SELECT query. They do not store data physically but present a predefined result set to users.",
    "purpose": "Simplify complex queries, encapsulate logic, restrict access to underlying tables, and support reusable query structures.",
    "references": [
      "https://www.geeksforgeeks.org/sql-views/",
      "https://www.tutorialspoint.com/sql/sql-views.htm"
    ],
    "prerequisites": [4, 5]
  },
  {
    "knowledgeUnit": "Stored Procedures and Functions",
    "definition": "Stored procedures are precompiled SQL code blocks stored in the database, while functions return a single value or table. Both support parameters, control flow, and modular programming.",
    "purpose": "Encapsulate business logic, improve performance by reducing repeated queries, and enforce consistency in database operations.",
    "references": [
      "https://www.geeksforgeeks.org/sql-stored-procedures/",
      "https://www.tutorialspoint.com/sql/sql-stored-procedures.htm"
    ],
    "prerequisites": [4, 8]
  },
  {
    "knowledgeUnit": "Triggers",
    "definition": "Automated SQL code executed in response to specific events on a table, such as INSERT, UPDATE, or DELETE.",
    "purpose": "Enforce complex constraints, maintain audit logs, and automate actions to ensure data integrity and business rules.",
    "references": [
      "https://www.geeksforgeeks.org/sql-triggers/",
      "https://www.tutorialspoint.com/sql/sql-triggers.htm"
    ],
    "prerequisites": [4, 10]
  },
  {
    "knowledgeUnit": "Normalization and Denormalization",
    "definition": "Normalization is the process of organizing tables to reduce redundancy and dependency, using normal forms (1NF, 2NF, 3NF, BCNF, etc.). Denormalization combines tables for performance optimization.",
    "purpose": "Improve data consistency, eliminate redundancy, optimize storage, and balance between efficiency and performance.",
    "references": [
      "https://www.geeksforgeeks.org/normalization-in-dbms/",
      "https://www.tutorialspoint.com/sql/sql-normalization.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "Views of Advanced SQL: Window Functions",
    "definition": "SQL functions that perform calculations across a set of rows related to the current row, without collapsing them into a single output. Includes RANK(), ROW_NUMBER(), SUM() OVER(), AVG() OVER(), and PARTITION BY.",
    "purpose": "Perform analytics, running totals, ranking, and advanced data summarization without complex subqueries.",
    "references": [
      "https://www.geeksforgeeks.org/window-functions-in-sql/",
      "https://www.tutorialspoint.com/sql/sql-window-functions.htm"
    ],
    "prerequisites": [4, 7]
  },
  {
    "knowledgeUnit": "Advanced Data Types and JSON Support",
    "definition": "Modern SQL supports complex data types such as JSON, XML, arrays, and spatial data. Functions allow querying, indexing, and manipulating these structured or semi-structured data types.",
    "purpose": "Enable modern application development, store semi-structured data efficiently, and integrate SQL databases with web and NoSQL data formats.",
    "references": [
      "https://www.geeksforgeeks.org/sql-json-functions/",
      "https://www.tutorialspoint.com/sql/sql-json.htm"
    ],
    "prerequisites": [2, 4]
  }
],
// ===================== UNIX =====================
[
  {
    "knowledgeUnit": "Introduction to UNIX",
    "definition": "UNIX is a multiuser, multitasking operating system originally developed in the 1970s. It provides a hierarchical file system, process management, and a command-line interface, forming the foundation for many modern operating systems such as Linux and macOS.",
    "purpose": "Understand the architecture and philosophy of UNIX, including simplicity, modularity, and portability. Provides a foundation for system administration, programming, and advanced OS concepts.",
    "references": [
      "https://www.geeksforgeeks.org/introduction-of-unix/",
      "https://www.tutorialspoint.com/unix/unix-introduction.htm"
    ],
    "prerequisites": []
  },
  {
    "knowledgeUnit": "UNIX File System",
    "definition": "A hierarchical storage structure organizing data as files and directories. Each file has attributes such as ownership, permissions, size, and timestamps. Special directories include root (/), home (/home), and system directories (/bin, /etc).",
    "purpose": "Provide structured storage, manage access control, and support efficient file operations.",
    "references": [
      "https://www.geeksforgeeks.org/file-system-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-file-system.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "UNIX File Permissions and Ownership",
    "definition": "Mechanism to control access to files and directories using read (r), write (w), and execute (x) permissions for owner, group, and others. Ownership identifies the user and group responsible for the file.",
    "purpose": "Ensure security and proper access control in a multiuser environment, prevent unauthorized modification or execution.",
    "references": [
      "https://www.geeksforgeeks.org/file-permissions-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-file-permission.htm"
    ],
    "prerequisites": [1]
  },
  {
    "knowledgeUnit": "UNIX Basic Commands",
    "definition": "Commands used to interact with the file system, such as ls, cd, pwd, mkdir, rmdir, cp, mv, and rm. Includes file viewing and manipulation commands like cat, more, less, head, tail, and echo.",
    "purpose": "Perform essential file and directory operations, navigate the system, and manipulate data from the command line.",
    "references": [
      "https://www.geeksforgeeks.org/basic-unix-commands/",
      "https://www.tutorialspoint.com/unix/unix-commands.htm"
    ],
    "prerequisites": [1]
  },
  {
    "knowledgeUnit": "UNIX Processes and Job Management",
    "definition": "UNIX treats every running program as a process with a unique process ID (PID). Commands like ps, top, kill, bg, fg, and jobs are used to monitor, manage, and control foreground and background processes.",
    "purpose": "Monitor and control processes, manage multitasking, and ensure efficient use of system resources.",
    "references": [
      "https://www.geeksforgeeks.org/process-management-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-processes.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "UNIX Environment Variables",
    "definition": "Key-value pairs that define the operating environment, such as PATH, HOME, SHELL, USER, and PWD. Variables can be temporary (shell session) or permanent (profile files).",
    "purpose": "Configure user sessions, customize shell behavior, and control application and system environment settings.",
    "references": [
      "https://www.geeksforgeeks.org/environment-variables-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-environment.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "UNIX Shells",
    "definition": "Command-line interpreters that process user commands and provide scripting capabilities. Common shells include Bourne Shell (sh), Bourne Again Shell (bash), C Shell (csh), and Korn Shell (ksh).",
    "purpose": "Provide an interface for interacting with the OS, automating tasks, running scripts, and customizing the environment.",
    "references": [
      "https://www.geeksforgeeks.org/unix-shell/",
      "https://www.tutorialspoint.com/unix/unix-shell.htm"
    ],
    "prerequisites": [0]
  },
  {
    "knowledgeUnit": "UNIX Shell Scripting",
    "definition": "Writing executable scripts using shell commands, variables, loops (for, while), conditionals (if, case), and functions. Scripts can automate system tasks, process files, and manage users and processes.",
    "purpose": "Automate repetitive tasks, simplify system administration, and implement program logic in the UNIX environment.",
    "references": [
      "https://www.geeksforgeeks.org/introduction-of-shell-scripting/",
      "https://www.tutorialspoint.com/unix/unix-shell-scripting.htm"
    ],
    "prerequisites": [6, 5]
  },
  {
    "knowledgeUnit": "UNIX File and Text Utilities",
    "definition": "Utilities for viewing, filtering, and processing files, including grep, sed, awk, sort, uniq, cut, and wc. These tools enable text manipulation and data extraction from files and command output.",
    "purpose": "Process and analyze data, extract meaningful information, and automate data transformations.",
    "references": [
      "https://www.geeksforgeeks.org/command-line-utilities-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-file-utilities.htm"
    ],
    "prerequisites": [4, 7]
  },
  {
    "knowledgeUnit": "UNIX Package and Software Management",
    "definition": "Mechanisms to install, update, and remove software. Commands differ by distribution (e.g., apt, yum, rpm, pkg). Includes compiling from source and managing dependencies.",
    "purpose": "Install and maintain system software, ensure security updates, and manage libraries and applications efficiently.",
    "references": [
      "https://www.geeksforgeeks.org/package-management-in-unix-linux/",
      "https://www.tutorialspoint.com/unix/unix-software-installation.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "UNIX Networking Commands",
    "definition": "Utilities for managing and monitoring network connections, including ping, ifconfig/ip, netstat, traceroute, ssh, scp, and ftp. Used for troubleshooting and communication between systems.",
    "purpose": "Administer network interfaces, diagnose connectivity issues, transfer files securely, and manage remote systems.",
    "references": [
      "https://www.geeksforgeeks.org/networking-commands-in-unix-linux/",
      "https://www.tutorialspoint.com/unix/unix-networking.htm"
    ],
    "prerequisites": [0, 4]
  },
  {
    "knowledgeUnit": "UNIX User and Group Management",
    "definition": "Commands and files for creating, modifying, and deleting users and groups, including useradd, usermod, passwd, groupadd, and /etc/passwd and /etc/group files.",
    "purpose": "Manage multiuser access, enforce security policies, and assign proper permissions to users and groups.",
    "references": [
      "https://www.geeksforgeeks.org/user-management-in-linux/",
      "https://www.tutorialspoint.com/unix/unix-users.htm"
    ],
    "prerequisites": [0, 3]
  },
  {
    "knowledgeUnit": "UNIX File System Management",
    "definition": "Managing storage devices, partitions, and file systems. Includes mounting and unmounting filesystems, checking disk usage (df, du), and repairing file systems (fsck).",
    "purpose": "Ensure proper storage allocation, monitor disk space, maintain filesystem integrity, and manage persistent storage devices.",
    "references": [
      "https://www.geeksforgeeks.org/filesystem-management-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-filesystem-management.htm"
    ],
    "prerequisites": [1, 4]
  },
  {
    "knowledgeUnit": "UNIX Process Scheduling and Management",
    "definition": "Mechanisms to control process execution priorities and system resources using commands like nice, renice, and scheduling policies. Includes understanding CPU scheduling, background/foreground processes, and daemon processes.",
    "purpose": "Optimize CPU usage, ensure fairness among processes, and maintain system responsiveness.",
    "references": [
      "https://www.geeksforgeeks.org/process-scheduling-in-unix/",
      "https://www.tutorialspoint.com/unix/unix-process-scheduling.htm"
    ],
    "prerequisites": [5]
  },
  {
    "knowledgeUnit": "UNIX Logging and System Monitoring",
    "definition": "Mechanisms for recording system events (syslog, /var/log), monitoring system performance (top, uptime, vmstat), and analyzing logs for troubleshooting.",
    "purpose": "Diagnose system issues, maintain security and reliability, and optimize system performance.",
    "references": [
      "https://www.geeksforgeeks.org/logging-in-linux-unix/",
      "https://www.tutorialspoint.com/unix/unix-system-monitoring.htm"
    ],
    "prerequisites": [5, 4]
  },
  {
    "knowledgeUnit": "UNIX Security and File Access Control",
    "definition": "Techniques for securing a UNIX system, including file permissions, sudo, SSH keys, firewall configuration, and PAM (Pluggable Authentication Modules).",
    "purpose": "Protect the system from unauthorized access, maintain user accountability, and enforce security policies.",
    "references": [
      "https://www.geeksforgeeks.org/unix-security-features/",
      "https://www.tutorialspoint.com/unix/unix-security.htm"
    ],
    "prerequisites": [3, 12]
  },
  {
    "knowledgeUnit": "UNIX Backup and Recovery",
    "definition": "Techniques and commands to back up and restore data, including tar, rsync, dump, restore, and incremental backups.",
    "purpose": "Ensure data integrity, recover from system failures, and implement disaster recovery strategies.",
    "references": [
      "https://www.geeksforgeeks.org/backup-and-recovery-in-linux-unix/",
      "https://www.tutorialspoint.com/unix/unix-backup-recovery.htm"
    ],
    "prerequisites": [1, 14]
  },
  {
    "knowledgeUnit": "UNIX Advanced Features: Pipes, Redirection, and Cron Jobs",
    "definition": "Techniques for directing input/output streams, chaining commands using pipes (|), redirecting output (<, >, >>), and scheduling recurring tasks with cron and at.",
    "purpose": "Automate repetitive tasks, process data efficiently, and create complex command workflows for system administration and scripting.",
    "references": [
      "https://www.geeksforgeeks.org/pipes-and-redirections-in-linux-unix/",
      "https://www.tutorialspoint.com/unix/unix-cron-jobs.htm"
    ],
    "prerequisites": [4, 7]
  }
]

];

const courseDir = {
  "cpp":0, 
  "php":1,
  "uml":2,
  "net":3, 
  "webdev":4,
  "comp":5,
  "sql":6,
  "unix":7
}


const courseForm = document.getElementById('courseForm');

courseForm.addEventListener('submit', e=>{
    e.preventDefault(); 
    try {
        Swal.fire({
            title: "Submit",
            text: "Course chosen! Waiting...",
            icon: "success"
        });
        
        const username = window.localStorage.getItem('username');
        
        const a = document.getElementById('userNav');
        a.textContent = username;

        const selectedCourse = document.getElementById('course').value;

        const courseIndex = courseDir[selectedCourse];

        const course = domainModel[courseIndex]; 

        window.localStorage.setItem('course', JSON.stringify(course));

        setTimeout(() => {
            window.location.href = 'main.html'}
            
        , 3000); 

    } catch(err){
        console.log(err.messaage);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }
})
