import React, {useState, useContext, useEffect} from 'react';
import { MediaContainer } from "../containers/media";
import { Media } from "../components";

export function Series() {

    return(<>
            <Media.Title>SERIES</Media.Title>
            <MediaContainer/>
        </>
    )
};