const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "F1 API for free",
      version: "1.0.0",
      description:
        "This is an initial version of a free F1 API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Valdevz",
        url: "https://github.com/valdevz",
        email: "valdevz@gmail.com",
      },
    },
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    servers: [
      {
        url: "https://api-f1.herokuapp.com/v1/api/"
      }
    ],
    paths: {
      "/drivers": {
        "get": {
          "summary": "Returns a list of all drivers of the season.",
          "responses": {
            "200": {
              "description": "A JSON array of pilots of the season",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "driverId": {type: "string"},
                      "number": {type: "number"},
                      "name": {type: "string"},
                      "lastname": {type: "string"},
                      "dateOfBirth": {type: "string"},
                      "nationality": {type: "string"},
                      "infoUrl": {type: "string"},
                      "age": { type: "number"},
                      "updateDate": {type: "string", format: "date"}
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/drivers/:driverId": {
        "get": {
          "summary": "Returns the personal info about the pilot.",
          "responses": {
            "200": {
              "description": "A JSON of the pilot",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "driverId": {type: "string"},
                      "number": {type: "number"},
                      "name": {type: "string"},
                      "lastname": {type: "string"},
                      "dateOfBirth": {type: "string"},
                      "nationality": {type: "string"},
                      "infoUrl": {type: "string"},
                      "age": { type: "number"},
                      "updateDate": {type: "string", format: "date"}
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/constructors": {
        "get": {
          "summary": "Returns a list of all constructors of the season.",
          "responses": {
            "200": {
              "description": "A JSON array of pilots of the season",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "constructorId": {type: "string"},
                      "name": {type: "string"},
                      "nationality": {type: "string"},
                      "infoUrl": {type: "string"},
                      "updateDate": {type: "string", format: "date"}
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/constructors/:constructorId": {
        "get": {
          "summary": "Returns the details of the constructor.",
          "responses": {
            "200": {
              "description": "A JSON of the constructor.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "constructorId": {type: "string"},
                      "name": {type: "string"},
                      "nationality": {type: "string"},
                      "infoUrl": {type: "string"},
                      "updateDate": {type: "string", format: "date"}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ["../Routes/routes/drivers.js"],
};

module.exports = {
  options
}