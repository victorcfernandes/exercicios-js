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
		const fs = require('fs');

		if(!file){
			console.log('Erro: O parâmentro de arquivo de entrada não pode ser vazio. Formato aceito: $ node main.js /arquivo/de/entrada');
			return;
		}
		if(!fs.existsSync(file)){
			console.log(`Erro: O Arquivo ${file} não existe.`);
			return;
		}
		const lineReader = require('readline').createInterface({
		  input: fs.createReadStream(file)
		});

		lineReader.on('line', (line) => {
			this.processLine.call(this, line);
		});
	}

	processLine(line) {
		line = line.split("");
		let exit = line.map(this.prepareExit.bind(this));
		console.log(exit.join(""));
	}

	prepareExit (char){
		return this.charMap[char];
	}
}

const app = new App();
app.read(process.argv[2]);
