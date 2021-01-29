import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Media } from '../components';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
<script src="https://kit.fontawesome.com/99c2809234.js" crossorigin="anonymous"></script>

/*function generateMedia(media){
    var container = []
    for (var i = 0; i < media.length; i++) {
        container.push(<Form.Title key={i}>{media[i]}</Form.Title>)
    }
    return container
}*/

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"search country"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }


function generateMedia(description, duration, img_url, name, links){
    var link_container = []
    var media_container = []
    var index = 0;
    // Name must be declared (not invalid for loop)
    for (var i = 0; i < name.length; i++) {
        index += 1;
        for (var _ = 0; _ < links[i].length; _++){
            link_container.push(<Form.TextSmall>Link{_+1}: {links[i][_]}</Form.TextSmall>)
        }
        media_container.push(
            <Form>
                <Form.TextSmall>Episode: {name[i]}</Form.TextSmall>
                <Form.TextSmall>Duration: {duration[i]}min</Form.TextSmall> 
                <Form.TextSmall>Description: {description[i]}</Form.TextSmall>
                {link_container}
                <Media.Link><img src={img_url[i]} height="200px" width="200px"/></Media.Link>
            </Form>
        )
        link_container = []
    }
    // console.log(media_container);
    return media_container;
}

export function MediaContainer() {
    const history = useHistory();
    var description_array = []
    var duration_array = []
    var img_url_array = []
    var link_array = []
    var name_array = []
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [img_url, setImg] = useState('');
    const [links, setLinks] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    useEffect (() => {
    
        fetch("http://127.0.0.1:5000/episodes", {
            method:"GET",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            }}
        )
        .then(response => {
            return response.json().then( (data) => 
                {   // console.log(data.message)
                    for (var i = 0; i < data.message.length; i++){
                        for (const property in data.message[i]) {
                            // console.log(`${property}: ${data.message[i][property]}`);
                            switch (property) {
                                case 'description':
                                    description_array.push(data.message[i][property])
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
                                case 'name':
                                    name_array.push(data.message[i][property])
                                    break
                            }
                        }
                    } 
                      setLinks(link_array);
                      setDescription(description_array);
                      setDuration(duration_array);
                      setImg(img_url_array);
                      setName(name_array);
                }
            );
        })
        .catch((error) => {
            setError(error.message);
        });;
     }, []);
    
    return ( 
        <Media>
            <SearchBar/>
            <Media.Title>
                Films
                <Media.Tab/>
            </Media.Title>
            <Media.CarouselContainer>
            

            <Media.Carousel>
            <Media.ArrowLeft/>
                {generateMedia(description, duration, img_url, name, links)}
            </Media.Carousel>
            
            <Media.ArrowRight/>
            </Media.CarouselContainer>
        </Media>
    )
}

/*
export function MediaContainer() {
    const [featureImage, setFeatureImage] = useState('images/film2.jpg');
    return ( 
        <Media>
            <Media.Feature> 
                <Media.FeatureImage src={featureImage}/>
            </Media.Feature>
            <Media.Box>
                <Media.Carousel>
                    <Media.Card onClick={() => setFeatureImage('images/film1.jpg')}>
                        <Media.CardImage src={'images/film1.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film2.jpg')}>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film3.jpg')}>
                        <Media.CardImage src={'images/film3.jpg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film4.jpeg')}>
                        <Media.CardImage src={'images/film4.jpeg'}/>
                    </Media.Card>
                    <Media.Card onClick={() => setFeatureImage('images/film5.jpg')}>
                        <Media.CardImage src={'images/film5.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film3.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film5.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film4.jpeg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film1.jpg'}/>
                    </Media.Card>
                    <Media.Card>
                        <Media.CardImage src={'images/film2.jpg'}/>
                    </Media.Card>
                </Media.Carousel>
            </Media.Box>
        </Media>
    )
}
*/