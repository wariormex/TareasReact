import React from "react";

const Tarea = ({tarea, onClickFn}) => {
    let data = {
        _id: tarea._id
    };
    const clickTarea = () =>{
        onClickFn(tarea._id)
    }
    return(
        <div>
            <h5>{tarea.name}</h5>
            <h5>{`_Id: ${tarea._id}`}</h5>
            <h5>{`Id: ${tarea.id}`}</h5>
            <h5>{`Materia: ${tarea.materia}`}</h5>
            <h5>{`Puntos: ${tarea.puntos}`}</h5>
            <h5>{`Fecha de Entrega: ${tarea.fechaEntrega}`}</h5>
            <h5>{`Fecha de Creacion: ${tarea.fechaCreacion}`}</h5>
            <button className="new-btn" onClick={clickTarea}>{"Borrar Tarea"}</button>
        </div>
    );
    
}

export default Tarea;