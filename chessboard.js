var chessBoard = function(){
var row = [0,1,2,3,4,5,6,7];
var column = [0,1,2,3,4,5,6,7];
var str = "";
var pawns = "";
	for(var l = 0; l < row.length; l++){
		str += "<tr>";
			for(var m = 0; m < column.length; m++){
				if( l % 2 == m % 2){
					str += "<td class='white'>"+"</td>";
				}
				else{
					str += "<td class='black'>"+"</td>";
				}
			}
		str+= "</tr>";
	}
	document.getElementById("output").innerHTML = str;
};

