import React, { useState, useEffect} from 'react';
import { Media } from '../components';
import { HeaderContainer } from '../containers/header';

export function AnimeContainer() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [seasons, setSeasons] = useState('');
    const [img_url, setImg] = useState('');
    const [link, setLink] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');

    const [mediaName, setMediaName] = useState('Berserk');
    const [mediaDirector, setMediaDirector] = useState('Itagaki')
    const [mediaCast, setMediaCast] = useState(['Griffith', 'Guts'].join(', '));
    const [mediaSeasons, setMediaSeasons] = useState(["1", "2"].join(', '));
    const [mediaLink, setMediaLink] = useState('https://www3.animeflv.net/anime/berserk-2017');
    const [mediaBackground, setBackground] = useState('images/berserk.jpg');
    const [mediaDescription, setMediaDescription] = useState('Un joven y bravo guerrero llamado Guts lucha como un mercenario en primera línea.'
    + 'Por azares del destino, Guts se acaba uniendo al carismático y mortal joven llamado Griffith. Liderando al grupo de mercenarios conocidos'
    + 'como la Banda del Halcón, Griffith empuña su formidable fuerza como ningún otro lo ha hecho. Conducidos por cuestiones de estatus,'
    + 'los miembros de la Banda del Halcón pronto irán escalando en el camino de la gloria tras su alianza con el reino de Midland, hasta que un desafortunado suceso provocará un revés en la Banda que pondrá al mundo de rodillas.');
    const [mediaGenre, setMediaGenre] = useState(["Drama", "Anime"].join(', '));

    var name_array = []
    var description_array = []
    var director_array = []
    var cast_array = []
    var seasons_array = []
    var img_url_array = []
    var link_array = []
    var genre_array = []

    function generateMedia(img_url, name, description, director, cast, seasons, link, genre) {  
        return (             
            <Media.Card onClick={() => setTodo(img_url, name, description, director, cast, seasons, link, genre)} >
                <Media.CardImage src={img_url}/> 
            </Media.Card>  
        );
    }  
    
    function setTodo(img_url, name, description, director, cast, seasons, link, genre) {
        setMediaName(name);
        setBackground(img_url);
        setMediaDescription(description);
        setMediaDirector(director);
        setMediaCast(cast.join(', '));
        setMediaSeasons(seasons.join(', '));
        setMediaLink(link);
        setMediaGenre(genre.join(', '));
    }

    function createTodo(img_url, name, description, director, cast, seasons, link, genre) {
        const arr = []
        for (var i = 0; i < name.length; i++) {
            arr.push(generateMedia(img_url[i], name[i], description[i], director[i], cast[i], seasons[i], link[i], genre[i]));
        }
        //console.log(namu);
        return arr;
    }

    useEffect (() => {
    
        fetch("http://127.0.0.1:5000/animes", {
            method:"GET",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            }}
        )
        .then(response => {
            return response.json().then( (data) => 
                {   //console.log(data.message)
                    for (var i = 0; i < data.message.length; i++){
                        for (const property in data.message[i]) {
                            //console.log(`${property}: ${data.message[i][property]}`);
                            switch (property) {
                                case 'name':
                                    name_array.push(data.message[i][property])
                                    break
                                case 'description':
                                    description_array.push(data.message[i][property])
                                    break
                                case 'director':
                                    director_array.push(data.message[i][property])
                                    break
                                case 'cast':
                                    cast_array.push(data.message[i][property])
                                    break
                                case 'seasons':
                                    seasons_array.push(data.message[i][property])
                                    break
                                case 'img_url':
                                    img_url_array.push(data.message[i][property])
                                break
                                case 'link':
                                    link_array.push(data.message[i][property])
                                break
                                case 'genres':
                                    genre_array.push(data.message[i][property])
                                break
                            }
                        }
                    } 
                    setName(name_array);
                    setDescription(description_array);
                    setDirector(director_array);
                    setCast(cast_array);
                    setSeasons(seasons_array);
                    setImg(img_url_array);
                    setGenre(genre_array);
                }
            );
        })
        .catch((error) => {
            setError(error.message);
        });;
     }, []);

    return (
        <>
        <HeaderContainer/>
        <Media>
            <Media.Feature>                 
                <Media.FeatureImage src={mediaBackground}/>
                <Media.FeatureContent>
                <Media.FeatureData>
                    <Media.FeatureTitle>{mediaName}</Media.FeatureTitle>
                    <Media.DivFixer>
                        <Media.Content><Media.Category>Descripción:</Media.Category> {mediaDescription}</Media.Content>    
                        <Media.Content><Media.Category>Dirigido por:</Media.Category> {mediaDirector}</Media.Content>    
                        <Media.Content><Media.Category>Personajes:</Media.Category> {mediaCast}</Media.Content>    
                        <Media.Content><Media.Category>Temporadas: </Media.Category> {mediaSeasons}</Media.Content>
                        <Media.Content><Media.Category>Géneros: </Media.Category> {mediaGenre}</Media.Content>    
                    </Media.DivFixer>        
                </Media.FeatureData>
                    <Media.FeatureLink href={mediaLink}>LINK</Media.FeatureLink>
                </Media.FeatureContent>
                
            </Media.Feature>
            <Media.Box>
                <Media.Title>ANIMES</Media.Title>
                <Media.Carousel>
                    {createTodo(img_url, name, description, director, cast, seasons, link, genre)}
                </Media.Carousel>
                <Media.Title>
                </Media.Title>
            </Media.Box>
        </Media>
        </>
    )
}