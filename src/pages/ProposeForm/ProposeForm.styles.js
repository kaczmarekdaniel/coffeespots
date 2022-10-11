import styled from "styled-components";

export const FormPage = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 9vh;

  h1 {
    width: 430px;
    text-align: left;
  }

  form {
    margin-top: 10px;
  }
`;

export const FormFieldGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  flex-direction: row;
`;

export const FormField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  label {
    font-size: 14px;
    width: 100%;
    text-align: left;
    margin-top: 20px;
  }
  .street {
    width: 430px;
  }
`;

export const FormInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 35px;
  background: none;
  border: 2px solid black;
  border-radius: 2px;
  margin-top: 5px;
  padding: 0 15px;
`;

export const Description = styled.textarea`
  width: 430px;
  height: 100px;
  margin-top: 5px;
  border: 2px solid black;
  resize: none;
  padding: 10px 15px;
  border-radius: 2px;
`;

export const AddPhotosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
`;

export const AddPhotos = styled.input`
  height: 40px;
  width: 250px;
  border: 2px solid black;
  margin-right: 25px;
  display: flex;
  &::file-selector-button {
    height: 40px;
    background: none;
    border: none;
    background: #333436;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: 155px;
  height: 40px;
  border: none;
  background-color: #333436;
  color: whitesmoke;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #333436;
    border: 2px solid #333436;
    background: none;
  }
`;
