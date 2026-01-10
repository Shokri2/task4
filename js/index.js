// variable dec
var uswename="ali"
var age=20
var student=true
var mark=[20,true,30]
var userinfo={
uswename:"ali",
 age:20,
 student:true
}
var iswork=null
var lastname
// console
console.log(uswename)
console.log(age)
console.log(student)
console.log(mark[0])
console.log(userinfo)
console.log(iswork)
console.log(lastname)
// const
const y=9
// dom:document object model
var nav=document.getElementById('navbar')
console.log(nav)
nav.style.backgroundColor='black'
nav.style.height="150px"
 
var links=document.getElementsByTagName('a')[0]
console.log(links)
links.style.color='yellow'
links.innerHTML="blog"

var main=document.getElementsByTagName('img')[1]
console.log(main)
main.src='https://th.bing.com/th?q=Rose&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247'
main.style.height='200px'
main.style.borderRadius="60%"