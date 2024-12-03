import React from 'react';

function ResultsTable({ results }) {
    const { compliance_score, issues } = results;

    return (
        <>
            <h2>Compliance Score: {compliance_score}%</h2>
            <div className="results-inner-container">
                <table>
                    <thead>
                        <tr>
                            <th>Types</th>
                            <th>Elements</th>
                            <th>Suggestions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue, index) => (
                            <tr key={index}>
                                <td>{issue.type}</td>
                                <td>{issue.element}</td>
                                <td>{issue.suggestion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ResultsTable;
