import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import Sun from "../assets/icons/sun.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import Moon from "../assets/icons/moon.svg?react";
import TaskSeparator from "./TaskSeparator";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <Trash />
          </Button>

          <Button>
            Adicionar tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<Sun />} />
        </div>

        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSun />} />
        </div>

        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<Moon />} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
