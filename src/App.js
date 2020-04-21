import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{ 
  'id' : 1, 
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '남상현', 
  'birthday' : '980212',
  'gender' : '남자', 
  'job' : '대학생' 
},
{ 
  'id' : 2, 
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동', 
  'birthday' : '961222',
  'gender' : '남자', 
  'job' : '프로그래머' 
},
{ 
  'id' : 3, 
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이봉원', 
  'birthday' : '921205',
  'gender' : '남자', 
  'job' : '애니마스터' 
}
]

class App extends React.Component { 
  render(){ 
    return (
      <div>
        {
          customers.map(c => { 
            return ( 
              <Customer
                key={c.id} // 사람마다 id 값을 다르게 주었기 떄문에 id를 key로 활용가능!!!
                id={c.id}
                image={c.image} 
                name={c.name} 
                birthday={c.birthday} 
                gender={c.gender} 
                job={c.job} 
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
