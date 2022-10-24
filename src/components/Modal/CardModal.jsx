import React, { useEffect, useState } from 'react'
import styles from './CardModal.module.css'
import cartIcon from '../../assets/cart.svg'
import { postCart } from '../../services'

export const CardModal = ({ card, product, opened, setOpened, id }) => {

  const [modal, setModal] = useState(false)
  const [added, setAdded] = useState(false)

  const doneAdd = (res) => {
    if (res === 201) {
      setAdded(true);
      setModal(false);
    }
  }

  useEffect(() => {
    opened === id ? setModal(true) : setModal(false)
  }, [opened, id])

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
          <p onClick={() => { setModal(false); setOpened(null) }} className={styles.close}>X</p>
          {card}
          <button onClick={() => { postCart(product).then(res => { doneAdd(res) }) }} className={styles.addToCart}>
            Add
            <img src={cartIcon}
              alt='cart logo' />
          </button>
        </div>
      }
    </>
  )
}
