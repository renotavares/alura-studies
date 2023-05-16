import Form from './components/Form';
import List from './components/List';
import style from './App.module.scss'
import Timer from './components/Timer';
import { useState } from 'react';
import Task from './types/Task';

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [selected, setSelected] = useState<Task>()

  const selectTask = (taskSelected: Task): void => {
    setSelected(taskSelected)
    setTasks(tarefasAnteriores => tarefasAnteriores.map(task => ({...task, selected: task.id === taskSelected.id ? true : false})))
  }

  const onNewTask = (task:Task) => {
    setTasks([...tasks, task])
  }

  const finalizarTarefa = () => {
    if(selected){
      setSelected(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(
        task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task
        }
      ))
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Form onCreateTask={(task: Task) => onNewTask(task)} />
      <List 
        title='Estudos do dia' 
        tarefas={tasks}
        selecionaTarefa= {(selected) => selectTask(selected)}
      />
      <Timer selecionado={selected} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
