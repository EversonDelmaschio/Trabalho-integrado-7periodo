export class AppConfig{
    public static AMBIENTE: string = 'dev';

    public static BASE_URL(): string {
        if(this.AMBIENTE == 'dev'){
            return 'https://loja-virtual-api.herokuapp.com/';
        }else{
            return 'retornar a url de produção aqui ...';
        }
    }
}