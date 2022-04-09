import React from "react";
import TareaUpdateForm from "./tareaUpdateForm.js"
import {useEffect, userEffect, useState} from "react";

const Tarea = ({tarea, onDeleteFn, onUpdateFn, formState, formStateFn}) => {
    const [showForm, setShowForm] = useState(formState);
    let data = {
        _id: tarea._id
    };
    const clickDeleteTarea = () =>{
        onDeleteFn(tarea._id)
    }
    const  clickUpdateTarea = () =>{
        setShowForm(!showForm)
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
            <button className="new-btn" onClick={clickDeleteTarea}>{"Borrar Tarea"}</button>
            <button className="new-btn" onClick={clickUpdateTarea}>{showForm ? "Cerrar" : "Actualizar Tarea"}</button>
            {showForm && <TareaUpdateForm onClickFn={onUpdateFn} tareaToUpdate = {tarea} closeFormFn = {clickUpdateTarea}></TareaUpdateForm>}
        </div>
    );
    
}

export default Tarea;