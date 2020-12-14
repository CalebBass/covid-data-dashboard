
// .NET 5.0 API

const authApiDomain = 'https://localhost:44329/';
const covidApiDomain = 'https://localhost:44337/';

export const UserActions = {

    CreateUser:`${authApiDomain}api/v1.0/User`,
    Login: '',


}

export const JwtToken = {
    Issue:  `${authApiDomain}api/v1.0/JwtToken/Issue/CovidApi`,
    Refresh: ''
}

export const CovidTrackingProject = {
    GetUsaCurrent: `${covidApiDomain}api/v1.0/CovidTrackingProject/usa/current`,
    GetByState: `${covidApiDomain}api/v1.0/CovidTrackingProject/states/`
}
