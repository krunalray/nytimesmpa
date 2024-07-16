import api from '../utils/api';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY_PREFIX = process.env.REACT_APP_API_KEY_PREFIX;

class ArticalDataService{
  getarticleList = async (articalData, callback) => {
        try {
            const res = await api.get(`/${articalData+API_KEY_PREFIX+API_KEY}`);
            return {
              error: null,
              status: 200,
              payload: res.data
            };
          } catch (e) {
            return {
              error: e,
              status: 500,
              payload: []
            };
          } finally {
            callback && callback();
          }
      };
}

export default ArticalDataService;