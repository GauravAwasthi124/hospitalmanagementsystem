import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfileService } from "../profile/profile.service";
import { TokenserviceService } from "../tokenservice/tokenservice.service";


@Injectable({
    providedIn: 'root'
})
export class ShairedService {
    valid!: boolean;
    constructor(private http: HttpClient, private profile: ProfileService) { }
    tokenAuthentication() {
        // this.profile.profileUser().subscribe({
        //     next: (res: any) => {
        //         if (!res) {
        //             this.valid = false;
        //         }
        //     }
        // });
        // if(this.valid =false) {
        //     this.profile.profileUser().subscribe({
        //         next: (res: any) => {
        //         }
        //     });
        // }
    }
}
