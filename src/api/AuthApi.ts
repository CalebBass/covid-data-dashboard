import axios from 'axios';
import { JwtToken } from './ApiConstants';
interface IUser {



}

export class AuthApi {

    getAccessToken = async (username: string, password: string) => {

        try{
            const response = await axios.post(JwtToken.Issue, 
            { 
                headers: {
                    'Access-Control-Allow-Origin': 'https://localhost:3000',
                    "Authorization": "Basic " + btoa(username + ':' + password) 
                },

                // withCredentials: true 
            });

            console.log("Response: ", response.data);
            return response.data.access_token;
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    


    createUser = async (user: IUser, token: string) => {

        try{
            const response = await axios.post('', {
                headers: {'Authorization': `Bearer ${token}`}
            })

            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }


    login = async () => {

        try{
            const response = await axios.post('', {})

            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }



}