import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Media } from '../components';

export function SeriesContainer() {
    const [featureImage, setFeatureImage] = useState('images/film2.jpg');
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [seasons, setSeasons] = useState('');
    const [img_url, setImg] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    const [mediaName, setMediaName] = useState('Mulan');
    const [mediaDirector, setMediaDirector] = useState('');
    const [mediaCast, setMediaCast] = useState('');
    const [mediaSeasons, setMediaSeasons] = useState('');
    const [mediaLink, setMediaLink] = useState('');
    const [mediaBackground, setBackground] = useState('images/film2.jpg');
    const [mediaDescription, setMediaDescription] = useState('chinita en casa');

    var name_array = []
    var description_array = []
    var director_array = []
    var cast_array = []
    var seasons_array = []
    var img_url_array = []
    var link_array = []


    function generateMedia(img_url, name, description, director, cast, seasons, link) {  
        return (             
            <Media.Card onClick={() => setTodo(img_url, name, description, director, cast, seasons, link)} >
                <Media.CardImage src={img_url}/> 
            </Media.Card>  
        );
    }  
    
    function setTodo(img_url, name, description, director, cast, seasons, link) {
        setMediaName(name);
        setBackground(img_url);
        setMediaDescription(description);
        setMediaDirector(director);
        setMediaCast(cast.join(', '));
        setMediaSeasons(seasons.join(', '));
        setMediaLink(link);

    }

    function createTodo(img_url, name, description, director, cast, seasons, link) {
        const arr = []
        for (var i = 0; i < name.length; i++) {
            arr.push(generateMedia(img_url[i], name[i], description[i], director[i], cast[i], seasons[i], link[i]));
        }
        //console.log(namu);
        return arr;
    }

    useEffect (() => {
    
        fetch("http://127.0.0.1:5000/series", {
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
                            }
                        }
                    } 
                    setName(name_array);
                    setDescription(description_array);
                    setDirector(director_array);
                    setCast(cast_array);
                    setSeasons(seasons_array);
                    setImg(img_url_array);
                }
            );
        })
        .catch((error) => {
            setError(error.message);
        });;
     }, []);

    return ( 
        <Media>
            <Media.Feature>                 
                <Media.FeatureImage src={mediaBackground}/>
                <Media.FeatureContent>
                <Media.FeatureData>
                    <Media.FeatureTitle>{mediaName}</Media.FeatureTitle>
                    <Media.Content><Media.Category>Descripción:</Media.Category> {mediaDescription}</Media.Content>    
                    <Media.Content><Media.Category>Dirigido por:</Media.Category> {mediaDirector}</Media.Content>    
                    <Media.Content><Media.Category>Reparto:</Media.Category> {mediaCast}</Media.Content>    
                    <Media.Content>Seasons: {mediaSeasons}</Media.Content>                
                </Media.FeatureData>
                    <Media.FeatureLink href={mediaLink}>LINK</Media.FeatureLink>
                </Media.FeatureContent>
                
            </Media.Feature>
            <Media.Box>
                <Media.Title>SERIES</Media.Title>
                <Media.Carousel>
                    {createTodo(img_url, name, description, director, cast, seasons, link)}
                </Media.Carousel>
                <Media.Title>
                </Media.Title>
            </Media.Box>
        </Media>
    )
}