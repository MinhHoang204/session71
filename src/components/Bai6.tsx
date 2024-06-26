import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai6';
import { toggleLanguage } from '../store/reducers/languageSlice';
import { Button } from 'antd';
export default function Bai6() {
    const translations = {
        en: {
          greeting: 'Hello, welcome to our application!',
          toggleButton: 'Switch to Vietnamese',
        },
        vi: {
          greeting: 'Xin chào, chào mừng bạn đến với ứng dụng của chúng tôi!',
          toggleButton: 'Chuyển sang Tiếng Anh',
        },
    };
    const dispatch = useDispatch<AppDispatch>();
    const currentLanguage:any = useSelector((state: RootState) => state.language.currentLanguage);
    const translation = translations[currentLanguage];

  return (
    <div className="App">
      <h1>{translation.greeting}</h1>
      <Button onClick={() => dispatch(toggleLanguage())}>
        {translation.toggleButton}
      </Button>
    </div>
  )
}
