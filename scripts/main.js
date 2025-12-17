const domainModel = [
[
  {
    knowledgeUnit: "C++",
    definition: "Langage de programmation compilé multiparadigme supportant la programmation procédurale, orientée objet et générique.",
    purpose: "Permettre le développement de logiciels performants avec un contrôle fin sur les ressources.",
    position: "Point d’entrée. Aucun prérequis.",
    references: [
      "https://isocpp.org/",
      "https://en.cppreference.com/"
    ]
  },
  {
    knowledgeUnit: "Compilation",
    definition: "Processus de transformation du code source C++ en code machine via les phases de prétraitement, compilation, assemblage et édition de liens.",
    purpose: "Produire un exécutable efficace et détecter les erreurs à la compilation.",
    position: "Après l’introduction au langage.",
    references: [
      "https://en.cppreference.com/w/cpp/language/translation_phases"
    ]
  },
  {
    knowledgeUnit: "Types fondamentaux",
    definition: "Types de données de base fournis par le langage tels que int, double, char et bool.",
    purpose: "Représenter les données primitives manipulées par les programmes.",
    position: "Après la compilation.",
    references: [
      "https://en.cppreference.com/w/cpp/language/types"
    ]
  },
  {
    knowledgeUnit: "Pointeurs",
    definition: "Variables contenant l’adresse mémoire d’une autre variable ou d’un objet.",
    purpose: "Permettre la manipulation directe de la mémoire et l’implémentation de structures dynamiques.",
    position: "Après les types fondamentaux.",
    references: [
      "https://en.cppreference.com/w/cpp/language/pointer"
    ]
  },
  {
    knowledgeUnit: "Références",
    definition: "Alias typé vers une variable existante, ne pouvant pas être réassigné.",
    purpose: "Simplifier la manipulation d’objets sans copie et améliorer la sécurité par rapport aux pointeurs.",
    position: "Après les pointeurs.",
    references: [
      "https://en.cppreference.com/w/cpp/language/reference"
    ]
  },
  {
    knowledgeUnit: "Allocation dynamique",
    definition: "Création et destruction d’objets à l’exécution via new/delete.",
    purpose: "Gérer des ressources dont la durée de vie dépasse la portée locale.",
    position: "Après les pointeurs.",
    references: [
      "https://en.cppreference.com/w/cpp/language/new"
    ]
  },
  {
    knowledgeUnit: "RAII",
    definition: "Principe liant la durée de vie des ressources à celle des objets.",
    purpose: "Garantir une libération sûre et automatique des ressources.",
    position: "Après l’allocation dynamique.",
    references: [
      "https://en.cppreference.com/w/cpp/language/raii"
    ]
  },
  {
    knowledgeUnit: "Classes et objets",
    definition: "Mécanisme permettant de regrouper données et comportements dans une même entité.",
    purpose: "Structurer les programmes selon le paradigme orienté objet.",
    position: "Après les bases du langage.",
    references: [
      "https://en.cppreference.com/w/cpp/language/class"
    ]
  },
  {
    knowledgeUnit: "Encapsulation",
    definition: "Principe consistant à cacher les détails d’implémentation derrière une interface.",
    purpose: "Réduire le couplage et améliorer la maintenabilité du code.",
    position: "Après les classes.",
    references: [
      "https://en.cppreference.com/w/cpp/language/access"
    ]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Mécanisme permettant à une classe de dériver d’une autre et d’en réutiliser les membres.",
    purpose: "Favoriser la réutilisation et la spécialisation des comportements.",
    position: "Après l’encapsulation.",
    references: [
      "https://en.cppreference.com/w/cpp/language/derived_class"
    ]
  },
  {
    knowledgeUnit: "Fonctions virtuelles",
    definition: "Fonctions membres dont la liaison est résolue à l’exécution.",
    purpose: "Permettre le polymorphisme à l’exécution.",
    position: "Après l’héritage.",
    references: [
      "https://en.cppreference.com/w/cpp/language/virtual"
    ]
  },
  {
    knowledgeUnit: "Classe abstraite",
    definition: "Classe contenant au moins une fonction virtuelle pure et ne pouvant pas être instanciée.",
    purpose: "Exprimer une abstraction conceptuelle non complètement définissable.",
    position: "Après les fonctions virtuelles.",
    references: [
      "https://en.cppreference.com/w/cpp/language/abstract_class"
    ]
  },
  {
    knowledgeUnit: "Polymorphisme",
    definition: "Capacité à manipuler des objets de types différents via une interface commune.",
    purpose: "Rendre les systèmes extensibles sans modification du code existant.",
    position: "Après les classes abstraites.",
    references: [
      "https://en.cppreference.com/w/cpp/language/virtual"
    ]
  },
  {
    knowledgeUnit: "Upcasting et downcasting",
    definition: "Conversions entre pointeurs ou références de classes de base et dérivées.",
    purpose: "Permettre la manipulation polymorphe et l’accès conditionnel aux fonctionnalités spécialisées.",
    position: "Après le polymorphisme.",
    references: [
      "https://en.cppreference.com/w/cpp/language/dynamic_cast"
    ]
  },
  {
    knowledgeUnit: "static_cast et dynamic_cast",
    definition: "Opérateurs de conversion de type explicites avec ou sans vérification à l’exécution.",
    purpose: "Réaliser des conversions contrôlées et éviter les comportements indéfinis.",
    position: "Après l’héritage et le polymorphisme.",
    references: [
      "https://en.cppreference.com/w/cpp/language/static_cast",
      "https://en.cppreference.com/w/cpp/language/dynamic_cast"
    ]
  },
  {
    knowledgeUnit: "Destructeur virtuel",
    definition: "Destructeur déclaré virtual garantissant la destruction complète d’un objet polymorphe.",
    purpose: "Éviter les fuites mémoire lors de la destruction via un pointeur de base.",
    position: "Après les fonctions virtuelles.",
    references: [
      "https://en.cppreference.com/w/cpp/language/destructor"
    ]
  },
  {
    knowledgeUnit: "Templates",
    definition: "Mécanisme de programmation générique permettant de paramétrer les types.",
    purpose: "Écrire du code réutilisable et performant sans duplication.",
    position: "Après les bases de l’OOP.",
    references: [
      "https://en.cppreference.com/w/cpp/language/templates"
    ]
  },
   {
    knowledgeUnit: "Constructeurs",
    definition: "Fonctions membres spéciales appelées lors de la création d’un objet pour initialiser son état.",
    purpose: "Garantir l’initialisation valide et cohérente des objets.",
    position: "Après les classes et objets.",
    references: [
      "https://en.cppreference.com/w/cpp/language/constructor"
    ]
  },
  {
    knowledgeUnit: "Destructeurs",
    definition: "Fonctions membres spéciales appelées automatiquement lors de la destruction d’un objet.",
    purpose: "Libérer les ressources associées à un objet et éviter les fuites mémoire.",
    position: "Après les constructeurs.",
    references: [
      "https://en.cppreference.com/w/cpp/language/destructor"
    ]
  },
  {
    knowledgeUnit: "Règle des trois",
    definition: "Principe stipulant que si une classe définit un destructeur, un constructeur de copie ou un opérateur d’affectation, elle doit probablement définir les trois.",
    purpose: "Assurer une gestion correcte des ressources lors des copies.",
    position: "Après les destructeurs.",
    references: [
      "https://en.cppreference.com/w/cpp/language/rule_of_three"
    ]
  },
  {
    knowledgeUnit: "Règle des cinq",
    definition: "Extension de la règle des trois intégrant le constructeur de déplacement et l’opérateur d’affectation par déplacement.",
    purpose: "Optimiser la gestion des ressources temporaires et améliorer les performances.",
    position: "Après la règle des trois.",
    references: [
      "https://en.cppreference.com/w/cpp/language/rule_of_three"
    ]
  },
  {
    knowledgeUnit: "Constructeur de copie",
    definition: "Constructeur permettant de créer un nouvel objet à partir d’un autre objet du même type.",
    purpose: "Définir le comportement de copie des objets.",
    position: "Après les constructeurs.",
    references: [
      "https://en.cppreference.com/w/cpp/language/copy_constructor"
    ]
  },
  {
    knowledgeUnit: "Sémantique de déplacement",
    definition: "Mécanisme permettant de transférer les ressources d’un objet temporaire plutôt que de les copier.",
    purpose: "Réduire les coûts de copie et améliorer l’efficacité.",
    position: "Après le constructeur de copie.",
    references: [
      "https://en.cppreference.com/w/cpp/language/move_constructor"
    ]
  },
  {
    knowledgeUnit: "Méthodes virtuelles pures",
    definition: "Fonctions virtuelles déclarées avec = 0 et sans implémentation obligatoire dans la classe de base.",
    purpose: "Forcer les classes dérivées à fournir une implémentation concrète.",
    position: "Après les fonctions virtuelles.",
    references: [
      "https://en.cppreference.com/w/cpp/language/abstract_class"
    ]
  },
  {
    knowledgeUnit: "Surcharge de fonctions",
    definition: "Définition de plusieurs fonctions portant le même nom mais avec des signatures différentes.",
    purpose: "Améliorer l’expressivité et la lisibilité du code.",
    position: "Après les fonctions de base.",
    references: [
      "https://en.cppreference.com/w/cpp/language/function_overload"
    ]
  },
  {
    knowledgeUnit: "Redéfinition (override)",
    definition: "Implémentation dans une classe dérivée d’une fonction virtuelle définie dans la classe de base.",
    purpose: "Adapter le comportement d’une classe dérivée tout en respectant l’interface.",
    position: "Après l’héritage et les fonctions virtuelles.",
    references: [
      "https://en.cppreference.com/w/cpp/language/override"
    ]
  },
  {
    knowledgeUnit: "Masquage de méthodes",
    definition: "Situation où une fonction d’une classe dérivée masque une fonction de même nom dans la classe de base.",
    purpose: "Comprendre les règles de résolution des noms et éviter des erreurs subtiles.",
    position: "Après l’héritage.",
    references: [
      "https://en.cppreference.com/w/cpp/language/name_hiding"
    ]
  },
  {
    knowledgeUnit: "Méthodes statiques",
    definition: "Fonctions membres appartenant à la classe plutôt qu’à une instance particulière.",
    purpose: "Fournir un comportement lié conceptuellement à la classe.",
    position: "Après les classes.",
    references: [
      "https://en.cppreference.com/w/cpp/language/static"
    ]
  },
  {
    knowledgeUnit: "Attributs statiques",
    definition: "Données partagées par toutes les instances d’une classe.",
    purpose: "Maintenir un état commun ou des compteurs globaux.",
    position: "Après les méthodes statiques.",
    references: [
      "https://en.cppreference.com/w/cpp/language/static"
    ]
  },
  {
    knowledgeUnit: "Encapsulation forte",
    definition: "Utilisation stricte des niveaux d’accès pour protéger l’état interne des objets.",
    purpose: "Empêcher les dépendances indésirables et renforcer la robustesse.",
    position: "Après l’encapsulation.",
    references: [
      "https://en.cppreference.com/w/cpp/language/access"
    ]
  },
  {
    knowledgeUnit: "Couplage et cohésion",
    definition: "Mesures de dépendance entre classes et de concentration des responsabilités.",
    purpose: "Améliorer la maintenabilité et l’évolutivité des systèmes orientés objet.",
    position: "Après les principes OOP fondamentaux.",
    references: [
      "https://en.wikipedia.org/wiki/Coupling_(computer_programming)"
    ]
  }
],
[
  {
    knowledgeUnit: "PHP",
    definition: "Langage de script côté serveur principalement utilisé pour le développement web dynamique.",
    purpose: "Permettre la génération de pages web dynamiques et l’interaction avec les données côté serveur.",
    position: "Point d’entrée. Aucun prérequis.",
    references: [
      "https://www.php.net/",
      "https://www.php.net/manual/fr/"
    ]
  },
  {
    knowledgeUnit: "Variables",
    definition: "Identificateurs précédés de $ servant à stocker des valeurs dynamiques.",
    purpose: "Manipuler des données tout au long de l’exécution du script.",
    position: "Après l’introduction à PHP.",
    references: [
      "https://www.php.net/manual/fr/language.variables.php"
    ]
  },
  {
    knowledgeUnit: "Constantes",
    definition: "Identificateurs dont la valeur ne peut pas être modifiée après définition.",
    purpose: "Définir des valeurs fixes et globales.",
    position: "Après les variables.",
    references: [
      "https://www.php.net/manual/fr/language.constants.php"
    ]
  },
  {
    knowledgeUnit: "Types de données",
    definition: "Catégories de valeurs manipulables telles que int, float, string, bool, array et object.",
    purpose: "Structurer les données et contrôler leur manipulation.",
    position: "Après les variables.",
    references: [
      "https://www.php.net/manual/fr/language.types.php"
    ]
  },
  {
    knowledgeUnit: "Opérateurs",
    definition: "Symboles permettant d’effectuer des opérations arithmétiques, logiques ou de comparaison.",
    purpose: "Transformer et comparer des données.",
    position: "Après les types de données.",
    references: [
      "https://www.php.net/manual/fr/language.operators.php"
    ]
  },
  {
    knowledgeUnit: "Structures de contrôle",
    definition: "Instructions conditionnelles et itératives telles que if, switch, for et while.",
    purpose: "Contrôler le flux d’exécution du programme.",
    position: "Après les opérateurs.",
    references: [
      "https://www.php.net/manual/fr/language.control-structures.php"
    ]
  },
  {
    knowledgeUnit: "Fonctions",
    definition: "Blocs de code réutilisables pouvant accepter des paramètres et retourner une valeur.",
    purpose: "Modulariser le code et éviter les répétitions.",
    position: "Après les structures de contrôle.",
    references: [
      "https://www.php.net/manual/fr/language.functions.php"
    ]
  },
  {
    knowledgeUnit: "Superglobales",
    definition: "Variables prédéfinies accessibles partout comme $_GET, $_POST, $_SESSION et $_SERVER.",
    purpose: "Accéder aux données de requête, de session et d’environnement.",
    position: "Après les variables et les fonctions.",
    references: [
      "https://www.php.net/manual/fr/language.variables.superglobals.php"
    ]
  },
  {
    knowledgeUnit: "Formulaires HTML et PHP",
    definition: "Mécanisme de récupération des données envoyées par l’utilisateur via GET ou POST.",
    purpose: "Permettre l’interaction utilisateur avec le serveur.",
    position: "Après les superglobales.",
    references: [
      "https://www.php.net/manual/fr/tutorial.forms.php"
    ]
  },
  {
    knowledgeUnit: "Validation et sécurisation des entrées",
    definition: "Techniques de filtrage et de validation des données utilisateur.",
    purpose: "Éviter les attaques comme XSS et injections malveillantes.",
    position: "Après la gestion des formulaires.",
    references: [
      "https://www.php.net/manual/fr/filter.filters.php"
    ]
  },
  {
    knowledgeUnit: "Gestion des fichiers",
    definition: "Lecture, écriture et manipulation de fichiers côté serveur.",
    purpose: "Persister des données et gérer des ressources locales.",
    position: "Après les fonctions.",
    references: [
      "https://www.php.net/manual/fr/book.filesystem.php"
    ]
  },
  {
    knowledgeUnit: "Gestion des sessions",
    definition: "Mécanisme permettant de conserver des données utilisateur entre plusieurs requêtes.",
    purpose: "Maintenir un état utilisateur côté serveur.",
    position: "Après les superglobales.",
    references: [
      "https://www.php.net/manual/fr/book.session.php"
    ]
  },
  {
    knowledgeUnit: "Programmation orientée objet en PHP",
    definition: "Utilisation de classes, objets, attributs et méthodes en PHP.",
    purpose: "Structurer le code de manière modulaire et réutilisable.",
    position: "Après les fonctions.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.php"
    ]
  },
  {
    knowledgeUnit: "Encapsulation",
    definition: "Utilisation des niveaux de visibilité public, protected et private.",
    purpose: "Protéger l’état interne des objets.",
    position: "Après l’introduction à l’OOP.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.visibility.php"
    ]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Mécanisme permettant à une classe d’en étendre une autre.",
    purpose: "Réutiliser et spécialiser le comportement des classes.",
    position: "Après l’encapsulation.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.inheritance.php"
    ]
  },
  {
    knowledgeUnit: "Classes abstraites et interfaces",
    definition: "Structures permettant de définir des contrats et des abstractions.",
    purpose: "Imposer une architecture cohérente et extensible.",
    position: "Après l’héritage.",
    references: [
      "https://www.php.net/manual/fr/language.oop5.abstract.php"
    ]
  },
  {
    knowledgeUnit: "Exceptions et gestion des erreurs",
    definition: "Mécanisme de gestion des erreurs via try, catch et throw.",
    purpose: "Gérer proprement les erreurs et améliorer la robustesse.",
    position: "Après l’OOP.",
    references: [
      "https://www.php.net/manual/fr/language.exceptions.php"
    ]
  },
  {
    knowledgeUnit: "Connexion à une base de données (PDO)",
    definition: "Interface permettant d’interagir avec des bases de données relationnelles.",
    purpose: "Stocker, récupérer et manipuler des données persistantes.",
    position: "Après les bases du PHP.",
    references: [
      "https://www.php.net/manual/fr/book.pdo.php"
    ]
  },
  {
    knowledgeUnit: "SQL avec PHP",
    definition: "Utilisation de requêtes SQL pour interagir avec une base de données.",
    purpose: "Gérer efficacement les données applicatives.",
    position: "Après la connexion PDO.",
    references: [
      "https://www.php.net/manual/fr/pdo.prepared-statements.php"
    ]
  }
],
[
  {
    knowledgeUnit: "UML",
    definition: "Langage de modélisation graphique standardisé permettant de représenter, spécifier, concevoir et documenter les systèmes logiciels.",
    purpose: "Fournir une représentation commune et compréhensible d’un système avant et pendant son développement.",
    position: "Point d’entrée. Aucun prérequis.",
    references: [
      "OMG UML Specification",
      "https://www.uml-diagrams.org/"
    ]
  },
  {
    knowledgeUnit: "Diagramme de cas d’utilisation",
    definition: "Diagramme UML décrivant les interactions entre les acteurs et le système via des cas d’utilisation.",
    purpose: "Capturer les besoins fonctionnels du système du point de vue utilisateur.",
    position: "Après l’introduction à UML, avant la modélisation structurelle.",
    references: [
      "Cours UML – Cas d’utilisation",
      "https://www.uml-diagrams.org/use-case-diagrams.html"
    ]
  },
  {
    knowledgeUnit: "Diagramme de classes",
    definition: "Diagramme statique représentant les classes, leurs attributs, méthodes et les relations entre elles.",
    purpose: "Modéliser la structure orientée objet d’un système indépendamment de l’implémentation.",
    position: "Après les cas d’utilisation, avant les diagrammes dynamiques.",
    references: [
      "Cours UML – Diagramme de classes",
      "https://www.uml-diagrams.org/class-diagrams-overview.html"
    ]
  },
  {
    knowledgeUnit: "Classe",
    definition: "Description abstraite d’un ensemble d’objets partageant les mêmes attributs et comportements.",
    purpose: "Structurer les données et comportements d’un système orienté objet.",
    position: "Après le diagramme de classes.",
    references: [
      "Cours UML – Classes",
      "https://www.uml-diagrams.org/class.html"
    ]
  },
  {
    knowledgeUnit: "Classe abstraite",
    definition: "Classe qui ne peut pas être instanciée et qui sert de modèle conceptuel pour des classes concrètes.",
    purpose: "Exprimer une abstraction partielle et factoriser des comportements communs.",
    position: "Après l’héritage, avant le polymorphisme.",
    references: [
      "Cours UML – Classes abstraites",
      "https://en.cppreference.com/w/cpp/language/abstract_class"
    ]
  },
  {
    knowledgeUnit: "Interface",
    definition: "Contrat définissant un ensemble de méthodes que les classes implémentantes doivent fournir.",
    purpose: "Séparer la spécification des comportements de leur implémentation concrète.",
    position: "Après les classes abstraites.",
    references: [
      "Cours UML – Interfaces",
      "https://www.uml-diagrams.org/interface.html"
    ]
  },
  {
    knowledgeUnit: "Association",
    definition: "Relation structurelle décrivant un lien logique entre deux classes.",
    purpose: "Modéliser les collaborations entre objets.",
    position: "Après les classes, avant l’agrégation.",
    references: [
      "Cours UML – Association",
      "https://www.uml-diagrams.org/association.html"
    ]
  },
  {
    knowledgeUnit: "Agrégation",
    definition: "Relation faible de type tout/partie où les objets peuvent exister indépendamment.",
    purpose: "Exprimer une relation de possession non contraignante.",
    position: "Après l’association, avant la composition.",
    references: [
      "Cours UML – Agrégation",
      "https://www.uml-diagrams.org/aggregation.html"
    ]
  },
  {
    knowledgeUnit: "Composition",
    definition: "Relation forte de type tout/partie impliquant une dépendance de cycle de vie.",
    purpose: "Garantir une cohérence forte entre les objets composés.",
    position: "Après l’agrégation.",
    references: [
      "Cours UML – Composition",
      "https://www.uml-diagrams.org/composition.html"
    ]
  },
  {
    knowledgeUnit: "Héritage",
    definition: "Relation de généralisation permettant à une classe de réutiliser et spécialiser une autre.",
    purpose: "Favoriser la réutilisation et l’extension contrôlée des comportements.",
    position: "Après les classes, avant le polymorphisme.",
    references: [
      "Cours UML – Héritage",
      "https://www.uml-diagrams.org/generalization.html"
    ]
  },
  {
    knowledgeUnit: "Polymorphisme",
    definition: "Capacité d’utiliser une interface commune pour des comportements différents selon le type concret.",
    purpose: "Permettre la flexibilité et l’extensibilité du système.",
    position: "Après l’héritage et les classes abstraites.",
    references: [
      "Cours UML – Polymorphisme",
      "https://en.cppreference.com/w/cpp/language/virtual"
    ]
  },
  {
    knowledgeUnit: "Diagramme de séquence",
    definition: "Diagramme dynamique montrant l’ordre temporel des échanges de messages entre objets.",
    purpose: "Décrire le comportement dynamique d’un scénario précis.",
    position: "Après le diagramme de classes.",
    references: [
      "Cours UML – Diagramme de séquence",
      "https://www.uml-diagrams.org/sequence-diagrams.html"
    ]
  },
  {
    knowledgeUnit: "Diagramme d’états",
    definition: "Diagramme représentant les différents états possibles d’un objet et les transitions entre eux.",
    purpose: "Modéliser le comportement interne dépendant du temps et des événements.",
    position: "Après les diagrammes de séquence.",
    references: [
      "Cours UML – Diagramme d’états",
      "https://www.uml-diagrams.org/state-machine-diagrams.html"
    ]
  }
]];


