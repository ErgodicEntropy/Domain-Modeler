# Introduction

## Product Management

### To Do
1. Optimize data list:
    1. add more parameters
    2. add more units
    3. data model: which units exist? why they exist? how are they related?
2. Enable file uploading -> node framework for RAG
3. Enable group work -> peer to peer examination and grading
4. Enable CRUD: add, delete, update, sort and visualize
5. Handle examination per course: code -> simulation box, text -> paragraphs, etc
6. Dashboard for student modeling
7. Add database in the backend (mysqli php)
8. create branch (optional): git branch -m -> two branches: one for client-side only (js) and the other for client-side and server side (js+php mysql)
    1. Instead of branching out, do this to move between client-side and server-side:
        1. remove or add method and action to forms
        2. comment or decomment js e.preventDefaults and window.location.hrefs
        3. run xampp apache/sql servers (localhost/project/files with project in xampp/htdocs) or run from vsc lifeserver
9. Add TD/TP table/graph part to the project
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
- **Create**
  - Form with full validation
  - Real-time error messages
  - Confirmation after creation

- **Read – List View**
  - Table with pagination (10, 25, or 50 items per page)
  - Column sorting (ascending / descending)
  - Filters (at least 2 per entity)
  - Real-time search bar
  - CSV export
  - Action buttons: View details, Edit, Delete

- **Read – Detail View**
  - Dedicated page with complete information
  - PDF export of the record
  - Action buttons: Back, Edit, Delete

- **Update**
  - Pre-filled form
  - Same validation rules as creation
  - Confirmation after update

- **Delete**
  - Confirmation modal with explicit warning
  - Confirmation after deletion

- **Dashboard**
  - **KPI Cards**
    - Minimum of 6 cards displaying key statistics
    - Examples: Total count per entity, revenue, active users, etc.

  - **Charts (minimum of 5 different types)**
    - Pie Chart
    - Donut Chart
    - Bar Chart
    - Line Chart
    - Optional: Scatter Plot, Histogram, Area Chart, etc.
    - Recommended libraries: Chart.js, ApexCharts, ECharts

  - **Dynamic Filters**
    - Time-based filters (day, week, month, year)
    - Category/type filters
    - Automatic chart updates


- **Internationalization (i18n)**
  - **Required languages (3)**
    - French (default)
    - Arabic (with RTL support)
    - English

  - **Translatable elements**
    - All interface text
    - Error and confirmation messages
    - Form labels
    - Language preference saved in `localStorage`

### User Requirements

### Product Backlog

