import axios from "axios";
import Algorithmia from "algorithmia";

const URL =
  "http://peoplecountingapi-people-counting-api.apps.us-west-1.online-starter.openshift.com";

export function register(body) {
  return axios.post(`http://peoplecountingapi-people-counting-api.apps.us-west-1.online-starter.openshift.com/register/`, body);
}

export function count() {

  var input = {
    image: "https://kay.tmit.bme.hu/~kovacsg/peoplecounting/DJI_0554_0.png"
  };
  Algorithmia.client("simXS0H51lerCR84VnapyHxmm8F1")
    .algo("deeplearning/CrowdCounter/0.3.0?timeout=300") // timeout is optional
    .pipe(input)
    .then(function(response) {
      return(response.get());
      // console.log();
    });
}
