export interface Movie{
    id? : number;
    title: string;
    movieDesc?: string;
    releaseYear?: number;
    duration?: string;
    rating?: number;
}


export const movie = [

    {
        id: 1,
        title: "Batman:Dark Knight",
        movieDesc: "Dark Thriller",
        releaseYear: 2008,
        duration: "75 minutes",
        rating: 5


    },

    {
        id: 2,
        title: "Avengers",
        movieDesc: "Action",
        releaseYear: 2012,
        duration: "90 minutes",
        rating: 3


    },

    {
        id: 3,
        title: "Mr Bean",
        movieDesc: "Comedy",
        releaseYear: 2015,
        duration: "120 minutes",
        rating: 4


    },
    {
        id: 4,
        title: "Despicable Me",
        movieDesc: "Comedy",
        releaseYear: 2017,
        duration: "75 minutes",
        rating: 3


    },
    {
        id: 5,
        title: "Superman",
        movieDesc: "Action",
        releaseYear: 2020,
        duration: "80 minutes",
        rating: 5


    }



]