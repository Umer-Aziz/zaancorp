import React,{useState} from 'react'
import style from "@/styles/workflow/addcardbutton.module.css"
const Addcardbutton = () => {

  const [isActive, setIsActive] = useState(false);
  const [addCardActive, setAddCardActive] = useState(false);
  const [selected, setSelected] = useState("");

  const colors = ["pinkDot","yellowDot","BgPurple","BgPurpleDarkLight"];
  const  values = ["ContractRm","AgentBook","W4RTeam","LeadBank"];

  return (
    <>
        <div className={style.addCardContainer}>
             
             <div className={style.addCardWrapper}>

              { addCardActive ? 
              <div className={style.addCard}>
              <div className={style.titleWrapper}>
                <p className={style.titleLabel}>Card Title</p>
                <div onClick={e => {setAddCardActive(false) , setIsActive(false)}}>
                <img className={style.IconClose} src="/icons/close.svg" alt="close icon" />
                </div>
              </div>   
              <form className={style.cardForm}>
              <div className={style.cardNameWrapper}>
                 <input type="text" className={style.cardNameInput} placeholder='Enter card name'/>
              </div>
                 <div className={style.addBtnWrapper}>
                 {/* selector  */}
                  <div className={style.DropdownWrapper}>
                  <div className={style.selectorDropdown}>
                    <div className={style.dropdownBtn} onClick={e => setIsActive(!isActive)}>
                      <span>{ selected == "" ? "Select Project" : selected }</span>
                      <img src="/icons/chevron.svg" alt="arrow icon" />
                    </div>
                    </div>
                    
                    { isActive && <div className={style.dropdownContent}>
                    {
                      values.map((value,index)=>{
                        const color = colors[index]
                        return (
                          <div key={index} className={`${style.dropdownItem} ${selected == value && style.dropdownAcive }`} onClick={(e) => { setSelected(value) , setIsActive(false)}}>
                          <div className={`${style.dropdownItemDot} ${color}`}></div>
                          <span className={style.dropdownItemText}>{value}</span>
                      </div>
                        )
                      })
                    }
                    </div>}
                  </div>

                  {/* btn  */}
                  <div>
                      <button className={style.addBtn}>Add</button>
                    </div>
                 </div>
              </form>             
              </div>
              : <button className={style.addButton} onClick={e => setAddCardActive(true)}>
                <img src="/icons/plus-blue.svg" alt="icon" />
                <span className={style.buttonText}>Add Card</span>
               </button>
               }

             </div>
        </div>
    </>
  )
}

export default Addcardbutton