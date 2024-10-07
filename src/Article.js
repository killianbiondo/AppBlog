import React from 'react';

const Article = ({ title, content, author }) => {
    return (
        <div className="article">
            <h2>{title}</h2>
            <p>{content}</p>
            <p><strong>Auteur:</strong> {author}</p>
        </div>
    );
};

export default Article;