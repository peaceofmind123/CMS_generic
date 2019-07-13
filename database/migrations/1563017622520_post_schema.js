"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
  up() {
    this.create("posts", table => {
      table.increments(); // this is the id
      table.string("title", 255);

      table.text("body");

      table.timestamps(); // the timestamp when the record was last modified
    });
  }

  down() {
    this.drop("posts");
  }
}

module.exports = PostSchema;
