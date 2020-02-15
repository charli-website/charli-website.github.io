document.write('<STYLE type="text/css">');

document.write('#menuspan9578256 { position:absolute; width:250px; }');

document.write('#menutable9578256 { border-width: 0; border-color: #F0F4B7; border-style:solid}');

document.write('td.menucell9578256 { padding:2; padding-left:4; padding-right:4; background:#86896A; border:2 outset #F2F4B2; text-align:LEFT; }');

document.write('#submenutable9578256 { background: #F3F7C2; border-width: 1; border-color: #F4F7CF; border-style:solid}');

document.write('td.topcell9578256 {text-decoration:none; color:#332121; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal; text-align:LEFT; }');

document.write('a.topitem9578256 {text-decoration:none; color:#332121; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal; } ');

document.write('a.topitem9578256:hover {text-decoration:none; color:#121B28; }');

document.write('a.subitem9578256 {text-decoration:none; color:#F6F9C7; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal; } ');

document.write('a.subitem9578256:hover {text-decoration:none; color:#F4EEAA; }');

document.write('P.MN9578256 {color:#332121; font-weight: 400; font-family: Verdana; font-size:11px; font-style:normal;  }');

document.write('P.SMN9578256 {text-decoration:none; color:#F6F9C7; font-weight: 700; font-family: Verdana; font-size:12px; font-style:normal;  }');

document.write('#submenu9578256_0 { position:absolute; left:125px; top:20px; visibility:hidden; }');

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

document.write('<table width=250 cellspacing=0 border=0 cellpadding=0>');

document.write('<tr><td align=left valign=top>');

document.write('<span id="menuspan9578256">');

document.write('<table width=250 id="menutable9578256" cellspacing=0 cellpadding=2 >');

document.write('<tr>');

document.write('<td class="topcell9578256" align=LEFT width=125 height=20 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="Protecting Children Report.pdf" target="_self" title="" class="topitem9578256" onMouseOver="hideall9578256()">Download Report</a>');

document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('<td class="topcell9578256" align=LEFT width=125 height=20 bgcolor=#F5FF9B>')

document.write('<table cellspacing=0 cellpadding=0 border=0><tr><td>');

document.write('<a href="" target="_self" title="" class="topitem9578256" onMouseOver="openmenu9578256(\'submenu9578256_0\')" onMouseOut="timermenu9578256();">Participating Organizations</a>');

document.write('</td><td><p class="SMN9578256"><font face="webdings" color=#F5FF9B>6</font></p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('</table><p>');

document.write('<div id="submenu9578256_0">');

document.write('<table id="submenutable9578256" width=240 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_0" onMouseOver="hilite9578256(\'s9578256_0_0\')" onMouseOut="unhilite9578256(\'s9578256_0_0\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.un.org/special-rep/children-armed-conflict/" target="_blank" title="" class="subitem9578256" >OSRSG</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_1" onMouseOver="hilite9578256(\'s9578256_0_1\')" onMouseOut="unhilite9578256(\'s9578256_0_1\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.unicef.org" target="_blank" title="" class="subitem9578256" >UNICEF</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_2" onMouseOver="hilite9578256(\'s9578256_0_2\')" onMouseOut="unhilite9578256(\'s9578256_0_2\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.icrc.org/eng" target="_self" title="" class="subitem9578256" >ICRC</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_3" onMouseOver="hilite9578256(\'s9578256_0_3\')" onMouseOut="unhilite9578256(\'s9578256_0_3\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.unifem.org/" target="_self" title="" class="subitem9578256" >UNIFEM</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_4" onMouseOver="hilite9578256(\'s9578256_0_4\')" onMouseOut="unhilite9578256(\'s9578256_0_4\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.womenscommission.org/" target="_self" title="" class="subitem9578256" >Women\'s Commission</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_5" onMouseOver="hilite9578256(\'s9578256_0_5\')" onMouseOut="unhilite9578256(\'s9578256_0_5\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://ochaonline.un.org/" target="_self" title="" class="subitem9578256" >OCHA</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_6" onMouseOver="hilite9578256(\'s9578256_0_6\')" onMouseOut="unhilite9578256(\'s9578256_0_6\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.worldvision.org" target="_self" title="" class="subitem9578256" >World Vision</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_7" onMouseOver="hilite9578256(\'s9578256_0_7\')" onMouseOut="unhilite9578256(\'s9578256_0_7\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.who.int" target="_blank" title="" class="subitem9578256" >WHO</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_8" onMouseOver="hilite9578256(\'s9578256_0_8\')" onMouseOut="unhilite9578256(\'s9578256_0_8\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.savethechildren.org" target="_blank" title="" class="subitem9578256" >Save the Children</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_9" onMouseOver="hilite9578256(\'s9578256_0_9\')" onMouseOut="unhilite9578256(\'s9578256_0_9\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.arts.ualberta.ca/childrenandwar/" target="_blank" title="" class="subitem9578256" >Children and War Project</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_10" onMouseOver="hilite9578256(\'s9578256_0_10\')" onMouseOut="unhilite9578256(\'s9578256_0_10\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.who.int/svri/en/" target="_blank" title="" class="subitem9578256" >WHO-SVRI</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_11" onMouseOver="hilite9578256(\'s9578256_0_11\')" onMouseOut="unhilite9578256(\'s9578256_0_11\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.womenforwomen.org" target="_blank" title="" class="subitem9578256" >Women for Women International</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_12" onMouseOver="hilite9578256(\'s9578256_0_12\')" onMouseOut="unhilite9578256(\'s9578256_0_12\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.dci-is.org/" target="_blank" title="" class="subitem9578256" >Defense for Children International</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_13" onMouseOver="hilite9578256(\'s9578256_0_13\')" onMouseOut="unhilite9578256(\'s9578256_0_13\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.hrw.org" target="_blank" title="" class="subitem9578256" >Human Rights Watch</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_14" onMouseOver="hilite9578256(\'s9578256_0_14\')" onMouseOut="unhilite9578256(\'s9578256_0_14\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.unhcr.ch" target="_blank" title="" class="subitem9578256" >UNHCR</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_15" onMouseOver="hilite9578256(\'s9578256_0_15\')" onMouseOut="unhilite9578256(\'s9578256_0_15\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.sfcg.org/programmes/children/children_conflict.html" target="_blank" title="" class="subitem9578256" >Washington Network on CaAC</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_16" onMouseOver="hilite9578256(\'s9578256_0_16\')" onMouseOut="unhilite9578256(\'s9578256_0_16\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.medicamondiale.org/html/waswirtun/_in/ind_zenica_e.html" target="_blank" title="" class="subitem9578256" >Medica Zenica</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_17" onMouseOver="hilite9578256(\'s9578256_0_17\')" onMouseOut="unhilite9578256(\'s9578256_0_17\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.ecpatusa.org/trafficking.asp" target="_blank" title="" class="subitem9578256" >ECPAT USA</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell9578256" height=20 id="s9578256_0_18" onMouseOver="hilite9578256(\'s9578256_0_18\')" onMouseOut="unhilite9578256(\'s9578256_0_18\')">');

document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');

document.write('<a href="http://www.un.org/esa/desa.htm" target="_blank" title="" class="subitem9578256" >UNDESA</a>')

;document.write('</td><td><p class="SMN9578256">&nbsp;</p></td></tr></table>');

document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('</span></td></tr></table>');

