import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
abstract class LocationService {
    constructor(private http: Http) { }

    protected Countries() {
        return this.http.get('/api/location/country');
    }

    protected Provinces() {
        return this.http.get('/api/location/province');
    }

    protected Cities() {
        return this.http.get('/api/location/city');
    }

    protected add(location: ILocation) {
        return this.http.post('/api/location', location);
    }

    protected update(location: ILocation) {
        return this.http.put('/api/location/' + location.id, location);
    }

    protected delete(id: number) {
        return this.http.delete('/api/location/' + id);
    }
}

export class CountryService extends LocationService {
    public getCountries() {
        return this.Countries();
    }

    addCountry(country: ICountry) {
        return this.add(country);
    }

    updateCountry(country: ICountry) {
        return this.update(country);
    }

    deleteCountry(id: number) {
        return this.delete(id);
    }
}

export class ProvinceService extends LocationService {
    public getProvinces() {
        this.Provinces();
    }

    public addProvince(province: IProvince) {
        return this.add(province);
    }

    public updateProvince(province: IProvince) {
        return this.update(province);
    }

    public deleteProvince(id: number) {
        return this.delete(id);
    }
}

export class CityService extends LocationService {
    public getCities() {
        return this.Cities();
    }

    public addCity(city: ICity) {
        return this.add(city);
    }

    public updateCity(city: ICity) {
        return this.update(city);
    }

    public deleteCity(id: number) {
        return this.delete(id);
    }
}