var countBs = "k"
   ,str = "kakkerlak";
for(var i=count=0; i<str.length; count+=+(countBs===str[i++]));
console.log(count);