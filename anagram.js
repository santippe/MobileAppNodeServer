args=process.argv
f=args[0]
s=args[1]
x=i=>i.length
y=(q,w)=>x(q.split('').filter(x=>x==w))
l=x(f)
g=0
if(l==x(s)){
g=1
for(a=0;a<l;a++){
b=f[a]
g=g&&y(f,b)==y(s,b)
}
}
console.log(g)