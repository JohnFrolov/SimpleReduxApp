/**
 *  @prop {string} isRestActive true - restApi is active, false - otherwise.
 */
interface ApplicationConfig {
    isRestActive: boolean;
}

export const AppConfig: ApplicationConfig = {
    isRestActive: true
};