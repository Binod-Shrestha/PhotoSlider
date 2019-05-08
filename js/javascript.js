
		var b1 = function(){
		document.getElementById("main").src= "img/1.png";
		}
	
		var b2 = function(){
		document.getElementById("main").src= "img/2.jpg";
		}
	
		var b3 = function(){
		document.getElementById("main").src= "img/3.jpg";
		}

		var b4= function(){
		document.getElementById("main").src= "img/4.png";
		}
	
		var b5 = function(){
		document.getElementById("main").src= "img/5.jpg";
		}
		
		var b6= function(){
		document.getElementById("main").src= "img/6.jpg";
		}
		
		var b7= function(){
		document.getElementById("main").src= "img/7.jpg";
		}
		
		var b8= function(){
		document.getElementById("main").src= "img/8.jpg";
		}
		
		var b9= function(){
		document.getElementById("main").src= "img/9.jpg";
		}
		
		var b10= function(){
		document.getElementById("main").src= "img/10.jpg";
		}

	imgArray = new Array(
			"1.png",
			"2.jpg",
			"3.jpg",
			"4.png",
			"5.jpg",
			"6.jpg",
			"7.jpg",
			"8.jpg",
			"9.jpg",
			"10.jpg"
					);

	baseURL = "img";
	numImgs = 10;
	curImg = 1;

	function photoslide( nextprev ) {
		curImg = curImg + nextprev;
	if (curImg > numImgs) { curImg = 1 ; } 
	
	if (curImg == 0){ curImg = numImgs ; } 
		document.getElementById("main").src = baseURL + '/' + imgArray[curImg - 1];
		}
		
	function qlose()
		{
		var consent = confirm("Do you want to exit?");
 		if(consent == true)
			window.close();
		}
