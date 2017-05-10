/*
	Requirements: Node.js
	run $ node main.js path/to/file
*/

class App {

	constructor(){
		this.charMap = {
			0: 0,
			1: 1,
			"-": "-",
			A: 2,
			B: 2,
			C: 2,
			D: 3,
			E: 3,
			F: 3,
			G: 4,
			H: 4,
			I: 4,
			J: 5,
			K: 5,
			L: 5,
			M: 6,
			N: 6,
			O: 6,
			P: 7,
			Q: 7,
			R: 7,
			S: 7,
			T: 8,
			U: 8,
			V: 8,
			W: 9,
			X: 9,
			Y: 9,
			Z: 9
		}
	}

	read(file){
		const fs = require('fs'); //require the file system module

		//check if file paramather is not empty
		if(!file){
			console.log('Error: The input file parameter must not be empty. Example: $ node main.js /arquivo/de/entrada');
			return;
		}
		//check if file exists
		if(!fs.existsSync(file)){
			console.log(`Error: The ${file} file does not exist.`);
			return;
		}
		//require readline module
		const lineReader = require('readline').createInterface({
		  input: fs.createReadStream(file)
		});
		//read line by line until end of file
		lineReader.on('line', (line) => {
			this.processLine.call(this, line);
		});
	}

	//string manipulations
	processLine(line) {
		line = line.split("");
		let exit = line.map(this.prepareExit.bind(this));
		console.log(exit.join(""));
	}
	//read the map and find the correspondent value
	prepareExit (char){
		return this.charMap[char];
	}
}

const app = new App();
app.read(process.argv[2]); //input file will be the third parameter the user types on console
