import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/data-table/columns";
import tasks from "@/components/data-table/data/tasks.json";

export default function Table() {
  // const tasks = await getTasks();
  console.log(tasks);
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
