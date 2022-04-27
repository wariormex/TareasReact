import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useState } from 'react';
import Moment from "moment";

const TareaUpdateForm = ({onClickFn, tareaToUpdate, closeFormFn}) => {
  const [id,setId] = useState(tareaToUpdate.id);
  const [nombre,setNombre] = useState(tareaToUpdate.name);
  const [materia,setMateria] = useState(tareaToUpdate.materia);
  const [puntos,setPuntos] = useState(tareaToUpdate.puntos);
  const [fechaEntrega,setFechaEntrega] = useState(tareaToUpdate.fechaEntrega);

  const onEnviar = (event) => {
    event.preventDefault();
    if(id === "" || nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") alert("No puede dejar un campo vacio");
    else{
      let data = {
        _id: tareaToUpdate._id,
        id: id,
        name: nombre,
        materia: materia,
        puntos: puntos,
        fechaEntrega: fechaEntrega
      };
      onClickFn(data);
      closeFormFn();
    }
  }
  
  function formatDate(date) {
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${currentDate}`;
}

    return (
      <div >
        <Form onSubmit={onEnviar}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id:  </Form.Label>
            <Form.Control type="number" placeholder="Enter Id" value = {id} onChange={(txt) => setId(txt.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:  </Form.Label>
            <Form.Control type="text" placeholder="Enter name" value = {nombre} onChange={(txt) => setNombre(txt.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPuntos">
            <Form.Label>Puntos:  </Form.Label>
            <Form.Control type="text" placeholder="Enter Puntos" value = {puntos} onChange={(txt) => setPuntos(txt.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMateria">
            <Form.Label>Materia:  </Form.Label>
            <Form.Control type="text" placeholder="Enter Materia" value = {materia} onChange={(txt) => setMateria(txt.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFechaEntrega">
            <Form.Label>Fecha de Entrega:  </Form.Label>
            <Form.Control type="text" placeholder={Moment(fechaEntrega).format("DD-MM-YYYY")} value = {Moment(fechaEntrega).format("DD-MM-YYYY")} onFocus={(e) => e.target.type = "date"} onBlur={(e) => (e.target.type = "text")} onChange={(txt) => setFechaEntrega(txt.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default TareaUpdateForm