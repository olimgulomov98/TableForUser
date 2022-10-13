import styled from "styled-components";
import '../index.css'


const Container = styled.div`
    width: 700px;
    height: 500px;
    background-color: #fff;
    margin: auto;
    margin-top: 50px;
    padding: 15px;
    font-family: sans-serif;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: normal;
    scrollbar-color: #777 #555;
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, #cc00ff);
         border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, #00c6ff);
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
Header.Title = styled.h1`
    font-size: 30px;
    color: #cc00ff;
`
Header.Post = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    color: #A3A39E;
`
Container.input = styled.input`
    width: 550px;
    height: 30px;
    padding-left: 15px;
    outline: none;
    margin-top: 10px;
    border: 2px solid #A3A39E;
    border-radius: 3px;
`
Container.Button = styled.button`
    width: 80px;
    height: 30px;
    margin-left: 15px;
    background-color: #008FB0;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
`
Container.Select = styled.select`
    width: 80px;
    height: 30px;
    margin-left: 15px;
    background-color: #008FB0;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
    outline: none;
    text-align: center;
`
const Table = styled.table`
    width: 100%;
    margin-top: 20px;
`
const Tr = styled.tr`
    width: 100%;
    height: 30px;
    border-bottom: 2px solid;
`
Tr.Td = styled.td`
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #4C4C4B;
`
Tr.Th = styled.th`
    font-size: 22px;
    font-weight: 600;
    color: #cc00ff;
`
export {Container, Header, Table, Tr}