import axios from 'axios';



export class ApiCdcDemographics {

    public readonly CDC_DEM_BASE_URL = `https://data.cdc.gov/resource/vbim-akqf.json?`;

    getAlleData = async () => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getDataSinceData = async (date: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `cdc_report_dt=${date}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }
    
    getAgeGroup = async (ageRange: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `age_group=${ageRange} Years`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getBySex = async (sex: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `sex=${sex}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getByHospitalStatus = async (status: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `hops_yn=${status}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getByIcuStatus = async (status: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `icu_yn=${status}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getByEthnicity = async (ethnicity: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `race_ethnicity_combined=${ethnicity}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }

    getByComorbidity = async (comorbidityYn: string) => {
        try{
            const response = await axios.get(this.CDC_DEM_BASE_URL + `medcond_yn=${comorbidityYn}`);
            return response.data;
        } catch (error){
            console.log("Cdc Api Error: ", error);
        }
    }



}

