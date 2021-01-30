import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Media } from '../components';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
<script src="https://kit.fontawesome.com/99c2809234.js" crossorigin="anonymous"></script>


function filterMedia(media, filter, total_medias) {
    var link_container = []
    var media_container = []
    var cast_container = []
    var seasons_container = []
    var cast_array = []
    var media_type = ""
    var index = 0;
    
    // Name must be declared (not invalid for loop)
    // console.log(media);
    if (media.length === total_medias){
        for (var item_container = 0; item_container < media.length; item_container++) {

            if ('movies' in media[item_container]){
                // console.log(media[item_container]);
                link_container = []
                cast_container = []
                        
                    {media[item_container]['movies'].filter((val) => {
                            link_container = []
                            cast_container = []
                            cast_array = []
                            var link = val[7];
                            var cast = val[5];
                            index += 1;
                            // No reset for arrays and load forms
                            if (filter === "") {
                                    
                                for (var _ = 0; _ < link['link'].length; _++){
                                    link_container.push(<Form.TextSmall>Link{_+1}: {link['link'][_]}</Form.TextSmall>);
                                }
                                for (var _ = 0; _ < cast['cast'].length; _++){
                                    if (cast['cast'].length-1 > _){
                                        cast_array.push(cast['cast'][_], ', ');
                                    } else {
                                        cast_array.push(cast['cast'][_]);
                                    }
                                }
                                cast_container.push(<Form.TextSmall>Cast: {cast_array}</Form.TextSmall>)
                                media_container.push(
                                <>
                                    <Form>
                                        <Form.TextSmall>Name: {val[1]['name']}</Form.TextSmall>
                                        <Form.TextSmall>Description: {val[2]['description']}</Form.TextSmall>
                                        <Form.TextSmall>Director: {val[3]['director']}</Form.TextSmall>
                                        <Form.TextSmall>Duration: {val[4]['duration']}</Form.TextSmall>
                                        {cast_container}
                                        <Media.CardImage src={val[6]['img_url']}></Media.CardImage>
                                        <Form.TextSmall>Img: {val[6]['img_url']}</Form.TextSmall>
                                        {link_container}
                                    </Form>
                                </>
                                    )
                            // Reset arrays and load selected form
                            } else if (val[1].name.toLowerCase().includes(filter.toLowerCase())) {
                                    link_container = []
                                    cast_container = []
                                    var link = val[7];
                                    index += 1;
                                    for (var _ = 0; _ < link['link'].length; _++){
                                        link_container.push(<Form.TextSmall>Link{_+1}: {link['link'][_]}</Form.TextSmall>);
                                    }
                                    for (var _ = 0; _ < cast['cast'].length; _++){
                                        if (cast['cast'].length-1 > _){
                                            cast_array.push(cast['cast'][_], ', ');
                                        } else {
                                            cast_array.push(cast['cast'][_]);
                                        }
                                    }
                                    cast_container.push(<Form.TextSmall>Cast: {cast_array}</Form.TextSmall>)
                                    media_container.push(
                                    <>
                                        <Form>
                                            <Form.TextSmall>Name: {val[1]['name']}</Form.TextSmall>
                                            <Form.TextSmall>Description: {val[2]['description']}</Form.TextSmall>
                                            <Form.TextSmall>Director: {val[3]['director']}</Form.TextSmall>
                                            <Form.TextSmall>Duration: {val[4]['duration']}</Form.TextSmall>
                                            {cast_container}
                                            <Media.CardImage src={val[6]['img_url']}></Media.CardImage>
                                            <Form.TextSmall>Img: {val[6]['img_url']}</Form.TextSmall>
                                            {link_container}
                                        </Form>
                                    </>
                                    )
                                }
                                
                            }
                        )}}

            if ('series' in media[item_container]){
                media_type = 'series'
                // console.log(media[item_container], media_type)
            }

            if ('animes' in media[item_container]){
                media_type = 'animes'
               //  console.log(media[item_container], media_type)
            }

            if (media_type === 'series' || media_type === 'animes') {
                link_container = []
                cast_container = []
                                    
                    // console.log(media[item_container][media_type]);
                    {media[item_container][media_type].filter((val) => {
                            link_container = []
                            cast_container = []
                            cast_array = []
                            seasons_container = []
                            
                            var link = val[7];
                            var cast = val[5];
                            var seasons = val[4];
                            index += 1;
                            // No reset for arrays and load forms
                            if (filter === "") {
                                                
                                for (var _ = 0; _ < link['link'].length; _++){
                                    link_container.push(<Form.TextSmall>Link{_+1}: {link['link'][_]}</Form.TextSmall>);
                                }

                                for (var _ = 0; _ < seasons['seasons'].length; _++){
                                    seasons_container.push(<Form.TextSmall>Season:{_+1}: {seasons['seasons'][_]}</Form.TextSmall>);
                                }

                                for (var _ = 0; _ < cast['cast'].length; _++){
                                    if (cast['cast'].length-1 > _){
                                        cast_array.push(cast['cast'][_], ', ');
                                    } else {
                                        cast_array.push(cast['cast'][_]);
                                    }
                                }
                                cast_container.push(<Form.TextSmall>Cast: {cast_array}</Form.TextSmall>)
                                media_container.push(
                                <>
                                    <Form>
                                        <Form.TextSmall>Name: {val[1]['name']}</Form.TextSmall>
                                        <Form.TextSmall>Description: {val[2]['description']}</Form.TextSmall>
                                        <Form.TextSmall>Director: {val[3]['director']}</Form.TextSmall>
                                        {seasons_container}
                                        {cast_container}
                                        <Media.CardImage src={val[6]['img_url']}></Media.CardImage>
                                        <Form.TextSmall>Img: {val[6]['img_url']}</Form.TextSmall>
                                        {link_container}
                                    </Form>
                                </>
                                    )
                            // Reset arrays and load selected form
                            } else if (val[1].name.toLowerCase().includes(filter.toLowerCase())) {
                                    link_container = []
                                    cast_container = []
                                    var link = val[7];
                                    index += 1;
                                    for (var _ = 0; _ < link['link'].length; _++){
                                        link_container.push(<Form.TextSmall>Link{_+1}: {link['link'][_]}</Form.TextSmall>);
                                    }
                                    for (var _ = 0; _ < cast['cast'].length; _++){
                                        if (cast['cast'].length-1 > _){
                                            cast_array.push(cast['cast'][_], ', ');
                                        } else {
                                            cast_array.push(cast['cast'][_]);
                                        }
                                    }
                                    cast_container.push(<Form.TextSmall>Cast: {cast_array}</Form.TextSmall>)
                                    media_container.push(
                                    <>
                                        <Form>
                                            <Form.TextSmall>Name: {val[1]['name']}</Form.TextSmall>
                                            <Form.TextSmall>Description: {val[2]['description']}</Form.TextSmall>
                                            <Form.TextSmall>Director: {val[3]['director']}</Form.TextSmall>
                                            <Form.TextSmall>Duration: {val[4]['duration']}</Form.TextSmall>
                                            {cast_container}
                                            <Media.CardImage src={val[6]['img_url']}></Media.CardImage>
                                            <Form.TextSmall>Img: {val[6]['img_url']}</Form.TextSmall>
                                            {link_container}
                                        </Form>
                                    </>
                                    )
                                }
                                            
                            }
                        )}
                }}
                return media_container;
            }
}

