function Carreira() {
    return (
        <div className="carreira">
            <h1>Carreira</h1>
            <div className="expeform">
                <div className="experiencia">
                    <h2>Experiência</h2>
                    <div className="exp">
                        <h3>Suporte Técnico | 3A Contabilidade e Assessoria LTDA | 07/2022 - 06/2024</h3>
                        <ul>
                            <li>Manutenção de computadores</li>
                            <li>Suporte ao colaborador</li>
                            <li>Gerenciamento de servidores</li>
                        </ul>
                    </div>
                </div>
                <div className="form-acad">
                    <h2>Formação Acadêmica</h2>
                    <div className="form">
                        <h3>Análise e Desenvolvimento de Sistemas</h3>
                        <p><b>Local:</b> Centro Universitário Unifametro</p>
                        <p><b>Período:</b> 01/2023 - 07/2025</p>
                    </div>
                    <div className="form">
                        <h3>Desenvolvimento Full Stack</h3>
                        <p><b>Local:</b> Digital College</p>
                        <p><b>Período:</b> 06/2023 - 07/2024</p>
                    </div>
                </div>
            </div>
            <div className="ativ-comp">
                <h2>Atividades Complementares</h2>
                <div className="ativ">
                    <h3>Projeto de Extensão | Unifametro | 01/2024 - 06/2024</h3>
                    <p>Nesse projeto desenvolvemos um aplicativo web que tinha como principal função descobir se as
                        informações da empresa do cliente que usasse o aplicativo tinham sido vazadas ou de seus colaboradores.</p>
                </div>
            </div>
            <div className="habilidades">
                <h2>Tecnologias</h2>
                <ul className="tecs">
                    <li><img src="assets/icons/HTML5.svg" alt="HTML5" /></li>
                    <li><img src="assets/icons/CSS3.svg" alt="CSS3" /></li>
                    <li><img src="assets/icons/JavaScript.svg" alt="JavaScript" /></li>
                    <li><img src="assets/icons/React.svg" alt="React" /></li>
                    <li><img src="assets/icons/Python.svg" alt="Python" /></li>
                    <li><img src="assets/icons/Node.js.svg" alt="Node.js" /></li>
                    <li id="sqlserver"><img src="assets/icons/Microsoft SQL Server.svg" alt="SQL Server" /></li>
                </ul>
            </div>
            <div className="certificacoes">

            </div>
        </div>
    );
}

export default Carreira;