import React, {useState, useContext, useEffect} from 'react';
import { MediaContainer } from "../containers/media";
import { Media } from "../components";
export function Movies() {

    return(<>
            <Media.Title>MOVIES</Media.Title>
            <MediaContainer/>
        </>
    )
};