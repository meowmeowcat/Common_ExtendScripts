//汎用定数
var KATAMUKE_Y_PER=100*Math.sin(35.2666666666666667/180*Math.PI);//0.58*100
var CHIJIMIRITSU_TOKAKUTOEI=Math.cos(35.2666666666666667/180*Math.PI);//0.82
var SIN30=Math.sin(30/180*Math.PI);
//mm→pt
function mm_to_pt(_mm){
		return _mm*72/25.4
}
//矩形を描く
function drawRect(_x,_y,_w,_h,_fill,_stroke){
	//ドキュメントサイズ取得
	var doc=app.activeDocument;
	var layer=doc.activeLayer;
	var docSize=getDocumentSize();

	//矩形を描く
	var rect=layer.pathItems.rectangle(docSize.h-_y,_x,_w,_h);
	if(!_fill){
		rect.filled=false;
		rect.stroked=false;
	}else{
		rect.filled=_fill;
		rect.stroked=_stroke;
	}
	//alert(rect.filled)
	return rect
}
//角度長さ指定で線を描く
function drawLine2(_x,_y,_length,_angle,_strokeW,_color,_cap,_join){
	//ドキュメントサイズ取得
	var doc=app.activeDocument;
	var layer=doc.activeLayer;
	var docSize=getDocumentSize();
	//_length=mm_to_pt(_length);
	var line=layer.pathItems.add();


	var x1=mm_to_pt(_x);
	var y1=docSize.h-mm_to_pt(_y);
	var cos=Math.cos(_angle/180*Math.PI)
	var sin=Math.sin(_angle/180*Math.PI)
	var x2=mm_to_pt(_length)*cos+mm_to_pt(_x);
	var y2=docSize.h-(mm_to_pt(_length)*sin+mm_to_pt(_y));
	line.setEntirePath([[x1,y1],[x2,y2]]);
	line.filled=false;
	sen_no_settei(line,_strokeW,_color,_cap,_join)

	return line
}
//線を描く
function drawLine(_x,_y,_x2,_y2,_strokeW,_color,_cap,_join){
	//ドキュメントサイズ取得
	var doc=app.activeDocument;
	var layer=doc.activeLayer;
	var docSize=getDocumentSize();
	
	var line=layer.pathItems.add();
	var x1=mm_to_pt(_x)
	var y1=docSize.h-mm_to_pt(_y)
	var x2=mm_to_pt(_x2)
	var y2=docSize.h-mm_to_pt(_y2)
	line.setEntirePath([[x1,y1],[x2,y2]]);
	line.filled=false;
	sen_no_settei(line,_strokeW,_color,_cap,_join)

	return line
}
//ドキュメントサイズ取得
function getDocumentSize(){
	var doc=app.activeDocument;
	var docW=doc.width;
	var docH=doc.height;
	return {"w":docW,"h":docH}
}
//線の設定
//点線　l1.strokeDashes=[mm_to_pt(0.2),mm_to_pt(1),mm_to_pt(1),mm_to_pt(1)];
function sen_no_settei(_rect,_stroke,_color,_w,_cap,_join,){
	(!_rect)?alert("Error！@sen_no_settei :対象がありません"):0;
	_rect.stroked=(!_stroke)?true:_stroke;	
	var _c=new RGBColor();
		switch(_color){
			case false:
				_c.red=0;_c.green=0;_c.blue=0;
				_rect.strokeColor=_c;
				break;
			case "black":
				_c.red=0;_c.green=0;_c.blue=0;
				_rect.strokeColor=_c;
				//alert("bk")
				break;
			case "red":
				_c.red=212;_c.green=0;_c.blue=69;//v2
				_rect.strokeColor=_c;
				//alert("red"+","+_rect.strokeColor)
				break;
			case "green":
				_c.red=51;_c.green=162;_c.blue=61;//v12
				_rect.strokeColor=_c;
				break;
			case "blue":
				_c.red=15;_c.green=33;_c.blue=139;//v18
				_rect.strokeColor=_c;
				break;
			default :
				_c.red=0;_c.green=0;_c.blue=0;
				_rect.strokeColor=_c;
				break;
	}	
	_rect.strokeWidth=(!_w)?mm_to_pt(0.3):mm_to_pt(_w);
	switch(_cap){
			case false:
				_rect.strokeCap=StrokeCap.ROUNDENDCAP;
				break;
			case "round":
				_rect.strokeCap=StrokeCap.ROUNDENDCAP;
				break;
			case "butt":
				_rect.strokeCap=StrokeCap.BUTTENDCAP;
				break;
			case "proj":
				_rect.strokeCap=StrokeCap.PROJECTINGENDCAP;
				break;
			default :
				_rect.strokeCap=StrokeCap.ROUNDENDCAP;
				break;
	}
	switch(_join){
			case false:
				_rect.strokeJoin=StrokeCap.ROUNDENDCAP;
				break;
			case "round":
				_rect.strokeJoin=StrokeJoin.ROUNDENDJOIN;
				break;
			case "bevel":
				_rect.strokeJoin=StrokeJoin.BEVELENDJOIN;
				break;
			case "miter":
				_rect.strokeJoin=StrokeJoin.MITERENDJOIN;
				break;
			default :
				_rect.strokeJoin=StrokeJoin.ROUNDENDJOIN;
				break;
	}
}