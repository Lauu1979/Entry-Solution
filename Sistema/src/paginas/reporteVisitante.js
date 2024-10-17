import React from "react"
import Menu from "../componentes/menu.jsx"
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReporteV from "./reporteV.jsx"
import "../utiles/css/reporteV.css"

const ReporteVisitante = () => {
  return (
    <div>
      <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-oficiales-policia_114360-13667.jpg?w=740&t=st=1725401810~exp=1725402410~hmac=3a4de5a89da4c6ee5427c1d3e07e862ad113372dcfd157711f067f308b2da559" className="logo3"/>
<div className="Conntainer-REPORTE">
  <Menu />
  <div className="login-containeer">
    <div className="form-bbox login">
      <h1>REPORTE VISITANTES</h1>
      <i className="bx bxs-archive-out" />
      <form action="#" method="post">
        <br />
        <div className="input-box">
          <label htmlFor="año">Año:</label>
          <select id="año" name="año">
            <option value="año">2024</option>
            <option value="año">2013</option>
            <option value="año">2009</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <br />
        <div className="input-box">
          <label htmlFor="mes">Mes:</label>
          <select id="mes" name="mes">
            <option value="mes">JULIO</option>
            <option value="mes">DICIEMBRE</option>
            <option value="mes">ENERO</option>
            <option value="mes">Otro</option>
          </select>
        </div>
        <br />
        <label htmlFor="tipoElemento">Tipo de Elemento:</label>
        <select id="tipoElemento" name="tipoElemento">
          <option value="Computador">Computador</option>
          <option value="Raquetas">Raquetas</option>
          <option value="Tablet">Tablet</option>
          <option value="otro">Otro</option>
        </select>
        <br />
        <br />

      </form>
      <PDFDownloadLink document={<ReporteV />} fileName="Reporte_Visitante.pdf"> 
          {({loading})=>
            loading ? <button>Cargando...</button> : <button className="booton-reporte">Generar</button>
          }
        </PDFDownloadLink>
    </div>
    <div className="form-booox login">
      <i className="bx bxs-file-pdf" />
    </div>
    <div className="form-bocx login">
      <i className="bx bxs-file-gif" />
    </div>
  </div>
</div>
</div>

  )
}

export default ReporteVisitante