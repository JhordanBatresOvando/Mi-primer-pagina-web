//************ www.caoxuan.com - kcaoxuan@caoxuan.com *********




var N,S,M,Styl,ID,zX,zY,Vis,vis,vs,zz,divId,divY,divX,divW,divH,bCol,visb,zInd,X,Y

//do NOT use any of above as variables in your other linked script

N=(navigator.appName.indexOf('Netscape')!=-1&&parseInt(navigator.appVersion)<5)
S=(navigator.appName.indexOf('Netscape')!=-1&&parseInt(navigator.appVersion)>4.9)
M=(navigator.appName.indexOf('Microsoft')!=-1)

Vis=new Array()
Vis[0]=(M||S) ? "hidden" : "hide"
Vis[1]=(M||S) ? "visible" : "show"

function GetDiv(divId,divY,divX,divW,divH,bCol,visb,zInd){
bkCol=(bCol!="")?((N)?" bgColor="+bCol:";background:"+bCol):""

Styl = (M||S) ? "<DIV" : "<LAYER"

if(M||S){
Styl+=" ID="+divId
Styl+=" style='position:absolute;top:"+divY+";left:"+divX+";width:"+divW+";height:"+divH+bkCol
Styl+=";visibility:"+Vis[visb]+";z-index:"+zInd
Styl+="'>"
}

if(N){
Styl+=" ID="+divId
Styl+=" top="+divY+" left="+divX+" width="+divW+" height="+divH+bkCol
Styl+=" visibility="+Vis[visb]+" z-index="+zInd
Styl+=">"
}
document.writeln(Styl)
}

function EndDiv(){
(M||S)? document.writeln("</DIV>"): document.writeln("</LAYER>")
}

function PutIt(ID,zX,zY){
if(N){
document.layers[ID].left=zX
document.layers[ID].top=zY
}
if(M){
document.all[ID].style.left=zX
document.all[ID].style.top=zY
}
if(S){
document.getElementById(ID).style.left=zX
document.getElementById(ID).style.top=zY
}
}

function ShowHide(ID,vs){
if(N){
document.layers[ID].visibility=Vis[vs]
}
if(M){
document.all[ID].style.visibility=Vis[vs]

}
if(S){
document.getElementById(ID).style.visibility=Vis[vs]
}
}

function VisOf(ID){
if(N){
Vizz=(document.layers[ID].visibility=="show")?1:0
}
if(M){
Vizz=(document.all[ID].style.visibility=="visible")?1:0
}
if(S){
Vizz=(document.getElementById(ID).style.visibility=="visible")?1:0
}
return Vizz
}


function Zind(ID,zz){
if(N){
document.layers[ID].zIndex=zz
}
if(M){
document.all[ID].style.zIndex=zz
}
if(S){
document.getElementById(ID).style.zIndex=zz
}
}


function Xof(ID){
if(N){
return parseInt(document.layers[ID].left)
}
if(M){
return parseInt(document.all[ID].style.left)
}
if(S){
return parseInt(document.getElementById(ID).style.left)
}
}

function Yof(ID){
if(N){
return parseInt(document.layers[ID].top)
}
if(M){
return parseInt(document.all[ID].style.top)

}
if(S){
return parseInt(document.getElementById(ID).style.top)
}
}


function Distance(a,b){
X=Xof(a)-Xof(b)
Y=Yof(a)-Yof(b)
return Math.floor(Math.sqrt(X*X+Y*Y))
}

function Ran(ar){
ran=Math.floor(Math.random()*ar.length)
return ar[ran]
}

Sond=new Array("ang","eng","uen","ing","ung","ei","ai","ook","ouk","ou","ien")
Cons=new Array("L","J","R","F","W","Q","H","Zh","P","Ch","M","N","W")
function Chinese(){
Nom=Ran(Cons)+Ran(Sond)+" "
Nom+=Ran(Cons)+Ran(Sond)
return Nom
}
