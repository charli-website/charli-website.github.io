document.write('<STYLE type="text/css">');

document.write('#menuspan21270515 { position:absolute; width:150px; }');

document.write('#menutable21270515 { border-width: 0; border-color: #F7F9C9; border-style:solid}');

document.write('td.menucell21270515 { padding:2; padding-left:4; padding-right:4; background:#F4F294; border:2 outset #F0F778; }');

document.write('#submenutable21270515 { background: #FAFC9E; border-width: 1; border-color: #FCF594; border-style:solid}');

document.write('td.topcell21270515 {text-decoration:none; color:#848038; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal; }');

document.write('a.topitem21270515 {text-decoration:none; color:#848038; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal;} ');

document.write('a.topitem21270515:hover {text-decoration:none; color:#5E6035; }');

document.write('a.subitem21270515 {text-decoration:none; color:#2D2D17; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal;} ');

document.write('a.subitem21270515:hover {text-decoration:none; color:#FFDD00; }');

document.write('P.MN21270515 {color:#848038; font-weight: 700; font-family: Verdana; font-size:12px; font-style:normal;}');

document.write('P.SMN21270515 {text-decoration:none; color:#2D2D17; font-weight: 400; font-family: Verdana; font-size:11px; font-style:normal;}');

document.write('#submenu21270515_0 { position:absolute; left:135px; top:30px; visibility:hidden; }');

document.write('#submenu21270515_1 { position:absolute; left:135px; top:60px; visibility:hidden; }');

document.write('#submenu21270515_2 { position:absolute; left:135px; top:90px; visibility:hidden; }');

document.write('#submenu21270515_3 { position:absolute; left:135px; top:150px; visibility:hidden; }');

document.write('#submenu21270515_4 { position:absolute; left:135px; top:180px; visibility:hidden; }');

document.write('#submenu21270515_5 { position:absolute; left:135px; top:210px; visibility:hidden; }');

document.write('</style>');

var thisbrowser21270515

var hidetimer21270515 = null;

if(document.layers){ thisbrowser21270515='NN4'; }

if(document.all){ thisbrowser21270515='IE'; }

if(!document.all && document.getElementById){ thisbrowser21270515='NN6'; }

function showmenu21270515(menuname)

{

if(thisbrowser21270515=='NN4') document.layers[menuname].visibility = 'visible';

if(thisbrowser21270515=='IE') document.all[menuname].style.visibility = 'visible';

if(thisbrowser21270515=='NN6') document.getElementById(menuname).style.visibility = 'visible';

if(hidetimer21270515) clearTimeout(hidetimer21270515);}

function timermenu21270515()

{

if(hidetimer21270515) clearTimeout(hidetimer21270515);hidetimer21270515 = setTimeout("hideall21270515();",1000);

}

function hidemenu21270515(menuname)

{

if(thisbrowser21270515=='NN4') document.layers[menuname].visibility = 'hidden';

if(thisbrowser21270515=='IE') document.all[menuname].style.visibility = 'hidden';

if(thisbrowser21270515=='NN6') document.getElementById(menuname).style.visibility = 'hidden';

}

function hilite21270515(menuitem) 

{

if(typeof(currentpage21270515)!='undefined' && menuitem==currentpage21270515) return;

if(thisbrowser21270515=='IE') document.all[menuitem].style.backgroundColor = '#D8D897';

if(thisbrowser21270515=='NN6') document.getElementById(menuitem).style.backgroundColor = '#D8D897';

if(hidetimer21270515) clearTimeout(hidetimer21270515);}

function unhilite21270515(menuitem) 

{

if(typeof(currentpage21270515)!='undefined' && menuitem==currentpage21270515) return;

if(thisbrowser21270515=='IE') document.all[menuitem].style.backgroundColor = '#F4F294';

if(thisbrowser21270515=='NN6') document.getElementById(menuitem).style. backgroundColor = '#F4F294';

if(hidetimer21270515) clearTimeout(hidetimer21270515);hidetimer21270515 = setTimeout("hideall21270515();",1000);

}

function hideall21270515()

{

hidemenu21270515('submenu21270515_0');

hidemenu21270515('submenu21270515_1');

hidemenu21270515('submenu21270515_2');

hidemenu21270515('submenu21270515_3');

hidemenu21270515('submenu21270515_4');

hidemenu21270515('submenu21270515_5');

}

function openmenu21270515(menuname)

