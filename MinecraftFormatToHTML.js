// Made (or actually, converted) by mmmmt (MarkiThePews), based on "Tv_Controls_you"'s PHP version here: https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-tools/1264944-php-minecraft-text-to-html

function FormatToHTML(minetext){
var restr = '';
var ender = '';
var code = minetext.split(/[&§]([0-9a-z])/);
code.shift();
 for (i=0;i<code.length;i+=2)
 {
  switch (code[i]){
  case '1':
  restr +='<FONT COLOR="0000AA">';
  ender +='</FONT>';
  break;
  case '2':
  restr +='<FONT COLOR="00AA00">';
  ender +='</FONT>';
  break;
  case '3':
  restr +='<FONT COLOR="00AAAA">';
  ender +='</FONT>';
  break;
  case '4':
  restr +='<FONT COLOR="AA0000">';
  ender +='</FONT>';
  break;
  case '5':
  restr +='<FONT COLOR="AA00AA">';
  ender +='</FONT>';
  break;
  case '6':
  restr +='<FONT COLOR="FFAA00">';
  ender +='</FONT>';
  break;
  case '7':
  restr +='<FONT COLOR="AAAAAA">';
  ender +='</FONT>';
  break;
  case '8':
  restr +='<FONT COLOR="555555">';
  ender +='</FONT>';
  break;
  case '9':
  restr +='<FONT COLOR="5555FF">';
  ender +='</FONT>';
  break;
  case 'a':
  restr +='<FONT COLOR="55FF55">';
  ender +='</FONT>';
  break;
  case 'b':
  restr +='<FONT COLOR="55FFFF">';
  ender +='</FONT>';
  break;
  case 'c':
  restr +='<FONT COLOR="FF5555">';
  ender +='</FONT>';
  break;
  case 'd':
  restr +='<FONT COLOR="FF55FF">';
  ender +='</FONT>';
  break;
  case 'e':
  restr +='<FONT COLOR="FFFF55">';
  ender +='</FONT>';
  break;
  case 'f':
  restr +='<FONT COLOR="FFFFFF">';
  ender +='</FONT>';
  break;
  case 'l':
  if (code[i+1].length>0){
  restr +='<span style="font-weight:bold;">';
  ender = '</span>'+ender;
  break;
  }
  case 'm':
  if (code[i+1].length>0){
  restr +='<strike>';
  ender = '</strike>'+ender;
  break;
  }
  case 'n':
  if (code[i+1].length>0){
  restr +='<span style="text-decoration: underline;">';
  ender = '</span>'+ender;
  break;
  }
  case 'o':
  if (code[i+1].length>0){
  restr +='<i>';
  ender ='</i>'+ender;
  break;
  }
  case 'r':
  restr +=ender;
  ender = '';
  break;
  }
  
  if (ender!=false&&code[i+1].length>0){
  restr +=code[i+1];
  restr +=ender;
  ender ='';}
  else restr +=restr;
 }
 return restr;
}