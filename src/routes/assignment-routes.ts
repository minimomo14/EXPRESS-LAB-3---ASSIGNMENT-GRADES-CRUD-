// require the express module
import express from "express";
import Assignment from "../models/assignments";
 
// create a new Router object
//const assignmentRoutes = express.Router();

const assignmentRoutes = express.Router();

//routes.get("/add", function(req,res){
//    res.render("add");
//});

//GET /api/assignments status(200)


assignmentRoutes.get("/", function(req,res){
    res.render("home");
});
assignmentRoutes.get("/add", function(req,res){
    res.render("add");
});
//POST
assignmentRoutes.post("/add", function(req,res){
    res.render("assignment-added",{});
});
//GET /api/summary

 
export default assignmentRoutes;