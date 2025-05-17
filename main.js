var genreList = genreListString.split('\n');

function getNewGenre(){

    var displayDiv = document.getElementById("currentGenre");
    var tempGenre = genreList[getRandomInt(0, genreList.length)];
    var tempGenreShort = tempGenre.split(/-|–/)[0].trim();

    console.log(tempGenreShort);

    displayDiv.innerHTML = tempGenre;

    /*

    var img = document.getElementById("genreImage");
    img.src = "https://unsplash.com/800x400/?" + encodeURIComponent(tempGenreShort + " music");
    console.log(img.src);

    */

}

function getRandomInt(min, max) {
    
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

getNewGenre();
