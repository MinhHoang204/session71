import { useDispatch, useSelector } from "react-redux"
import { deleteJob, updateJob } from "../store/reducers/todoListReducer";

export default function TodoList() {
    const data:any = useSelector(state=>state);
    console.log(1111111, data);
    const disPatch = useDispatch();
    const addTodoList=()=>{
        let newTodo:any = {
            id:Math.floor(Math.random()*99999999),
            name:"code redux-toolkit"
        }
        disPatch(addTodo(newJob));
    }
    const handleDelete = (id:number)=>{
        disPatch(deleteJob(id))
    }
    const handleUpdate = (job:any)=>{
        disPatch(updateJob(job));
    }
  return (
    <div>TodoList
        <ul>
            {data.todolistReducer.jobs.map((job:any)=>{
                return <li key={job.id}>{job.name} 
                <button onClick={() => handleDelete}>xoa</button>
                <button onClick={() => handleUpdate}></button>
                </li>
            })}
        </ul>
    </div>
  )
}
