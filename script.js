
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//UnSplash API
const count = 10;
const query = 'fantasy';
const apiKey = 'G0CCAX9PjpKavG5hZJptxrbdmJOmZD7xlIFK_MmY2SM';
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=${query}`;

//create elements for links & photos & add to DOM
function displayPhotos(){

    //run function for each object in photosArray
    photosArray.forEach((photo) => {

        //Create <a> to link to Unsplash
        const item = document.createElement('a'); //creates blank anchor element
        item.setAttribute('href', photo.links.html); //sets href attribute
        item.setAttribute('target', '_blank'); //opens in new window (refers to target, blank opens in new tab)
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular); //src loads the img
        img.setAttribute('alt', photo.alt_description); //sets alt
        img.setAttribute('title', photo.alt_description);

        //put img inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}



//get photos from unsplash api
async function getPhotos(){

    try{
        
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();

    }catch (error){

        console.log('oops!');
        //catch error here

    }
}


//on load
getPhotos();