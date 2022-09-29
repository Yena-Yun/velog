import { useState, useRef, useEffect } from 'react';
import default_thumb from 'Assets/images/default_image.png';

import * as S from './style';

const Input = ({ url, setUrl }) => {
  const inputOpenImageRef = useRef(null);
  const [previewSource, setPreviewSource] = useState(url);

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', previewSource);
    formData.append('upload_preset', 'rwvzsde8');
    formData.append('cloud_name', 'ddupb73kz');
    fetch('https://api.cloudinary.com/v1_1/ddupb73kz/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .then(alert('이미지 업로드가 완료되었습니다.'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setPreviewSource(url);
  }, [url]);

  return (
    <div>
      <S.Preview
        src={previewSource ? previewSource : default_thumb}
        onClick={handleOpenImageRef}
        alt="Thumbnail"
      />
      <S.UploadButton onClick={uploadImage}>업로드하기</S.UploadButton>
      <div>
        <S.UploadInput
          onChange={handleFileInputChange}
          ref={inputOpenImageRef}
        />
      </div>
    </div>
  );
};

export default Input;
