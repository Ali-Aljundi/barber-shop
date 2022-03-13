import { Injector } from "@angular/core";
import { UtilityService } from "../services/utility.service";


export abstract class BaseComponent {

    //#region variables
    utility: UtilityService
    constructor(injector: Injector) {
        this.utility = injector.get(UtilityService);
    }

    serviceIcon(service){
        return `assets/icon/${service.service_type}.png`
    }
}