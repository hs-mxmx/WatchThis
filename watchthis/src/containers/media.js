import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Media } from '../components';




export function MediaContainer() {
    const [featureImage, setFeatureImage] = useState('images/film2.jpg');
    const history = useHistory();
    const [showFeature, setShowFeature] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [duration, setDuration] = useState('');
    const [img_url, setImg] = useState('');
    const [error, setError] = useState('');

    const [mediaName, setMediaName] = useState('Mulan');
    const [mediaBackground, setBackground] = useState('images/film2.jpg');
    const [mediaDescription, setMediaDescription] = useState('chinita en casa');

    var name_array = []
    var description_array = []
    var director_array = []
    var cast_array = []
    var duration_array = []
    var img_url_array = []


    function generateMedia(img_url, name, description) {  
        return (             
            <Media.Card onClick={() => setTodo(img_url, name, description)} >
                <Media.CardImage src={img_url}/> 
            </Media.Card>  
        );
    }  
    
    function setTodo(url, nombre, descripcion) {
        setMediaName(nombre);
        setBackground(url);
        setMediaDescription(descripcion);
    }

    function createTodo(img_url, name, description) {
        const arr = []
        for (var i = 0; i < name.length; i++) {
            arr.push(generateMedia(img_url[i], name[i], description[i]));
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
                            }
                        }
                    } 
                    setName(name_array);
                    setDescription(description_array);
                    setDirector(director_array);
                    setCast(cast_array);
                    setDuration(duration_array);
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
                    <Media.Description>{mediaDescription}</Media.Description>               
                </Media.FeatureData>
                    <Media.FeatureLink>LINK</Media.FeatureLink>
                </Media.FeatureContent>
                
            </Media.Feature>
            <Media.Box>
                <Media.Carousel>
                    {createTodo(img_url, name, description)}
                </Media.Carousel>
                <Media.Title>
                </Media.Title>
            </Media.Box>
        </Media>
    )
}