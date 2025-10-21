// Getting element by id
let ele =document.getElementById("message")
ele.innerText="keerthivasan";
ele.innerHTML='<button>keerthi</button>' // to chabge the content by giving Html input
// Getting element by name
let elearrays=document.getElementsByName("exampleparagraph")
for(let i=0;i<elearrays.length;i++)
{
    const element=elearrays[i];
    element.innerText="short"
}
// get element by class name
let cls=document.getElementsByClassName("c1");
for(let i=0;i<cls.length;i++)
{
    const element=cls[i];
    element.innerText="changed"

}
// get elements by tag name
///  let ele=document.getElementsByTagName() use this method and aplly same

// Getting child elements
const parentelement=document.getElementById("parentelement")
const childelements=parentelement.children; // .children is the keyword
for(let i=0;i<childelements.length;i++)
{
    const element=childelements[i];
    element.innerHTML="<b>value</b>"
}

// Getting parent from child
// get the child eleent byId and use .parentelement

//Create element
const paragraph=document.createElement('p')
paragraph.textContent="This is a dynamically created element"
document.body.appendChild(paragraph) // appendchild in the body

const buttonelement=document.createElement('button')
buttonelement.textContent="This is a button";
document.body.appendChild(buttonelement)

// Remove element
function removeelement()
{
    const ele=document.getElementById("toberemoved");
    ele.remove();
}

// For getting attributes use ele.getattribute() for setting new attribute use ele.setAttribute('name','value)


//Event handling

//event handling by dom 
const btnelement=document.getElementById("btn");
btnelement.addEventListener('click',function(Event)
{
    alert('Clicked and listened by Dom :'+event.type)
})

//mouse event
const paragraph1=document.getElementById("p1");
const buttonelement1=document.getElementById('clickbutton')
buttonelement1.addEventListener('click',function(event)
{
    paragraph1.textContent="Now im changed"
})
const mouseelement=document.getElementById("mouseelement")
mouseelement.addEventListener('mouseover',function(event)
{
    mouseelement.textContent="Mouseover"
})
mouseelement.addEventListener('mouseleave',function(event)
{
    mouseelement.textContent="Mouseleave"
})