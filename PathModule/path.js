const path = require('path');

console.log(
  path.dirname(
    "/Users/laveshkumbhalkar/Desktop/reactjs/nodejs/PathModule/path.js"
  )
);

console.log(
  path.extname(
    "/Users/laveshkumbhalkar/Desktop/reactjs/nodejs/PathModule/path.js"
  )
);

console.log(
  path.basename(
    "/Users/laveshkumbhalkar/Desktop/reactjs/nodejs/PathModule/path.js"
  )
);

console.log(
  path.parse(
    "/Users/laveshkumbhalkar/Desktop/reactjs/nodejs/PathModule/path.js"
  )
);

const myPath = path.parse(
  "/Users/laveshkumbhalkar/Desktop/reactjs/nodejs/PathModule/path.js"
);

console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);
console.log(myPath.name);
