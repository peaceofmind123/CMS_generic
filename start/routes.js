"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// A test route
Route.get(
  "/test/:id",
  ({ params }) => `This is a test with the id: ${params.id}`
);

// The posts route
Route.get("/posts", "PostController.index");

// Add new post
Route.get("/posts/add", "PostController.add");
// The detailed post route : this must be below all routes posts/xyz otherwise xyz is gonna be parsed as id
Route.get("/posts/:id", "PostController.details");
// The home route
Route.on("/").render("home");
