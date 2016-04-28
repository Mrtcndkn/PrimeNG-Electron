import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Car} from '../../app/cars/car';
import 'rxjs/Rx';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium() {
        return this.http.get('./cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}