const username = window.localStorage.getItem('username');

const a = document.getElementById('userNav');
a.textContent = username;

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

const selectedCourse = window.localStorage.getItem('selectedCourse');

const courseIndex = courseDir[selectedCourse];

const course = domainModel[courseIndex]; 

const tbody = document.getElementById('knowledgeTableB'); 

let counter = 0;

course.forEach(k => {
    const tr = document.createElement('tr');
    tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
    const td1 = document.createElement('td');
    td1.textContent = k.knowledgeUnit;
    td1.className = "px-4 py-2 border border-gray-200";

    const td2 = document.createElement('td');
    td2.textContent = k.definition;
    td2.className = "px-4 py-2 border border-gray-200";

    const td3 = document.createElement('td');
    td3.textContent = k.purpose;
    td3.className = "px-4 py-2 border border-gray-200";

    const td4 = document.createElement('td');
    td4.textContent = k.position;
    td4.className = "px-4 py-2 border border-gray-200";

    const td5 = document.createElement('td');
    const a = document.createElement('a'); 
    a.href = k.references[0]; 
    a.textContent = k.references[0]; 
    a.target = '_blank';
    td5.appendChild(a);
    td5.className = "px-4 py-2 border border-gray-200";

    const exBtn = document.createElement('button');
    exBtn.id = `exBtn${counter}`; 
    exBtn.textContent = "Examinate";
    exBtn.setAttribute('type', 'button');
    exBtn.className = "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    const td6 = document.createElement('td');
    td6.appendChild(exBtn); 
    
    tr.append(td1,td2,td3,td4,td5,td6);

    tbody.appendChild(tr); 

    ++counter; 
});


