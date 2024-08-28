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
            <div>
                {portfolio.map(item => (
                    <div id={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Portfolio;