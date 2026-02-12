"use client"
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodoQuery, useUpdateTodoMutation } from '@/redux/apis/todo.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Anybody } from 'next/font/google'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import z from 'zod'
const Home = () => {

  const { data } = useGetTodoQuery()
  const [CreateTodo] = useAddTodoMutation()
  const [UpdateTodo] = useUpdateTodoMutation()
  const [DeleteTodo] = useDeleteTodoMutation()


  const todoSchema = z.object({
    task: z.string().min(1),
    desc: z.string().min(1),
    priority: z.string().min(1),
  })

  type todoType = z.infer<typeof todoSchema>

  const { reset, register, handleSubmit, formState: { errors } } = useForm<todoType>({
    defaultValues: {
      task: "",
      desc: "",
      priority: ""
    },
    resolver: zodResolver(todoSchema)
  })

  const handleCreate = (values: todoType) => {
    handleAdd(values)
    reset()
  }

  const handleAdd = async (data: todoType) => {
    try {
      await CreateTodo(data).unwrap()
      toast.success("todo create success")
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async (data: todoType, isComplete: boolean) => {
    try {
      await UpdateTodo({ ...data, complete: isComplete }).unwrap()
      toast.success("todo Update success")
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (_id: string) => {
    try {
      await DeleteTodo(_id).unwrap()
      toast.success("todo Delete success")
    } catch (error) {
      console.log(error)
    }
  }
  return <>
    {/* navbar start  */}
    <div>

      <div className="">

        <nav className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* logo */}
            <h1 className="text-xl font-bold">Todo Application</h1>

            {/* links */}
            <div className="flex gap-8 text-gray-600 font-medium">
              <a className="hover:text-black transition">Home</a>
              <a className="hover:text-black transition">Dashboard</a>
              <a className="hover:text-black transition">Users</a>
              <a className="hover:text-black transition">Settings</a>
            </div>

            {/* action */}
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 transition">
              Login
            </button>

          </div>
        </nav>

      </div>

    </div>
    {/* navbar end */}

    {/* Form section start */}
    <div className="max-w-xl mx-auto mt-16 px-6">

      <div className="bg-white rounded-xl shadow-md p-8">

        <h2 className="text-lg font-semibold mb-6">
          Add New Task
        </h2>

        <form onSubmit={handleSubmit(handleCreate)} className="space-y-5">

          {/* Task name */}
          <input
            {...register("task")}
            type="text"
            placeholder="Task title"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Description */}
          <textarea
            {...register("desc")}
            placeholder="Task description"
            className="w-full border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Priority */}
          <select
            {...register("priority")}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-85 transition"
          >
            Add Task
          </button>

        </form>
      </div>
    </div>
    {/* Form section end */}


    {/* table start */}
    {data && data.length > 0 && (
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm text-left">

          {/* header */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Task</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Priority</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          {/* body */}
          <tbody className="divide-y">

            {data.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-3 text-gray-500 text-xs">
                  {item._id}
                </td>

                <td className="px-6 py-3 font-medium">
                  {item.task}
                </td>

                <td className="px-6 py-3 text-gray-600">
                  {item.desc}
                </td>

                {/* priority badge */}
                <td className="px-6 py-3">
                  <span
                    className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${item.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : item.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-600"
                      }
                `}
                  >
                    {item.priority}
                  </span>
                </td>

                {/* actions */}
                <td className="px-6 py-3 flex gap-3 justify-center">
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:opacity-80">
                    Edit
                  </button>

                  <button onClick={e => handleDelete(item._id as string)} className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:opacity-80">
                    Remove
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    )}
    {/* table end */}


  </>
}

export default Home