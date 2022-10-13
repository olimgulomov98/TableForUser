import React, {useReducer} from 'react'
import { mock} from './mock'
import { reducer } from './reducer'
import {Container, Header, Table, Tr} from './style'
import '../index.css'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {MdSaveAlt} from 'react-icons/md'



export default function UseReducer() {
    
    const [state, dispatch] = useReducer(reducer, {
        data: localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : mock,
        selected: 'name',
        id: null,
        name: '',
        status: '',
        namee: '',
        statusss: ''
    })

    localStorage.setItem('crud', JSON.stringify(state.data))
  return (
    <Container >
        <Header>
            <Header.Title>Webbrain Academy</Header.Title>
            <Header.Post>{state.data.length} Users</Header.Post>
        </Header>
        <div>
            <Container.input type="text" placeholder="Add User Name" onChange={(e) => dispatch({type: 'change', payload: {valueName: e.target.value}})} style={{width: '40%'}}/>
            <Container.input type="text" placeholder="Add User Status" onChange={(e) => dispatch({type: 'statuss', payload: {valueStatus: e.target.value}})} style={{width: '40%', marginLeft: '24px'}}/>
            <Container.Button type="submit" onClick={() => dispatch({type: 'add'})}>Add</Container.Button>
        </div>
        <Container.input type="text" placeholder='Search...' onChange={(e) => dispatch({type: 'search', payload: {valueEvent: e.target.value}})} />
        <Container.Select onChange={(e)=> dispatch({type: 'select', payload: {selectedOption: e.target.value}})} >
            <option value="name">NAME</option>
            <option value="id">ID</option>
            <option value="status">STATUS</option>
        </Container.Select>
        <Table>
            <thead>
                <Tr>
                    <Tr.Th>ID</Tr.Th>
                    <Tr.Th>NAME</Tr.Th>
                    <Tr.Th>STATUS</Tr.Th>
                    <Tr.Th>Actions</Tr.Th>
                </Tr>
            </thead>
            <tbody>
                {
                    state.data.length ? (
                        state.data.map((value) => {
                            return(
                                <Tr key={value.id}>
                                    <Tr.Td>{value.id}</Tr.Td>
                                    <Tr.Td>{
                                        state.id === value.id 
                                        ?
                                        <input type='text' value={state.name} onChange={(e) => dispatch({type: 'name', payload: {nameEvent: e.target.value}})} />
                                        :
                                        value.name
                                    }</Tr.Td>
                                    <Tr.Td>{
                                        state.id === value.id 
                                        ?
                                        <input type='text' value={state.status} onChange={(e) => dispatch({type: 'status', payload: {statusEvent: e.target.value}})} />
                                        :
                                        value.status
                                        }</Tr.Td>
                                    <Tr.Td>
                                        {
                                            state.id === value.id 
                                            ?
                                            // <button onClick={() => dispatch({type: 'save'})}>save</button>
                                            <MdSaveAlt onClick={() => dispatch({type: 'save'})} />
                                            :
                                            // <button onClick={() => dispatch({type: 'edit', payload: {userId: value.id, userName: value.name, userStatus: value.status}})}>edit</button>
                                            <BiEditAlt onClick={() => dispatch({type: 'edit', payload: {userId: value.id, userName: value.name, userStatus: value.status}})} />
                                        }
                                        {/* <button onClick={() => dispatch({type: 'delete', payload: {userId: value.id}})}>delete</button> */}
                                        <RiDeleteBin6Fill style={{marginLeft: '10px'}} onClick={() => dispatch({type: 'delete', payload: {userId: value.id}})} />
                                    </Tr.Td>
                                </Tr>
                            )
                        })
                    ) : <h4>No Data</h4>
                }   
            </tbody>
        </Table>
        
    </Container>
  )
}
