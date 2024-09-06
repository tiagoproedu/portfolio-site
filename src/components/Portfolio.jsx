import { useEffect, useState } from "react";

function Portfolio() {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/tiagoproedu/repos`)
            .then(response => response.json())
            .then(data => {
                setPortfolio(data);
            })
            .catch(error => {
                console.error("Erro ao consumir a API:", error);
            });
    }, []);

    return (
        <>
            <h1>Portfolio</h1>
            <div className="portfolio-boxes">
                {portfolio.map(item => (
                    <div id={item.id} className="portfolio-box">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button><a href={item.html_url}>Acessar</a></button>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Portfolio;