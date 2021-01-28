function Skills() {
    return (
        <div className="mainBlock">
            <div className="mainBlockMargin">
                <section>
                    <h2 className="headingH2">スキル(業務で使用)</h2>
                    <table>
                        <tbody className="tableSimple">
                            <tr><th>Java</th><td>4か月</td></tr>
                            <tr><th>Spring　Framework</th><td>4か月</td></tr>
                            <tr><th>JavaScript</th><td>4か月</td></tr>
                        </tbody>
                        <br></br>
                        <br></br>
                        <h2 className="headingH2">スキル(独学)</h2>
                        <tbody className="tableSimple">
                            <tr><th>Python</th><td>月</td></tr>
                            <tr><th>Django</th><td>月</td></tr>
                            <tr><th>React</th><td>月</td></tr>
                            <tr><th>AWS</th><td>月</td></tr>
                            <tr><th>Docker</th><td>月</td></tr>
                            <tr><th>CircleCI</th><td>月</td></tr>
                            <tr><th>Postman</th><td>月</td></tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}

export default Skills;