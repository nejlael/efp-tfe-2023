import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [clientNumber, setClientNumber] = useState('');
  const [isReservationSuccess, setIsReservationSuccess] = useState(false);
  const [reservationError, setReservationError] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/cours-collectifs/${id}`);
        setCourse(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:1337/api/reservation', {
        courseId: id,
        clientNumber: clientNumber,
      });

      // Vérifiez la réponse de l'API pour la réservation
      if (response.data.message === 'Réservation effectuée avec succès') {
        setIsReservationSuccess(true);
        setReservationError('');
      } else {
        setIsReservationSuccess(false);
        setReservationError('Une erreur est survenue lors de la réservation.');
      }

      // Réinitialisez le numéro de client
      setClientNumber('');
    } catch (error) {
      console.log(error);
      setIsReservationSuccess(false);
      setReservationError('Une erreur est survenue lors de la réservation.');
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

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

      <button onClick={handleReservation}>Réserver ce cours</button>

      {isReservationSuccess && <p>Réservation effectuée avec succès !</p>}
      {reservationError && <p style={{ color: 'red' }}>{reservationError}</p>}
    </div>
  );
}

export default CourseDetails;