let data = domainModel;

let bc = 0; //button counter
while (bc < data[courseDir[selectedCourse]].length){
  const exb = document.getElementById(`exBtn${bc}`); 
  exb.addEventListener('click', e=>{
    e.preventDefault();
    try {
      const idArr = exb.id.split(',');
      // const index = Number(idArr[-1]); //exBtn0 -> 0  
      const index = parseInt(idArr[-1]); //exBtn0 -> 0  

      const chapter = data[courseDir[selectedCourse]][index];

      const tb = document.getElementsByClassName('');
    } catch(err){
      console.error(err.message);

    }
  })
}

const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const delBtn = document.getElementById("delBtn");
const visBtn = document.getElementById("visBtn");


const auForm  = document.getElementById('auForm');


addBtn.addEventListener('click', e=>{
    counter++;
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    document.getElementById('auLegend').textContent = 'Add a unit';

    document.getElementById('auBtn').textContent = 'Add';

    const name = document.getElementById('unitName');
    const def = document.getElementById('unitDef');
    const pur = document.getElementById('unitPurpose');
    const pos = document.getElementById('unitPos');
    const ref = document.getElementById('unitRef');

    const tr = document.createElement('tr');
    tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
    const td1 = document.createElement('td');
    td1.textContent = name;
    td1.className = "px-4 py-2 border border-gray-200";

    const td2 = document.createElement('td');
    td2.textContent = def;
    td2.className = "px-4 py-2 border border-gray-200";

    const td3 = document.createElement('td');
    td3.textContent = pur;
    td3.className = "px-4 py-2 border border-gray-200";

    const td4 = document.createElement('td');
    td4.textContent = pos;
    td4.className = "px-4 py-2 border border-gray-200";

    const td5 = document.createElement('td');
    const a = document.createElement('a'); 
    a.href = ref; 
    a.textContent = ref; 
    a.target = '_blank';
    td5.appendChild(a);
    td5.className = "px-4 py-2 border border-gray-200";

    const exBtn = document.createElement('button');
    exBtn.id = `${counter}`; 
    exBtn.textContent = "Examinate";
    exBtn.setAttribute('type', 'button');
    exBtn.className = "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    const td6 = document.createElement('td');
    td6.appendChild(exBtn); 
    
    tr.append(td1,td2,td3,td4,td5,td6);

    tbody.appendChild(tr); 

    data[courseDir[selectedCourse]].push({knowledgeUnit: name, definition: def, purpose: pur, position: pos, references: ref});
})


updateBtn.addEventListener('click', e=>{
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    document.getElementById('auLegend').textContent = 'Update a unit';

    document.getElementById('auBtn').textContent = 'Update';
    
})

delBtn.addEventListener('click', e=>{
    
})

visBtn.addEventListener('click', e=>{
    
})



auForm.addEventListener('submit', e=>{
    e.preventDefault(); 
})





window.localStorage.setItem('data', JSON.stringify(data));