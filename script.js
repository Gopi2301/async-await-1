var url = "https://biriyani.anoram.com/get"

function briyanifun(){
    
    urlData(url);
}
async function urlData (){
    var image = document.createElement('img')

    var urlFetch = await fetch (url)
    var data = await urlFetch.json()
   image.setAttribute('src',data.image)
    parent = document.querySelector('.imageBox')
    parent.append(image)
    console.log(data)
}