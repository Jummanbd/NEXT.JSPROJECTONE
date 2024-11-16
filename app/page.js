'use client'
import Todo from "@/Components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {

    const [formtData, setFormtData] = useState({
        title:"",
        description:"",
    });
    const [todoData, setTodoData] =useState([]);
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormtData(formt =>({...formt,[name]:value}))
        console.log(formtData);
        
    };

    // get data

    const fetchData = async () => {
        const response = await axios('/api');
        setTodoData(response.data.todos);
      }
  
      useEffect(() => {
          fetchData()
      },[])
      // on submit
    const onSubmitHandler = async (e) => {
       e.preventDefault();
       try{
        // api code
        const response = await axios.post('/api', formtData)
        // toast 
        toast.success(response.data.msg);

        setFormtData({
            title:"",
            description:"",
        })
        await fetchData();
       }catch(error){
        // toast error show 
        toast.error("Error")

       }
    }

    const deleteTodo = async (id) => {

        const response = await axios.delete('/api',{
            params:{
                mongoId:id,
            }
        })
        toast.success(response.data.msg);
        fetchData();
    }

    const compileteTodo = async (id) => {

        const response = await axios.put('/api',{},{
            params:{
                mongoId:id,
            }
        })
        toast.success(response.data.msg);
        fetchData();
    }
    return (
        <>
        <ToastContainer theme="dark"/>
        <form onSubmit={onSubmitHandler} className="flext items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
         <input onChange={onChangeHandler} type="text" name="title" placeholder="Enter Title"  value={formtData.title} className="px-3 py-2 border-2 w-full"/>
         <textarea onChange={onChangeHandler} name="description" placeholder="Enter Description"
         value={formtData.description} className="px-3 py-2 border-2 mt-5 w-full"></textarea>
         <button type="submit" className="bg-orange-600 py-3 px-11 text-white rounded mt-5">Add Todo</button>
        </form>

        {/* table */}
        <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {todoData.map((list, index) => <Todo id = {index} title = {list.title} description = {list.description} completed = {list.isCompleted} mongoId = {list._id} key={index} deleteTodo = {deleteTodo} compileteTodo = {compileteTodo}/>)}
                </tbody>
            </table>
        </div>
        </>
    );
}
