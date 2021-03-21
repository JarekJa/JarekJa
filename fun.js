var obrazki= new Array(5);
var pungra=0;
var punkom=0;
var zbite= new Array(0);
var czyruch=false;
function losujpol()
{
var n;
var	listaobr=[1,2,3,4,5];
var liczobr=[2,2,2,2,2];
var licz=5;
for(var i=0;i<10;i++)
{
		    n=Math.floor(Math.random() * licz);
			obrazki[i]=listaobr[n];
			liczobr[n]=liczobr[n]-1;
			if(liczobr[n]==0)
			{
				listaobr.splice(n,1);
				liczobr.splice(n,1);
				licz--;
			}
}	
}
function Czyzbi(n)
{
	for(var i=0;i<zbite.length;i++)
	{
		if(zbite[i]==n)
		{
			return true;
		}
	}
	return false;
}
function czysc()
{
	for(var i=1;i<=10;i++)
	{
		if(!Czyzbi(obrazki[i-1]))
		{
			document.getElementById("t"+i).innerHTML="<img src=\"r.jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
		}
		else
		{
			document.getElementById("t"+i).innerHTML="<img src=\"r"+obrazki[i-1]+".jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
		}
	}
}
function ruchkom()
{
	var konty=true;
	var tr=true;
	var a,b,c,d;
	var ab=10;
	var tabpom=[1,2,3,4,5,6,7,8,9,10];
	while(konty)
	{
	        tr=true;
	while(tr)
	{		
		a=Math.floor(Math.random() * ab);
		if(!Czyzbi(obrazki[tabpom[a]-1]))
		{
			tr=false;
			c=tabpom[a]-1;
			document.getElementById("t"+tabpom[a]).innerHTML="<img src=\"r"+obrazki[c]+".jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
		}
		tabpom.splice(a,1);
		ab--;
	}
	tr=true;
	while(tr)
	{		
		b=Math.floor(Math.random() * ab);
		if(!Czyzbi(obrazki[tabpom[b]-1]))
		{
			tr=false;
		    d=tabpom[b]-1;
			document.getElementById("t"+tabpom[b]).innerHTML="<img src=\"r"+obrazki[d]+".jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
		}
				tabpom.splice(b,1);
		ab--;
	}
	if(obrazki[c]==obrazki[d])
	{
	punkom++;
	document.getElementById("pukogry").innerHTML="Punkty przeciwnika: "+punkom;
	zbite.push(obrazki[c]);
	}
	else
	{
		konty=false;
	}
	}
	setTimeout("czysc()", 3000);
	setTimeout(function(){ document.getElementById("czyruch").innerHTML="Twój ruch"; 	l=0;	czyruch=true; }, 3000);
}
var l=0; 
var pom;
function ruch(n)
{
	if(czyruch)
	{
        if(!Czyzbi(obrazki[n-1]))
		{
			if(l==0)
			{
				document.getElementById("t"+n).innerHTML="<img src=\"r"+obrazki[n-1]+".jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
				pom=n;
				l++;
			}
			else if(l==1 && n!=pom)
			{
				document.getElementById("t"+n).innerHTML="<img src=\"r"+obrazki[n-1]+".jpg\" alt=\"Błąd\" width=\"150\" height=\"150\">";
				if(obrazki[pom-1]==obrazki[n-1])
				{
					pungra++;
					document.getElementById("pugrgry").innerHTML="Twoje punkty: "+pungra;
					zbite.push(obrazki[pom-1]);
					l=0;
				}
				else
				{
										czyruch=false;
					setTimeout("czysc()", 3000);
					setTimeout(function(){ document.getElementById("czyruch").innerHTML="Ruch przeciwnika";ruchkom();  }, 3000);
				}
			}
		}	
	}
}
function graj()
{
	losujpol();
	pungra=0;punkom=0;
	document.getElementById("pugrgry").innerHTML="Twoje punkty: 0";
	document.getElementById("pukogry").innerHTML="Punkty przeciwnika: 0";
	document.getElementById("czyruch").innerHTML="Twój ruch";
	czyruch=true;	
	zbite= new Array(0);
		czysc();
	 l=0; 
    pom=0;
}