import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');


  /*   const onChangeTarefa = (event) => {
      setTarefa(event.target.value);
    }; */

  const adicionaTarefa = () => {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  const removeTarefa = (id) => {
    /* const listaFiltrada = lista.filter((cadaTarefa) => cadaTarefa !== item); */
    setTarefas(tarefas.filter((tarefa, i) => i !== id))
    /* setLista(listaFiltrada); */
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {tarefas.map((tarefa, id) => (
            <Tarefa key={id}>
              <p>{tarefa.toUpperCase()}</p>
              <RemoveButton onClick={() => removeTarefa(id)}>
                <img src={bin} alt="" width="16px" />
              </RemoveButton>
            </Tarefa>
          ))}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
