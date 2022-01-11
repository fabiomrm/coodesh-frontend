export interface IPacient {
    gender: string;
    name: IName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: IBirthDate;
    phone: string;
    cell: string;
    id: IId;
    picture: IPicture;
    nat: string;
}

interface IName {
    title: string;
    first: string;
    last: string;
}

interface ILocation {
    street: IStreet;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordenates: ICoordenates;
    timeZone: ITimeZone;
}

interface IStreet {
    number: number;
    name: string;
}

interface ICoordenates {
    latitude: number;
    longitude: number;
}

interface ITimeZone {
    offset: string;
    description: string;
}

interface ILogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;

}

interface IBirthDate {
    date: Date;
    age: number;
}

interface IId {
    name: string;
    value: number;
}

interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}