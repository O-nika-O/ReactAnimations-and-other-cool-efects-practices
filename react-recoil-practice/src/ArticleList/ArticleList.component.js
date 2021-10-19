import React from 'react';
import Article from '../Article/Article.component';
import './ArticleList.style.scss';
import { useRecoilValueLoadable } from 'recoil'
import { articleQuery } from '../shared/globalState';


const ArticleList = () => {
    // const [articles, setArticles] = useRecoilState(articleState);
    const articles = useRecoilValueLoadable(articleQuery);

    const renderArticles = () => {
        switch (articles.state) {
            case 'hasValue':
                return articles.contents.map(article => (

                    <Article 
                        key={ article.id}
                        item={ article }
                    />
                ));
                
            default:
            case 'loading':
            case 'hasError':
                    return <div>Loading...</div>
        }
    }
    // // Fetch all articles when the component mounts for the first time
    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         const result = await ArticleService.getAll();

    //         setArticles(result);
    //     }

    //     fetchArticles();
    // }, []);

    return (
        <div className="ArticleList">
                { renderArticles() }
        </div>
    );
};

export default ArticleList;
