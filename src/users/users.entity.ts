export class UsersEntity {
    public readonly id: number;
    public readonly username: string;
    public readonly email: string;
    public readonly password: number;
    public readonly firstName: string;
    public readonly lastName: string;

    constructor(id: number, username: string, email:string, password: number, firstName: string, lastName: string){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}