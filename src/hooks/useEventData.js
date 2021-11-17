import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useEventData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://quiet-atoll-77411.herokuapp.com/events')
            .then(result => {
                setData(result.data.events);
            })
    }, [])

    return [data, setData];
};

export default useEventData;