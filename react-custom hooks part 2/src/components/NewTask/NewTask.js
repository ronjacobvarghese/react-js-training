import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTasksRequest } = useHttp();

  const addTasksHandler = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTasksRequest({
      url: "https://custom-hooks-part-2-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: { test: taskText },
      header: { "Content-Type": "application/json" },
    },  addTasksHandler.bind(null, taskText)
    );


  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
