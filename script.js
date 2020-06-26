const heading="HI, I AM RANA VIJAY SINGH";
let i=0;
function typing(){

	if(i<heading.length)
	{
		document.querySelector(".heading").innerHTML+=heading.charAt(i);	
		i++;
		setTimeout(typing,150);
	}
}
typing();
/*@media only screen and (max-width:767px)
{
	.about-me 
	{
	position: relative;
	padding-top: 100px;
	margin-bottom: 200px;
	}
	.about-me h2
	{
		font-size: 35px;
	}
	.about-me__body
	{	
		width: 220px;
		font-size: 12px;
	}
	.section__subtitle--about
	{	font-size: 15px;
		width: 450px;
	}
	.about-me img
	{
	position: absolute;
	left: 50%;
	top: 30%;
	width: 200px;
	height: 300px;
	object-fit: cover;
	
	}
} 
*/