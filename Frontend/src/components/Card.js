import React, { useState } from 'react';
import Tags from './Tags';

const Card = ({ title, content, maxContentLength, link, tags }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCollapse = () => {
        setExpanded(false);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {expanded || content.length <= maxContentLength ? (
                    <p className="card-text">{content}</p>
                ) : (
                    <div>
                        <p className="card-text">{`${content.substring(0, maxContentLength)}...`}</p>
                        <div className="d-flex flex-wrap">
                            {tags.map((tag, tagIndex) => (
                                <Tags key={tagIndex} tag={tag} />
                            ))}
                        </div>
                        <button className="btn mt-2" onClick={handleExpand} style={{ backgroundColor: "#6c757d", marginRight: '5px' }}>
                            Read more
                        </button>
                        <a className="btn btn-success mt-2" href={link} style={{ backgroundColor: "#007bff" }}>
                            Open
                        </a>
                    </div>
                )}
                {expanded && (
                    <button className="btn btn-danger ml-3" onClick={handleCollapse}>
                        Collapse
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;