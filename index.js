// //**************************************************day 2********************************************************************************************************* 
// // //create
// // const express = require('express');
// // const app=express();
// // const PORT=5000;
// // const movies = [
// //     {
// //       id: "1",
// //       name: "RRR",
// //       poster:
// //         "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
// //       rating: 8.8,
// //       summary:
// //         "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
// //     },
// //     {
// //       id: "2",
// //       name: "Iron man 2",
// //       poster:
// //         "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
// //       rating: 7,
// //       summary:
// //         "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
// //     },
// //     {
// //       id: "3",
// //       name: "No Country for Old Men",
// //       poster:
// //         "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
// //       rating: 8.1,
// //       summary:
// //         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
// //     },
// //     {
// //       id: "4",
// //       name: "Jai Bhim",
// //       poster:
// //         "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
// //       summary:
// //         "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
// //       rating: 8.8,
// //     },
// //     {
// //       id: "5",
// //       name: "The Avengers",
// //       rating: 8,
// //       summary:
// //         "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
// //       poster:
// //         "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
// //     },
// //     {
// //       id: "6",
// //       name: "Interstellar",
// //       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
// //       rating: 8.6,
// //       summary:
// //         "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
// //     },
// //     {
// //       id: "7",
// //       name: "Baahubali",
// //       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
// //       rating: 8,
// //       summary:
// //         "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
// //     },
// //     {
// //       id: "8",
// //       name: "Ratatouille",
// //       poster:
// //         "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
// //       rating: 8,
// //       summary:
// //         "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
// //     },
// //   ];
// // //req => what we send to server
// // //res => what we receive from server

// // //full endpoint
// // app.get("/",function(req,res){
// //     res.send("Hello World!");
// // });
// // //movies endpoint and search query endpoint
// // app.get("/movies",function(req,res){
// //     const {rating}=req.query;
// //     let filteredMovies =movies;
// //     if(rating){
// //         filteredMovies=movies.filter((mv)=>mv.rating==rating);
// //     }
// //     res.send(filteredMovies);
// // });
// // //movie endpoint
// // app.get("/movies/:id",function(req,res){
// //     const {id}=req.params;
// //     const movie =movies.find((mv)=>mv.id ==id)[0];
// //     res.send(movie);
// // });
// // app.listen(PORT,()=>console.log("server started on port " + PORT));


// //***************************************************************day3************************************************************
// // commn js
// //import express from 'express';
// //import {logSomething} from './utitls.js';
// //const app =express();
// //app.listen(5050,()=>{
// //  console.log("Application Startes=d on 5050");
// //  logSomething();
// //})


// //index.html

// import express from 'express';

// var  todos=[
//   {id:"1",title:'Dance',isComplete:false,dueDate:'2023-08-30'},
//   {id:"2",title:'Run',isComplete:false,dueDate:'2023-08-31'},
//   {id:"3",title:'Sleep',isComplete:false,dueDate:'2023-08-27'}
// ]

// const app =express();
// app.use(express.static('public'));
// //parsing
// app.use(express.json());
// app.get('/api',(req,res)=>{
//   res.send({'name':'gangadharan',students:25})
// })
// app.get('/api/todos',(req,res)=>{
//   res.send(todos);
// })
// //path params
// app.get('/api/:name',(req,res)=>{
//   const {name} = req.params;
//   // console.log(pathParams)
//   res.send({"this is path params":name,query:req.query})
// })


// app.listen(5050,()=>{
//   console.log("Application Startes=d on 5050");

// })
// ///post method

// //curl 
// // Curl --> curl -X POST -H "Content-Type: application/json" -d '{"title": "Jogging", "isComplete": false, "dueDate": "2023-09-17" }' http://localhost:5050/api/todos
// //postman
// //post method
// app.post('/api/todos',(req,res)=>{
//   todos.push(req.body);
//   res.send(todos);
// })
// //put method

// app.put('/api/todos/:todoId',(req,res)=>{
//   const {todoId}=req.params;
//   const  newTodo=req.body;
//   const oldTodo=todos.find(todo =>todo.id===todoId);
//   todos=todos.filter(todo=>todo.id !==oldTodo.id);
//   todos.push(newTodo);
//   red.send(todos);
// })
// //delete method
// app.delete('/api/todos/:todoId',(req,res)=>{
//   const {todoId}=req.params;
//   todos=todos.filter(todo=>todo.id!==todoId)
//   res.send(todos);
// })
  
// 6. Request:
// Request is an object with pre-defined key<->value pairs & methods/functions
// used to operate on top of the request in-coming

// Eg: request.body gives the payload, req.params['<param-name>'] gives the path param

// reference: https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm

// 7. Resposne:
//   response is an object with pre-defined key<->value pairs & methods
//   used to operate on top of the response out-going

//   reference: https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm

// 8. router --> express.Router()

// individual routers for each entities or objects in an application
