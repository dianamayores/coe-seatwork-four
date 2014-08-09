var coe = function(increment)
{
for (var i=1; i < increment; i++)
{
	
	if (i%3===0)
{
	console.log("Computer");
}
else if (i%5===0)
{
	console.log("Engineering");

}
else if ((i%3===0) && (i%5===0))
{
	console.log("Computer Engineering");
}
else
 {
	console.log(i);
}
}
};
coe(100);
