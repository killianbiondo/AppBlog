// src/Articles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/api/articles')  // Met à jour avec l'URL correcte
            .then(response => {
                console.log('Réponse brute:', response); // Affiche la réponse brute
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    console.error('Erreur dans la réponse:', data.error);  // Affiche les erreurs reçues
                    setError(true);
                } else {
                    setArticles(data);
                    setLoading(false);  // Arrête l'état de chargement
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des articles:', error);
                setError(true);
            });
    }, []);



    if (loading) {
        return <p>Chargement des articles...</p>;
    }

    if (error) {
        return <p>Une erreur est survenue lors de la récupération des articles.</p>;
    }

    return (
        <div>
            <h1>Mon Blog Strapi</h1>
            <h2>Articles du Blog</h2>
            {articles.length > 0 ? (
                articles.map(article => (
                    <div key={article.id}>
                        <h3>{article.title || 'Titre indisponible'}</h3>
                        <p>{article.content || 'Contenu indisponible'}</p>
                    </div>
                ))
            ) : (
                <p>Aucun article trouvé.</p>
            )}
        </div>
    );
};

export default Articles;
