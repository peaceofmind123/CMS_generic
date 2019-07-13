"use strict";
const Post = use("App/Models/Post");

class PostController {
  // the main / route controller
  async index({ view }) {
    const posts = await Post.all();
    return view.render("posts.index", {
      title: "Latest Posts",
      posts: posts.toJSON()
    });
  }

  // controller for /:id
  async details({ view, params }) {
    const post = await Post.find(params.id); // get the post from the database

    return view.render("posts.details", { post });
  }
}

module.exports = PostController;
