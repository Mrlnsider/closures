var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
             display: inline-block;
             width: 100px;
             height: 100px;
             border-radius: 50%;
             border: solid 1px green;
             font-size: 25px;
        `
elements = tagNames.map ( x => document.body.appendChild ( document.createElement ( x ) ) )

elements.filter ( element => element.tagName === "DIV" )
        .forEach ( ( element, num ) => {
                        element.style = divStyle
                        element.innerText = num
                   })
elements.filter ( element => element.tagName === "BUTTON" )
        .forEach ( element => {
                        element.innerHTML = "remove DIVs"
                        element.onclick = function ( event ) {
                                recursRemove ()
                        }
                   })


var recursRemove = (function (sel) {
    var elem = document.body.querySelectorAll ( sel )
    for (i=0; i<elem.length; i ++)
    return function z () {
        if (i === elem.length) return
        elem [i].parentNode.removeChild(elem[i++])
        z()
    }
}) ("DIV") 
/*var recursRemove = ( function ( divo ) {
        var elem = document.body.querySelectorAll ( divo )
        var num = 0
        return function removeD () {
                if ( num === elem.length ) return
                elem [ num ].parentNode.removeChild ( elem [ num++ ] )
                removeD ()
        }
}) ( "DIV" )*/