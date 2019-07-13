"use strict";

class PostController {
  constructor() {
    this.posts = [
      {
        title: "Post 1",
        body: "This is post 1"
      },
      {
        title: "Post 2",
        body: "This is post 2"
      },
      {
        title: "Post 3",
        body: "This is post 3"
      }
    ];
  }
  async index({ view }) {
    return view.render("posts.index", {
      title: "Latest Posts",
      posts: this.posts
    });
  }
}

module.exports = PostController;
