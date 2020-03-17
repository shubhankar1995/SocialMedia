import React from 'react'

const ArticlePage = ({ match }) => {

    const name = match.params.name;

    return (
        <React.Fragment>
            <h1>This is the {name} article</h1>
            
        </React.Fragment>

    );
}

export default ArticlePage;