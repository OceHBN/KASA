import { useState } from 'react';
import '../styles/main.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button
                className="collapse-header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} />
            </button>

            {isOpen && (
                <div className="collapse-content">
                    {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
            )}
        </div>
    );
}

export default Collapse;