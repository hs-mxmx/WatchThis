import React, {useState, useContext, useEffect} from 'react';
import { MediaContainer } from "../containers/media";
import { Media } from "../components";

export function Anime() {

    return(<>
            <Media.Title>Anime</Media.Title>
            <MediaContainer/>
        </>
    )
};