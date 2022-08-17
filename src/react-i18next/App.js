import {useEffect} from "react";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import cookies from "js-cookie"

const languages = [
    {
        code: "en",
        name: "English",
        country_code: "gb"
    },
    {
        code: "uz",
        name: "Uzbek",
        country_code: "uz"
    },
    {
        code: "ru",
        name: "Russian",
        country_code: "ru"
    }
]

export default function App() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const {t} = useTranslation()

    const releaseDate = new Date('2021-03-07')
    const timeDifference = new Date() - releaseDate
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    useEffect(() => {
        console.log('Setting page stuff')
        document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <div className="container">
            <div className="language-select">
                <div className="d-flex justify-content-end align-items-center">
                    <div className="language">
                        <p>
                            <span className="dropdown-item-text">{t('language')}</span>
                        </p>
                        {languages.map(({code, name, country_code}) => (
                            <button key={country_code} onClick={() => {
                                i18next.changeLanguage(code)
                            }}>
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-start">
                <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
                <p>{t('application')}</p>
            </div>
        </div>
    )
}
