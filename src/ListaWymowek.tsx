import React from 'react';

interface ListProps {
    excusesList: Array<string>;
}

const ExcuseList: React.FC<ListProps> = ({ excusesList }) => {
    return (
        <div>
            <h3>Excuses:</h3>
            <ul>
                {excusesList.map((excuse, index) => (
                    <li key={index}>{excuse}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExcuseList;
