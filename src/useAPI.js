import {useState, useEffect} from 'react'
import {format} from "date-fns";

function useAPI(dateRange) {

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {

        const formattedEndDate = format(dateRange.endDate, 'yyyy-MM-dd')
        const formattedStartDate = format(dateRange.startDate, 'yyyy-MM-dd')

        const APIKEY = process.env.REACT_APP_NASA_API_KEY

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`)
            .then(response => response.json())
            .then(json => {
                setNasaData(prevNasaData => {
                    const reversedData = json.slice().reverse()
                    return [...prevNasaData, ...reversedData]
                })
            })

    }, [dateRange])

    return nasaData

}

export default useAPI;