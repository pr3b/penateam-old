import { authOptions, prismaData } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { categoryRequest } from "@/utils/category";

export default async function handler(req, res){
  const session = await getServerSession(req, res, authOptions);
  if(!session){
    return res.status(401).json({message: "You must be logged in!"})
  }

  if(req.method === "GET"){
    try {
      const tasks = await prismaData.task.findMany({
        where: {
          user: {
            id: session.user.id,
          },
        },
      });

      return res.status(200).json({tasks});
    } catch (error) {
      console.error("Error retrieving task:", error);
      return res.status(500).json({error: "Internal Server Error"});
    }
  } else if(req.method === "POST"){
    try {
      const {title, description} = req.body;
      const task = await prismaData.task.create({data: {
        Title: title, 
        category: categoryRequest,
        description: description ?? "",
        user: {
          connect: {id: session.user.id}
        }
      }});

      return res.status(200).json({task, message: "Task created successfully"});
    } catch (error) {
      console.error("Error create task:", error);
      return res.status(500).json({error: "Internal Server Error"});
    }
  } else if(req.method === "PUT"){
    try {
      const {id:taskId, title, category, description} = req.body;
      if(!taskId){
        return res.status(406).json({error: "Task ID required"});
      }

      const existingTask = await prismaData.task.findUnique({
        where: {
          id: taskId,
        },
      });

      if(!existingTask || existingTask.idUser != session.user.id){
        return res.status(404).json({error: "Task not found"});
      }

      let newData = {};
      if(title ?? false){
        newData.Title = title;
      }
      if(category ?? false){
        newData.category = category;
      }
      if(description ?? false){
        newData.description = description;
      }
      
      const updateTask = await prismaData.task.update({
        where: {
          id: taskId,
        },
        data: {
          ...existingTask,
          ...newData,
        },
      });

      return res.status(200).json({task: updateTask, message:"Task updated Successfully!"});
    } catch (error) {
      console.error("Error update task:", error);
      return res.status(500).json({error: "Internal Server Error"});
    }
  } else if(req.method === "DELETE"){
    const taskId = req.query.id;

    if(!taskId){
      return res.status(406).json({error: "Task ID param required"});
    }

    try {
      const existingTask = await prismaData.task.findUnique({
        where: {
          id: taskId,
        },
      });

      if(!existingTask || existingTask.idUser != session.user.id){
        return res.status(404).json({error:"Task not found"});
      }

      await prismaData.task.delete({
        where: {
          id: taskId,
        },
      });

      return res.status(200).json({message: "Task deleted successfully!"})
    } catch (error) {
      console.error("Error deleting task:", error);
      return res.status(500).json({error: "Internal Server Error"});
    }
  }

  res.status(405).json({message: "Method Not Allowed"})
}