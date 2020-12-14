import axios from 'axios';
import { UrlConstants } from './UrlConstants';

export class ApiService {

    getStates = async (): Promise<any> => {
        try{
            const response = await axios.get(UrlConstants.GET_STATES);
            //console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }

    getAllUnitedStatesNyt = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_USA_NYT);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }

    getStatesNyt = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_STATES_NYT);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getStateNyt = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_STATE_NYT);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getAllCountries = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_ALL_COUNTRIES);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getCountry = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_COUNTRY);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getHistoricalJhu = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_HISTORICAL_JHU);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getCountiesJhu = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_ALL_COUNTIES_JHU);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getCountyJhu = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_COUNTY_JHU);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
    getAllJhu = async () => {
        try{
            const response = await axios.get(UrlConstants.GET_ALL_JHU);
            console.log("Response: ", response.data);
        }
        catch (error){
            console.log("Error: ", error)
        }
    }
}