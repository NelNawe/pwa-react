#PWA
 Progressive Web APP avec REACT

DESCRIPTION

Il est question de créér une progressive web app avec react et le rendre en offline.
Dans ce cas j'utilise un compteur pour pouvoir manipuler le service worker


 PREREQUIS

  Un editeur de code(dans ce cas nous utilisons vscode)
  Installer Node.js 

 INSTALLATION 

 Installer serve afin de lancer afin de lancer les fichiers statique du front-end
    
      npm install serve

 Installer la bibliothèque @mui/material pour avoir une interface prete à etre utilisée
    
       npm install @mui/material
  Installer les bibliothèque emotion/react et emotion/styled respectivement pour avoir des utilitaires qui définissent des styles 
    
      npm install @emotion/react @emotion/styled 

  UTILISATION

  Creer l'application pwa avec react 

npx create-react-app my-app --template cra-template-pwa

  Pour lancer le projet 
    npm start
 
  Deployer l'application  sur un serveur statique 

   npm run build
   npx serve -s build 