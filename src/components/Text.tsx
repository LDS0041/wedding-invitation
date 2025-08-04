import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: MaruBuri;
  font-size: 1.3rem;
  margin: 10px;
  color: #3e6d50ff;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: NanumSquareNeoBold;
  font-size: 0.9rem;
  line-height: 0.8;
  margin: 0;
  color: #1b7022ff;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-family: NanumSquareNeo;
  font-size: 0.8rem;
  font-weight: 200;
  line-height: 1.8;
  width: 90%;
  margin-left: auto;   
  margin-right: auto;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
