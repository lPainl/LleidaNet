import { containDoubleZero, containPlus, isNumber } from "../utils/validators";

export default class TemplateService {
  public static async validatePhoneType(phone: string): Promise<string> {
    const havePlus = containPlus(phone);
    if (havePlus || containDoubleZero(phone)) {
      this.validateNumber(havePlus ? phone.slice(4) : phone.slice(3));
      return "International";
    }
    this.validateNumber(phone);
    return "National";
  }

  public static async sendSms(phone: string, text: string): Promise<void> {
    await fetch("api_endpoint",
      {
        method: 'POST',
        body: JSON.stringify({
          sms: {
            user: "user_Credentials",
            password: "pass_Credentials",
            dst: {
              num: [encodeURI(phone)]
            },
            txt: text
          }
        })
      })
      .catch((err) => {
        console.log(err)
        return Promise.reject();
      });
    return Promise.resolve();
  }

  private static validateNumber(phoneToValidate: string) {
    if (!isNumber(+phoneToValidate)) {
      throw Error();
    }
  }
}
