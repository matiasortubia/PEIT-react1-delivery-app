import React from 'react'
import { useRating } from '../../hooks&aux/useRating'
import styles from './card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { getRestaurants } from '../../services'
import { LocationContext } from '../../App'

const Card = ({ product }) => {
    const rating = useRating(product.rating)
    const [restaurant, setRestaurant] = React.useState([])

    const coords = React.useContext(LocationContext)

    console.log(coords, 'context')
    React.useEffect(() => {
        getRestaurants()
            .then(res => {
                const resFilter = res.filter(e => e.id === product.restaurantId)
                setRestaurant(resFilter)
            })
    }, [product.restaurantId])

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={product.img} alt={product.name} />
            <span></span>
            {restaurant.length > 0 && <h3 className={styles.title}>{restaurant[0].name}</h3>}
            <ul className={styles.ul}>
                {product.category.map(e => (
                    <li key={e} className={styles.li}>{e}</li>
                ))}
                <li className={styles.price}><FontAwesomeIcon icon={faDollarSign} /> {product.price}</li>
            </ul>
            {rating}
        </div>
    )
}

export default React.memo(Card)

