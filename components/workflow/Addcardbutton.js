import React from 'react'
import style from "@/styles/workflow/addcardbutton.module.css"
const Addcardbutton = () => {
  return (
    <>
        <div className={style.addCardContainer}>
             
             <div className={style.addCardWrapper}>
               {/* <button className={style.addButton}>
                <img src="/icons/plus-blue.svg" alt="icon" />
                <span className={style.buttonText}>Add Card</span>
               </button> */}
            
            {/* card block  */}
              <div className={style.addCard}>
              <div className={style.titleWrapper}>
                <p className={style.titleLabel}>Card Title</p>
                <div>
                <img className={style.IconClose} src="/icons/close.svg" alt="close icon" />
                </div>
              </div>   
              <form className={style.cardForm}>
              <div className={style.cardNameWrapper}>
                 <input type="text" className={style.cardNameInput} placeholder='Enter card name'/>
              </div>
                 <div className={style.addBtnWrapper}>
                 {/* selector  */}
                  <div className={style.selectorContainer}>
                    <select className={style.selectorGroup}>
                      <option >Select Project</option>
                    </select>
                  </div>

                  {/* btn  */}
                  <div>
                      <button className={style.addBtn}>Add</button>
                    </div>
                 </div>
              </form>             
              </div>
             </div>
        </div>
    </>
  )
}

export default Addcardbutton