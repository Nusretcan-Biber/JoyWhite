import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarAlt, faMoneyBillWave, faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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


    const getPriceRange = (prices: { price: string }[]) => {
        const numericPrices = prices.map((price) =>
            parseFloat(price.price.replace(".", "").replace(",", "."))
        );
        const minPrice = Math.min(...numericPrices);
        const maxPrice = Math.max(...numericPrices);
        return `${minPrice.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
        })} TL - ${maxPrice.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
        })} TL`;
    };

    // ie campdata
    //   id: 1,
    //   cover: "/images/camps/kampbir.jpg",
    //   name: "JoyWhite Kayak Kulübü",
    //   Location: "Sarıkamış Erzurum",
    //   BeginDate: "09 Ocak",
    //   EndDate: "12 Ocak 2025",
    //   Price: {
    //     adultChildCombination: [
    //       { type: "2 Yetişkin 1 Çocuk", price: "62.200,00" },
    //       { type: "1 Yetişkin 1 Çocuk", price: "52.200,00" },
    //       { type: "1 Yetişkin 2 Çocuk", price: "81.400,00" },
    //       { type: "2 Yetişkin 2 Çocuk", price: "98.400,00" },
    //       { type: "3 Yetişkin 1 Çocuk", price: "79.200,00" },
    //     ],
    //   },

    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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