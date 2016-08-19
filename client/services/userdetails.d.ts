export interface userdetails {
    userid: string;
    username: string;
    password: string;
    usertype: string;
    loggedin: boolean;
}
export declare class Userdetails implements userdetails {
    userid: string;
    username: string;
    password: string;
    usertype: string;
    loggedin: boolean;
    constructor();
    isLoggedin(): boolean;
    usertypeDetails(): string;
    hasUsername(): string;
    getUserdetails(): {
        userid: string;
        username: string;
        password: string;
        usertype: string;
        loggedin: boolean;
    };
    resetDetails(): void;
    setDetails(data: any): void;
    returnArray(data: any): any;
}
