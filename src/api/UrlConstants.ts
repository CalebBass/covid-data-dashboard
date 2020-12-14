
export class UrlConstants {

    // corona
    public static BASE_URL = `https://corona.lmao.ninja/v2/`;
    public static GET_STATES = `https://corona.lmao.ninja/v2/states?`;
    public static GET_STATES_NYT = `https://corona.lmao.ninja/v2/nyt/states?state`;
    public static GET_STATE_NYT = `https://corona.lmao.ninja/v2/states/`;
    public static GET_COUNTIES_NYT = `https://corona.lmao.ninja/v2/nyt/counties?`;
    public static GET_USA_NYT = `https://corona.lmao.ninja/v2/nyt/usa`;
    public static GET_USA = `https://corona.lmao.ninja/v2/all?`;
    public static GET_ALL_COUNTRIES = `https://corona.lmao.ninja/v2/countries?`;
    public static GET_COUNTRY = `https://corona.lmao.ninja/v2/countries/`;
    public static GET_ALL_JHU = `https://corona.lmao.ninja/v2/jhucsse`;
    public static GET_ALL_COUNTIES_JHU = `https://corona.lmao.ninja/v2/jhucsse/counties`;
    public static GET_COUNTY_JHU = `https://corona.lmao.ninja/v2/jhucsse/counties/`;
    public static GET_HISTORICAL_JHU = `https://corona.lmao.ninja/v2/historical?`;
    public static GET_HISTORICAL_USA_30DAYS = `https://corona.lmao.ninja/v2/historical/us?lastdays=30`;
    public static GET_US_ALL_YESTERDAY = `https://corona.lmao.ninja/v2/all?yesterday`;
    public static GET_STATES_YESTERDAY = `https://corona.lmao.ninja/v2/states?sort&yesterday`;
    public static GET_STATE_YESTERDAY = `https://corona.lmao.ninja/v2/states/:states?yesterday=true`;


    // covid tracking
    public static GET_STATES_DAILY_CT = `https://covidtracking.com/api/states/daily`;
    public static GET_US_CURRENT_CT = `http://covidtracking.com/api/us`;
    public static GET_US_DAILY_CT = `https://covidtracking.com/api/us/daily`;


    // vespa - https://github.com/vespa-engine/cord-19/blob/master/cord-19-queries.md


    // CDC ---> https://dev.socrata.com/foundry/data.cdc.gov/9mfq-cb36

    public static GET_ALL_USA_CDC = ` https://data.cdc.gov/resource/9mfq-cb36.json`;


    
}


const COC_BASE_URL = `https://data.cityofchicago.org/resource/naz8-j4nc.json?`;

export class CityOfChicagoConstants {







}