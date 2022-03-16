import { HttpClient } from "@angular/common/http";
import { Injector } from "@angular/core";
import { AuthService } from "src/app/proxy/auth.service";
import { UtilityService } from "../services/utility.service";


export abstract class BaseComponent {

    //#region variables
    utility: UtilityService
    HttpClient: HttpClient;
    AuthService:AuthService
    constructor(injector: Injector) {
        this.utility = injector.get(UtilityService);
        this.HttpClient = injector.get(HttpClient);
        this.AuthService = injector.get(AuthService);

    }

    serviceIcon(service){
        return `assets/icon/${service.service_type}.png`
    }

    get isUser(){
        return this.AuthService.isUser()
    }
    get isOwner(){
        return this.AuthService.isOwner()
    }
    get getUserName(){
        return localStorage.getItem('userName')
    }
}