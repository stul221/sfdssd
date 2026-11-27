import LoveLetter from './LoveLetter';
import { useState } from 'react';

const reasons = [
    {
        title: 'Твоя улыбка',
        description: 'Твоя улыбка освещает мне мир, улыбайся чаще, я так её обожаю'
    },
    {
        title: 'Твои глазки',
        description: 'Такие прекрасные, как море, так и хочется в них утонуть'
    },
    {
        title: 'Твоя особенность',
        description: 'Мне нравится в тебе всё, даже то, что ты сама в себе не признаешь'
    },
    {
        title: 'Наши разговоры',
        description: 'Я обожаю разговаривать с тобой часами, это мне никогда не надоест'
    },
    {
        title: 'Твоя красота',
        description: 'Ты безумна красива, как бы ты это не отрицала, но это так!'
    },
    {
        title: 'Спатки',
        description: 'Ложась спать, я чувсвую тебя рядом, спасибо за это прекрасное чувство'
    }
];

function Reasons() {
    const [openedCards, setOpenedCards] = useState([]);

    function handleCardClick(index) {
        setOpenedCards(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    }

    return (
        <>
        <section className="reasons">
            <div className="reasons-content">
                <p className="reasons-subtitle">
                    Несколько маленьких признаний
                </p>

                <h2>Почему ты мне дорога</h2>

                <p className="reasons-description">
                    И это лишь малая часть того, что я хочу тебе сказать...
                </p>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div
                            className={`reason-card ${
                                openedCards.includes(index) ? 'opened' : ''
                            }`}
                            key={index}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="reason-card-inner">
                                <div className="reason-card-front">
                                    <span>♡</span>
                                    <h3>{reason.title}</h3>
                                    <p>Нажми, чтобы узнать</p>
                                </div>

                                <div className="reason-card-back">
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <LoveLetter />
        </>
    );
}

export default Reasons;
