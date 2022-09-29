import { useCallback, useState } from 'react';
import Editor from 'Components/Utils/Editor';
import Modal from 'Components/Utils/Modal';
import Input from 'Components/Common/Input';
import Button from 'Components/Common/Button';
import MenuApi from 'Common/api';
import { FlexBox } from 'Styles/theme';

import * as S from './style';

const CreatePage = ({ history }) => {
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [condition, setCondition] = useState('');

  const [preview, setPreview] = useState({ title: '', body: '' });
  const [post, setPost] = useState({
    title: '',
    content: '',
    hashTags: [],
    thumbnail: '',
  });

  const { title, content, hashTags, thumbnail } = post;

  const setTitle = (e) => {
    const { value } = e.target;
    setPost({ ...post, title: value });
  };

  const setContent = (e) => {
    const { value } = e.target;
    setPost({ ...post, content: value });
  };

  const addHashTag = (e) => {
    if (e.code === 'Enter') {
      const { value } = e.target;
      setPost({ ...post, hashTags: [...hashTags, value] });

      e.target.value = '';
    }
  };

  const removeHashTag = (selectedTag) => {
    const newTags = hashTags.filter((tag) => tag !== selectedTag);
    setPost({ ...post, hashTags: newTags });
  };

  const setUrl = (e) => {
    const { value } = e.target;
    setPost({ ...post, thumbnail: value });
  };

  const previewPost = () => {
    // setPreview({ title, content, hashTags });
  };

  const savePost = () => {
    const newPost = {
      title,
      content,
      hashTags,
      thumbnail,
    };

    localStorage.setItem('post', JSON.stringify(newPost));
  };

  const loadPost = () => {
    const savedPost = JSON.parse(localStorage.getItem('post'));
    setPost(savedPost);

    setCheck(true);
  };

  const onCreatePost = async () => {
    try {
      await MenuApi.createPost(title, content, hashTags, thumbnail);
      history.push('/');
      console.log('POST 성공!');
    } catch (error) {
      alert(error);
    }
  };

  const onToggleModal = useCallback((condition) => {
    setShowModal(false);

    if (condition) {
      setCondition(condition);
      setShowModal(true);
    }
  }, []);

  const onOpenModal = () => {
    onToggleModal('goToBack');
  };

  // console.log(typeof preview.body);

  return (
    <S.Container>
      <S.WriteContainer>
        <S.WriteHeader justify="between">
          <div>
            <S.WriteTitle
              value={title}
              onChange={setTitle}
              placeholder="제목을 입력하세요"
            />
            <S.WriteLine />

            <S.WriteTagContainer>
              <S.WriteTagContent>
                {hashTags.map((tag, idx) => (
                  <div key={idx} onClick={() => removeHashTag(tag)}>
                    <span>{tag}</span>
                  </div>
                ))}
              </S.WriteTagContent>

              <S.WriteTag
                onKeyPress={addHashTag}
                placeholder="태그를 입력하세요"
              />
            </S.WriteTagContainer>
          </div>

          <Input thumbnail={thumbnail} onChange={setUrl} />
        </S.WriteHeader>

        <S.EditorContainer>
          <Editor content={content} setContent={setContent} />
        </S.EditorContainer>
        <S.WriteFooter justify="between">
          <FlexBox>
            <Button
              style={{
                background: '#fff',
                color: 'rgb(73, 80, 87)',
              }}
              text="🔙 뒤로가기"
              _onClick={onOpenModal}
            />
          </FlexBox>
          <div>
            <Button
              text="임시저장"
              onClick={savePost}
              style={{
                background: 'rgb(233, 236, 239)',
                color: 'rgb(73, 80, 87)',
                marginRight: '10px',
              }}
            />
            <Button
              text="불러오기"
              onClick={loadPost}
              style={{
                background: 'rgb(233, 236, 239)',
                color: 'rgb(73, 80, 87)',
                marginRight: '10px',
              }}
            />
            <Button
              text="미리보기"
              _onClick={previewPost}
              style={{
                background: 'rgb(233, 236, 239)',
                color: 'rgb(73, 80, 87)',
                marginRight: '10px',
              }}
            />
            <Button text="출간하기" onClick={onCreatePost} />
          </div>
        </S.WriteFooter>
      </S.WriteContainer>

      <S.PreviewContainer>
        <div>
          <h2>{preview.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: preview.body }}></div>
        </div>
      </S.PreviewContainer>

      {showModal && (
        <Modal
          title="포스트 작성 취소"
          description="정말 페이지를 벗어나시겠습니까?"
          modalLink="/"
          onToggleModal={onToggleModal}
          condition={condition}
          history={history}
        />
      )}
    </S.Container>
  );
};

export default CreatePage;
