export class MiteshHelpPromise{

    constructor(num: number){
        let val:string = "default";
        this.someFunction(num).then(
            value => {
                val = value;
                console.log(val)
            });
        console.log(val);
    }

    public someFunction(num:number):Promise<string>{
        if(num<10){
            return null;
        }else if(num>=10){
            return new Promise<string>((resolve, reject) => {
                setTimeout( () => {
                    resolve("some val, num is -> "+num);
                }, 3000);
            });
        }
    }

}

new MiteshHelpPromise(12);
