import axios from 'axios';
import { ICurrentState, IUsaCurrentCTP } from '../interfaces/CovidApiInterfaces';
import { CovidTrackingProject } from './ApiConstants'

export class CovidApi {



    getUsaCurrent = async (token: string): Promise<IUsaCurrentCTP | undefined>=> {

        try{
            const response = await axios.get(CovidTrackingProject.GetUsaCurrent, {
                headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://localhost:3000'},
            });

            console.log("Response: ", response.data);

            return response.data;
        }
        catch (error){
            console.log("Error: ", error)
        }
    }

    getStateCurrent = async (token: string, state: string): Promise<ICurrentState | undefined> => {

        try{
            const response = await axios.get(CovidTrackingProject.GetByState + `${state}/current.json`, {
                headers: {'Authorization': `Bearer ${token}`}
            })

            console.log("Response: ", response.data);

            return response.data;
        }
        catch (error){
            console.log("Error: ", error)
        }
    }

    
}