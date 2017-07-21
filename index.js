const fs = require('fs');
const path = require('path');



const dirToArray = (dir) => {
	return [...fs.readdirSync(dir).filter( file =>  file !== '.DS_Store')] 
}


module.exports = dirToArray
