import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './ArticleContext';
import Header from './Header';
import ArticleForm from './ArticleForm';
import ArticleList from './ArticleList';
import Footer from './Footer';
import Login from './Login';
import './Login.css'
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Route pour la page de connexion */}
                <Route path="/" element={<Login />} />
                {/* Route pour la page du blog, accessible après connexion */}
                <Route
                    path="/blog"
                    element={
                        <ArticleProvider>
                            <div className="App">
                                <Header />
                                <ArticleForm />
                                <ArticleList />
                                <Footer />
                            </div>
                        </ArticleProvider>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
