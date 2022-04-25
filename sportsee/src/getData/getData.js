import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocks/data";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * It fetches data either from the mockedData or the API and returns it.
 * @modify .env - Set MOCKED_DATA to true || false
 * @param requestTarget - The name of the type of data you want to request from the API.
 * @param userId - The user ID of the user you want to get data for.
 * @returns The data for the user.
 */

async function getData(requestTarget, userId) {
    // MOCKED_DATA=true
    const mockedEnv = process.env.REACT_APP_MOCKED_DATA
    const mockedData = {
        USER_MAIN_DATA: USER_MAIN_DATA,
        USER_ACTIVITY: USER_ACTIVITY,
        USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE: USER_PERFORMANCE
    }

    // API URL = API_URL=http://localhost:3000
    // @returns The URL part of the API target.
    const apiURL = process.env[`REACT_APP_API_URL`]
    const apiTarget = process.env[`REACT_APP_${requestTarget}`].replace(/userId/, userId)
    let usersData, data
    console.log('MOCKED_DATA', mockedEnv)


    if (mockedEnv === 'true') {
        console.log('FROM MOCKED DATA')
        usersData = await new Promise((resolve) => resolve(mockedData[requestTarget]))
        data = {data: await usersData.filter(user => user.id ? user.id === userId : user.userId === userId)[0]}
    } else {
        console.log('FROM AXIOS')
        try {
            usersData = await axios({
                method: 'get',
                baseURL: apiURL,
                url: apiTarget,
                responseType: "stream"
            })
            
            data = await usersData.data
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }

    // console.log('DATA from getData:', data)
    return data

}

export default getData;


getData.prototype = {
    requestTarget: PropTypes.oneOf(['USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS', 'USER_PERFORMANCE']).isRequired,
    userId: PropTypes.number.isRequired,
} 