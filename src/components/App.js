import React, { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import deleteimage from "./delete.png";
import edit from "./edit.png"
import "./App.css";
import github from "./github.png";
const Header=()=>{
return(
    <div className="header">
        <h1 className="container">The Todo List App</h1>
        <a href="https://github.com/tanshinayak" ><img className="github" src={github} alt="github"></img></a>
    </div>
)
}
const Project=({allproject,selectProject,setAllproject})=>{
  const deleteproject=(project)=>{
    const i = allproject.indexOf(project);
    if (i > -1) {
      setAllproject(allproject.splice(i, 1))
    }
  }
  return (
  <div>
    <ul onClick={selectProject}>
    {allproject.map(project=><div className="align">
      <h4 key={project.name} className="project">{project.name}</h4>
      <img src={deleteimage} className="delete" alt="delete" onClick={()=>deleteproject(project)}/></div>)}
    <br/>
    </ul>
  </div>
 )
 }
 const AddProject=(props) =>{
  const [project,setproject]=useState({name:"",task:[]});
    const addproject=(event)=>{
        event.preventDefault();
        props.setAllproject(props.allproject.concat(project));
        props.onHide();
        setproject({name:"",tasks:[]});
    }
    const handleproject=(event)=>{
      const name=event.target.value;
      const tasks=[];
      setproject({name,tasks});
    }
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Project Name</h4>
          <form onSubmit={addproject} >
              <input type="text" placeholder="Name" value={project.name} onChange={handleproject}></input>
              <br/>
              <Button onClick={addproject}>Submit</Button>
              <Button onClick={props.onHide} className="button1">Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
  function AddTask(props) {
    const e=document.getElementById("priority")
    const addtask=(event)=>{
        event.preventDefault();
        const task={
            title,
            des,
            date,
            priority:e.options[e.selectedIndex].value,
            note
        }
        const projectnames=props.allproject.map(project=>project.name);
        const index=projectnames.indexOf(props.projectselected);
        props.allproject[index].tasks=props.allproject[index].tasks.concat(task);
        console.log(event.target);
        props.onHide();
        settitle("");
        setdes("");
        setnote("");
        setdate("");
    }
    const[title,settitle]=useState("");
    const[des,setdes]=useState("");
    const [date,setdate]=useState("");
    const[note,setnote]=useState("");
    const handletitle=(event)=>{
      settitle(event.target.value);
    }
    const handledes=(event)=>{
      setdes(event.target.value);
    }
    const handledate=(event)=>{
      setdate(event.target.value);
    }
    const handlenote=(event)=>{
      setnote(event.target.value);
    }
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Project Name</h4>
          <form onSubmit={addtask} >
              Title<input type="text" placeholder="Title" name="title" value={title} onChange={handletitle}></input>
              <br/>
              Description<textarea type="text" placeholder="Description" name="des" value={des} onChange={handledes}></textarea>
              <br/>
              Select Date<input type="date" name="date" value={date} onChange={handledate}></input>
              <br/>
              Set Priority<select name="priority" id="priority">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
              </select><br/>
              Note<textarea type="text" placeholder="Note" name="note" value={note} onChange={handlenote}></textarea>
              <Button onClick={addtask}>Submit</Button>
              <Button onClick={props.onHide} className="button1">Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
const Task=({allproject,projectselected})=>{
  const projectnames=allproject.map(project=>project.name);
  const index=projectnames.indexOf(projectselected);
  const handleedit=(task)=>{

  }
  return (
    <div>
      {allproject[index].tasks.map(task=><div>
      <h4>{task.title}</h4>
      <h5>Task Description:</h5>{task.des}
      <h5>Due Date:</h5>{task.date}
      <h5>Priority:</h5>{task.priority}
      <h5>Notes:{task.note}</h5>
      <div className="align">
        <img src={edit} alt="edit" onClick={()=>handleedit(task)}/>
        <img src={deleteimage} alt="delete" className="delete"/>
        </div>
      </div>)}
      {console.log(projectselected)}
    </div>
   )
}
const App=()=>{
    const [allproject,setAllproject]=useState([{name:"Default",tasks:[{title:"Default task",des:"It is a default task",date:'20/09/2020',priority:"low",note:""}]}]);
    const [projectselected,setprojectselected]=useState("Default");
    const [show,setshow]=useState(false);
    const [showtask,settaskshow]=useState(false);
    const selectProject=(event)=>{
      console.log(event.target);
      setprojectselected(event.target.innerHTML);
    }
    return(
        <div>
            <Header></Header>
            <div className="div">
            <div className="project">
                <div className="align">
                <h3 className="heading">Projects</h3>
                <button onClick={()=>setshow(true)} className="button">Add Project</button>
                </div>
                <AddProject show={show} onHide={() => setshow(false)} allproject={allproject} setAllproject={setAllproject}/>
                <Project allproject={allproject} selectProject={selectProject} setAllproject={setAllproject}/>
            </div>
            <div className="task">
                <div className="align">
                <h3 className="heading">Tasks</h3>
                <button onClick={()=>settaskshow(true)} className="button">Add Task</button>
                </div>
                <AddTask show={showtask} onHide={() => settaskshow(false)} allproject={allproject} setAllproject={setAllproject} projectselected={projectselected}/>
                <Task allproject={allproject} projectselected={projectselected}/>
            </div>
            </div>
        </div>
    )
}
export default App;