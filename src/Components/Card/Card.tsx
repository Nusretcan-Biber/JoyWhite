import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './Card.css'
import ScrollAnimation from 'react-animate-on-scroll';

interface Camp {
    id: number;
    cover: string;
    name: string;
    badge?: string;
    Location: string;
    BeginDate: string;
    EndDate: string;
    Price: {
        adultChildCombination: { type: string; price?: string }[];
    };
    description: string;
}

interface CardProps {
    camp: Camp;
}

const Card: React.FC<CardProps> = ({ camp }) => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
            <Link
                to={`/Training/${camp.id}`}
                className="card"
                aria-label={`${camp.name} - ${camp.Location}, ${camp.BeginDate} - ${camp.EndDate}`}
            >
                <div className="card-img">
                    <img src={camp.cover} alt={camp.name} />
                    {camp.badge && <span className="card-badge">{camp.badge}</span>}
                    <div className="card-scrim" aria-hidden="true" />
                    <div className="card-body">
                        <h3 className="card-title">{camp.name}</h3>
                        <p className="card-info">
                            <FontAwesomeIcon icon={faLocationDot} className="card-info-icon" />
                            {camp.Location}
                        </p>
                        <p className="card-info">
                            <FontAwesomeIcon icon={faCalendarDays} className="card-info-icon" />
                            {camp.BeginDate} - {camp.EndDate}
                        </p>
                    </div>
                    <span className="card-arrow" aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </Link>
        </ScrollAnimation>
    )
}

export default Card
