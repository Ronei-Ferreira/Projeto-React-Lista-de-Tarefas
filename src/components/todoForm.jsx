import { useState } from 'react';

function TodoForm() {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handledSubmit =  (e) => {
        e.preventDefault();
        console.log("Enviou form!");
    }


return (
<div className='todo-form'>
<h2>Criar tarefa</h2>
<form onSubmit={handledSubmit}>
            <input
                 type="text"
                placeholder='Digite o título'
                />

            <select>
                <option value="">
                        Selecione uma categoria
                </option>

                <option value="Trabalho">
                        Trabalho
                </option>

                <option value="Pessoal">
                        Pessoal
                 </option>

                <option value="Estudos">
                        Estudos
                </option>
            </select>

            <button type='submit'>
                    Criar tarefa
            </button>
        </form>
    </div>
    );
}

export default TodoForm;