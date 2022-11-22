import React, { useEffect, useState } from 'react'
import styles from './CardModal.module.css'
import cartIcon from '../../assets/cart.svg'
import { postCart, postLikes , deleteLike , getLikes } from '../../services'
import { CartState } from '../../CartContext/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

export const CardModal = ({ card, product, opened, setOpened, id }) => {

  const { state: { cart }, dispatch } = CartState()

  const [modal, setModal] = useState(false)
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)
  
  /* Checking if the item is in the cart. */
  useEffect(() => {
    cart.find(({ id }) => id === product.id) ? setAdded(true) : setAdded(false)
  }, [cart, product])

  /* Checks if the item is in favourites. */
  useEffect(() => {
    getLikes()
    .then(likes => likes.find(({ id }) => id === product.id) ? setLiked(true) : setLiked(false));
  }, [product]);

  // checking if modal is open
  useEffect(() => {
    opened === id ? setModal(true) : setModal(false)
  }, [opened, id])

  const handleLike = ()=>{

    liked ? deleteLike(product.id) : postLikes (product);
    setLiked(!liked);

  }

  
  return (
    <>
      {!modal ?
        <>
          {
            !added ?
              <>
                <div
                  className={styles.disable}
                  onClick={() => { setOpened(id) }}>{card}
                  {added && <span className={styles.added}>Added</span>}
                </div>
              </>
              : <>
                <div className={styles.disable}>{card}
                  {added && <span className={styles.added}>Added</span>}
                </div>
              </>
          }
        </> :
        <div className={styles.card}>

          <p className={styles.like} onClick={()=> handleLike()} ><FontAwesomeIcon icon={ liked ? solidHeart : regularHeart}  /></p>
          <p onClick={() => { setModal(false); setOpened(null) }} className={styles.close}>X</p>
          {card}
          <button
            onClick={() => {
              postCart(product)
                .then(() => { dispatch({ type: "ADD_TO_CART", payload: product }); setModal(false); setOpened(null) });
            }}
            className={styles.addToCart}>Add
            <img src={cartIcon}
              alt='cart logo' />
          </button>
        </div>
      }
    </>
  )
}
