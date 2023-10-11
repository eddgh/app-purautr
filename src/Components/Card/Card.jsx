import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ NOME, CODIGO, NUM_REG }) => {
  const foto = `/pictures/${NUM_REG}.jpg`;

  function is_img(file) {
    var img = document.createElement("img");
    img.src = file;

    // img.onload = function() {
    //   console.log("A imagem " + file + " existe");
    // }
    img.onerror = function () {
      console.log("A imagem " + file + " NAO existe");
    };
  }

  is_img(foto);

  return (
    <>
      <div className={`row`}>
        <div className="ratio ratio-1x1">
          <img
            className=""
            src={foto}
            alt={`foto do paciente ${NOME}`}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* <Link to={`/paciente/${CODIGO}`}>{NOME}</Link> */}

        <div className="card-text">
          <Link to={`/paciente/${CODIGO}`}>
            <small className={`card-text ${styles.title}`}>{`${NOME}`}</small>
          </Link>
        </div>

        {/* <img
            className="card-img-top img-fluid img-thumbnail mx-auto d-block my-4"
            // src="/images/doctor.jpg"
            src={foto}
            alt="foto do paciente"
          /> */}
        {/* <div className={`card-body ${styles.CardBody}`}>
            <Link to={`/paciente/${CODIGO}`}>
              <h5 className={`card-title ${styles.title}`}>{`${NOME}`}</h5>
            </Link>
          </div> */}
      </div>
    </>
  );
};

export default Card;
