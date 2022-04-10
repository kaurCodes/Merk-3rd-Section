import React, { useState } from 'react'
import './Article.scss'
import { Articles } from '../../data/Articles'
import { ReactComponent as ChevronLeft } from '../../assets/svg/ChevronLeft.svg'
import { ReactComponent  as ChevronRight} from '../../assets/svg/ChevronRight.svg'
export const Article = () => {

  const [totalArticles, setTotalArticles] = useState(Articles.length)
  const [currentArticle, setCurrentArticle] = useState(0)
  const blog = Articles[currentArticle]
  return (
    <div className='article__section'>
      <div className="article__section-img">
        <img src={blog.img} alt="" />
      </div>
      <div className="article__section-description">
        <div className="article__section-description-left">
        <a href={blog.url}>
          <p className="article_link">
            Read Article
          </p>
        </a>
        <h1>{blog.title}</h1>
        <h2>"{blog.quote}"</h2>
        </div>

        <div className="article__section-navigators">
          <div className="navigator_left active">
              <ChevronLeft/>
          </div>
          <div className="navigator_right disabled">
              <ChevronRight/>
          </div>
        </div>
        
      </div>
     

      
    </div>
  )
}
