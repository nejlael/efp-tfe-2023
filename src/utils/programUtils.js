export function generateProgramText(name, age, weight, height, goal, experience) {
    let programText = '';
  
    // Ajoutez les réponses du formulaire au texte clair
    programText += `Nom: ${name}\n`;
    programText += `Âge: ${age}\n`;
    programText += `Poids: ${weight} kg\n`;
    programText += `Taille: ${height} cm\n`;
    programText += `Objectif: ${goal}\n`;
    programText += `Expérience en entraînement:\n${experience}\n`;
  
    // Ajoutez d'autres informations si nécessaire
  
    return programText;
  }
  