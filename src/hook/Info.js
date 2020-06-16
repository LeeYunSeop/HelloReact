import React, { useReducer } from 'react';
import useInputs from './../useInputs';

// const reducer = (state, action) => {
//     console.log(state);
//     console.log(action);
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;
    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });
    // const onChange = e => {
    //     dispatch(e.target);
    // }
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;