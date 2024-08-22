const notes = [
    [12, 15, 14, 13, 16], 
    [10, 11, 13, 14, 12], 
    [17, 18, 19, 16, 17], 
    [14, 13, 12, 15, 14], 
    [11, 12, 13, 14, 15]  
  ];

  function calculerMoyenne(notes) {
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return somme / notes.length;
  }

  const moyennesEleves = notes.map(eleveNotes => calculerMoyenne(eleveNotes));

  moyennesEleves.forEach((moyenne, index) => {
    console.log(`Moyenne de l'élève ${index + 1} : ${moyenne.toFixed(2)}`);
  });

  const moyenneGenerale = calculerMoyenne(moyennesEleves);
console.log(`Moyenne générale des élèves : ${moyenneGenerale.toFixed(2)}`);