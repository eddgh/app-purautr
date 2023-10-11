import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../Utils/api";
import ScheduleFormModal from "../ScheduleFormModal/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const DetailCard = () => {
  const { buscaPacientePeloCodigo } = useContext(AppContext);
  const { id } = useParams();
  const [paciente, setPaciente] = useState(undefined);

  // useEffect(() => {
  //   setPaciente(buscaPacientePeloCodigo(id));
  // }, [id]);

  useEffect(() => {
    async function buscarDados(id) {
      fetch(`${baseUrl}/paciente`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.find((paciente) => paciente.CODIGO === id);
          setPaciente(result);
        });
    }
    buscarDados(id);
  }, [id]);

  return (
    <>
      {paciente ? (
        <>
          <h1>{paciente.NOME} </h1>
          <section className="card col-sm-12 col-lg-6 container border border-0">
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <div className={`card-body row `}>
              <div className="col-sm-12 col-lg-6 ">
                <div className="ratio ratio-1x1 ">
                  <img className="rounded w-75"
                    src={`/pictures/${paciente.NUM_REG}.jpg`}
                    alt={`foto do paciente ${paciente.NOME}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nome: {paciente.NOME}</li>
                  <li className="list-group-item">Cns: {paciente.CNS}</li>
                  <li className="list-group-item">Prontuário: {paciente.CODIGO}</li>
                  <li className="list-group-item">Foto: {paciente.NUM_REG}</li>
                </ul>
                <div className="text-center">
                  {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`btn btn-light ${styles.button}`}
                  >
                    Marcar consulta
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
