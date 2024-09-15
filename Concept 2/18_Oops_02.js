//  classes and constructors............



class RailwayForm{
    constructor(name, train_no){                            //  parameterised constructor...........
        console.log("Constructor Called.... for " + name + " with train no. " + train_no)
        this.name = name
        this.train_no = train_no
    }

    submit(){
        console.log(this.name + " : Your form is submitted for train no. " + this.train_no)
    }

    cancel(){
        console.log(this.name + " : Your form is cancelled for train no. " + this.train_no)
    }
}



let form_1 = new RailwayForm("Ansh", 12345)                     //  object created.........
let form_2 = new RailwayForm("Guru", 54946)
let form_3 = new RailwayForm("xyz", 64613)



form_1.submit()
form_2.submit()
form_3.submit()

form_2.cancel()


