import axios from 'axios';
import { api as APIConfig } from '../AppConfig';
//Utils
import { getAuthToken } from '../Utils/Auth'

//Get Application Information
export const getApplicationDetails = async (applicationId) => {
  let request = await axios.get(
    APIConfig.base_url + '/app/v1/dashboard/application/' + applicationId,
    {
      headers: {
        'Authorization': getAuthToken()
      }
    }
  );

  return request;
}
