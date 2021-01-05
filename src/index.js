import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Categoryadding from './Categoryadding.js'
import Categories from './Categories.js'
import Maincategory from './Maincategory.js'
import Taskinput from './Taskinput.js'
import Items from './Items.js'
import './index.css';

function App() {

// input - new category
// input - new task 

// data = [
//   {
//     category: abc,
//     tasks: [
//       {
//         taskName: xyz,
//         isDone: true / false,
//         isFavorite: true / false,
//       }
//     ],
//     taskCounting : 0
//   }
// ]

  const [newCategory, setNewCategory] = useState("");
  const [newTask, setNewTask] = useState("")
  const [currentTask, setCurrentTask] = useState("Favorite")
  const [listing, setListing] = useState([])
  const [data, setData] = useState([{
    category: "Favorite",
    tasks: [],
    taskCounting: 0
  }])

  const addingCategory = (event) => {
    let newCate = event.target.value;
    newCate = newCate.charAt(0).toUpperCase() + 
           newCate.slice(1); 
    console.log(newCate);
    setNewCategory(newCate)
  }

  const submittingCategory = () => {
    //check if the category exist already
    let condition = true;
    data.forEach(item => {
      if (item.category === newCategory) {
        alert('The category already exists. Please choose another one.')
        condition = false;
      }
    })

    if (condition) {
      const newData = [{
        category: newCategory,
        tasks: [],
        taskCounting:0
      }];
      setData(data.concat(newData))
      console.log(data.concat(newData));
      console.log('from submitting new category');
      //delete the adding field
      setNewCategory("")
    }
  }
  
  // tasks
  const addingTask = (event) => {
    let newTa = event.target.value;
    newTa = newTa.charAt(0).toUpperCase() + 
           newTa.slice(1); 
    console.log(newTa);
    setNewTask(newTa);
  }

  const setMainCategory = (mainCategory) => {
    setCurrentTask(mainCategory)
    data.forEach(item => {
      if (item.category === mainCategory) {
        setListing(item.tasks);
      }
    })
  }

  const submittingTask = () => {

    let condition = true;
    data.forEach(item => {
      item.tasks.forEach(element => {
        if (element.task === newTask) {
          alert('Task already exists. Please choose another one.')
          condition = false;
        }
      })
    })

    if (condition) {
      const workingData = data.map(item => {
        if (item.category === currentTask && currentTask === 'Favorite') {
          alert('Sorry, you cannot add directly to Favorite. You have to mark favorite star from each task you want.')
          return {...item}
        }
        else if (item.category === currentTask) {
          return (
            {
              category: item.category,
              tasks: item.tasks.concat([{
                task: newTask,
                isDone: false,
                isFavorite: false
              }]),
              taskCounting: item.tasks.length + 1
            }
          )
        }
        else {
          return (
            { ...item }
          )
        }
      });
      setData(workingData);
      //give listing to Items
      workingData.forEach(item => {
        if (item.category === currentTask) {
          setListing(item.tasks);
        }
      })
  
      console.log(workingData);
      setNewTask("");
    }
  };

  // 3 button in item

  const handleChecked = (taskChecked, taskCategory) => {
    if (taskCategory === 'Favorite') {
      alert('Sorry, you can only mark it from its own category. Thank you!')
    } else {

      const newData = [...data];
      newData.forEach(item => {
        if (item.category === taskCategory) {
          item.tasks.forEach(element => {
            if (element.task === taskChecked) {
              element.isDone = !element.isDone;
            }
          })
        }
      })
      setData(newData);
    }
  }

  const handleDelete = (taskChecked, taskCategory) => { 
    let newData = [...data];
    newData.forEach(item => {
      if (item.category === taskCategory) {
        for (let i = 0; i < item.tasks.length; i++) {
          if (item.tasks[i].task === taskChecked) {
            item.tasks.splice(i, 1);
            item.taskCounting -= 1;
          }
        }
      }
    })
    //delete in the favorite
    for (let i = 0; i < newData[0].tasks.length; i++) {
      if (newData[0].tasks[i].task === taskChecked) {
        newData[0].tasks.splice(i, 1)
        newData[0].taskCounting -= 1;
      }
    }
    setData(newData)
  }

  const handleFavorite = (taskChecked, taskCategory) => {
    let newData = [...data];
    let checking;
    newData.forEach(item => {
       
        for (let i = 0; i < item.tasks.length; i++) {
          if (item.tasks[i].task === taskChecked) {
            item.tasks[i].isFavorite = !item.tasks[i].isFavorite;
            checking = item.tasks[i].isDone;
          }
        }
      
    })
    
    
    let adding = true;
    for (let i = 0; i < newData[0].tasks.length; i++) {
      if (newData[0].tasks[i].task === taskChecked) {
        newData[0].tasks.splice(i, 1);
        adding = false;
        newData[0].taskCounting -= 1;
      }
    }
    if (adding) {
      console.log(newData[0].tasks)
      newData[0].tasks = newData[0].tasks.concat([{
        task: taskChecked,
        isDone: checking, 
        isFavorite: true
      }]);
      newData[0].taskCounting += 1;
    }
    
    setData(newData);
  };

  return (
    <div className="panel">
      <div className="left-section">
        <Categoryadding newCategory={newCategory}
          onChange={addingCategory}
          onClick={submittingCategory} />
        <Categories data={data} currentTask={currentTask} onClick={setMainCategory}/>
      </div>
      <div className="right-section">
        <div className="top">
          <Maincategory currentTask={currentTask}/>
          <Taskinput newTask={newTask} onChange={addingTask} onClick={submittingTask}/>
        </div>
        <Items listing={listing} currentTask={currentTask}
          onClickChecked={handleChecked}
          onClickDelete={handleDelete}
          onClickFavorite={handleFavorite}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))