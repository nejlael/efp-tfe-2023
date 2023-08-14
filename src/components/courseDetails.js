import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [clientNumber, setClientNumber] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/cours-collectifs/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const handleReservation = async () => {
    // Vérifier si le numéro de client existe dans la base de données
    const isClientValid = await checkClientValidity(clientNumber);

    if (isClientValid) {
      // Effectuer une requête POST pour enregistrer la réservation
      const response = await axios.post('http://localhost:1337/api/reservation', {
        courseId: id,
        clientNumber: clientNumber,
      });

      // Traiter la réponse de la réservation

      // Réinitialiser le numéro de client
      setClientNumber('');
    } else {
      // Gérer le cas où le numéro de client est invalide
      console.log("Numéro de client invalide");
    }
  };

  return (
    <div>
      <h2>{course.attributes.Titre}</h2>
      <p>{course.attributes.Description}</p>
      <p>Horaire : {course.attributes.Horaire}</p>

      <input
        type="text"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
        placeholder="Numéro de client"
      />

      <button onClick={handleReservation}>Réserver</button>
    </div>
  );
}

export default CourseDetails;
