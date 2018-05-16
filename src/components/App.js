import React, { Component } from 'react'
import './App.css'

class App extends Component {
  // state 생성
  state = {
    //  인풋
    input: '',
    // 더미 데이터
    contactData: [
      { name: '박예영', phone: '010-1818-1818' },
      { name: '윤지훈', phone: '010-1818-1818' },
      { name: '김민서', phone: '010-1818-1818' },
      { name: '박건령', phone: '010-1818-1818' },
      { name: '조수현', phone: '010-1818-1818' },
      { name: '인승진', phone: '010-1818-1818' },
      { name: '김민구', phone: '010-1818-1818' },
      { name: '이지훈', phone: '010-1818-1818' },
      { name: '김민규', phone: '010-1818-1818' },
      { name: '최용현', phone: '010-1818-1818' }
    ],

    addName: '',
    addPhone: '',
    change: '',
    changeName: '',
    changePhone: '',
    delete: ''
  }

  // 글자 바꾸는 메소드
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddInfo = e => {
    let a = this.state.contactData
    a = a.filter(DATA => {
      return DATA.name === this.state.addName
    })

    // 맞는 이름이 있을때
    if (a.length !== 0) {
      alert('중복된 이름이라서 추가 불가능 합니다')
    } else {
      // 맞는 이름이 없을때
      let b = this.state.contactData
      b.push({ name: this.state.addName, phone: this.state.addPhone })

      this.setState({
        contactData: b,
        addName: '',
        addPhone: ''
      })

      a = ''
      b = ''
    }
  }

  handleChangeInfo = e => {
    let a = this.state.contactData
    a = a.filter(DATA => {
      return DATA.name === this.state.change
    })

    // 맞는 이름이 있을때
    if (a.length !== 0) {
      let b = this.state.contactData

      for (let A = 0; A < b.length; A++) {
        if (b[A].name === a[0].name) {
          b[A].name = this.state.changeName
          b[A].phone = this.state.changePhone
        }
      }

      this.setState({
        contactData: b,
        changeName: '',
        changePhone: ''
      })
      a = ''
      b = ''
    } else {
      // 맞는 이름이 없을때
      alert('올바른 이름을 입력해 주세요 제발')
    }
  }

  handleDeleteInfo = e => {
    let a = this.state.contactData
    a = a.filter(DATA => {
      return DATA.name === this.state.delete
    })

    // 맞는 이름이 있을때
    if (a.length !== 0) {
      let b = this.state.contactData

      b = b.filter(data => data.name !== a[0].name)

      this.setState({
        contactData: b,
        delete: ''
      })

      a = ''
      b = ''
    } else {
      // 맞는 이름이 없을때
      alert('올바른 이름을 입력해 주세요 제발')
    }
  }

  render() {
    const showTheFuckingData = data => {
      data.sort()
      data = data.filter(DATA => {
        return DATA.name.indexOf(this.state.input) > -1
      })
      return data.map((object, i) => {
        return (
          <div className="people" key={i}>
            {object.name}: {object.phone}
          </div>
        )
      })
    }

    return (
      <div className="main">
        <div className="subject">
          <h1>고객 정보 관리 서비스</h1>
        </div>
        <div className="work">
          <div className="search">
            <input
              type="text"
              name="input"
              value={this.state.input}
              placeholder="검색"
              onChange={this.handleChange}
            />
          </div>
          <div className="flex">
            <div className="contact">
              고객 정보 목록
              {showTheFuckingData(this.state.contactData)}
            </div>
            <div className="change">
              <div className="change-box">
                회원 정보 추가
                <input
                  type="text"
                  name="addName"
                  placeholder="이름 적으세요"
                  value={this.state.addName}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="addPhone"
                  placeholder="전화번호 적으세요"
                  value={this.state.addPhone}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleAddInfo}>추가</button>
              </div>
              <div className="change-box">
                회원 정보 변경
                <input
                  type="text"
                  name="change"
                  placeholder="바꿀 대상 이름"
                  value={this.state.change}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="changeName"
                  placeholder="바꿀 이름"
                  value={this.state.changeName}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="changePhone"
                  placeholder="전화번호"
                  value={this.state.changePhone}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleChangeInfo}>변경</button>
              </div>
              <div className="change-box">
                회원 정보 삭제<input
                  type="text"
                  name="delete"
                  value={this.state.delete}
                  placeholder="이름 적으세요"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleDeleteInfo}>삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
