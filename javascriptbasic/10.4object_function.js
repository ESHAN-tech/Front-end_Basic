let product = {
    name:"laptop",
    copy:"DELL",
    price:70000,

    show:function () {
        console.log("insider function");
        console.log(`product name is ${this.name}`);
    },
    discount:function(){
        if(this.price > 50000){
            disprice = this.price - 0.1 * this.price;
            console.log(disprice);
        }
    }
}

product.show();
product.discount();

/* hlt the normal flow of function in asynchronus function
async are in general Asynchronus
synchronus is very time taking ...

 */