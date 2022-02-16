//to finc the querystring 
const queryString = document.location.search; 
    console.log(queryString);

    //in the search bar you can write ?id="something" 
    //and/or & after to add another parameter
//"URLsearchparams" to get info from the parameters
const params = new URLSearchParams(queryString);
 console.log(params);

 const id = params.get("id");
 console.log(id);

 const name = params.get("name");
 console.log(name);
