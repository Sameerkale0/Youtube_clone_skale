//need 2 thgs:
//1- display vdos on homepg ie display() 
//2- search when smthg is typed is searchbox searchVideos()


let div= document.getElementById("videodiv");

//1- display vdos on homepg ie display() 

async function display(){
   
  
      //q= pop vdos --->  popular%20Videos (%20--> space)
      let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
  
      let data= await res.json();
  
     for({id:{videoId}}of data.items)
     {
        let videodiv= document.createElement("iframe") //vdo UI
        videodiv.setAttribute("class","mons")//mons-can write anythg//settting att of vdo div as class
        videodiv.src=`https://www.youtube.com/embed/${videoId}`; //it is getting vdo id of 35 items & embeddinng it here
        videodiv.allow='fullscreen'
        div.append(videodiv)
  
     }
}

display(); //this func shud get cld indirectly ie. w/ clicking user shud get homepg.ie no hover no click etc.
// Based upon most popular vdos.
//1- search when smthg is typed is searchbox searchVideos()
//take the "string" typed in search-box & search
async function searchVideos(){ //wherever async wil be cld await wil b used

    document.getElementById("videodiv").innerHTML="";//empty
  let query=  document.getElementById("video").value; //search string/ Query

    //let res= await fetch(`https://www.youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
     // let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
     let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);

    let data= await res.json();

   for({id:{videoId}}of data.items)
   {
      let videodiv= document.createElement("iframe") //vdo UI
      videodiv.setAttribute("class","mons")//mons-can write anythg//settting att of vdo div as class
      videodiv.src=`https://www.youtube.com/embed/${videoId}`; //it is getting vdo id of 35 items & embeddinng it here
      videodiv.allow='fullscreen'
      div.append(videodiv)

   }

}

   




//searchVideos(); not req since in HTML already we called