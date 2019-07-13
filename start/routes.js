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
// The home route
Route.on("/").render("home");
