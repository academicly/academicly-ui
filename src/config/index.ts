import devConfig from './dev.json';
import testConfig from './test.json';
import prodConfig from './prod.json';

/**
 * Should be used for loading runtime specific configs
 * For built time config, use .env files
 */
class Config {
  public getEnvConfig() {
    if (process.env.NODE_ENV === 'production') {
      return this.prodConfig();
    }

    if (process.env.NODE_ENV === 'development') {
      return this.devConfig();
    }

    const ciEnv = process.env.CI;
    if (
      (typeof ciEnv === 'boolean' && ciEnv === true) ||
      (typeof ciEnv === 'string' && ciEnv.toLowerCase() === 'true')
    ) {
      return this.testConfig();
    }
  }

  private devConfig() {
    return devConfig || null;
  }
  private testConfig() {
    return testConfig || null;
  }
  private prodConfig() {
    return prodConfig || null;
  }
}

const configInstance = new Config();
export default configInstance.getEnvConfig();
