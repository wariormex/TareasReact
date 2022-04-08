import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useState } from 'react';

const TareaForm = ({onClickFn}) => {
  const [id,setId] = useState("");
  const [nombre,setNombre] = useState("");
  const [materia,setMateria] = useState("");
  const [puntos,setPuntos] = useState("");
  const [fechaEntrega,setFechaEntrega] = useState("");

  const onEnviar = (event) => {
    event.preventDefault();
    if(id === "" || nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") alert("No puede dejar un campo vacio");
    else{
      let data = {
        id: id,
        name: nombre,
        materia: materia,
        puntos: puntos,
        fechaEntrega: fechaEntrega
      };
      onClickFn(data);
    }
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
            <Form.Control type="date" placeholder="Enter Fecha Entrega" value = {fechaEntrega} onChange={(txt) => setFechaEntrega(txt.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default TareaForm