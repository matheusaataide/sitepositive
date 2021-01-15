export default text => {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
} 