
import Reasons from './Reasons';
import { useState } from 'react';

function Intro() {
    const [stage, setStage] = useState('intro');

    function handleOpen() {
        setStage('envelope');

        setTimeout(() => {
            setStage('story');
        }, 3000);
    }

    return (
        <>
            {(stage === 'intro' || stage === 'envelope') && (
                <section className="intro">

                    {stage === 'intro' && (
                        <div className="intro-content">
                            <p className="intro-subtitle">
                                Маленькая вселенная специально для тебя
                            </p>

                            <h1>
                                Для моей
                                <span>замечательной девочки</span>
                            </h1>

                            <p className="intro-date">
                                1 декабря 2025 — 1 декабря 2026
                            </p>

                            <button
                                className="intro-button"
                                onClick={handleOpen}
                            >
                                Открыть моё сердце
                            </button>
                        </div>
                    )}

                    {stage === 'envelope' && (
                        <div className="envelope-container">
                            <div className="envelope">
                                <div className="envelope-body">
                                    <div className="letter">
                                        Моей любимой девочке ❤️
                                    </div>

                                    <div className="envelope-flap"></div>
                                </div>
                            </div>
                        </div>
                    )}

                </section>
            )}

            {stage === 'story' && <Reasons />}
        </>
    );
}

export default Intro;
