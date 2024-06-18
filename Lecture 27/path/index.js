let path = require('path');

// let ans = path.join('hey', 'siri', 'call', 'rahul');

// extra slash hata dega and only one slash is there
let ans = path.join('hey/', '////siri', '///call', '///rahul');



console.log(ans);