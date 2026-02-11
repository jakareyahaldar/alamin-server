
function checkObjEmpty(obj){
    const emptyFild = Object.keys(obj).filter( (e)=>{
        return obj[e] === "" || obj[e] === undefined || null
    } )
    if(emptyFild.length > 0) throw Error(emptyFild.join(", ") + " Is Empty!")
}

module.exports = checkObjEmpty