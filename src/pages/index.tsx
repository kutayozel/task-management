import Image from "next/image";
import { Inter } from "next/font/google";
import Task from "@/components/Task";
import TaskList from "@/components/TaskList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-10 pt-10">
      <TaskList />
    </div>
  );
}
