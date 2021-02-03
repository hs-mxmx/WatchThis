import React, { useState, useEffect} from 'react';
import { Media } from '../components';
import { HeaderContainer } from '../containers/header';

export function MoviesContainer() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [duration, setDuration] = useState('');
    const [img_url, setImg] = useState('');
    const [link, setLink] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');
    
    const [mediaName, setMediaName] = useState("Tenet");
    const [mediaDirector, setMediaDirector] = useState('Christopher Nolan');
    const [mediaCast, setMediaCast] = useState("Anterro Ahonen", "Andrew Howard", "Aleksei Podlesnov", "Adam Cropper", "Aaron Taylor-Johnson");
    const [mediaDuration, setMediaDuration] = useState('150');
    const [mediaLink, setMediaLink] = useState('https://www.pelispedia.de/pelicula/tenet-2/');
    const [mediaBackground, setBackground] = useState('/images/tenet.jpg');
    const [mediaDescription, setMediaDescription] = useState("Armado solamente con una palabra, Tenet, el protagonista deberá luchar " + 
    "por la supervivencia del mundo entero y evitar la Tercera Guerra Mundial, en una historia de espionaje internacional."+ 
    "La misión se desplegará más allá del tiempo real. No son viajes en el tiempo, es inversión..");
    const [mediaGenre, setMediaGenre] = useState(["Acción"].join(', '));

    var name_array = []
    var description_array = []
    var director_array = []
    var cast_array = []
    var duration_array = []
    var img_url_array = []
    var link_array = []
    var genre_array = []


    function generateMedia(img_url, name, description, director, cast, duration, link, genre) {  
        return (             
            <Media.Card onClick={() => setTodo(img_url, name, description, director, cast, duration, link, genre)} >
                <Media.CardImage src={img_url}/> 
            </Media.Card>  
        );
    }  
    
    function setTodo(img_url, name, description, director, cast, duration, link, genre) {
        setMediaName(name);
        setBackground(img_url);
        setMediaDescription(description);
        setMediaDirector(director);
        setMediaCast(cast.join(', '));
        setMediaDuration(duration);
        setMediaLink(link);
        setMediaGenre(genre.join(', '));
    }

    function createTodo(img_url, name, description, director, cast, duration, link, genre) {
        const arr = []
        for (var i = 0; i < name.length; i++) {
            arr.push(generateMedia(img_url[i], name[i], description[i], director[i], cast[i], duration[i], link[i], genre[i]));
        }
        //console.log(namu);
        return arr;
    }

    useEffect (() => {
    
        fetch("http://127.0.0.1:5000/movies", {
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
                                case 'duration':
                                    duration_array.push(data.message[i][property])
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
                    setDuration(duration_array);
                    setImg(img_url_array);
                    setLink(link_array);
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
                        <Media.Content><Media.Category>Reparto:</Media.Category> {mediaCast}</Media.Content>  
                        <Media.Content><Media.Category>Géneros: </Media.Category> {mediaGenre}</Media.Content>   
                        <Media.Content><Media.Category>Duración: </Media.Category>{mediaDuration}min</Media.Content>  
                    </Media.DivFixer>              
                </Media.FeatureData>
                    <Media.FeatureLink href={mediaLink} target="_blank">LINK</Media.FeatureLink>
                </Media.FeatureContent>
                
            </Media.Feature>
            <Media.Box>
                <Media.Title>MOVIES</Media.Title>       
                <Media.Carousel>
                    {createTodo(img_url, name, description, director, cast, duration, link, genre)}
                </Media.Carousel>
                <Media.Title>
                </Media.Title>
            </Media.Box>
        </Media>
        </>
    )
}