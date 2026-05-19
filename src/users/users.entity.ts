export class UsersEntity {
    public readonly id: number;
    public username: string;
    public email: string;
    public password: number;
    public firstName: string;
    public lastName: string;

    constructor(id: number, username: string, email:string, password: number, firstName: string, lastName: string){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}