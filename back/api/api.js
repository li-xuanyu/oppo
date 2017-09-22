var express=require('express');
var router=express.Router();

//注册

router.post('/login',function(req,res){
	dbhandler.user.findOne({
		tel:req.body.tel
	},function(error,data){
		if(data){
			res.send(false)
		} else{
			dbhandler.user.create({
				tel:req.body.tel,
				password:req.body.password
			},function(error,result){
				if(!error){
					res.send(true)
				}else{
					console.log(error)
				}
			})
		}

	})
})

//登入

router.post('/register',function(req,res){
	dbhandler.user.findOne({
		tel:req.body.tel,
		password:req.body.password
	},function(error,data){
		if(data){
			res.send(true)
		} else{
			res.send(false)
		}
	})
})

//home

// router.post('/home',function(req,res){
// 	dbhandler.home.create({
// 		loop:req.body.loop,
// 		feature:req.body.feature,
// 		brick:req.body.brick
// 	},function(error,data){
// 		if(!error){
// 			res.send(true)
// 		}else{
// 			console.log(error)
// 		}
// 	})
// })

router.get("/home",function(req,res){
	dbhandler.home.find({},function(error,data){
		if(data){
			res.send(data)
		}else{
			res.send(false)
		}
	})
})

//shop

// router.post("/shop",function(req,res){
// 	dbhandler.shop.create({
// 		brick:req.body.brick,
// 		parts:req.body.parts
// 	},function(error,data){
// 		if(!error){
// 			res.send(true)
// 		}else{
// 			console.log(error)
// 		}
// 	})
// })

router.get("/shop",function(req,res){
	dbhandler.shop.find({},function(error,data){
		if(data){
			res.send(data)
		}else{
			res.send(false)
		}
	})
})

//产品

router.post("/product",function(req,res){
	dbhandler.product.create({
		Rlist:req.body.Rlist,
		Alist:req.body.Alist,
		Findlist:req.body.Findlist
	},function(error,data){
		if(!error){
			res.send(true)
		}else{
			console.log(error)
		}
	})
})

router.get("/product",function(req,res){
	dbhandler.product.find({},function(error,data){
		if(data){
			res.send(data)
		}else{
			res.send(false)
		}
	})
})


//cart

router.post("/cartRem",function(req,res){
	dbhandler.cart.find({
		tel:req.body.tel,
		name:req.body.name
	},function(error,data){

		dbhandler.cart.remove({
			tel:req.body.tel,
  			name:req.body.name
  		},function(error,data){
			if(!error){
				res.send('已删除');
			}else{
				console.log(error)
			}
		})
				
	})
	
})

router.post("/cartAdd",function(req,res){
	dbhandler.cart.find({
		tel:req.body.tel,
		name:req.body.name
	},function(error,data){
		dbhandler.cart.update({tel:req.body.tel,name:req.body.name},{$set:{number:req.body.number}},(error,data)=>{
			if(!error){
				console.log('更新数据')
				return true;
			}
		})	
				
	})
	
})

router.get("/cart",function(req,res){
	
	dbhandler.cart.find({tel:req.query.tel},function(error,data){
		if(data){
			res.send(data)
		}else{
			res.send(error)
		}
	})
})


router.post("/cartid",function(req,res){
	dbhandler.user.find({
		tel:req.body.tel
	},(error,data)=>{
		if(data){
			dbhandler.cart.findOne({
				tel:req.body.tel,
				name:req.body.name
			},(error,data)=>{
				if(data){
		
					dbhandler.cart.update({
						tel:req.body.tel,
						name:req.body.name
					},{$inc:{number:1}},(error,data)=>{
						if(!error){
							console.log('更新数据')
							return true;
						}
					})
				}else{
					dbhandler.cart.create({
						tel:req.body.tel,
						name:req.body.name,
						number:1,
						url:req.body.url,
						pic:req.body.pic
					},(error,data)=>{
						if(!error){
							console.log('增加数组')
							return true;
						}
					})
				}
			})
		}else{
			res.send("请登录后再购买")
		}
		
	})


})

//details

// router.post("/details",function(req,res){
// 	dbhandler.details.create({
// 		looplist:req.body.looplist,
// 		oppolist:req.body.oppolist
// 	},(error,data)=>{
// 		if(!error){
// 			res.send(true)
// 		}else{
// 			res.send(error)
// 		}
// 	})
// })

router.get("/details",function(req,res){
	dbhandler.details.find({},(error,data)=>{
		if(data){
			res.send(data)
		}else{
			res.send(error)
		}
	})
})

module.exports=router;
