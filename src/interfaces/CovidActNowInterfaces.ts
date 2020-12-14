
export interface ICovidActNow {
    fips: string,
    country: string,
    state: string,
    county: string,
    level: string,
    lat: number,
    locationId: string,
    long: 0,
    population: number,
    metrics: ICovidActNowMetrics,
    riskLevels: ICovidActNowRiskLevels,
    actuals: ICovidActNowActuals,
    lastUpdatedDate: string
}

interface ICovidActNowIcuDetails {
    currentIcuCovid: number,
    currentIcuCovidMethod: string,
    currentIcuNonCovid: number,
    currentIcuNonCovidMethod: string
}
interface ICovidActNowMetrics {
    testPositivityRatio: number,
    caseDensity: number,
    contactTracerCapacityRatio: number,
    infectionRate: number,
    infectionRateCI90: number,
    icuHeadroomRatio: number,
    icuHeadroomDetails: ICovidActNowIcuDetails 
}

interface ICovidActNowRiskLevels {
    overall: number,
    testPositivityRatio: number,
    contactTracerCapacityRatio: number,
    caseDensity: number,
    infectionRate: number
    icuHeadroomRatio: number,
}

interface ICovidActNowHospitalBeds {
    capacity: number,
    currentUsageTotal: number,
    currentUsageCovid: number,
    typicalUsageRate: number
}

interface ICovidActNowActuals {
    cases: number,
    deaths: number,
    positiveTests: number,
    negativeTests: number,
    contactTracers: number,
    hospitalBeds: ICovidActNowHospitalBeds,
    icuBeds: ICovidActNowHospitalBeds,
    newCases: number,
}