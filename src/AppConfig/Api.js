const dev = {
  base_url: "https://gotbackend.herokuapp.com/api/v1/"
};

const staging = {
  base_url: "https://gotbackend.herokuapp.com/api/v1/"
};

const uat = {
  base_url: "https://gotbackend.herokuapp.com/api/v1/"
}

const production = {
  base_url: "https://gotbackend.herokuapp.com/api/v1/"
}

let configVariables = {
  ...dev
};

//Change the config for production and development
switch (process.env.REACT_APP_BUILD_ENV) {
  case "staging":
    configVariables = {
      ...staging
    };
    break;
  case "uat":
    configVariables = {
      ...uat
    };
    break;
  case "production":
    configVariables = {
      ...production
    };
    break;
  default:
    configVariables = {
      ...dev
    };
    break;
}

// ecporting the defaults 
export default {
  ...configVariables
}
