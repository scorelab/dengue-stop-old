

exports.isValidId=(id)=>{

    if (id.match(/^[0-9a-fA-F]{24}$/))
        return true
    else
    return false

} 