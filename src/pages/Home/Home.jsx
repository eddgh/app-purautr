import {useState, useEffect} from 'react';
import Card from "../../Components/Card/Card";
import baseUrl from '../../Components/Utils/api';

const Home = () => {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    try {
      fetch(`${baseUrl}/paciente`)
        .then((res) => res.json())
        .then((data) => setPaciente(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {paciente.length
          ? paciente.map((paciente) => (
            <Card {...paciente} key={paciente.CODIGO} />
          ))
          : null}
      </div>
    </>
  );
};

export default Home;
