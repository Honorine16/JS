// Initialisation des données des notes : tableau de 5 élèves, chaque élève ayant 5 matières
const notes = [
    [10, 11, 13, 14, 12], 
    [17, 18, 19, 16, 17],
    [12, 15, 14, 13, 16], 
    [14, 13, 12, 15, 14], 
    [11, 12, 13, 14, 15]  
  ];
  
  // Fonction pour calculer la moyenne d'un tableau de nombres
  function calculerMoyenne(notes) {
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return somme / notes.length;
  }
  
  // Calcul des moyennes pour chaque élève
  const moyennesEleves = notes.map(eleveNotes => calculerMoyenne(eleveNotes));
  
  // Création d'un tableau avec les moyennes et les indices des élèves
  const moyennesAvecIndices = moyennesEleves.map((moyenne, index) => ({
    moyenne,
    index
  }));
  
  // Tri des élèves par moyenne décroissante
  moyennesAvecIndices.sort((a, b) => b.moyenne - a.moyenne);
  
  // Attribution des rangs
  moyennesAvecIndices.forEach((eleve, rang) => {
    eleve.rang = rang + 1; // Les rangs commencent à 1
  });
  
  // Affichage des résultats
  moyennesAvecIndices.forEach(eleve => {
    console.log(`Rang ${eleve.rang} : Élève ${eleve.index + 1} avec une moyenne de ${eleve.moyenne.toFixed(2)}`);
  });
  
  // Calcul de la moyenne générale des 
  const moyenneGenerale = calculerMoyenne(moyennesEleves.map(eleve => eleve.moyenne));
  console.log(`Moyenne générale des élèves : ${moyenneGenerale.toFixed(2)}`);
  