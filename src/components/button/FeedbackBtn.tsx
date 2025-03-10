import IcFeedback from '../../assets/icons/IcFeedback';
import { ButtonNameT } from '../../types/type';
import { WhiteCricleBtn } from './Button.styled';

function FeedbackBtn({ name }: ButtonNameT) {
  const goToSite = () => {
    window.open('');
  };

  return (
    <WhiteCricleBtn name={name} onClick={goToSite}>
      <IcFeedback width={'20'} height={'20'} />
    </WhiteCricleBtn>
  );
}

export default FeedbackBtn;
