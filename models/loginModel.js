"use strict";

const db = require("./conn"),
    bycrypt = require("bcryptjs")

    class Login {
        constructor(id, username, password) {
            this.id = id;
            this.username = username;
            this.password = password;
        }

        //Checks that the username is unique
        static async checkUserNames(username) {
            try {
              const response = await db.any(
                `SELECT username FROM volunteers WHERE username='${username}';`
              );
              return response;
            } catch (err) {
              return false;
            }
          }



         















    }

    module.exports = Login;