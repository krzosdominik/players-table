import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.ggpredict.dev:8080/restapi'
});