{

showmenu21270515(menuname);

if(menuname!='submenu21270515_0') hidemenu21270515('submenu21270515_0');

if(menuname!='submenu21270515_1') hidemenu21270515('submenu21270515_1');

if(menuname!='submenu21270515_2') hidemenu21270515('submenu21270515_2');

if(menuname!='submenu21270515_3') hidemenu21270515('submenu21270515_3');

if(menuname!='submenu21270515_4') hidemenu21270515('submenu21270515_4');

if(menuname!='submenu21270515_5') hidemenu21270515('submenu21270515_5');

}

document.write('<table width=150 height=240 cellspacing=0 border=0 cellpadding=0>');

document.write('<tr><td align=left valign=top >');

document.write('<span id="menuspan21270515">');

document.write('<table width=150 id="menutable21270515" cellspacing=0 cellpadding=8>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="index.html" target="_self" title="Warbabies Site" class="topitem21270515" onMouseOver="hideall21270515()">Home</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_0\')" onMouseOut="timermenu21270515();">The Issue</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_1\')" onMouseOut="timermenu21270515();">Who We Are</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="/search/drilldown/?geoCd=5&geoCdChild=4&itemCd=EUR&countryCd=US&itemName=Europe&countryName=*&what=WeatherCity" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_2\')" onMouseOut="timermenu21270515();">Research</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="workingpapers.htm" target="_self" title="" class="topitem21270515" onMouseOver="hideall21270515()">Working Papers</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_3\')" onMouseOut="timermenu21270515();">Resources</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_4\')" onMouseOut="timermenu21270515();">Date by Country</a>');

document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td class="topcell21270515" align=LEFT width=150 bgcolor=#F9F7A1>')

document.write('<a href="" target="_self" title="" class="topitem21270515" onMouseOver="openmenu21270515(\'submenu21270515_5\')" onMouseOut="timermenu21270515();">Links</a>');

document.write('</td>');

document.write('</tr>');

document.write('</table><p>');

document.write('<div id="submenu21270515_0">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_0_0" onMouseOver="hilite21270515(\'s21270515_0_0\')" onMouseOut="unhilite21270515(\'s21270515_0_0\')">');

document.write('<a href="issue.htm" target="_self" title="" class="subitem21270515" >Issue</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_0_1" onMouseOver="hilite21270515(\'s21270515_0_1\')" onMouseOut="unhilite21270515(\'s21270515_0_1\')">');

