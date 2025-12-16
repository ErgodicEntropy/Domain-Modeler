# Introduction

## Product Management

### To Do
1. Optimize data list:
    1. add more parameters
    2. add more units
    3. data model: which units exist? why they exist? how are they related?
2. Enable file uploading -> node framework for RAG
3. Enable group work
4. Enable CRUD: add, delete, update, sort and visualize
5. Handle examination per course: code -> simulation box, text -> paragraphs, etc
6. Dashboard for student modeling

### System Requirements

Authentification
• Page de connexion avec validation
• Utilisateurs par défaut :
o Admin : admin@app.com / admin123
o User : user@app.com / user123
• Stockage de session dans localStorage
• Bouton de déconnexion
 Navigation
• Navbar : Logo, nom utilisateur, déconnexion, sélecteur de langue
• Menu latéral : Liens vers Dashboard et les 5 entités CRUD
• Menu responsive 

Entités CRUD (minimum 5)
Pour chaque entité :
1. Créer
• Formulaire avec validation complète
• Messages d'erreur en temps réel
• Confirmation après creation
2. Lire - Liste
• Tableau avec pagination (10, 25 ou 50 éléments/page)
• Tri par colonnes (ascendant/descendant)
• Filtres (au moins 2 par entité)
• Barre de recherche en temps réel
• Export CSV
• Boutons : Voir détails, Modifier, Supprimer
3. Consulter - Détails
• Page dédiée avec informations complètes
• Export PDF de la fiche
• Boutons : Retour, Modifier, Supprimer
4. Modifier
• Formulaire pré-rempli
• Validation identique à la création
• Confirmation de mise à jour
5. Supprimer
• Modal de confirmation
• Message explicite avant suppression
• Confirmation après suppression

Dashboard (Tableau de bord)
1. Cartes d'indicateurs (KPI)
• Minimum 6 cartes affichant les statistiques clés
• Exemple : Nombre total par entité, revenus, utilisateurs actifs, etc.
2. Graphiques (minimum 5 types différents)
a. Pie Chart (Diagramme circulaire)
b. Donut Chart (Diagramme en anneau)
c. Bar Chart (Diagramme en barres)
d. Line Chart (Graphique linéaire)
e. Au choix : Scatter Plot, Histogram, Area Chart, etc.
Bibliothèques recommandées : Chart.js, ApexCharts, ECharts
3. Filtres dynamiques
• Filtres par période (jour, semaine, mois, année)
• Filtres par catégorie/type
• Mise à jour automatique des graphiques


Internationalisation (i18n)
➢ 3 langues obligatoires :
• Français (par défaut)
• Arabe (avec support RTL)
• Anglais
➢ Éléments à traduire :
• Tous les textes de l'interface
• Messages d'erreur et de confirmation
• Labels de formulaires
• Sauvegarde de la langue dans localStorage

### User Requirements

### Product Backlog

