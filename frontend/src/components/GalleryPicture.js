import React from 'react';
import styled from 'styled-components';

function GalleryPicture({ pictureObj }) {
    return (
        <PicBlock >
            <div style={{display:'flex' , margin:'3%', flexWrap:'wrap'}}>
                <div className="picContainer">
                    <div className="pic">
                        <img className="pic"  src= "../../images/party.jpg"/>
                    </div>
                    <div>
                        <span>사진사진</span>
                        <span style={{float:'right'}}>2-201</span>
                    </div>
                </div>
                <div className="picContainer">
                    <div className="pic">
                        <img className="pic"  src="../../images/party.jpg"/>
                    </div>
                    <div>
                        <span>사진사진</span>
                        <span style={{float:'right'}}>2-201</span>
                    </div>
                </div>
                                <div className="picContainer">
                    <div className="pic">
                        <img className="pic"  src="../../images/party.jpg"/>
                    </div>
                    <div>
                        <span>사진사진</span>
                        <span style={{float:'right'}}>2-201</span>
                    </div>
                </div>
                                <div className="picContainer">
                    <div className="pic">
                        <img className="pic"  src="../../images/party.jpg"/>
                    </div>
                    <div>
                        <span>사진사진</span>
                        <span style={{float:'right'}}>2-201</span>
                    </div>
                </div>
                                <div className="picContainer">
                    <div className="pic">
                        <img className="pic"  src="../../images/party.jpg"/>
                    </div>
                    <div>
                        <span>사진사진</span>
                        <span style={{float:'right'}}>2-201</span>
                    </div>
                </div>
            </div>
        </PicBlock>
    );
}

const PicBlock = styled.div`
    .picContainer{
        width:320px;
        margin-left:1%;
        margin-bottom:1%;
    }
    .pic{
        width:320px;
        height:200px;
    }
`;

export default GalleryPicture;

// function GalleryPicture({ pictureObj }) {
//     return (
//         <PicBlock>
//             <div className="pic">
//                 {pictureObj.attachmentUrl && <img src={pictureObj.attachmentUrl} /> }
//             </div>
//         </PicBlock>
//     );
// }