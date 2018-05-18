export class AppConfig {
    public static AMBIENTE = 'prd';

    public static BASE_URL(): string {
        if (this.AMBIENTE === 'dev') {
            return 'http://localhost:1337/';
        } else {
            return 'https://loja-virtual-api.herokuapp.com/';
        }
    }
}