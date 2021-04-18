var movie = {
   name:'Jab We Met',
   rating: 4.5,
   lang: 'Hindi'
}

var movie1 = {
    name:'Mad Max',
    rating: 4.1,
    lang: 'English'
 }

movie
{name: "Jab We Met", rating: 4.5, lang: "Hindi"}
movie.name
"Jab We Met"
movie.rating
4.5
movie.ind="Bollywood"
"Bollywood"
movie
{name: "Jab We Met", rating: 4.5, lang: "Hindi", ind: "Bollywood"}
movie.rating=4.6
4.6
delete movie.lang
true

//JSON > Javascript object notation

var movies = [
    {
        name:'Jab We Met',
        rating: 4.5,
        lang: 'Hindi'
    },
    {
        name:'Mad Max',
        rating: 4.1,
        lang: 'English'
    }
]


movies[0]
{name: "Jab We Met", rating: 4.5, lang: "Hindi"}
movies[1]
{name: "Mad Max", rating: 4.1, lang: "English"}
movies[1].name
"Mad Max"