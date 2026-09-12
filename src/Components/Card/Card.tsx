import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Card.css'
import ScrollAnimation from 'react-animate-on-scroll';

interface Camp {
    id: number;
    cover: string;
    name: string;
    Location: string;
    BeginDate: string;
    EndDate: string;
    Price: {
        adultChildCombination: { type: string; price: string }[];
    };
    description: string;
}

interface CardProps {
    camp: Camp;
}

const Card: React.FC<CardProps> = ({ camp }) => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
            <div className='card'>
                <div className="card-content">
                    <div className="card-img">
                        <img src={camp.cover} alt={camp.name} />
                    </div>
                    <div className="card-body">
                        <Link to={`/Training/${camp.id}`}><h3 className="card-title">
                            {camp.name}
                        </h3>
                        </Link>
                        <Link to={`/Training/${camp.id}`}>
                            <p className="card-info">
                                {camp.Location}
                            </p>
                        </Link>
                        <Link to={`/Training/${camp.id}`}>
                            <p className="card-info">
                                {camp.BeginDate} - {camp.EndDate}
                            </p>
                        </Link>
                    </div>
                    <Link to={`/Training/${camp.id}`} className="card-link">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Card