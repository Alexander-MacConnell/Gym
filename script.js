function openNav() //opens the nav bar when called on
{
    document.getElementById("mySidenav").style.width = "15vw";
				
    document.getElementById("main").style.marginLeft = "250px";
}
         
function closeNav() //closes nav bar when called on
{
    document.getElementById("mySidenav").style.width = "0";
				
    document.getElementById("main").style.marginLeft= "0";
}

var myIndex = 0; //creates variable for slide number and stes it to 0

carousel(); //runs function to switch slides

function carousel() //rotates through a list of images, credit W3Schools
{
    var i;
	
    var x = document.getElementsByClassName("mySlides");
	
    for (i = 0; i < x.length; i++) 
	{
        x[i].style.display = "none";  
    }
	
    myIndex++;
	
    if (myIndex > x.length)
	{
	    myIndex = 1
	}  
	
    x[myIndex-1].style.display = "block"; 
	
    setTimeout(carousel, 3500); //change image every 3.5 seconds
}