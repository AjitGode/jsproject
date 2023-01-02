//multilevel inheritance

class Gfather {
	constructor(fn,ln){
		this.firstName = fn 
		this.lastName = ln
	}
	displaye(){
		console.log(this.firstName+" "+this.lastName)
	}
}

class Father extends Gfather{
	constructor(firstName,lastName,Fname){
		super(firstName,lastName)
		this.Fname = Fname
	}
	DisplayF(){
		console.log(this.Fname+" "+this.firstName+" "+this.lastName)
	}
}