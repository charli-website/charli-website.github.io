document.write('<STYLE type="text/css">');

document.write('#menuspan9578256 { position:absolute; width:440px; }');

document.write('#menutable9578256 { border-width: 0; border-color: #F0F4B7; border-style:solid}');

document.write('td.menucell9578256 { padding:2; padding-left:4; padding-right:4; background:#86896A; border:1 outset #F2F4B2; }');

document.write('#submenutable9578256 { background: #F3F7C2; border-width: 1; border-color: #F4F7CF; border-style:solid}');

document.write('td.topcell9578256 {text-decoration:none; color:#332121; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal; }');

document.write('a.topitem9578256 {text-decoration:none; color:#332121; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal;} ');

document.write('a.topitem9578256:hover {text-decoration:none; color:#121B28; }');

document.write('a.subitem9578256 {text-decoration:none; color:#F6F9C7; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal;} ');

document.write('a.subitem9578256:hover {text-decoration:none; color:#F4EEAA; }');

document.write('P.MN9578256 {color:#332121; font-weight: 400; font-family: Verdana; font-size:11px; font-style:normal;}');

document.write('P.SMN9578256 {text-decoration:none; color:#F6F9C7; font-weight: 700; font-family: Verdana; font-size:12px; font-style:normal;}');

document.write('#submenu9578256_0 { position:absolute; left:220px; top:13px; visibility:hidden; }');

document.write('</style>');

var thisbrowser9578256

var hidetimer9578256 = null;

if(document.layers){ thisbrowser9578256='NN4'; }

if(document.all){ thisbrowser9578256='IE'; }

if(!document.all && document.getElementById){ thisbrowser9578256='NN6'; }

function showmenu9578256(menuname)

{

if(thisbrowser9578256=='NN4') document.layers[menuname].visibility = 'visible';

if(thisbrowser9578256=='IE') document.all[menuname].style.visibility = 'visible';

if(thisbrowser9578256=='NN6') document.getElementById(menuname).style.visibility = 'visible';

if(hidetimer9578256) clearTimeout(hidetimer9578256);}

function timermenu9578256()

{

if(hidetimer9578256) clearTimeout(hidetimer9578256);hidetimer9578256 = setTimeout("hideall9578256();",1000);

}

function hidemenu9578256(menuname)

{

if(thisbrowser9578256=='NN4') document.layers[menuname].visibility = 'hidden';

if(thisbrowser9578256=='IE') document.all[menuname].style.visibility = 'hidden';

if(thisbrowser9578256=='NN6') document.getElementById(menuname).style.visibility = 'hidden';

}

function hilite9578256(menuitem) 

{

if(typeof(currentpage9578256)!='undefined' && menuitem==currentpage9578256) return;

if(thisbrowser9578256=='IE') document.all[menuitem].style.backgroundColor = '#3F3E23';

if(thisbrowser9578256=='NN6') document.getElementById(menuitem).style.backgroundColor = '#3F3E23';

if(hidetimer9578256) clearTimeout(hidetimer9578256);}

function unhilite9578256(menuitem) 

{

if(typeof(currentpage9578256)!='undefined' && menuitem==currentpage9578256) return;

if(thisbrowser9578256=='IE') document.all[menuitem].style.backgroundColor = '#86896A';

if(thisbrowser9578256=='NN6') document.getElementById(menuitem).style. backgroundColor = '#86896A';

if(hidetimer9578256) clearTimeout(hidetimer9578256);hidetimer9578256 = setTimeout("hideall9578256();",1000);

}

function hideall9578256()

{

hidemenu9578256('submenu9578256_0');

}

function openmenu9578256(menuname)

{

showmenu9578256(menuname);

if(menuname!='submenu9578256_0') hidemenu9578256('submenu9578256_0');

}

document.write('<table width=440 height=13 cellspacing=0 border=0 cellpadding=0>');

document.write('<tr><td align=left valign=top >');

document.write('<span id="menuspan9578256">');

document.write('<table width=440 id="menutable9578256" cellspacing=0 cellpadding=0>');

document.write('<tr>');

document.write('<td class="topcell9578256" align=LEFT width=110 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="submissions.pdf" target="_blank" title="" class="topitem9578256" onMouseOver="hideall9578256()">Call for Papers</a>');

document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('<td class="topcell9578256" align=LEFT width=110 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="conceptpaper.doc" target="_blank" title="" class="topitem9578256" onMouseOver="hideall9578256()">Concept Paper</a>');

document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('<td class="topcell9578256" align=LEFT width=110 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="" target="_self" title="" class="topitem9578256" onMouseOver="openmenu9578256(\'submenu9578256_0\')" onMouseOut="timermenu9578256();">Workshops</a>');

document.write('</td><td><p class="SMN9578256"><font face="webdings" color=#F5FF9B>6</font></p></td></tr></table>');

document.write('</td>');

document.write('<td class="topcell9578256" align=LEFT width=110 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="workingpapers.htm" target="_self" title="" class="topitem9578256" onMouseOver="hideall9578256()">Working Papers</a>');

document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('</table><p>');

document.write('<div id="submenu9578256_0">');

document.write('<table id="submenutable9578256" width=220 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_0" onMouseOver="hilite9578256(\'s9578256_0_0\')" onMouseOut="unhilite9578256(\'s9578256_0_0\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%">');

document.write('<a href="montreal.doc" target="_blank" title="" class="subitem9578256" >Montreal, March 2004</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_1" onMouseOver="hilite9578256(\'s9578256_0_1\')" onMouseOut="unhilite9578256(\'s9578256_0_1\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%">');

document.write('<a href="pittworkshop.doc" target="_blank" title="" class="subitem9578256" >Pittsburgh, November 2004</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('</span></td></tr></table>');

