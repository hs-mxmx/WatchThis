import React, { useState } from 'react';
import { Face } from '../components';
import { Form } from '../components';


function loadGenres(genres_array) {
    var genre_name = ""
    var genres_container = []

    for(var i = 0; i < genres_array.length; i++ ){
        genre_name = genres_array[i]['name'];
        genres_container.push(
        <>
            <Form.SelectOption>{genre_name}</Form.SelectOption>
        </>
      )      
    }
    return genres_container;
}


export function FaceContainer({ }) {
    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');
    const [genres, setGenres] = useState('');
    const isInvalid = emailAddress === '';
    const [selectValue, setSelectValue] = useState('');

    fetch("http://127.0.0.1:5000/genres", {
        method:"GET",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        }}
    )
    .then(response => {
        return response.json().then( (data) =>      
            {
                if ("Error" in data.message) {
                    console.log(error)
                } else {
                    setGenres(data.message);
                }
            }
        );
    })
    .catch((error) => {
        console.log(error)
    });
    

    const handleNotifications = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:5000/suscribers", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(        
                {"email": emailAddress,
                 "genre": selectValue
                }
            )}
        )
        .then(response => {
            return response.json().then( (data) =>      
                {//console.log(data)
                    if ("Error" in data.message) {
                    setEmailAddress('');
                    setError(data.message["Error"]);
                }
            }
            );
        })
        .catch((error) => {
            setEmailAddress('');
            console.log(error)
            setError(error.message);
        });;

    }

    return ( 
        <Face>
            <Face.Title>WATCHTHIS</Face.Title>
            <Face.Subtitle>The best flicks in two clicks.</Face.Subtitle>
            <Form.MailWrapper>
                <Form.Text>
                    Waiting for a new incoming movie? Be the first to know!
                </Form.Text>
                <Form.Base onSubmit={handleNotifications} method="POST">
                        <Form.Input
                            type="email"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} 
                        />
                        <Form.Select 
                            value={selectValue}
                            onChange={({ target }) => setSelectValue(target.value)}>
                            {loadGenres(genres)}
                        </Form.Select>
                        <Form.Submit disabled={isInvalid} type="submit">
                            Submit
                        </Form.Submit>
                    </Form.Base>
            </Form.MailWrapper>
        </Face>
    )
}