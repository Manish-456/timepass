import ContentLists from './contentLists.js';

function getContents(title){
 if(title){
     return  ContentLists.find(content => content.title === title );    
}
return "";
}
export default getContents;