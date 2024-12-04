import React from 'react';

function ResultsTable({ results }) {
    const { complianceScore, issues } = results;

    return (
        <>
            <h2 className='score-title'>Compliance Score: {complianceScore}%</h2>
            {issues?.length >= 1 && <div className="results-inner-container">
                <table className='result-table'>
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
            </div>}
        </>
    );
}

export default ResultsTable;