export function MediaContainer() {
    var description_array = []
    var duration_array = []
    var img_url_array = []
    var link_array = []
    var name_array = []
    var media_array = []
    var type_array = []
    var director_array = []
    var cast_array = []
    var season_array = []
    const history = useHistory();
    const total_medias = 3;
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [img_url, setImg] = useState('');
    const [links, setLinks] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [media, setMedia] = useState('');
    const [filter, setFilter] = useState('');
    const [type, setType] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [season, setSeason] = useState('');
    const [currentMedia, setCurrentMedia] = useState('');

    useEffect (() => {
    
        Promise.all([
        fetch("http://127.0.0.1:5000/movies", {
            method:"GET",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            }}),
        fetch("http://127.0.0.1:5000/series", {
            method:"GET",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            }}
        ),
        fetch("http://127.0.0.1:5000/animes", {
            method:"GET",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            }})])
        .then(([movies, series, animes]) => {
            return ([movies.json().then( (movie_data) => 
                {   
                    //console.log(movie_data)
                    var current_media_array = []
                    for (var i = 0; i < movie_data.message.length; i++){
                        for (const property in movie_data.message[i]) {
                            // console.log(`${property}: ${data.message[i][property]}`);
                            switch (property) {
                                case 'type':
                                    type_array.push(movie_data.message[i][property])
                                    break
                                case 'name':
                                    name_array.push(movie_data.message[i][property])
                                    break
                                case 'description':
                                    description_array.push(movie_data.message[i][property])
                                    break
                                case 'director':
                                    director_array.push(movie_data.message[i][property])
                                    break
                                case 'duration':
                                    duration_array.push(movie_data.message[i][property])
                                    break
                                case 'cast':
                                    cast_array.push(movie_data.message[i][property])
                                    break
                                case 'img_url':
                                    img_url_array.push(movie_data.message[i][property])
                                    break
                                case 'link':
                                    link_array.push(movie_data.message[i][property])
                                    break
                            }
                        }
                        current_media_array.push([
                                         {'type': type_array[i]},
                                         {'name': name_array[i]},
                                         {'description': description_array[i]},
                                         {'director': director_array[i]},
                                         {'duration': duration_array[i]},
                                         {'cast': cast_array[i]},
                                         {'img_url': img_url_array[i]},
                                         {'link': link_array[i]}
                                         ])
                    } 
                    media_array.push({"movies":current_media_array});
                    setType(type_array);
                    setName(name_array);
                    setDescription(description_array);
                    setDirector(director_array);
                    setDuration(duration_array);
                    setCast(cast_array);
                    setImg(img_url_array);
                    setLinks(link_array);
                    setMedia(media_array);
                    setCurrentMedia(current_media_array)
                }
            ),
            series.json().then( (serie_data) => 
            {   
                var description_array = []
                var duration_array = []
                var img_url_array = []
                var link_array = []
                var name_array = []
                var type_array = []
                var director_array = []
                var cast_array = []
                var season_array = []
                var current_media_array = []
                // console.log(serie_data)
                for (var i = 0; i < serie_data.message.length; i++){
                    for (const property in serie_data.message[i]) {
                        // console.log(`${property}: ${serie_data.message[i][property]}`);
                        switch (property) {
                            case 'type':
                                type_array.push(serie_data.message[i][property])
                                break
                            case 'name':
                                name_array.push(serie_data.message[i][property])
                                break
                            case 'description':
                                description_array.push(serie_data.message[i][property])
                                break
                            case 'director':
                                director_array.push(serie_data.message[i][property])
                                break
                            case 'seasons':
                                season_array.push(serie_data.message[i][property])
                                break
                            case 'cast':
                                cast_array.push(serie_data.message[i][property])
                                break
                            case 'img_url':
                                img_url_array.push(serie_data.message[i][property])
                                break
                            case 'link':
                                link_array.push(serie_data.message[i][property])
                                break
                        }
                    }
                    current_media_array.push([
                                     {'type': type_array[i]},
                                     {'name': name_array[i]},
                                     {'description': description_array[i]},
                                     {'director': director_array[i]},
                                     {'seasons': season_array[i]},
                                     {'cast': cast_array[i]},
                                     {'img_url': img_url_array[i]},
                                     {'link': link_array[i]}
                                     ])
                }
                // console.log(current_media_array); 
                media_array.push({"series":current_media_array});
                setType(type_array);
                setName(name_array);
                setDescription(description_array);
                setDirector(director_array);
                setSeason(season)
                setCast(cast_array);
                setImg(img_url_array);
                setLinks(link_array);
                setMedia(media_array);
                setCurrentMedia(current_media_array);
                // console.log(media_array);
            }
        ),
        animes.json().then( (anime_data) => 
            {   
                var description_array = []
                var duration_array = []
                var img_url_array = []
                var link_array = []
                var name_array = []
                var type_array = []
                var director_array = []
                var cast_array = []
                var season_array = []
                var current_media_array = []
                // console.log(anime_data)
                for (var i = 0; i < anime_data.message.length; i++){
                    for (const property in anime_data.message[i]) {
                        // console.log(`${property}: ${serie_data.message[i][property]}`);
                        switch (property) {
                            case 'type':
                                type_array.push(anime_data.message[i][property])
                                break
                            case 'name':
                                name_array.push(anime_data.message[i][property])
                                break
                            case 'description':
                                description_array.push(anime_data.message[i][property])
                                break
                            case 'director':
                                director_array.push(anime_data.message[i][property])
                                break
                            case 'seasons':
                                season_array.push(anime_data.message[i][property])
                                break
                            case 'cast':
                                cast_array.push(anime_data.message[i][property])
                                break
                            case 'img_url':
                                img_url_array.push(anime_data.message[i][property])
                                break
                            case 'link':
                                link_array.push(anime_data.message[i][property])
                                break
                        }
                    }
                    current_media_array.push([
                                     {'type': type_array[i]},
                                     {'name': name_array[i]},
                                     {'description': description_array[i]},
                                     {'director': director_array[i]},
                                     {'seasons': season_array[i]},
                                     {'cast': cast_array[i]},
                                     {'img_url': img_url_array[i]},
                                     {'link': link_array[i]}
                                     ])
                }
                // console.log(current_media_array); 
                media_array.push({"animes":current_media_array});
                setType(type_array);
                setName(name_array);
                setDescription(description_array);
                setDirector(director_array);
                setSeason(season_array)
                setCast(cast_array);
                setImg(img_url_array);
                setLinks(link_array);
                setMedia(media_array);
                setCurrentMedia(current_media_array);;
                // console.log(media_array);
            })
    
    ])
        })
        .catch((error) => {
            setError(error.message);
        });;
     }, []);
    
    return ( 
        <Media>
            <Media.Feature> 
            </Media.Feature>
            <Media.Box>
                <Media.Carousel>
                </Media.Carousel>
                <Form.Input
                            type="text"
                            autoComplete="off"
                            placeholder="Search something..."
                            value={filter}
                            onChange={({ target }) => setFilter(target.value)} />
                {filterMedia(media, filter, total_medias)}
            </Media.Box>
        </Media>
    )
}

// {generateMediaFull(description, duration, img_url, name, links)}

/*
function generateMediaFull(description, duration, img_url, name, links){
    var link_container = []
    var media_container = []
    var index = 0;
    // Name must be declared (not invalid for loop)
    for (var i = 0; i < name.length; i++) {
        index += 1;
        for (var _ = 0; _ < links[i].length; _++){
            link_container.push(<Form.TextSmall>Link{_+1}: {links[i][_]}</Form.TextSmall>)
        }
        // console.log(link_container)
        media_container.push(
            <>
            <Form>
                <Form.TextSmall>Episode: {name[i]}</Form.TextSmall>
                <Form.TextSmall>Duration: {duration[i]}min</Form.TextSmall> 
                <Form.TextSmall>Description: {description[i]}</Form.TextSmall>
                {link_container}
            </Form>
            <Media.Card>
                <Media.CardImage key={index} src={img_url[i]}></Media.CardImage>
            </Media.Card>
            </>
        )
        link_container = []
    }
    
    return media_container;
}
*/
