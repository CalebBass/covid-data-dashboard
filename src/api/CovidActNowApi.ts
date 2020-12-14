import axios from 'axios';
import { ICovidActNow } from '../interfaces/CovidActNowInterfaces';

export class CovidActNowApi {

        public readonly COVID_ACT_NOW_BASE_URL = `https://api.covidactnow.org/v2/`;
        public readonly COVID_ACT_NOW_API_KEY = `a3104fbc4b7542bcb67312b714b00255`;

    getStatesLatest = async (): Promise<ICovidActNow[] | undefined> => {
        try{
            const response = await axios.get<ICovidActNow[]>(this.COVID_ACT_NOW_BASE_URL + `states.json?` + `apiKey=${this.COVID_ACT_NOW_API_KEY}`);
            //console.log("Response: ", response.data);
            return response.data;
        }
        catch (error){
            console.log("Error: ", error)
        }
    }

    getStateLatest = async (state: string): Promise<ICovidActNow> => {
        try{
            const response = await axios.get<ICovidActNow>(this.COVID_ACT_NOW_BASE_URL + `state/${state.toUpperCase()}.json?` + `apiKey=${this.COVID_ACT_NOW_API_KEY}`);
            //console.log("Response: ", response.data);
            if (response.data === undefined){
                return {} as ICovidActNow;
            }
            return response.data;
        }
        catch (error){
            console.log("Error: ", error);
            return {} as ICovidActNow;
        }
    }

}


