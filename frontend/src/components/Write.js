import React,{useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {CKEditor }from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom';



function Write(props) {
    const [url, seturl] = useState("");
    const [datas, setDatas] = useState("");
    const [college, setCollege] = useState("");
    const [title, setTitle] = useState("");
    const history = useHistory();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeCollege = (e) => {
        setCollege(e.target.value);
    }

    const makeData =  () => {
        const data = datas.split('<p>')[1];
        const data1 = data.split('</p>')[0];

    }

    const onSubmitEvent = async() => {
        await makeData();
            fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                'title': { title },
                'contents': { datas },
                'college': "간호대학",
                'name': '한상현',
                'comment': '0',
                'posting_date': '0',
                'views': '0',
                'likes':'0'
            })
        }).then(setTitle(""))
            .then(setCollege(""))
        .then(history.push("/board"))

        
    }

    return (
        <WriteBlock>
            <div style={{ display:'flex', flexDirection:'column'}}>
                <input type="text" data={title} placeholder="게시글 제목을 입력해주세요.  " onChange={onChangeTitle}  style={{width:'800px', height:'40px' ,border:'1px solid #D3D3D3', marginBottom:'2%', }}/>
                <select style={{border:'1px solid #D3D3D3', width:'800px' , height:'40px' ,color:'#D3D3D3'}} onChange={onChangeCollege}>
                    <option value="1">간호대학</option>
                    <option value="2">경영대학</option>
                    <option value="3">공과대학</option>
                    <option value="4">농업생명과학대학</option>
                    <option value="5">법과대학</option>
                    <option value="6">사범대학</option>
                    <option value="7">사회과학대학</option>
                    <option value="8">수의과대학</option>
                    <option value="9">약학대학</option>
                </select>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDatas(data);
                    } }
                />

                <div style={{display:'flex', justifyContent:"flex-end"}}>
                    <button className="but1">임시저장</button>
                    <button className="but2" onClick={onSubmitEvent}>완료</button>
                </div>
            </div>
        </WriteBlock>    
    )
}
const WriteBlock = styled.div`
   display: flex;
  align-items: center; 
  justify-content: center;
  margin:3%;

      .but1{
        width:120px;
        height:40px;
        margin:2%;
        background-color:white;
        border : 1px solid 	#48D1CC;
        color:black;
        border-radius:30px;
    }

          .but2{
        width:120px;
        height:40px;
        margin:2%;
        background-color:#48D1CC;
        border : 1px solid 	#48D1CC;
        color:white;
        border-radius:30px;
    }

    .ck-editor__editable {
    min-height: 400px;
        min-width:800px;
    }

    input::placeholder {
        color : #D3D3D3;
    }
}
`;

export default Write;