// require the express module
import express from "express";
import Assignment from "../models/assignments";
 
// create a new Router object
//const assignmentRoutes = express.Router();

const routes = express.Router();

routes.get("/add", function(req,res){
    res.render("add");
});

//GET /api/assignments status(200)
assignmentRoutes.get("/api/assignment", function(req,res){
    res.status(200)
    res.json(Assignment);
});

assignmentRoutes.get("/", function(req,res){
    res.render("home");
});
assignmentRoutes.get("/addAssignmentForm", function(req,res){
    res.render("addAssignmentForm");
});
//GET /api/summary

 
export default assignmentRoutes;