import { Footer } from "../../components/Footet";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2566"
        fullName="Natan Bunkerd"
        studentId="650610777"
      ></Footer>
    </div>
  );
}
