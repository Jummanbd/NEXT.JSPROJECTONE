
const Todo = ({id, title, description, completed, mongoId,  deleteTodo, compileteTodo}) => {

  
  return (
    <tr className="bg-white border-b  ">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
      {id+1}
    </th>
    <td className={`px-6 py-4 ${completed ? 'line-through' : ""}`}>
     {title}
    </td>
    <td className={`px-6 py-4 ${completed ? 'line-through' : ""}`}>
     {description}
    </td>
    <td className={`px-6 py-4 font-semibold ${completed ? 'text-green-600' : 'text-yellow-600'}`}>
        {completed ? "Completed" : "Pending"}
    </td>
    <td className="px-6 py-4 flex gap-1">
        <button className="py-2 px-4 bg-red-500 text-white rounded" onClick={() => deleteTodo(mongoId)}>Delet</button>
        {completed?"" :<button onClick={() => compileteTodo(mongoId)} className="py-2 px-4 bg-green-500 text-white rounded">Done</button>}
    </td>
    </tr>
  )
}

export default Todo
