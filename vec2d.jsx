var vec2d=function(_x,_y){
	this.x=_x;
	this.y=_y;
	
	this.rot=function(_angle,_x_,_y_){
		if(!_x_){
			_x_=0;
		}
		if(!_y){
			_y_=0;
		}
		//alert(this.x+","+this.y)
		//原点に移動して原点中心に回転
		//alert(_angle)
		//var a=Math.cos(_angle/180*Math.PI).toFixed(4);
		//a=a.toFixed(4);
		//alert(Math.cos(_angle/180*Math.PI).toFixed(4))
		//alert(this.x+","+_x_)//1,0
		//alert(Math.sin(_angle/180*Math.PI))//1
		//alert(Math.sin(_angle/180*Math.PI)*(this.x-_x_))//1
		var a1=Math.cos(_angle/180*Math.PI).toFixed(4)*(this.x-_x_)
		var b1=Math.sin(_angle/180*Math.PI).toFixed(4)*(this.y-_y_)
		
		var a2=Math.sin(_angle/180*Math.PI).toFixed(4)*(this.x-_x_)
		var b2=Math.cos(_angle/180*Math.PI).toFixed(4)*(this.y-_y_)
		//alert(a+b)
		
		this.x=a1-b1;
		this.y=a2+b2;
		
		//任意点に移動
		this.x+=_x_;
		this.y+=_y_;
		return this
	}
	this.dotProduct=function(_v){
			return  this.x * _v.x + this.y * _v.y
	};
    this.angleBetween=function(_v){
		return  Math.atan2(this.y-_v.y,this.x-_v.x)
	}
}