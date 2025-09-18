function getmovie(){
    let inp = document.getElementById("mov")
    let data =inp.value
    console.log(data);
    let dom = document.getElementById("l12")
   dom.style.display = "none";
    fetchdata(data)
}
async function fetchdata(data){
//    const url = "http://localhost:3000/data"
   const url = `https://imdb232.p.rapidapi.com/api/search?count=25&type=MOVIE&q=${data}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3dfb9b12a1msh5a3826faddd1f25p15322ejsn3351eec2aa3a',
		'x-rapidapi-host': 'imdb232.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
    // const response = await fetch(url);
	const result = await response.json();
	if (!result){
        console.log("Enter correct movie name")
    }
moviedetails(result)
// console.log(result);


} catch (error) {
	console.error(error);
}
}

function moviedetails(data1){
   
    let movieactors =[]
    let movieactorsimg =[]
    // let description = data.data.mainSearch.edges[0].node.entity.
    let imageurl =  data1.data.mainSearch.edges[0].node.entity.primaryImage.url
    // let genre = data.movies_shows[0].genres
    // let runTime =data.movies_shows[0].runTime
    let title =data1.data.mainSearch.edges[0].node.entity.titleText.text
    let suggestions = []
    let releaseYear= data1.data.mainSearch.edges[0].node.entity.releaseYear.year
    // let audienceScore= data.movies_shows[0].audienceScore
    // let wantToSeeCount = data.movies_shows[0].wantToSeeCount
    // let criticsScore   = data.movies_shows[0].criticsScore

    data1.data.mainSearch.edges[0].node.entity.principalCredits[0].credits.forEach(actor => {
    if (actor.name.nameText.text) movieactors.push(actor.name.nameText.text);
    if (actor.name.primaryImage?.url) movieactorsimg.push(actor.name.primaryImage.url);
});




data1.data.mainSearch.edges.forEach(element => {
    if(element.node.entity.titleText.text){
        suggestions.push(element.node.entity.titleText.text)}
    })



suggestions.shift();
    // console.log()
 
    // for (let index = 0; index < 4; index++) {
    //     // moviename.push =     movies_shows._highlightResult.castCrew.cast[index].value;

    //     // let movieactors =data[0].castCrew.cast
    //      movieactor.push(data.movies_shows[0]._highlightResult.castCrew.cast[index].value);   
    // }
console.log(movieactors);
// console.log(description);
console.log(imageurl);
console.log(suggestions);
// console.log(genre);
// console.log(runTime);
console.log(title);
// console.log(suggestions);
// console.log();
// console.log();


let div1 = document.getElementById("div1")
div1.innerHTML=""
let img = document.createElement("img")
img.src= imageurl
div1.appendChild(img)

let div2 = document.getElementById("div2")
div2.innerHTML=`
<h1> Title : ${title} </h1>  
<h1> Realease year : ${releaseYear} </h1> 
<br>
<h2> Actors </h2>  

 `
// <h5> Description : ${description} </h5>   <h3> genre : ${genre} </h3>  <h3> Runtime : ${runTime}  Min</h3> <h4> audienceScore : ${audienceScore} ,wantToSeeCount : ${wantToSeeCount} ,criticsScore : ${criticsScore}</h4>  


let div3 = document.getElementById("div3")

div3.innerHTML=""


for (let i = 0; i < movieactors.length; i++) {
    // const element = array[i];
    let div = document.createElement("div")
    div.innerHTML=`
 
<img src="${movieactorsimg[i]}" alt="${movieactors[i]}">
<h5> Actor : ${movieactors[i]} </h5> 
 `    
div3.appendChild(div)


}









let div4 = document.getElementById("div4")
div4.innerHTML=""
suggestions.forEach(element => {
let a = document.createElement("a")
a.innerText=element
a.href="#"
// a.onclick= fetchdata(element)  
  a.onclick = function(e) {
    e.preventDefault(); 
    fetchdata(element);
  };

div4.appendChild(a)
});


}





// getmovie()




// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

