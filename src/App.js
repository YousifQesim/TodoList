import "./App.css";
// import './Delete_button.css';
import { useState, useRef, useEffect } from "react";
import Delate_button from "../src/component/Delate_button";

function App() {
  const [todo, setTodo] = useState([]);
  let [change, setchange] = useState("");

  const change_value = (e) => {
    setchange(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (change.length > 0) {
      const task = {
        id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
        taskName: change,
        complit: false,
      };
      const setList = [...todo, task];
      setTodo(setList);
    }
  };

  const add_value = (events) => {
    //aw taskanay ka peshtr habuyna u away ista bxa naw setlist
    if (change.length > 0) {
      const task = {
        id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
        taskName: change,
        complit: false,
      };
      const setList = [...todo, task];
      setTodo(setList);
    } else {
      alert("Add Your Task");
    }
  };

  const delete_task = (id) => {
    setTimeout(() => {
      const new_set_todo = todo.filter((task) => {
        if (id === task.id) {
          return false;
        } else {
          return true;
        }
      });

      setTodo(new_set_todo);
    }, 2000);
  };

  useEffect(() => {
    document.querySelectorAll(".button").forEach((button) => {
      let text = button.querySelector(".text");
      text.innerHTML =
        "<span>" +
        text.textContent.trim().split("").join("</span><span>") +
        "</span>";
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("delete")) {
          button.classList.add("delete");

          setTimeout(() => button.classList.remove("delete"), 2000);
        }
        e.preventDefault();
      });
    });
  }, [add_value]);

  const complieted = (id) => {
    setTodo(
      todo.map((task) => {
        if (task.id===id) {
          return { ...task, complit: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="all">
      <div className="addList">
        <form onSubmit={handleSubmit}>
          <input
            class="form__field"
            placeholder="Add Your Task"
            onChange={change_value}
          />
          <button
            type="button"
            class="btn btn--primary btn--inside uppercase"
            onClick={add_value}
          >
            Add task
          </button>
        </form>
      </div>
      <div className="viewList" >
        {todo.map((task) => {
          return (
      <>
            

              <Delate_button
              
                taskName={task.taskName}
                id={task.id}
                delete_task={delete_task}
                complieted={complieted}
                complit={task.complit}
               />
               </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
