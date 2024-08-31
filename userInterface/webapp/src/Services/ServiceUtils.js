import { API_ENDPOINTS, API_ENVIRONMENT } from "../../Environments/config";
import { BASE_PATH, DEPLOYED_ENVIRONMENT, ENVIRONMENTS } from '../../Environments/environment';
import axios from "axios";
import { BehaviorSubject } from "rxjs";



const loaderSubject = new BehaviorSubject();
const axiosInstance = axios.create();
const unauthorizedEvent = new Event('unauthorized');
let unauthorizedEventListenerAdded = false;

const setupUnauthorizedEventListener = () => {
  if (!unauthorizedEventListenerAdded) {
    document.addEventListener('unauthorized', () => {
    });
    unauthorizedEventListenerAdded = true;
  }
};

const get = (urlKey, showLoader = true,queryParams) => {
  setupUnauthorizedEventListener();
  let url;
  const environment = API_ENVIRONMENT[urlKey] || DEPLOYED_ENVIRONMENT;
  if (environment === "local") {
    url = BASE_PATH + `/Assets/json/${urlKey}.json`;
  } else {
    url = ENVIRONMENTS[environment].baseurl + API_ENDPOINTS[urlKey];
    if (queryParams){
      url = url + '?' + queryParams;
    }
  }
  loaderSubject.next(showLoader);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  return axiosInstance.get(url, config)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        document.dispatchEvent(unauthorizedEvent);
      //  if(!unauthorizedEventListenerAdded){
      //   document.addEventListener('unauthorized', () => {
      //     alertService.warning("Your Session Expired ,Please Login to continue")
      //   });
      //   unauthorizedEventListenerAdded = true;
      // }
      // document.dispatchEvent(unauthorizedEvent);
      }
    });
};

const post = (urlKey, params, showLoader = true, cancelToken = undefined) => {
  setupUnauthorizedEventListener();
  const environment = API_ENVIRONMENT[urlKey] || DEPLOYED_ENVIRONMENT;
  if (environment === "local") return get(urlKey);
  let url = ENVIRONMENTS[environment].baseurl + API_ENDPOINTS[urlKey];
  loaderSubject.next(showLoader);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (cancelToken !== undefined) {
    config.cancelToken = cancelToken;
  }

  return axios.post(url, params, config)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        // if(!unauthorizedEventListenerAdded){
        //   document.addEventListener('unauthorized', () => {
        //     alertService.warning("token expired")
        //   });
        //   unauthorizedEventListenerAdded = true;
        // }
        document.dispatchEvent(unauthorizedEvent);
      }
    });
};

const put = (urlKey, params, showLoader = true, cancelToken = undefined) => {
  setupUnauthorizedEventListener();
  const environment = API_ENVIRONMENT[urlKey] || DEPLOYED_ENVIRONMENT;
  if (environment === "local") return get(urlKey);
  let url = ENVIRONMENTS[environment].baseurl + API_ENDPOINTS[urlKey];
  loaderSubject.next(showLoader);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (cancelToken !== undefined) {
    config.cancelToken = cancelToken;
  }

  return axios.put(url, params, config)
    .catch(error => {
      if (error.response && error.response.status === 401) {

        document.dispatchEvent(unauthorizedEvent);
      }
    });
};

const ServiceUtils = {
  getRequest: get,
  postRequest: post,
  putRequest: put
};

export { ServiceUtils };



