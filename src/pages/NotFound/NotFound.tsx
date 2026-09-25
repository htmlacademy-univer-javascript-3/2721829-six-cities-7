import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {

    return (
            <div className="page__notfound container">
                <h1>Страница не найдена...</h1>
                <Link to='/'>
                    <b>Вернуться на главную</b>
                </Link>
            </div>
    )
}

export default NotFound