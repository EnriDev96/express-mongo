import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { task : tasks });
});

router.post("/task/add", async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", async(req, res) => {

  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
});

router.post("/edit/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.send("Task Updated");
}); 

export default router;
