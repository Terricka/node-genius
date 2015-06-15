var Genius = require("./lib/index.js");

var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

// geniusClient.getAnnotation("6721370", function(error, annotation) {
//   console.log(error);
//   console.log(annotation);
// });

var request = {
  "annotation": {
    "body": {
      "markdown": "hello **cheese!**"
    }
  },
  "referent": {
    "raw_annotatable_url": "https://docs.genius.com/",
    "fragment": "annotation"
  }
};

geniusClient.createAnnotation(request, function(error, response) {
  console.log(response);
});