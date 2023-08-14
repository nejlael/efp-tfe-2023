// Importez les modules nécessaires
const strapi = require('strapi');

const checkClientValidity = async (clientNumber) => {
  try {
    // Utilisez Strapi pour rechercher le client par numéro
    const client = await strapi.query('client').findOne({ client_number: clientNumber });

    // Si le client est trouvé, le numéro de client est valide
    return client !== null;
  } catch (error) {
    console.error(error);
    return false; // En cas d'erreur, considérez le numéro de client comme invalide
  }
};

module.exports = { checkClientValidity };
