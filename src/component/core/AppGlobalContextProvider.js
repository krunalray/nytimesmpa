import React, { useMemo, useState } from 'react';

import GlobalContext from './GlobalContext';
import articleDataService from '../../services/ArticleDataServices';

const GlobalDataProvider = ({ children }) => {
  
  const [articleList, setarticleList] = useState();
  const [articleInfo, setarticleInfo] = useState();
  const [days, setDays] = useState(1);
  const [articleDataServices] = useState(new articleDataService());
    
  const ctxData = useMemo(() => ({days, setDays, articleList,setarticleList,articleInfo,setarticleInfo,articleDataServices}),[articleList,setarticleList,articleInfo,setarticleInfo,articleDataServices]);

  return <GlobalContext.Provider value={ctxData}>{children}</GlobalContext.Provider>;
};

export default GlobalDataProvider;
