import { createContext } from 'react';

const GlobalContext = createContext({
  articleDataServices: null,
  articleList: null,
  setarticleList: () => null,
  articleInfo: null,
  setarticleInfo: () => null,
  setDays: () => null,
  days:null
});

export default GlobalContext;
