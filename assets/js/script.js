 //Déclarer mes variables.

 let mdpsaisi;
 let forcemdp;
 let regexmaj = new RegExp("[A-Z]");
 let regexmin = new RegExp("[a-z]");
 let regexspecial = new RegExp("\\W");
 let regexchifffre = new RegExp("[0-9]");
 let message = document.getElementById('message');
 
 function verifierforce(){
     // récupération du mot de passe proposé avec la fonction .value.
 
    forcemdp = 0; 
    mdpsaisi = document.getElementById('mdp').value;
 
     // Notre condition pour vérifier la force du mot de passe.
    
    if(mdpsaisi.length <= 8){
        forcemdp = forcemdp - 1;
    }
     
     if(regexmaj.test(mdpsaisi)){
         forcemdp = forcemdp + 1;
     }
     
     if(regexmin.test(mdpsaisi)){
         forcemdp = forcemdp + 1;
     }

     if(regexspecial.test(mdpsaisi)){
         forcemdp = forcemdp +1;
     }

     if(regexchifffre.test(mdpsaisi)){
         forcemdp = forcemdp + 1;
     }

     switch (forcemdp){
         case 4: message.innerHTML = '<span class="text-success">Mot de passe très sécurisé</span>';
         break;
         case 3: message.innerHTML = '<span class="text-success">Mot de passe sécurisé</span>';
         break;
         case 2: message.innerHTML = '<span class="text-warning">Mot de passe moyen</span>';
         break;
         case 1: message.innerHTML = '<span class="text-danger">Mot de passe dangereux !</span>';
         break;
         case 0: message.innerHTML = '<span class="text-danger">Mot de passe dangereux !</span>';
         break;
         default:
                 message.innerHTML = ' ' ;
     }
} 
    
         
 
     // Ajout d'un écouteur d'événement pour vérifier la force du mot de passe.();
     
     document.getElementById('mdp').addEventListener('keyup', verifierforce, false);