document.write('<a href="overview.htm" target="_self" title="" class="subitem21270515" >Overview</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('<div id="submenu21270515_1">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_1_0" onMouseOver="hilite21270515(\'s21270515_1_0\')" onMouseOut="unhilite21270515(\'s21270515_1_0\')">');

document.write('<a href="staff.htm" target="_self" title="" class="subitem21270515" >Researchers/Staff</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_1_1" onMouseOver="hilite21270515(\'s21270515_1_1\')" onMouseOut="unhilite21270515(\'s21270515_1_1\')">');

document.write('<a href="contact.htm" target="_self" title="" class="subitem21270515" >Contact Us</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('<div id="submenu21270515_2">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_2_0" onMouseOver="hilite21270515(\'s21270515_2_0\')" onMouseOut="unhilite21270515(\'s21270515_2_0\')">');

document.write('<a href="bookproject.htm" target="_self" title="" class="subitem21270515" >Book Project</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_2_1" onMouseOver="hilite21270515(\'s21270515_2_1\')" onMouseOut="unhilite21270515(\'s21270515_2_1\')">');

document.write('<a href="cri.htm" target="_self" title="" class="subitem21270515" >Collaborative Research Initiatives</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_2_2" onMouseOver="hilite21270515(\'s21270515_2_2\')" onMouseOut="unhilite21270515(\'s21270515_2_2\')">');

document.write('<a href="chp.htm" target="_self" title="" class="subitem21270515" >Consultations with Humanitarian Practitioners</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('<div id="submenu21270515_3">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_3_0" onMouseOver="hilite21270515(\'s21270515_3_0\')" onMouseOut="unhilite21270515(\'s21270515_3_0\')">');

document.write('<a href="film.htm" target="_self" title="" class="subitem21270515" >Film</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_3_1" onMouseOver="hilite21270515(\'s21270515_3_1\')" onMouseOut="unhilite21270515(\'s21270515_3_1\')">');

document.write('<a href="books.htm" target="_self" title="" class="subitem21270515" >Books</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_3_2" onMouseOver="hilite21270515(\'s21270515_3_2\')" onMouseOut="unhilite21270515(\'s21270515_3_2\')">');

document.write('<a href="" target="_self" title="" class="subitem21270515" >Articles</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_3_3" onMouseOver="hilite21270515(\'s21270515_3_3\')" onMouseOut="unhilite21270515(\'s21270515_3_3\')">');

document.write('<a href="" target="_self" title="" class="subitem21270515" >News</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_3_4" onMouseOver="hilite21270515(\'s21270515_3_4\')" onMouseOut="unhilite21270515(\'s21270515_3_4\')">');

document.write('<a href="reports.htm" target="_blank" title="" class="subitem21270515" >Reports</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('<div id="submenu21270515_4">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_0" onMouseOver="hilite21270515(\'s21270515_4_0\')" onMouseOut="unhilite21270515(\'s21270515_4_0\')">');

document.write('<a href="bosnia.htm" target="_self" title="" class="subitem21270515" >Bosnia</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_1" onMouseOver="hilite21270515(\'s21270515_4_1\')" onMouseOut="unhilite21270515(\'s21270515_4_1\')">');

document.write('<a href="easttimor.htm" target="_self" title="" class="subitem21270515" >East Timor</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_2" onMouseOver="hilite21270515(\'s21270515_4_2\')" onMouseOut="unhilite21270515(\'s21270515_4_2\')">');

document.write('<a href="kuwait.htm" target="_self" title="" class="subitem21270515" >Kuwait</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_3" onMouseOver="hilite21270515(\'s21270515_4_3\')" onMouseOut="unhilite21270515(\'s21270515_4_3\')">');

document.write('<a href="rwanda.htm" target="_self" title="" class="subitem21270515" >Rwanda</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_4" onMouseOver="hilite21270515(\'s21270515_4_4\')" onMouseOut="unhilite21270515(\'s21270515_4_4\')">');

document.write('<a href="sudan.htm" target="_self" title="" class="subitem21270515" >Sudan</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_4_5" onMouseOver="hilite21270515(\'s21270515_4_5\')" onMouseOut="unhilite21270515(\'s21270515_4_5\')">');

document.write('<a href="uganda.htm" target="_blank" title="" class="subitem21270515" >Uganda</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('<div id="submenu21270515_5">');

document.write('<table id="submenutable21270515" width=280 cellspacing=0>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_0" onMouseOver="hilite21270515(\'s21270515_5_0\')" onMouseOut="unhilite21270515(\'s21270515_5_0\')">');

document.write('<a href="http://www.warandchildren.org/" target="_blank" title="" class="subitem21270515" >War and Children Identity Project</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_1" onMouseOver="hilite21270515(\'s21270515_5_1\')" onMouseOut="unhilite21270515(\'s21270515_5_1\')">');

document.write('<a href="http://www.project-roots.com/" target="_blank" title="" class="subitem21270515" >Project Roots</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_2" onMouseOver="hilite21270515(\'s21270515_5_2\')" onMouseOut="unhilite21270515(\'s21270515_5_2\')">');

document.write('<a href="http://www.arts.ualberta.ca/childrenandwar/" target="_blank" title="" class="subitem21270515" >Impact of War on Children Project</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_3" onMouseOver="hilite21270515(\'s21270515_5_3\')" onMouseOut="unhilite21270515(\'s21270515_5_3\')">');

document.write('<a href="http://www.waraffectedchildren.gc.ca/" target="_blank" title="" class="subitem21270515" >Winnipeg Conference</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_4" onMouseOver="hilite21270515(\'s21270515_5_4\')" onMouseOut="unhilite21270515(\'s21270515_5_4\')">');

document.write('<a href="http://www.un.org/special-rep/children-armed-conflict/" target="_blank" title="" class="subitem21270515" >Office of the Special Representative</a>')

;document.write('</td>');

document.write('</tr>');

document.write('<tr>');

document.write('<td align=LEFT class="menucell21270515" height=20 id="s21270515_5_5" onMouseOver="hilite21270515(\'s21270515_5_5\')" onMouseOut="unhilite21270515(\'s21270515_5_5\')">');

document.write('<a href="http://www.unicef.org" target="_blank" title="" class="subitem21270515" >UNICEF</a>')

;document.write('</td>');

document.write('</tr>');

document.write('</table></div>');

document.write('</span></td></tr></table>');

