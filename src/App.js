
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import TaskDetails from './components/TaskDetails';



function App() {

  const [tasks, setTasks] = useState([
    {
      name: 'Bug_1',
      description: 'Bug when we start the module',
      hoursOfWork: null,
      takenByUser: null,
      inProgress: false,
      isFinished: false,
      _createdOn: '01.01.2022',
      _id: '1',
      _ownerId: 'Kalin'
    },
    {
      name: 'Bug_2',
      description: 'Bug with the onboarding emails',
      hoursOfWork: 2,
      takenByUser: 'Ivancho',
      inProgress: false,
      isFinished: true,
      _createdOn: '02.01.2022',
      _id: '2',
      _ownerId: 'Kalin'
    },
    {
      name: 'Bug_3',
      description: 'Bug with the Contact Us Page',
      hoursOfWork: null,
      takenByUser: null,
      inProgress: false,
      isFinished: false,
      _createdOn: '03.01.2022',
      _id: '3',
      _ownerId: 'Ivancho'
    },
  ]);



  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home tasks={tasks} />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create-task' element={<AddTask />}></Route>
          <Route path='/:taskId' element={<TaskDetails tasks={tasks} />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
