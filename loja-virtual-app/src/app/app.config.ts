export class AppConfig{
    public static AMBIENTE: string = 'dev';

    public static BASE_URL(): string {
        if(this.AMBIENTE == 'dev'){
            return 'http://localhost:1337/';
        }else{
            return 'retornar a url de produção aqui ...';
        }
    }
}