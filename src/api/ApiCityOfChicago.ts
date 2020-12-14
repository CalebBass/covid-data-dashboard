import { CityOfChicagoConstants } from './UrlConstants';
import axios from 'axios';

const COC_BASE_URL = `https://data.cityofchicago.org/resource/naz8-j4nc.json?`;

export class ApiCityOfChicago {

    getDataSinceDate = async (dateTimstamp: string): Promise<any> => {
        try{
            const response = await axios.get(COC_BASE_URL + `lab_report_date=${dateTimstamp}`);
            //console.log("Response: ", response.data);
            return response.data;
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
}