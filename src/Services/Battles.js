import axios from 'axios';
import { api as APIConfig } from '../AppConfig';

//Get Application Information
export const searchForBattles = async (king = false, location = false, type = false) => {
  let query = '';
  if (king)
    query = query + `king=${king}`;
  if (location)
    query = query + `&location=${location}`;
  if (type)
    query = query + `&type=${type}`;

  // hitting the api 
  let request = await axios.get(
    APIConfig.base_url + `/battle/search/?${query}&skip=0&limit=50` ,
  );

  // if the search is success
  if (request.status == 200)
    return request.data.data;
  else return {
    results: []
  }
}
