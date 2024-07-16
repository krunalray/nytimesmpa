import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../component/core/GlobalContext";
import { useParams,useNavigate } from "react-router-dom";
var moment = require("moment");

const ArticleInfo = () => {
    const navigate = useNavigate();
  const { articleId, days } = useParams();
  const { articleDataServices } = useContext(GlobalContext);
  const [articleInfo, setArticalInfo] = useState();

  const init = async () => {
    const { payload, status } = await articleDataServices.getarticleList(days);
    if (status === 200) {
      if (payload.results.length > 0) {
        payload.results.map((item) => {
          if (item.id == articleId) {
            setArticalInfo(item);
          }
        });
      }
    }
  };
  const onBtnClick = () => {
    navigate('/')
  }
  useEffect(() => {
    init();
  },[]);

  if (!articleInfo) {
    return <div />;
  }

  return (
    <div className="container mb-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              {articleInfo.media && articleInfo.media.length > 0 && (
                <div>
                  {articleInfo.media[0]["media-metadata"].length > 0 && (
                    <img
                      src={articleInfo.media[0]["media-metadata"][2].url}
                      alt="..."
                    />
                  )}
                  
                  
                </div>
              )}
            </div>
            <div className="col-sm-8">
              <div className="ms-4">
                <h1>
                  <strong>{articleInfo.title}</strong>
                </h1>
                <p className="fs-5">{articleInfo.abstract}</p>
                {articleInfo.byline && (
                    <div className="mt-3">
                      <div className="row">
                        <div className="col-sm-12">
                          <strong className="byline">
                            {articleInfo.byline}
                          </strong>
                        </div>
                        <div className="col-sm-12">
                          {articleInfo.published_date &&
                            moment(articleInfo.published_date).format("LL")}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
            <div className="col-sm-4">
                {articleInfo.media && articleInfo.media.length > 0  && (
                    <div className="caption text-secondary mt-2">
                      {articleInfo.media[0].caption + " "}
                      {articleInfo.media[0].caption &&
                        articleInfo.media[0].copyright}
                    </div>
                  )}
            </div>
            <div className="col-sm-8 d-flex align-items-end justify-content-end">
                 <button className="btn btn-outline-primary btn-sm" onClick={onBtnClick}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
