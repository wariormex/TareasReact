import {useEffect, userEffect, useState} from "react";
import Tarea from "./tarea.js"
import TareaForm from "./tareaForm.js"

const TareasList = () =>{
    /*const lista = [
        {
            name: "tarea1",
            id: 1,
            materia: "materia1",
            puntos: 100,
            fechaEntrega: "2022-03-20",
            fechaCreacion: "2022-03-19"
        },
        {
            name: "tarea2",
            id: 2,
            materia: "materia2",
            puntos: 100,
            fechaEntrega: "2022-03-20",
            fechaCreacion: "2022-03-19"
        },
    ];*/
    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:4000/tareas")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const createTarea = (data) => {
        try {
            fetch("http://localhost:4000/tareas", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(dataResponse =>{
                setTareas([...tareas, dataResponse.data]);
                setShowForm(false);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTarea = (data) => {
        try {
            console.log(data)
            fetch(`http://localhost:4000/tareas/${data}`, {
                method: 'DELETE'/*,
                headers:{
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    */
            })
            .then(response => response.json())
            .then(dataResponse =>{
                //setTareas([...tareas, dataResponse.data]);
                //setTareas([...tareas, ...tareas]);
                //setShowForm(false);
            })
            .then(() =>{
                getTareas()
            });
        } catch (error) {
            console.log(error);
        }
    }

    const updateTarea = (data) => {
        try {
            console.log(data)
            fetch(`http://localhost:4000/tareas/${data._id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    
            })
            .then(response => response.json())
            .then(dataResponse =>{
                setTareas([...tareas, dataResponse.data]);
                //setTareas([...tareas, ...tareas]);
                setShowForm(false);
            })
            .then(() =>{
                getTareas()
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    const getTareas = () =>{
        fetch("http://localhost:4000/tareas")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }

    return(
        <div>
            {tareas.map((tarea,index) => (
                <Tarea
                    key = {index}
                    index = {index}
                    tarea = {tarea}
                    onDeleteFn = {deleteTarea}
                    onUpdateFn = {updateTarea}
                    formState = {showForm}
                    
                    
                />   
            ))}
            <button className="new-btn"
                onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cerrar" : "Nueva Tarea"}
                </button>
                    {showForm && <TareaForm onClickFn={createTarea}></TareaForm>}
                
        </div>
    );
}

export default TareasList;