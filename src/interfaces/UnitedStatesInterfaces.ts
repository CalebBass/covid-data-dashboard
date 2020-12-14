

export interface IRawStatesData {
    state: string;
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    deathsPerOneMillion: number;
    population: number;
    recovered: number;
    active: number;
    tests: number;
    todayDeaths: number;
  }
  
  export interface IFormattedStatesData {
    state: string;
    deaths: string;
    todayCases: string;
    recovered: string;
    todayDeaths: string;
    active: string;
    tests: string;
    cases: string;
    updated: string;
  }
  
  export interface IRawUSCityData {

    city: string,
    todayCases: number
  }

  
  export interface IUsaLastThirstyDays {
    
  timeline: {
      cases: any[],
      recovered: any[],
      deaths: any[]
  }
}

export interface ICdcData {
  conf_cases: string,
  conf_death: string,
  created_at: string,
  new_case: string,
  new_death: string,
  pnew_case: string,
  pnew_death: string,
  prob_cases: string,
  prob_death: string,
  state: string,
  submission_date: string,
  tot_cases: string,
  tot_death: string
}

export interface IStateDictionary {
  key: string,
  value: string
}