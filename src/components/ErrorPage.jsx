import React from 'react'
import './../styles.css/error-page.css';

const ErrorPage = () => {   
  return (
    <body className="custom-body">
      <section id="not-found">
      <div id="title">Error 404</div>
      <div className="circles">
      <p>404<br />
       <small> Ocurrio un ERROR pagina no encontrada </small>
      </p>
      <span className="circle big"></span>
      <span className="circle med"></span>
      <span className="circle small"></span>
    </div>
  </section>
    </body>
  )
}

export default ErrorPage
