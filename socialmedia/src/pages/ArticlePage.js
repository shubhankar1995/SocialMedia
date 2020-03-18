import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticleList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10)});
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <React.Fragment>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph,key )=> (
                <p key = {key}>{paragraph}</p>
            ))}

            <h3>Other Articles</h3>

            <ArticlesList articles={otherArticles} />
        </React.Fragment>

    );
}

export default ArticlePage;