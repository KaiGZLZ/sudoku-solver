import style from '../stylesheets/ModalError.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';



function ModalError({ modalHidden, setModalHidden }) {

  const shownOrHiddenContainerStyle =  modalHidden ? ' '+ style.hiddenContainer : '';
  const shownOrHiddenModalStyle =  modalHidden ? ' '+ style.hiddenModal : '';

  const clickin = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={`${style.modalContainer}${shownOrHiddenContainerStyle}`} onClick={() => setModalHidden(true)}>
      <div className={`${style.modal}${shownOrHiddenModalStyle}`} onClick={clickin}>
        
        <BiErrorCircle size={100} color='red' />
        Fix the errors first

        <div className={style.modalClose} onClick={() => setModalHidden(true)}>
          <AiFillCloseCircle size={30} />
        </div>
      </div>
    </div>
  )
}

export default ModalError;
