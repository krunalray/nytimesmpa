import React from 'react';
import Home from './pages/home';
import ArticleInfo from './pages/article_info';

const AppRoutes = [  
{
    path: '',
    element: <Home />
    },
  {
    path: 'article_info/:articleId/:days',
    element: <ArticleInfo />
  }
];

export default AppRoutes;
