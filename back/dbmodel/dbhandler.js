var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var user={
	tel:{type:String},
	password:{type:String}
}

var home={
	id:{type:String},
	url:{type:String},
	name:{type:String},
	pic:{type:String},
	logo:{type:String},
	loop:{type:Array},
	feature:{type:Array},
	brick:{type:Array}
}

var shop={
	id:{type:String},
	url:{type:String},
	name:{type:String},
	pic:{type:String},
	logo:{type:String},
	brick:{type:Array},
	parts:{type:Array}
}

var product={
	id:{type:String},
	url:{type:String},
	name:{type:String},
	action:{type:String},
	Rlist:{type:Array},
	Alist:{type:Array},
	Findlist:{type:Array}
}

var cart={
	tel:{type:String},
	name:{type:String},
	number:{type:Number},
	url:{type:String},
	pic:{type:String}
}

var details={
	url:{type:String},
	looplist:{type:Array},
	oppolist:{type:Array}
}

mongoose.model("user",new Schema(user));
mongoose.model("home",new Schema(home));
mongoose.model("shop",new Schema(shop));
mongoose.model("product",new Schema(product));
mongoose.model("cart", new Schema(cart));
mongoose.model("details", new Schema(details));

module.exports={
	user:mongoose.model("user"),
	home:mongoose.model("home"),
	shop:mongoose.model("shop"),
	product:mongoose.model("product"),
	cart:mongoose.model("cart"),
	details:mongoose.model("details")
}
