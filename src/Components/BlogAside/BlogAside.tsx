import React from 'react'
import "./BlogAside.css"
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export function BlogAside() {
    const { pathname } = useLocation();

    const blog = [
        {
            title: "Kayak Sporu Hakkında Bilinmesi Gerekenler",
            link: "/KayakSporuHakkindaBilinmesiGerekenler"
        },
        {
            title: "Kayakçılar İçin Önemli Güvenlik Kuralları",
            link: "/KayakcilarIcinOnemliGuvenlikKurallari"
        },
        {
            title: "Sarıkamış Kayak Merkezi",
            link: "/SarikamisKayakMerkezi"
        },
    ]

    const findActive = (link: string) => {
        return pathname === link ? "active" : ""
    }

    return (
        <aside className="blog-aside col-span-1 md:col-span-4">
            <div className="blog-aside-header">
                <h1 className="blog-aside-title">Son Yazılar</h1>
                <div className="flex">
                    <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
                </div>
            </div>
            <div className="blog-aside-content mt-8">
                <ul>
                    {blog.map((item, index) => (
                        <Link to={item.link} className="blog-aside-link">
                            <li key={index} className={`blog-aside-item ${findActive(item.link)}`}>
                                <FontAwesomeIcon icon={faNewspaper} className="blog-aside-icon" />
                                <span className="blog-aside-text">{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </aside >
    )
}
