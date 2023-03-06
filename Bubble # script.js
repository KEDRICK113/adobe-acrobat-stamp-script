var cAsk = "Enter Bubble #";
var cTitle = "Bubble #";
	
if(event.source.forReal &&
   (event.source.stampName == "#yj2_4kAyeOdL29pG9BhsEB"))
{
   var cMsg = app.response(cAsk, cTitle);
   cMsg += ""
   event.value = cMsg;
   event.source.source.info.DocumentState = cMsg;

}