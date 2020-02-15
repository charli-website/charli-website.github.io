fixMozillaZIndex=true; //Fixes Z-Index problem  with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps
_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(menuStyle=new mm_style()){
bordercolor="#999999";
borderstyle="solid";
borderwidth=1;
fontfamily="Verdana, Tahoma, Arial";
fontsize="120%";
fontstyle="normal";
headerbgcolor="#ffffff";
headercolor="#000000";
offbgcolor="#eeeeee";
offcolor="#000000";
onbgcolor="#ddffdd";
oncolor="#000099";
outfilter="randomdissolve(duration=0.3)";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=3)";
padding=8;
pagebgcolor="#82B6D7";
pagecolor="black";
separatorcolor="#999999";
separatorsize=1;
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
left=525;
orientation="horizontal";
style=menuStyle;
top=10;
aI("showmenu=Samples;text=Network;");
aI("showmenu=Milonic;text=Datasets;");
aI("showmenu=Partners;text=Working Papers;");
aI("showmenu=Links;text=Publications;");
}

with(milonic=new menuname("Network")){
overflow="scroll";
style=menuStyle;
aI("text=Network Link 1;url=network1.html;");
aI("text=Network Link 2;url=network2.html;");
aI("text=Network Link 3;url=network3.html;");
aI("text=Network Link 4;url=network4.html;");
}

with(milonic=new menuname("Datasets")){
style=menuStyle;
aI("text=Datasets Link 1;url=Datasets1.html;");
aI("text=text=Datasets Link 2;url=Datasets2.html;");
aI("text=Newsletter Subscription;url=http://www.milonic.com/newsletter.php;");
aI("text=FAQ;url=http://www.milonic.com/menufaq.php;");
aI("text=Discussion Forum;url=http://www.milonic.com/forum/;");
aI("text=Software License Agreement;url=http://www.milonic.com/license.php;");
aI("text=Privacy Policy;url=http://www.milonic.com/privacy.php;");
}

with(milonic=new menuname("Working Papers")){
style=menuStyle;
aI("text=Working Papers link 1;url=workingpaper1.html");
aI("text=WebSmith;url=http://www.softidiom.com/?milonicmenu;");
aI("text=SMS 2 Email;url=http://www.sms2email.com/;");
}

with(milonic=new menuname("Links")){
style=menuStyle;
aI("text=Apache Web Server;url=http://www.apache.org/;");
aI("text=MySQL Database Server;url=http://ww.mysql.com/;");
aI("text=PHP - Development;url=http://www.php.net/;");
aI("text=phpBB Web Forum System;url=http://www.phpbb.net/;");
aI("showmenu=Anti Spam;text=Anti Spam Tools;");
}

with(milonic=new menuname("Anti Spam")){
style=menuStyle;
aI("text=Spam Cop;url=http://www.spamcop.net/;");
aI("text=Mime Defang;url=http://www.mimedefang.org/;");
aI("text=Spam Assassin;url=http://www.spamassassin.org/;");
}

with(milonic=new menuname("MyMilonic")){
style=menuStyle;
aI("text=Login;url=http://www.milonic.com/login.php;");
aI("text=Licenses;url=http://www.milonic.com/mylicenses.php;");
aI("text=Invoices;url=http://www.milonic.com/myinvoices.php;");
aI("text=Make Support Request;url=http://www.milonic.com/reqsupport.php;");
aI("text=View Support Requests;url=http://www.milonic.com/mysupport.php;");
aI("text=Your Details;url=http://www.milonic.com/mydetails.php;");
}

drawMenus();

