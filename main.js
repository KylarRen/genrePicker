var genreList = genreListString.split('\n');

function getNewGenre(){

    var displayDiv = document.getElementById("currentGenre");
    var tempGenre = genreList[getRandomInt(0, genreList.length)];

    console.log(tempGenre);

    displayDiv.innerHTML = tempGenre;

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getNewGenre();
