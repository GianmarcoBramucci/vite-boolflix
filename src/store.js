import { reactive } from "vue";
export const store = reactive({
    urlApi:'https://api.themoviedb.org/3/',
    endPoint:{
        movie: 'search/movie',
        serieTv: 'search/tv'
    },
    options:{
        params:{
            api_key:'899268d3b967078ca4be628aff1b9364',
            query:''
        }
    },
    imgPath: 'http://image.tmdb.org/t/p/w342',
    movies:[],
    serieTv:[],
    searchBar: ''
})